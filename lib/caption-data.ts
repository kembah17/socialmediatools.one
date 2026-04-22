export interface CaptionTemplate {
  text: string;
  tone: string;
  platform: string;
}

export const platformLimits: Record<string, number> = {
  instagram: 2200,
  facebook: 63206,
  linkedin: 3000,
  twitter: 280,
  tiktok: 2200,
};

export const tones = ['professional', 'casual', 'funny', 'inspirational', 'promotional'] as const;
export type Tone = (typeof tones)[number];

export const platforms = ['instagram', 'facebook', 'linkedin', 'twitter', 'tiktok'] as const;
export type Platform = (typeof platforms)[number];

export const emojiByTone: Record<string, string[]> = {
  professional: ['\u{1F4BC}', '\u{1F4CA}', '\u{1F3AF}', '\u2728', '\u{1F4A1}', '\u{1F680}', '\u{1F4DD}', '\u2705'],
  casual: ['\u{1F60A}', '\u{1F389}', '\u2764\uFE0F', '\u{1F44D}', '\u{1F31F}', '\u{1F60D}', '\u{1F525}', '\u{1F4F8}'],
  funny: ['\u{1F602}', '\u{1F923}', '\u{1F60E}', '\u{1F92A}', '\u{1F648}', '\u{1F60F}', '\u{1F47B}', '\u{1F921}'],
  inspirational: ['\u{1F31F}', '\u2728', '\u{1F4AA}', '\u{1F525}', '\u{1F3AF}', '\u{1F680}', '\u{1F33F}', '\u{1F308}'],
  promotional: ['\u{1F525}', '\u{1F6A8}', '\u{1F381}', '\u{1F4B0}', '\u2B50', '\u{1F389}', '\u{1F4E2}', '\u{1F4A5}'],
};

export const hookTemplates: string[] = [
  'Stop scrolling. This is important.',
  'Nobody talks about this, but...',
  'Here\'s what I wish I knew sooner about {topic}.',
  'The truth about {topic} that nobody tells you.',
  'I spent years learning about {topic}. Here\'s the short version.',
  'This changed everything about how I see {topic}.',
  'Unpopular opinion about {topic}:',
  'If you\'re into {topic}, you need to see this.',
  'POV: You just discovered the best {topic} hack.',
  'Wait for it... this {topic} tip is a game changer.',
];

export const ctaTemplates: string[] = [
  'Save this for later!',
  'Tag someone who needs to see this!',
  'Drop a comment if you agree!',
  'Follow for more {topic} content!',
  'Share this with a friend!',
  'Double tap if this resonates!',
  'What do you think? Let me know below!',
  'Link in bio for more!',
  'Hit follow for daily {topic} tips!',
  'Bookmark this post!',
];

