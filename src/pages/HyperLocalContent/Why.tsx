import { PinIcon } from './icons';
import { WHY } from './data';

const Why = () => (
  <section className="hlc-why">
    <div className="hlc-shell">
      <header className="hlc-sec-head">
        <span className="hlc-eyebrow">
          <PinIcon size={12} />
          The Case
        </span>
        <h2 className="hlc-sec-title">
          Why <em>geographic pages</em> matter.
        </h2>
        <p className="hlc-sec-sub">
          The case for treating every catchment as its own market - and writing for it that way.
        </p>
      </header>

      <div className="hlc-why-grid">
        {WHY.map((w) => (
          <article key={w.num} className="hlc-why-card">
            <div className="hlc-why-card-head">
              <span className="hlc-why-num">{w.num}</span>
              <span className="hlc-why-hint">{w.hint}</span>
            </div>
            <h3 className="hlc-why-title">{w.title}</h3>
            <p className="hlc-why-body">{w.body}</p>
            <span className="hlc-why-line" aria-hidden="true" />
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Why;
