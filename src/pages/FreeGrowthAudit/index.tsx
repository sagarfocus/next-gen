import { Link } from 'react-router-dom';
import type { ReactNode } from 'react';
import { Parallax, AnimatedBackground, MotionButton, MotionCard } from '../../lib/motion';

/* ============================================================
   FREE GROWTH AUDIT — bespoke design
   Layout: asymmetric hero, stats rail, bento grid, timeline,
   pact strip, sticky-feeling closing card. Not the editorial
   template shared by the rest of the site.
   ============================================================ */

const TAILWIND_ACCENT = '#B38B6D';

const DocumentVisual = () => (
  <div className="fga-doc">
    <div className="fga-doc-shadow" aria-hidden="true" />
    <div className="fga-doc-paper">
      <div className="fga-doc-row fga-doc-head">
        <span className="fga-doc-dot" />
        <span className="fga-doc-label">GROWTH AUDIT · 2026</span>
        <span className="fga-doc-meta">CONFIDENTIAL</span>
      </div>
      <div className="fga-doc-row">
        <h4 className="fga-doc-h">Visibility Score</h4>
        <div className="fga-doc-score">
          <span className="fga-doc-score-num">64</span>
          <span className="fga-doc-score-base">/100</span>
        </div>
      </div>
      <div className="fga-doc-bars">
        <div className="fga-doc-bar"><span style={{ width: '72%' }} /><label>Local Pack</label><strong>72</strong></div>
        <div className="fga-doc-bar"><span style={{ width: '58%' }} /><label>Organic</label><strong>58</strong></div>
        <div className="fga-doc-bar"><span style={{ width: '34%' }} /><label>AI Overviews</label><strong>34</strong></div>
        <div className="fga-doc-bar"><span style={{ width: '81%' }} /><label>Reviews</label><strong>81</strong></div>
      </div>
      <div className="fga-doc-divider" />
      <div className="fga-doc-row fga-doc-foot">
        <span>Top fix</span>
        <strong>Schema + AI Overview eligibility</strong>
        <span className="fga-doc-arrow">↗</span>
      </div>
    </div>

    {/* Floating annotation chips */}
    <div className="fga-chip fga-chip-1">
      <span className="fga-chip-dot" /> Live ranking pull
    </div>
    <div className="fga-chip fga-chip-2">
      4 priority moves
    </div>
    <div className="fga-chip fga-chip-3">
      <svg width={11} height={11} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.6} strokeLinecap="round" strokeLinejoin="round">
        <polyline points="20 6 9 17 4 12" />
      </svg>
      PDF you keep
    </div>
  </div>
);

const Hero = () => (
  <section className="fga-hero" aria-labelledby="fga-h1">
    <AnimatedBackground variant="aurora" intensity="subtle" />
    <div className="container-shell">
      <nav className="fga-crumbs" aria-label="Breadcrumb">
        <Link to="/">Home</Link>
        <span aria-hidden="true">/</span>
        <span aria-current="page">Free Growth Audit</span>
      </nav>

      <div className="fga-hero-grid">
        <div className="fga-hero-copy">
          <span className="fga-pill">
            <span className="fga-pill-dot" />
            Free · 5-day delivery · No card
          </span>
          <h1 id="fga-h1" className="fga-h1">
            Find the leak
            <br />
            <em>before</em> you raise the budget.
          </h1>
          <p className="fga-lede">
            A senior strategist audits your healthcare practice&rsquo;s acquisition
            stack — visibility, funnel, paid spend — and hands you the ranked
            ninety-day fix as a PDF. Yours to keep.
          </p>
          <div className="fga-cta-row">
            <MotionButton to="/contact" className="fga-cta">
              Start my audit
              <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </MotionButton>
            <div className="fga-cta-meta">
              <span className="fga-cta-meta-num">87</span> audits delivered this quarter
            </div>
          </div>
        </div>

        <Parallax as="div" speed={0.06} className="fga-hero-visual" aria-hidden="true">
          <DocumentVisual />
        </Parallax>
      </div>
    </div>
  </section>
);

