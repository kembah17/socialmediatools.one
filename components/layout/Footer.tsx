import Link from 'next/link';
import { tools } from '@/lib/tools-data';
import { AdSlot } from '@/components/ui/AdSlot';

export function Footer() {
  return (
    <footer style={{ backgroundColor: 'var(--color-footer-bg)', color: 'var(--color-footer-text)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <AdSlot slot="footer-top" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          <div>
            <div className="flex items-center gap-2 font-bold text-lg mb-3" style={{ color: 'var(--color-footer-text)' }}>
              <span
                className="w-7 h-7 rounded-md flex items-center justify-center text-white font-bold text-xs"
                style={{ backgroundColor: 'var(--color-primary)', color: '#FFFFFF' }}
              >
                SM
              </span>
              SocialMediaTools
            </div>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--color-footer-muted)' }}>
              Free online social media tools to help you create better content, grow your audience, and save time. No signup required.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-3" style={{ color: 'var(--color-footer-text)' }}>Tools</h3>
            <ul className="space-y-2">
              {tools.map((tool) => (
                <li key={tool.slug}>
                  <Link
                    href={tool.slug}
                    className="text-sm transition-colors duration-200"
                    style={{ color: 'var(--color-footer-muted)' }}
                  >
                    {tool.icon} {tool.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3" style={{ color: 'var(--color-footer-text)' }}>Pages</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-sm transition-colors duration-200" style={{ color: 'var(--color-footer-muted)' }}>
                  About
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-sm transition-colors duration-200" style={{ color: 'var(--color-footer-muted)' }}>
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

                {/* More Free Tools */}
        <div style={{ borderTop: '1px solid var(--color-footer-border)', marginTop: '2rem', paddingTop: '1.5rem' }}>
          <h4 style={{ fontWeight: 600, fontSize: '0.875rem', color: 'var(--color-footer-text)', marginBottom: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>More Free Tools</h4>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem 1.5rem' }}>
            <a href="https://pdftools.one" target="_blank" rel="noopener" style={{ fontSize: '0.8125rem', color: 'var(--color-footer-muted)', textDecoration: 'none' }}>📄 PDF Tools</a>
            <a href="https://pictools.one" target="_blank" rel="noopener" style={{ fontSize: '0.8125rem', color: 'var(--color-footer-muted)', textDecoration: 'none' }}>🖼️ Image Tools</a>
            <a href="https://percentcalc.one" target="_blank" rel="noopener" style={{ fontSize: '0.8125rem', color: 'var(--color-footer-muted)', textDecoration: 'none' }}>🔢 Percentage Calculator</a>
            <a href="https://developertools.one" target="_blank" rel="noopener" style={{ fontSize: '0.8125rem', color: 'var(--color-footer-muted)', textDecoration: 'none' }}>💻 Developer Tools</a>
            <a href="https://wordcount.one" target="_blank" rel="noopener" style={{ fontSize: '0.8125rem', color: 'var(--color-footer-muted)', textDecoration: 'none' }}>📝 Word Counter</a>
            <a href="https://texttools.one" target="_blank" rel="noopener" style={{ fontSize: '0.8125rem', color: 'var(--color-footer-muted)', textDecoration: 'none' }}>🔤 Text Tools</a>
            <a href="https://randomize.one" target="_blank" rel="noopener" style={{ fontSize: '0.8125rem', color: 'var(--color-footer-muted)', textDecoration: 'none' }}>🎲 Random Generator</a>
            <a href="https://qrcodegenerator.one" target="_blank" rel="noopener" style={{ fontSize: '0.8125rem', color: 'var(--color-footer-muted)', textDecoration: 'none' }}>📲 QR Code Generator</a>
            <a href="https://gpacalculator.one" target="_blank" rel="noopener" style={{ fontSize: '0.8125rem', color: 'var(--color-footer-muted)', textDecoration: 'none' }}>🎓 GPA Calculator</a>
            <a href="https://invoicegenerator.one" target="_blank" rel="noopener" style={{ fontSize: '0.8125rem', color: 'var(--color-footer-muted)', textDecoration: 'none' }}>🧾 Invoice Generator</a>
            <a href="https://caloriecalculator.one" target="_blank" rel="noopener" style={{ fontSize: '0.8125rem', color: 'var(--color-footer-muted)', textDecoration: 'none' }}>🔥 Calorie Calculator</a>
            <a href="https://passwordgenerator.one" target="_blank" rel="noopener" style={{ fontSize: '0.8125rem', color: 'var(--color-footer-muted)', textDecoration: 'none' }}>🔐 Password Generator</a>
            <a href="https://datecalculator.one" target="_blank" rel="noopener" style={{ fontSize: '0.8125rem', color: 'var(--color-footer-muted)', textDecoration: 'none' }}>📅 Date Calculator</a>
          </div>
        </div>

        {/* Nigerian Business Directory */}
        <div style={{ borderTop: '1px solid var(--color-footer-border)', marginTop: '1.5rem', paddingTop: '1rem' }}>
          <a href="https://myhustle.space" target="_blank" rel="noopener" style={{ fontSize: '0.8125rem', color: 'var(--color-footer-muted)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
            Discover Nigerian businesses on <span style={{ color: 'var(--color-footer-link)', fontWeight: 500 }}>MyHustle.space</span> &mdash; Nigeria&apos;s free business directory
          </a>
        </div>

        <div
          className="mt-8 pt-8 text-center text-sm"
          style={{ borderTop: '1px solid var(--color-footer-border)', color: 'var(--color-footer-muted)' }}
        >
          &copy; {new Date().getFullYear()} SocialMediaTools.one. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