export const captionTemplates: CaptionTemplate[] = [
  // Instagram - Professional
  { text: 'Elevating {topic} to the next level. Here\'s what we\'ve been working on and why it matters for the future of our industry.', tone: 'professional', platform: 'instagram' },
  { text: 'Behind every great {topic} is a strategy. Today we\'re sharing our approach and the results speak for themselves.', tone: 'professional', platform: 'instagram' },
  { text: 'Quality over quantity. That\'s our philosophy when it comes to {topic}. Here\'s how we put it into practice every single day.', tone: 'professional', platform: 'instagram' },
  { text: 'The data doesn\'t lie. Our latest {topic} insights reveal some fascinating trends that every professional should know about.', tone: 'professional', platform: 'instagram' },
  { text: 'We\'re proud to share our latest work in {topic}. Innovation meets execution, and the results are remarkable.', tone: 'professional', platform: 'instagram' },
  { text: 'Three key lessons from our {topic} journey this quarter. Swipe to see the breakdown and our biggest takeaways.', tone: 'professional', platform: 'instagram' },
  { text: 'Setting new standards in {topic}. Our team has been pushing boundaries, and we\'re excited to share what\'s next.', tone: 'professional', platform: 'instagram' },
  { text: 'Consistency is the secret ingredient in {topic}. Here\'s our framework for maintaining excellence day after day.', tone: 'professional', platform: 'instagram' },
  { text: 'The future of {topic} is here. We\'ve been investing in innovation, and today we\'re revealing the results.', tone: 'professional', platform: 'instagram' },
  { text: 'What separates good from great in {topic}? Attention to detail. Here\'s our approach to achieving excellence.', tone: 'professional', platform: 'instagram' },
  // Instagram - Casual
  { text: 'Just vibing with some {topic} today and honestly? Best decision ever. Who else is into this?', tone: 'casual', platform: 'instagram' },
  { text: 'No filter needed when {topic} looks this good. Just saying.', tone: 'casual', platform: 'instagram' },
  { text: 'Current mood: obsessed with {topic}. Can you blame me though?', tone: 'casual', platform: 'instagram' },
  { text: 'That feeling when {topic} just hits different. You know what I mean.', tone: 'casual', platform: 'instagram' },
  { text: 'Living my best {topic} life and I\'m not sorry about it. Come join the fun!', tone: 'casual', platform: 'instagram' },
  { text: 'Sunday funday with a side of {topic}. This is what happiness looks like.', tone: 'casual', platform: 'instagram' },
  { text: 'Plot twist: {topic} is actually the best thing ever. Don\'t @ me.', tone: 'casual', platform: 'instagram' },
  { text: 'Me + {topic} = a love story for the ages. Who can relate?', tone: 'casual', platform: 'instagram' },
  { text: 'Keeping it real with some {topic} content. Because authenticity is everything.', tone: 'casual', platform: 'instagram' },
  { text: 'This is your sign to try {topic}. Trust me on this one.', tone: 'casual', platform: 'instagram' },
  // Instagram - Funny
  { text: 'My therapist said I need a hobby. So here I am, deep into {topic}. She didn\'t mean this.', tone: 'funny', platform: 'instagram' },
  { text: 'Me: I\'ll just spend 5 minutes on {topic}. Also me: *3 hours later*', tone: 'funny', platform: 'instagram' },
  { text: 'If {topic} was a person, I\'d marry it. No questions asked.', tone: 'funny', platform: 'instagram' },
  { text: 'My bank account after discovering {topic}: "We need to talk."', tone: 'funny', platform: 'instagram' },
  { text: 'POV: You\'re explaining {topic} to someone who has no idea what you\'re talking about.', tone: 'funny', platform: 'instagram' },
  { text: 'They said {topic} would be easy. They lied. But here we are anyway.', tone: 'funny', platform: 'instagram' },
  { text: 'My personality is basically 90% {topic} and 10% coffee at this point.', tone: 'funny', platform: 'instagram' },
  { text: 'Breaking news: Local person becomes way too invested in {topic}. More at 11.', tone: 'funny', platform: 'instagram' },
  { text: 'I don\'t always post about {topic}. Just kidding, yes I do.', tone: 'funny', platform: 'instagram' },
  { text: 'Roses are red, violets are blue, I\'m obsessed with {topic}, and you should be too.', tone: 'funny', platform: 'instagram' },
  // Instagram - Inspirational
  { text: 'Every expert in {topic} was once a beginner. Keep going. Your breakthrough is closer than you think.', tone: 'inspirational', platform: 'instagram' },
  { text: 'The journey of {topic} taught me that growth happens outside your comfort zone. Embrace the challenge.', tone: 'inspirational', platform: 'instagram' },
  { text: 'Don\'t wait for the perfect moment to start with {topic}. Take the moment and make it perfect.', tone: 'inspirational', platform: 'instagram' },
  { text: 'Your {topic} journey is unique. Stop comparing and start creating. The world needs your perspective.', tone: 'inspirational', platform: 'instagram' },
  { text: 'Small steps in {topic} lead to big transformations. Trust the process and keep showing up.', tone: 'inspirational', platform: 'instagram' },
  { text: 'The best time to start {topic} was yesterday. The second best time is now. What are you waiting for?', tone: 'inspirational', platform: 'instagram' },
  { text: 'Believe in your {topic} vision even when nobody else does. That\'s where magic happens.', tone: 'inspirational', platform: 'instagram' },
  { text: '{topic} isn\'t just what I do. It\'s who I\'m becoming. And the transformation is beautiful.', tone: 'inspirational', platform: 'instagram' },
  { text: 'Fall in love with the process of {topic}. The results will follow. They always do.', tone: 'inspirational', platform: 'instagram' },
  { text: 'One year from now, you\'ll wish you started {topic} today. So start today.', tone: 'inspirational', platform: 'instagram' },
  // Instagram - Promotional
  { text: 'Introducing our latest {topic} offering! We\'ve been working hard to bring you something special. Check it out now!', tone: 'promotional', platform: 'instagram' },
  { text: 'LIMITED TIME: Get exclusive access to our {topic} collection. Don\'t miss out on this incredible opportunity!', tone: 'promotional', platform: 'instagram' },
  { text: 'Your search for the perfect {topic} ends here. We\'ve got exactly what you need. Link in bio!', tone: 'promotional', platform: 'instagram' },
  { text: 'Big announcement! Our {topic} launch is finally here. Early supporters get special perks!', tone: 'promotional', platform: 'instagram' },
  { text: 'Why settle for ordinary {topic} when you can have extraordinary? Discover the difference today.', tone: 'promotional', platform: 'instagram' },
  { text: 'Flash sale alert! Our best {topic} deals are live right now. Grab yours before they\'re gone!', tone: 'promotional', platform: 'instagram' },
  { text: 'Thousands of happy customers can\'t be wrong. Try our {topic} and see the results for yourself!', tone: 'promotional', platform: 'instagram' },
  { text: 'New drop alert! Fresh {topic} just landed. Be the first to experience what everyone will be talking about.', tone: 'promotional', platform: 'instagram' },
  { text: 'Transform your {topic} game with our proven solution. Real results, real fast. Tap the link to learn more!', tone: 'promotional', platform: 'instagram' },
  { text: 'Special offer just for our followers! Use code SOCIAL for 20% off our {topic} collection. Limited time only!', tone: 'promotional', platform: 'instagram' },
  // Facebook - Professional
  { text: 'We\'re excited to share our latest insights on {topic}. After months of research and development, here\'s what we\'ve learned and how it can benefit your business.', tone: 'professional', platform: 'facebook' },
  { text: 'The landscape of {topic} is evolving rapidly. Here are the top trends we\'re seeing and how forward-thinking professionals are adapting their strategies.', tone: 'professional', platform: 'facebook' },
  { text: 'Our team just completed a deep dive into {topic}. The findings are eye-opening and have significant implications for anyone in this space.', tone: 'professional', platform: 'facebook' },
  { text: 'Proud to announce our latest milestone in {topic}. This achievement reflects our commitment to excellence and innovation in everything we do.', tone: 'professional', platform: 'facebook' },
  { text: 'Looking for expert guidance on {topic}? We\'ve compiled our best practices and lessons learned into this comprehensive overview.', tone: 'professional', platform: 'facebook' },
  { text: 'Industry update: Major developments in {topic} are reshaping how we approach our work. Here\'s our analysis and what it means for you.', tone: 'professional', platform: 'facebook' },
  { text: 'Building a strong foundation in {topic} requires the right strategy. Here\'s the framework we use to deliver consistent results for our clients.', tone: 'professional', platform: 'facebook' },
  { text: 'Reflecting on our {topic} journey this quarter. The numbers tell a compelling story of growth, innovation, and impact.', tone: 'professional', platform: 'facebook' },
  { text: 'What does the future hold for {topic}? Our experts weigh in with predictions and actionable insights you can implement today.', tone: 'professional', platform: 'facebook' },
  { text: 'Case study: How we helped our client achieve remarkable results with {topic}. The strategy, execution, and outcomes revealed.', tone: 'professional', platform: 'facebook' },
  // Facebook - Casual
  { text: 'Hey everyone! Just wanted to share something cool about {topic} that I discovered today. Have any of you tried this?', tone: 'casual', platform: 'facebook' },
  { text: 'Who else is loving {topic} right now? I can\'t be the only one! Share your experience in the comments.', tone: 'casual', platform: 'facebook' },
  { text: 'Quick question for my friends: What\'s your favorite thing about {topic}? I\'m curious to hear different perspectives!', tone: 'casual', platform: 'facebook' },
  { text: 'Just had the best experience with {topic} and I had to share it with you all. Sometimes the simple things make the biggest difference!', tone: 'casual', platform: 'facebook' },
  { text: 'Happy Friday everyone! Celebrating the weekend with some {topic} goodness. What are your plans?', tone: 'casual', platform: 'facebook' },
  { text: 'Real talk: {topic} has been a game changer for me lately. Anyone else feel the same way?', tone: 'casual', platform: 'facebook' },
  { text: 'Throwback to when I first discovered {topic}. Little did I know it would become such a big part of my life!', tone: 'casual', platform: 'facebook' },
  { text: 'Sharing some {topic} love today because why not? Life\'s too short not to enjoy the things you\'re passionate about.', tone: 'casual', platform: 'facebook' },
  { text: 'Can we talk about how amazing {topic} is? Because I feel like it doesn\'t get enough appreciation.', tone: 'casual', platform: 'facebook' },
  { text: 'Monday motivation: Starting the week strong with {topic}. Who\'s with me?', tone: 'casual', platform: 'facebook' },
  // LinkedIn - Professional
  { text: 'After 5 years in {topic}, here are the 3 most important lessons I\'ve learned:\n\n1. Consistency beats perfection\n2. Relationships matter more than metrics\n3. Adaptability is your greatest asset\n\nWhat would you add to this list?', tone: 'professional', platform: 'linkedin' },
  { text: 'The {topic} industry is at an inflection point.\n\nHere\'s what the data tells us and why leaders need to pay attention now. A thread on the trends shaping our future.', tone: 'professional', platform: 'linkedin' },
  { text: 'I made a mistake early in my {topic} career that cost me dearly.\n\nBut it taught me the most valuable lesson: failure is just feedback. Here\'s what happened and what I learned.', tone: 'professional', platform: 'linkedin' },
  { text: 'Hot take: Most {topic} strategies fail because they focus on tactics instead of fundamentals.\n\nHere\'s the framework that changed everything for our team.', tone: 'professional', platform: 'linkedin' },
  { text: 'Excited to share that our {topic} initiative has exceeded all expectations this quarter.\n\nKey results:\n- 40% growth in engagement\n- 3x ROI improvement\n- Team satisfaction at all-time high\n\nHere\'s how we did it.', tone: 'professional', platform: 'linkedin' },
  { text: 'The best {topic} professionals I know all share one trait:\n\nThey never stop learning.\n\nHere are 5 resources that have shaped my approach and continue to drive results.', tone: 'professional', platform: 'linkedin' },
  { text: 'Unpopular opinion about {topic}:\n\nWe\'re overcomplicating it.\n\nThe fundamentals haven\'t changed. What\'s changed is our willingness to stick with what works. Here\'s my case for simplicity.', tone: 'professional', platform: 'linkedin' },
  { text: 'Just wrapped up an incredible {topic} project with my team.\n\nThe challenge: Ambitious goals with limited resources\nThe approach: Strategic prioritization and creative problem-solving\nThe result: Exceeded targets by 25%\n\nProud of what we accomplished together.', tone: 'professional', platform: 'linkedin' },
  { text: 'If you\'re building a career in {topic}, here\'s the advice I wish someone gave me on day one:\n\nFocus on impact, not activity. The busiest person in the room isn\'t always the most effective.', tone: 'professional', platform: 'linkedin' },
  { text: 'The {topic} landscape in 2024 looks nothing like it did 5 years ago.\n\nHere are the shifts I\'m seeing and how smart professionals are positioning themselves for what\'s next.', tone: 'professional', platform: 'linkedin' },
  // Twitter - All tones
  { text: '{topic} tip that took me years to learn: start before you\'re ready. Perfection is the enemy of progress.', tone: 'professional', platform: 'twitter' },
  { text: 'The {topic} industry needs to talk about this more. Thread incoming.', tone: 'professional', platform: 'twitter' },
  { text: 'Hot take: {topic} is about to change dramatically. Here\'s why.', tone: 'professional', platform: 'twitter' },
  { text: 'After analyzing 100+ {topic} case studies, here\'s the #1 pattern I found.', tone: 'professional', platform: 'twitter' },
  { text: '3 {topic} mistakes that are costing you results (and what to do instead):', tone: 'professional', platform: 'twitter' },
  { text: 'The secret to {topic}? It\'s simpler than you think.', tone: 'professional', platform: 'twitter' },
  { text: 'Just discovered the coolest {topic} hack and I\'m shook', tone: 'casual', platform: 'twitter' },
  { text: '{topic} hits different when you actually know what you\'re doing', tone: 'casual', platform: 'twitter' },
  { text: 'me: I should sleep\nalso me: *researches {topic} until 3am*', tone: 'funny', platform: 'twitter' },
  { text: '{topic} is my entire personality at this point and I\'m okay with that', tone: 'funny', platform: 'twitter' },
  { text: 'Your {topic} journey starts with a single step. Take it today.', tone: 'inspirational', platform: 'twitter' },
  { text: 'Don\'t let anyone tell you {topic} isn\'t worth pursuing. Your passion matters.', tone: 'inspirational', platform: 'twitter' },
  { text: 'NEW: Our {topic} solution just dropped. Early access link in bio.', tone: 'promotional', platform: 'twitter' },
  { text: 'If you care about {topic}, you need to check this out. Game changer.', tone: 'promotional', platform: 'twitter' },
  // TikTok - All tones
  { text: 'POV: You finally figured out {topic} and your life changed forever. Here\'s the full breakdown.', tone: 'casual', platform: 'tiktok' },
  { text: 'Things about {topic} that just make sense. Part 1. Follow for more!', tone: 'casual', platform: 'tiktok' },
  { text: 'Wait for the {topic} reveal at the end... you won\'t believe it!', tone: 'casual', platform: 'tiktok' },
  { text: 'Replying to comments about {topic}. Here\'s the truth nobody wants to hear.', tone: 'professional', platform: 'tiktok' },
  { text: 'Day 1 of trying {topic} vs Day 100. The glow up is real.', tone: 'inspirational', platform: 'tiktok' },
  { text: 'When someone says {topic} is easy... the audacity.', tone: 'funny', platform: 'tiktok' },
  { text: 'Me explaining {topic} to my friends who don\'t get it:', tone: 'funny', platform: 'tiktok' },
  { text: 'This {topic} hack went viral for a reason. Try it yourself!', tone: 'promotional', platform: 'tiktok' },
  { text: '{topic} beginner vs pro. Which one are you? Comment below!', tone: 'casual', platform: 'tiktok' },
  { text: 'The {topic} tip that got me 10K followers. Here it is for free.', tone: 'promotional', platform: 'tiktok' },
  // Facebook - Funny
  { text: 'Just spent 3 hours on {topic} when I was supposed to be doing laundry. No regrets. Okay, maybe a few regrets. The laundry pile is judging me.', tone: 'funny', platform: 'facebook' },
  { text: 'My friends: "Let\'s go out tonight!"\nMe: "Can\'t. Busy with {topic}."\nMy friends: "...it\'s Saturday."\nMe: "{topic} doesn\'t take weekends off."', tone: 'funny', platform: 'facebook' },
  { text: 'If loving {topic} is wrong, I don\'t want to be right. Tag someone who gets it!', tone: 'funny', platform: 'facebook' },
  { text: 'Petition to make {topic} an official sport. I\'d finally be an athlete.', tone: 'funny', platform: 'facebook' },
  { text: 'My Google search history is 90% {topic} related and I\'m not even embarrassed anymore.', tone: 'funny', platform: 'facebook' },
  // Facebook - Inspirational
  { text: 'A year ago, I knew nothing about {topic}. Today, it\'s transformed my life in ways I never imagined. If you\'re thinking about starting, this is your sign. The journey of a thousand miles begins with a single step.', tone: 'inspirational', platform: 'facebook' },
  { text: 'To everyone struggling with {topic} right now: You\'re not behind. You\'re not failing. You\'re learning. And that\'s exactly where you need to be. Keep going.', tone: 'inspirational', platform: 'facebook' },
  { text: 'The most successful people in {topic} aren\'t the most talented. They\'re the most persistent. Remember that on the days when it feels hard.', tone: 'inspirational', platform: 'facebook' },
  { text: 'Your {topic} dream is valid. Don\'t let anyone dim your light. The world needs what only you can bring to the table.', tone: 'inspirational', platform: 'facebook' },
  { text: 'Every setback in {topic} is a setup for a comeback. I\'ve lived this truth, and I\'m here to tell you: the best is yet to come.', tone: 'inspirational', platform: 'facebook' },
  // Facebook - Promotional
  { text: 'We\'re thrilled to announce our newest {topic} offering! After months of development and testing, it\'s finally ready for you. Click the link to learn more and get early bird pricing!', tone: 'promotional', platform: 'facebook' },
  { text: 'GIVEAWAY TIME! We\'re giving away our premium {topic} package to one lucky winner. To enter: Like this post, share it, and comment your favorite thing about {topic}!', tone: 'promotional', platform: 'facebook' },
  { text: 'Customer spotlight: See how Sarah used our {topic} solution to achieve incredible results. Her story will inspire you to take action today!', tone: 'promotional', platform: 'facebook' },
  { text: 'Last chance! Our {topic} sale ends tonight at midnight. Don\'t miss your opportunity to save big on everything you need.', tone: 'promotional', platform: 'facebook' },
  { text: 'Join 10,000+ happy customers who\'ve transformed their {topic} experience with us. Start your free trial today and see the difference!', tone: 'promotional', platform: 'facebook' },
  // LinkedIn - Casual
  { text: 'Real talk about {topic} today.\n\nI used to overthink everything. Now I focus on progress over perfection.\n\nWhat\'s one {topic} lesson that changed your perspective?', tone: 'casual', platform: 'linkedin' },
  { text: 'Coffee thought of the day:\n\n{topic} doesn\'t have to be complicated.\n\nSometimes the simplest approach wins. Anyone else finding this to be true?', tone: 'casual', platform: 'linkedin' },
  { text: 'Honest moment: I\'m still figuring out {topic}.\n\nAnd that\'s okay. Growth isn\'t linear.\n\nWho else is on this journey?', tone: 'casual', platform: 'linkedin' },
  { text: 'Friday reflection on {topic}:\n\nThis week taught me that collaboration beats competition every time.\n\nGrateful for this community. Happy weekend everyone!', tone: 'casual', platform: 'linkedin' },
  { text: 'Quick {topic} win I wanted to share:\n\nSometimes the smallest changes make the biggest impact.\n\nWhat\'s your recent win?', tone: 'casual', platform: 'linkedin' },
  // LinkedIn - Inspirational
  { text: 'I was told I\'d never succeed in {topic}.\n\nThat was 5 years ago.\n\nToday, I\'m living proof that persistence beats doubt every single time.\n\nTo anyone facing similar skepticism: Keep going. Your story isn\'t over yet.', tone: 'inspirational', platform: 'linkedin' },
  { text: 'The {topic} journey isn\'t always glamorous.\n\nThere are late nights, tough decisions, and moments of doubt.\n\nBut every challenge is building the foundation for something extraordinary.\n\nTrust the process.', tone: 'inspirational', platform: 'linkedin' },
  { text: 'What if the thing holding you back from {topic} success is just fear?\n\nFear of failure. Fear of judgment. Fear of the unknown.\n\nHere\'s what I\'ve learned: On the other side of fear is everything you want.', tone: 'inspirational', platform: 'linkedin' },
  { text: 'To the {topic} professionals who feel invisible right now:\n\nYour work matters.\nYour ideas matter.\nYour voice matters.\n\nKeep showing up. The right people are watching.', tone: 'inspirational', platform: 'linkedin' },
  { text: 'The most powerful word in {topic}?\n\n"Yet."\n\nI haven\'t mastered it... yet.\nI haven\'t reached my goal... yet.\nI haven\'t made it... yet.\n\nThat one word changes everything.', tone: 'inspirational', platform: 'linkedin' },
];
