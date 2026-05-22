const Timeline = () => (
  <section className="ph1-tl">
    <div className="ph1-tl-head">
      <span className="lbl">/ 04 - The Run</span>
      <h2>Two weeks. Four checkpoints. Nothing skipped.</h2>
    </div>
    <div className="ph1-tl-grid">
      <div className="ph1-tl-cell active">
        <div className="day">Day 01 - 03</div>
        <div className="ttl">Access &amp; intake</div>
        <p className="txt">GA4, GSC, GBP, ad accounts, call platform, CRM. Read-only handover, signed in 24h.</p>
      </div>
      <div className="ph1-tl-cell">
        <div className="day">Day 04 - 07</div>
        <div className="ttl">Crawl &amp; baseline</div>
        <p className="txt">Full technical crawl, rank tracking, competitor delta, paid account excavation.</p>
      </div>
      <div className="ph1-tl-cell">
        <div className="day">Day 08 - 11</div>
        <div className="ttl">Funnel mapping</div>
        <p className="txt">Form, call, and desk instrumentation; every step in the journey is timed and counted.</p>
      </div>
      <div className="ph1-tl-cell">
        <div className="day">Day 12 - 14</div>
        <div className="ttl">Scorecard &amp; readout</div>
        <p className="txt">Single-page scorecard, prioritized fix list with dollar values, 60-minute walk-through.</p>
      </div>
    </div>
  </section>
);

export default Timeline;
