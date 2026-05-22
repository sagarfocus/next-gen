export interface Pillar {
  num: string;
  tag: string;
  description: string;
  items: string[];
  tone: 'sage' | 'tan' | 'periwinkle';
  icon: React.ReactNode;
}

export const PILLARS: Pillar[] = [
  {
    num: '01',
    tag: 'Administrative',
    description: 'Policies, people, and process - the human layer that keeps the technical work honest.',
    items: [
      'Workforce training (annual + on hire)',
      'Access controls and provisioning',
      'Documented policies, versioned',
      'Incident response plan',
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
    num: '02',
    tag: 'Physical',
    description: 'Where data lives, who walks past it, and how it gets disposed of when its job is done.',
    items: [
      'BAA-covered data centres',
      'Hardware disposal log',
      'Workstation policy',
      'Visitor and tenant controls',
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
    num: '03',
    tag: 'Technical',
    description: 'The cryptography, access controls, and logging that protect every signal that moves.',
    items: [
      'End-to-end encryption (TLS 1.3 / AES-256)',
      'MFA enforced across all tools',
      'Audit and access logging',
      'Automatic session timeout',
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

export interface CoverageRow {
  area: string;
  inScope: string;
  outScope: string;
  icon: React.ReactNode;
}

export const COVERAGE: CoverageRow[] = [
  {
    area: 'Website',
    inScope: 'HIPAA-aware forms, BAA-covered hosting, secure file transfer.',
    outScope: 'Treating the website as a long-term PHI store.',
    icon: (
      <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="4" width="18" height="14" rx="2" />
        <path d="M8 21h8M12 18v3" />
      </svg>
    ),
  },
  {
    area: 'Ad Platforms',
    inScope: 'Server-side conversions with hashed, salted identifiers.',
    outScope: 'Sharing PHI in custom audiences or CRM imports.',
    icon: (
      <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M3 11v8a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-8" />
        <path d="M16 6l-4-4-4 4" />
        <path d="M12 2v14" />
      </svg>
    ),
  },
  {
    area: 'Email & SMS',
    inScope: 'BAA-covered providers, opt-in receipts, encrypted at rest.',
    outScope: 'Treatment-specific content without explicit consent.',
    icon: (
      <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="M3 7l9 6 9-6" />
      </svg>
    ),
  },
  {
    area: 'Analytics',
    inScope: 'IP truncation, PHI-free URLs, consent-aware tag firing.',
    outScope: 'Page-level event tracking on clinical content.',
    icon: (
      <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <line x1="6" y1="20" x2="6" y2="14" />
        <line x1="12" y1="20" x2="12" y2="8" />
        <line x1="18" y1="20" x2="18" y2="11" />
      </svg>
    ),
  },
  {
    area: 'Reviews & Social',
    inScope: 'Sentiment-routed response flows that never solicit PHI.',
    outScope: 'Responding to a public review with patient detail.',
    icon: (
      <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 2 L 14 8 L 20 8.5 L 15.5 12.5 L 17 19 L 12 15.5 L 7 19 L 8.5 12.5 L 4 8.5 L 10 8 Z" />
      </svg>
    ),
  },
];

export interface LoopStep {
  num: string;
  label: string;
  title: string;
  body: string;
}

export const STEPS: LoopStep[] = [
  {
    num: '01',
    label: 'Scope',
    title: 'Map the surface.',
    body: 'Every system that touches a patient inquiry, charted into a plain-language data flow diagram shared with your team.',
  },
  {
    num: '02',
    label: 'Replace',
    title: 'Migrate non-compliant tools.',
    body: 'Hosting, email, forms, file transfer, analytics - swapped to BAA-covered alternatives without disrupting operations.',
  },
  {
    num: '03',
    label: 'Train',
    title: 'Roll out to staff.',
    body: 'Workforce training across clinical and ops staff. Quarterly refreshers. Sign-offs retained for the auditor.',
  },
  {
    num: '04',
    label: 'Verify',
    title: 'Annual external review.',
    body: 'Penetration test, policy audit, and a remediation register that closes every finding inside 60 days.',
  },
];

export const SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'HIPAA-Compliant Healthcare Marketing',
  serviceType: 'HIPAA + HITECH Compliance for Marketing Operations',
  audience: 'Healthcare practices, clinics, networks',
};
