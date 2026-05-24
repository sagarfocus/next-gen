const POINTS = [
  {
    h: 'What it is',
    d: 'Software that runs the repetitive parts of your clinic — intake, reminders, eligibility, recall — without paying a human to copy-paste between tabs.',
  },
  {
    h: 'Where it pays off',
    d: 'Front desk, billing, marketing, and clinical handoffs. Typical clinic recovers 19-41 hours a week of staff time.',
  },
  {
    h: 'How we build',
    d: 'On a BAA-covered stack: N8N workflow engine, HL7/FHIR connectors, PHI-redacted AI, and audit logs reviewed quarterly.',
  },
  {
    h: 'What you keep',
    d: 'Your data, your EHR, your workflows. Everything is documented so future updates never depend on us.',
  },
];

const Brief = () => {
  return (
    <section className="sl-section mau-brief-section" id="brief">
      <div className="container-shell">
        <div className="mau-brief-grid">
          <div>
            <span className="mau-brief-eyebrow">In plain English</span>
            <h2 className="mau-brief-title">
              Medical automation, <em>without the jargon.</em>
            </h2>
            <p className="mau-brief-lead">
              Medical automation is the work that quietly disappears when you set it up
              right — the appointment reminder that sent itself, the insurance check that
              ran while the patient was still on the booking page, the recall message that
              brought back the patient your team forgot about three months ago.
            </p>
            <p className="mau-brief-body">
              We design, build, and operate the workflows that run between your booking
              system, your EHR, your phone tree, and your marketing tools. Every flow is
              audit-logged, every AI prompt is PHI-redacted, and every dollar of recovered
              staff time is rolled up in a monthly report you can hand the board.
            </p>

            <div className="mau-brief-row">
              {POINTS.map((p) => (
                <div key={p.h} className="mau-brief-pt">
                  <span className="mau-brief-pt-h">{p.h}</span>
                  <span className="mau-brief-pt-d">{p.d}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mau-brief-art" aria-hidden="true">
            <div className="mau-brief-art-card tall">
              <span className="ico">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1A1.7 1.7 0 0 0 9 19.4a1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1A1.7 1.7 0 0 0 4.6 15 1.7 1.7 0 0 0 3 14H3a2 2 0 1 1 0-4h.1A1.7 1.7 0 0 0 4.6 9 1.7 1.7 0 0 0 4.3 7.2l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1A1.7 1.7 0 0 0 9 4.6 1.7 1.7 0 0 0 10 3.1V3a2 2 0 1 1 4 0v.1c0 .7.4 1.3 1 1.5a1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8c.2.6.8 1 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1Z" /></svg>
              </span>
              <span className="nm">Workflow engine</span>
              <span className="sub">N8N · BAA-hosted</span>
            </div>
            <div className="mau-brief-art-card">
              <span className="ico">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7 0l3-3a5 5 0 0 0-7-7l-1 1" /><path d="M14 11a5 5 0 0 0-7 0l-3 3a5 5 0 0 0 7 7l1-1" /></svg>
              </span>
              <span className="nm">EHR connect</span>
              <span className="sub">HL7 · FHIR</span>
            </div>
            <div className="mau-brief-art-card">
              <span className="ico">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round"><path d="m12 3 1.6 3.4L17 8l-3.4 1.6L12 13l-1.6-3.4L7 8l3.4-1.6Z" /></svg>
              </span>
              <span className="nm">AI layer</span>
              <span className="sub">PHI-redacted</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brief;
