import { SECTIONS } from './data';

const Specs = () => (
  <section className="cpx-specs">
    <div className="gt-shell">
      <header className="gtx-sec-head">
        <span className="gtx-eyebrow">
          <span className="gtx-eyebrow-dot" aria-hidden="true" />
          Protocol Specifications
        </span>
        <h2 className="gtx-sec-title">
          Six protocols. <em>One commitment.</em>
        </h2>
        <p className="gtx-sec-sub">
          The complete list of compliance specifications referenced in every
          BAA we sign.
        </p>
      </header>

      <div className="cpx-spec-grid">
        {SECTIONS.map((s) => (
          <article key={s.id} id={s.id} className="cpx-spec-card">
            <header className="cpx-spec-head">
              <h3 className="cpx-spec-title">{s.title}</h3>
            </header>
            <p className="cpx-spec-body">{s.body}</p>
            <dl className="cpx-spec-table">
              {s.specs.map((sp) => (
                <div key={sp.k} className="cpx-spec-row">
                  <dt>{sp.k}</dt>
                  <dd>{sp.v}</dd>
                </div>
              ))}
            </dl>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Specs;
