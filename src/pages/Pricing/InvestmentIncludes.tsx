import type { ReactElement, ReactNode } from 'react';

interface IncludeCard {
  tag: string;
  title: string;
  text: ReactNode;
  bullets: ReactNode[];
  icon: ReactElement;
}

const CARDS: IncludeCard[] = [
  {
    tag: 'Full-Stack Team',
    title: 'An entire growth department.',
    text: (
      <>
        Dedicated Ads Manager, SEO Strategist, Medical Content Writer, and
        Social Media Manager - not isolated freelancers.
      </>
    ),
    bullets: [
      'Senior practitioners only',
      'Healthcare-fluent from day one',
      'Real analytics infrastructure',
    ],
    icon: (
      <svg
        width={22}
        height={22}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.8}
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
    tag: '30-Day Launch Sprint',
    title: 'Tangible results in month one.',
    text: (
      <>
        Technical audit, CRM/EHR integration, HIPAA-compliant call tracking,
        AI chatbot deployment, and first campaign launches - all in 30
        days.
      </>
    ),
    bullets: [
      'Structured onboarding flow',
      'Operational improvements visible',
      'First wave of campaigns live',
    ],
    icon: (
      <svg
        width={22}
        height={22}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
  },
  {
    tag: 'HIPAA Infrastructure',
    title: 'Compliance built in, not billed extra.',
    text: (
      <>
        BAAs signed at signup, encrypted servers, secure data routing -
        full HIPAA compliance with zero hidden fees.
      </>
    ),
    bullets: [
      'BAAs included by default',
      'Encrypted data infrastructure',
      'See case studies',
    ],
    icon: (
      <svg
        width={22}
        height={22}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 2 L 4 6 V 12 C 4 16.5 7.5 20.7 12 22 C 16.5 20.7 20 16.5 20 12 V 6 Z" />
        <path d="M9 12 L 11 14 L 15 10" />
      </svg>
    ),
  },
];

const Check = () => (
  <span className="check">
    <svg
      width={9}
      height={9}
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

const InvestmentIncludes = () => {
  return (
    <section className="pr-includes" aria-labelledby="pr-inc-title">
      <div className="container-shell">
        <div className="pr-section-head">
          <span className="pr-section-eyebrow">
            What Your Investment Includes
          </span>
          <h2 id="pr-inc-title" className="pr-section-h2">
            Not just services. A full-stack growth team.
          </h2>
          <p className="pr-section-sub">
            Every retainer integrates an entire department of medical growth
            experts into your clinic - with HIPAA infrastructure and
            onboarding included.
          </p>
        </div>

        <div className="pr-includes-grid">
          {CARDS.map((card) => (
            <article key={card.tag} className="pr-include-card">
              <span className="pr-include-icon" aria-hidden="true">
                {card.icon}
              </span>
              <span className="pr-include-tag">{card.tag}</span>
              <h3 className="pr-include-title">{card.title}</h3>
              <p className="pr-include-text">{card.text}</p>
              <ul className="pr-include-list">
                {card.bullets.map((bullet, i) => (
                  <li key={i}>
                    <Check />
                    {bullet}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InvestmentIncludes;
