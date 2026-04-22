export interface YouTubeTag {
  tag: string;
  relevance: number;
}

export interface TagCategory {
  name: string;
  keywords: string[];
  tags: YouTubeTag[];
}

export const tagCategories: TagCategory[] = [
  {
    name: 'gaming',
    keywords: ['gaming', 'game', 'gamer', 'gameplay', 'playthrough', 'walkthrough', 'lets play'],
    tags: [
      { tag: 'gaming', relevance: 98 }, { tag: 'gameplay', relevance: 95 }, { tag: 'gamer', relevance: 93 },
      { tag: 'lets play', relevance: 90 }, { tag: 'walkthrough', relevance: 88 }, { tag: 'playthrough', relevance: 86 },
      { tag: 'video games', relevance: 84 }, { tag: 'gaming channel', relevance: 82 }, { tag: 'game review', relevance: 80 },
      { tag: 'pc gaming', relevance: 78 }, { tag: 'console gaming', relevance: 76 }, { tag: 'online gaming', relevance: 74 },
      { tag: 'multiplayer', relevance: 72 }, { tag: 'esports', relevance: 70 }, { tag: 'stream highlights', relevance: 68 },
    ],
  },
  {
    name: 'tech',
    keywords: ['tech', 'technology', 'review', 'unboxing', 'gadget', 'smartphone', 'laptop', 'computer'],
    tags: [
      { tag: 'tech', relevance: 98 }, { tag: 'technology', relevance: 96 }, { tag: 'tech review', relevance: 94 },
      { tag: 'unboxing', relevance: 92 }, { tag: 'gadgets', relevance: 90 }, { tag: 'smartphone review', relevance: 88 },
      { tag: 'laptop review', relevance: 86 }, { tag: 'best tech', relevance: 84 }, { tag: 'tech news', relevance: 82 },
      { tag: 'product review', relevance: 80 }, { tag: 'hands on', relevance: 78 }, { tag: 'first look', relevance: 76 },
      { tag: 'comparison', relevance: 74 }, { tag: 'best budget', relevance: 72 }, { tag: 'setup tour', relevance: 70 },
    ],
  },
  {
    name: 'cooking',
    keywords: ['cooking', 'recipe', 'food', 'cook', 'baking', 'kitchen', 'meal', 'chef'],
    tags: [
      { tag: 'cooking', relevance: 98 }, { tag: 'recipe', relevance: 96 }, { tag: 'food', relevance: 94 },
      { tag: 'how to cook', relevance: 92 }, { tag: 'easy recipe', relevance: 90 }, { tag: 'cooking tutorial', relevance: 88 },
      { tag: 'homemade', relevance: 86 }, { tag: 'baking', relevance: 84 }, { tag: 'meal prep', relevance: 82 },
      { tag: 'healthy recipe', relevance: 80 }, { tag: 'quick recipe', relevance: 78 }, { tag: 'dinner ideas', relevance: 76 },
      { tag: 'cooking tips', relevance: 74 }, { tag: 'kitchen hacks', relevance: 72 }, { tag: 'food review', relevance: 70 },
    ],
  },
  {
    name: 'fitness',
    keywords: ['fitness', 'workout', 'exercise', 'gym', 'training', 'bodybuilding', 'yoga', 'cardio'],
    tags: [
      { tag: 'fitness', relevance: 98 }, { tag: 'workout', relevance: 96 }, { tag: 'exercise', relevance: 94 },
      { tag: 'home workout', relevance: 92 }, { tag: 'gym', relevance: 90 }, { tag: 'training', relevance: 88 },
      { tag: 'bodybuilding', relevance: 86 }, { tag: 'yoga', relevance: 84 }, { tag: 'cardio', relevance: 82 },
      { tag: 'weight loss', relevance: 80 }, { tag: 'muscle building', relevance: 78 }, { tag: 'fitness motivation', relevance: 76 },
      { tag: 'full body workout', relevance: 74 }, { tag: 'no equipment workout', relevance: 72 }, { tag: 'beginner workout', relevance: 70 },
    ],
  },
  {
    name: 'beauty',
    keywords: ['beauty', 'makeup', 'skincare', 'tutorial', 'cosmetics', 'hair', 'nails', 'grwm'],
    tags: [
      { tag: 'beauty', relevance: 98 }, { tag: 'makeup tutorial', relevance: 96 }, { tag: 'skincare routine', relevance: 94 },
      { tag: 'makeup', relevance: 92 }, { tag: 'skincare', relevance: 90 }, { tag: 'grwm', relevance: 88 },
      { tag: 'get ready with me', relevance: 86 }, { tag: 'beauty tips', relevance: 84 }, { tag: 'hair tutorial', relevance: 82 },
      { tag: 'drugstore makeup', relevance: 80 }, { tag: 'beauty routine', relevance: 78 }, { tag: 'makeup review', relevance: 76 },
      { tag: 'natural makeup', relevance: 74 }, { tag: 'nail art', relevance: 72 }, { tag: 'beauty hacks', relevance: 70 },
    ],
  },
  {
    name: 'music',
    keywords: ['music', 'song', 'cover', 'guitar', 'piano', 'singing', 'beat', 'production'],
    tags: [
      { tag: 'music', relevance: 98 }, { tag: 'music video', relevance: 96 }, { tag: 'cover song', relevance: 94 },
      { tag: 'guitar tutorial', relevance: 92 }, { tag: 'piano tutorial', relevance: 90 }, { tag: 'singing', relevance: 88 },
      { tag: 'music production', relevance: 86 }, { tag: 'beat making', relevance: 84 }, { tag: 'original song', relevance: 82 },
      { tag: 'acoustic cover', relevance: 80 }, { tag: 'music theory', relevance: 78 }, { tag: 'how to sing', relevance: 76 },
      { tag: 'songwriting', relevance: 74 }, { tag: 'music tutorial', relevance: 72 }, { tag: 'live performance', relevance: 70 },
    ],
  },
  {
    name: 'education',
    keywords: ['education', 'learn', 'tutorial', 'how to', 'explained', 'course', 'study', 'lesson'],
    tags: [
      { tag: 'education', relevance: 98 }, { tag: 'tutorial', relevance: 96 }, { tag: 'how to', relevance: 94 },
      { tag: 'explained', relevance: 92 }, { tag: 'learn', relevance: 90 }, { tag: 'online course', relevance: 88 },
      { tag: 'study tips', relevance: 86 }, { tag: 'educational', relevance: 84 }, { tag: 'lesson', relevance: 82 },
      { tag: 'tips and tricks', relevance: 80 }, { tag: 'beginners guide', relevance: 78 }, { tag: 'step by step', relevance: 76 },
      { tag: 'knowledge', relevance: 74 }, { tag: 'school', relevance: 72 }, { tag: 'learning', relevance: 70 },
    ],
  },
  {
    name: 'vlog',
    keywords: ['vlog', 'daily', 'life', 'day in the life', 'routine', 'lifestyle', 'travel vlog'],
    tags: [
      { tag: 'vlog', relevance: 98 }, { tag: 'daily vlog', relevance: 96 }, { tag: 'day in the life', relevance: 94 },
      { tag: 'lifestyle', relevance: 92 }, { tag: 'routine', relevance: 90 }, { tag: 'morning routine', relevance: 88 },
      { tag: 'travel vlog', relevance: 86 }, { tag: 'weekly vlog', relevance: 84 }, { tag: 'vlogger', relevance: 82 },
      { tag: 'life update', relevance: 80 }, { tag: 'day in my life', relevance: 78 }, { tag: 'productive day', relevance: 76 },
      { tag: 'come with me', relevance: 74 }, { tag: 'spend the day', relevance: 72 }, { tag: 'my life', relevance: 70 },
    ],
  },
  {
    name: 'business',
    keywords: ['business', 'entrepreneur', 'money', 'finance', 'investing', 'startup', 'side hustle', 'passive income'],
    tags: [
      { tag: 'business', relevance: 98 }, { tag: 'entrepreneur', relevance: 96 }, { tag: 'make money online', relevance: 94 },
      { tag: 'finance', relevance: 92 }, { tag: 'investing', relevance: 90 }, { tag: 'passive income', relevance: 88 },
      { tag: 'side hustle', relevance: 86 }, { tag: 'startup', relevance: 84 }, { tag: 'business tips', relevance: 82 },
      { tag: 'financial freedom', relevance: 80 }, { tag: 'money tips', relevance: 78 }, { tag: 'online business', relevance: 76 },
      { tag: 'stock market', relevance: 74 }, { tag: 'crypto', relevance: 72 }, { tag: 'budgeting', relevance: 70 },
    ],
  },
  {
    name: 'travel',
    keywords: ['travel', 'vacation', 'trip', 'destination', 'explore', 'adventure', 'backpacking', 'tourism'],
    tags: [
      { tag: 'travel', relevance: 98 }, { tag: 'travel vlog', relevance: 96 }, { tag: 'travel guide', relevance: 94 },
      { tag: 'vacation', relevance: 92 }, { tag: 'adventure', relevance: 90 }, { tag: 'explore', relevance: 88 },
      { tag: 'travel tips', relevance: 86 }, { tag: 'backpacking', relevance: 84 }, { tag: 'destination', relevance: 82 },
      { tag: 'budget travel', relevance: 80 }, { tag: 'solo travel', relevance: 78 }, { tag: 'road trip', relevance: 76 },
      { tag: 'travel photography', relevance: 74 }, { tag: 'hidden gems', relevance: 72 }, { tag: 'things to do', relevance: 70 },
    ],
  },
  {
    name: 'diy',
    keywords: ['diy', 'craft', 'handmade', 'project', 'build', 'woodworking', 'home improvement'],
    tags: [
      { tag: 'diy', relevance: 98 }, { tag: 'do it yourself', relevance: 96 }, { tag: 'diy project', relevance: 94 },
      { tag: 'crafts', relevance: 92 }, { tag: 'handmade', relevance: 90 }, { tag: 'how to build', relevance: 88 },
      { tag: 'woodworking', relevance: 86 }, { tag: 'home improvement', relevance: 84 }, { tag: 'diy home', relevance: 82 },
      { tag: 'craft ideas', relevance: 80 }, { tag: 'easy diy', relevance: 78 }, { tag: 'home decor diy', relevance: 76 },
      { tag: 'upcycle', relevance: 74 }, { tag: 'maker', relevance: 72 }, { tag: 'creative ideas', relevance: 70 },
    ],
  },
  {
    name: 'photography',
    keywords: ['photography', 'photo', 'camera', 'editing', 'lightroom', 'photoshop', 'portrait'],
    tags: [
      { tag: 'photography', relevance: 98 }, { tag: 'photography tips', relevance: 96 }, { tag: 'camera', relevance: 94 },
      { tag: 'photo editing', relevance: 92 }, { tag: 'lightroom', relevance: 90 }, { tag: 'photoshop', relevance: 88 },
      { tag: 'portrait photography', relevance: 86 }, { tag: 'landscape photography', relevance: 84 }, { tag: 'camera gear', relevance: 82 },
      { tag: 'photography tutorial', relevance: 80 }, { tag: 'street photography', relevance: 78 }, { tag: 'photo tips', relevance: 76 },
      { tag: 'editing tutorial', relevance: 74 }, { tag: 'camera settings', relevance: 72 }, { tag: 'composition', relevance: 70 },
    ],
  },
  {
    name: 'programming',
    keywords: ['programming', 'coding', 'developer', 'web development', 'python', 'javascript', 'software'],
    tags: [
      { tag: 'programming', relevance: 98 }, { tag: 'coding', relevance: 96 }, { tag: 'web development', relevance: 94 },
      { tag: 'python', relevance: 92 }, { tag: 'javascript', relevance: 90 }, { tag: 'coding tutorial', relevance: 88 },
      { tag: 'software development', relevance: 86 }, { tag: 'learn to code', relevance: 84 }, { tag: 'developer', relevance: 82 },
      { tag: 'programming tutorial', relevance: 80 }, { tag: 'react', relevance: 78 }, { tag: 'html css', relevance: 76 },
      { tag: 'app development', relevance: 74 }, { tag: 'code with me', relevance: 72 }, { tag: 'full stack', relevance: 70 },
    ],
  },
  {
    name: 'fashion',
    keywords: ['fashion', 'style', 'outfit', 'haul', 'lookbook', 'clothing', 'try on'],
    tags: [
      { tag: 'fashion', relevance: 98 }, { tag: 'outfit ideas', relevance: 96 }, { tag: 'haul', relevance: 94 },
      { tag: 'lookbook', relevance: 92 }, { tag: 'style', relevance: 90 }, { tag: 'try on haul', relevance: 88 },
      { tag: 'fashion tips', relevance: 86 }, { tag: 'ootd', relevance: 84 }, { tag: 'clothing haul', relevance: 82 },
      { tag: 'fashion trends', relevance: 80 }, { tag: 'wardrobe', relevance: 78 }, { tag: 'styling tips', relevance: 76 },
      { tag: 'affordable fashion', relevance: 74 }, { tag: 'capsule wardrobe', relevance: 72 }, { tag: 'thrift haul', relevance: 70 },
    ],
  },
  {
    name: 'pets',
    keywords: ['pet', 'dog', 'cat', 'puppy', 'kitten', 'animal', 'pet care'],
    tags: [
      { tag: 'pets', relevance: 98 }, { tag: 'dog', relevance: 96 }, { tag: 'cat', relevance: 94 },
      { tag: 'puppy', relevance: 92 }, { tag: 'kitten', relevance: 90 }, { tag: 'pet care', relevance: 88 },
      { tag: 'cute animals', relevance: 86 }, { tag: 'dog training', relevance: 84 }, { tag: 'pet tips', relevance: 82 },
      { tag: 'funny pets', relevance: 80 }, { tag: 'animal videos', relevance: 78 }, { tag: 'pet vlog', relevance: 76 },
      { tag: 'dog vlog', relevance: 74 }, { tag: 'cat videos', relevance: 72 }, { tag: 'pet owner', relevance: 70 },
    ],
  },
  {
    name: 'motivation',
    keywords: ['motivation', 'self improvement', 'mindset', 'productivity', 'success', 'goals', 'habits'],
    tags: [
      { tag: 'motivation', relevance: 98 }, { tag: 'self improvement', relevance: 96 }, { tag: 'productivity', relevance: 94 },
      { tag: 'mindset', relevance: 92 }, { tag: 'success', relevance: 90 }, { tag: 'goals', relevance: 88 },
      { tag: 'habits', relevance: 86 }, { tag: 'motivational', relevance: 84 }, { tag: 'personal development', relevance: 82 },
      { tag: 'discipline', relevance: 80 }, { tag: 'self help', relevance: 78 }, { tag: 'growth mindset', relevance: 76 },
      { tag: 'morning routine', relevance: 74 }, { tag: 'life advice', relevance: 72 }, { tag: 'inspiration', relevance: 70 },
    ],
  },
  {
    name: 'sports',
    keywords: ['sports', 'football', 'basketball', 'soccer', 'baseball', 'highlights', 'athlete'],
    tags: [
      { tag: 'sports', relevance: 98 }, { tag: 'football', relevance: 96 }, { tag: 'basketball', relevance: 94 },
      { tag: 'soccer', relevance: 92 }, { tag: 'highlights', relevance: 90 }, { tag: 'nba', relevance: 88 },
      { tag: 'nfl', relevance: 86 }, { tag: 'athlete', relevance: 84 }, { tag: 'sports news', relevance: 82 },
      { tag: 'game highlights', relevance: 80 }, { tag: 'training', relevance: 78 }, { tag: 'best plays', relevance: 76 },
      { tag: 'sports analysis', relevance: 74 }, { tag: 'match', relevance: 72 }, { tag: 'championship', relevance: 70 },
    ],
  },
  {
    name: 'science',
    keywords: ['science', 'experiment', 'physics', 'chemistry', 'biology', 'space', 'research'],
    tags: [
      { tag: 'science', relevance: 98 }, { tag: 'experiment', relevance: 96 }, { tag: 'physics', relevance: 94 },
      { tag: 'chemistry', relevance: 92 }, { tag: 'biology', relevance: 90 }, { tag: 'space', relevance: 88 },
      { tag: 'science experiment', relevance: 86 }, { tag: 'research', relevance: 84 }, { tag: 'science explained', relevance: 82 },
      { tag: 'astronomy', relevance: 80 }, { tag: 'nature', relevance: 78 }, { tag: 'documentary', relevance: 76 },
      { tag: 'facts', relevance: 74 }, { tag: 'discovery', relevance: 72 }, { tag: 'science facts', relevance: 70 },
    ],
  },
  {
    name: 'art',
    keywords: ['art', 'drawing', 'painting', 'illustration', 'sketch', 'digital art', 'artist'],
    tags: [
      { tag: 'art', relevance: 98 }, { tag: 'drawing', relevance: 96 }, { tag: 'painting', relevance: 94 },
      { tag: 'illustration', relevance: 92 }, { tag: 'sketch', relevance: 90 }, { tag: 'digital art', relevance: 88 },
      { tag: 'art tutorial', relevance: 86 }, { tag: 'how to draw', relevance: 84 }, { tag: 'artist', relevance: 82 },
      { tag: 'speed drawing', relevance: 80 }, { tag: 'art tips', relevance: 78 }, { tag: 'procreate', relevance: 76 },
      { tag: 'watercolor', relevance: 74 }, { tag: 'acrylic painting', relevance: 72 }, { tag: 'art process', relevance: 70 },
    ],
  },
  {
    name: 'cars',
    keywords: ['car', 'auto', 'vehicle', 'driving', 'review', 'supercar', 'electric', 'modification'],
    tags: [
      { tag: 'cars', relevance: 98 }, { tag: 'car review', relevance: 96 }, { tag: 'automotive', relevance: 94 },
      { tag: 'driving', relevance: 92 }, { tag: 'supercar', relevance: 90 }, { tag: 'electric car', relevance: 88 },
      { tag: 'car modification', relevance: 86 }, { tag: 'test drive', relevance: 84 }, { tag: 'car vlog', relevance: 82 },
      { tag: 'luxury cars', relevance: 80 }, { tag: 'car detailing', relevance: 78 }, { tag: 'car tips', relevance: 76 },
      { tag: 'new car', relevance: 74 }, { tag: 'car comparison', relevance: 72 }, { tag: 'car news', relevance: 70 },
    ],
  },
];

export const longTailSuffixes = [
  'tutorial', 'for beginners', 'tips', 'guide', 'review', 'how to', 'best',
  'top 10', 'vs', 'explained', 'in 2024', 'in 2025', 'tricks', 'hacks',
  'step by step', 'complete guide', 'for free', 'at home', 'easy', 'advanced',
];
