import type { Metadata } from 'next';
import { YouTubeTagGenerator } from '@/components/tools/YouTubeTagGenerator';
import { AdSlot } from '@/components/ui/AdSlot';
import { FAQ } from '@/components/ui/FAQ';
import { FaqSchema } from '@/components/seo/FaqSchema';
import { RelatedTools } from '@/components/ui/RelatedTools';
import { tools } from '@/lib/tools-data';

export const metadata: Metadata = {
  title: 'Free YouTube Tag Generator - Boost Video SEO | SocialMediaTools.one',
  description: 'Generate relevant YouTube tags with long-tail variations to improve video SEO. 300+ tags across 20+ categories with character count tracking. Free, no signup.',
  keywords: 'youtube tag generator, youtube tags, video tags, youtube seo, youtube keywords, video seo tags, youtube tag finder',
  openGraph: {
    title: 'Free YouTube Tag Generator | SocialMediaTools.one',
    description: 'Generate relevant YouTube tags to boost your video SEO instantly.',
    url: 'https://socialmediatools.one/youtube-tag-generator',
    type: 'website',
  },
  alternates: { canonical: 'https://socialmediatools.one/youtube-tag-generator' },
};

const faqs = [
  { question: 'How many tags can I add to a YouTube video?', answer: 'YouTube allows up to 500 characters total for tags (not 500 tags). Most successful videos use 5-15 tags that are highly relevant to the content. Our generator tracks the total character count in real-time so you never exceed the limit.' },
  { question: 'Do YouTube tags still matter for SEO?', answer: 'Yes, while YouTube has stated that tags play a minor role compared to titles and descriptions, they still help YouTube understand your video content and can improve discoverability. Tags are especially useful for commonly misspelled topics and for associating your video with related content.' },
  { question: 'What are long-tail tags and why should I use them?', answer: 'Long-tail tags are longer, more specific phrases like "how to edit videos for beginners" instead of just "video editing." They have less competition and attract more targeted viewers who are more likely to watch your entire video and engage. Our generator automatically creates long-tail variations of your topic.' },
  { question: 'Should I use the same tags on every video?', answer: 'No, each video should have tags specific to its content. While you can include a few consistent brand tags, most tags should be unique to the video topic. Using the same tags on every video can confuse the algorithm about what each video is actually about.' },
  { question: 'How do I choose the best tags for my video?', answer: 'Start with your exact video topic as the first tag, then add variations and related terms. Mix broad tags (high search volume) with specific tags (lower competition). Include your channel name as a tag. Our generator sorts tags by relevance and provides both base tags and long-tail variations.' },
];

export default function YouTubeTagGeneratorPage() {
  const related = tools.filter((t) => t.slug !== 'youtube-tag-generator').slice(0, 3);
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <FaqSchema items={faqs} />
      <AdSlot slot="yttag-leaderboard" />

      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-extrabold mb-3" style={{ color: 'var(--color-text-heading)' }}>Free YouTube Tag Generator</h1>
        <p className="text-lg" style={{ color: 'var(--color-text-secondary)' }}>Generate relevant tags with long-tail variations to boost your YouTube video SEO.</p>
      </div>

      <YouTubeTagGenerator />

      <AdSlot slot="yttag-below-results" />

      <section className="mt-12 rounded-xl p-8" style={{ backgroundColor: 'var(--color-bg-card)', border: '1px solid var(--color-border)' }}>
        <h2 className="text-2xl font-bold mb-6" style={{ color: 'var(--color-text-heading)' }}>How to Use the YouTube Tag Generator</h2>
        <div className="space-y-4 leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
          <p>YouTube tags are metadata that help the platform understand what your video is about and who should see it. While the algorithm primarily relies on titles, descriptions, and watch time, tags still play a supporting role in video discoverability — especially for new channels and niche topics. Our free YouTube tag generator helps you find the most relevant tags to maximize your video reach.</p>
          <h3 className="text-xl font-semibold" style={{ color: 'var(--color-text-heading)' }}>Step 1: Enter Your Video Topic</h3>
          <p>Type your video topic or title into the input field. Be as specific as possible — "beginner yoga morning routine" will generate more targeted tags than just "yoga." The generator matches your input against our database of 300+ tags across 20+ categories to find the most relevant suggestions.</p>
          <h3 className="text-xl font-semibold" style={{ color: 'var(--color-text-heading)' }}>Step 2: Select a Category</h3>
          <p>Optionally select a category to narrow down results. Categories include gaming, tech, cooking, fitness, music, education, beauty, travel, and many more. Selecting a category ensures you get tags specifically curated for that content niche, even if your topic description is broad.</p>
          <h3 className="text-xl font-semibold" style={{ color: 'var(--color-text-heading)' }}>Step 3: Review Generated Tags</h3>
          <p>Tags are displayed in two sections: Base Tags (directly relevant to your topic with relevance scores) and Long-Tail Variations (extended phrases that target specific search queries). The character counter at the top tracks your total tag length against YouTube 500-character limit with a visual progress bar.</p>
          <h3 className="text-xl font-semibold" style={{ color: 'var(--color-text-heading)' }}>Step 4: Copy and Apply</h3>
          <p>Click individual tags to copy them one at a time, or use the Copy All Tags button to grab everything as a comma-separated list ready to paste into YouTube Studio. The tags are formatted exactly as YouTube expects them.</p>
          <h3 className="text-xl font-semibold" style={{ color: 'var(--color-text-heading)' }}>YouTube Tag Strategy Tips</h3>
          <p>Always put your most important tag first — YouTube gives slightly more weight to the first few tags. Include your exact video title as a tag. Use a mix of broad and specific tags to balance reach and relevance. Add common misspellings of your topic if applicable. Include your channel name and any series names as tags for better internal linking. Monitor which tags drive the most traffic in YouTube Analytics and refine your strategy over time. Remember that tags work best when they accurately describe your content — misleading tags can hurt your channel performance.</p>
        </div>
      </section>

      <AdSlot slot="yttag-in-content" />

      <section className="mt-12">
        <h2 className="text-2xl font-bold mb-6" style={{ color: 'var(--color-text-heading)' }}>Frequently Asked Questions</h2>
        <FAQ items={faqs} />
      </section>

      <section className="mt-12">
        <RelatedTools tools={related} />
      </section>

      <AdSlot slot="yttag-footer" />
    </div>
  );
}
