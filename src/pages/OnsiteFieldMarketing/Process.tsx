import { PROCESS } from './data';

const Process = () => {
  return (
    <section className="sl-section ofm-proc-section" id="process">
      <div className="container-shell">
        <div className="sl-sec-head">
          <div>
            <div className="sl-sec-num">03 - How we run the program</div>
            <h2 className="sl-sec-title">
              Four phases. <em>First booth live in 11 days.</em>
            </h2>
          </div>
          <div className="sl-sec-meta">
            Named field lead
            <br />
            from day one
          </div>
        </div>

        <div className="ofm-proc-rail">
          <div className="ofm-proc-line" aria-hidden="true" />
          <div className="ofm-proc-grid">
            {PROCESS.map((p) => (
              <article key={p.n} className="ofm-proc-card">
                <div className="ofm-proc-dot">{p.n}</div>
                <div className="ofm-proc-time">{p.t}</div>
                <h3 className="ofm-proc-name">{p.k}</h3>
                <p className="ofm-proc-desc">{p.d}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
