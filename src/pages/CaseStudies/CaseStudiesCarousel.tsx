import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';
import type { CSSProperties, KeyboardEvent, TouchEvent } from 'react';

interface CaseBlock {
  label: string;
  text: string;
}

interface CaseCard {
  href: string;
  emoji: string;
  metricNum: string;
  metricLbl: string;
  sector: string;
  name: string;
  blocks: CaseBlock[];
}

const CARDS: CaseCard[] = [
  {
    href: 'https://thenextgenhealth.com/case-studies/er-network-patient-growth',
    emoji: '🏥',
    metricNum: '+45%',
    metricLbl: 'Patient Visits',
    sector: 'Emergency Room',
    name: 'Freestanding ER in Dallas Metro',
    blocks: [
      {
        label: 'Challenge',
        text: 'Limited local visibility competing against large hospital systems.',
      },
      {
        label: 'Solution',
        text: 'Local SEO dominance + Google Ads targeting high-acuity keywords.',
      },
      {
        label: 'Results',
        text: '45% increase in patient visits within 6 months, $800K+ additional annual revenue.',
      },
    ],
  },
  {
    href: 'https://thenextgenhealth.com/case-studies/urgent-care-patient-acquisition',
    emoji: '⚡',
    metricNum: '3×',
    metricLbl: 'Acquisitions',
    sector: 'Urgent Care',
    name: 'Multi-location urgent care in Houston',
    blocks: [
      {
        label: 'Challenge',
        text: 'Brand not recognized, losing patients to competitors.',
      },
      {
        label: 'Solution',
        text: 'Comprehensive market strategy + location-specific campaigns.',
      },
      {
        label: 'Results',
        text: '3× increase in appointments, 60% reduction in cost-per-acquisition.',
      },
    ],
  },
  {
    href: 'https://thenextgenhealth.com/case-studies/cosmetic-surgery-lead-growth',
    emoji: '✨',
    metricNum: '+120%',
    metricLbl: 'Lead Growth',
    sector: 'Cosmetic Surgery',
    name: 'Aesthetic clinic in Austin',
    blocks: [
      {
        label: 'Challenge',
        text: 'Competing on price, needed premium positioning.',
      },
      {
        label: 'Solution',
        text: 'Brand identity + targeted social media for high-ticket procedures.',
      },
      {
        label: 'Results',
        text: '120% increase in qualified leads, 25% higher average transaction value.',
      },
    ],
  },
  {
    href: 'https://thenextgenhealth.com/case-studies/primary-care-seo-roi',
    emoji: '👨‍⚕️',
    metricNum: '500%',
    metricLbl: 'SEO ROI',
    sector: 'Primary Care',
    name: 'Family medicine practice in San Antonio',
    blocks: [
      {
        label: 'Challenge',
        text: 'Invisible in search results for "doctor near me".',
      },
      {
        label: 'Solution',
        text: 'Local SEO fundamentals + content marketing for patient education.',
      },
      {
        label: 'Results',
        text: '500%+ ROI, $300K+ annual additional revenue from organic traffic.',
      },
    ],
  },
  {
    href: 'https://thenextgenhealth.com/case-studies/mental-health-patient-retention',
    emoji: '🧠',
    metricNum: '2×',
    metricLbl: 'Retention',
    sector: 'Mental Health',
    name: 'Therapy practice in Dallas',
    blocks: [
      {
        label: 'Challenge',
        text: 'High patient acquisition costs, poor retention.',
      },
      {
        label: 'Solution',
        text: 'Email automation + patient education content strategy.',
      },
      {
        label: 'Results',
        text: '2× patient retention rate, 40% reduction in marketing spend needed.',
      },
    ],
  },
  {
    href: 'https://thenextgenhealth.com/case-studies/dental-practice-local-pack',
    emoji: '🦷',
    metricNum: '#1',
    metricLbl: 'Local Pack',
    sector: 'Dental Practice',
    name: 'General dentistry in Irving',
    blocks: [
      {
        label: 'Challenge',
        text: 'Not appearing in local search top 3.',
      },
      {
        label: 'Solution',
        text: 'Google Business Profile optimization + local citations.',
      },
      {
        label: 'Results',
        text: '#1 ranking in local pack, 70% increase in appointment bookings.',
      },
    ],
  },
];

const visibleForWidth = (w: number) => {
  if (w <= 640) return 1;
  if (w <= 1024) return 2;
  return 3;
};

const ArrowOut = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2.2}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="7" y1="17" x2="17" y2="7" />
    <polyline points="7 7 17 7 17 17" />
  </svg>
);

