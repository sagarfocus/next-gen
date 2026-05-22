import { SAFEGUARDS } from './data';

const Safeguards = () => (
  <section className="cpx-safeguards">
    <div className="gt-shell">
      <header className="gtx-sec-head">
        <span className="gtx-eyebrow">
          <span className="gtx-eyebrow-dot" aria-hidden="true" />
          Safeguard Hierarchy
        </span>
        <h2 className="gtx-sec-title">
          Three categories of controls, <em>mapped to the rule.</em>
        </h2>
        <p className="gtx-sec-sub">
          Every protocol maps to one of the HIPAA Security Rule's three
          safeguard categories under 45 CFR § 164 Subpart C.
        </p>
      </header>

      <div className="cpx-safeguard-grid">
        {SAFEGUARDS.map((s, i) => (
          <article key={s.tier} className={`cpx-safeguard-card tone-${s.tone}`}>
            <span className="cpx-safeguard-num" aria-hidden="true">
              /{String(i + 1).padStart(2, '0')}
            </span>
            <span className="cpx-safeguard-icon" aria-hidden="true">{s.icon}</span>
            <h3 className="cpx-safeguard-title">{s.tier}</h3>
            <p className="cpx-safeguard-desc">{s.description}</p>
            <ul className="cpx-safeguard-list">
              {s.items.map((item) => (
                <li key={item}>
                  <span className="cpx-safeguard-bullet" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Safeguards;
