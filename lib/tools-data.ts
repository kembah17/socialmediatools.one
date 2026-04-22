export interface Tool {
  name: string;
  slug: string;
  description: string;
  icon: string;
  shortDesc: string;
}

export const tools: Tool[] = [
  {
    name: 'Hashtag Generator',
    slug: '/hashtag-generator',
    description: 'Generate trending and niche hashtags for Instagram, Twitter, TikTok, and LinkedIn. Boost your social media reach with optimized hashtag sets.',
    icon: '#',
    shortDesc: 'Generate optimized hashtags for any platform',
  },
  {
    name: 'Caption Generator',
    slug: '/caption-generator',
    description: 'Create engaging captions for Instagram, Facebook, LinkedIn, Twitter, and TikTok. Choose your tone and get multiple variations instantly.',
    icon: '\u270D',
    shortDesc: 'Create engaging captions for any platform',
  },
  {
    name: 'Instagram Bio Generator',
    slug: '/instagram-bio-generator',
    description: 'Generate creative Instagram bios that stand out. Choose from minimal, creative, professional, and fun styles.',
    icon: '\u{1F464}',
    shortDesc: 'Create standout Instagram bios',
  },
  {
    name: 'YouTube Tag Generator',
    slug: '/youtube-tag-generator',
    description: 'Generate optimized YouTube tags to improve video discoverability. Track character limits and get long-tail variations.',
    icon: '\u{1F3AC}',
    shortDesc: 'Optimize YouTube video tags',
  },
  {
    name: 'Twitter Character Counter',
    slug: '/twitter-character-counter',
    description: 'Count characters in real-time with URL detection, mention highlighting, and automatic thread splitting for Twitter/X posts.',
    icon: '\u{1F426}',
    shortDesc: 'Count characters and split threads',
  },
  {
    name: 'LinkedIn Post Formatter',
    slug: '/linkedin-post-formatter',
    description: 'Format LinkedIn posts with bold, italic, bullet points, emojis, and hooks. Preview and copy Unicode-formatted text.',
    icon: '\u{1F4BC}',
    shortDesc: 'Format LinkedIn posts with rich text',
  },
  {
    name: 'Image Resizer',
    slug: '/image-resizer',
    description: 'Resize images for any social media platform. Supports Instagram, Facebook, Twitter, LinkedIn, YouTube, and TikTok presets.',
    icon: '\u{1F5BC}',
    shortDesc: 'Resize images for social media',
  },
];

export function getRelatedTools(currentSlug: string): Tool[] {
  return tools.filter((t) => t.slug !== currentSlug).slice(0, 4);
}
