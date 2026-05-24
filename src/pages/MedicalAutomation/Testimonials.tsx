interface Quote {
  q: string;
  name: string;
  role: string;
  initials: string;
}

const QUOTES: Quote[] = [
  {
    q: 'The intake-to-EHR flow alone saved us a full FTE inside the first quarter. Charts are provider-ready before the patient sits down. Our front desk has been able to actually answer phones again.',
    name: 'Dr. Hannah Levy',
    role: 'Owner · Dermatology + Aesthetic Group',
    initials: 'HL',
  },
  {
    q: 'We were sceptical about AI in healthcare for all the right reasons. TheNextGen showed us PHI-redacted prompts, human-in-loop on every decision, and audit logs my compliance officer could actually read. Two weeks later the after-hours triage was live.',
    name: 'Marcus Patel',
    role: 'COO · Multi-Site Urgent Care Network',
    initials: 'MP',
  },
  {
    q: 'The no-show rate dropped 51% in the first month of the reminder ladder. We&rsquo;d been quoted twice as much by an enterprise vendor for a worse build. This is what healthcare automation should feel like.',
    name: 'Dr. Anjali Rao',
    role: 'Founder · Specialty Care Practice',
    initials: 'AR',
  },
];

const StarIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
);

const Testimonials = () => {
  return (
    <section className="sl-section mau-tx-section" id="testimonials">
      <div className="container-shell">
        <div className="sl-sec-head">
          <div>
            <div className="sl-sec-num">07 - In their words</div>
            <h2 className="sl-sec-title">
              Practice owners running <em>live workflows with us.</em>
            </h2>
          </div>
          <div className="sl-sec-meta">
            40+ active accounts
            <br />
            healthcare-only
          </div>
        </div>

        <div className="mau-tx-grid">
          {QUOTES.map((t) => (
            <article key={t.name} className="mau-tx-card">
              <div className="mau-tx-stars" aria-label="5 out of 5 stars">
                <StarIcon /><StarIcon /><StarIcon /><StarIcon /><StarIcon />
              </div>
              <p
                className="mau-tx-quote"
                dangerouslySetInnerHTML={{ __html: `&ldquo;${t.q}&rdquo;` }}
              />
              <div className="mau-tx-meta">
                <div className="mau-tx-avatar">{t.initials}</div>
                <div className="mau-tx-handle">
                  <span className="mau-tx-name">{t.name}</span>
                  <span className="mau-tx-role">{t.role}</span>
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
