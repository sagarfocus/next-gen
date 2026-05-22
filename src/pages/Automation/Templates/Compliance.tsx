import { TEMPLATES } from './data';

const COMPLIANCE_TIERS = [
  {
    key: 'BAA required',
    desc: 'Touches PHI directly. Runs only behind a signed Business Associate Agreement with every vendor in the path.',
    count: TEMPLATES.filter((t) => t.compliance === 'BAA required').length,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 2 L 4 6 V 12 C 4 16.5 7.5 20.7 12 22 C 16.5 20.7 20 16.5 20 12 V 6 Z" />
        <path d="M9 12 L 11 14 L 15 10" />
      </svg>
    ),
  },
  {
    key: 'HIPAA-aware',
    desc: 'Touches scheduling and messaging metadata — no clinical PHI. Built to respect HIPAA boundaries by design.',
    count: TEMPLATES.filter((t) => t.compliance === 'HIPAA-aware').length,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="9" />
        <path d="M8 12 L 11 15 L 16 9" />
      </svg>
    ),
  },
  {
    key: 'PHI-free',
    desc: 'Workflow operates entirely outside the PHI surface. Reviews, social, lead capture — public-facing only.',
    count: TEMPLATES.filter((t) => t.compliance === 'PHI-free').length,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="4" y="6" width="16" height="14" rx="2" />
        <path d="M8 10 L 12 14 L 16 10" />
      </svg>
    ),
  },
];

const Compliance = () => (
  <section className="atx-comp" aria-labelledby="atx-comp-title">
    <div className="container-shell">
      <header className="adv-head det-head">
        <span className="adv-eyebrow">/ 05 &nbsp; Compliance posture</span>
        <h2 id="atx-comp-title" className="adv-h2">Three modes. One library.</h2>
        <p className="adv-intro">
          Every workflow declares its compliance posture up front — so the
          front desk, the compliance lead, and IT all see the same boundary
          before anything ships.
        </p>
      </header>
      <div className="atx-comp-grid">
        {COMPLIANCE_TIERS.map((c) => (
          <article key={c.key} className="atx-comp-card">
            <span className="atx-comp-icon">{c.icon}</span>
            <div className="atx-comp-head">
              <h3 className="atx-comp-title">{c.key}</h3>
              <span className="atx-comp-count">{c.count} workflow{c.count === 1 ? '' : 's'}</span>
            </div>
            <p className="atx-comp-desc">{c.desc}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Compliance;
