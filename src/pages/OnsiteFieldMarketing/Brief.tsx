const POINTS = [
  {
    h: 'What it is',
    d: 'Real people, real places. We staff booths, walk territories, and host events that put your clinic in front of patients in person.',
  },
  {
    h: 'Where it runs',
    d: 'Community fairs, schools, gyms, corporate wellness days, referring practices, and ZIP-level door-drops in your service area.',
  },
  {
    h: 'How we measure',
    d: 'QR-tracked print, tablet intake, and live CRM sync — every drop-in tied back to a booked first visit.',
  },
  {
    h: 'What you get',
    d: 'A trained territory rep, a weekly activation report, and a named ops lead. Not a checklist — a working channel.',
  },
];

const Brief = () => {
  return (
    <section className="sl-section ofm-brief-section" id="brief">
      <div className="container-shell">
        <div className="ofm-brief-grid">
          <div>
            <span className="ofm-brief-eyebrow">In plain English</span>
            <h2 className="ofm-brief-title">
              Onsite field marketing, <em>without the jargon.</em>
            </h2>
            <p className="ofm-brief-lead">
              Onsite field marketing is the work that happens off-screen — the booth at the
              health fair, the referral lunch at the OB-GYN, the QR-coded flyer in the school
              pickup line. It&rsquo;s the channel digital can&rsquo;t replace, run by people
              who actually show up.
            </p>
            <p className="ofm-brief-body">
              We design the territory plan, staff every activation, capture leads on tablets,
              and reconcile every contact to a booked first visit in your dashboard.
              You&rsquo;ll see what each event cost, what it produced, and which ones to
              repeat. No vendor mark-up. No mystery line items.
            </p>

            <div className="ofm-brief-row">
              {POINTS.map((p) => (
                <div key={p.h} className="ofm-brief-pt">
                  <span className="ofm-brief-pt-h">{p.h}</span>
                  <span className="ofm-brief-pt-d">{p.d}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="ofm-brief-art" aria-hidden="true">
            <div className="ofm-brief-art-card tall">
              <span className="ico">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 1 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
              </span>
              <span className="nm">Territory map</span>
              <span className="sub">ZIP-level activation plan</span>
            </div>
            <div className="ofm-brief-art-card">
              <span className="ico">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="2" width="16" height="20" rx="3" /><line x1="9" y1="18" x2="15" y2="18" /></svg>
              </span>
              <span className="nm">Tablet intake</span>
              <span className="sub">HIPAA-aware capture</span>
            </div>
            <div className="ofm-brief-art-card">
              <span className="ico">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18" /><polyline points="7 14 11 10 14 13 21 6" /></svg>
              </span>
              <span className="nm">Live dashboard</span>
              <span className="sub">Lead → booked visit</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brief;
