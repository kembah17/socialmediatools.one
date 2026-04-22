import type { Metadata } from 'next';
import { CaptionGenerator } from '@/components/tools/CaptionGenerator';
import { AdSlot } from '@/components/ui/AdSlot';
import { FAQ } from '@/components/ui/FAQ';
import { FaqSchema } from '@/components/seo/FaqSchema';
import { RelatedTools } from '@/components/ui/RelatedTools';
import { tools } from '@/lib/tools-data';

export const metadata: Metadata = {
  title: 'Free Caption Generator - Instagram, Facebook, LinkedIn, Twitter | SocialMediaTools.one',
  description: 'Generate engaging social media captions for Instagram, Facebook, LinkedIn, Twitter, and TikTok. Multiple tones and styles. Free, no signup required.',
  keywords: 'caption generator, instagram captions, social media captions, facebook captions, linkedin captions, twitter captions, tiktok captions',
  openGraph: {
    title: 'Free Social Media Caption Generator | SocialMediaTools.one',
    description: 'Generate engaging captions for all social media platforms instantly.',
    url: 'https://socialmediatools.one/caption-generator',
    type: 'website',
  },
  alternates: { canonical: 'https://socialmediatools.one/caption-generator' },
};

const faqs = [
  { question: 'How do I write a good social media caption?', answer: 'A great caption starts with a strong hook (first line that grabs attention), followed by valuable content, and ends with a clear call-to-action. Our generator creates captions using proven copywriting frameworks with hooks, body text, CTAs, and strategic emoji placement tailored to each platform.' },
  { question: 'What is the ideal caption length for each platform?', answer: 'Instagram allows 2,200 characters but 125-150 performs best. Twitter has a 280-character limit. Facebook posts under 80 characters get 66% more engagement. LinkedIn posts can be up to 3,000 characters with 1,300 being optimal. TikTok captions max at 2,200 characters. Our tool shows character counts with platform limits.' },
  { question: 'Should I use emojis in my captions?', answer: 'Yes, emojis can increase engagement by up to 48% on Instagram and 25% on Facebook. However, use them strategically — 2-4 emojis per caption is optimal. Our generator suggests relevant emojis based on your selected tone and platform.' },
  { question: 'Can I customize the generated captions?', answer: 'Absolutely! The generated captions are starting points that you should personalize. Edit them to match your brand voice, add specific details about your product or service, and adjust the tone to fit your audience. The best captions feel authentic and personal.' },
  { question: 'How many caption variations does the tool generate?', answer: 'Our tool generates 3-5 unique caption variations for each request. Each variation uses different templates, hooks, and CTAs while maintaining your selected tone and platform optimization. This gives you multiple options to choose from or A/B test.' },
];

export default function CaptionGeneratorPage() {
  const related = tools.filter((t) => t.slug !== 'caption-generator').slice(0, 3);
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <FaqSchema items={faqs} />
      <AdSlot slot="caption-leaderboard" />

      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-extrabold mb-3" style={{ color: 'var(--color-text-heading)' }}>Free Caption Generator</h1>
        <p className="text-lg" style={{ color: 'var(--color-text-secondary)' }}>Generate engaging captions for Instagram, Facebook, LinkedIn, Twitter, and TikTok in seconds.</p>
      </div>

      <CaptionGenerator />

      <AdSlot slot="caption-below-results" />

      <section className="mt-12 rounded-xl p-8" style={{ backgroundColor: 'var(--color-bg-card)', border: '1px solid var(--color-border)' }}>
        <h2 className="text-2xl font-bold mb-6" style={{ color: 'var(--color-text-heading)' }}>How to Use the Caption Generator</h2>
        <div className="space-y-4 leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
          <p>Writing compelling social media captions is both an art and a science. The right caption can transform a simple post into a conversation starter, drive traffic to your website, or convert followers into customers. Our free caption generator uses proven copywriting frameworks to create platform-optimized captions that engage your audience and drive action.</p>
          <h3 className="text-xl font-semibold" style={{ color: 'var(--color-text-heading)' }}>Step 1: Select Your Platform</h3>
          <p>Choose the social media platform where you will be posting. Each platform has different character limits, audience expectations, and content styles. Instagram captions can be longer and more storytelling-focused, while Twitter demands concise, punchy messages. LinkedIn favors professional insights, and TikTok captions should be short and trend-aware.</p>
          <h3 className="text-xl font-semibold" style={{ color: 'var(--color-text-heading)' }}>Step 2: Choose Your Tone</h3>
          <p>Select the tone that matches your brand and content. Professional tone works great for B2B content and thought leadership. Casual tone is perfect for lifestyle and personal brands. Funny tone helps entertainment and relatable content stand out. Inspirational tone drives engagement for motivational content. Promotional tone is optimized for product launches and sales.</p>
          <h3 className="text-xl font-semibold" style={{ color: 'var(--color-text-heading)' }}>Step 3: Enter Your Topic</h3>
          <p>Type in your post topic, product name, or content theme. Be specific for better results — instead of just writing "shoes," try "new running shoes for marathon training." The more context you provide, the more relevant and engaging your generated captions will be.</p>
          <h3 className="text-xl font-semibold" style={{ color: 'var(--color-text-heading)' }}>Step 4: Generate and Customize</h3>
          <p>Click Generate to receive 3-5 unique caption variations. Each caption includes a hook (attention-grabbing first line), body text, call-to-action, and emoji suggestions. The character counter shows you exactly how long each caption is relative to the platform limit. Copy your favorite caption and customize it with your personal touch before posting.</p>
          <h3 className="text-xl font-semibold" style={{ color: 'var(--color-text-heading)' }}>Caption Writing Best Practices</h3>
          <p>The first line of your caption is the most important — it determines whether users tap "more" to read the rest. Use questions, bold statements, or surprising facts to hook readers. Include a clear call-to-action telling your audience exactly what to do next: comment, share, click the link, or save the post. Use line breaks to improve readability, especially on Instagram and LinkedIn where long captions perform well. Finally, always proofread your captions before posting to maintain professionalism and credibility.</p>
        </div>
      </section>

      <AdSlot slot="caption-in-content" />

      <section className="mt-12">
        <h2 className="text-2xl font-bold mb-6" style={{ color: 'var(--color-text-heading)' }}>Frequently Asked Questions</h2>
        <FAQ items={faqs} />
      </section>

      <section className="mt-12">
        <RelatedTools tools={related} />
      </section>

      <AdSlot slot="caption-footer" />
    </div>
  );
}
