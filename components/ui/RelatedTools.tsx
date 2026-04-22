"use client";
import Link from 'next/link';
import { Tool } from '@/lib/tools-data';

export function RelatedTools({ tools }: { tools: Tool[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {tools.map((tool) => (
        <Link
          key={tool.slug}
          href={tool.slug}
          className="block rounded-xl p-5 transition-all duration-200"
          style={{
            backgroundColor: 'var(--color-bg-card)',
            border: '1px solid var(--color-border)',
            boxShadow: 'var(--shadow-sm)',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = 'var(--color-bg-card-hover)';
            e.currentTarget.style.boxShadow = 'var(--shadow-md)';
            e.currentTarget.style.borderColor = 'var(--color-brand)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'var(--color-bg-card)';
            e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
            e.currentTarget.style.borderColor = 'var(--color-border)';
          }}
        >
          <div className="text-2xl mb-2">{tool.icon}</div>
          <h3 className="font-semibold mb-1" style={{ color: 'var(--color-text-heading)' }}>
            {tool.name}
          </h3>
          <p className="text-sm" style={{ color: 'var(--color-text-tertiary)' }}>
            {tool.shortDesc}
          </p>
        </Link>
      ))}
    </div>
  );
}
