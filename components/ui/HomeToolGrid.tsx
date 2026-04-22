'use client';
import { Tool } from '@/lib/tools-data';

export function HomeToolGrid({ tools }: { tools: Tool[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {tools.map((tool) => (
        <a
          key={tool.slug}
          href={`/${tool.slug}/`}
          className="rounded-xl p-6 transition-all group block"
          style={{
            backgroundColor: 'var(--color-bg-card)',
            border: '1px solid var(--color-border)',
            boxShadow: 'var(--shadow-sm)',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow = 'var(--shadow-md)';
            e.currentTarget.style.borderColor = 'var(--color-brand)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
            e.currentTarget.style.borderColor = 'var(--color-border)';
          }}
        >
          <div className="text-3xl mb-3">{tool.icon}</div>
          <h3
            className="text-lg font-bold mb-2"
            style={{ color: 'var(--color-text-heading)' }}
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