const ArrowLeft = () => (
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
);

const ArrowRight = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

const CaseStudiesCarousel = () => {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(() =>
    typeof window === 'undefined' ? 3 : visibleForWidth(window.innerWidth),
  );
  const trackRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLAnchorElement>(null);
  const touchStartX = useRef<number | null>(null);

  const total = CARDS.length;
  const maxIndex = Math.max(0, total - visible);

  // Resize listener
  useEffect(() => {
    let resizeT: number | undefined;
    const onResize = () => {
      if (resizeT) window.clearTimeout(resizeT);
      resizeT = window.setTimeout(() => {
        const v = visibleForWidth(window.innerWidth);
        setVisible(v);
        setIndex((i) => Math.min(i, Math.max(0, total - v)));
      }, 120);
    };
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('resize', onResize);
      if (resizeT) window.clearTimeout(resizeT);
    };
  }, [total]);

  // Apply transform whenever index or visible changes (also on first paint)
  useLayoutEffect(() => {
    const track = trackRef.current;
    const card = cardRef.current;
    if (!track || !card) return;
    const cw = card.getBoundingClientRect().width;
    const gapStr =
      getComputedStyle(track).columnGap || getComputedStyle(track).gap;
    const gap = parseInt(gapStr, 10) || 24;
    track.style.transform = `translateX(-${index * (cw + gap)}px)`;
  }, [index, visible]);

  const go = useCallback(
    (delta: number) => {
      setIndex((i) => Math.max(0, Math.min(maxIndex, i + delta)));
    },
    [maxIndex],
  );

  const onKey = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'ArrowLeft') go(-1);
    if (e.key === 'ArrowRight') go(1);
  };

  const onTouchStart = (e: TouchEvent<HTMLDivElement>) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: TouchEvent<HTMLDivElement>) => {
    if (touchStartX.current == null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    touchStartX.current = null;
    if (Math.abs(dx) > 40) go(dx < 0 ? 1 : -1);
  };

  // Progress bar fill: minimum is "what fraction of total is visible", grows up to 100%
  const minFill = (visible / total) * 100;
  const span = 100 - minFill;
  const ratio = maxIndex === 0 ? 1 : index / maxIndex;
  const fillPct = `${minFill + span * ratio}%`;

  return (
    <section className="cs-carousel" id="cs-all">
      <div className="container-shell">
        <div className="cs-head">
          <div>
            <div className="cs-eyebrow">Case Library · 6 of 38</div>
            <h2 className="cs-title">
              Real growth, real numbers, real practices.
            </h2>
          </div>
          <p className="cs-sub">
            Six recent engagements across primary care, specialty, and urgent
            care. Tap into any card for the full breakdown &mdash; or swipe
            through with the controls below.
          </p>
        </div>

        <div
          className="cs-slider"
          tabIndex={0}
          onKeyDown={onKey}
          aria-roledescription="carousel"
        >
          <div
            className="cs-track-wrap"
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
          >
            <div className="cs-track" ref={trackRef}>
              {CARDS.map((card, i) => (
                <a
                  key={card.href}
                  ref={i === 0 ? cardRef : undefined}
                  className="cs-card"
                  href={card.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="cs-card-top">
                    <span className="cs-emoji" aria-hidden="true">
                      {card.emoji}
                    </span>
                    <div className="cs-metric">
                      <div className="cs-metric-num">{card.metricNum}</div>
                      <div className="cs-metric-lbl">{card.metricLbl}</div>
                    </div>
                  </div>
                  <span className="cs-sector">{card.sector}</span>
                  <h3 className="cs-name">{card.name}</h3>
                  <div className="cs-blocks">
                    {card.blocks.map((block) => (
                      <div key={block.label} className="cs-block">
                        <span className="cs-block-lbl">{block.label}</span>
                        <p className="cs-block-txt">{block.text}</p>
                      </div>
                    ))}
                  </div>
                  <div className="cs-foot">
                    Read full case study
                    <ArrowOut />
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div className="cs-controls">
            <button
              type="button"
              className="cs-btn cs-btn-prev"
              onClick={() => go(-1)}
              disabled={index <= 0}
              aria-label="Previous case studies"
            >
              <ArrowLeft />
            </button>
            <div
              className="cs-progress"
              aria-hidden="true"
              style={{ '--cs-fill': fillPct } as CSSProperties}
            />
            <button
              type="button"
              className="cs-btn cs-btn-next"
              onClick={() => go(1)}
              disabled={index >= maxIndex}
              aria-label="Next case studies"
            >
              <ArrowRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesCarousel;
