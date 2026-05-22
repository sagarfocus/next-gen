const Outcomes = () => {
  const results: { metric: string; metricLabel: string; context: string; practice: string }[] = [
    {
      metric: '+37%',
      metricLabel: 'Qualified bookings',
      context: 'In 60 days, by rewriting the paid landing flow and adding intake automation flagged in the audit.',
      practice: 'Med spa · Houston',
    },
    {
      metric: '−$8.4k',
      metricLabel: 'Wasted spend / mo',
      context: 'Broad-match keyword bleed and overlapping audiences across three ad accounts - cut in the first 30 days.',
      practice: 'Urgent care · DFW',
    },
    {
      metric: '#1–3',
      metricLabel: 'Local Pack',
      context: 'GBP review velocity plus a service-area page rebuild moved four service terms into the 3-pack in 11 weeks.',
      practice: 'Dental · Austin',
    },
    {
      metric: '4.2 → 4.8★',
      metricLabel: 'Google rating',
      context: 'Replaced manual review asks with the permission-based SMS cadence specified in the 90-day plan.',
      practice: 'Mental health · San Antonio',
    },
  ];
  return (
    <section className="fga-outcomes" aria-labelledby="fga-outcomes-title">
      <div className="container-shell">
        <header className="fga-section-head fga-outcomes-head">
          <span className="fga-section-tag">Proof, not promises</span>
          <h2 id="fga-outcomes-title" className="fga-section-h2">
            Real numbers. Real practices.
          </h2>
          <p className="fga-outcomes-lede">
            Healthcare practices that ran the audit themselves -
            most without ever hiring an agency.
          </p>
        </header>

        <div className="fga-outcomes-grid">
          {results.map((r) => (
            <article key={r.practice} className="fga-outcome-card">
              <div className="fga-outcome-metric">{r.metric}</div>
              <div className="fga-outcome-metric-lbl">{r.metricLabel}</div>
              <p className="fga-outcome-context">{r.context}</p>
              <div className="fga-outcome-practice">
                <span className="fga-outcome-dot" aria-hidden="true" />
                {r.practice}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Outcomes;
