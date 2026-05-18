import { Link } from 'react-router-dom';

/* ============================================================
   COMPLIANCE PROTOCOL — Swiss specification-document layout.
   Document numbering, monospaced metadata, indented folder-tree
   of safeguards. Bronze accent. Specification-sheet aesthetic.
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

const SafeguardTree = () => {
  const tree = [
    {
      tier: 'Administrative Safeguards',
      items: [
        'Security Officer designated',
        'Workforce training (annual)',
        'Access management policy',
        'Contingency plan + drills',
      ],
    },
    {
      tier: 'Physical Safeguards',
      items: [
        'Workstation security policy',
        'Device + media controls',
        'Facility access (cloud datacenters)',
        'Asset disposal procedures',
      ],
    },
    {
      tier: 'Technical Safeguards',
      items: [
        'Access controls (RBAC + MFA)',
        'Audit logging + integrity',
        'Transmission security (TLS 1.3)',
        'Encryption (AES-256 at rest)',
      ],
    },
  ];

  return (
    <div className="cp-tree" role="img" aria-label="HIPAA safeguards hierarchy">
      <div className="cp-tree-root">
        <span className="cp-tree-root-label">HIPAA · 45 CFR § 164</span>
      </div>
      <ul className="cp-tree-tiers">
        {tree.map((t) => (
          <li key={t.tier} className="cp-tree-tier">
            <div className="cp-tree-tier-head">
              <span className="cp-tree-tier-dot" />
              <span>{t.tier}</span>
            </div>
            <ul className="cp-tree-leaves">
              {t.items.map((item) => (
                <li key={item}>
                  <span className="cp-tree-leaf-rule" />
                  {item}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

const ComplianceProtocol = () => {
  const SCHEMA = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Healthcare Compliance Protocol — HIPAA-Aligned Marketing Infrastructure',
    serviceType: 'Compliance & Data Security',
    audience: 'Healthcare practices, clinics, healthcare networks',
  };

  return (
    <main className="cp-page">
      {/* Document header */}
      <section className="cp-doc-head">
        <div className="cp-shell">
          <div className="cp-doc-meta">
            <div>
              <span className="cp-doc-label">Document</span>
              <span className="cp-doc-value">COMP-PROTO-2026</span>
            </div>
            <div>
              <span className="cp-doc-label">Revision</span>
              <span className="cp-doc-value">R.07</span>
            </div>
            <div>
              <span className="cp-doc-label">Effective</span>
              <span className="cp-doc-value">2026-01-01</span>
            </div>
            <div>
              <span className="cp-doc-label">Classification</span>
              <span className="cp-doc-value">Public</span>
            </div>
          </div>

          <nav className="cp-crumb" aria-label="Breadcrumb">
            <Link to="/about">About</Link>
            <span aria-hidden="true">/</span>
            <span>Infrastructure</span>
            <span aria-hidden="true">/</span>
            <span className="cur">Compliance Protocol</span>
          </nav>

          <h1 className="cp-h1">
            Healthcare-grade infrastructure,<br />
            documented and audited.
          </h1>
          <p className="cp-lede">
            This document describes the compliance, security, and data-handling
            protocols that govern every engagement. It is provided to
            stakeholders, legal teams, and security reviewers prior to BAA
            execution.
          </p>
        </div>
      </section>

      {/* Safeguard tree */}
      <section className="cp-tree-section">
        <div className="cp-shell">
          <div className="cp-tree-grid">
            <div>
              <span className="cp-section-ref">§ 0.0</span>
              <h2 className="cp-section-h2">Safeguard hierarchy.</h2>
              <p className="cp-section-sub">
                We map every control to the HIPAA Security Rule's three categories
                of safeguards. The tree below summarises which controls are
                implemented at each tier.
              </p>
              <dl className="cp-key">
                <div><dt>Standard</dt><dd>45 CFR Part 164, Subpart C</dd></div>
                <div><dt>Coverage</dt><dd>Administrative · Physical · Technical</dd></div>
                <div><dt>Auditor</dt><dd>Independent · Annual</dd></div>
              </dl>
            </div>
            <SafeguardTree />
          </div>
        </div>
      </section>

      {/* Spec sections */}
      <section className="cp-specs">
        <div className="cp-shell">
          <div className="cp-section-row">
            <span className="cp-section-ref">§ 1–6</span>
            <h2 className="cp-section-h2">Protocol specifications.</h2>
          </div>
          <ol className="cp-spec-list">
            {SECTIONS.map((s) => (
              <li key={s.id} id={s.id} className="cp-spec">
                <header className="cp-spec-head">
                  <span className="cp-spec-ref">{s.ref}</span>
                  <h3 className="cp-spec-title">{s.title}</h3>
                </header>
                <p className="cp-spec-body">{s.body}</p>
                <dl className="cp-spec-table">
                  {s.specs.map((sp) => (
                    <div key={sp.k} className="cp-spec-row">
                      <dt>{sp.k}</dt>
                      <dd>{sp.v}</dd>
                    </div>
                  ))}
                </dl>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Document footer / CTA */}
      <section className="cp-footer-cta">
        <div className="cp-shell">
          <div className="cp-footer-grid">
            <div>
              <span className="cp-section-ref">§ 7.0</span>
              <h2 className="cp-section-h2">Request the full documentation pack.</h2>
              <p>Includes our BAA template, vendor registry, incident response runbook, and the latest independent compliance audit.</p>
            </div>
            <Link to="/contact" className="cp-doc-btn">
              Request documentation
              <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
          </div>
          <p className="cp-footer-note">
            END OF DOCUMENT · COMP-PROTO-2026 · Page 1 of 1
          </p>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />
    </main>
  );
};

export default ComplianceProtocol;
