import { METRICS } from './data';

const Metrics = () => {
  return (
    <section className="sl-section mau-met-section" id="results">
      <div className="container-shell">
        <div className="sl-sec-head">
          <div>
            <div className="sl-sec-num">06 - What the workflows move</div>
            <h2 className="sl-sec-title">
              The numbers we&rsquo;re <em>actually paid on.</em>
            </h2>
          </div>
          <div className="sl-sec-meta">
            Median across active
            <br />
            healthcare engagements
          </div>
        </div>

        <div className="mau-met-grid">
          {METRICS.map((m) => {
            const formatted = m.decimals
              ? m.value.toFixed(m.decimals)
              : String(m.value);
            return (
              <article key={m.k} className="mau-met-card">
                <div className="mau-met-num">
                  {m.prefix ?? ''}
                  {formatted}
                  {m.suffix && <em>{m.suffix}</em>}
                </div>
                <div className="mau-met-lbl">{m.k}</div>
                <p className="mau-met-sub">{m.d}</p>
              </article>
            );
          })}
        </div>

        <p className="mau-met-note">
          <strong>How we report.</strong> Every metric here is sourced from the same live
          dashboard your team logs into daily — pulled from your EHR, your CRM, and the
          workflow engine itself. We don&rsquo;t blend in industry benchmarks and we
          don&rsquo;t publish a number we can&rsquo;t reproduce on demand.
        </p>
      </div>
    </section>
  );
};

export default Metrics;
