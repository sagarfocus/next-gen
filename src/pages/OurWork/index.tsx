import { Link } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import type { ReactNode } from 'react';
import { Parallax, AnimatedBackground, MotionButton, MotionCard } from '../../lib/motion';
import nextHeroImg1 from '../../assets/nextheroimg1.png';
import nextHeroImg2 from '../../assets/nextheroimg2.png';
import {
  ENGAGEMENT_DETAILS,
  INDUSTRY_DETAILS,
  CAPABILITY_DETAILS,
  INDUSTRY_ICONS,
  detailHref,
} from './details.data';

/* ============================================================
   OUR WORK - bespoke gallery page.
   Card clicks navigate to dedicated /our-work/:kind/:slug pages
   so each engagement, industry, and capability has its own
   indexable URL (no overlay/modal pattern - SEO-first).
   ============================================================ */

const IMG = {
  spotlight: nextHeroImg1,
  studio: nextHeroImg2,
};

const TAGS = [
  'SEO',
  'Google Ads',
  'Meta Ads',
  'Branding',
  'Web Design',
  'Content',
  'Automation',
  'Field Marketing',
  'Reviews',
  'AI Triage',
  'Local Pack',
  'Schema',
];

const STATS = [
  { v: '200+',   l: 'Practices grown' },
  { v: '$24M+',  l: 'Pipeline moved' },
  { v: '47M',    l: 'Impressions delivered' },
  { v: '4.1×',   l: 'Median ROAS' },
];

const CAPABILITY_TAGS = ['Discovery', 'Acquisition', 'Brand', 'Web', 'Lifecycle', 'Operations'] as const;

/* Per-card stat triplet — three quick facts shown at the bottom of each card.
   Order matches CAPABILITY_DETAILS / CAPABILITY_TAGS. */
const CAPABILITY_STATS: { v: string; l: string }[][] = [
  // 01 Local search systems · Discovery
  [
    { v: '90 d',     l: 'Time to lift' },
    { v: 'Map Pack', l: 'Channel' },
    { v: 'Compound', l: 'Trajectory' },
  ],
  // 02 Paid media · Acquisition
  [
    { v: '7 d',           l: 'To live' },
    { v: 'Google + Meta', l: 'Platforms' },
    { v: 'Pay-back',      l: 'Goal' },
  ],
  // 03 Identities · Brand
  [
    { v: '6 wk',           l: 'Sprint' },
    { v: 'Visual + Voice', l: 'Scope' },
    { v: 'Refresh',        l: 'Outcome' },
  ],
  // 04 Booking-first websites · Web
  [
    { v: '8 wk',          l: 'Build' },
    { v: 'Booking-first', l: 'Approach' },
    { v: 'Convert',       l: 'Focus' },
  ],
  // 05 Recall + nurture · Lifecycle
  [
    { v: '30 d',      l: 'Setup' },
    { v: 'Automated', l: 'Type' },
    { v: 'Retain',    l: 'Goal' },
  ],
  // 06 Automations · Operations
  [
    { v: '21 d',      l: 'Install' },
    { v: 'EHR-link',  l: 'Integration' },
    { v: 'AI Triage', l: 'Layer' },
  ],
];

const ENGAGEMENT_DELTAS = ['+318', '+62', '−48'] as const;

const ENGAGEMENT_SECTORS = ['Emergency Room', 'Medspa', 'Dental Network'] as const;

const ENGAGEMENT_HEADLINES = [
  'Filled overnight slots without paying for non-emergent traffic.',
  'Re-priced the launch funnel around lifetime value, not first visit.',
  'Unified seven locations under one search + brand operating system.',
] as const;

/* ---------- Sections ---------- */

