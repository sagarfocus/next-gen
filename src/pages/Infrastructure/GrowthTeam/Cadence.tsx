import { CADENCE } from './data';

const Cadence = () => (
  <section className="gtx-cadence">
    <div className="gt-shell">
      <header className="gtx-sec-head">
        <span className="gtx-eyebrow">
          <span className="gtx-eyebrow-dot" aria-hidden="true" />
          Weekly Rhythm
        </span>
        <h2 className="gtx-sec-title">
          The cadence that <em>holds the work.</em>
        </h2>
        <p className="gtx-sec-sub">
          Predictable. Your team always knows what's shipping this week.
        </p>
      </header>

      <ol className="gtx-cad-strip">
        {CADENCE.map((c, i) => (
          <li
            key={c.day}
            className="gtx-cad-cell"
            style={{ '--cell-index': i } as React.CSSProperties}
          >
            <span className="gtx-cad-num" aria-hidden="true">
              {String(i + 1).padStart(2, '0')}
            </span>
            <span className="gtx-cad-day">{c.day}</span>
            <h3 className="gtx-cad-event">{c.event}</h3>
            <p className="gtx-cad-note">{c.note}</p>
          </li>
        ))}
      </ol>
    </div>
  </section>
);

export default Cadence;
