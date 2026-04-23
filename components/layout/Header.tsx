'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { tools } from '@/lib/tools-data';

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    setDark(document.documentElement.classList.contains('dark'));
  }, []);

  const toggleTheme = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle('dark', next);
    localStorage.setItem('theme', next ? 'dark' : 'light');
  };

  return (
    <header
      className="sticky top-0 z-50 backdrop-blur-md"
      style={{
        backgroundColor: 'color-mix(in srgb, var(--color-bg-primary) 85%, transparent)',
        borderBottom: '1px solid var(--color-border-light)',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl" style={{ color: 'var(--color-text-heading)' }}>
            <span
              className="w-8 h-8 rounded-lg flex items-center justify-center text-white font-bold text-sm"
              style={{ backgroundColor: 'var(--color-brand)' }}
            >
              SM
            </span>
            <span>SocialMedia<span style={{ color: 'var(--color-brand)' }}>Tools</span></span>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {tools.map((tool) => (
              <Link
                key={tool.slug}
                href={tool.slug}
                className="px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200"
                style={{ color: 'var(--color-text-secondary)' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = 'var(--color-brand)';
                  e.currentTarget.style.backgroundColor = 'var(--color-brand-lightest)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'var(--color-text-secondary)';
                  e.currentTarget.style.backgroundColor = 'transparent';
                }}
              >
                {tool.name}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              onClick={toggleTheme}
              aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
              style={{
                display: "inline-flex",
                alignItems: "center",
                padding: "0.25rem",
                borderRadius: "9999px",
                border: "2px solid var(--color-border, #CBD5E1)",
                backgroundColor: dark ? "var(--color-primary, #10B981)" : "var(--color-border, #CBD5E1)",
                cursor: "pointer",
                transition: "all 0.3s ease",
                width: "4rem",
                height: "2rem",
                position: "relative",
                flexShrink: 0,
              }}
            >
              <span style={{ position: "absolute", left: "0.375rem", top: "50%", transform: "translateY(-50%)", fontSize: "0.75rem", opacity: dark ? 0.4 : 1, transition: "opacity 0.3s ease", lineHeight: 1 }}>☀️</span>
              <span style={{ position: "absolute", right: "0.375rem", top: "50%", transform: "translateY(-50%)", fontSize: "0.75rem", opacity: dark ? 1 : 0.4, transition: "opacity 0.3s ease", lineHeight: 1 }}>🌙</span>
              <span style={{ position: "absolute", top: "2px", left: dark ? "calc(100% - 1.625rem)" : "2px", width: "1.5rem", height: "1.5rem", borderRadius: "50%", backgroundColor: "#FFFFFF", boxShadow: "0 1px 3px rgba(0,0,0,0.3)", transition: "left 0.3s ease" }} />
            </button>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 rounded-lg cursor-pointer"
              style={{ color: 'var(--color-text-secondary)', backgroundColor: 'var(--color-bg-secondary)' }}
              aria-label="Toggle menu"
            >
              {mobileOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
              )}
            </button>
          </div>
        </div>

        {mobileOpen && (
          <nav className="lg:hidden pb-4 space-y-1">
            {tools.map((tool) => (
              <Link
                key={tool.slug}
                href={tool.slug}
                onClick={() => setMobileOpen(false)}
                className="block px-3 py-2 rounded-lg text-sm font-medium"
                style={{ color: 'var(--color-text-secondary)' }}
              >
                <span className="mr-2">{tool.icon}</span>
                {tool.name}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
