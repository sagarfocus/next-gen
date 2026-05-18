import { Link } from 'react-router-dom';

/* ============================================================
   GROWTH TEAM — Swiss org-directory layout.
   Numbered role grid, hand-drawn org-tree SVG, weekly cadence
   strip. Green accent. White surface throughout.
   ============================================================ */

interface Role {
  num: string;
  title: string;
  pitch: string;
  ships: string[];
  owns: string[];
  hours: string;
}

const ROLES: Role[] = [
  {
    num: '01',
    title: 'Dedicated Ads Manager',
    pitch: 'Owns every paid dollar — Google, Meta, programmatic — across your accounts. Reports to the account director, but the spend is theirs.',
    ships: [
      'Weekly campaign builds, audiences, and creative briefs',
      'Daily bid + budget management with HIPAA-aware tracking',
      'Conversion API setup and pipeline-level attribution',
    ],
    owns: ['CAC', 'ROAS', 'Booked-visit volume'],
    hours: '30+ hrs / week',
  },
  {
    num: '02',
    title: 'SEO & AEO Strategist',
    pitch: 'A senior strategist for organic search and answer-engine optimisation. Healthcare-fluent: knows the difference between YMYL and YMNL ranking.',
    ships: [
      'Technical SEO audits, schema, and Core Web Vitals fixes',
      'Local pack and service-area page architecture',
      'AEO content briefs targeting Perplexity, ChatGPT, Gemini',
    ],
    owns: ['Organic sessions', 'Local pack visibility', 'Answer-engine citations'],
    hours: '20+ hrs / week',
  },
  {
    num: '03',
    title: 'Medical Content Writer',
    pitch: 'A trained healthcare writer — not a generalist with a medical thesaurus. Writes to patient intent, clinician credibility, and compliance.',
    ships: [
      'Service-line landing copy and provider bios',
      'Pillar content, FAQs, and condition deep-dives',
      'Ad creative copy, email cadences, SMS scripts',
    ],
    owns: ['Engagement rate', 'Booking-page conversion', 'Topical authority'],
    hours: '20+ hrs / week',
  },
  {
    num: '04',
    title: 'Social Media Manager',
    pitch: 'Builds the patient-facing voice across Instagram, TikTok, YouTube Shorts, and LinkedIn — with a content calendar your front desk can sustain.',
    ships: [
      'Monthly content calendar across 4 platforms',
      'Shot lists for in-clinic capture days',
      'Community management with response SLAs',
    ],
    owns: ['Follower growth', 'Saves + shares', 'DM-to-booking conversion'],
    hours: '15+ hrs / week',
  },
  {
    num: '05',
    title: 'Web & Conversion Engineer',
    pitch: 'A developer who treats your site as the highest-leverage asset in the funnel. Speed, accessibility, and booking-pathway instrumentation.',
    ships: [
      'Page-speed and accessibility remediation',
      'Booking-funnel drop-off instrumentation',
      'A/B testing infrastructure and analytics',
    ],
    owns: ['Core Web Vitals', 'Booking completion', 'Site reliability'],
    hours: '10+ hrs / week',
  },
  {
    num: '06',
    title: 'Account Director',
    pitch: 'Your single point of accountability. Runs weekly standups, monthly strategy reviews, and the quarterly forecast against your panel goals.',
    ships: [
      'Weekly performance reports and forecasts',
      'Monthly strategy review against panel goals',
      'Quarterly business reviews with stakeholders',
    ],
    owns: ['Total pipeline', 'Forecast accuracy', 'Client retention'],
    hours: '10+ hrs / week',
  },
];

const CADENCE: { day: string; event: string }[] = [
  { day: 'MON', event: 'Sprint planning + KPI review' },
  { day: 'TUE', event: 'Ads + SEO standups' },
  { day: 'WED', event: 'Creative review + content QA' },
  { day: 'THU', event: 'Build day — no meetings' },
  { day: 'FRI', event: 'Weekly performance report ships' },
];

