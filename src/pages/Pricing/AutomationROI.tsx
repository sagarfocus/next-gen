import type { ReactElement, ReactNode } from 'react';

interface Stat {
  num: ReactNode;
  label: string;
  text: string;
  icon: ReactElement;
}

const STATS: Stat[] = [
  {
    num: (
      <>
        15<em>+</em> hrs
      </>
    ),
    label: 'Hours Saved Weekly',
    text: 'Per staff member via automated intake.',
    icon: (
      <svg
        width={18}
        height={18}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
  {
    num: (
      <>
        300<em>%</em>
      </>
    ),
    label: 'Net ROI',
    text: 'Average return from AI scheduling assistants.',
    icon: (
      <svg
        width={18}
        height={18}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.8}
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
    num: 'Reduced',
    label: 'Front-Desk Turnover',
    text: 'Less burnout from repetitive, high-stress tasks.',
    icon: (
      <svg
        width={18}
        height={18}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <line x1="22" y1="11" x2="16" y2="11" />
      </svg>
    ),
  },
  {
    num: 'Higher',
    label: 'Clean Claims Rate',
    text: 'Massive lift from digital insurance verification.',
    icon: (
      <svg
        width={18}
        height={18}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="20 6 9 17 4 12" />
      </svg>
    ),
  },
];

const AutomationROI = () => {
  return (
    <section className="pr-roi" aria-labelledby="pr-roi-title">
      <div className="container-shell">
        <div className="pr-roi-grid">
          <div className="pr-roi-text">
            <span className="pr-roi-eyebrow">Quantifying Automation ROI</span>
            <h2 id="pr-roi-title" className="pr-roi-h2">
              Our retainer pays for itself.
            </h2>
            <p>
              Don&rsquo;t evaluate just the cost of SEO or PPC &mdash; factor in
              the operational savings from our AI automation suite.{' '}
              <strong>
                Front-desk turnover, missed calls, manual insurance
                verification, intake transcription
              </strong>{' '}
              &mdash; our Clinic Growth OS eliminates these inefficiencies.
            </p>
            <p>
              By saving 15+ staff hours weekly and recovering tens of thousands
              in lost revenue from missed appointments, traditional SEO/PPC
              agencies become <strong>fundamentally obsolete</strong>.
            </p>
          </div>

          <div className="pr-roi-stats">
            {STATS.map((stat) => (
              <div key={stat.label} className="pr-stat">
                <span className="pr-stat-icon" aria-hidden="true">
                  {stat.icon}
                </span>
                <div className="pr-stat-num">{stat.num}</div>
                <h3 className="pr-stat-label">{stat.label}</h3>
                <p className="pr-stat-text">{stat.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AutomationROI;
