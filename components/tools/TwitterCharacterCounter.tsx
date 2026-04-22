'use client';
import { useState, useMemo, useCallback } from 'react';
import { CopyButton } from '@/components/ui/CopyButton';

const URL_REGEX = /https?:\/\/[^\s]+/g;

function countTwitterChars(text: string): number {
  const withoutUrls = text.replace(URL_REGEX, '');
  const urlMatches = text.match(URL_REGEX) || [];
  return withoutUrls.length + urlMatches.length * 23;
}

export function TwitterCharacterCounter() {
  const [text, setText] = useState('');

  const charCount = useMemo(() => countTwitterChars(text), [text]);
  const remaining = 280 - charCount;
  const pct = Math.min((charCount / 280) * 100, 100);

  const progressColor = pct < 80 ? 'var(--color-success)' : pct < 100 ? 'var(--color-brand)' : 'var(--color-error)';

  const highlightedHtml = useMemo(() => {
    if (!text) return '';
    let html = text
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
    html = html.replace(
      /https?:\/\/[^\s]+/g,
      (m) => `<span style="color:var(--color-brand);text-decoration:underline">${m}</span>`
    );
    html = html.replace(
      /@(\w+)/g,
      (m) => `<span style="color:var(--color-brand)">${m}</span>`
    );
    html = html.replace(
      /#(\w+)/g,
      (m) => `<span style="color:var(--color-brand)">${m}</span>`
    );
    return html;
  }, [text]);

  const threads = useMemo(() => {
    if (charCount <= 280) return [];
    const sentences = text.split(/(?<=[.!?])\s+/);
    const chunks: string[] = [];
    let current = '';
    for (const sentence of sentences) {
      const test = current ? current + ' ' + sentence : sentence;
      if (countTwitterChars(test) <= 275) {
        current = test;
      } else {
        if (current) chunks.push(current);
        current = sentence;
      }
    }
    if (current) chunks.push(current);
    return chunks.map((c, i) => `${c} (${i + 1}/${chunks.length})`);
  }, [text, charCount]);

  return (
    <div className="space-y-6">
      <div className="rounded-xl p-6" style={{ backgroundColor: 'var(--color-bg-card)', border: '1px solid var(--color-border)', boxShadow: 'var(--shadow-md)' }}>
        <div className="flex items-center justify-between mb-3">
          <label className="font-semibold" style={{ color: 'var(--color-text-heading)' }}>Your Tweet</label>
          <div className="flex items-center gap-3">
            <span className="text-sm font-medium" style={{ color: remaining < 0 ? 'var(--color-error)' : 'var(--color-text-tertiary)' }}>
              {remaining} remaining
            </span>
            <div className="w-8 h-8 relative">
              <svg viewBox="0 0 36 36" className="w-full h-full -rotate-90">
                <circle cx="18" cy="18" r="16" fill="none" stroke="var(--color-bg-secondary)" strokeWidth="3" />
                <circle cx="18" cy="18" r="16" fill="none" stroke={progressColor} strokeWidth="3"
                  strokeDasharray={`${pct} ${100 - pct}`} strokeLinecap="round" />
              </svg>
            </div>
          </div>
        </div>

        <div className="relative">
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="What's happening?"
            rows={6}
            className="w-full px-4 py-3 rounded-lg text-base outline-none resize-y font-sans"
            style={{ backgroundColor: 'var(--color-bg-input)', border: '1px solid var(--color-border)', color: 'var(--color-text-primary)' }}
            onFocus={(e) => { e.currentTarget.style.borderColor = 'var(--color-brand)'; }}
            onBlur={(e) => { e.currentTarget.style.borderColor = 'var(--color-border)'; }}
          />
        </div>

        <div className="w-full h-2 rounded-full mt-3" style={{ backgroundColor: 'var(--color-bg-secondary)' }}>
          <div className="h-full rounded-full transition-all" style={{ width: `${Math.min(pct, 100)}%`, backgroundColor: progressColor }} />
        </div>

        {text && (
          <div className="mt-4 rounded-lg p-4" style={{ backgroundColor: 'var(--color-bg-muted)', border: '1px solid var(--color-border-light)' }}>
            <p className="text-sm font-medium mb-2" style={{ color: 'var(--color-text-tertiary)' }}>Preview with highlights:</p>
            <div className="whitespace-pre-wrap leading-relaxed" style={{ color: 'var(--color-text-primary)' }} dangerouslySetInnerHTML={{ __html: highlightedHtml }} />
          </div>
        )}

        <div className="flex gap-3 mt-4">
          <CopyButton text={text} />
          <button onClick={() => setText('')}
            className="px-6 py-2 rounded-lg font-semibold transition-all cursor-pointer"
            style={{ backgroundColor: 'var(--color-bg-secondary)', color: 'var(--color-text-secondary)', border: '1px solid var(--color-border)' }}>
            Clear
          </button>
        </div>
      </div>

      {threads.length > 1 && (
        <div className="rounded-xl p-6" style={{ backgroundColor: 'var(--color-bg-card)', border: '1px solid var(--color-border)', boxShadow: 'var(--shadow-md)' }}>
          <h3 className="font-semibold mb-4" style={{ color: 'var(--color-text-heading)' }}>
            Thread Splitter ({threads.length} tweets)
          </h3>
          <div className="space-y-3">
            {threads.map((tweet, i) => (
              <div key={i} className="rounded-lg p-4" style={{ backgroundColor: 'var(--color-bg-muted)', border: '1px solid var(--color-border-light)' }}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium" style={{ color: 'var(--color-brand)' }}>Tweet {i + 1}</span>
                  <span className="text-sm" style={{ color: countTwitterChars(tweet) > 280 ? 'var(--color-error)' : 'var(--color-text-tertiary)' }}>
                    {countTwitterChars(tweet)}/280
                  </span>
                </div>
                <p className="mb-2" style={{ color: 'var(--color-text-primary)' }}>{tweet}</p>
                <CopyButton text={tweet} label="Copy" />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
