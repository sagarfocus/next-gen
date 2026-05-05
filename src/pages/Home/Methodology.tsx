import type { ReactNode } from 'react';

interface Phase {
  num: string;
  phase: string;
  title: string;
  body: ReactNode;
  foot: string;
}

const PHASES: Phase[] = [
  {
    num: '01',
    phase: 'Phase 1',
    title: 'Discovery & Technical Audit',
    body: (
      <>
        We conduct a comprehensive audit of your existing digital infrastructure
        &mdash; website performance,{' '}
        <a href="https://thenextgenhealth.com/services/seo-local-search">
          SEO health
        </a>
        ,{' '}
        <a href="https://thenextgenhealth.com/services/google-business-profile">
          Google Business Profile
        </a>{' '}
        optimization, paid media efficiency, and front-desk call handling
        capacity. This reveals exactly where patients are being lost in your
        funnel.
      </>
    ),
    foot: 'Audit — Week 1–2',
  },
  {
    num: '02',
    phase: 'Phase 2',
    title: 'Strategy & Infrastructure Build',
    body: (
      <>
        We design your custom growth strategy mapping service-specific keywords,
        competitive positioning, and patient journey touchpoints. Simultaneously,
        our development team deploys the automation infrastructure &mdash; AI
        chatbots, digital intake forms, call tracking, and{' '}
        <a href="https://thenextgenhealth.com/services/analytics-reporting">
          real-time analytics dashboards
        </a>
        .
      </>
    ),
    foot: 'Build — Week 3–4',
  },
  {
    num: '03',
    phase: 'Phase 3',
    title: 'Launch & Accelerate',
    body: (
      <>
        Within the first 30 days, we launch SEO optimizations, paid media
        campaigns across{' '}
        <a href="https://thenextgenhealth.com/services/google-ads">Google</a>{' '}
        and{' '}
        <a href="https://thenextgenhealth.com/services/meta-ads">Meta</a>,{' '}
        <a href="https://thenextgenhealth.com/services/social-media-marketing">
          social media content calendars
        </a>
        , and{' '}
        <a href="https://thenextgenhealth.com/services/content-copywriting">
          healthcare content publishing
        </a>
        . You will see tangible operational changes in patient inquiry volume
        and front-desk efficiency from week one.
      </>
    ),
    foot: 'Launch — Day 1–30',
  },
];

const PhaseArrow = () => (
  <span className="phase-arrow" aria-hidden="true">
    <svg
      width={14}
      height={14}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="7" y1="17" x2="17" y2="7" />
      <polyline points="7 7 17 7 17 17" />
    </svg>
  </span>
);

const Methodology = () => {
  return (
    <section
      className="method-section"
      id="methodology"
      aria-labelledby="method-title"
    >
      <div className="container-shell">
        <div className="method-head">
          <span className="method-eyebrow">Methodology</span>
          <h2 id="method-title" className="method-h2">
            The Clinic Growth&nbsp;OS:{' '}
            <span className="accent-text">Our Methodology</span>.
          </h2>
          <p className="method-sub">
            We don&rsquo;t just generate leads &mdash; we build predictable
            patient acquisition systems that scale with your practice.
          </p>
        </div>

        <div className="phase-grid">
          {PHASES.map(({ num, phase, title, body, foot }, i) => (
            <article
              key={num}
              className="phase-card"
              aria-labelledby={`phase-${i + 1}`}
            >
              <div className="phase-tag">
                <span className="num">{num}</span>
                <span>{phase}</span>
              </div>
              <h3 id={`phase-${i + 1}`} className="phase-title">
                {title}
              </h3>
              <p className="phase-text">{body}</p>
              <div className="phase-foot">{foot}</div>
              <PhaseArrow />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Methodology;
