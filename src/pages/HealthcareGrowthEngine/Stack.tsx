import { useEffect, useRef, useState } from 'react';
import { ChevronRightIcon } from '@/components/icons';
import { StackCard } from './helpers';
import { STACK_GROUPS } from './data';

/* ---------- STACK & INSTRUMENTATION ---------- */
const Stack = () => {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let isDown = false;
    let startX = 0;
    let scrollStart = 0;
    let moved = false;

    const onDown = (e: PointerEvent) => {
      if ((e.target as HTMLElement).closest('button')) return;
      isDown = true;
      moved = false;
      startX = e.clientX;
      scrollStart = track.scrollLeft;
      track.style.cursor = 'grabbing';
      track.setPointerCapture(e.pointerId);
    };
    const onMove = (e: PointerEvent) => {
      if (!isDown) return;
      const dx = e.clientX - startX;
      if (Math.abs(dx) > 3) moved = true;
      track.scrollLeft = scrollStart - dx;
    };
    const onUp = (e: PointerEvent) => {
      if (!isDown) return;
      isDown = false;
      track.style.cursor = '';
      try { track.releasePointerCapture(e.pointerId); } catch { /* ignore */ }
      if (moved) {
        const blocker = (ev: Event) => {
          ev.stopPropagation();
          ev.preventDefault();
          track.removeEventListener('click', blocker, true);
        };
        track.addEventListener('click', blocker, true);
      }
    };

    track.addEventListener('pointerdown', onDown);
    track.addEventListener('pointermove', onMove);
    track.addEventListener('pointerup', onUp);
    track.addEventListener('pointercancel', onUp);

    const onScroll = () => {
      const max = track.scrollWidth - track.clientWidth;
      if (max <= 0) { setProgress(0); return; }
      setProgress(Math.min(1, Math.max(0, track.scrollLeft / max)));
    };
    track.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    return () => {
      track.removeEventListener('pointerdown', onDown);
      track.removeEventListener('pointermove', onMove);
      track.removeEventListener('pointerup', onUp);
      track.removeEventListener('pointercancel', onUp);
      track.removeEventListener('scroll', onScroll);
    };
  }, []);

  const scrollByCard = (dir: -1 | 1) => {
    const track = trackRef.current;
    if (!track) return;
    const firstCard = track.querySelector('article') as HTMLElement | null;
    const step = (firstCard?.offsetWidth ?? 340) + 20;
    track.scrollBy({ left: dir * step, behavior: 'smooth' });
  };

  return (
    <section className="border-t border-line-faint bg-bg-alt">
      <div className="container-shell py-[clamp(64px,8.5vw,120px)]">
        <div className="flex items-center gap-3 text-line font-mono text-[11px] tracking-[0.22em] uppercase mb-7">
          <span className="h-1.5 w-1.5 rounded-full bg-accent-soft" />
          Our Stack
        </div>
        <div className="grid lg:grid-cols-12 gap-x-12 gap-y-6 items-end mb-12 lg:mb-16">
          <h2 className="lg:col-span-7 text-heading font-extrabold leading-[0.96] tracking-[-0.038em] text-[clamp(36px,5.4vw,74px)]">
            One stack across<br />every clinic surface.
          </h2>
          <p className="lg:col-span-4 lg:col-start-9 text-body text-[15px] leading-[1.65] max-w-[42ch]">
            Analytics, acquisition, automation, and clinical systems — instrumented under one roof so every booked visit traces back to the surface that produced it.
          </p>
        </div>

        <div className="relative">
          <div
            ref={trackRef}
            className="flex gap-5 lg:gap-6 overflow-x-auto snap-x snap-mandatory pb-2 -mx-[clamp(20px,4vw,48px)] px-[clamp(20px,4vw,48px)] cursor-grab select-none [&::-webkit-scrollbar]:hidden"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            role="region"
            aria-label="Tool stack categories"
          >
            {STACK_GROUPS.map((g, i) => (
              <StackCard key={g.label} group={g} idx={i} total={STACK_GROUPS.length} />
            ))}
            <span aria-hidden="true" className="shrink-0 w-px" />
          </div>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-[1fr_auto] gap-5 items-center">
            <div className="flex items-center gap-4">
              <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted font-semibold whitespace-nowrap">
                Drag · swipe · scroll
              </span>
              <div className="relative h-px flex-1 bg-line-faint rounded-full overflow-hidden max-w-[280px]">
                <span
                  className="absolute top-0 left-0 h-full bg-heading rounded-full transition-[width] duration-150"
                  style={{ width: `${Math.max(8, progress * 100)}%` }}
                />
              </div>
            </div>
            <div className="flex items-center gap-2 justify-self-end">
              <button
                type="button"
                onClick={() => scrollByCard(-1)}
                aria-label="Previous category"
                className="w-11 h-11 rounded-full border border-line-faint text-heading grid place-items-center transition-all hover:border-line hover:bg-bg"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <polyline points="15 18 9 12 15 6" />
                </svg>
              </button>
              <button
                type="button"
                onClick={() => scrollByCard(1)}
                aria-label="Next category"
                className="w-11 h-11 rounded-full bg-heading text-white grid place-items-center transition-all hover:bg-heading/85"
              >
                <ChevronRightIcon size={16} strokeWidth={2.4} />
              </button>
            </div>
          </div>
        </div>

        <p className="mt-10 text-muted text-[13px] leading-[1.6] max-w-[64ch]">
          Don&apos;t see your tool? We integrate with most modern PMS, EHR, CRM, and
          front-desk stacks via native APIs, Zapier, or Make. We bring instrumentation,
          not new vendors.
        </p>
      </div>
    </section>
  );
};

export default Stack;
