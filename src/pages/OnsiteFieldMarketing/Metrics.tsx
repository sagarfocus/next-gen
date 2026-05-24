import { METRICS } from './data';

const Metrics = () => {
  return (
    <section className="sl-section ofm-met-section" id="results">
      <div className="container-shell">
        <div className="sl-sec-head">
          <div>
            <div className="sl-sec-num">05 - What the dashboard reads</div>
            <h2 className="sl-sec-title">
              The numbers we&rsquo;re <em>actually paid on.</em>
            </h2>
          </div>
          <div className="sl-sec-meta">
            Median across DFW
            <br />
            healthcare cohorts · 2025
          </div>
        </div>

        <div className="ofm-met-grid">
          {METRICS.map((m) => (
            <article key={m.k} className="ofm-met-card">
              <div className="ofm-met-num">
                {m.v}
                {m.unit && <em>{m.unit}</em>}
              </div>
              <div className="ofm-met-lbl">{m.k}</div>
              <p className="ofm-met-sub">{m.d}</p>
            </article>
          ))}
        </div>

        <p className="ofm-met-note">
          <strong>How we report.</strong> Every metric on this page comes from the same
          dashboard your team logs into daily — sourced from CRM, intake tablets, and QR
          scans. We don&rsquo;t blend in industry averages, and we don&rsquo;t show you
          numbers we can&rsquo;t reproduce on demand.
        </p>
      </div>
    </section>
  );
};

export default Metrics;
