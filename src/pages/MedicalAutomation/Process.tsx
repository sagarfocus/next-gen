import { PROCESS, PROCESS_ICON } from './data';

const Process = () => {
  return (
    <section className="sl-section mau-proc-section" id="process">
      <div className="container-shell">
        <div className="sl-sec-head">
          <div>
            <div className="sl-sec-num">04 - How we build</div>
            <h2 className="sl-sec-title">
              Four phases. <em>First workflow live in two weeks.</em>
            </h2>
          </div>
          <div className="sl-sec-meta">
            Named automation lead
            <br />
            from day one
          </div>
        </div>

        <div className="mau-proc-rail">
          <div className="mau-proc-line" aria-hidden="true" />
          <div className="mau-proc-grid">
            {PROCESS.map((p) => {
              const Icon = PROCESS_ICON[p.key];
              return (
                <article key={p.n} className="mau-proc-card">
                  <div className="mau-proc-dot"><Icon /></div>
                  <div className="mau-proc-time">{p.week}</div>
                  <h3 className="mau-proc-name">{p.k}</h3>
                  <p className="mau-proc-desc">{p.d}</p>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
