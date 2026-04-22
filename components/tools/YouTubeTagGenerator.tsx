'use client';
import { useState, useMemo } from 'react';
import { tagCategories, longTailSuffixes } from '@/lib/youtube-tag-data';
import { CopyButton } from '@/components/ui/CopyButton';

export function YouTubeTagGenerator() {
  const [topic, setTopic] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [generated, setGenerated] = useState(false);

  const matchedTags = useMemo(() => {
    if (!topic && !selectedCategory) return [];
    const lower = topic.toLowerCase();
    const matched = tagCategories.filter((cat) => {
      if (selectedCategory && cat.name === selectedCategory) return true;
      if (!lower) return false;
      return cat.keywords.some((kw) => lower.includes(kw) || kw.includes(lower));
    });
    const tags = matched.flatMap((c) => c.tags);
    tags.sort((a, b) => b.relevance - a.relevance);
    return Array.from(new Map(tags.map((t) => [t.tag, t])).values());
  }, [topic, selectedCategory]);

  const longTailTags = useMemo(() => {
    if (!topic) return [];
    const clean = topic.trim().toLowerCase();
    return longTailSuffixes.map((suffix) => ({
      tag: `${clean} ${suffix}`,
      relevance: 40 + Math.floor(Math.random() * 30),
    }));
  }, [topic]);

  const allTags = [...matchedTags, ...longTailTags];
  const allText = allTags.map((t) => t.tag).join(', ');
  const charCount = allText.length;
  const charPct = Math.min((charCount / 500) * 100, 100);

  const handleGenerate = () => setGenerated(true);
  const handleReset = () => {
    setTopic('');
    setSelectedCategory('');
    setGenerated(false);
  };

  return (
    <div className="space-y-6">
      <div className="rounded-xl p-6" style={{ backgroundColor: 'var(--color-bg-card)', border: '1px solid var(--color-border)', boxShadow: 'var(--shadow-md)' }}>
        <div className="mb-4">
          <label className="block font-semibold mb-2" style={{ color: 'var(--color-text-heading)' }}>Video Topic or Title</label>
          <input type="text" value={topic} onChange={(e) => setTopic(e.target.value)}
            placeholder="e.g. how to edit videos, gaming setup tour..."
            className="w-full px-4 py-3 rounded-lg text-base outline-none"
            style={{ backgroundColor: 'var(--color-bg-input)', border: '1px solid var(--color-border)', color: 'var(--color-text-primary)' }}
            onFocus={(e) => { e.currentTarget.style.borderColor = 'var(--color-brand)'; }}
            onBlur={(e) => { e.currentTarget.style.borderColor = 'var(--color-border)'; }}
          />
        </div>

        <div className="mb-4">
          <label className="block font-semibold mb-2" style={{ color: 'var(--color-text-heading)' }}>Category</label>
          <div className="flex flex-wrap gap-2">
            <button onClick={() => setSelectedCategory('')}
              className="px-3 py-1.5 rounded-full text-sm font-medium transition-all cursor-pointer"
              style={{ backgroundColor: !selectedCategory ? 'var(--color-brand)' : 'var(--color-bg-secondary)', color: !selectedCategory ? '#FFFFFF' : 'var(--color-text-secondary)', border: '1px solid', borderColor: !selectedCategory ? 'var(--color-brand)' : 'var(--color-border)' }}>
              All
            </button>
            {tagCategories.map((cat) => (
              <button key={cat.name} onClick={() => setSelectedCategory(cat.name)}
                className="px-3 py-1.5 rounded-full text-sm font-medium transition-all cursor-pointer capitalize"
                style={{ backgroundColor: selectedCategory === cat.name ? 'var(--color-brand)' : 'var(--color-bg-secondary)', color: selectedCategory === cat.name ? '#FFFFFF' : 'var(--color-text-secondary)', border: '1px solid', borderColor: selectedCategory === cat.name ? 'var(--color-brand)' : 'var(--color-border)' }}>
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        <div className="flex gap-3">
          <button onClick={handleGenerate} disabled={!topic.trim() && !selectedCategory}
            className="px-6 py-3 rounded-lg font-semibold transition-all cursor-pointer"
            style={{ backgroundColor: (!topic.trim() && !selectedCategory) ? 'var(--color-bg-muted)' : 'var(--color-brand)', color: (!topic.trim() && !selectedCategory) ? 'var(--color-text-muted)' : '#FFFFFF' }}>
            Generate Tags
          </button>
          <button onClick={handleReset}
            className="px-6 py-3 rounded-lg font-semibold transition-all cursor-pointer"
            style={{ backgroundColor: 'var(--color-bg-secondary)', color: 'var(--color-text-secondary)', border: '1px solid var(--color-border)' }}>
            Reset
          </button>
        </div>
      </div>

      {generated && allTags.length > 0 && (
        <div className="rounded-xl p-6" style={{ backgroundColor: 'var(--color-bg-card)', border: '1px solid var(--color-border)', boxShadow: 'var(--shadow-md)' }}>
          <div className="flex items-center justify-between mb-3">
            <span className="font-semibold" style={{ color: 'var(--color-text-heading)' }}>{allTags.length} tags generated</span>
            <span className="text-sm font-medium" style={{ color: charCount > 500 ? 'var(--color-error)' : 'var(--color-text-tertiary)' }}>{charCount}/500 characters</span>
          </div>
          <div className="w-full h-2 rounded-full mb-4" style={{ backgroundColor: 'var(--color-bg-secondary)' }}>
            <div className="h-full rounded-full transition-all" style={{ width: `${charPct}%`, backgroundColor: charCount > 500 ? 'var(--color-error)' : charPct > 80 ? 'var(--color-brand)' : 'var(--color-success)' }} />
          </div>

          {matchedTags.length > 0 && (
            <div className="mb-4">
              <h3 className="text-sm font-semibold mb-2" style={{ color: 'var(--color-text-heading)' }}>Base Tags</h3>
              <div className="flex flex-wrap gap-2">
                {matchedTags.map((t, i) => (
                  <span key={i} className="px-3 py-1.5 rounded-full text-sm cursor-pointer"
                    style={{ backgroundColor: 'var(--color-brand-lightest)', color: 'var(--color-brand-dark)' }}
                    onClick={() => navigator.clipboard.writeText(t.tag)} title="Click to copy">
                    {t.tag} <span className="text-xs opacity-60">{t.relevance}</span>
                  </span>
                ))}
              </div>
            </div>
          )}

          {longTailTags.length > 0 && (
            <div className="mb-4">
              <h3 className="text-sm font-semibold mb-2" style={{ color: 'var(--color-text-heading)' }}>Long-Tail Variations</h3>
              <div className="flex flex-wrap gap-2">
                {longTailTags.map((t, i) => (
                  <span key={i} className="px-3 py-1.5 rounded-full text-sm cursor-pointer"
                    style={{ backgroundColor: 'var(--color-bg-secondary)', color: 'var(--color-text-secondary)' }}
                    onClick={() => navigator.clipboard.writeText(t.tag)} title="Click to copy">
                    {t.tag}
                  </span>
                ))}
              </div>
            </div>
          )}

          <CopyButton text={allText} label="Copy All Tags" />
        </div>
      )}
    </div>
  );
}
