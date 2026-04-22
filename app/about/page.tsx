import type { Metadata } from 'next';
import { AdSlot } from '@/components/ui/AdSlot';

export const metadata: Metadata = {
  title: 'About SocialMediaTools.one - Free Social Media Tools Suite',
  description: 'Learn about SocialMediaTools.one, a free suite of social media tools including hashtag generators, caption generators, image resizers, and more.',
  alternates: { canonical: 'https://socialmediatools.one/about' },
};

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <AdSlot slot="about-leaderboard" />

      <div className="rounded-xl p-8" style={{ backgroundColor: 'var(--color-bg-card)', border: '1px solid var(--color-border)' }}>
        <h1 className="text-3xl md:text-4xl font-extrabold mb-6" style={{ color: 'var(--color-text-heading)' }}>About SocialMediaTools.one</h1>

        <div className="space-y-6 leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
          <p className="text-lg">SocialMediaTools.one is a free, comprehensive suite of social media tools designed to help content creators, marketers, and businesses optimize their social media presence across every major platform.</p>

          <h2 className="text-2xl font-bold" style={{ color: 'var(--color-text-heading)' }}>Our Mission</h2>
          <p>We believe that powerful social media tools should be accessible to everyone, regardless of budget. Our mission is to provide professional-grade tools that help you create better content, grow your audience, and save time — all completely free and without requiring any signup or account creation.</p>

          <h2 className="text-2xl font-bold" style={{ color: 'var(--color-text-heading)' }}>Our Tools</h2>
          <ul className="space-y-3 ml-4">
            <li style={{ color: 'var(--color-text-secondary)' }}><span className="font-semibold" style={{ color: 'var(--color-text-primary)' }}>Hashtag Generator</span> — Generate relevant hashtags for Instagram, Twitter, TikTok, and LinkedIn with popularity scores and platform-specific limits.</li>
            <li style={{ color: 'var(--color-text-secondary)' }}><span className="font-semibold" style={{ color: 'var(--color-text-primary)' }}>Caption Generator</span> — Create engaging captions for any social media platform with tone selection and emoji suggestions.</li>
            <li style={{ color: 'var(--color-text-secondary)' }}><span className="font-semibold" style={{ color: 'var(--color-text-primary)' }}>Instagram Bio Generator</span> — Craft compelling Instagram bios that fit the 150-character limit with multiple style options.</li>
            <li style={{ color: 'var(--color-text-secondary)' }}><span className="font-semibold" style={{ color: 'var(--color-text-primary)' }}>YouTube Tag Generator</span> — Generate relevant YouTube tags with long-tail variations to boost your video SEO.</li>
            <li style={{ color: 'var(--color-text-secondary)' }}><span className="font-semibold" style={{ color: 'var(--color-text-primary)' }}>Twitter/X Character Counter</span> — Count characters in real-time with URL detection, mention highlighting, and thread splitting.</li>
            <li style={{ color: 'var(--color-text-secondary)' }}><span className="font-semibold" style={{ color: 'var(--color-text-primary)' }}>LinkedIn Post Formatter</span> — Format posts with Unicode bold and italic text, emojis, hooks, and CTAs.</li>
            <li style={{ color: 'var(--color-text-secondary)' }}><span className="font-semibold" style={{ color: 'var(--color-text-primary)' }}>Image Resizer</span> — Resize images for all social media platforms with 12 presets and crop/fit modes.</li>
          </ul>

          <h2 className="text-2xl font-bold" style={{ color: 'var(--color-text-heading)' }}>Privacy First</h2>
          <p>All our tools run entirely in your browser. Your content, images, and data are never uploaded to any server. We do not collect, store, or process any of the content you create with our tools. This means your social media strategies, captions, and images remain completely private.</p>

          <h2 className="text-2xl font-bold" style={{ color: 'var(--color-text-heading)' }}>Why Free?</h2>
          <p>SocialMediaTools.one is supported by non-intrusive advertising. This allows us to keep all tools completely free while maintaining and improving the platform. We never gate features behind paywalls or require account creation.</p>

          <h2 className="text-2xl font-bold" style={{ color: 'var(--color-text-heading)' }}>Technology</h2>
          <p>Built with modern web technologies including Next.js, TypeScript, and Tailwind CSS, our tools are fast, responsive, and work on any device. The entire site is statically generated for maximum performance and reliability. All image processing uses the HTML5 Canvas API for instant, client-side results.</p>

          <h2 className="text-2xl font-bold" style={{ color: 'var(--color-text-heading)' }}>Contact</h2>
          <p>Have feedback, suggestions, or found a bug? We would love to hear from you. Reach out to us at <span className="font-semibold" style={{ color: 'var(--color-brand)' }}>hello@socialmediatools.one</span> and we will get back to you as soon as possible.</p>
        </div>
      </div>

      <AdSlot slot="about-footer" />
    </div>
  );
}
