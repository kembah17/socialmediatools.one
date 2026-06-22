import type { Metadata } from 'next';
import { TwitterCharacterCounter } from '@/components/tools/TwitterCharacterCounter';
import { AdSlot } from '@/components/ui/AdSlot';
import { FAQ } from '@/components/ui/FAQ';
import { FaqSchema } from '@/components/seo/FaqSchema';
import { RelatedTools } from '@/components/ui/RelatedTools';
import { tools } from '@/lib/tools-data';

export const metadata: Metadata = {
  title: 'Free Twitter/X Character Counter - Real-Time with Thread Splitter | SocialMediaTools.one',
  description: 'Count Twitter/X characters in real-time with URL detection, mention highlighting, and automatic thread splitter. Handles t.co URL shortening. Free, no signup.',
  keywords: 'twitter character counter, tweet counter, twitter character limit, tweet length, thread splitter, twitter thread maker, x character counter',
  openGraph: {
    title: 'Free Twitter/X Character Counter | SocialMediaTools.one',
    description: 'Count tweet characters in real-time with URL detection and thread splitting.',
    url: 'https://socialmediatools.one/twitter-character-counter',
    type: 'website',
  },
  alternates: { canonical: 'https://socialmediatools.one/twitter-character-counter' },
};

const faqs = [
  { question: 'What is the Twitter/X character limit?', answer: 'Twitter (now X) has a 280-character limit for standard tweets. Twitter Blue/X Premium subscribers can post up to 25,000 characters. Our counter uses the standard 280-character limit and provides a thread splitter for longer content.' },
  { question: 'How does Twitter count URLs?', answer: 'Twitter uses its t.co link shortener for all URLs. Regardless of the actual URL length, every URL in a tweet counts as exactly 23 characters. Our counter automatically detects URLs and counts them as 23 characters each, giving you an accurate character count.' },
  { question: 'Do mentions and hashtags count toward the character limit?', answer: 'Yes, @mentions and #hashtags count toward the 280-character limit. However, when replying to a tweet, the @mention of the person you are replying to does not count. Our counter highlights mentions and hashtags in your text for easy identification.' },
  { question: 'How does the thread splitter work?', answer: 'When your text exceeds 280 characters, our thread splitter automatically divides it into tweet-sized chunks at sentence boundaries. Each chunk includes a thread counter (e.g., 1/3, 2/3, 3/3) and stays within the character limit. You can copy each tweet individually.' },
  { question: 'Do emojis count as one character on Twitter?', answer: 'Most emojis count as 2 characters on Twitter due to Unicode encoding. Some complex emojis (like flags or family emojis) can count as even more. Our counter provides an accurate count based on standard JavaScript string length, which closely matches Twitter counting for most content.' },
];

export default function TwitterCharacterCounterPage() {
  const related = tools.filter((t) => t.slug !== 'twitter-character-counter').slice(0, 3);
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <FaqSchema items={faqs} />
      <AdSlot slot="twitter-leaderboard" />

      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-extrabold mb-3" style={{ color: 'var(--color-text-heading)' }}>Free Twitter/X Character Counter</h1>
        <p className="text-lg" style={{ color: 'var(--color-text-secondary)' }}>Count characters in real-time with URL detection, highlighting, and automatic thread splitting.</p>
      </div>

      <TwitterCharacterCounter />

      <AdSlot slot="twitter-below-results" />

      <section className="mt-12 rounded-xl p-8" style={{ backgroundColor: 'var(--color-bg-card)', border: '1px solid var(--color-border)' }}>
        <h2 className="text-2xl font-bold mb-6" style={{ color: 'var(--color-text-heading)' }}>How to Use the Twitter Character Counter</h2>
        <div className="space-y-4 leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
          <p>Crafting the perfect tweet requires precision. With only 280 characters to work with, every word matters. Our free Twitter character counter gives you real-time feedback as you type, with intelligent URL detection, mention and hashtag highlighting, and an automatic thread splitter for longer content. Whether you are composing a single tweet or planning a thread, this tool ensures your content fits perfectly.</p>
          <h3 className="text-xl font-semibold" style={{ color: 'var(--color-text-heading)' }}>Real-Time Character Counting</h3>
          <p>Start typing in the text area and watch the character count update instantly. The circular progress indicator and progress bar change color as you approach the limit: green when you have plenty of room, yellow as you get close, and red when you exceed 280 characters. The remaining character count shows exactly how many characters you have left.</p>
          <h3 className="text-xl font-semibold" style={{ color: 'var(--color-text-heading)' }}>Smart URL Detection</h3>
          <p>Twitter uses its t.co link shortener for all URLs, which means every URL counts as exactly 23 characters regardless of its actual length. Our counter automatically detects URLs in your text and counts them correctly. URLs are highlighted in the preview so you can easily see which links are being detected. This means a 100-character URL only uses 23 of your 280 characters.</p>
          <h3 className="text-xl font-semibold" style={{ color: 'var(--color-text-heading)' }}>Mention and Hashtag Highlighting</h3>
          <p>The preview panel highlights @mentions and #hashtags in your brand color, making it easy to see how your tweet will look. This visual feedback helps you ensure your mentions are correctly formatted and your hashtags are properly tagged. Both mentions and hashtags count toward your character limit.</p>
          <h3 className="text-xl font-semibold" style={{ color: 'var(--color-text-heading)' }}>Automatic Thread Splitter</h3>
          <p>When your content exceeds 280 characters, the thread splitter automatically appears. It intelligently breaks your text at sentence boundaries to create natural-sounding tweets, each staying within the character limit. Thread numbering (1/n, 2/n, etc.) is automatically added. You can copy each tweet individually to post your thread manually, or use the entire thread as a planning tool.</p>
          <h3 className="text-xl font-semibold" style={{ color: 'var(--color-text-heading)' }}>Tips for Writing Better Tweets</h3>
          <p>The best tweets are concise and impactful. Start with your most important point since many users only read the first line. Use line breaks to improve readability. Include a call-to-action to drive engagement — ask a question, request a retweet, or direct followers to a link. Limit hashtags to 1-2 per tweet for maximum engagement. Schedule your tweets during peak hours (typically 9-11 AM and 1-3 PM in your target timezone) for maximum visibility. For threads, make the first tweet compelling enough to encourage readers to continue.</p>
        </div>
      </section>

      <AdSlot slot="twitter-in-content" />

      <section className="mt-12">
        <h2 className="text-2xl font-bold mb-6" style={{ color: 'var(--color-text-heading)' }}>Frequently Asked Questions</h2>
        <FAQ items={faqs} />
      </section>

      <section className="mt-12">
        <RelatedTools tools={related} />
      </section>

      <AdSlot slot="twitter-footer" />
    </div>
  );
}
