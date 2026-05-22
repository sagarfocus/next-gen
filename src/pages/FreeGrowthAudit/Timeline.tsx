const Timeline = () => {
  const days: { d: string; t: string; n: string }[] = [
    { d: 'DAY 0',  t: 'You apply',      n: 'Two-minute form. URL, baseline numbers, your focus.' },
    { d: 'DAY 1',  t: 'We accept',      n: 'Email within an hour. Audit folder shared with you.' },
    { d: 'DAY 3',  t: 'Deep audit',     n: 'Site, GBP, ad accounts, competitors - under the hood.' },
    { d: 'DAY 5',  t: 'The call',       n: 'A 45-minute walk-through. Recorded. Plan PDF in hand.' },
    { d: 'DAY 5+', t: 'You decide',     n: 'Run the plan yourself, hire any agency - no pitch from us.' },
  ];
  return (
    <section className="fga-timeline-section" aria-labelledby="fga-timeline-title">
      <div className="container-shell">
        <header className="fga-section-head">
          <span className="fga-section-tag">The five days</span>
          <h2 id="fga-timeline-title" className="fga-section-h2">
            Five calendar days. From form fill to finished plan.
          </h2>
        </header>

        <ol className="fga-timeline" aria-label="Audit timeline">
          {days.map((step, i) => (
            <li key={step.d} className={`fga-tl-item${i === days.length - 1 ? ' is-last' : ''}`}>
              <div className="fga-tl-marker" aria-hidden="true">
                <span className="fga-tl-dot" />
              </div>
              <div className="fga-tl-content">
                <div className="fga-tl-day">{step.d}</div>
                <div className="fga-tl-title">{step.t}</div>
                <p className="fga-tl-note">{step.n}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Timeline;
