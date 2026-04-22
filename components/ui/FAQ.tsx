'use client';
import { useState } from 'react';

export interface FAQItem {
  question: string;
  answer: string;
}

export function FAQ({ items }: { items: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      {items.map((item, i) => (
        <div
          key={i}
          className="rounded-lg overflow-hidden"
          style={{ border: '1px solid var(--color-border)', backgroundColor: 'var(--color-bg-card)' }}
        >
          <button
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="w-full px-5 py-4 text-left flex justify-between items-center cursor-pointer"
            style={{ color: 'var(--color-text-heading)' }}
          >
            <span className="font-semibold pr-4">{item.question}</span>
            <span
              className="text-xl flex-shrink-0 transition-transform duration-200"
              style={{
                color: 'var(--color-brand)',
                transform: openIndex === i ? 'rotate(45deg)' : 'rotate(0deg)',
              }}
            >
              +
            </span>
          </button>
          {openIndex === i && (
            <div className="px-5 pb-4" style={{ color: 'var(--color-text-secondary)' }}>
              <p className="leading-relaxed">{item.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
