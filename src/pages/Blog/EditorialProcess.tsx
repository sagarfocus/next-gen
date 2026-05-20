import type { ReactElement } from 'react';

interface Step {
  cls: string;
  num: string;
  duration: string;
  title: string;
  text: string;
  icon: ReactElement;
  expand?: boolean;
}

const STEPS: Step[] = [
  {
    cls: 's1',
    num: '1',
    duration: '1 Week',
    title: 'Research',
    text: 'We mine our $10M+ in healthcare ad spend data, client dashboards, and HIPAA audit findings to find the patterns most clinics miss - before writing a single word.',
    icon: (
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
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    ),
  },
  {
    cls: 's2',
    num: '2',
    duration: '2 Weeks',
    title: 'Draft & Visuals',
    text: 'A senior practitioner drafts the article alongside our design team - clean diagrams, real screenshots, and brand-consistent visuals that make complex tactics easy to scan.',
    icon: (
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
        <path d="M12 19l7-7 3 3-7 7-3-3z" />
        <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
        <path d="M2 2l7.586 7.586" />
      </svg>
    ),
  },
  {
    cls: 's3',
    num: '3',
    duration: '1–2 Days',
    title: 'Compliance Review',
    text: 'Our Head of Compliance reviews every article line-by-line for HIPAA accuracy. We test every recommended tactic against real client funnels before publishing - nothing untested ships.',
    icon: (
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
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
        <line x1="12" y1="18" x2="12.01" y2="18" />
      </svg>
    ),
  },
  {
    cls: 's4',
    num: '4',
    duration: '1–2 Days',
    title: 'Publish & Distribute',
    text: 'We wrap each article with a polished cover, embed it in our newsletter, and notify the 4,000+ healthcare practice managers reading every Tuesday morning - with full source attribution.',
    icon: (
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
        <path d="M22 2L11 13" />
        <polygon points="22 2 15 22 11 13 2 9 22 2" />
      </svg>
    ),
    expand: true,
  },
];

const EditorialProcess = () => {
  return (
    <section className="bl-process" aria-labelledby="bl-process-title">
      <div className="container-shell">
        <div className="bl-process-head">
          <span className="bl-process-eyebrow">Editorial Process</span>
          <h2 id="bl-process-title" className="bl-process-h2">
            How every article gets to your inbox.
          </h2>
          <p className="bl-process-sub">
            Beyond just publishing tactics, we build each piece around real
            client work - from raw insight to peer-reviewed, HIPAA-checked,
            practitioner-tested content.
          </p>

          <div className="bl-process-range">
            <span className="bl-process-range-pill">Apr 2026</span>
            <span className="bl-process-range-pill is-end">May 2026</span>
          </div>
        </div>

        <div className="bl-steps">
          {STEPS.map((step) => (
            <article key={step.cls} className={`bl-step ${step.cls}`}>
              <div className="bl-step-badge">
                <span className="bl-step-badge-text">{step.duration}</span>
              </div>
              <div className="bl-step-card">
                {step.expand && (
                  <button className="bl-step-expand" type="button" aria-label="Expand step">
                    <svg
                      width={14}
                      height={14}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <polyline points="15 3 21 3 21 9" />
                      <polyline points="9 21 3 21 3 15" />
                      <line x1="21" y1="3" x2="14" y2="10" />
                      <line x1="3" y1="21" x2="10" y2="14" />
                    </svg>
                  </button>
                )}
                <div className="bl-step-head">
                  <span className="bl-step-ico" aria-hidden="true">
                    {step.icon}
                  </span>
                  <h3 className="bl-step-title">
                    <span className="bl-step-num">{step.num}</span> {step.title}
                  </h3>
                </div>
                <p className="bl-step-text">{step.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EditorialProcess;
