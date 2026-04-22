'use client';
import { useState } from 'react';
import { captionTemplates, platformLimits, emojiByTone, hookTemplates, ctaTemplates, type Platform, type Tone } from '@/lib/caption-data';
import { CopyButton } from '@/components/ui/CopyButton';

export function CaptionGenerator() {
  const [platform, setPlatform] = useState<Platform>('instagram');
  const [tone, setTone] = useState<Tone>('casual');
  const [topic, setTopic] = useState('');
  const [captions, setCaptions] = useState<string[]>([]);

  const platforms: { key: Platform; label: string }[] = [
    { key: 'instagram', label: 'Instagram' },
    { key: 'facebook', label: 'Facebook' },
    { key: 'linkedin', label: 'LinkedIn' },
    { key: 'twitter', label: 'Twitter' },
    { key: 'tiktok', label: 'TikTok' },
  ];

  const tones: { key: Tone; label: string }[] = [
    { key: 'professional', label: 'Professional' },
    { key: 'casual', label: 'Casual' },
    { key: 'funny', label: 'Funny' },
    { key: 'inspirational', label: 'Inspirational' },
    { key: 'promotional', label: 'Promotional' },
  ];

  const handleGenerate = () => {
    if (!topic.trim()) return;
    const matching = captionTemplates.filter(
      (t) => t.platform === platform && t.tone === tone
    );
    const emojis = emojiByTone[tone] || emojiByTone.casual;
    const hooks = hookTemplates;
    const ctas = ctaTemplates;

    const results: string[] = [];
    const shuffled = [...matching].sort(() => Math.random() - 0.5);
    const selected = shuffled.slice(0, 5);

    selected.forEach((tpl, idx) => {
      let text = tpl.text.replace(/\{topic\}/g, topic.trim());
      const emoji = emojis[idx % emojis.length];
      text = text.replace(/\{emoji\}/g, emoji);
      if (text.includes('{hook}')) {
        const hook = hooks[idx % hooks.length].replace(/\{topic\}/g, topic.trim());
        text = text.replace(/\{hook\}/g, hook);
      }
      if (text.includes('{cta}')) {
        const cta = ctas[idx % ctas.length];
        text = text.replace(/\{cta\}/g, cta);
      }
      results.push(text);
    });

    if (results.length === 0) {
      const fallback = `${emojis[0]} ${topic.trim()} - sharing my thoughts on this! ${emojis[1]}\n\n${ctas[0]}`;
      results.push(fallback);
    }

    setCaptions(results);
  };

  const handleReset = () => {
    setPlatform('instagram');
    setTone('casual');
    setTopic('');
    setCaptions([]);
  };

  const charLimit = platformLimits[platform];

  return (
    <div className="space-y-6">
      <div className="rounded-xl p-6" style={{ backgroundColor: 'var(--color-bg-card)', border: '1px solid var(--color-border)', boxShadow: 'var(--shadow-md)' }}>
        <div className="mb-4">
          <label className="block font-semibold mb-2" style={{ color: 'var(--color-text-heading)' }}>Platform</label>
          <div className="flex flex-wrap gap-2">
            {platforms.map((p) => (
              <button
                key={p.key}
                onClick={() => setPlatform(p.key)}
                className="px-4 py-2 rounded-lg text-sm font-medium transition-all cursor-pointer"
                style={{
                  backgroundColor: platform === p.key ? 'var(--color-brand)' : 'var(--color-bg-secondary)',
                  color: platform === p.key ? '#FFFFFF' : 'var(--color-text-secondary)',
                  border: '1px solid',
                  borderColor: platform === p.key ? 'var(--color-brand)' : 'var(--color-border)',
                }}
              >
                {p.label}
              </button>
            ))}
          </div>
        </div>

        <div className="mb-4">
          <label className="block font-semibold mb-2" style={{ color: 'var(--color-text-heading)' }}>Tone</label>
          <div className="flex flex-wrap gap-2">
            {tones.map((t) => (
              <button
                key={t.key}
                onClick={() => setTone(t.key)}
                className="px-4 py-2 rounded-lg text-sm font-medium transition-all cursor-pointer"
                style={{
                  backgroundColor: tone === t.key ? 'var(--color-brand)' : 'var(--color-bg-secondary)',
                  color: tone === t.key ? '#FFFFFF' : 'var(--color-text-secondary)',
                  border: '1px solid',
                  borderColor: tone === t.key ? 'var(--color-brand)' : 'var(--color-border)',
                }}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>

        <div className="mb-4">
          <label className="block font-semibold mb-2" style={{ color: 'var(--color-text-heading)' }}>Topic or Product</label>
          <input
            type="text"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            placeholder="e.g. morning coffee, new product launch, fitness journey..."
            className="w-full px-4 py-3 rounded-lg text-base outline-none transition-all"
            style={{ backgroundColor: 'var(--color-bg-input)', border: '1px solid var(--color-border)', color: 'var(--color-text-primary)' }}
            onFocus={(e) => { e.currentTarget.style.borderColor = 'var(--color-brand)'; }}
            onBlur={(e) => { e.currentTarget.style.borderColor = 'var(--color-border)'; }}
          />
        </div>

        <div className="flex gap-3">
          <button
            onClick={handleGenerate}
            disabled={!topic.trim()}
            className="px-6 py-3 rounded-lg font-semibold transition-all cursor-pointer"
            style={{
              backgroundColor: !topic.trim() ? 'var(--color-bg-muted)' : 'var(--color-brand)',
              color: !topic.trim() ? 'var(--color-text-muted)' : '#FFFFFF',
            }}
          >
            Generate Captions
          </button>
          <button
            onClick={handleReset}
            className="px-6 py-3 rounded-lg font-semibold transition-all cursor-pointer"
            style={{ backgroundColor: 'var(--color-bg-secondary)', color: 'var(--color-text-secondary)', border: '1px solid var(--color-border)' }}
          >
            Reset
          </button>
        </div>
      </div>

      {captions.length > 0 && (
        <div className="space-y-4">
          {captions.map((caption, i) => {
            const len = caption.length;
            const overLimit = len > charLimit;
            return (
              <div
                key={i}
                className="rounded-xl p-5"
                style={{ backgroundColor: 'var(--color-bg-card)', border: '1px solid var(--color-border)', boxShadow: 'var(--shadow-sm)' }}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium" style={{ color: 'var(--color-text-tertiary)' }}>Caption {i + 1}</span>
                  <span
                    className="text-sm font-medium"
                    style={{ color: overLimit ? 'var(--color-error)' : 'var(--color-text-tertiary)' }}
                  >
                    {len}/{charLimit}
                  </span>
                </div>
                <p className="whitespace-pre-wrap mb-3 leading-relaxed" style={{ color: 'var(--color-text-primary)' }}>
                  {caption}
                </p>
                {overLimit && (
                  <p className="text-sm mb-2" style={{ color: 'var(--color-error)' }}>
                    Exceeds {platform} character limit by {len - charLimit} characters
                  </p>
                )}
                <CopyButton text={caption} />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
