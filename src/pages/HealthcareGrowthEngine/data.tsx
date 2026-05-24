import imgSeo from '../../assets/local-search.png';
import imgPaid from '../../assets/paid-media.png';
import imgAutomation from '../../assets/medical-automation.png';
import { SITE } from '@/content/site';

/* ---------- TYPES ---------- */
export interface Channel {
  n: string;
  tag: string;
  title: string;
  body: string;
  bullets: string[];
  img: string;
  href: string;
}

export interface Stage {
  n: string;
  k: string;
  cadence: string;
  d: string;
  icon: React.ReactNode;
}

export interface Outcome {
  v: string; // legacy/SR display
  num: number; // animated target
  prefix: string;
  suffix: string;
  l: string;
  sub: string;
  vs: string;
}

export interface PackageItem {
  title: string;
  cadence: string;
  items: string[];
}

export interface FaqEntry {
  q: string;
  a: string;
  defaultOpen?: boolean;
}

export interface StackTool {
  name: string;
  mark: string;
}
export interface StackGroup {
  label: string;
  icon: React.ReactNode;
  tools: StackTool[];
}
export interface StackGroupExt extends StackGroup {
  tagline: string;
  tools: (StackTool & { use: string })[];
}

/* ---------- DATA ---------- */
export const HEAD_META = [
  { label: 'Channels', value: 'SEO · Paid · Automation' },
  { label: 'Cycle', value: 'Daily ops · weekly review' },
  { label: 'Reporting', value: 'Live dashboard' },
  { label: 'Coverage', value: '200+ U.S. practices' },
];

export const HERO_PULSE = [
  { k: 'Booked visits', v: '+78%', dir: 'up' as const },
  { k: 'CPV', v: '−38%', dir: 'down' as const },
  { k: 'Recall recovery', v: '+22%', dir: 'up' as const },
];

export const TRUST_BADGES = [
  'Google Partner',
  'Meta Business Partner',
  'HIPAA-aware workflows',
  'GA4 · GSC · GBP certified',
  'EHR & PMS integrations',
  'SOC-2 vendor stack',
];

export const GAP_ROWS: { topic: string; agency: string; engine: string }[] = [
  {
    topic: 'Goal',
    agency: 'Impressions, clicks, vanity dashboards.',
    engine: 'Booked appointments, net new patients, LTV.',
  },
  {
    topic: 'Cadence',
    agency: 'Monthly report. Quarterly review.',
    engine: 'Daily ops, weekly Loom, live dashboard.',
  },
  {
    topic: 'Team',
    agency: 'Junior account manager — channel silos.',
    engine: 'One growth lead. One number. Full-stack pod.',
  },
  {
    topic: 'Reporting',
    agency: 'Slide decks. Screenshots. Lagging metrics.',
    engine: 'Funnel-level instrumentation. Live attribution.',
  },
  {
    topic: 'Spend',
    agency: 'Flat retainer regardless of return.',
    engine: 'Quarterly re-forecast. Spend tilts to what pays back.',
  },
  {
    topic: 'Exit',
    agency: 'Locked-in 12 months. Data hostage.',
    engine: 'Month-to-month. Your accounts, your dashboards, your data.',
  },
];

export const CHANNELS: Channel[] = [
  {
    n: '01',
    tag: 'Discovery',
    title: 'SEO & Local Search',
    body: 'Technical SEO, local pack dominance, schema, and clinical content that ranks for the searches your patients actually run.',
    bullets: [
      'Local pack engineering',
      'Service-area cluster maps',
      'Schema + entity SEO',
      'GBP optimisation',
    ],
    img: imgSeo,
    href: '/services/seo',
  },
  {
    n: '02',
    tag: 'Demand',
    title: 'Paid Media',
    body: 'Google Ads and Meta tuned for booked appointments — not impressions, not clicks, not vanity. Every dollar tied to a visit.',
    bullets: [
      'Google Ads (Search + PMax)',
      'Meta lead campaigns',
      'Geo + service segmentation',
      'Offline conversion tracking',
    ],
    img: imgPaid,
    href: '/services/google-ads',
  },
  {
    n: '03',
    tag: 'Retention',
    title: 'Automation & AI',
    body: 'Recall, reactivation, intake, and review flows running quietly inside the systems your clinic already uses every day.',
    bullets: [
      'EHR + PMS automations',
      'AI front-desk assist',
      'Review & reputation flows',
      'Recall + reactivation',
    ],
    img: imgAutomation,
    href: '/automation',
  },
];

