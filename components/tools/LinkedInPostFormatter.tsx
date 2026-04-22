'use client';
import { useState, useRef } from 'react';
import { CopyButton } from '@/components/ui/CopyButton';

const BOLD_MAP: Record<string, string> = {};
const ITALIC_MAP: Record<string, string> = {};

// Build Unicode bold mapping (Mathematical Bold)
const boldUpper = 0x1D400;
const boldLower = 0x1D41A;
const boldDigit = 0x1D7CE;
for (let i = 0; i < 26; i++) {
  BOLD_MAP[String.fromCharCode(65 + i)] = String.fromCodePoint(boldUpper + i);
  BOLD_MAP[String.fromCharCode(97 + i)] = String.fromCodePoint(boldLower + i);
}
for (let i = 0; i < 10; i++) {
  BOLD_MAP[String.fromCharCode(48 + i)] = String.fromCodePoint(boldDigit + i);
}

// Build Unicode italic mapping (Mathematical Italic)
const italicUpper = 0x1D434;
const italicLower = 0x1D44E;
for (let i = 0; i < 26; i++) {
  ITALIC_MAP[String.fromCharCode(65 + i)] = String.fromCodePoint(italicUpper + i);
  ITALIC_MAP[String.fromCharCode(97 + i)] = String.fromCodePoint(italicLower + i);
}
// h is special in italic
ITALIC_MAP['h'] = String.fromCodePoint(0x210E);

function toBold(text: string): string {
  return [...text].map((c) => BOLD_MAP[c] || c).join('');
}

function toItalic(text: string): string {
  return [...text].map((c) => ITALIC_MAP[c] || c).join('');
}

const EMOJI_CATEGORIES: Record<string, string[]> = {
  'Smileys': ['\u{1F600}', '\u{1F603}', '\u{1F604}', '\u{1F601}', '\u{1F606}', '\u{1F605}', '\u{1F602}', '\u{1F60A}', '\u{1F607}', '\u{1F642}', '\u{1F643}', '\u{1F609}', '\u{1F60C}', '\u{1F60D}', '\u{1F618}', '\u{1F970}', '\u{1F60B}', '\u{1F61C}', '\u{1F92A}', '\u{1F914}'],
  'Gestures': ['\u{1F44D}', '\u{1F44E}', '\u{1F44F}', '\u{1F64C}', '\u{1F4AA}', '\u270C\uFE0F', '\u{1F91E}', '\u{1F91F}', '\u{1F449}', '\u{1F446}', '\u{1F44B}', '\u{1F64F}', '\u{1F91D}', '\u270A', '\u{1F44A}', '\u{1F918}'],
  'Business': ['\u{1F4BC}', '\u{1F4CA}', '\u{1F4C8}', '\u{1F4C9}', '\u{1F4B0}', '\u{1F4B5}', '\u{1F3AF}', '\u{1F680}', '\u{1F4A1}', '\u{1F4DD}', '\u{1F4CC}', '\u{1F4CE}', '\u{1F4CB}', '\u{1F4E7}', '\u{1F4F1}', '\u{1F4BB}'],
  'Symbols': ['\u2705', '\u274C', '\u2B50', '\u{1F525}', '\u{1F4A5}', '\u2728', '\u{1F31F}', '\u{1F4AB}', '\u26A1', '\u{1F308}', '\u2764\uFE0F', '\u{1F49A}', '\u{1F499}', '\u{1F49C}', '\u{1F49B}', '\u{1F9E1}'],
  'Objects': ['\u{1F3C6}', '\u{1F396}\uFE0F', '\u{1F4DA}', '\u{1F4D6}', '\u{1F4F0}', '\u{1F4E2}', '\u{1F514}', '\u{1F50D}', '\u{1F512}', '\u{1F513}', '\u{1F527}', '\u2699\uFE0F', '\u{1F6E0}\uFE0F', '\u{1F4A4}', '\u{1F4AC}', '\u{1F4AD}'],
};

const HOOK_TEMPLATES = [
  'Stop scrolling. This changed everything for me.',
  'I spent 10 years learning this the hard way.',
  'Nobody talks about this, but it\'s a game-changer.',
  'Here\'s what I wish I knew when I started.',
  'Unpopular opinion: most people get this wrong.',
  'The #1 mistake I see professionals make:',
  'I\'ve helped 100+ people with this. Here\'s the truth.',
  'This simple framework changed my career.',
  'Hot take: you don\'t need to hustle 24/7.',
  'The best advice I ever received was this:',
];

