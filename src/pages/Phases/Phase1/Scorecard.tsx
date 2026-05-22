const Scorecard = () => (
  <section className="ph1-card-block">
    <div className="ph1-card-text">
      <span className="lbl">/ 01 - The Output</span>
      <h2>One scorecard. Every dimension scored against the highest-converting competitor in your radius.</h2>
      <p>
        Each surface gets a number, a verdict, and a remediation cost.
        No 80-slide deck - a single page your team can act on within an
        hour of reading it.
      </p>
    </div>

    <div className="ph1-mock" role="img" aria-label="Audit scorecard preview">
      <div className="ph1-mock-bar">
        <i /><i /><i />
        <span className="name">Audit Scorecard - Q.SAMPLE</span>
      </div>
      <div className="ph1-mock-grid">
        <div className="ph1-mock-row">
          <div className="k">Core Web Vitals</div>
          <div className="v">42<em className="bad">Poor</em></div>
          <div className="bar"><i style={{ width: '42%' }} /></div>
        </div>
        <div className="ph1-mock-row">
          <div className="k">Local Pack Rank</div>
          <div className="v">#7<em className="warn">Below fold</em></div>
          <div className="bar"><i style={{ width: '28%' }} /></div>
        </div>
        <div className="ph1-mock-row">
          <div className="k">GBP Completeness</div>
          <div className="v">68<em className="warn">Gap</em></div>
          <div className="bar"><i style={{ width: '68%' }} /></div>
        </div>
        <div className="ph1-mock-row">
          <div className="k">Schema Coverage</div>
          <div className="v">12<em className="bad">Missing</em></div>
          <div className="bar"><i style={{ width: '12%' }} /></div>
        </div>
        <div className="ph1-mock-row">
          <div className="k">Paid CPL - Google</div>
          <div className="v">$184<em className="bad">+38%</em></div>
          <div className="bar"><i style={{ width: '82%' }} /></div>
        </div>
        <div className="ph1-mock-row">
          <div className="k">Call Answer Rate</div>
          <div className="v">61<em className="warn">Leaking</em></div>
          <div className="bar"><i style={{ width: '61%' }} /></div>
        </div>
      </div>
    </div>
  </section>
);

export default Scorecard;
