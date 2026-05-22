import { HOW_STEPS } from './data';

const HowItWorks = () => (
  <section className="atx-how" aria-labelledby="atx-how-title">
    <div className="container-shell">
      <header className="adv-head det-head">
        <span className="adv-eyebrow">/ 04 &nbsp; How it works</span>
        <h2 id="atx-how-title" className="adv-h2">Four moves from library to live workflow.</h2>
        <p className="adv-intro">
          The same deployment cadence we use inside paying engagements — minus
          the retainer. The library does the hard part; the four moves do the rest.
        </p>
      </header>
      <ol className="atx-steps">
        {HOW_STEPS.map((s) => (
          <li key={s.num} className="atx-step">
            <span className="atx-step-num">{s.num}</span>
            <div className="atx-step-body">
              <h3 className="atx-step-title">{s.title}</h3>
              <p className="atx-step-desc">{s.desc}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  </section>
);

export default HowItWorks;