const Hero = () => (
  <section className="ow-hero" aria-labelledby="ow-h1">
    <AnimatedBackground variant="aurora" intensity="medium" />
    <div className="container-shell">
      <nav className="ow-crumbs" aria-label="Breadcrumb">
        <Link to="/">Home</Link>
        <span aria-hidden="true">/</span>
        <span aria-current="page">Our Work</span>
      </nav>

      <div className="ow-hero-grid">
        <div className="ow-hero-copy">
          <span className="ow-pill">
            <span className="ow-pill-dot" />
            Selected work · Healthcare · 2019–2026
          </span>
          <h1 id="ow-h1" className="ow-h1">
            Six years.
            <br />
            <em>Two hundred</em> practices.
            <br />
            One playbook.
          </h1>
          <p className="ow-lede">
            A retrospective of the marketing, branding, and operations work
            we have shipped for clinics, medspas, urgent care centers, and
            multi-location healthcare brands.
          </p>
          <div className="ow-hero-cta">
            <MotionButton to="/contact" className="ow-cta-primary">
              Start a project
              <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </MotionButton>
            <Link to="/case-studies" className="ow-cta-link">
              Read full case studies
            </Link>
          </div>
        </div>

        <Parallax as="div" speed={0.06} className="ow-hero-visual" aria-hidden="true">
          <figure className="ow-spotlight">
            <img src={IMG.spotlight} alt="" loading="eager" />
            <figcaption>
              <span className="ow-spot-tag">In production</span>
              <span className="ow-spot-title">Multi-location growth OS</span>
            </figcaption>
          </figure>

          <div className="ow-floater ow-floater-1">
            <span className="ow-floater-num">+318<small>%</small></span>
            <span className="ow-floater-lbl">Booked visits · 90d</span>
          </div>
          <div className="ow-floater ow-floater-2">
            <span className="ow-floater-dot" /> Live ranking · Map Pack
          </div>
        </Parallax>
      </div>
    </div>
  </section>
);

const Marquee = () => (
  <section className="ow-marquee" aria-hidden="true">
    <div className="ow-marquee-track">
      {[...TAGS, ...TAGS].map((t, i) => (
        <span key={`${t}-${i}`} className="ow-mq-item">
          <span className="ow-mq-dot" /> {t}
        </span>
      ))}
    </div>
  </section>
);

