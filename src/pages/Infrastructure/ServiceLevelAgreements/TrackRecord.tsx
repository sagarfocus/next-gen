import { RECORDS } from './data';

const TrackRecord = () => (
  <section className="slax-record">
    <div className="gt-shell">
      <header className="gtx-sec-head">
        <span className="gtx-eyebrow">
          <span className="gtx-eyebrow-dot" aria-hidden="true" />
          Track Record
        </span>
        <h2 className="gtx-sec-title">
          The numbers we <em>held to.</em>
        </h2>
        <p className="gtx-sec-sub">
          Trailing 12 months across the active book of healthcare engagements. Independently
          verified as part of our annual security review.
        </p>
      </header>

      <div className="slax-record-grid">
        {RECORDS.map((r, i) => (
          <article key={r.eyebrow} className={`slax-record-card ${i === 0 ? 'is-feature' : ''}`}>
            <span className="slax-record-eyebrow">{r.eyebrow}</span>
            <div className="slax-record-num">{r.value}</div>
            <div className={`slax-record-delta is-${r.delta}`}>
              {r.delta === 'up' && <span aria-hidden="true">↑ </span>}
              {r.delta === 'down' && <span aria-hidden="true">↓ </span>}
              {r.target}
            </div>
            <p className="slax-record-note">{r.note}</p>
          </article>
        ))}
      </div>

      <p className="slax-record-footnote">
        Methodology: medians computed across all qualifying incidents in the trailing 12-month
        window. Uptime measured by independent third-party monitor. Zero compliance escalations
        covers all HIPAA-covered engagements.
      </p>
    </div>
  </section>
);

export default TrackRecord;
