import { Link } from 'react-router-dom';

import heroImg from '../../assets/patientidentities.png';
import ctaImg from '../../assets/builtforclinic.png';

/* ============================================================
   COMPLIANCE PROTOCOL - Image-driven swiss redesign.
   Hero with security image, 3 safeguard cards, 6 spec cards
   in a 3x2 grid, image CTA. Brand colors throughout.
   ============================================================ */

interface Section {
  id: string;
  ref: string;
  title: string;
  body: string;
  specs: { k: string; v: string }[];
}

const SECTIONS: Section[] = [
  {
    id: 's1',
    ref: '§ 1.0',
    title: 'BAA Readiness & Execution',
    body: 'Business Associate Agreement templated, redlined, and counter-signed within five business days. Vendor and sub-processor BAAs are maintained on a rolling 12-month review.',
    specs: [
      { k: 'Turnaround', v: '≤ 5 business days' },
      { k: 'Review cadence', v: 'Every 12 months' },
      { k: 'Sub-processors', v: 'Tracked in vendor registry' },
      { k: 'Storage', v: 'Versioned in document store' },
    ],
  },
  {
    id: 's2',
    ref: '§ 2.0',
    title: 'HIPAA Data Routing',
    body: 'PHI is segmented at the application boundary. No PHI in marketing analytics, in ad platforms, or in conversion APIs unless routed through BAA-covered services with explicit data-minimisation.',
    specs: [
      { k: 'PHI boundary', v: 'Enforced via tagging' },
      { k: 'Analytics', v: 'PHI-redacted at ingest' },
      { k: 'Ad platforms', v: 'Server-side, hashed identifiers' },
      { k: 'Conversion API', v: 'BAA-covered pipeline only' },
    ],
  },
  {
    id: 's3',
    ref: '§ 3.0',
    title: 'Encrypted Patient Intake',
    body: 'Patient intake forms, file uploads, and chat are encrypted in transit and at rest. Session keys rotate, signed URLs expire, and consent receipts are stored against an immutable audit log.',
    specs: [
      { k: 'In transit', v: 'TLS 1.3' },
      { k: 'At rest', v: 'AES-256' },
      { k: 'Key rotation', v: 'Quarterly + on event' },
      { k: 'Consent log', v: 'Append-only, signed' },
    ],
  },
  {
    id: 's4',
    ref: '§ 4.0',
    title: 'Secure Cloud Architecture',
    body: 'Infrastructure runs on HIPAA-eligible cloud providers with private networking, IAM least-privilege, and infrastructure-as-code reviewed under SOC 2 controls.',
    specs: [
      { k: 'Provider', v: 'AWS / GCP HIPAA-eligible' },
      { k: 'Networking', v: 'Private subnets, VPC-isolated' },
      { k: 'IAM', v: 'Least-privilege, MFA-required' },
      { k: 'IaC review', v: 'SOC 2-aligned' },
    ],
  },
  {
    id: 's5',
    ref: '§ 5.0',
    title: 'Audit Trails & Access Controls',
    body: 'Every PHI touch is logged with actor, action, asset, and timestamp. Access reviews run monthly. Departed staff lose access within four business hours.',
    specs: [
      { k: 'Log retention', v: '6 years (HIPAA)' },
      { k: 'Access review', v: 'Monthly' },
      { k: 'Off-boarding SLA', v: '≤ 4 business hours' },
      { k: 'Alerting', v: 'Anomalies → security on-call' },
    ],
  },
  {
    id: 's6',
    ref: '§ 6.0',
    title: 'Incident Response & Breach Protocol',
    body: 'A documented incident response plan with defined severity levels, communications templates, and the breach-notification timeline required under HIPAA and applicable state law.',
    specs: [
      { k: 'Severity tiers', v: '4 (SEV-0 to SEV-3)' },
      { k: 'Initial response', v: '≤ 30 minutes (SEV-0)' },
      { k: 'Customer notice', v: '≤ 60 days (HIPAA)' },
      { k: 'Post-mortem', v: 'Written, shared, indexed' },
    ],
  },
];

