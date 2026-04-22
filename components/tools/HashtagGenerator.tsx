'use client';
import { useState, useMemo } from 'react';
import { categories, trendingHashtags, platformLimits, type HashtagCategory } from '@/lib/hashtag-data';
import { CopyButton } from '@/components/ui/CopyButton';

type Platform = 'instagram' | 'twitter' | 'tiktok' | 'linkedin';
type Tab = 'popular' | 'niche' | 'trending';

export function HashtagGenerator() {
  const [topic, setTopic] = useState('');
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [platform, setPlatform] = useState<Platform>('instagram');
  const [activeTab, setActiveTab] = useState<Tab>('popular');
  const [generated, setGenerated] = useState(false);

  const toggleCategory = (cat: string) => {
    setSelectedCategories((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]
    );
  };

  const matchedCategories = useMemo(() => {
    if (!topic && selectedCategories.length === 0) return [];
    const lower = topic.toLowerCase();
    return categories.filter((cat) => {
      if (selectedCategories.length > 0 && selectedCategories.includes(cat.name)) return true;
      if (!lower) return false;
      return cat.keywords.some((kw) => lower.includes(kw) || kw.includes(lower));
    });
  }, [topic, selectedCategories]);

  const limit = platformLimits[platform];

  const suffixes = ['tips', 'life', 'goals', 'daily', 'love', 'vibes', 'inspo', 'community'];

  const popularHashtags = useMemo(() => {
    const tags = matchedCategories.flatMap((c) => c.hashtags);
    tags.sort((a, b) => b.popularity - a.popularity);
    const unique = Array.from(new Map(tags.map((t) => [t.tag, t])).values());
    return unique.slice(0, limit);
  }, [matchedCategories, limit]);

  const nicheHashtags = useMemo(() => {
    const tags = matchedCategories.flatMap((c) => c.hashtags.filter((h) => h.popularity < 60));
    const compound: typeof tags = [];
    if (topic) {
      const clean = topic.toLowerCase().replace(/[^a-z0-9]/g, '');
      suffixes.forEach((s) => compound.push({ tag: `#${clean}${s}`, popularity: 30 + Math.floor(Math.random() * 20) }));
    }
    const all = [...tags, ...compound];
    const unique = Array.from(new Map(all.map((t) => [t.tag, t])).values());
    return unique.slice(0, limit);
  }, [matchedCategories, topic, limit]);

  const trendingList = useMemo(() => {
    return trendingHashtags.slice(0, limit);
  }, [limit]);

  const currentTags = activeTab === 'popular' ? popularHashtags : activeTab === 'niche' ? nicheHashtags : trendingList;
  const allText = currentTags.map((t) => t.tag).join(' ');

  const handleGenerate = () => {
    setGenerated(true);
    setActiveTab('popular');
  };

  const handleReset = () => {
    setTopic('');
    setSelectedCategories([]);
    setPlatform('instagram');
    setActiveTab('popular');
    setGenerated(false);
  };

  const platforms: { key: Platform; label: string }[] = [
    { key: 'instagram', label: 'Instagram (30)' },
    { key: 'twitter', label: 'Twitter (5)' },
    { key: 'tiktok', label: 'TikTok (8)' },
    { key: 'linkedin', label: 'LinkedIn (5)' },
  ];

  const tabs: { key: Tab; label: string }[] = [
    { key: 'popular', label: 'Popular' },
    { key: 'niche', label: 'Niche' },
    { key: 'trending', label: 'Trending' },
  ];

  return (
    <div className="space-y-6">
      <div className="rounded-xl p-6" style={{ backgroundColor: 'var(--color-bg-card)', border: '1px solid var(--color-border)', boxShadow: 'var(--shadow-md)' }}>
        <label className="block font-semibold mb-2" style={{ color: 'var(--color-text-heading)' }}>Topic or Keyword</label>
        <input
          type="text"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          placeholder="e.g. fitness, travel, food photography..."
          className="w-full px-4 py-3 rounded-lg text-base outline-none transition-all"
          style={{ backgroundColor: 'var(--color-bg-input)', border: '1px solid var(--color-border)', color: 'var(--color-text-primary)' }}
          onFocus={(e) => { e.currentTarget.style.borderColor = 'var(--color-brand)'; }}
          onBlur={(e) => { e.currentTarget.style.borderColor = 'var(--color-border)'; }}
        />

        <div className="mt-4">
          <label className="block font-semibold mb-2" style={{ color: 'var(--color-text-heading)' }}>Categories</label>
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.name}
                onClick={() => toggleCategory(cat.name)}
                className="px-3 py-1.5 rounded-full text-sm font-medium transition-all cursor-pointer"
                style={{
                  backgroundColor: selectedCategories.includes(cat.name) ? 'var(--color-brand)' : 'var(--color-bg-secondary)',
                  color: selectedCategories.includes(cat.name) ? '#FFFFFF' : 'var(--color-text-secondary)',
                  border: '1px solid',
                  borderColor: selectedCategories.includes(cat.name) ? 'var(--color-brand)' : 'var(--color-border)',
                }}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-4">
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

        <div className="flex gap-3 mt-6">
          <button
            onClick={handleGenerate}
            disabled={!topic && selectedCategories.length === 0}
            className="px-6 py-3 rounded-lg font-semibold transition-all cursor-pointer"
            style={{
              backgroundColor: (!topic && selectedCategories.length === 0) ? 'var(--color-bg-muted)' : 'var(--color-brand)',
              color: (!topic && selectedCategories.length === 0) ? 'var(--color-text-muted)' : '#FFFFFF',
            }}
          >
            Generate Hashtags
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

      {generated && currentTags.length > 0 && (
        <div className="rounded-xl p-6" style={{ backgroundColor: 'var(--color-bg-card)', border: '1px solid var(--color-border)', boxShadow: 'var(--shadow-md)' }}>
          <div className="flex items-center justify-between mb-4">
            <div className="flex gap-1 rounded-lg p-1" style={{ backgroundColor: 'var(--color-bg-secondary)' }}>
              {tabs.map((t) => (
                <button
                  key={t.key}
                  onClick={() => setActiveTab(t.key)}
                  className="px-4 py-2 rounded-md text-sm font-medium transition-all cursor-pointer"
                  style={{
                    backgroundColor: activeTab === t.key ? 'var(--color-brand)' : 'transparent',
                    color: activeTab === t.key ? '#FFFFFF' : 'var(--color-text-secondary)',
                  }}
                >
                  {t.label}
                </button>
              ))}
            </div>
            <span className="text-sm font-medium" style={{ color: 'var(--color-text-tertiary)' }}>
              {currentTags.length} hashtags
            </span>
          </div>

          <div className="flex flex-wrap gap-2 mb-4">
            {currentTags.map((h, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-sm cursor-pointer"
                style={{ backgroundColor: 'var(--color-brand-lightest)', color: 'var(--color-brand-dark)' }}
                onClick={() => navigator.clipboard.writeText(h.tag)}
                title="Click to copy"
              >
                {h.tag}
                <span className="text-xs opacity-60">{h.popularity}</span>
              </span>
            ))}
          </div>

          <CopyButton text={allText} label="Copy All Hashtags" />
        </div>
      )}

      {generated && currentTags.length === 0 && (
        <div className="rounded-xl p-6 text-center" style={{ backgroundColor: 'var(--color-bg-card)', border: '1px solid var(--color-border)' }}>
          <p style={{ color: 'var(--color-text-tertiary)' }}>No hashtags found. Try a different topic or select categories.</p>
        </div>
      )}
    </div>
  );
}
