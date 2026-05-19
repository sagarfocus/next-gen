import type { ReactElement } from 'react';
import Breadcrumb from '../../components/Breadcrumb';
import { AnimatedBackground } from '../../lib/motion';

const ArrowRight = () => (
  <svg
    width={11}
    height={11}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2.4}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

interface SideCard {
  href: string;
  cls: string;
  cat: string;
  catColor?: string;
  title: string;
  meta: string;
  illustration: ReactElement;
}

const LEFT_SIDE: SideCard[] = [
  {
    href: '/blog/hipaa-tracking',
    cls: 's1',
    cat: 'Compliance',
    title: 'HIPAA-compliant Google Ads tracking in 2026.',
    meta: 'Apr 22, 2026 · 8 min read',
    illustration: (
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path
          d="M50 18 L 22 30 V 52 C 22 68 35 82 50 86 C 65 82 78 68 78 52 V 30 Z"
          fill="rgba(87,109,181,.10)"
          stroke="#576DB5"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />
        <path
          d="M40 50 L 47 57 L 62 42"
          fill="none"
          stroke="#8FBC8F"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="78" cy="22" r="4" fill="#B38B6D" />
      </svg>
    ),
  },
  {
    href: '/blog/maps-rank',
    cls: 's2',
    cat: 'Local SEO',
    title: '7 Google Business Profile signals that move map rankings.',
    meta: 'Apr 10, 2026 · 9 min read',
    illustration: (
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path
          d="M50 14 C 34 14 22 26 22 42 C 22 64 50 88 50 88 S 78 64 78 42 C 78 26 66 14 50 14 Z"
          fill="rgba(179,139,109,.18)"
          stroke="#B38B6D"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />
        <circle cx="50" cy="42" r="9" fill="#fff" stroke="#B38B6D" strokeWidth="2" />
        <circle cx="50" cy="42" r="4" fill="#576DB5" />
      </svg>
    ),
  },
];

