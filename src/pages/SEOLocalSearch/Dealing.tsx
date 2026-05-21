interface CadenceColumn {
  cadence: string;
  cycle: string;
  blurb: string;
  items: string[];
}

const COLUMNS: CadenceColumn[] = [
  {
    cadence: 'Weekly',
    cycle: 'Always',
    blurb: 'The compounding work. Shipped, not promised.',
    items: [
      'GBP posts + photo updates',
      'Citation drift caught',
      'Ticket queue cleared',
      'Rank tick + alerts',
    ],
  },
  {
    cadence: 'Monthly',
    cycle: 'Review',
    blurb: 'The retro. Performance and pivots, on the record.',
    items: [
      'Rank report + 30-day delta',
      'Conversion review by cohort',
      'Content calendar locked',
      'Owner sync + roadmap',
    ],
  },
  {
    cadence: 'Quarterly',
    cycle: 'Compound',
    blurb: 'The reset. Strategy refreshed against the SERP.',
    items: [
      'Competitor SERP audit',
      'Roadmap reset',
      'Schema migration plan',
      'Growth playbook update',
    ],
  },
];

const PulseDot = () => (
  <span className="sl-deal-pulse" aria-hidden="true">
    <span className="sl-deal-pulse-ring" />
    <span className="sl-deal-pulse-core" />
  </span>
);

const Dealing = () => {
  return (
    <section className="sl-section sl-dealing" id="dealing">
      <div className="container-shell">
        <div className="sl-sec-head">
          <div>
            <div className="sl-sec-num">05 - How we run it</div>
            <h2 className="sl-sec-title">
              Weekly cadence. <em>Quarterly compound.</em>
            </h2>
          </div>
          <div className="sl-sec-meta">
            Named lead
            <br />
            Live dashboard
          </div>
        </div>

        <div className="sl-deal-grid">
          {COLUMNS.map((c, i) => (
            <article key={c.cadence} className={`sl-deal-col${i === 0 ? ' is-active' : ''}`}>
              <div className="sl-deal-head">
                <PulseDot />
                <div className="sl-deal-cycle">{c.cycle}</div>
              </div>
              <h3 className="sl-deal-name">{c.cadence}</h3>
              <p className="sl-deal-blurb">{c.blurb}</p>
              <ul className="sl-deal-items">
                {c.items.map((it) => (
                  <li key={it}>{it}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Dealing;
