import { PLACEHOLDER_IMAGE as patientImg } from '@/lib/placeholderImage';

/* -----------------------------------------------------------
   HIPAA + data-handling promise.
   Anala (and most generic "free audit" pages) skip this -
   for healthcare practices it is the #1 objection. Surfacing
   it improves trust + ranks on "HIPAA audit", "healthcare
   marketing audit HIPAA", "healthcare data review" long-tails.
   ----------------------------------------------------------- */

const PROMISES = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6}>
        <rect x="4" y="10" width="16" height="10" rx="2" />
        <path d="M8 10V7a4 4 0 0 1 8 0v3" />
      </svg>
    ),
    title: 'No PHI ever touches the audit.',
    body: 'We review only public-facing surfaces — website, GBP, ad accounts (with read-only access), public reviews. We never request, receive or store protected health information.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6}>
        <path d="M12 2l8 4v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6z" />
        <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'BAA available before we touch ads.',
    body: 'If a deeper review needs access to your CRM, intake software, or analytics with patient identifiers, we sign a Business Associate Agreement first. Default audit needs none.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6}>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v6l3 2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Your data is deleted on request.',
    body: 'Audit folder, screenshots, screen recordings — all purged from our drives within 30 days of delivery on request, with written confirmation. Default retention is 90 days.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6}>
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
      </svg>
    ),
    title: 'Recommendations are HIPAA-aware by default.',
    body: 'No advice to bolt the Meta Pixel onto your booking confirmation. No retargeting suggestions that ride on diagnosis codes. Every play in the 90-day plan ships compliance-first.',
  },
];

const Hipaa = () => (
  <section className="fga-hipaa" aria-labelledby="fga-hipaa-title">
    <div className="container-shell">
      <div className="fga-hipaa-grid">
        <div className="fga-hipaa-visual">
          <img
            src={patientImg}
            alt="HIPAA-compliant patient data handling during a healthcare marketing audit"
            loading="lazy"
          />
          <div className="fga-hipaa-badge">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
              <path d="M12 2l8 4v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6z" />
              <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <div>
              <strong>HIPAA-aware</strong>
              <em>Audit + advice</em>
            </div>
          </div>
        </div>

        <div className="fga-hipaa-body">
          <span className="fga-section-tag">Built for healthcare</span>
          <h2 id="fga-hipaa-title" className="fga-section-h2">
            HIPAA isn&rsquo;t a footnote. It&rsquo;s the floor.
          </h2>
          <p className="fga-hipaa-lede">
            Generic agency audits routinely recommend tactics that quietly create HIPAA violations
            &mdash; pixel bolt-ons, off-platform retargeting, intake-form integrations that leak PHI
            to third parties. Ours never will.
          </p>

          <ul className="fga-hipaa-list">
            {PROMISES.map((p) => (
              <li key={p.title}>
                <span className="fga-hipaa-icon" aria-hidden="true">
                  {p.icon}
                </span>
                <div>
                  <h3>{p.title}</h3>
                  <p>{p.body}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default Hipaa;
