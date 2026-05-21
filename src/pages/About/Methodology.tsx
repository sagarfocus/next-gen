import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';

import phase1Img from '../../assets/analytics and report.png';
import phase2Img from '../../assets/strategy planning.png';
import phase3Img from '../../assets/paidmedia.png';

interface Phase {
  num: string;
  phase: string;
  title: string;
  body: ReactNode;
  foot: string;
  href: string;
  image: string;
}

const PHASES: Phase[] = [
  {
    num: '01',
    phase: 'Phase 1',
    title: 'Discovery & Technical Audit',
    href: '/methodology/phase-1',
    image: phase1Img,
    body: (
      <>
        We conduct a comprehensive audit of your existing digital infrastructure
        - website performance, SEO health, Google Business Profile
        optimization, paid media efficiency, and front-desk call handling
        capacity. This reveals exactly where patients are being lost in your
        funnel.
      </>
    ),
    foot: 'Audit - Week 1–2',
  },
  {
    num: '02',
    phase: 'Phase 2',
    title: 'Strategy & Infrastructure Build',
    href: '/methodology/phase-2',
    image: phase2Img,
    body: (
      <>
        We design your custom growth strategy mapping service-specific keywords,
        competitive positioning, and patient journey touchpoints. Simultaneously,
        our development team deploys the automation infrastructure - AI
        chatbots, digital intake forms, call tracking, and real-time analytics
        dashboards.
      </>
    ),
    foot: 'Build - Week 3–4',
  },
  {
    num: '03',
    phase: 'Phase 3',
    title: 'Launch & Accelerate',
    href: '/methodology/phase-3',
    image: phase3Img,
    body: (
      <>
        Within the first 30 days, we launch SEO optimizations, paid media
        campaigns across Google and Meta, social media content calendars, and
        healthcare content publishing. You will see tangible operational
        changes in patient inquiry volume and front-desk efficiency from week
        one.
      </>
    ),
    foot: 'Launch - Day 1–30',
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
            We don&rsquo;t just generate leads - we build predictable
            patient acquisition systems that scale with your practice.
          </p>
        </div>

        <div className="phase-grid">
          {PHASES.map(({ num, phase, title, body, foot, href, image }, i) => (
            <Link
              key={num}
              to={href}
              className="phase-card"
              aria-labelledby={`phase-${i + 1}`}
            >
              <img
                className="phase-bg"
                src={image}
                alt=""
                loading="lazy"
                decoding="async"
                aria-hidden="true"
              />
              <span className="phase-overlay" aria-hidden="true" />
              <div className="phase-content">
                <div className="phase-tag">
                  <span className="num">{num}</span>
                  <span>{phase}</span>
                </div>
                <h3 id={`phase-${i + 1}`} className="phase-title">
                  {title}
                </h3>
                <p className="phase-text">{body}</p>
                <div className="phase-foot">{foot}</div>
              </div>
              <PhaseArrow />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Methodology;
