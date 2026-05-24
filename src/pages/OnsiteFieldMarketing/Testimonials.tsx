interface Quote {
  q: string;
  name: string;
  role: string;
  initials: string;
}

const QUOTES: Quote[] = [
  {
    q: 'We had three vendors running events before — a print shop, an event-staffing temp, and a CRM consultant. TheNextGen folded it into one program. The cost-per-consult dropped 31% in the first quarter and our front desk finally knew who was walking in.',
    name: 'Dr. Andrea Klein',
    role: 'Owner · Urgent Care Group, Dallas',
    initials: 'AK',
  },
  {
    q: 'The referral visits are the part I underestimated. They built a quarterly route, the named rep actually knows our docs, and the OB-GYN referrals now show up in the dashboard with first-visit revenue attached.',
    name: 'Marcus Patel',
    role: 'Director of Growth · Multi-Site Clinic Network',
    initials: 'MP',
  },
  {
    q: 'Booths used to be a black hole — we&rsquo;d ship a banner and never know what came back. Now every lead is in the CRM the same day with a QR-coded source, and the weekly Loom recap tells me exactly which sponsorships to renew.',
    name: 'Dr. Priya Shah',
    role: 'Founder · Aesthetic Clinic, Austin',
    initials: 'PS',
  },
];

const StarIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
);

const Testimonials = () => {
  return (
    <section className="sl-section ofm-tx-section" id="testimonials">
      <div className="container-shell">
        <div className="sl-sec-head">
          <div>
            <div className="sl-sec-num">07 - In their words</div>
            <h2 className="sl-sec-title">
              Practice owners who run <em>real territory with us.</em>
            </h2>
          </div>
          <div className="sl-sec-meta">
            40+ active accounts
            <br />
            healthcare-only
          </div>
        </div>

        <div className="ofm-tx-grid">
          {QUOTES.map((t) => (
            <article key={t.name} className="ofm-tx-card">
              <div className="ofm-tx-stars" aria-label="5 out of 5 stars">
                <StarIcon /><StarIcon /><StarIcon /><StarIcon /><StarIcon />
              </div>
              <p
                className="ofm-tx-quote"
                dangerouslySetInnerHTML={{ __html: `&ldquo;${t.q}&rdquo;` }}
              />
              <div className="ofm-tx-meta">
                <div className="ofm-tx-avatar">{t.initials}</div>
                <div className="ofm-tx-handle">
                  <span className="ofm-tx-name">{t.name}</span>
                  <span className="ofm-tx-role">{t.role}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
