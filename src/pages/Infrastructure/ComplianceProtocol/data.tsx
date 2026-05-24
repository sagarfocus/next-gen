import { SITE } from '@/content/site';

export interface Section {
  id: string;
  title: string;
  body: string;
  specs: { k: string; v: string }[];
}

export const SECTIONS: Section[] = [
  {
    id: 's1',
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

export interface Safeguard {
  tier: string;
  description: string;
  items: string[];
  tone: 'sage' | 'periwinkle' | 'tan';
  icon: React.ReactNode;
}

export const SAFEGUARDS: Safeguard[] = [
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
      <svg
        width={22}
        height={22}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.7}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
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
      <svg
        width={22}
        height={22}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.7}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
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
      <svg
        width={22}
        height={22}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.7}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M12 2 L 4 6 V 12 C 4 16.5 7.5 20.7 12 22 C 16.5 20.7 20 16.5 20 12 V 6 Z" />
        <path d="M9 12 L 11 14 L 15 10" />
      </svg>
    ),
  },
];

export const SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Healthcare Compliance Protocol - HIPAA-Aligned Marketing Infrastructure',
  serviceType: 'Compliance & Data Security',
  provider: { '@id': `${SITE.url}#organization` },
  areaServed: { '@type': 'Country', name: 'United States' },
  audience: 'Healthcare practices, clinics, healthcare networks',
};
