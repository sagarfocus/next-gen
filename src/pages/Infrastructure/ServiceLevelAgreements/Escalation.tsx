import { ESCALATION } from './data';

const Escalation = () => (
  <section className="slax-escalation">
    <div className="gt-shell">
      <header className="gtx-sec-head">
        <span className="gtx-eyebrow">
          <span className="gtx-eyebrow-dot" aria-hidden="true" />
          Escalation Path
        </span>
        <h2 className="gtx-sec-title">
          From signal to <em>resolution, in four steps.</em>
        </h2>
        <p className="gtx-sec-sub">
          Every incident follows the same documented path. You always know which specialist owns the
          next move.
        </p>
      </header>

      <ol className="slax-flow">
        {ESCALATION.map((step, i) => (
          <li key={step.num} className="slax-flow-step">
            <div className="slax-flow-marker">
              <span className="slax-flow-num">{step.num}</span>
              {i < ESCALATION.length - 1 && (
                <span className="slax-flow-connector" aria-hidden="true" />
              )}
            </div>
            <div className="slax-flow-body">
              <span className="slax-flow-label">{step.label}</span>
              <h3 className="slax-flow-title">{step.title}</h3>
              <p className="slax-flow-text">{step.body}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  </section>
);

export default Escalation;
