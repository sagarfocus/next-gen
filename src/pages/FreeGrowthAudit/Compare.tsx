const Compare = () => {
  const rows: { label: string; us: string; them: string }[] = [
    { label: 'Cost', us: '$0 - yours either way', them: '$2,500 – $8,000 upfront' },
    { label: 'Turnaround', us: '5 business days', them: '2 – 3 weeks' },
    { label: 'Run by', us: 'Senior growth strategist', them: 'Account exec with a template' },
    { label: 'Industry fit', us: 'Healthcare-only playbook', them: 'Generic agency framework' },
    { label: 'The call', us: '45-min working plan walk-through', them: 'Sales pitch in disguise' },
    {
      label: 'Deliverable',
      us: 'PDF yours to keep - agency or not',
      them: 'Locked behind a retainer',
    },
  ];
  return (
    <section className="fga-compare" aria-labelledby="fga-compare-title">
      <div className="container-shell">
        <header className="fga-section-head fga-compare-head">
          <span className="fga-section-tag">Why this audit</span>
          <h2 id="fga-compare-title" className="fga-section-h2">
            Same diagnosis. Without the retainer.
          </h2>
          <p className="fga-compare-lede">
            Most agency audits exist to sell you the agency. Ours exists so you know exactly what to
            do next - whether you hire us or not.
          </p>
        </header>

        <div
          className="fga-compare-grid"
          role="table"
          aria-label="Free Growth Audit compared to a typical agency audit"
        >
          <div className="fga-compare-row fga-compare-head-row" role="row">
            <div role="columnheader" aria-hidden="true" />
            <div role="columnheader" className="fga-compare-col fga-compare-col-us">
              <span className="fga-compare-badge">Focus Free Audit</span>
            </div>
            <div role="columnheader" className="fga-compare-col fga-compare-col-them">
              <span className="fga-compare-badge fga-compare-badge-muted">
                Typical agency audit
              </span>
            </div>
          </div>
          {rows.map((r) => (
            <div key={r.label} className="fga-compare-row" role="row">
              <div role="rowheader" className="fga-compare-label">
                {r.label}
              </div>
              <div role="cell" className="fga-compare-cell fga-compare-cell-us">
                <span className="fga-compare-icon" aria-hidden="true">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2.4}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12l5 5L20 7" />
                  </svg>
                </span>
                <span>{r.us}</span>
              </div>
              <div role="cell" className="fga-compare-cell fga-compare-cell-them">
                <span className="fga-compare-icon fga-compare-icon-x" aria-hidden="true">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2.4}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M6 6l12 12M18 6L6 18" />
                  </svg>
                </span>
                <span>{r.them}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Compare;
