import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import type { CSSProperties } from 'react';
import { ArrowIcon } from '@/components/icons';

interface Result {
  emoji: string;
  num: string;
  numLbl: string;
  sector: string;
  name: string;
  summary: string;
}

const RESULTS: Result[] = [
  {
    emoji: '🏥',
    num: '+45%',
    numLbl: 'Patient Visits',
    sector: 'Emergency Room',
    name: 'Freestanding ER · Dallas',
    summary:
      'Local Pack dominance closed 45% more visits in 6 months - added $800K+ annual revenue.',
  },
  {
    emoji: '⚡',
    num: '3×',
    numLbl: 'Acquisitions',
    sector: 'Urgent Care',
    name: 'Multi-location · Houston',
    summary:
      'Per-location SEO tripled appointments and dropped CPA by 60% within two quarters.',
  },
  {
    emoji: '✨',
    num: '+120%',
    numLbl: 'Lead Growth',
    sector: 'Cosmetic Surgery',
    name: 'Aesthetic clinic · Austin',
    summary:
      'Procedure-intent SEO doubled qualified leads and lifted average transaction value 25%.',
  },
  {
    emoji: '👨‍⚕️',
    num: '500%',
    numLbl: 'SEO ROI',
    sector: 'Primary Care',
    name: 'Family medicine · San Antonio',
    summary:
      'Local SEO + condition content lifted ROI past 500% - $300K+ in added organic revenue.',
  },
  {
    emoji: '🧠',
    num: '2×',
    numLbl: 'Retention',
    sector: 'Mental Health',
    name: 'Therapy practice · Dallas',
    summary:
      'Email automation + condition content doubled retention while cutting marketing spend 40%.',
  },
  {
    emoji: '🦷',
    num: '#1',
    numLbl: 'Local Pack',
    sector: 'Dental Practice',
    name: 'General dentistry · Irving',
    summary:
      'GBP optimisation + citation cleanup landed #1 local pack and 70% more bookings.',
  },
];

const Proof = () => {
  const [index, setIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);
  const [cardWidth, setCardWidth] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);

  const len = RESULTS.length;
  const maxIndex = Math.max(0, len - visibleCount);

  const measure = useCallback(() => {
    const w = window.innerWidth;
    const v = w <= 640 ? 1 : w <= 1024 ? 2 : 3;
    setVisibleCount(v);
    const card = trackRef.current?.children[0] as HTMLElement | undefined;
    if (card) setCardWidth(card.getBoundingClientRect().width);
  }, []);

  useLayoutEffect(() => {
    measure();
  }, [measure]);

  useEffect(() => {
    let t: ReturnType<typeof setTimeout>;
    const onResize = () => {
      clearTimeout(t);
      t = setTimeout(measure, 120);
    };
    window.addEventListener('resize', onResize);
    return () => {
      clearTimeout(t);
      window.removeEventListener('resize', onResize);
    };
  }, [measure]);

  useEffect(() => {
    if (index > maxIndex) setIndex(maxIndex);
  }, [maxIndex, index]);

  const go = (delta: number) => {
    setIndex((i) => Math.max(0, Math.min(maxIndex, i + delta)));
  };

  const startX = useRef(0);
  const isDown = useRef(false);
  const onTouchStart = (e: React.TouchEvent) => {
    startX.current = e.touches[0].clientX;
    isDown.current = true;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (!isDown.current) return;
    isDown.current = false;
    const dx = e.changedTouches[0].clientX - startX.current;
    if (Math.abs(dx) > 40) go(dx < 0 ? 1 : -1);
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') go(-1);
    if (e.key === 'ArrowRight') go(1);
  };

  const gap = 20;
  const offset = -(index * (cardWidth + gap));
  const minFill = (visibleCount / len) * 100;
  const span = 100 - minFill;
  const ratio = maxIndex === 0 ? 1 : index / maxIndex;
  const fill = `${minFill + span * ratio}%`;

  return (
    <section className="sl-section sl-proof">
      <div className="container-shell">
        <div className="sl-sec-head">
          <div>
            <div className="sl-sec-num">03 - Proof</div>
            <h2 className="sl-sec-title">
              Six recent <em>engagements.</em>
            </h2>
          </div>
          <div className="sl-sec-meta">
            Audit-ready
            <br />
            in your dashboard
          </div>
        </div>

        <div
          ref={wrapRef}
          className="sl-res-slider"
          tabIndex={0}
          onKeyDown={onKeyDown}
        >
          <div className="sl-res-track-wrap">
            <div
              ref={trackRef}
              className="sl-res-track"
              style={{ transform: `translateX(${offset}px)` }}
              onTouchStart={onTouchStart}
              onTouchEnd={onTouchEnd}
            >
              {RESULTS.map((r) => (
                <article
                  key={r.name}
                  className="sl-res-card"
                >
                  <div className="sl-res-top">
                    <span className="sl-res-emoji">{r.emoji}</span>
                    <div>
                      <div className="sl-res-num">{r.num}</div>
                      <div className="sl-res-num-lbl">{r.numLbl}</div>
                    </div>
                  </div>
                  <span className="sl-res-sector">{r.sector}</span>
                  <h3 className="sl-res-name">{r.name}</h3>
                  <p className="sl-res-summary">{r.summary}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="sl-res-controls">
            <button
              type="button"
              className="sl-res-btn"
              data-dir="prev"
              aria-label="Previous"
              onClick={() => go(-1)}
              disabled={index <= 0}
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="19" y1="12" x2="5" y2="12" />
                <polyline points="12 19 5 12 12 5" />
              </svg>
            </button>
            <div
              className="sl-res-progress"
              aria-hidden="true"
              style={{ '--sl-res-fill': fill } as CSSProperties}
            />
            <button
              type="button"
              className="sl-res-btn"
              data-dir="next"
              aria-label="Next"
              onClick={() => go(1)}
              disabled={index >= maxIndex}
            >
              <ArrowIcon strokeWidth={2} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Proof;