const IconMeasure = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.6}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M3 3h18v18H3z" />
    <path d="M3 9h18" />
    <path d="M9 21V9" />
  </svg>
);
const IconPriority = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.6}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M8 6h13" />
    <path d="M8 12h13" />
    <path d="M8 18h13" />
    <circle cx="3.5" cy="6" r="1.4" />
    <circle cx="3.5" cy="12" r="1.4" />
    <circle cx="3.5" cy="18" r="1.4" />
  </svg>
);
const IconOperate = () => (
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
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);
const IconCompound = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.6}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
    <polyline points="17 6 23 6 23 12" />
  </svg>
);

export const STAGES: Stage[] = [
  {
    n: '01',
    k: 'Measure',
    cadence: 'Days 1–7',
    d: 'Read-only access to GA4, GSC, GBP, ad accounts, and the CRM. We map the funnel before we touch anything.',
    icon: <IconMeasure />,
  },
  {
    n: '02',
    k: 'Prioritise',
    cadence: 'Days 7–14',
    d: 'One scorecard. Every channel scored, every fix priced. The top five ship inside the first 30 days.',
    icon: <IconPriority />,
  },
  {
    n: '03',
    k: 'Operate',
    cadence: 'Daily',
    d: 'Daily ops on every active channel. Weekly Loom + live dashboard. One growth lead, one number.',
    icon: <IconOperate />,
  },
  {
    n: '04',
    k: 'Compound',
    cadence: 'Quarterly',
    d: 'Quarterly re-forecasts. Spend tilts to what is paying back. Every line item re-earns its place.',
    icon: <IconCompound />,
  },
];

const IconStackAnalytics = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.8}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <line x1="6" y1="20" x2="6" y2="12" />
    <line x1="12" y1="20" x2="12" y2="4" />
    <line x1="18" y1="20" x2="18" y2="14" />
  </svg>
);
const IconStackAcquisition = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.8}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="9" />
    <circle cx="12" cy="12" r="5" />
    <circle cx="12" cy="12" r="1.6" fill="currentColor" />
  </svg>
);
const IconStackEhr = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.8}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <rect x="6" y="4" width="12" height="16" rx="2" />
    <path d="M9 4v2h6V4" />
    <path d="M12 11v5M9.5 13.5h5" />
  </svg>
);
const IconStackAutomation = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.8}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <circle cx="5" cy="6" r="2" />
    <circle cx="19" cy="6" r="2" />
    <circle cx="12" cy="18" r="2" />
    <path d="M7 6h10M6 8l5 8M18 8l-5 8" />
  </svg>
);
const IconStackFrontDesk = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.8}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M4 13a8 8 0 0 1 16 0" />
    <path d="M4 13v3a2 2 0 0 0 2 2h1v-5H4Z" />
    <path d="M20 13v3a2 2 0 0 1-2 2h-1v-5h3Z" />
  </svg>
);
const IconStackReputation = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.8}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <polygon points="12 3 14.6 9 21 9.6 16.2 14 17.7 20.4 12 17.2 6.3 20.4 7.8 14 3 9.6 9.4 9 12 3" />
  </svg>
);
const IconStackContent = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.8}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="8" y1="13" x2="16" y2="13" />
    <line x1="8" y1="17" x2="13" y2="17" />
  </svg>
);

