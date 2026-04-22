'use client';
import { useState } from 'react';

export function CopyButton({ text, label = 'Copy' }: { text: string; label?: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      const ta = document.createElement('textarea');
      ta.value = text;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <button
      onClick={handleCopy}
      className="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 cursor-pointer"
      style={{
        backgroundColor: copied ? 'var(--color-success)' : 'var(--color-brand)',
        color: '#FFFFFF',
      }}
    >
      {copied ? '\u2713 Copied!' : label}
    </button>
  );
}
