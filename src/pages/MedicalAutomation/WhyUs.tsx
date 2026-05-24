import type { ReactElement } from 'react';

interface Pillar {
  pos: 0 | 1 | 2;
  tag: string;
  name: string;
  desc: string;
  list: string[];
  icon: ReactElement;
}

const ComplianceIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6Z" />
    <polyline points="9 12 11 14 15 10" />
  </svg>
);
const ConnectIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
    <path d="M10 13a5 5 0 0 0 7 0l3-3a5 5 0 0 0-7-7l-1 1" />
    <path d="M14 11a5 5 0 0 0-7 0l-3 3a5 5 0 0 0 7 7l1-1" />
  </svg>
);
const OwnershipIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="11" width="18" height="11" rx="2" />
    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
  </svg>
);

const PILLARS: Pillar[] = [
  {
    pos: 0,
    tag: 'Compliance',
    name: 'HIPAA-aware before it is impressive.',
    desc:
      'Every workflow runs on a BAA-covered stack. PHI is redacted before it touches the AI layer. Audit logs are reviewed quarterly. Your compliance officer signs off in writing — not over a beer.',
    list: [
      'BAA on every downstream tool',
      'PHI-redacted prompts on every AI call',
      'Quarterly audit-log review',
      'Human-in-loop on clinical decisions',
    ],
    icon: <ComplianceIcon />,
  },
  {
    pos: 1,
    tag: 'EHR-connected',
    name: 'Wired into the system you already run.',
    desc:
      'Athena, Epic, eClinicalWorks, Kareo, NextGen, custom — connected via HL7, FHIR, or the vendor API. The automation lives where your clinic does, not in a parallel universe.',
    list: [
      'HL7 + FHIR integrations',
      'Vendor-specific connectors for the top six EHRs',
      'Read-only at first, write-back when approved',
      'No replacement for your EHR. Ever.',
    ],
    icon: <ConnectIcon />,
  },
  {
    pos: 2,
    tag: 'Owner-friendly',
    name: 'You can run it. You can leave with it.',
    desc:
      'No closed-source workflow engine. No proprietary integrations. Documentation in plain English. Migration guide if you ever want to switch — because if the build is good, the contract should not be the reason you stay.',
    list: [
      'Open workflow engine (N8N)',
      'Owner-managed dashboards',
      'Written runbook for every flow',
      'Migration export on day one if you want it',
    ],
    icon: <OwnershipIcon />,
  },
];

const WhyUs = () => {
  return (
    <section className="sl-section mau-why-section" id="why-us">
      <div className="container-shell">
        <div className="sl-sec-head">
          <div>
            <div className="sl-sec-num">05 - Why TheNextGen</div>
            <h2 className="sl-sec-title">
              Three things we won&rsquo;t <em>compromise on.</em>
            </h2>
          </div>
          <div className="sl-sec-meta">
            The other vendors
            <br />
            cut all three
          </div>
        </div>

        <div className="mau-why-grid">
          {PILLARS.map((p) => (
            <article key={p.tag} className="mau-why-card" data-pos={p.pos}>
              <div className="mau-why-icon">{p.icon}</div>
              <div className="mau-why-tag">{p.tag}</div>
              <h3 className="mau-why-name">{p.name}</h3>
              <p className="mau-why-desc">{p.desc}</p>
              <ul className="mau-why-list">
                {p.list.map((item) => (
                  <li key={item}>
                    <span className="mau-why-tick" aria-hidden="true">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                    </span>
                    {item}
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

export default WhyUs;
