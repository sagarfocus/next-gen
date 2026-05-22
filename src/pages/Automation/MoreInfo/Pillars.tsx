import { PILLARS } from './data';

const Pillars = () => (
  <section className="amih-pillars" aria-labelledby="amih-pillars-title">
    <div className="container-shell">
      <header className="amih-section-head">
        <span className="amih-section-label">/ 01 &nbsp; The principles</span>
        <h2 id="amih-pillars-title" className="amih-h2">
          Three rules every healthcare workflow we ship is built on.
        </h2>
      </header>
      <div className="amih-pillars-grid">
        {PILLARS.map((p) => (
          <article key={p.num} className="amih-pillar">
            <span className="amih-pillar-num">{p.num}</span>
            <h3 className="amih-pillar-title">{p.title}</h3>
            <p className="amih-pillar-desc">{p.desc}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Pillars;