const Stats = () => (
  <section className="ow-stats" aria-label="Engagement totals">
    <div className="container-shell">
      <div className="ow-stats-grid">
        {STATS.map((s, i) => (
          <div key={s.l} className="ow-stat">
            <span className="ow-stat-mono">0{i + 1}</span>
            <div className="ow-stat-v">{s.v}</div>
            <div className="ow-stat-l">{s.l}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Capabilities = () => (
  <section className="ow-cap" aria-labelledby="ow-cap-title">
    <div className="container-shell">
      <header className="ow-section-head ow-section-head--split">
        <div className="ow-section-head-main">
          <span className="ow-section-tag">What we ship</span>
          <h2 id="ow-cap-title" className="ow-section-h2">
            Six capabilities. One operating system.
          </h2>
        </div>
        <p className="ow-section-aside">
          Each capability runs as its own discipline — with a scorecard, a
          cadence, and an owner — but they share one calendar and one growth
          lead. That is how the engine stays in sync.
        </p>
      </header>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
        {CAPABILITY_DETAILS.map((cap, i) => {
          const stats = CAPABILITY_STATS[i];
          return (
            <MotionCard
              key={cap.slug}
              naked
              tilt={4}
              className="cap-card"
            >
              {/* Image with rounded inner radius */}
              <div className="cap-card-art">
                <img src={cap.img} alt="" loading="lazy" />
              </div>

              {/* Title row + circular arrow icon top-right */}
              <div className="cap-card-head">
                <div className="cap-card-head-text">
                  <h3 className="cap-card-title">{cap.title}</h3>
                  <span className="cap-card-tag">{CAPABILITY_TAGS[i]}</span>
                </div>
                <span className="cap-card-pin" aria-hidden="true">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="7" y1="17" x2="17" y2="7" />
                    <polyline points="7 7 17 7 17 17" />
                  </svg>
                </span>
              </div>

              {/* Short blurb */}
              <p className="cap-card-copy">{cap.blurb}</p>

              {/* Footer: 3 stat columns + "See more" pill button */}
              <div className="cap-card-foot">
                <div className="cap-card-stats">
                  {stats.map((s) => (
                    <div key={s.l} className="cap-card-stat">
                      <span className="cap-card-stat-v">{s.v}</span>
                      <span className="cap-card-stat-l">{s.l}</span>
                    </div>
                  ))}
                </div>
                <Link
                  to={detailHref(cap.kind, cap.slug)}
                  className="cap-card-cta"
                  aria-label={`See more about ${CAPABILITY_TAGS[i]} - ${cap.title}`}
                >
                  See more
                </Link>
              </div>
            </MotionCard>
          );
        })}
      </div>
    </div>
  </section>
);

const Industries = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLUListElement>(null);
  const [progress, setProgress] = useState(0);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    const mqDesktop = window.matchMedia('(min-width: 901px)');
    const mqReduce = window.matchMedia('(prefers-reduced-motion: reduce)');
    let raf = 0;

    const update = () => {
      raf = 0;
      if (!mqDesktop.matches || mqReduce.matches) {
        track.style.transform = '';
        setProgress(0);
        setActive(0);
        return;
      }
      const rect = section.getBoundingClientRect();
      const vh = window.innerHeight;
      const scrollDistance = section.offsetHeight - vh;
      const scrolled = Math.min(Math.max(-rect.top, 0), scrollDistance);
      const p = scrollDistance > 0 ? scrolled / scrollDistance : 0;
      const viewport = track.parentElement;
      const viewportWidth = viewport ? viewport.clientWidth : window.innerWidth;
      const trackOverflow = Math.max(0, track.scrollWidth - viewportWidth);
      track.style.transform = `translate3d(${-p * trackOverflow}px, 0, 0)`;
      setProgress(p);
      setActive(Math.min(INDUSTRY_DETAILS.length - 1, Math.round(p * (INDUSTRY_DETAILS.length - 1))));
    };

    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', update);
    mqDesktop.addEventListener('change', update);
    mqReduce.addEventListener('change', update);
    return () => {
      if (raf) cancelAnimationFrame(raf);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', update);
      mqDesktop.removeEventListener('change', update);
      mqReduce.removeEventListener('change', update);
    };
  }, []);

  return (
    <section ref={sectionRef} className="ow-ind" aria-labelledby="ow-ind-title">
      <div className="ow-ind-sticky">
        <div className="container-shell">
          <header className="ow-ind-head">
            <span className="ow-section-tag">Industries we serve</span>
            <h2 id="ow-ind-title" className="ow-section-h2">
              The clinics this work has shipped for.
            </h2>
            <p className="ow-ind-lede">
              Single-location practices, multi-site networks, and everything between.
              Scroll to explore - every vertical has its own pricing model, regulatory
              edge, and patient journey.
            </p>
          </header>
        </div>

        <div className="ow-ind-viewport" aria-hidden="false">
          <ul ref={trackRef} className="ow-ind-track">
            {INDUSTRY_DETAILS.map((it, i) => {
              const isOpen = i === active;
              return (
                <li
                  key={it.slug}
                  className={`ow-ind-card${isOpen ? ' is-active' : ''}`}
                  aria-current={isOpen ? 'true' : undefined}
                >
                  <Link
                    to={detailHref(it.kind, it.slug)}
                    className="ow-ind-card-btn"
                    aria-label={`Read more about ${it.title}`}
                  >
                    <div className="ow-ind-card-media" aria-hidden="true">
                      <img src={it.img} alt="" loading="lazy" />
                      <div className="ow-ind-card-shade" />
                    </div>
                    <div className="ow-ind-card-top">
                      <span className="ow-ind-card-num">{String(i + 1).padStart(2, '0')} / {String(INDUSTRY_DETAILS.length).padStart(2, '0')}</span>
                      <span className="ow-ind-card-icon" aria-hidden="true">{INDUSTRY_ICONS[it.slug]}</span>
                    </div>
                    <div className="ow-ind-card-bottom">
                      <h3 className="ow-ind-card-title">{it.title}</h3>
                      <p className="ow-ind-card-blurb">{it.blurb}</p>
                      <span className="ow-ind-card-cta">View details
                        <svg width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <line x1="5" y1="12" x2="19" y2="12" />
                          <polyline points="12 5 19 12 12 19" />
                        </svg>
                      </span>
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="container-shell">
          <div className="ow-ind-progress" aria-hidden="true">
            <div className="ow-ind-progress-meta">
              <span>{String(active + 1).padStart(2, '0')} <em>/ {String(INDUSTRY_DETAILS.length).padStart(2, '0')}</em></span>
              <span className="ow-ind-progress-name">{INDUSTRY_DETAILS[active].title}</span>
              <span className="ow-ind-progress-hint">Scroll to advance →</span>
            </div>
            <div className="ow-ind-progress-rail">
              <div className="ow-ind-progress-fill" style={{ width: `${progress * 100}%` }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Featured = () => (
  <section className="ow-feat" aria-labelledby="ow-feat-title">
    <div className="container-shell">
      <header className="ow-section-head">
        <span className="ow-section-tag">Featured engagements</span>
        <h2 id="ow-feat-title" className="ow-section-h2">
          Three from the last quarter.
        </h2>
      </header>

      <div className="ow-feat-grid">
        {ENGAGEMENT_DETAILS.map((e, i) => (
          <MotionCard key={e.slug} naked tilt={7} className="ow-feat-card-wrap">
            <Link
              to={detailHref(e.kind, e.slug)}
              className="ow-feat-card"
              aria-label={`Read more about ${e.title}`}
            >
              <div className="ow-feat-art ow-feat-art--photo" aria-hidden="true">
                <img src={e.img} alt="" loading="lazy" />
                <div className="ow-feat-art-shade" />
                <span className="ow-feat-delta">{ENGAGEMENT_DELTAS[i]}<small>%</small></span>
              </div>
              <div className="ow-feat-body">
                <span className="ow-feat-sector">{ENGAGEMENT_SECTORS[i]}</span>
                <h3 className="ow-feat-name">{e.title}</h3>
                <p className="ow-feat-headline">{ENGAGEMENT_HEADLINES[i]}</p>
                <div className="ow-feat-foot">
                  <div>
                    <strong>{e.metric.v}</strong>
                    <span>{e.metric.l}</span>
                  </div>
                  <span className="ow-feat-arrow" aria-hidden="true">↗</span>
                </div>
              </div>
            </Link>
          </MotionCard>
        ))}
      </div>
    </div>
  </section>
);

const Closing = () => (
  <section className="ow-close" aria-labelledby="ow-close-title">
    <div className="container-shell">
      <div className="ow-close-card">
        <Parallax as="div" speed={0.05} className="ow-close-img" aria-hidden="true">
          <img src={IMG.studio} alt="" loading="lazy" />
          <div className="ow-close-shade" />
        </Parallax>
        <div className="ow-close-body">
          <span className="ow-pill">
            <span className="ow-pill-dot" /> Now booking · Q3 2026
          </span>
          <h2 id="ow-close-title" className="ow-close-h">
            Want to be in this list <em>next year</em>?
          </h2>
          <p className="ow-close-p">
            We take a small number of new engagements each quarter. If your
            practice is ready, the audit gets you a real plan in five days.
          </p>
          <div className="ow-close-cta">
            <MotionButton to="/free-growth-audit" className="ow-cta-primary ow-cta-primary--light">
              Get my growth audit
              <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </MotionButton>
            <Link to="/case-studies" className="ow-cta-link ow-cta-link--light">
              Read full case studies
            </Link>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const COLLECTION_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Our Work - Healthcare Marketing Portfolio',
  url: 'https://thenextgenhealth.com/our-work',
  description:
    'A retrospective of marketing, branding, web, and automation work shipped for clinics, medspas, urgent care, and multi-location healthcare brands.',
  isPartOf: {
    '@type': 'WebSite',
    name: 'TheNextGen Healthcare Marketing',
    url: 'https://thenextgenhealth.com',
  },
  about: [
    { '@type': 'Thing', name: 'Healthcare SEO' },
    { '@type': 'Thing', name: 'Healthcare paid media' },
    { '@type': 'Thing', name: 'Medical brand identity' },
    { '@type': 'Thing', name: 'Healthcare automation' },
  ],
};

const _noopNode: ReactNode = null;

const OurWork = () => (
  <main className="ow-page">
    <Hero />
    <Marquee />
    <Stats />
    <Capabilities />
    <Industries />
    <Featured />
    <Closing />

    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(COLLECTION_SCHEMA) }}
    />
    <span hidden>{_noopNode}</span>
  </main>
);

export default OurWork;
