import { WHO_FOR } from './data';

const WhoFor = () => (
  <section className="atx-who" aria-labelledby="atx-who-title">
    <div className="container-shell">
      <header className="adv-head det-head">
        <span className="adv-eyebrow">/ 06 &nbsp; Who this is for</span>
        <h2 id="atx-who-title" className="adv-h2">Three roles the library was written for.</h2>
        <p className="adv-intro">
          The library is one resource, but three readers will pick it up — each
          one looking for a different boundary, a different number, a different proof.
        </p>
      </header>
      <div className="atx-who-grid">
        {WHO_FOR.map((p, i) => (
          <article key={p.label} className="atx-who-card">
            <span className="atx-who-num">/{String(i + 1).padStart(2, '0')}</span>
            <h3 className="atx-who-title">{p.label}</h3>
            <p className="atx-who-desc">{p.desc}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default WhoFor;
