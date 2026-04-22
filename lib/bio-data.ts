export interface BioTemplate {
  template: string;
  style: string;
}

export const bioStyles = ['minimal', 'creative', 'professional', 'fun'] as const;
export type BioStyle = (typeof bioStyles)[number];

export const emojiCollections: Record<string, string[]> = {
  business: ['\u{1F4BC}', '\u{1F4CA}', '\u{1F3AF}', '\u{1F680}', '\u{1F4A1}', '\u{1F4B0}', '\u2705'],
  creative: ['\u{1F3A8}', '\u2728', '\u{1F308}', '\u{1F525}', '\u{1F31F}', '\u{1F4AB}', '\u{1F3AD}'],
  lifestyle: ['\u2764\uFE0F', '\u2615', '\u{1F30D}', '\u{1F33F}', '\u{1F4F8}', '\u{1F3B5}', '\u{1F381}'],
  tech: ['\u{1F4BB}', '\u{1F4F1}', '\u2699\uFE0F', '\u{1F916}', '\u{1F310}', '\u{1F50C}', '\u{1F4A0}'],
  fitness: ['\u{1F4AA}', '\u{1F3CB}\uFE0F', '\u{1F525}', '\u{1F947}', '\u{1F3C3}', '\u{1F34E}', '\u{1F49A}'],
  food: ['\u{1F37D}\uFE0F', '\u{1F373}', '\u{1F370}', '\u{1F355}', '\u{1F372}', '\u2615', '\u{1F374}'],
  travel: ['\u2708\uFE0F', '\u{1F30D}', '\u{1F5FA}\uFE0F', '\u{1F3D6}\uFE0F', '\u26F0\uFE0F', '\u{1F9ED}', '\u{1F30E}'],
  music: ['\u{1F3B5}', '\u{1F3B6}', '\u{1F3A4}', '\u{1F3B8}', '\u{1F3B9}', '\u{1F3A7}', '\u{1F3BC}'],
};

export const ctaOptions: string[] = [
  'Link below',
  'DM for collabs',
  'Shop my favorites',
  'Book a call',
  'Free guide below',
  'New content weekly',
  'Let\'s connect',
  'Work with me',
  'Latest project below',
  'Subscribe to my newsletter',
];

