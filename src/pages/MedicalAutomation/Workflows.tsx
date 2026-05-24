import { WORKFLOWS, WORKFLOW_ICON } from './data';

const DESCS: Record<string, string> = {
  intake:
    'Patient submits the intake form on your website; the chart lands in your EHR provider-ready before they have closed the tab. No double-keying, no fax.',
  insurance:
    'Eligibility and copay verified the moment a slot is booked — surfaced to the patient and the front desk before the visit, not at check-in.',
  reminder:
    'A three-touch SMS + email ladder timed to the patient&rsquo;s history. Confirms, reschedules, or kicks a no-show flag — without staff in the loop.',
  triage:
    'After-hours and overflow messages are read, scored, and routed to the right place — booked, escalated to on-call, or queued for morning.',
  review:
    'Visit completes, sentiment-routed ask goes out. Happy patients land on Google or Yelp; unhappy ones land in your inbox before they land on the internet.',
  recall:
    'EHR recall dates drive a personalised reactivation cadence. The patients you forgot about come back without anyone remembering to remember.',
};

const Workflows = () => {
  return (
    <section className="sl-section mau-wf-section" id="workflows">
      <div className="container-shell">
        <div className="sl-sec-head">
          <div>
            <div className="sl-sec-num">01 - What we automate</div>
            <h2 className="sl-sec-title">
              Six workflows. <em>Always running.</em>
            </h2>
          </div>
          <div className="sl-sec-meta">
            One trigger
            <br />
            one outcome each
          </div>
        </div>

        <div className="mau-wf-grid">
          {WORKFLOWS.map((w) => {
            const Icon = WORKFLOW_ICON[w.key];
            return (
              <article key={w.key} className="mau-wf-card">
                <div className="mau-wf-top">
                  <div className="mau-wf-icon"><Icon /></div>
                  <span className="mau-wf-num">{w.n}</span>
                </div>
                <h3 className="mau-wf-name">{w.name}</h3>
                <span className="mau-wf-trigger">Trigger · {w.trigger}</span>
                <p
                  className="mau-wf-desc"
                  dangerouslySetInnerHTML={{ __html: DESCS[w.key] }}
                />
                <div className="mau-wf-foot">
                  <span className="mau-wf-out">→ {w.outcome}</span>
                  <span className="mau-wf-meta">{w.meta}</span>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Workflows;
