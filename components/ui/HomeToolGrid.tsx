'use client';
import { useState } from 'react';
import { Tool } from '@/lib/tools-data';

export function HomeToolGrid({ tools }: { tools: Tool[] }) {
  const [hoveredSlug, setHoveredSlug] = useState<string | null>(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {tools.map((tool) => (
        <a
          key={tool.slug}
          href={`/${tool.slug}/`}
          className="rounded-xl p-6 transition-all duration-200 group block no-underline"
          style={{
            backgroundColor: 'var(--color-bg-card)',
            border: hoveredSlug === tool.slug ? '2px solid var(--color-brand)' : '2px solid var(--color-border)',
            boxShadow: hoveredSlug === tool.slug ? 'var(--shadow-lg)' : 'var(--shadow-card)',
            transform: hoveredSlug === tool.slug ? 'translateY(-2px)' : 'translateY(0)',
          }}
          onMouseEnter={() => setHoveredSlug(tool.slug)}
          onMouseLeave={() => setHoveredSlug(null)}
        >
          <div className="text-3xl mb-3">{tool.icon}</div>
          <h3
            className="text-lg font-bold mb-2 transition-colors"
            style={{ color: hoveredSlug === tool.slug ? 'var(--color-brand)' : 'var(--color-text-heading)' }}
          >
            {tool.name}
          </h3>
          <p className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>
            {tool.description}
          </p>
        </a>
      ))}
    </div>
  );
}
