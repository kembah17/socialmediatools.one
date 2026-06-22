import type { Metadata } from 'next';
import { InstagramBioGenerator } from '@/components/tools/InstagramBioGenerator';
import { AdSlot } from '@/components/ui/AdSlot';
import { FAQ } from '@/components/ui/FAQ';
import { FaqSchema } from '@/components/seo/FaqSchema';
import { RelatedTools } from '@/components/ui/RelatedTools';
import { tools } from '@/lib/tools-data';

export const metadata: Metadata = {
  title: 'Free Instagram Bio Generator - Creative Bios in Seconds | SocialMediaTools.one',
  description: 'Generate creative, professional, and fun Instagram bios that fit the 150-character limit. Multiple styles with emoji suggestions. Free, no signup required.',
  keywords: 'instagram bio generator, instagram bio ideas, creative instagram bio, professional instagram bio, instagram bio maker, bio for instagram',
  openGraph: {
    title: 'Free Instagram Bio Generator | SocialMediaTools.one',
    description: 'Generate creative Instagram bios that fit the 150-character limit instantly.',
    url: 'https://socialmediatools.one/instagram-bio-generator',
    type: 'website',
  },
  alternates: { canonical: 'https://socialmediatools.one/instagram-bio-generator' },
};

const faqs = [
  { question: 'What makes a good Instagram bio?', answer: 'A great Instagram bio clearly communicates who you are, what you do, and what value you offer — all within 150 characters. It should include your name or brand, a brief description of your niche, and a call-to-action. Strategic emoji use adds personality and visual breaks. Our generator creates bios that balance all these elements.' },
  { question: 'How many characters can an Instagram bio be?', answer: 'Instagram bios have a strict 150-character limit. This includes letters, numbers, spaces, emojis, and special characters. Our generator shows a real-time character count with a visual progress bar so you can see exactly how much space you have left.' },
  { question: 'Should I use emojis in my Instagram bio?', answer: 'Yes, emojis are highly recommended for Instagram bios. They add visual interest, save character space (one emoji replaces several words), and help break up text into scannable sections. Use 2-4 emojis strategically — as bullet points, separators, or to emphasize key points.' },
  { question: 'How often should I update my Instagram bio?', answer: 'Update your bio whenever your focus, offerings, or goals change. Many successful accounts update their bio monthly to reflect current promotions, seasonal content, or new achievements. A fresh bio signals an active, engaged account to both followers and the algorithm.' },
  { question: 'Can I use line breaks in my Instagram bio?', answer: 'Yes, Instagram supports line breaks in bios. You can create them by typing your bio in a notes app with line breaks and pasting it into Instagram, or by using the return key on mobile. Our generator formats bios with line breaks for easy copy-paste.' },
];

export default function InstagramBioGeneratorPage() {
  const related = tools.filter((t) => t.slug !== 'instagram-bio-generator').slice(0, 3);
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <FaqSchema items={faqs} />
      <AdSlot slot="bio-leaderboard" />

      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-extrabold mb-3" style={{ color: 'var(--color-text-heading)' }}>Free Instagram Bio Generator</h1>
        <p className="text-lg" style={{ color: 'var(--color-text-secondary)' }}>Create compelling Instagram bios that showcase your personality within the 150-character limit.</p>
      </div>

      <InstagramBioGenerator />

      <AdSlot slot="bio-below-results" />

      <section className="mt-12 rounded-xl p-8" style={{ backgroundColor: 'var(--color-bg-card)', border: '1px solid var(--color-border)' }}>
        <h2 className="text-2xl font-bold mb-6" style={{ color: 'var(--color-text-heading)' }}>How to Use the Instagram Bio Generator</h2>
        <div className="space-y-4 leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
          <p>Your Instagram bio is the most important piece of real estate on your profile. It is the first thing visitors see and often determines whether they hit the follow button or scroll away. With only 150 characters to work with, every word must earn its place. Our free Instagram bio generator helps you craft the perfect bio that captures your essence and drives action.</p>
          <h3 className="text-xl font-semibold" style={{ color: 'var(--color-text-heading)' }}>Step 1: Enter Your Details</h3>
          <p>Start by filling in your name and profession. Your profession is the most important field — it tells visitors immediately what you do and what kind of content they can expect. Be specific: instead of "entrepreneur," try "SaaS founder" or "handmade jewelry designer." Add your interests separated by commas to give your bio personality and relatability.</p>
          <h3 className="text-xl font-semibold" style={{ color: 'var(--color-text-heading)' }}>Step 2: Choose Your Call-to-Action</h3>
          <p>Select a CTA from the dropdown menu. Your CTA tells visitors what to do next — whether it is clicking your link, sending a DM, or checking out your latest post. A strong CTA can significantly increase profile engagement and drive traffic to your website or landing page.</p>
          <h3 className="text-xl font-semibold" style={{ color: 'var(--color-text-heading)' }}>Step 3: Select Your Style</h3>
          <p>Choose from four distinct styles: Minimal (clean and simple with few emojis), Creative (expressive with unique formatting), Professional (polished and business-focused), or Fun (playful with more emojis and personality). Each style produces different bio structures and emoji densities to match your brand identity.</p>
          <h3 className="text-xl font-semibold" style={{ color: 'var(--color-text-heading)' }}>Step 4: Generate and Refine</h3>
          <p>Click Generate to receive 4-6 unique bio variations. Each bio shows a real-time character count with a visual indicator — green means you are well within the limit, yellow means you are getting close, and red means you have exceeded 150 characters. Copy your favorite bio and paste it directly into Instagram.</p>
          <h3 className="text-xl font-semibold" style={{ color: 'var(--color-text-heading)' }}>Instagram Bio Best Practices</h3>
          <p>Use line breaks to create visual structure — a bio with clear sections is easier to scan than a single block of text. Place your most important information on the first line since it appears in search results. Include relevant keywords that people might search for to improve your discoverability. Add a branded hashtag if you have one. Keep your CTA action-oriented with verbs like "Shop," "Download," "Join," or "DM." Finally, update your bio regularly to reflect current promotions, achievements, or seasonal content.</p>
        </div>
      </section>

      <AdSlot slot="bio-in-content" />

      <section className="mt-12">
        <h2 className="text-2xl font-bold mb-6" style={{ color: 'var(--color-text-heading)' }}>Frequently Asked Questions</h2>
        <FAQ items={faqs} />
      </section>

      <section className="mt-12">
        <RelatedTools tools={related} />
      </section>

      <AdSlot slot="bio-footer" />
    </div>
  );
}
