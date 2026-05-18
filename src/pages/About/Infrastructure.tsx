import type { ReactElement } from 'react';
import { Link } from 'react-router-dom';

interface InfraCard {
  featured?: boolean;
  tag: string;
  title: string;
  text: string;
  bullets: string[];
  icon: ReactElement;
  to: string;
}

const Check = () => (
  <span className="check" aria-hidden="true">
    <svg
      width={10}
      height={10}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={3.2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  </span>
);

const CARDS: InfraCard[] = [
  {
    featured: true,
    tag: 'The Growth Team',
    title: 'Dedicated specialists driving patient volume.',
    text: 'A senior, healthcare-fluent team focused entirely on driving qualified patient volume to your facility — integrated into your operations.',
    bullets: [
      'Dedicated Ads Manager',
      'SEO & AEO Strategist',
      'Medical Content Writer',
      'Social Media Manager',
    ],
    to: '/infrastructure/growth-team',
    icon: (
      <svg
        width={26}
        height={26}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.7}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    tag: 'Compliance Protocol',
    title: 'Built around healthcare data security.',
    text: 'We understand the regulatory environment of healthcare. Our infrastructure is engineered around data security from day one.',
    bullets: [
      'BAA Readiness & Execution',
      'Strict HIPAA Data Routing',
      'Encrypted Patient Intake',
      'Secure Cloud Architecture',
    ],
    to: '/infrastructure/compliance-protocol',
    icon: (
      <svg
        width={26}
        height={26}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.7}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
  },
  {
    tag: 'Service Level Agreements',
    title: 'Rapid response is a clinical necessity.',
    text: 'In the medical sector, response time matters. We document guaranteed SLAs so you always know what to expect.',
    bullets: [
      'Under 4 Hours for Critical Updates',
      '24/7 Uptime Monitoring',
      'Real-Time Dashboard Access',
      'Documented Escalation Paths',
    ],
    to: '/infrastructure/service-level-agreements',
    icon: (
      <svg
        width={26}
        height={26}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.7}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
];

const Infrastructure = () => {
  return (
    <section className="ab-infra" aria-labelledby="ab-infra-title">
      <div className="container-shell">
        <div className="ab-infra-head">
          <span className="ab-infra-eyebrow">The Infrastructure You Hire</span>
          <h2 id="ab-infra-title" className="ab-infra-h2">
            An entire department, integrated into your clinic.
          </h2>
          <p className="ab-infra-sub">
            When you partner with us, you aren&rsquo;t getting a single
            freelancer. You are integrating an entire department of specialized
            medical growth experts into your clinic operations.
          </p>
        </div>

        <div className="ab-infra-grid">
          {CARDS.map((card) => (
            <Link
              key={card.tag}
              to={card.to}
              className={`ab-infra-card${card.featured ? ' is-featured' : ''}`}
              aria-label={`${card.tag} — read more`}
            >
              <span className="ab-infra-icon" aria-hidden="true">
                {card.icon}
              </span>
              <span className="ab-infra-tag">{card.tag}</span>
              <h3 className="ab-infra-title">{card.title}</h3>
              <p className="ab-infra-text">{card.text}</p>
              <ul className="ab-infra-list">
                {card.bullets.map((b) => (
                  <li key={b}>
                    <Check />
                    {b}
                  </li>
                ))}
              </ul>
              <span className="ab-infra-cta" aria-hidden="true">
                Learn more
                <svg width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Infrastructure;
