'use client';
export function AdSlot({ slot }: { slot: string }) {
  return (
    <div className="ad-slot my-6" data-ad-slot={slot}>
      <div className="rounded-lg p-4 text-center text-sm" style={{ backgroundColor: 'var(--color-ad-bg)', border: '1px dashed', borderColor: 'var(--color-ad-border)', color: 'var(--color-ad-text)' }}>
        Advertisement
      </div>
    </div>
  );
}