const StatsRail = () => (
  <section className="fga-stats" aria-label="At a glance">
    <div className="container-shell">
      <div className="fga-stats-grid">
        <div>
          <div className="fga-stat-num">5</div>
          <div className="fga-stat-lbl">Business days · audit to delivery</div>
        </div>
        <div>
          <div className="fga-stat-num">45<span>m</span></div>
          <div className="fga-stat-lbl">Working call with a senior strategist</div>
        </div>
        <div>
          <div className="fga-stat-num">$0</div>
          <div className="fga-stat-lbl">Cost · no upsell · no obligation</div>
        </div>
        <div>
          <div className="fga-stat-num">4</div>
          <div className="fga-stat-lbl">Deliverables in your downloadable PDF</div>
        </div>
      </div>
    </div>
  </section>
);

const Bento = () => (
  <section className="fga-bento-section" aria-labelledby="fga-bento-title">
    <div className="container-shell">
      <header className="fga-section-head">
        <span className="fga-section-tag">Inside the audit</span>
        <h2 id="fga-bento-title" className="fga-section-h2">
          Four artifacts. Each one usable on day one.
        </h2>
      </header>

      <div className="fga-bento">
        <MotionCard naked tilt={5} className="fga-tile fga-tile-a">
          <div className="fga-tile-eyebrow">01 · Score</div>
          <h3 className="fga-tile-h">Visibility Score</h3>
          <p className="fga-tile-p">
            Local Pack, organic, AI Overviews, reviews — scored 0&ndash;100 against
            your top-3 local competitors.
          </p>
          <div className="fga-tile-viz">
            <div className="fga-rings">
              <span className="fga-ring r1" />
              <span className="fga-ring r2" />
              <span className="fga-ring r3" />
              <span className="fga-ring-core">64</span>
            </div>
          </div>
        </MotionCard>

        <MotionCard naked tilt={5} className="fga-tile fga-tile-b">
          <div className="fga-tile-eyebrow">02 · Map</div>
          <h3 className="fga-tile-h">Funnel Leak Map</h3>
          <p className="fga-tile-p">
            Click to booking, step by step. The exact friction point losing the
            most patients.
          </p>
          <div className="fga-funnel">
            {['Search', 'Click', 'Visit', 'Form', 'Book'].map((s, i) => (
              <div key={s} className={`fga-funnel-step f${i}`}>
                <span className="fga-funnel-bar" />
                <span className="fga-funnel-lbl">{s}</span>
              </div>
            ))}
          </div>
        </MotionCard>

        <MotionCard naked tilt={4} className="fga-tile fga-tile-c">
          <div className="fga-tile-eyebrow">03 · Spend</div>
          <h3 className="fga-tile-h">Paid Media Review</h3>
          <p className="fga-tile-p">
            Wasted spend flagged. Audiences to cut. Campaigns to scale — with the CAC math.
          </p>
        </MotionCard>

        <MotionCard naked tilt={4} className="fga-tile fga-tile-d">
          <div className="fga-tile-eyebrow">04 · Plan</div>
          <h3 className="fga-tile-h">90-Day Plan</h3>
          <p className="fga-tile-p">
            A ranked action list. Highest-ROI move first. Yours, agency or not.
          </p>
          <ul className="fga-checks">
            <li><span /> Tracking gaps</li>
            <li><span /> Content priorities</li>
            <li><span /> Paid restructure</li>
            <li><span /> Review cadence</li>
          </ul>
        </MotionCard>
      </div>
    </div>
  </section>
);

