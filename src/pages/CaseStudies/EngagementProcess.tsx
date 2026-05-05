import type { ReactElement } from 'react';

interface Step {
  title: string;
  bullets: string[];
  icon: ReactElement;
}

const STEPS: Step[] = [
  {
    title: 'Discover',
    bullets: ['Stakeholder interviews', 'Patient journey map', 'Competitor audit', 'Goal setting'],
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.7}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="9" r="4" />
        <path d="M16 13a6 6 0 0 1 6 6v2H2v-2a6 6 0 0 1 6-6" />
        <path d="M12 9v0" />
      </svg>
    ),
  },
  {
    title: 'Define',
    bullets: ['Persona & ICP', 'Channel priority', 'KPI framework', 'Risk register'],
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.7}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <line x1="9" y1="9" x2="15" y2="9" />
        <line x1="9" y1="13" x2="15" y2="13" />
        <line x1="9" y1="17" x2="13" y2="17" />
      </svg>
    ),
  },
  {
    title: 'Ideate',
    bullets: ['Creative concepts', 'Funnel design', 'Offer crafting', 'Test plan'],
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.7}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M9 18h6" />
        <path d="M10 21h4" />
        <path d="M12 2a7 7 0 0 0-4 12.7c1.2.8 1 1.6 1 2.3v1h6v-1c0-.7-.2-1.5 1-2.3A7 7 0 0 0 12 2z" />
      </svg>
    ),
  },
  {
    title: 'Execute',
    bullets: ['Asset production', 'Channel launch', 'Daily monitoring', 'Rapid iteration'],
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.7}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M14.7 6.3a4.5 4.5 0 0 0-6.4 0L6 8.6l9.4 9.4 2.3-2.3a4.5 4.5 0 0 0 0-6.4z" />
        <path d="M6 8.6l-3 3a2 2 0 0 0 0 2.8l4.6 4.6a2 2 0 0 0 2.8 0l3-3" />
      </svg>
    ),
  },
  {
    title: 'Measure',
    bullets: ['Weekly dashboards', 'ROI attribution', 'Retro & learnings', 'Scale plan'],
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.7}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
  },
];

const EngagementProcess = () => {
  return (
    <section className="cs-process">
      <div className="container-shell">
        <div className="pr-head">
          <div className="cs-eyebrow">Engagement Process</div>
          <h2>How every case study gets built</h2>
          <p>
            Five tight phases shape every engagement on this page. The same
            playbook scales from a six-week pilot to a full-year retainer.
          </p>
        </div>

        <div className="pr-grid">
          {STEPS.map((step) => (
            <div key={step.title} className="pr-step">
              <div className="pr-circle">{step.icon}</div>
              <h3>{step.title}</h3>
              <ul>
                {step.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EngagementProcess;