const RIGHT_SIDE: SideCard[] = [
  {
    href: '/blog/ads-cost',
    cls: 's3',
    cat: 'Paid Media',
    title: 'Why your urgent care CPA is probably 30% too high.',
    meta: 'Apr 18, 2026 · 6 min read',
    illustration: (
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <line x1="20" y1="80" x2="20" y2="22" stroke="#2D3748" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="20" y1="80" x2="80" y2="80" stroke="#2D3748" strokeWidth="1.5" strokeLinecap="round" />
        <polyline
          points="28,68 40,52 52,58 64,38 76,28"
          fill="none"
          stroke="#576DB5"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="76" cy="28" r="4" fill="#8FBC8F" />
        <text
          x="50"
          y="92"
          textAnchor="middle"
          fontFamily="Plus Jakarta Sans, sans-serif"
          fontSize="8"
          fontWeight="700"
          letterSpacing="2"
          fill="#B38B6D"
        >
          CPA
        </text>
      </svg>
    ),
  },
  {
    href: '/blog/automation-roi',
    cls: 's4',
    cat: 'Automation',
    title: 'The 4-hour weekly automation that recovers 18% of no-shows.',
    meta: 'Apr 9, 2026 · 7 min read',
    illustration: (
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <circle
          cx="50"
          cy="50"
          r="30"
          fill="rgba(143,188,143,.14)"
          stroke="#8FBC8F"
          strokeWidth="2.5"
        />
        <path
          d="M50 28 V 50 L 64 60"
          fill="none"
          stroke="#576DB5"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="50" cy="50" r="3" fill="#B38B6D" />
        <path
          d="M76 26 L 82 32 L 76 38"
          fill="none"
          stroke="#B38B6D"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

interface LatestItem {
  href: string;
  title: string;
  meta: string;
  thumb: ReactElement;
}

const LATEST: LatestItem[] = [
  {
    href: '/blog/ai-chatbot',
    title: 'AI patient intake: what works, what breaks compliance.',
    meta: 'Apr 6 · 11 min',
    thumb: (
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <rect
          x="22"
          y="28"
          width="56"
          height="40"
          rx="10"
          fill="rgba(87,109,181,.12)"
          stroke="#576DB5"
          strokeWidth="3"
        />
        <circle cx="40" cy="48" r="3" fill="#576DB5" />
        <circle cx="50" cy="48" r="3" fill="#8FBC8F" />
        <circle cx="60" cy="48" r="3" fill="#B38B6D" />
      </svg>
    ),
  },
  {
    href: '/blog/medspa',
    title: 'MedSpa LTV: turning $300 facials into $4K patients.',
    meta: 'Apr 2 · 7 min',
    thumb: (
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <g transform="translate(50, 50)">
          <path d="M0 -22 Q 11 -4 0 14 Q -11 -4 0 -22 Z" fill="#8FBC8F" />
          <path d="M0 -22 Q 11 -4 0 14 Q -11 -4 0 -22 Z" fill="#8FBC8F" opacity=".75" transform="rotate(72)" />
          <path d="M0 -22 Q 11 -4 0 14 Q -11 -4 0 -22 Z" fill="#8FBC8F" opacity=".55" transform="rotate(144)" />
          <path d="M0 -22 Q 11 -4 0 14 Q -11 -4 0 -22 Z" fill="#8FBC8F" opacity=".75" transform="rotate(216)" />
          <path d="M0 -22 Q 11 -4 0 14 Q -11 -4 0 -22 Z" fill="#8FBC8F" opacity=".55" transform="rotate(288)" />
          <circle r="6" fill="#576DB5" />
        </g>
      </svg>
    ),
  },
  {
    href: '/blog/reviews',
    title: 'Automating Google reviews without violating HIPAA.',
    meta: 'Apr 14 · 5 min',
    thumb: (
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <polygon
          points="50,18 60,40 84,42 66,58 72,82 50,68 28,82 34,58 16,42 40,40"
          fill="#8FBC8F"
          stroke="#8FBC8F"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    href: '/blog/urgent-care',
    title: 'Wait-time marketing: the urgent care advantage no one is using.',
    meta: 'Mar 28 · 6 min',
    thumb: (
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <rect
          x="20"
          y="28"
          width="60"
          height="50"
          rx="6"
          fill="rgba(87,109,181,.12)"
          stroke="#576DB5"
          strokeWidth="3"
        />
        <rect x="44" y="40" width="12" height="30" rx="2" fill="#8FBC8F" />
        <rect x="35" y="49" width="30" height="12" rx="2" fill="#8FBC8F" />
      </svg>
    ),
  },
  {
    href: '/blog/analytics',
    title: 'The healthcare marketing dashboard every clinic should run.',
    meta: 'Mar 24 · 8 min',
    thumb: (
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <circle
          cx="50"
          cy="50"
          r="32"
          fill="none"
          stroke="#B38B6D"
          strokeWidth="3"
          strokeDasharray="3 4"
        />
        <circle cx="50" cy="50" r="22" fill="rgba(87,109,181,.10)" stroke="#576DB5" strokeWidth="2.5" />
        <line x1="50" y1="50" x2="50" y2="32" stroke="#576DB5" strokeWidth="3" strokeLinecap="round" />
        <line x1="50" y1="50" x2="65" y2="58" stroke="#8FBC8F" strokeWidth="3" strokeLinecap="round" />
      </svg>
    ),
  },
];

const TRENDING_TOPICS = [
  'Local SEO',
  'HIPAA Tracking',
  'CPA Benchmarks',
  'AI Intake',
  'MedSpa LTV',
  'Reviews',
];

const renderSideCard = (card: SideCard) => (
  <a key={card.href} href={card.href} className={`bl-side-card ${card.cls}`}>
    <div className="bl-side-cover">{card.illustration}</div>
    <div className="bl-side-body">
      <span className="bl-side-cat">{card.cat}</span>
      <h3 className="bl-side-title">{card.title}</h3>
      <span className="bl-side-meta">{card.meta}</span>
    </div>
  </a>
);

const BlogHero = () => {
  return (
    <section className="bl-hero" aria-labelledby="bl-title">
      <AnimatedBackground variant="aurora" intensity="subtle" />
      <span className="bl-hero-reg tr" aria-hidden="true" />
      <span className="bl-hero-reg bl" aria-hidden="true" />

      <div className="container-shell">
        <Breadcrumb current="Blog" />

        <div className="bl-mast reveal d2">
          <span className="bl-mast-eyebrow">
            <span className="swatch" aria-hidden="true">
              <i />
              <i />
              <i />
            </span>
            The Practitioner&rsquo;s Brief
          </span>
          <h1 id="bl-title" className="bl-mast-h1">
            Healthcare <span className="ital">marketing,</span> written by{' '}
            <span className="accent">practitioners</span>.
          </h1>
          <p className="bl-mast-lede">
            <strong>Field-tested tactics, not theory.</strong> Patient
            acquisition strategies, HIPAA updates, and growth case studies from
            the team that&rsquo;s helped 200+ Texas practices scale.
          </p>
        </div>

        <div className="bl-hero-topics reveal d3">
          <span className="bl-hero-topics-label">Trending Topics</span>
          {TRENDING_TOPICS.map((topic) => (
            <a key={topic} href="#" className="bl-hero-topic">
              {topic}
            </a>
          ))}
        </div>

        <div className="bl-edit-grid reveal d3">
          <div className="bl-side">{LEFT_SIDE.map(renderSideCard)}</div>

          <a href="/blog/patient-acquisition-cost-2026" className="bl-feat">
            <div className="bl-feat-cover">
              <span className="bl-feat-badge">Featured</span>
              <svg viewBox="0 0 240 240" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <defs>
                  <linearGradient id="featG2" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#576DB5" stopOpacity=".8" />
                    <stop offset="100%" stopColor="#8FBC8F" stopOpacity=".7" />
                  </linearGradient>
                </defs>
                <rect
                  x="40"
                  y="40"
                  width="160"
                  height="160"
                  rx="14"
                  fill="rgba(255,255,255,.5)"
                  stroke="#B38B6D"
                  strokeWidth="1.5"
                />
                <rect x="60" y="140" width="18" height="46" rx="2" fill="#576DB5" opacity=".75" />
                <rect x="86" y="120" width="18" height="66" rx="2" fill="#576DB5" opacity=".85" />
                <rect x="112" y="100" width="18" height="86" rx="2" fill="url(#featG2)" />
                <rect x="138" y="84" width="18" height="102" rx="2" fill="#8FBC8F" />
                <rect x="164" y="68" width="18" height="118" rx="2" fill="#576DB5" />
                <polyline
                  points="69,144 95,124 121,104 147,88 173,72"
                  fill="none"
                  stroke="#B38B6D"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeDasharray="4 4"
                />
                <circle cx="69" cy="144" r="3" fill="#B38B6D" />
                <circle cx="95" cy="124" r="3" fill="#B38B6D" />
                <circle cx="121" cy="104" r="3" fill="#B38B6D" />
                <circle cx="147" cy="88" r="3" fill="#B38B6D" />
                <circle cx="173" cy="72" r="3" fill="#B38B6D" />
                <g transform="translate(190, 50)">
                  <line x1="-6" y1="0" x2="6" y2="0" stroke="#8FBC8F" strokeWidth="2" strokeLinecap="round" />
                  <line x1="0" y1="-6" x2="0" y2="6" stroke="#8FBC8F" strokeWidth="2" strokeLinecap="round" />
                </g>
              </svg>
            </div>
            <div className="bl-feat-body">
              <span className="bl-feat-cat">Growth Strategy</span>
              <h2 className="bl-feat-title">
                The new Cost Per Acquisition benchmarks for healthcare in 2026.
              </h2>
              <p className="bl-feat-excerpt">
                After analyzing $10M+ in healthcare ad spend across 200+ Texas
                practices, we&rsquo;ve compiled the actual CPA ranges &mdash;
                plus the 4 levers that consistently bring it down.
              </p>
              <div className="bl-feat-meta">
                <span>Apr 28, 2026</span>
                <span className="dot" />
                <span className="author">Sarah Chen</span>
                <span className="dot" />
                <span>12 min read</span>
              </div>
            </div>
          </a>

          <div className="bl-side">
            <aside className="bl-latest" aria-label="Latest articles">
              <div className="bl-latest-head">
                <h3 className="bl-latest-title">Latest</h3>
                <a href="#bl-grid" className="bl-latest-link">
                  See all
                  <ArrowRight />
                </a>
              </div>

              <div className="bl-latest-list">
                {LATEST.map((item) => (
                  <a key={item.href} href={item.href} className="bl-latest-item">
                    <div className="bl-latest-body">
                      <h4 className="bl-latest-h">{item.title}</h4>
                      <span className="bl-latest-meta">{item.meta}</span>
                    </div>
                    <span className="bl-latest-thumb">{item.thumb}</span>
                  </a>
                ))}
              </div>
            </aside>

            {RIGHT_SIDE.map(renderSideCard)}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogHero;
