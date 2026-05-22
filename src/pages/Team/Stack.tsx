import type { ReactNode } from 'react';

interface Tool {
  name: string;
  hint: string;
}

interface Cluster {
  num: string;
  label: string;
  title: string;
  blurb: string;
  tools: Tool[];
  icon: ReactNode;
}

const CLUSTERS: Cluster[] = [
  {
    num: '01',
    label: 'Discovery',
    title: 'Audit & data.',
    blurb: 'How we read the funnel before we touch it.',
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.6}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <circle cx="11" cy="11" r="7" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    ),
    tools: [
      { name: 'Google Analytics 4', hint: 'Funnel + revenue attribution' },
      { name: 'Search Console', hint: 'Query / index coverage' },
      { name: 'Ahrefs', hint: 'Keyword + backlink intel' },
      { name: 'Semrush', hint: 'Competitor delta' },
      { name: 'Hotjar', hint: 'Session replay + heatmaps' },
      { name: 'Looker Studio', hint: 'Stitched dashboards' },
    ],
  },
  {
    num: '02',
    label: 'Acquisition',
    title: 'Paid media & SEO.',
    blurb: 'Channels that move bookings the same week, and the ones that compound.',
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.6}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M3 12h4l3-8 4 16 3-8h4" />
      </svg>
    ),
    tools: [
      { name: 'Google Ads', hint: 'Search + Performance Max' },
      { name: 'Meta Ads Manager', hint: 'Facebook + Instagram' },
      { name: 'LinkedIn Campaign Manager', hint: 'Specialist B2H' },
      { name: 'Google Business Profile', hint: 'Local Pack + reviews' },
      { name: 'Surfer SEO', hint: 'Content scoring' },
      { name: 'Schema.org', hint: 'Medical / FAQ markup' },
    ],
  },
  {
    num: '03',
    label: 'Conversion',
    title: 'Site & creative.',
    blurb: 'Where clicks turn into booked, attended visits.',
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.6}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <rect x="3" y="3" width="18" height="18" rx="2.5" />
        <path d="M3 9h18M9 21V9" />
      </svg>
    ),
    tools: [
      { name: 'Next.js', hint: 'Production sites we ship' },
      { name: 'Webflow', hint: 'When the team needs to edit it' },
      { name: 'Figma', hint: 'Design + prototype' },
      { name: 'Framer Motion', hint: 'Conversion micro-animation' },
      { name: 'Adobe CC', hint: 'Print + photo finishing' },
      { name: 'Cloudflare', hint: 'CDN + WAF + Pages' },
    ],
  },
  {
    num: '04',
    label: 'Tracking',
    title: 'HIPAA-aware data.',
    blurb: 'Server-side measurement that survives the Meta + FTC review.',
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.6}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    tools: [
      { name: 'GTM Server-Side', hint: 'sGTM on Cloudflare' },
      { name: 'Stape.io', hint: 'Hosted server containers' },
      { name: 'CallRail', hint: 'BAA-covered call tracking' },
      { name: 'Segment', hint: 'Identity stitching' },
      { name: 'Consent Mode v2', hint: 'EEA + state-level rules' },
      { name: 'BAA Vendor Library', hint: 'Internal compliance index' },
    ],
  },
  {
    num: '05',
    label: 'Automation',
    title: 'Workflows & AI.',
    blurb: 'The systems that let the front desk run lighter.',
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.6}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.6 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.6a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82c.18.43.61.73 1.08.78H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
      </svg>
    ),
    tools: [
      { name: 'Make.com', hint: 'Low-code orchestration' },
      { name: 'n8n', hint: 'Self-hosted + HIPAA' },
      { name: 'Zapier', hint: 'BAA tier for clinical data' },
      { name: 'OpenAI API', hint: 'Triage + content drafts' },
      { name: 'Twilio', hint: 'SMS + voice + IVR' },
      { name: 'HubSpot', hint: 'Marketing + sales hub' },
    ],
  },
  {
    num: '06',
    label: 'Clinical',
    title: 'EHR & ops.',
    blurb: 'We integrate into the systems the practice already runs on.',
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.6}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <rect x="4" y="3" width="16" height="18" rx="2" />
        <line x1="12" y1="8" x2="12" y2="16" />
        <line x1="8" y1="12" x2="16" y2="12" />
      </svg>
    ),
    tools: [
      { name: 'Athenahealth', hint: 'API + reporting' },
      { name: 'eClinicalWorks', hint: 'Booking sync' },
      { name: 'Epic', hint: 'FHIR integrations' },
      { name: 'OpenDental', hint: 'Dental DSO networks' },
      { name: 'Tebra (Kareo)', hint: 'Small + multi-site' },
      { name: 'Phreesia', hint: 'Patient intake' },
    ],
  },
];

const Stack = () => {
  return (
    <section className="tm-section tm-stack">
      <div className="container-shell">
        <div className="tm-marker">
          <span className="tm-marker-num">05</span>
          <span>Tools &amp; Stack</span>
          <span className="tm-marker-line" />
          <span className="tm-marker-meta">What we run on</span>
        </div>

        <header className="tm-st-head">
          <h2 className="tm-st-h2">
            The <em>actual stack</em> behind every shipped retainer.
          </h2>
          <p className="tm-st-lede">
            Thirty-plus tools, grouped by the part of the funnel they own. No screenshots of vendor
            logos for credibility theatre - this is what the team logs into on Monday morning.
          </p>
        </header>

        <div className="tm-st-grid">
          {CLUSTERS.map((c) => (
            <article key={c.num} className="tm-st-card">
              <div className="tm-st-card-head">
                <span className="tm-st-icon" aria-hidden="true">
                  {c.icon}
                </span>
                <div className="tm-st-card-meta">
                  <span className="tm-st-num">{c.num}</span>
                  <span className="tm-st-label">{c.label}</span>
                </div>
              </div>
              <h3 className="tm-st-title">{c.title}</h3>
              <p className="tm-st-blurb">{c.blurb}</p>
              <ul className="tm-st-tools">
                {c.tools.map((t) => (
                  <li key={t.name} className="tm-st-tool">
                    <span className="tm-st-tool-name">{t.name}</span>
                    <span className="tm-st-tool-hint">{t.hint}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stack;
