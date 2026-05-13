import type { ReactElement, ReactNode } from 'react';

interface Value {
  num: string;
  title: string;
  text: ReactNode;
  icon: ReactElement;
}

const VALUES: Value[] = [
  {
    num: '/01',
    title: 'Patient-First Marketing',
    text: 'Every campaign must serve the patient as much as the practice. We never employ dark patterns, misleading claims, or non-compliant advertising tactics. Marketing should connect the right patient to the right provider at the right time.',
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
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
  },
  {
    num: '/02',
    title: 'Revenue-Accountable Results',
    text: 'We track actual patient registrations and revenue impact — not vanity metrics like impressions or reach. Our analytics dashboards show Cost Per Acquisition, appointment-to-show ratios, and real ROI tied to your bottom line.',
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
        <line x1="12" y1="20" x2="12" y2="10" />
        <line x1="18" y1="20" x2="18" y2="4" />
        <line x1="6" y1="20" x2="6" y2="16" />
      </svg>
    ),
  },
  {
    num: '/03',
    title: 'Compliance Without Compromise',
    text: 'We sign Business Associate Agreements (BAAs) with every client. Our infrastructure — from encrypted forms to secure hosting — is designed to protect patient data at every touchpoint. Compliance is not a feature; it is the foundation.',
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
        <path d="M12 2 L 4 6 V 12 C 4 16.5 7.5 20.7 12 22 C 16.5 20.7 20 16.5 20 12 V 6 Z" />
        <path d="M9 12 L 11 14 L 15 10" />
      </svg>
    ),
  },
];

const Mission = () => {
  return (
    <section className="ab-mission" aria-labelledby="ab-mission-title">
      <div className="container-shell">
        <div className="ab-mission-head">
          <span className="ab-mission-eyebrow">
            Our Mission &amp; Core Values
          </span>
          <h2 id="ab-mission-title" className="ab-mission-h2">
            Three principles that guide every campaign we launch.
          </h2>
          <p className="ab-mission-sub">
            Every decision we make is guided by these principles &mdash; from
            the campaigns we launch to the tools we build.
          </p>
        </div>

        <div className="ab-values-grid">
          {VALUES.map((v) => (
            <article key={v.num} className="ab-value">
              <span className="ab-value-num">{v.num}</span>
              <span className="ab-value-icon" aria-hidden="true">
                {v.icon}
              </span>
              <h3 className="ab-value-title">{v.title}</h3>
              <p className="ab-value-text">{v.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Mission;