const TreeArt = () => (
  <svg
    viewBox="0 0 720 360"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    className="gt-tree-svg"
  >
    {/* Connectors */}
    <g stroke="#8FBC8F" strokeWidth="1.4" fill="none" strokeLinecap="round">
      {/* Director to lead row */}
      <line x1="360" y1="64" x2="360" y2="104" />
      <line x1="360" y1="104" x2="120" y2="104" />
      <line x1="360" y1="104" x2="600" y2="104" />
      <line x1="120" y1="104" x2="120" y2="148" />
      <line x1="360" y1="104" x2="360" y2="148" />
      <line x1="600" y1="104" x2="600" y2="148" />
      {/* Leads to ICs */}
      <line x1="120" y1="216" x2="120" y2="248" />
      <line x1="120" y1="248" x2="48" y2="248" />
      <line x1="120" y1="248" x2="192" y2="248" />
      <line x1="48" y1="248" x2="48" y2="280" />
      <line x1="192" y1="248" x2="192" y2="280" />

      <line x1="360" y1="216" x2="360" y2="280" />

      <line x1="600" y1="216" x2="600" y2="248" />
      <line x1="600" y1="248" x2="528" y2="248" />
      <line x1="600" y1="248" x2="672" y2="248" />
      <line x1="528" y1="248" x2="528" y2="280" />
      <line x1="672" y1="248" x2="672" y2="280" />
    </g>

    {/* Director */}
    <g>
      <rect x="294" y="20" width="132" height="44" rx="4" fill="#fff" stroke="#2D3748" strokeWidth="1.4" />
      <text x="360" y="38" fontFamily="Plus Jakarta Sans, sans-serif" fontSize="9" fontWeight="800" letterSpacing="2" fill="#718096" textAnchor="middle">06 / DIRECTOR</text>
      <text x="360" y="56" fontFamily="Plus Jakarta Sans, sans-serif" fontSize="12" fontWeight="700" fill="#1A2438" textAnchor="middle">Account Director</text>
    </g>

    {/* Three leads */}
    {[
      { x: 120, num: '01', name: 'Ads Manager' },
      { x: 360, num: '02', name: 'SEO Strategist' },
      { x: 600, num: '03', name: 'Medical Writer' },
    ].map((n) => (
      <g key={n.num}>
        <rect x={n.x - 66} y={148} width="132" height="68" rx="4" fill="#fff" stroke="#8FBC8F" strokeWidth="1.6" />
        <rect x={n.x - 66} y={148} width="132" height="6" fill="#8FBC8F" />
        <text x={n.x} y={176} fontFamily="Plus Jakarta Sans, sans-serif" fontSize="9" fontWeight="800" letterSpacing="2" fill="#6FA86F" textAnchor="middle">{n.num} / LEAD</text>
        <text x={n.x} y={196} fontFamily="Plus Jakarta Sans, sans-serif" fontSize="12" fontWeight="700" fill="#1A2438" textAnchor="middle">{n.name}</text>
      </g>
    ))}

    {/* ICs */}
    {[
      { x: 48, name: 'Paid IC' },
      { x: 192, name: 'Creative IC' },
      { x: 360, name: 'Social Mgr' },
      { x: 528, name: 'Web Eng' },
      { x: 672, name: 'Content IC' },
    ].map((n) => (
      <g key={n.name}>
        <rect x={n.x - 42} y={280} width="84" height="40" rx="4" fill="#F4F8F4" stroke="#C3DDC3" strokeWidth="1" />
        <text x={n.x} y={304} fontFamily="Plus Jakarta Sans, sans-serif" fontSize="11" fontWeight="600" fill="#1A2438" textAnchor="middle">{n.name}</text>
      </g>
    ))}

    {/* Labels */}
    <text x="24" y="14" fontFamily="ui-monospace, Menlo" fontSize="9" letterSpacing="2" fill="#A0AEC0">FIG. A · ORG TREE</text>
    <text x="24" y="350" fontFamily="ui-monospace, Menlo" fontSize="9" letterSpacing="2" fill="#A0AEC0">N = 6 SENIOR · 5 IC</text>
  </svg>
);