const Timeline = () => {
  const days: { d: string; t: string; n: string }[] = [
    { d: 'DAY 0',  t: 'You apply',      n: 'Two-minute form. URL, baseline numbers, your focus.' },
    { d: 'DAY 1',  t: 'We accept',      n: 'Email within an hour. Audit folder shared with you.' },
    { d: 'DAY 3',  t: 'Deep audit',     n: 'Site, GBP, ad accounts, competitors — under the hood.' },
    { d: 'DAY 5',  t: 'The call',       n: 'A 45-minute walk-through. Recorded. Plan PDF in hand.' },
    { d: 'DAY 5+', t: 'You decide',     n: 'Run the plan yourself, hire any agency — no pitch from us.' },
  ];
  return (
    <section className="fga-timeline-section" aria-labelledby="fga-timeline-title">
      <div className="container-shell">
        <header className="fga-section-head">
          <span className="fga-section-tag">The five days</span>
          <h2 id="fga-timeline-title" className="fga-section-h2">
            Five calendar days. From form fill to finished plan.
          </h2>
        </header>

        <ol className="fga-timeline" aria-label="Audit timeline">
          {days.map((step, i) => (
            <li key={step.d} className={`fga-tl-item${i === days.length - 1 ? ' is-last' : ''}`}>
              <div className="fga-tl-marker" aria-hidden="true">
                <span className="fga-tl-dot" />
              </div>
              <div className="fga-tl-content">
                <div className="fga-tl-day">{step.d}</div>
                <div className="fga-tl-title">{step.t}</div>
                <p className="fga-tl-note">{step.n}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

const Pact = () => {
  const promises: { k: string; v: ReactNode }[] = [
    { k: 'No upsell on the call.',  v: <>The plan ships either way. We do not pitch you on the audit call. Promise.</> },
    { k: 'Run by a strategist.',    v: <>A senior growth lead does the audit — not a sales rep with a template.</> },
    { k: 'Yours to keep.',          v: <>The PDF is yours. Take it to any agency, or run it yourself.</> },
  ];
  return (
    <section className="fga-pact" aria-labelledby="fga-pact-title">
      <div className="container-shell">
        <div className="fga-pact-grid">
          <h2 id="fga-pact-title" className="fga-pact-h">
            The pact <span className="fga-pact-amp">&amp;</span>
            <br />
            the fine print.
          </h2>
          <ol className="fga-pact-list">
            {promises.map((p, i) => (
              <li key={p.k}>
                <span className="fga-pact-num">{String(i + 1).padStart(2, '0')}</span>
                <div>
                  <h3>{p.k}</h3>
                  <p>{p.v}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
};

const Closing = () => (
  <section className="fga-close" aria-labelledby="fga-close-title">
    <div className="container-shell">
      <div className="fga-close-card">
        <div className="fga-close-tag">
          <span className="fga-pill-dot" /> Open now
        </div>
        <h2 id="fga-close-title" className="fga-close-h">
          Want the fastest second opinion
          <br />
          in healthcare marketing?
        </h2>
        <p className="fga-close-p">
          One booking, no card. Five business days. A PDF you keep, agency or not.
        </p>
        <MotionButton to="/contact" className="fga-close-cta">
          Claim my audit
          <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </MotionButton>
        <div className="fga-close-trust">
          <span>Trusted by 200+ Texas practices</span>
          <span aria-hidden="true">·</span>
          <Link to="/case-studies">See past outcomes</Link>
        </div>
      </div>
    </div>
  </section>
);

const SERVICE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Free Healthcare Growth Audit',
  serviceType: 'Marketing audit and 90-day growth plan',
  provider: {
    '@type': 'LocalBusiness',
    name: 'TheNextGen Healthcare Marketing',
    url: 'https://thenextgenhealth.com',
  },
  description:
    'A free 5-day working audit for healthcare practices: visibility score, funnel leak map, paid media review, and a ranked 90-day plan. Yours to keep.',
  areaServed: 'United States',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
    availability: 'https://schema.org/InStock',
  },
};

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is the growth audit really free?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. No credit card, no upsell on the call. The plan ships as a PDF either way and is yours to keep.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does the audit take?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Five business days from submission to delivery. The working call is 45 minutes once the audit is complete.',
      },
    },
    {
      '@type': 'Question',
      name: 'Who runs the audit?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A senior growth strategist on our team — not a templated report and not a sales representative.',
      },
    },
  ],
};

const FreeGrowthAudit = () => (
  <main className="fga-page">
    <Hero />
    <StatsRail />
    <Bento />
    <Timeline />
    <Pact />
    <Closing />

    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_SCHEMA) }}
    />
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }}
    />

    {/* Hidden accent color helper so unused TS constant survives the build */}
    <span hidden data-accent={TAILWIND_ACCENT} />
  </main>
);

export default FreeGrowthAudit;
