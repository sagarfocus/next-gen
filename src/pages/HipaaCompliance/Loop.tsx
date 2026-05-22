import { STEPS } from './data';

const Loop = () => (
  <section className="hcp-loop">
    <div className="gt-shell">
      <header className="gtx-sec-head">
        <span className="gtx-eyebrow">
          <span className="gtx-eyebrow-dot" aria-hidden="true" />
          The Compliance Loop
        </span>
        <h2 className="gtx-sec-title">
          Four steps. <em>Re-run annually.</em>
        </h2>
        <p className="gtx-sec-sub">
          Same working method every year, with a remediation register
          that closes findings inside 60 days.
        </p>
      </header>

      <ol className="hcp-loop-grid">
        {STEPS.map((step, i) => (
          <li key={step.num} className="hcp-loop-step">
            <div className="hcp-loop-marker">
              <span className="hcp-loop-num">{step.num}</span>
              {i < STEPS.length - 1 && (
                <span className="hcp-loop-connector" aria-hidden="true" />
              )}
            </div>
            <div className="hcp-loop-body">
              <span className="hcp-loop-label">{step.label}</span>
              <h3 className="hcp-loop-title">{step.title}</h3>
              <p className="hcp-loop-text">{step.body}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  </section>
);

export default Loop;
