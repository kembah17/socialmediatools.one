import type { Metadata } from 'next';
import { AdSlot } from '@/components/ui/AdSlot';

export const metadata: Metadata = {
  title: 'Privacy Policy | SocialMediaTools.one',
  description: 'Privacy policy for SocialMediaTools.one. Learn how we protect your data and privacy while using our free social media tools.',
  alternates: { canonical: 'https://socialmediatools.one/privacy' },
};

export default function PrivacyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <AdSlot slot="privacy-leaderboard" />

      <div className="rounded-xl p-8" style={{ backgroundColor: 'var(--color-bg-card)', border: '1px solid var(--color-border)' }}>
        <h1 className="text-3xl md:text-4xl font-extrabold mb-2" style={{ color: 'var(--color-text-heading)' }}>Privacy Policy</h1>
        <p className="mb-8" style={{ color: 'var(--color-text-muted)' }}>Last updated: April 2026</p>

        <div className="space-y-6 leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
          <h2 className="text-2xl font-bold" style={{ color: 'var(--color-text-heading)' }}>Overview</h2>
          <p>SocialMediaTools.one is committed to protecting your privacy. This privacy policy explains how we handle information when you use our website and tools. The short version: all our tools run in your browser, and we do not collect or store any of the content you create.</p>

          <h2 className="text-2xl font-bold" style={{ color: 'var(--color-text-heading)' }}>Information We Do Not Collect</h2>
          <p>Our social media tools (hashtag generator, caption generator, bio generator, tag generator, character counter, post formatter, and image resizer) run entirely in your web browser using client-side JavaScript. This means:</p>
          <ul className="list-disc ml-6 space-y-2">
            <li>Your text, captions, bios, and hashtags are never sent to our servers</li>
            <li>Images you upload for resizing are processed locally in your browser and never transmitted</li>
            <li>We do not store any content you create with our tools</li>
            <li>We do not require account creation, login, or any personal information</li>
            <li>We do not use cookies for tracking purposes</li>
          </ul>

          <h2 className="text-2xl font-bold" style={{ color: 'var(--color-text-heading)' }}>Information We May Collect</h2>
          <p>While our tools do not collect data, our website infrastructure may collect limited, anonymous information:</p>
          <ul className="list-disc ml-6 space-y-2">
            <li><span className="font-semibold" style={{ color: 'var(--color-text-primary)' }}>Analytics:</span> We may use privacy-respecting analytics to understand general usage patterns such as page views and popular tools. This data is aggregated and anonymous.</li>
            <li><span className="font-semibold" style={{ color: 'var(--color-text-primary)' }}>Hosting Logs:</span> Our hosting provider may collect standard server logs including IP addresses, browser type, and pages visited. These logs are used for security and performance purposes only.</li>
          </ul>

          <h2 className="text-2xl font-bold" style={{ color: 'var(--color-text-heading)' }}>Third-Party Advertising</h2>
          <p>We display advertisements to support the free operation of our tools. Our advertising partners may use cookies and similar technologies to serve relevant ads. These third parties have their own privacy policies governing data collection. You can opt out of personalized advertising through your browser settings or through industry opt-out tools such as the Digital Advertising Alliance opt-out page.</p>

          <h2 className="text-2xl font-bold" style={{ color: 'var(--color-text-heading)' }}>Data Security</h2>
          <p>Since our tools process all data locally in your browser, your content never leaves your device. This provides the highest level of data security possible — there is no server-side data to breach. Our website is served over HTTPS to ensure secure communication between your browser and our servers.</p>

          <h2 className="text-2xl font-bold" style={{ color: 'var(--color-text-heading)' }}>Children&apos;s Privacy</h2>
          <p>Our website is not directed at children under the age of 13. We do not knowingly collect personal information from children. If you believe a child has provided us with personal information, please contact us and we will take steps to remove such information.</p>

          <h2 className="text-2xl font-bold" style={{ color: 'var(--color-text-heading)' }}>Changes to This Policy</h2>
          <p>We may update this privacy policy from time to time. Any changes will be posted on this page with an updated revision date. We encourage you to review this policy periodically.</p>

          <h2 className="text-2xl font-bold" style={{ color: 'var(--color-text-heading)' }}>Contact Us</h2>
          <p>If you have any questions about this privacy policy or our data practices, please contact us at <span className="font-semibold" style={{ color: 'var(--color-brand)' }}>hello@socialmediatools.one</span>.</p>
        </div>
      </div>

      <AdSlot slot="privacy-footer" />
    </div>
  );
}
