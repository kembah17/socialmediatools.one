import type { Metadata } from 'next';
import { LinkedInPostFormatter } from '@/components/tools/LinkedInPostFormatter';
import { AdSlot } from '@/components/ui/AdSlot';
import { FAQ } from '@/components/ui/FAQ';
import { FaqSchema } from '@/components/seo/FaqSchema';
import { RelatedTools } from '@/components/ui/RelatedTools';
import { tools } from '@/lib/tools-data';

export const metadata: Metadata = {
  title: 'Free LinkedIn Post Formatter - Bold, Italic & Emoji | SocialMediaTools.one',
  description: 'Format LinkedIn posts with Unicode bold and italic text, bullet points, emojis, hooks, and CTAs. Preview and copy formatted text. Free, no signup required.',
  keywords: 'linkedin post formatter, linkedin bold text, linkedin italic, linkedin formatting, linkedin post generator, linkedin emoji, unicode bold',
  openGraph: {
    title: 'Free LinkedIn Post Formatter | SocialMediaTools.one',
    description: 'Format LinkedIn posts with bold, italic, emojis, and proven templates.',
    url: 'https://socialmediatools.one/linkedin-post-formatter',
    type: 'website',
  },
  alternates: { canonical: 'https://socialmediatools.one/linkedin-post-formatter' },
};

const faqs = [
  { question: 'How do I make text bold on LinkedIn?', answer: 'LinkedIn does not support native bold formatting in posts. However, you can use Unicode bold characters that look bold when posted. Our formatter converts your selected text to Mathematical Bold Unicode characters that display as bold on LinkedIn and all other platforms. Simply select text and click the B button.' },
  { question: 'What is the LinkedIn post character limit?', answer: 'LinkedIn posts have a 3,000-character limit. However, only the first 210 characters are visible before the "see more" link, making your opening hook crucial. Our formatter shows a real-time character count with a progress bar so you can optimize your post length.' },
  { question: 'Do Unicode formatted characters affect LinkedIn algorithm?', answer: 'LinkedIn has not officially stated that Unicode formatting affects reach. However, posts with clear formatting, line breaks, and visual structure tend to get more engagement because they are easier to read. Use formatting strategically to highlight key points rather than making entire posts bold.' },
  { question: 'What makes a good LinkedIn hook?', answer: 'The best LinkedIn hooks create curiosity or make a bold statement in the first line. Examples include contrarian opinions, surprising statistics, personal stories, or direct questions. Our formatter includes 10 proven hook templates you can insert with one click and customize for your topic.' },
  { question: 'Can I use emojis in LinkedIn posts?', answer: 'Yes, emojis work well on LinkedIn when used professionally. They add visual breaks and draw attention to key points. Use them as bullet points, section headers, or to emphasize CTAs. Our emoji picker organizes emojis into categories including Business, Symbols, and Gestures for easy professional use.' },
];

export default function LinkedInPostFormatterPage() {
  const related = tools.filter((t) => t.slug !== 'linkedin-post-formatter').slice(0, 3);
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <FaqSchema items={faqs} />
      <AdSlot slot="linkedin-leaderboard" />

      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-extrabold mb-3" style={{ color: 'var(--color-text-heading)' }}>Free LinkedIn Post Formatter</h1>
        <p className="text-lg" style={{ color: 'var(--color-text-secondary)' }}>Format your LinkedIn posts with bold, italic, bullet points, emojis, hooks, and CTAs.</p>
      </div>

      <LinkedInPostFormatter />

      <AdSlot slot="linkedin-below-results" />

      <section className="mt-12 rounded-xl p-8" style={{ backgroundColor: 'var(--color-bg-card)', border: '1px solid var(--color-border)' }}>
        <h2 className="text-2xl font-bold mb-6" style={{ color: 'var(--color-text-heading)' }}>How to Use the LinkedIn Post Formatter</h2>
        <div className="space-y-4 leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
          <p>LinkedIn is the world&apos;s largest professional network with over 900 million members. Standing out in the feed requires more than great ideas — it requires great formatting. Our free LinkedIn post formatter gives you the tools to create visually compelling posts that stop the scroll and drive engagement. With Unicode bold and italic text, emoji integration, and proven templates, you can create professional posts that get noticed.</p>
          <h3 className="text-xl font-semibold" style={{ color: 'var(--color-text-heading)' }}>Formatting Toolbar</h3>
          <p>The toolbar provides four text formatting options. Select any text in the editor and click Bold (B) to convert it to Unicode bold characters, or Italic (I) for italic. These Unicode characters display as formatted text on LinkedIn without any special markup. The bullet list button adds bullet points to selected lines, and the numbered list button creates numbered lists. All formatting is preserved when you copy and paste to LinkedIn.</p>
          <h3 className="text-xl font-semibold" style={{ color: 'var(--color-text-heading)' }}>Emoji Picker</h3>
          <p>Click the Emoji button to open the categorized emoji picker. Emojis are organized into five categories: Smileys, Gestures, Business, Symbols, and Objects. Click any emoji to insert it at your cursor position. Professional emojis like checkmarks, rockets, light bulbs, and chart icons work particularly well on LinkedIn to add visual interest without appearing unprofessional.</p>
          <h3 className="text-xl font-semibold" style={{ color: 'var(--color-text-heading)' }}>Hook and CTA Templates</h3>
          <p>The Hook dropdown provides 10 proven opening lines that grab attention and encourage readers to click &quot;see more.&quot; The CTA dropdown offers 8 call-to-action templates for ending your post with a clear next step. Select any template to insert it into your post, then customize it with your specific details. These templates are based on high-performing LinkedIn posts.</p>
          <h3 className="text-xl font-semibold" style={{ color: 'var(--color-text-heading)' }}>Preview Panel</h3>
          <p>The preview panel shows exactly how your post will appear on LinkedIn, complete with a simulated profile header. This helps you visualize the final result before posting. Check that your formatting looks correct, your line breaks create good visual rhythm, and your hook is compelling enough to earn the &quot;see more&quot; click.</p>
          <h3 className="text-xl font-semibold" style={{ color: 'var(--color-text-heading)' }}>LinkedIn Post Best Practices</h3>
          <p>The first line is everything on LinkedIn — it determines whether users expand your post. Use a hook that creates curiosity or makes a bold claim. Add line breaks every 1-2 sentences for readability. Use bold text sparingly to highlight key points. End with a clear CTA and a question to drive comments. Post during business hours (Tuesday through Thursday, 8-10 AM) for maximum reach. Engage with comments within the first hour to boost algorithmic distribution.</p>
        </div>
      </section>

      <AdSlot slot="linkedin-in-content" />

      <section className="mt-12">
        <h2 className="text-2xl font-bold mb-6" style={{ color: 'var(--color-text-heading)' }}>Frequently Asked Questions</h2>
        <FAQ items={faqs} />
      </section>

      <section className="mt-12">
        <RelatedTools tools={related} />
      </section>

      <AdSlot slot="linkedin-footer" />
    </div>
  );
}