export const STACK_GROUPS: StackGroupExt[] = [
  {
    label: 'Analytics',
    icon: <IconStackAnalytics />,
    tagline: 'Read every funnel surface in one place — no more cross-tab guessing.',
    tools: [
      { name: 'GA4', mark: 'GA', use: 'Behavioural events, conversions, attribution.' },
      { name: 'Search Console', mark: 'SC', use: 'Indexation, impressions, ranking drift.' },
      { name: 'Looker Studio', mark: 'LS', use: 'Live dashboards shipped to the C-suite.' },
      { name: 'Hotjar', mark: 'HJ', use: 'Session recordings on the booking funnel.' },
    ],
  },
  {
    label: 'Acquisition',
    icon: <IconStackAcquisition />,
    tagline: 'Every channel where a patient searches — instrumented for booked visits, not clicks.',
    tools: [
      { name: 'Google Ads', mark: 'GA', use: 'Search + Performance Max for high-intent terms.' },
      { name: 'Meta Ads', mark: 'MA', use: 'Lead campaigns for service-line expansion.' },
      { name: 'GBP', mark: 'GB', use: 'Local pack dominance + review velocity.' },
      { name: 'Bing', mark: 'BG', use: 'Microsoft Audience for the 35+ demographic.' },
    ],
  },
  {
    label: 'Automation',
    icon: <IconStackAutomation />,
    tagline: 'Recall, intake, and review flows running quietly inside the systems you already use.',
    tools: [
      { name: 'Zapier', mark: 'ZP', use: 'Cross-tool orchestration across 800+ apps.' },
      { name: 'HubSpot', mark: 'HS', use: 'Patient CRM, sequences, and lifecycle stages.' },
      { name: 'Twilio', mark: 'TW', use: 'Two-way SMS for confirmations + reactivation.' },
      { name: 'Birdeye', mark: 'BE', use: 'Automated review requests after every visit.' },
    ],
  },
  {
    label: 'Clinical',
    icon: <IconStackEhr />,
    tagline: 'EHR and PMS integrations that move data — not replace your stack.',
    tools: [
      { name: 'Epic', mark: 'EP', use: 'FHIR-based read access for booking attribution.' },
      { name: 'Athena', mark: 'AT', use: 'Visit data sync for closed-loop reporting.' },
      { name: 'NextGen', mark: 'NG', use: 'Appointment + outcome tracking pipeline.' },
      { name: 'Dentrix', mark: 'DX', use: 'Dental PMS recall + reactivation flows.' },
    ],
  },
  {
    label: 'Front Desk',
    icon: <IconStackFrontDesk />,
    tagline: 'Calls, scheduling, and intake routed without dropping a single new-patient lead.',
    tools: [
      { name: 'Twilio', mark: 'TW', use: 'Programmable voice + SMS for missed-call recovery.' },
      { name: 'Calendly', mark: 'CL', use: 'Self-serve booking with provider availability sync.' },
      { name: 'Zoom Phone', mark: 'ZM', use: 'Cloud PBX with recording + transcription.' },
      { name: 'Klara', mark: 'KL', use: 'HIPAA-secure patient messaging + intake.' },
    ],
  },
  {
    label: 'Reputation',
    icon: <IconStackReputation />,
    tagline: 'Review volume and velocity that compounds local-pack ranking month over month.',
    tools: [
      { name: 'Birdeye', mark: 'BE', use: 'Multi-location review aggregation + alerts.' },
      { name: 'Podium', mark: 'PD', use: 'SMS-first review requests post-visit.' },
      { name: 'GBP Reviews', mark: 'GR', use: 'Native Google review velocity tracking.' },
      { name: 'Yelp', mark: 'YP', use: 'Service-line reputation in niche verticals.' },
    ],
  },
  {
    label: 'Content',
    icon: <IconStackContent />,
    tagline: 'Authority content that ranks for the searches your patients actually run.',
    tools: [
      { name: 'WordPress', mark: 'WP', use: 'Headless CMS for clinical content velocity.' },
      { name: 'Webflow', mark: 'WF', use: 'Marketing site builds with live attribution.' },
      { name: 'Surfer', mark: 'SF', use: 'SERP-driven topic + entity optimisation.' },
      { name: 'Frase', mark: 'FR', use: 'Brief generation tuned to clinical intent.' },
    ],
  },
];

