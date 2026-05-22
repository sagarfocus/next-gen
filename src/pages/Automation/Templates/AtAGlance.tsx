import { STATS } from './data';

const AtAGlance = () => (
  <section className="atx-glance" aria-labelledby="atx-glance-title">
    <div className="container-shell">
      <header className="adv-head det-head">
        <span className="adv-eyebrow">/ 01 &nbsp; At a glance</span>
        <h2 id="atx-glance-title" className="adv-h2">
          The library, in three numbers.
        </h2>
        <p className="adv-intro">
          What the library is worth — measured in setup hours, payback days, and front-desk time
          recovered every week.
        </p>
      </header>
      <div className="atx-glance-grid">
        {STATS.map((s) => (
          <article key={s.id} className={`atx-stat tone-${s.tone}`}>
            <span className="atx-stat-id">/{s.id}</span>
            <span className="atx-stat-label">{s.label}</span>
            <span className="atx-stat-value">{s.value}</span>
            <p className="atx-stat-desc">{s.desc}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default AtAGlance;