interface Safeguard {
  tier: string;
  description: string;
  items: string[];
  tone: 'sage' | 'periwinkle' | 'tan';
  icon: React.ReactNode;
}

const SAFEGUARDS: Safeguard[] = [
  {
    tier: 'Administrative Safeguards',
    description: 'The policies, training, and people accountable for keeping the stack compliant.',
    items: [
      'Security Officer designated',
      'Workforce training (annual)',
      'Access management policy',
      'Contingency plan + drills',
    ],
    tone: 'sage',
    icon: (
      <svg width={22} height={22} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="9" cy="8" r="3" />
        <path d="M3 21a6 6 0 0 1 12 0" />
        <circle cx="17" cy="9" r="2.5" />
        <path d="M14 21a4 4 0 0 1 8 0" />
      </svg>
    ),
  },
  {
    tier: 'Physical Safeguards',
    description: 'Where data lives and the controls that keep the perimeter intact.',
    items: [
      'Workstation security policy',
      'Device + media controls',
      'Facility access (cloud datacenters)',
      'Asset disposal procedures',
    ],
    tone: 'tan',
    icon: (
      <svg width={22} height={22} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="11" width="18" height="10" rx="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
  },
  {
    tier: 'Technical Safeguards',
    description: 'The cryptography, access controls, and logging that protect every signal.',
    items: [
      'Access controls (RBAC + MFA)',
      'Audit logging + integrity',
      'Transmission security (TLS 1.3)',
      'Encryption (AES-256 at rest)',
    ],
    tone: 'periwinkle',
    icon: (
      <svg width={22} height={22} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 2 L 4 6 V 12 C 4 16.5 7.5 20.7 12 22 C 16.5 20.7 20 16.5 20 12 V 6 Z" />
        <path d="M9 12 L 11 14 L 15 10" />
      </svg>
    ),
  },
];

const ArrowRight = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

const ComplianceProtocol = () => {
  const SCHEMA = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Healthcare Compliance Protocol - HIPAA-Aligned Marketing Infrastructure',
    serviceType: 'Compliance & Data Security',
    audience: 'Healthcare practices, clinics, healthcare networks',
  };

  return (
    <main className="gt-page gt-page-x cp-page-x">
      {/* ─── HERO ─── */}
      <section className="gtx-hero">
        <div className="gt-shell">
          <nav className="gtx-crumb" aria-label="Breadcrumb">
            <Link to="/about">About</Link>
            <span aria-hidden="true">/</span>
            <span>Infrastructure</span>
            <span aria-hidden="true">/</span>
            <span className="cur">Compliance Protocol</span>
          </nav>

          <div className="gtx-hero-grid">
            <div className="gtx-hero-content">
              <span className="gtx-eyebrow">
                <span className="gtx-eyebrow-dot" aria-hidden="true" />
                Compliance Protocol
              </span>
              <h1 className="gtx-hero-title">
                Healthcare-grade infrastructure,
                <em> documented and audited.</em>
              </h1>
              <p className="gtx-hero-lede">
                Every engagement runs on a HIPAA-aligned stack: BAA-covered tools,
                encrypted intake, PHI-safe analytics, audited logs. This page
                summarises the protocols stakeholders, legal teams, and security
                reviewers ask for before BAA execution.
              </p>
              <div className="gtx-hero-ctas">
                <Link to="/contact" className="gtx-btn-primary">
                  Request documentation pack
                  <ArrowRight />
                </Link>
                <Link to="/about" className="gtx-btn-link">
                  Back to Infrastructure →
                </Link>
              </div>
            </div>
            <div className="gtx-hero-visual">
              <img src={heroImg} alt="" loading="eager" decoding="async" />
              <div className="gtx-hero-visual-tag" aria-hidden="true">
                <span className="gtx-hero-visual-tag-num">100%</span>
                <span className="gtx-hero-visual-tag-lbl">BAA-covered toolchain</span>
              </div>
            </div>
          </div>

          <ul className="gtx-hero-stats">
            <li>
              <strong>100%</strong>
              <span>BAAs signed (healthcare clients)</span>
            </li>
            <li>
              <strong>AES-256</strong>
              <span>Encryption at rest</span>
            </li>
            <li>
              <strong>TLS 1.3</strong>
              <span>Transit security</span>
            </li>
            <li>
              <strong>6 yrs</strong>
              <span>Audit-log retention (HIPAA)</span>
            </li>
          </ul>
        </div>
      </section>

      {/* ─── SAFEGUARD HIERARCHY (3 cards) ─── */}
      <section className="cpx-safeguards">
        <div className="gt-shell">
          <header className="gtx-sec-head">
            <span className="gtx-eyebrow">
              <span className="gtx-eyebrow-dot" aria-hidden="true" />
              Safeguard Hierarchy
            </span>
            <h2 className="gtx-sec-title">
              Three categories of controls, <em>mapped to the rule.</em>
            </h2>
            <p className="gtx-sec-sub">
              Every protocol maps to one of the HIPAA Security Rule's three
              safeguard categories under 45 CFR § 164 Subpart C.
            </p>
          </header>

          <div className="cpx-safeguard-grid">
            {SAFEGUARDS.map((s, i) => (
              <article key={s.tier} className={`cpx-safeguard-card tone-${s.tone}`}>
                <span className="cpx-safeguard-num" aria-hidden="true">
                  /{String(i + 1).padStart(2, '0')}
                </span>
                <span className="cpx-safeguard-icon" aria-hidden="true">{s.icon}</span>
                <h3 className="cpx-safeguard-title">{s.tier}</h3>
                <p className="cpx-safeguard-desc">{s.description}</p>
                <ul className="cpx-safeguard-list">
                  {s.items.map((item) => (
                    <li key={item}>
                      <span className="cpx-safeguard-bullet" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PROTOCOL SPECS (6 cards, 3x2 grid) ─── */}
      <section className="cpx-specs">
        <div className="gt-shell">
          <header className="gtx-sec-head">
            <span className="gtx-eyebrow">
              <span className="gtx-eyebrow-dot" aria-hidden="true" />
              Protocol Specifications
            </span>
            <h2 className="gtx-sec-title">
              Six protocols. <em>One commitment.</em>
            </h2>
            <p className="gtx-sec-sub">
              The complete list of compliance specifications referenced in every
              BAA we sign.
            </p>
          </header>

          <div className="cpx-spec-grid">
            {SECTIONS.map((s) => (
              <article key={s.id} id={s.id} className="cpx-spec-card">
                <header className="cpx-spec-head">
                  <span className="cpx-spec-ref">{s.ref}</span>
                  <h3 className="cpx-spec-title">{s.title}</h3>
                </header>
                <p className="cpx-spec-body">{s.body}</p>
                <dl className="cpx-spec-table">
                  {s.specs.map((sp) => (
                    <div key={sp.k} className="cpx-spec-row">
                      <dt>{sp.k}</dt>
                      <dd>{sp.v}</dd>
                    </div>
                  ))}
                </dl>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="gtx-cta">
        <div className="gt-shell">
          <div className="gtx-cta-card">
            <div className="gtx-cta-card-img">
              <img src={ctaImg} alt="" loading="lazy" decoding="async" />
              <div className="gtx-cta-card-img-tag" aria-hidden="true">
                <span className="dot" /> Documentation available on request
              </div>
            </div>
            <div className="gtx-cta-card-body">
              <span className="gtx-eyebrow">
                <span className="gtx-eyebrow-dot" aria-hidden="true" />
                Next Step
              </span>
              <h2 className="gtx-cta-h">
                Want the full <em>documentation pack?</em>
              </h2>
              <p>
                Includes our BAA template, vendor registry, incident response
                runbook, and the latest independent compliance audit - delivered
                to your legal team within one business day.
              </p>
              <Link to="/contact" className="gtx-btn-primary">
                Request documentation
                <ArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />
    </main>
  );
};

export default ComplianceProtocol;
