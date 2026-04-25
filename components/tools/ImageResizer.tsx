'use client';
import { useState, useRef, useCallback } from 'react';

interface Preset {
  label: string;
  w: number;
  h: number;
  platform: string;
}

const PRESETS: Preset[] = [
  { label: 'Feed (1080x1080)', w: 1080, h: 1080, platform: 'Instagram' },
  { label: 'Story (1080x1920)', w: 1080, h: 1920, platform: 'Instagram' },
  { label: 'Landscape (1080x566)', w: 1080, h: 566, platform: 'Instagram' },
  { label: 'Link (1200x630)', w: 1200, h: 630, platform: 'Facebook' },
  { label: 'Cover (820x312)', w: 820, h: 312, platform: 'Facebook' },
  { label: 'Header (1600x900)', w: 1600, h: 900, platform: 'Twitter' },
  { label: 'Post (1200x675)', w: 1200, h: 675, platform: 'Twitter' },
  { label: 'Post (1200x627)', w: 1200, h: 627, platform: 'LinkedIn' },
  { label: 'Banner (1584x396)', w: 1584, h: 396, platform: 'LinkedIn' },
  { label: 'Thumbnail (1280x720)', w: 1280, h: 720, platform: 'YouTube' },
  { label: 'Banner (2560x1440)', w: 2560, h: 1440, platform: 'YouTube' },
  { label: 'Video (1080x1920)', w: 1080, h: 1920, platform: 'TikTok' },
];

