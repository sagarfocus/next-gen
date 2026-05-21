interface ProblemItem {
  num: string;
  name: string;
  desc: string;
  impact: string;
}

const PROBLEMS: ProblemItem[] = [
  {
    num: '01',
    name: 'Generic keyword targeting',
    desc: 'Agencies chase "dentist near me" instead of "emergency root canal Saturday." High-intent patients never see your page.',
    impact: 'Wrong query, wrong patient',
  },
  {
    num: '02',
    name: 'Map Pack invisible',
    desc: 'GBP half-set, photos missing, hours wrong. The pack rewards local signals the practice does not have.',
    impact: '78% of clicks land on Top-3',
  },
  {
    num: '03',
    name: 'HIPAA-blind tracking',
    desc: 'Stock pixels leak health intent to ad platforms. Lawyers and regulators are catching on - fast.',
    impact: 'PHI exposure risk',
  },
  {
    num: '04',
    name: 'No AI Overview citations',
    desc: 'No FAQ schema, no condition pillars. AI summaries quote your competitors instead of your practice.',
    impact: 'Cited by AI? No.',
  },
];

const AlertIcon = () => (
  <svg
    width={14}
    height={14}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2.2}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M12 9v4" />
    <path d="M12 17h.01" />
    <path d="M10.3 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
  </svg>
);

const Problem = () => {
  return (
    <section className="sl-section sl-problem" id="problem">
      <div className="container-shell">
        <div className="sl-sec-head">
          <div>
            <div className="sl-sec-num">01 - The problem</div>
            <h2 className="sl-sec-title">
              Most healthcare SEO does not <em>move bookings.</em>
            </h2>
          </div>
          <div className="sl-sec-meta">
            Four patterns we see
            <br />
            in every audit
          </div>
        </div>

        <div className="sl-prob-grid">
          {PROBLEMS.map((p) => (
            <article key={p.num} className="sl-prob-card">
              <div className="sl-prob-top">
                <span className="sl-prob-icon" aria-hidden="true">
                  <AlertIcon />
                </span>
                <span className="sl-prob-num">{p.num}</span>
              </div>
              <h3 className="sl-prob-name">{p.name}</h3>
              <p className="sl-prob-desc">{p.desc}</p>
              <div className="sl-prob-impact">{p.impact}</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Problem;
