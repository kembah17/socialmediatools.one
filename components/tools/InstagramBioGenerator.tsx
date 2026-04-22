'use client';
import { useState } from 'react';
import { bioTemplates, bioStyles, emojiCollections, ctaOptions, type BioStyle } from '@/lib/bio-data';
import { CopyButton } from '@/components/ui/CopyButton';

export function InstagramBioGenerator() {
  const [name, setName] = useState('');
  const [profession, setProfession] = useState('');
  const [interests, setInterests] = useState('');
  const [cta, setCta] = useState(ctaOptions[0]);
  const [style, setStyle] = useState<BioStyle>('creative');
  const [bios, setBios] = useState<string[]>([]);

  const handleGenerate = () => {
    if (!profession.trim()) return;
    const interestList = interests.split(',').map((s) => s.trim()).filter(Boolean);
    const i1 = interestList[0] || 'life';
    const i2 = interestList[1] || 'creativity';
    const i3 = interestList[2] || 'growth';

    const matching = bioTemplates.filter((t) => t.style === style);
    const shuffled = [...matching].sort(() => Math.random() - 0.5).slice(0, 6);

    const emojiKeys = Object.keys(emojiCollections);
    const emojiSet = emojiCollections[emojiKeys[Math.floor(Math.random() * emojiKeys.length)]];

    const results = shuffled.map((tpl) => {
      let text = tpl.template
        .replace(/\{name\}/g, name.trim() || 'Your Name')
        .replace(/\{profession\}/g, profession.trim())
        .replace(/\{interest1\}/g, i1)
        .replace(/\{interest2\}/g, i2)
        .replace(/\{interest3\}/g, i3)
        .replace(/\{cta\}/g, cta)
        .replace(/\{emoji1\}/g, emojiSet[0] || '')
        .replace(/\{emoji2\}/g, emojiSet[1] || '')
        .replace(/\{emoji3\}/g, emojiSet[2] || '');
      return text;
    });

    setBios(results);
  };

  const handleReset = () => {
    setName('');
    setProfession('');
    setInterests('');
    setCta(ctaOptions[0]);
    setStyle('creative');
    setBios([]);
  };

  return (
    <div className="space-y-6">
      <div className="rounded-xl p-6" style={{ backgroundColor: 'var(--color-bg-card)', border: '1px solid var(--color-border)', boxShadow: 'var(--shadow-md)' }}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block font-semibold mb-2" style={{ color: 'var(--color-text-heading)' }}>Your Name</label>
            <input
              type="text" value={name} onChange={(e) => setName(e.target.value)}
              placeholder="e.g. Sarah" className="w-full px-4 py-3 rounded-lg text-base outline-none"
              style={{ backgroundColor: 'var(--color-bg-input)', border: '1px solid var(--color-border)', color: 'var(--color-text-primary)' }}
              onFocus={(e) => { e.currentTarget.style.borderColor = 'var(--color-brand)'; }}
              onBlur={(e) => { e.currentTarget.style.borderColor = 'var(--color-border)'; }}
            />
          </div>
          <div>
            <label className="block font-semibold mb-2" style={{ color: 'var(--color-text-heading)' }}>Profession *</label>
            <input
              type="text" value={profession} onChange={(e) => setProfession(e.target.value)}
              placeholder="e.g. Photographer, Designer" className="w-full px-4 py-3 rounded-lg text-base outline-none"
              style={{ backgroundColor: 'var(--color-bg-input)', border: '1px solid var(--color-border)', color: 'var(--color-text-primary)' }}
              onFocus={(e) => { e.currentTarget.style.borderColor = 'var(--color-brand)'; }}
              onBlur={(e) => { e.currentTarget.style.borderColor = 'var(--color-border)'; }}
            />
          </div>
        </div>

        <div className="mb-4">
          <label className="block font-semibold mb-2" style={{ color: 'var(--color-text-heading)' }}>Interests (comma-separated)</label>
          <input
            type="text" value={interests} onChange={(e) => setInterests(e.target.value)}
            placeholder="e.g. travel, coffee, design" className="w-full px-4 py-3 rounded-lg text-base outline-none"
            style={{ backgroundColor: 'var(--color-bg-input)', border: '1px solid var(--color-border)', color: 'var(--color-text-primary)' }}
            onFocus={(e) => { e.currentTarget.style.borderColor = 'var(--color-brand)'; }}
            onBlur={(e) => { e.currentTarget.style.borderColor = 'var(--color-border)'; }}
          />
        </div>

        <div className="mb-4">
          <label className="block font-semibold mb-2" style={{ color: 'var(--color-text-heading)' }}>Call to Action</label>
          <select
            value={cta} onChange={(e) => setCta(e.target.value)}
            className="w-full px-4 py-3 rounded-lg text-base outline-none cursor-pointer"
            style={{ backgroundColor: 'var(--color-bg-input)', border: '1px solid var(--color-border)', color: 'var(--color-text-primary)' }}
          >
            {ctaOptions.map((o) => <option key={o} value={o}>{o}</option>)}
          </select>
        </div>

        <div className="mb-4">
          <label className="block font-semibold mb-2" style={{ color: 'var(--color-text-heading)' }}>Style</label>
          <div className="flex flex-wrap gap-2">
            {bioStyles.map((s) => (
              <button
                key={s} onClick={() => setStyle(s)}
                className="px-4 py-2 rounded-lg text-sm font-medium transition-all cursor-pointer capitalize"
                style={{
                  backgroundColor: style === s ? 'var(--color-brand)' : 'var(--color-bg-secondary)',
                  color: style === s ? '#FFFFFF' : 'var(--color-text-secondary)',
                  border: '1px solid',
                  borderColor: style === s ? 'var(--color-brand)' : 'var(--color-border)',
                }}
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        <div className="flex gap-3">
          <button onClick={handleGenerate} disabled={!profession.trim()}
            className="px-6 py-3 rounded-lg font-semibold transition-all cursor-pointer"
            style={{ backgroundColor: !profession.trim() ? 'var(--color-bg-muted)' : 'var(--color-brand)', color: !profession.trim() ? 'var(--color-text-muted)' : '#FFFFFF' }}>
            Generate Bios
          </button>
          <button onClick={handleReset}
            className="px-6 py-3 rounded-lg font-semibold transition-all cursor-pointer"
            style={{ backgroundColor: 'var(--color-bg-secondary)', color: 'var(--color-text-secondary)', border: '1px solid var(--color-border)' }}>
            Reset
          </button>
        </div>
      </div>

      {bios.length > 0 && (
        <div className="space-y-4">
          {bios.map((bio, i) => {
            const len = bio.length;
            const over = len > 150;
            const pct = Math.min((len / 150) * 100, 100);
            return (
              <div key={i} className="rounded-xl p-5" style={{ backgroundColor: 'var(--color-bg-card)', border: '1px solid var(--color-border)', boxShadow: 'var(--shadow-sm)' }}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium" style={{ color: 'var(--color-text-tertiary)' }}>Bio {i + 1}</span>
                  <span className="text-sm font-medium" style={{ color: over ? 'var(--color-error)' : 'var(--color-text-tertiary)' }}>{len}/150</span>
                </div>
                <div className="w-full h-1.5 rounded-full mb-3" style={{ backgroundColor: 'var(--color-bg-secondary)' }}>
                  <div className="h-full rounded-full transition-all" style={{ width: `${pct}%`, backgroundColor: over ? 'var(--color-error)' : pct > 80 ? 'var(--color-brand)' : 'var(--color-success)' }} />
                </div>
                <pre className="whitespace-pre-wrap font-sans mb-3 leading-relaxed" style={{ color: 'var(--color-text-primary)' }}>{bio}</pre>
                {over && <p className="text-sm mb-2" style={{ color: 'var(--color-error)' }}>Exceeds 150 character limit by {len - 150}</p>}
                <CopyButton text={bio} />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
