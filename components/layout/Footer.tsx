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
                style={{ backgroundColor: 'var(--color-brand)' }}
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
