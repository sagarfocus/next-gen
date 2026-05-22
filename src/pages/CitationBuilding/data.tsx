export const COLORS = {
  navy:   '#1A2438',
  body:   '#4A5568',
  muted:  '#718096',
  sage:   '#5A8F5A',
  sageSoft: 'rgba(143, 188, 143, 0.18)',
  tan:    '#B38B6D',
  tanSoft: 'rgba(179, 139, 109, 0.16)',
  ctaBlue: '#576DB5',
  mint:   '#EBF4DD',
};

export const STATS = [
  { v: '47+',   l: 'Directories synced'  },
  { v: 'Monthly', l: 'NAP audit cadence' },
  { v: '< 48 hr', l: 'Drift detection'   },
];

export interface FailureMode {
  n: string;
  title: string;
  body: string;
  badge: string;
  badgeBg: string;
  badgeColor: string;
}

export const FAILURE_MODES: FailureMode[] = [
  {
    n: '01',
    title: 'Ranking dilution',
    body:
      'Search engines treat inconsistent NAP records as separate entities, splitting the authority of a single practice across phantom listings.',
    badge: 'Authority leak',
    badgeBg: 'rgba(212, 175, 124, 0.16)',
    badgeColor: '#8B6B4C',
  },
  {
    n: '02',
    title: 'Patient leakage',
    body:
      'A wrong suite number on three directories sends one in twelve new patients to the wrong door, then routes their review to the wrong listing.',
    badge: 'Bookings lost',
    badgeBg: 'rgba(220, 70, 70, 0.12)',
    badgeColor: '#B33A2B',
  },
  {
    n: '03',
    title: 'Compounding drift',
    body:
      'Without monthly verification, directories overwrite each other through automated data feeds. The drift gets worse, not better, with time.',
    badge: 'Time bomb',
    badgeBg: 'rgba(143, 188, 143, 0.20)',
    badgeColor: '#3A6B3A',
  },
];

export interface TierGroup {
  num: string;
  label: string;
  tagline: string;
  entries: { name: string; note: string }[];
}

export const TIERS: TierGroup[] = [
  {
    num: '01',
    label: 'Anchor',
    tagline: 'The three records the algorithm trusts most.',
    entries: [
      { name: 'Google Business Profile', note: 'Single highest-weight signal for the Local Pack.' },
      { name: 'Apple Maps Connect',      note: 'Default discovery on iPhone, increasingly tied to Siri intent.' },
      { name: 'Bing Places',             note: 'Powers Cortana, Duck Duck Go and Microsoft 365 surfaces.' },
    ],
  },
  {
    num: '02',
    label: 'Vertical',
    tagline: 'Healthcare-specific surfaces patients defer to.',
    entries: [
      { name: 'Healthgrades', note: 'Top branded SERP result for most clinician name queries.' },
      { name: 'Vitals',       note: 'Insurance-led patients defer to it for second opinions.' },
      { name: 'Zocdoc',       note: 'Conversion-stage; appears on booking-intent searches.' },
    ],
  },
  {
    num: '03',
    label: 'General',
    tagline: 'Broad index sources that round out the citation graph.',
    entries: [
      { name: 'Yelp',       note: 'Skews older cohorts; still indexed prominently.' },
      { name: 'Foursquare', note: 'Powers map embeds across third-party apps.' },
    ],
  },
];

const StepIconAudit = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="11" cy="11" r="7" />
    <path d="M16 16l5 5" />
    <path d="M8 11h6M11 8v6" />
  </svg>
);
const StepIconConsolidate = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M4 6h6M14 6h6" />
    <path d="M4 18h6M14 18h6" />
    <path d="M12 6v12" />
    <circle cx="12" cy="12" r="2" />
  </svg>
);
const StepIconMonitor = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </svg>
);

export interface Step {
  k: string;
  d: string;
  icon: React.ReactNode;
  out: string;
}

export const PROCESS: Step[] = [
  { k: 'Audit',       d: 'Forensic sweep of 60+ directories. Every variant, duplicate, and dormant listing flagged with a tier-weighted impact score.', icon: <StepIconAudit />,       out: 'Remediation register' },
  { k: 'Consolidate', d: 'Duplicates merged, dormant entries claimed or suppressed, NAP signature standardised across the active set.',                 icon: <StepIconConsolidate />, out: 'Canonical NAP record' },
  { k: 'Monitor',     d: 'Monthly drift detection with a 48-hour response SLA on any unauthorised change to a Tier 1 or Tier 2 listing.',                icon: <StepIconMonitor />,     out: 'Live drift dashboard' },
];