export const OUTCOMES: Outcome[] = [
  {
    v: '120+',
    num: 120,
    prefix: '',
    suffix: '+',
    sub: 'programs',
    l: 'Growth programs launched',
    vs: 'across 31 U.S. states',
  },
  {
    v: '+78%',
    num: 78,
    prefix: '+',
    suffix: '%',
    sub: 'year one',
    l: 'Avg. patient growth',
    vs: 'vs. 12% industry baseline',
  },
  {
    v: '−38%',
    num: 38,
    prefix: '−',
    suffix: '%',
    sub: 'paid',
    l: 'Cost per booked visit',
    vs: 'vs. prior 6-mo. baseline',
  },
  {
    v: '14 d',
    num: 14,
    prefix: '',
    suffix: ' d',
    sub: 'go-live',
    l: 'From signed to first lift',
    vs: 'median across last 24 clients',
  },
];

export const PACKAGE: PackageItem[] = [
  {
    title: 'Foundation',
    cadence: 'Weeks 1–2',
    items: [
      'Funnel + attribution audit',
      'Scorecard across 9 surfaces',
      'Prioritised 30-day plan',
      'Tracking + tagging rebuild',
    ],
  },
  {
    title: 'Operate',
    cadence: 'Every week',
    items: [
      'Daily channel ops',
      'Weekly Loom walkthrough',
      'Live dashboard updates',
      'One growth lead, on call',
    ],
  },
  {
    title: 'Compound',
    cadence: 'Every quarter',
    items: [
      'Re-forecast + spend reshape',
      'New experiments queued',
      'Retention & LTV review',
      'Executive board readout',
    ],
  },
];

export const FAQS: FaqEntry[] = [
  {
    q: 'How is this different from hiring an agency?',
    a: 'An agency sells channels and reports. The engine sells outcomes — booked visits and patient LTV — across SEO, paid, and automation as one system, with one growth lead accountable to one number.',
    defaultOpen: true,
  },
  {
    q: 'Do you require a 12-month contract?',
    a: 'No. We work month-to-month after the first 30 days. Your accounts, your dashboards, your data — all yours from day one. If we are not earning our keep, you walk.',
  },
  {
    q: 'What does it cost to run?',
    a: 'Engagements start at $2,500/month for single-location clinics and scale with channels, geographies, and media spend. Pricing is fixed monthly — no hourly billing, no surprise line items.',
  },
  {
    q: 'How fast do we see results?',
    a: 'Most clinics see the first measurable lift inside 14 days from tracking fixes and front-desk recovery. SEO compounding lands in the 3–6 month window. Paid is tuned weekly from day one.',
  },
  {
    q: 'Will you work with our existing EHR / PMS / CRM?',
    a: 'Yes. We integrate with the systems your clinic already runs — Epic, Athena, NextGen, Dentrix, HubSpot, and most modern PMS / CRM stacks via native APIs, Zapier, or Make.',
  },
];

export const SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'The Healthcare Growth Engine',
  serviceType: 'Healthcare Growth Engine',
  provider: { '@id': `${SITE.url}#organization` },
  areaServed: { '@type': 'Country', name: 'United States' },
  description:
    'Integrated SEO, paid media, and automation engineered for patient acquisition and retention across U.S. healthcare practices.',
  offers: {
    '@type': 'Offer',
    priceCurrency: 'USD',
    priceSpecification: { '@type': 'PriceSpecification', priceCurrency: 'USD', minPrice: 2500 },
  },
};
