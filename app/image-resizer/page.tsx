import type { Metadata } from 'next';
import { ImageResizer } from '@/components/tools/ImageResizer';
import { AdSlot } from '@/components/ui/AdSlot';
import { FAQ } from '@/components/ui/FAQ';
import { FaqSchema } from '@/components/seo/FaqSchema';
import { RelatedTools } from '@/components/ui/RelatedTools';
import { tools } from '@/lib/tools-data';

export const metadata: Metadata = {
  title: 'Free Social Media Image Resizer - All Platform Sizes | SocialMediaTools.one',
  description: 'Resize images for Instagram, Facebook, Twitter, LinkedIn, YouTube, and TikTok. 12 platform presets with crop and fit modes. Free, runs in your browser.',
  keywords: 'image resizer, social media image size, instagram image size, facebook cover size, twitter header size, youtube thumbnail size, resize image online',
  openGraph: {
    title: 'Free Social Media Image Resizer | SocialMediaTools.one',
    description: 'Resize images for all social media platforms with 12 presets.',
    url: 'https://socialmediatools.one/image-resizer',
    type: 'website',
  },
  alternates: { canonical: 'https://socialmediatools.one/image-resizer' },
};

const faqs = [
  { question: 'What image sizes does each social media platform require?', answer: 'Each platform has specific optimal sizes: Instagram Feed (1080x1080), Story (1080x1920), Landscape (1080x566); Facebook Link (1200x630), Cover (820x312); Twitter Header (1600x900), Post (1200x675); LinkedIn Post (1200x627), Banner (1584x396); YouTube Thumbnail (1280x720), Banner (2560x1440); TikTok Video (1080x1920). Our tool includes all these as one-click presets.' },
  { question: 'What is the difference between crop and fit modes?', answer: 'Crop mode scales your image to completely fill the target dimensions, then crops the edges that extend beyond the frame. This ensures no empty space but may cut off parts of your image. Fit mode scales your image to fit entirely within the target dimensions, adding white padding to fill any remaining space. Choose crop for full-bleed images and fit when you need to show the entire image.' },
  { question: 'Is my image uploaded to a server?', answer: 'No. Our image resizer runs entirely in your browser using the HTML5 Canvas API. Your images are never uploaded to any server, ensuring complete privacy. All processing happens locally on your device, which also means the tool works offline once the page is loaded.' },
  { question: 'What image formats are supported?', answer: 'The tool supports all common image formats including JPG/JPEG, PNG, WebP, and GIF (first frame). The resized image is downloaded as PNG format to preserve quality. For best results, start with the highest resolution source image available.' },
  { question: 'Can I resize multiple images at once?', answer: 'Currently, the tool processes one image at a time. Upload an image, select your desired preset, and download the result. Then upload the same or a different image for the next size. This approach ensures maximum quality for each resize operation.' },
];

export default function ImageResizerPage() {
  const related = tools.filter((t) => t.slug !== 'image-resizer').slice(0, 3);
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <FaqSchema items={faqs} />
      <AdSlot slot="resizer-leaderboard" />

      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-extrabold mb-3" style={{ color: 'var(--color-text-heading)' }}>Free Social Media Image Resizer</h1>
        <p className="text-lg" style={{ color: 'var(--color-text-secondary)' }}>Resize images for Instagram, Facebook, Twitter, LinkedIn, YouTube, and TikTok with one click.</p>
      </div>

      <ImageResizer />

      <AdSlot slot="resizer-below-results" />

      <section className="mt-12 rounded-xl p-8" style={{ backgroundColor: 'var(--color-bg-card)', border: '1px solid var(--color-border)' }}>
        <h2 className="text-2xl font-bold mb-6" style={{ color: 'var(--color-text-heading)' }}>How to Use the Social Media Image Resizer</h2>
        <div className="space-y-4 leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
          <p>Every social media platform has specific image size requirements. Posting images in the wrong dimensions can result in awkward cropping, blurry visuals, or wasted screen space. Our free image resizer eliminates this problem by providing 12 platform-specific presets that resize your images to the exact dimensions each platform requires. The tool runs entirely in your browser for instant results and complete privacy.</p>
          <h3 className="text-xl font-semibold" style={{ color: 'var(--color-text-heading)' }}>Step 1: Upload Your Image</h3>
          <p>Drag and drop an image onto the upload area, or click to browse your files. The tool accepts JPG, PNG, WebP, and GIF formats. For best results, use the highest resolution source image available — it is always better to scale down than up. Once uploaded, you will see the original image dimensions displayed.</p>
          <h3 className="text-xl font-semibold" style={{ color: 'var(--color-text-heading)' }}>Step 2: Select a Platform Preset</h3>
          <p>Choose from 12 platform-specific presets organized by social network. Instagram offers Feed (1080x1080 square), Story (1080x1920 vertical), and Landscape (1080x566). Facebook includes Link preview (1200x630) and Cover photo (820x312). Twitter provides Header (1600x900) and Post (1200x675). LinkedIn has Post (1200x627) and Banner (1584x396). YouTube offers Thumbnail (1280x720) and Channel Banner (2560x1440). TikTok includes the standard Video size (1080x1920).</p>
          <h3 className="text-xl font-semibold" style={{ color: 'var(--color-text-heading)' }}>Step 3: Choose Resize Mode</h3>
          <p>Select between Crop to Fill and Fit with Padding. Crop mode scales your image to completely cover the target area and crops any overflow from the center — ideal for profile pictures, cover photos, and feed posts where you want edge-to-edge imagery. Fit mode scales your image to fit entirely within the target dimensions and adds white padding to fill remaining space — perfect when you need to preserve the entire image without any cropping.</p>
          <h3 className="text-xl font-semibold" style={{ color: 'var(--color-text-heading)' }}>Step 4: Preview and Download</h3>
          <p>The preview panel shows your resized image in real-time as you change presets and modes. When you are satisfied with the result, click the Download button to save the resized image. The file is automatically named with the dimensions appended (e.g., photo_1080x1080.png) so you can easily organize multiple sizes of the same image.</p>
          <h3 className="text-xl font-semibold" style={{ color: 'var(--color-text-heading)' }}>Image Optimization Tips</h3>
          <p>Always start with the highest quality source image. Use crop mode for images where the subject is centered and you want a full-bleed look. Use fit mode for infographics, screenshots, or images with important content near the edges. For Instagram, maintain a consistent visual style across your feed by using the same preset for all posts. For YouTube thumbnails, ensure your subject is visible even at small sizes since thumbnails appear as small previews in search results and suggested videos. Test your resized images on mobile devices, as most social media consumption happens on phones.</p>
        </div>
      </section>

      <AdSlot slot="resizer-in-content" />

      <section className="mt-12">
        <h2 className="text-2xl font-bold mb-6" style={{ color: 'var(--color-text-heading)' }}>Frequently Asked Questions</h2>
        <FAQ items={faqs} />
      </section>

      <section className="mt-12">
        <RelatedTools tools={related} />
      </section>

      <AdSlot slot="resizer-footer" />
    </div>
  );
}