export function ImageResizer() {
  const [image, setImage] = useState<HTMLImageElement | null>(null);
  const [fileName, setFileName] = useState('');
  const [preset, setPreset] = useState<Preset>(PRESETS[0]);
  const [mode, setMode] = useState<'crop' | 'fit'>('crop');
  const [previewUrl, setPreviewUrl] = useState('');
  const [dragging, setDragging] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const processImage = useCallback((img: HTMLImageElement, p: Preset, m: 'crop' | 'fit') => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    canvas.width = p.w;
    canvas.height = p.h;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    if (m === 'crop') {
      const scale = Math.max(p.w / img.width, p.h / img.height);
      const sw = p.w / scale;
      const sh = p.h / scale;
      const sx = (img.width - sw) / 2;
      const sy = (img.height - sh) / 2;
      ctx.drawImage(img, sx, sy, sw, sh, 0, 0, p.w, p.h);
    } else {
      ctx.fillStyle = '#FFFFFF';
      ctx.fillRect(0, 0, p.w, p.h);
      const scale = Math.min(p.w / img.width, p.h / img.height);
      const dw = img.width * scale;
      const dh = img.height * scale;
      const dx = (p.w - dw) / 2;
      const dy = (p.h - dh) / 2;
      ctx.drawImage(img, 0, 0, img.width, img.height, dx, dy, dw, dh);
    }

    setPreviewUrl(canvas.toDataURL('image/png'));
  }, []);

  const loadImage = useCallback((file: File) => {
    setFileName(file.name);
    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        setImage(img);
        processImage(img, preset, mode);
      };
      img.src = e.target?.result as string;
    };
    reader.readAsDataURL(file);
  }, [preset, mode, processImage]);

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) loadImage(file);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragging(false);
    const file = e.dataTransfer.files?.[0];
    if (file && file.type.startsWith('image/')) loadImage(file);
  };

  const handlePreset = (p: Preset) => {
    setPreset(p);
    if (image) processImage(image, p, mode);
  };

  const handleMode = (m: 'crop' | 'fit') => {
    setMode(m);
    if (image) processImage(image, preset, m);
  };

  const handleDownload = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    canvas.toBlob((blob) => {
      if (!blob) return;
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      const ext = fileName.split('.').pop() || 'png';
      const base = fileName.replace(/\.[^.]+$/, '');
      a.download = `${base}_${preset.w}x${preset.h}.${ext}`;
      a.click();
      URL.revokeObjectURL(url);
    }, 'image/png');
  };

  const handleReset = () => {
    setImage(null);
    setFileName('');
    setPreviewUrl('');
    setPreset(PRESETS[0]);
    setMode('crop');
    if (inputRef.current) inputRef.current.value = '';
  };

  const platforms = Array.from(new Set(PRESETS.map((p) => p.platform)));

  return (
    <div className="space-y-6">
      <div className="rounded-xl p-6" style={{ backgroundColor: 'var(--color-bg-card)', border: '1px solid var(--color-border)', boxShadow: 'var(--shadow-md)' }}>
        {/* Upload area */}
        <div
          className="rounded-lg p-8 text-center cursor-pointer transition-all"
          style={{
            border: '2px dashed',
            borderColor: dragging ? 'var(--color-brand)' : 'var(--color-border)',
            backgroundColor: dragging ? 'var(--color-brand-lightest)' : 'var(--color-bg-muted)',
          }}
          onClick={() => inputRef.current?.click()}
          onDragOver={(e) => { e.preventDefault(); setDragging(true); }}
          onDragLeave={() => setDragging(false)}
          onDrop={handleDrop}
        >
          <input ref={inputRef} type="file" accept="image/*" onChange={handleFile} className="hidden" />
          <div className="text-4xl mb-3">{image ? '\u{1F5BC}️' : '\u{1F4E4}'}</div>
          {image ? (
            <div>
              <p className="font-medium" style={{ color: 'var(--color-text-heading)' }}>{fileName}</p>
              <p className="text-sm mt-1" style={{ color: 'var(--color-text-tertiary)' }}>
                Original: {image.width} x {image.height}px • Click or drop to replace
              </p>
            </div>
          ) : (
            <div>
              <p className="font-medium" style={{ color: 'var(--color-text-heading)' }}>Drop an image here or click to upload</p>
              <p className="text-sm mt-1" style={{ color: 'var(--color-text-tertiary)' }}>Supports JPG, PNG, WebP, GIF</p>
            </div>
          )}
        </div>

        {/* Platform presets */}
        <div className="mt-6">
          <label className="block font-semibold mb-3" style={{ color: 'var(--color-text-heading)' }}>Size Preset</label>
          {platforms.map((plat) => (
            <div key={plat} className="mb-3">
              <p className="text-sm font-medium mb-2" style={{ color: 'var(--color-text-tertiary)' }}>{plat}</p>
              <div className="flex flex-wrap gap-2">
                {PRESETS.filter((p) => p.platform === plat).map((p) => (
                  <button
                    key={`${p.w}x${p.h}`}
                    onClick={() => handlePreset(p)}
                    className="px-3 py-1.5 rounded-lg text-sm font-medium transition-all cursor-pointer"
                    style={{
                      backgroundColor: preset === p ? 'var(--color-brand)' : 'var(--color-bg-secondary)',
                      color: preset === p ? '#FFFFFF' : 'var(--color-text-secondary)',
                      border: '1px solid',
                      borderColor: preset === p ? 'var(--color-brand)' : 'var(--color-border)',
                    }}
                  >
                    {p.label}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Mode toggle */}
        <div className="mt-4">
          <label className="block font-semibold mb-2" style={{ color: 'var(--color-text-heading)' }}>Resize Mode</label>
          <div className="flex gap-2">
            {(['crop', 'fit'] as const).map((m) => (
              <button
                key={m}
                onClick={() => handleMode(m)}
                className="px-4 py-2 rounded-lg text-sm font-medium transition-all cursor-pointer capitalize"
                style={{
                  backgroundColor: mode === m ? 'var(--color-brand)' : 'var(--color-bg-secondary)',
                  color: mode === m ? '#FFFFFF' : 'var(--color-text-secondary)',
                  border: '1px solid',
                  borderColor: mode === m ? 'var(--color-brand)' : 'var(--color-border)',
                }}
              >
                {m === 'crop' ? 'Crop to Fill' : 'Fit with Padding'}
              </button>
            ))}
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex gap-3 mt-6">
          {image && previewUrl && (
            <button
              onClick={handleDownload}
              className="px-6 py-3 rounded-lg font-semibold transition-all cursor-pointer"
              style={{ backgroundColor: 'var(--color-brand)', color: '#FFFFFF' }}
            >
              Download {preset.w}x{preset.h}
            </button>
          )}
          <button
            onClick={handleReset}
            className="px-6 py-3 rounded-lg font-semibold transition-all cursor-pointer"
            style={{ backgroundColor: 'var(--color-bg-secondary)', color: 'var(--color-text-secondary)', border: '1px solid var(--color-border)' }}
          >
            Reset
          </button>
        </div>
      </div>

      {/* Preview */}
      {previewUrl && (
        <div className="rounded-xl p-6" style={{ backgroundColor: 'var(--color-bg-card)', border: '1px solid var(--color-border)', boxShadow: 'var(--shadow-md)' }}>
          <h3 className="font-semibold mb-3" style={{ color: 'var(--color-text-heading)' }}>
            Preview ({preset.w} x {preset.h}px • {mode === 'crop' ? 'Cropped' : 'Fitted'})
          </h3>
          <div className="flex justify-center rounded-lg p-4" style={{ backgroundColor: 'var(--color-bg-muted)' }}>
            <img
              src={previewUrl}
              alt="Resized preview"
              className="max-w-full max-h-96 rounded"
              style={{ border: '1px solid var(--color-border)' }}
            />
          </div>
        </div>
      )}

      <canvas ref={canvasRef} className="hidden" />
    </div>
  );
}
