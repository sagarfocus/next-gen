import { STACK, STACK_ICON } from './data';

const Stack = () => {
  return (
    <section className="sl-section mau-stack-section" id="stack">
      <div className="container-shell">
        <div className="sl-sec-head">
          <div>
            <div className="sl-sec-num">03 - The stack</div>
            <h2 className="sl-sec-title">
              Four layers. <em>One audit trail.</em>
            </h2>
          </div>
          <div className="sl-sec-meta">
            BAA-covered, owner-managed
            <br />
            documented at handover
          </div>
        </div>

        <div className="mau-stack-grid">
          {STACK.map((s) => {
            const Icon = STACK_ICON[s.key];
            return (
              <article key={s.key} className="mau-stack-card">
                <div className="mau-stack-top">
                  <div className="mau-stack-icon"><Icon /></div>
                  <span className="mau-stack-tag">{s.tag}</span>
                </div>
                <ul className="mau-stack-list">
                  {s.tools.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stack;