const CTA_TEMPLATES = [
  '\u{1F449} Follow me for more insights like this.',
  '\u{1F504} Repost this if you found it valuable.',
  '\u{1F4AC} What\'s your take? Drop a comment below.',
  '\u{1F514} Ring the bell on my profile for daily tips.',
  '\u{1F517} Link in comments for the full guide.',
  '\u2764\uFE0F Like this post if you agree.',
  '\u{1F4E9} DM me "START" for my free resource.',
  '\u{1F4CC} Save this post for later reference.',
];

export function LinkedInPostFormatter() {
  const [text, setText] = useState('');
  const [showEmojis, setShowEmojis] = useState(false);
  const [emojiCategory, setEmojiCategory] = useState('Smileys');
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const charCount = text.length;
  const charLimit = 3000;
  const pct = Math.min((charCount / charLimit) * 100, 100);

  const insertAtCursor = (insertion: string) => {
    const ta = textareaRef.current;
    if (!ta) { setText((prev) => prev + insertion); return; }
    const start = ta.selectionStart;
    const end = ta.selectionEnd;
    const before = text.slice(0, start);
    const after = text.slice(end);
    setText(before + insertion + after);
    setTimeout(() => {
      ta.selectionStart = ta.selectionEnd = start + insertion.length;
      ta.focus();
    }, 0);
  };

  const applyFormat = (type: 'bold' | 'italic' | 'bullet' | 'numbered') => {
    const ta = textareaRef.current;
    if (!ta) return;
    const start = ta.selectionStart;
    const end = ta.selectionEnd;
    const selected = text.slice(start, end);

    if (type === 'bold' && selected) {
      const formatted = toBold(selected);
      setText(text.slice(0, start) + formatted + text.slice(end));
    } else if (type === 'italic' && selected) {
      const formatted = toItalic(selected);
      setText(text.slice(0, start) + formatted + text.slice(end));
    } else if (type === 'bullet') {
      const lines = selected ? selected.split('\n') : [''];
      const bulleted = lines.map((l) => `\u2022 ${l}`).join('\n');
      setText(text.slice(0, start) + bulleted + text.slice(end));
    } else if (type === 'numbered') {
      const lines = selected ? selected.split('\n') : [''];
      const numbered = lines.map((l, i) => `${i + 1}. ${l}`).join('\n');
      setText(text.slice(0, start) + numbered + text.slice(end));
    }
  };

  return (
    <div className="space-y-6">
      <div className="rounded-xl p-6" style={{ backgroundColor: 'var(--color-bg-card)', border: '1px solid var(--color-border)', boxShadow: 'var(--shadow-md)' }}>
        {/* Toolbar */}
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <button onClick={() => applyFormat('bold')} title="Bold (select text first)"
            className="px-3 py-2 rounded-lg text-sm font-bold transition-all cursor-pointer"
            style={{ backgroundColor: 'var(--color-bg-secondary)', color: 'var(--color-text-secondary)', border: '1px solid var(--color-border)' }}>
            B
          </button>
          <button onClick={() => applyFormat('italic')} title="Italic (select text first)"
            className="px-3 py-2 rounded-lg text-sm italic transition-all cursor-pointer"
            style={{ backgroundColor: 'var(--color-bg-secondary)', color: 'var(--color-text-secondary)', border: '1px solid var(--color-border)' }}>
            I
          </button>
          <button onClick={() => applyFormat('bullet')} title="Bullet list"
            className="px-3 py-2 rounded-lg text-sm transition-all cursor-pointer"
            style={{ backgroundColor: 'var(--color-bg-secondary)', color: 'var(--color-text-secondary)', border: '1px solid var(--color-border)' }}>
            \u2022 List
          </button>
          <button onClick={() => applyFormat('numbered')} title="Numbered list"
            className="px-3 py-2 rounded-lg text-sm transition-all cursor-pointer"
            style={{ backgroundColor: 'var(--color-bg-secondary)', color: 'var(--color-text-secondary)', border: '1px solid var(--color-border)' }}>
            1. List
          </button>
          <div className="h-6 w-px mx-1" style={{ backgroundColor: 'var(--color-border)' }} />
          <button onClick={() => setShowEmojis(!showEmojis)}
            className="px-3 py-2 rounded-lg text-sm transition-all cursor-pointer"
            style={{ backgroundColor: showEmojis ? 'var(--color-brand)' : 'var(--color-bg-secondary)', color: showEmojis ? '#FFFFFF' : 'var(--color-text-secondary)', border: '1px solid', borderColor: showEmojis ? 'var(--color-brand)' : 'var(--color-border)' }}>
            😀 Emoji
          </button>
          <div className="h-6 w-px mx-1" style={{ backgroundColor: 'var(--color-border)' }} />
          <select
            onChange={(e) => { if (e.target.value) insertAtCursor(e.target.value + '\n\n'); e.target.value = ''; }}
            className="px-3 py-2 rounded-lg text-sm cursor-pointer"
            style={{ backgroundColor: 'var(--color-bg-secondary)', color: 'var(--color-text-secondary)', border: '1px solid var(--color-border)' }}>
            <option value="">Hook...</option>
            {HOOK_TEMPLATES.map((h, i) => <option key={i} value={h}>{h.slice(0, 40)}...</option>)}
          </select>
          <select
            onChange={(e) => { if (e.target.value) insertAtCursor('\n\n' + e.target.value); e.target.value = ''; }}
            className="px-3 py-2 rounded-lg text-sm cursor-pointer"
            style={{ backgroundColor: 'var(--color-bg-secondary)', color: 'var(--color-text-secondary)', border: '1px solid var(--color-border)' }}>
            <option value="">CTA...</option>
            {CTA_TEMPLATES.map((c, i) => <option key={i} value={c}>{c.slice(0, 40)}...</option>)}
          </select>
        </div>

        {/* Emoji Picker */}
        {showEmojis && (
          <div className="rounded-lg p-3 mb-3" style={{ backgroundColor: 'var(--color-bg-muted)', border: '1px solid var(--color-border-light)' }}>
            <div className="flex flex-wrap gap-1 mb-2">
              {Object.keys(EMOJI_CATEGORIES).map((cat) => (
                <button key={cat} onClick={() => setEmojiCategory(cat)}
                  className="px-2 py-1 rounded text-xs font-medium cursor-pointer"
                  style={{ backgroundColor: emojiCategory === cat ? 'var(--color-brand)' : 'transparent', color: emojiCategory === cat ? '#FFFFFF' : 'var(--color-text-tertiary)' }}>
                  {cat}
                </button>
              ))}
            </div>
            <div className="flex flex-wrap gap-1">
              {EMOJI_CATEGORIES[emojiCategory]?.map((emoji, i) => (
                <button key={i} onClick={() => insertAtCursor(emoji)}
                  className="w-8 h-8 flex items-center justify-center rounded text-lg cursor-pointer"
                  style={{ backgroundColor: 'transparent' }}
                  onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'var(--color-bg-secondary)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; }}>
                  {emoji}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Textarea */}
        <textarea
          ref={textareaRef}
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Write your LinkedIn post here...\n\nTip: Select text and click B or I to format."
          rows={10}
          className="w-full px-4 py-3 rounded-lg text-base outline-none resize-y font-sans"
          style={{ backgroundColor: 'var(--color-bg-input)', border: '1px solid var(--color-border)', color: 'var(--color-text-primary)' }}
          onFocus={(e) => { e.currentTarget.style.borderColor = 'var(--color-brand)'; }}
          onBlur={(e) => { e.currentTarget.style.borderColor = 'var(--color-border)'; }}
        />

        <div className="flex items-center justify-between mt-3">
          <span className="text-sm font-medium" style={{ color: charCount > charLimit ? 'var(--color-error)' : 'var(--color-text-tertiary)' }}>
            {charCount}/{charLimit}
          </span>
          <div className="w-48 h-2 rounded-full" style={{ backgroundColor: 'var(--color-bg-secondary)' }}>
            <div className="h-full rounded-full transition-all" style={{ width: `${pct}%`, backgroundColor: charCount > charLimit ? 'var(--color-error)' : pct > 80 ? 'var(--color-brand)' : 'var(--color-success)' }} />
          </div>
        </div>

        <div className="flex gap-3 mt-4">
          <CopyButton text={text} label="Copy Formatted Text" />
          <button onClick={() => setText('')}
            className="px-6 py-2 rounded-lg font-semibold transition-all cursor-pointer"
            style={{ backgroundColor: 'var(--color-bg-secondary)', color: 'var(--color-text-secondary)', border: '1px solid var(--color-border)' }}>
            Clear
          </button>
        </div>
      </div>

      {/* Preview */}
      {text && (
        <div className="rounded-xl p-6" style={{ backgroundColor: 'var(--color-bg-card)', border: '1px solid var(--color-border)', boxShadow: 'var(--shadow-md)' }}>
          <h3 className="font-semibold mb-3" style={{ color: 'var(--color-text-heading)' }}>Preview</h3>
          <div className="rounded-lg p-4" style={{ backgroundColor: 'var(--color-bg-muted)', border: '1px solid var(--color-border-light)' }}>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full" style={{ backgroundColor: 'var(--color-brand)' }} />
              <div>
                <div className="font-semibold text-sm" style={{ color: 'var(--color-text-heading)' }}>Your Name</div>
                <div className="text-xs" style={{ color: 'var(--color-text-muted)' }}>Your headline \u2022 Just now</div>
              </div>
            </div>
            <div className="whitespace-pre-wrap leading-relaxed" style={{ color: 'var(--color-text-primary)' }}>
              {text}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
