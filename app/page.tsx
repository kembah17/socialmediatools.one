import { WebSiteSchema } from '@/components/seo/WebSiteSchema';
import { AdSlot } from '@/components/ui/AdSlot';
import { RelatedTools } from '@/components/ui/RelatedTools';
import { HomeToolGrid } from '@/components/ui/HomeToolGrid';
import { tools } from '@/lib/tools-data';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Free Social Media Tools - Hashtag Generator, Caption Creator & More | SocialMediaTools.one',
  description: 'Free online social media tools: hashtag generator, caption creator, Instagram bio generator, YouTube tag generator, Twitter character counter, LinkedIn formatter, and image resizer. No signup required.',
  keywords: 'social media tools, hashtag generator, caption generator, instagram bio generator, youtube tag generator, twitter character counter, linkedin post formatter, image resizer',
  openGraph: {
    title: 'Free Social Media Tools Suite | SocialMediaTools.one',
    description: 'All-in-one social media toolkit with 7 free tools for content creators, marketers, and influencers.',
    url: 'https://socialmediatools.one',
    siteName: 'SocialMediaTools.one',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Social Media Tools Suite | SocialMediaTools.one',
    description: 'All-in-one social media toolkit with 7 free tools.',
  },
  alternates: { canonical: 'https://socialmediatools.one' },
};

export default function HomePage() {
  return (
    <>
      <WebSiteSchema />

      {/* Hero Section */}
      <section className="py-16 md:py-24 text-center" style={{ backgroundColor: 'var(--color-bg-hero)' }}>
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight" style={{ color: 'var(--color-text-heading)' }}>
            Free <span style={{ color: 'var(--color-brand)' }}>Social Media</span> Tools
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8" style={{ color: 'var(--color-text-secondary)' }}>
            Everything you need to create better social media content. Generate hashtags, write captions, build bios, resize images, and more — all free, no signup required.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a href="/hashtag-generator/" className="px-6 py-3 rounded-lg font-semibold transition-all" style={{ backgroundColor: 'var(--color-brand)', color: '#FFFFFF' }}>
              Get Started Free
            </a>
            <a href="#tools" className="px-6 py-3 rounded-lg font-semibold transition-all" style={{ backgroundColor: 'var(--color-bg-card)', color: 'var(--color-brand)', border: '2px solid var(--color-brand)' }}>
              Explore Tools
            </a>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-12">
        <AdSlot slot="homepage-leaderboard" />

        {/* Tools Grid */}
        <section id="tools" className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-2" style={{ color: 'var(--color-text-heading)' }}>Our Tools</h2>
          <p className="text-center mb-10" style={{ color: 'var(--color-text-secondary)' }}>7 powerful tools to supercharge your social media presence</p>
          <HomeToolGrid tools={tools} />
        </section>

        <AdSlot slot="homepage-in-content" />

        {/* SEO Content */}
        <section className="mb-16">
          <div className="rounded-xl p-8" style={{ backgroundColor: 'var(--color-bg-card)', border: '1px solid var(--color-border)' }}>
            <h2 className="text-2xl font-bold mb-6" style={{ color: 'var(--color-text-heading)' }}>The Complete Social Media Toolkit for Content Creators</h2>
            <div className="space-y-4 leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
              <p>Social media marketing has become an essential part of every business strategy and personal brand. Whether you are a content creator, digital marketer, small business owner, or influencer, having the right tools can make the difference between content that gets lost in the feed and content that drives real engagement. SocialMediaTools.one provides a comprehensive suite of free tools designed to help you create better content faster.</p>
              <p>Our <strong style={{ color: 'var(--color-text-primary)' }}>Hashtag Generator</strong> helps you discover the most relevant and trending hashtags for your posts across Instagram, Twitter, TikTok, and LinkedIn. With over 500 hashtags organized across 25+ niches, you can find the perfect mix of popular and niche-specific tags to maximize your reach. The tool automatically adjusts hashtag counts based on platform best practices — 30 for Instagram, 3-5 for Twitter, and 5-8 for TikTok.</p>
              <p>Writing engaging captions is one of the biggest challenges for social media managers. Our <strong style={{ color: 'var(--color-text-primary)' }}>Caption Generator</strong> provides platform-optimized caption templates across five different tones: professional, casual, funny, inspirational, and promotional. Each caption is crafted with proven copywriting frameworks including hooks, body text, calls-to-action, and strategic emoji placement.</p>
              <p>Your Instagram bio is your digital first impression. The <strong style={{ color: 'var(--color-text-primary)' }}>Instagram Bio Generator</strong> creates compelling bios that fit within the 150-character limit while showcasing your personality and driving action. Choose from minimal, creative, professional, or fun styles to match your brand identity.</p>
              <p>YouTube SEO starts with the right tags. Our <strong style={{ color: 'var(--color-text-primary)' }}>YouTube Tag Generator</strong> produces relevant tags with long-tail variations to help your videos rank higher in search results. The tool tracks the 500-character tag limit and sorts suggestions by relevance to maximize your video discoverability.</p>
              <p>Every character counts on Twitter. The <strong style={{ color: 'var(--color-text-primary)' }}>Twitter Character Counter</strong> provides real-time counting with URL detection (each URL counts as 23 characters regardless of length), mention and hashtag highlighting, and an automatic thread splitter for longer content. Never worry about exceeding the 280-character limit again.</p>
              <p>LinkedIn posts with proper formatting get significantly more engagement. The <strong style={{ color: 'var(--color-text-primary)' }}>LinkedIn Post Formatter</strong> lets you apply Unicode bold and italic formatting, add bullet points and numbered lists, insert emojis from a categorized picker, and use proven hook and CTA templates. The formatted text copies perfectly to LinkedIn.</p>
              <p>Visual content drives engagement across all platforms, but each platform has specific image size requirements. Our <strong style={{ color: 'var(--color-text-primary)' }}>Image Resizer</strong> supports 12 platform-specific presets covering Instagram, Facebook, Twitter, LinkedIn, YouTube, and TikTok. Upload any image and instantly resize it with crop-to-fill or fit-with-padding modes.</p>
              <p>All tools on SocialMediaTools.one run entirely in your browser. Your content is never uploaded to any server, ensuring complete privacy and instant results. No account creation, no subscriptions, no limitations — just powerful tools that help you create better social media content.</p>
            </div>
          </div>
        </section>

        <AdSlot slot="homepage-footer" />
      </div>
    </>
  );
}
