import { COVERAGE, COVERAGE_ICON } from './data';

const Coverage = () => {
  return (
    <section className="sl-section mau-cov-section" id="coverage">
      <div className="container-shell">
        <div className="sl-sec-head">
          <div>
            <div className="sl-sec-num">02 - Where it pays off</div>
            <h2 className="sl-sec-title">
              Four teams. <em>19-41 hours back per week.</em>
            </h2>
          </div>
          <div className="sl-sec-meta">
            Hours-to-dollars
            <br />
            measured per clinic
          </div>
        </div>

        <p className="mau-cov-intro">
          We don&rsquo;t automate for novelty. Every flow is sized against{' '}
          <strong>recovered staff hours</strong> — that&rsquo;s the only number that pays for
          the build. Below is the median weekly window we hand back to each function in a
          single-location clinic during year one. Multi-location and specialty practices
          scale these bands roughly linearly.
        </p>

        <div className="mau-cov-grid">
          {COVERAGE.map((c) => {
            const Icon = COVERAGE_ICON[c.key];
            const pct = Math.min(100, (c.high / 14) * 100);
            return (
              <article key={c.key} className="mau-cov-card">
                <div className="mau-cov-top">
                  <div className="mau-cov-icon"><Icon /></div>
                  <span className="mau-cov-hrs">
                    {c.low}-{c.high}<em>hrs / wk</em>
                  </span>
                </div>
                <h3 className="mau-cov-name">{c.area}</h3>
                <p className="mau-cov-one">{c.one}</p>
                <div className="mau-cov-bar">
                  <span className="mau-cov-bar-lbl">Median window recovered</span>
                  <div className="mau-cov-bar-track">
                    <div className="mau-cov-bar-fill" style={{ width: `${pct}%` }} />
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Coverage;
