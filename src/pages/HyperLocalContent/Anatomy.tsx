import { PinIcon } from './icons';
import { ANATOMY } from './data';

const Anatomy = () => (
  <section className="hlc-anatomy">
    <div className="hlc-shell">
      <header className="hlc-sec-head">
        <span className="hlc-eyebrow">
          <PinIcon size={12} />
          Anatomy
        </span>
        <h2 className="hlc-sec-title">
          Three blocks. <em>None copied from anywhere else on the site.</em>
        </h2>
        <p className="hlc-sec-sub">
          Every hyper-local page is built around the same three blocks -
          tuned per catchment, never templated.
        </p>
      </header>

      <ol className="hlc-anatomy-grid">
        {ANATOMY.map((a, i) => (
          <li key={a.num} className="hlc-anatomy-step">
            <div className="hlc-anatomy-step-head">
              <span className="hlc-anatomy-num">{a.num}</span>
              {i < ANATOMY.length - 1 && (
                <span className="hlc-anatomy-line" aria-hidden="true" />
              )}
            </div>
            <span className="hlc-anatomy-marker">{a.marker}</span>
            <h3 className="hlc-anatomy-title">{a.k}</h3>
            <p className="hlc-anatomy-body">{a.d}</p>
          </li>
        ))}
      </ol>
    </div>
  </section>
);

export default Anatomy;