export const bioTemplates: BioTemplate[] = [
  // Minimal
  { template: '{name}\n{profession}\n{interest1}\n{cta}', style: 'minimal' },
  { template: '{name} | {profession}\n{interest1} & {interest2}\n{cta}', style: 'minimal' },
  { template: '{profession}\n{interest1} . {interest2} . {interest3}\n{cta}', style: 'minimal' },
  { template: '{name}\n{profession} based in the moment\n{cta}', style: 'minimal' },
  { template: '{profession} | {interest1}\nSimple living, big dreams\n{cta}', style: 'minimal' },
  { template: '{name}\n{profession}\nLess is more\n{cta}', style: 'minimal' },
  { template: '{interest1} / {interest2} / {profession}\n{cta}', style: 'minimal' },
  { template: '{name} - {profession}\nKeeping it simple\n{cta}', style: 'minimal' },
  { template: '{profession}\nDoing what I love\n{cta}', style: 'minimal' },
  { template: '{name}\n{profession} | {interest1} enthusiast\n{cta}', style: 'minimal' },
  // Creative
  { template: '{emoji1} {profession} by day\n{emoji2} {interest1} lover by night\n{emoji3} {interest2} on weekends\n{cta}', style: 'creative' },
  { template: 'Chapter: {profession}\nPlot twist: {interest1}\nGenre: {interest2}\n{emoji1} {cta}', style: 'creative' },
  { template: '{emoji1} {name}\'s universe {emoji2}\n{profession} | {interest1} | {interest2}\nCreating magic daily\n{cta}', style: 'creative' },
  { template: 'Welcome to my world {emoji1}\n{profession} + {interest1} = my happy place\n{interest2} fuels my soul\n{cta}', style: 'creative' },
  { template: '{emoji1} Plot: {profession}\n{emoji2} Subplot: {interest1}\n{emoji3} Easter egg: {interest2}\n{cta}', style: 'creative' },
  { template: 'Currently:\n{emoji1} Building: {profession} empire\n{emoji2} Loving: {interest1}\n{emoji3} Exploring: {interest2}\n{cta}', style: 'creative' },
  { template: '{name} {emoji1}\nMaking {profession} look easy\n{interest1} + {interest2} = my vibe\n{cta}', style: 'creative' },
  { template: '{emoji1} {profession}\n{emoji2} {interest1} addict\n{emoji3} {interest2} dreamer\nStory in progress... {cta}', style: 'creative' },
  { template: 'Life recipe:\n{emoji1} 1 cup {profession}\n{emoji2} 2 tbsp {interest1}\n{emoji3} A dash of {interest2}\n{cta}', style: 'creative' },
  { template: '{emoji1}{emoji2}{emoji3}\n{name} | {profession}\nPowered by {interest1} & {interest2}\n{cta}', style: 'creative' },
  // Professional
  { template: '{name} | {profession}\nHelping people with {interest1}\n{interest2} specialist\n{cta}', style: 'professional' },
  { template: '{profession} | Speaker | {interest1}\nTransforming {interest2} into results\n{cta}', style: 'professional' },
  { template: '{name}\n{profession} & {interest1} Expert\nDriving growth through {interest2}\n{cta}', style: 'professional' },
  { template: '{profession}\nSpecializing in {interest1} & {interest2}\nResults-driven approach\n{cta}', style: 'professional' },
  { template: '{name} - {profession}\n{interest1} strategist\nBuilding the future of {interest2}\n{cta}', style: 'professional' },
  { template: 'Award-winning {profession}\n{interest1} | {interest2}\nLet\'s create something great\n{cta}', style: 'professional' },
  { template: '{name}\n{profession} with a passion for {interest1}\nDedicated to excellence in {interest2}\n{cta}', style: 'professional' },
  { template: '{profession} | Consultant\nExpert in {interest1} & {interest2}\nTurning vision into reality\n{cta}', style: 'professional' },
  { template: '{name} | {profession}\nOn a mission to revolutionize {interest1}\n{cta}', style: 'professional' },
  { template: 'Founder & {profession}\n{interest1} innovator\n{interest2} advocate\n{cta}', style: 'professional' },
  // Fun
  { template: '{emoji1} {name} {emoji1}\n{profession} who runs on {interest1}\nProbably thinking about {interest2}\n{cta}', style: 'fun' },
  { template: 'Professional {profession} {emoji1}\nAmateur {interest1} enthusiast {emoji2}\nFull-time {interest2} lover {emoji3}\n{cta}', style: 'fun' },
  { template: '{emoji1} {profession} extraordinaire\n{emoji2} {interest1} is my cardio\n{emoji3} {interest2} is my therapy\n{cta}', style: 'fun' },
  { template: '{name}\'s highlight reel:\n{emoji1} {profession}\n{emoji2} {interest1}\n{emoji3} {interest2}\nSpoiler: it\'s all fun\n{cta}', style: 'fun' },
  { template: 'Warning: May spontaneously talk about {interest1} {emoji1}\n{profession} | {interest2} fan\n{cta}', style: 'fun' },
  { template: '{emoji1} {profession} mode: ON\n{emoji2} {interest1} mode: ALWAYS ON\n{emoji3} {interest2} mode: CAN\'T STOP\n{cta}', style: 'fun' },
  { template: 'Just a {profession} with a {interest1} problem {emoji1}\nAlso into {interest2} {emoji2}\nNo regrets {emoji3}\n{cta}', style: 'fun' },
  { template: '{name} {emoji1}{emoji2}{emoji3}\n{profession} by choice\n{interest1} by passion\n{interest2} by accident\n{cta}', style: 'fun' },
  { template: 'CEO of {interest1} {emoji1}\nCFO of {interest2} {emoji2}\nAlso a {profession} {emoji3}\n{cta}', style: 'fun' },
  { template: '{emoji1} Living my best {profession} life\n{emoji2} Fueled by {interest1}\n{emoji3} Obsessed with {interest2}\n{cta}', style: 'fun' },
];