const GrowthTeam = () => {
  const SCHEMA = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'The Growth Team — Healthcare Marketing Department',
    serviceType: 'Embedded Marketing Team',
    audience: 'Multi-location healthcare practices, clinics, medspas',
  };

  return (
    <main className="gt-page">
      {/* Hero */}
      <section className="gt-hero">
        <div className="gt-shell">
          <nav className="gt-crumb" aria-label="Breadcrumb">
            <Link to="/about">About</Link>
            <span aria-hidden="true">·</span>
            <span>Infrastructure</span>
            <span aria-hidden="true">·</span>
            <span className="cur">Growth Team</span>
          </nav>

          <div className="gt-hero-grid">
            <div className="gt-hero-meta">
              <span className="gt-meta-num">01</span>
              <span className="gt-meta-label">The Growth Team</span>
            </div>
            <h1 className="gt-h1">
              A senior healthcare<br />
              marketing department,<br />
              <em>embedded into your clinic.</em>
            </h1>
            <p className="gt-lede">
              Not a freelancer. Not a generalist agency. Six dedicated specialists
              — each healthcare-fluent, each on-staff for the engagement — running
              your patient acquisition the same way an in-house team would.
            </p>
          </div>

          <ul className="gt-hero-stats">
            <li><strong>6</strong><span>senior specialists</span></li>
            <li><strong>105+</strong><span>weekly hours dedicated</span></li>
            <li><strong>3.1×</strong><span>median first-year ROAS</span></li>
            <li><strong>0</strong><span>handoffs to junior staff</span></li>
          </ul>
        </div>
      </section>

      {/* Org tree */}
      <section className="gt-tree">
        <div className="gt-shell">
          <div className="gt-section-head">
            <span className="gt-section-num">A</span>
            <h2 className="gt-section-h2">The org structure you inherit.</h2>
            <p className="gt-section-sub">Flat, accountable, and senior-led. The director runs cadence; specialists own the work.</p>
          </div>
          <div className="gt-tree-frame">
            <TreeArt />
          </div>
        </div>
      </section>

      {/* Role directory */}
      <section className="gt-roles">
        <div className="gt-shell">
          <div className="gt-section-head">
            <span className="gt-section-num">B</span>
            <h2 className="gt-section-h2">Role directory.</h2>
            <p className="gt-section-sub">Six functions, defined by what each person ships and what each person owns.</p>
          </div>

          <div className="gt-roles-grid">
            {ROLES.map((r) => (
              <article key={r.num} className="gt-role">
                <div className="gt-role-top">
                  <span className="gt-role-num">{r.num}</span>
                  <span className="gt-role-hours">{r.hours}</span>
                </div>
                <h3 className="gt-role-title">{r.title}</h3>
                <p className="gt-role-pitch">{r.pitch}</p>

                <div className="gt-role-block">
                  <span className="gt-role-block-label">Ships</span>
                  <ul>
                    {r.ships.map((s) => (
                      <li key={s}>{s}</li>
                    ))}
                  </ul>
                </div>

                <div className="gt-role-owns">
                  <span className="gt-role-block-label">Owns</span>
                  <div className="gt-role-tags">
                    {r.owns.map((o) => (
                      <span key={o}>{o}</span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Cadence */}
      <section className="gt-cadence">
        <div className="gt-shell">
          <div className="gt-section-head">
            <span className="gt-section-num">C</span>
            <h2 className="gt-section-h2">The weekly cadence.</h2>
            <p className="gt-section-sub">Predictable rhythm. Your team always knows what's shipping this week.</p>
          </div>
          <ol className="gt-cadence-strip">
            {CADENCE.map((c, i) => (
              <li key={c.day} className="gt-cadence-cell">
                <span className="gt-cadence-day">{c.day}</span>
                <span className="gt-cadence-bar" style={{ height: `${48 + (i % 3) * 20}px` }} />
                <span className="gt-cadence-event">{c.event}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* CTA */}
      <section className="gt-cta">
        <div className="gt-shell">
          <div className="gt-cta-row">
            <div>
              <span className="gt-cta-tag">Next</span>
              <h2 className="gt-cta-h">Want to meet the team that would run your account?</h2>
              <p>A 30-minute call. We introduce the senior specialists who would be assigned to your practice — by name, by hours, by responsibility.</p>
            </div>
            <Link to="/contact" className="gt-cta-btn">
              Schedule the introduction
              <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />
    </main>
  );
};

export default GrowthTeam;
