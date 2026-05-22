export const HEAD_META = [
  { label: 'Coverage', value: 'Google · Yelp · Healthgrades · Zocdoc' },
  { label: 'Frequency', value: 'Daily monitoring' },
  { label: 'Response', value: 'Inside 4 hours' },
  { label: 'Updated', value: 'May 2026' },
];

/* ─── Flow icons (4 steps) ─── */
const IconDetect = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <circle cx="11" cy="11" r="7" />
    <path d="M16 16l5 5" />
    <path d="M11 8v3l2 1" />
  </svg>
);
const IconSort = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M3 5h18l-7 9v6l-4-2v-4z" />
  </svg>
);
const IconRespond = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M21 11.5a8.4 8.4 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.4 8.4 0 0 1-3.8-.9L3 21l1.9-5.7a8.4 8.4 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.4 8.4 0 0 1 3.8-.9h.5a8.5 8.5 0 0 1 8 8z" />
  </svg>
);
const IconReport = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M3 3v18h18" />
    <path d="M7 14l3-4 4 3 5-7" />
  </svg>
);

export interface FlowStep {
  n: string;
  k: string;
  d: string;
  icon: React.ReactNode;
  tone: { hex: string; soft: string };
}

export const FLOW: FlowStep[] = [
  {
    n: '01',
    k: 'Detect',
    d: 'Daily sweep across rated channels. Sentiment classified before triage.',
    icon: <IconDetect />,
    tone: { hex: '#5A8F5A', soft: 'rgba(143, 188, 143, 0.18)' },
  },
  {
    n: '02',
    k: 'Sort',
    d: 'Promoters routed to public review. Detractors routed to private resolution.',
    icon: <IconSort />,
    tone: { hex: '#B38B6D', soft: 'rgba(179, 139, 109, 0.18)' },
  },
  {
    n: '03',
    k: 'Respond',
    d: 'On-brand replies inside four hours, compliant with HIPAA non-disclosure.',
    icon: <IconRespond />,
    tone: { hex: '#576DB5', soft: 'rgba(87, 109, 181, 0.16)' },
  },
  {
    n: '04',
    k: 'Report',
    d: 'Weekly digest with theme analysis. Operational issues flagged to clinic leadership.',
    icon: <IconReport />,
    tone: { hex: '#2D3748', soft: 'rgba(45, 55, 72, 0.10)' },
  },
];

/* ─── Channel glyphs (simplified vector marks, not trademark logos) ─── */
const IconGoogle = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M21 12a9 9 0 1 1-3.2-6.9" />
    <path d="M12 12h9" />
  </svg>
);
const IconYelp = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <polygon points="12 2 14.6 8.6 21.6 9.2 16.4 13.8 18 20.6 12 17 6 20.6 7.6 13.8 2.4 9.2 9.4 8.6" />
  </svg>
);
const IconHealthgrades = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M20.8 9.5c0 5.3-8.8 10-8.8 10s-8.8-4.7-8.8-10a5.5 5.5 0 0 1 10-3.2 5.5 5.5 0 0 1 7.6 3.2z" />
    <path d="M9 12h2v-2h2v2h2v2h-2v2h-2v-2H9z" />
  </svg>
);
const IconZocdoc = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M6 4h12L6 20h12" />
  </svg>
);

export interface ChannelEntry {
  name: string;
  focus: string;
  d: string;
  icon: React.ReactNode;
  tone: { hex: string; soft: string };
}

export const CHANNELS: ChannelEntry[] = [
  {
    name: 'Google',
    focus: 'Local Pack lift',
    d: 'Highest-weight channel for local search ranking. The flagship of any reputation programme.',
    icon: <IconGoogle />,
    tone: { hex: '#576DB5', soft: 'rgba(87, 109, 181, 0.14)' },
  },
  {
    name: 'Yelp',
    focus: 'Brand search',
    d: 'Skews older patient cohorts. Important for indemnity insurance-led decisions.',
    icon: <IconYelp />,
    tone: { hex: '#B33A2B', soft: 'rgba(179, 58, 43, 0.12)' },
  },
  {
    name: 'Healthgrades',
    focus: 'Trust signal',
    d: 'Indexed prominently in branded SERPs. Often the second result in a doctor name search.',
    icon: <IconHealthgrades />,
    tone: { hex: '#5A8F5A', soft: 'rgba(143, 188, 143, 0.18)' },
  },
  {
    name: 'Zocdoc',
    focus: 'Booking velocity',
    d: 'Conversion-stage channel. Reviews here translate directly into appointment bookings.',
    icon: <IconZocdoc />,
    tone: { hex: '#B38B6D', soft: 'rgba(179, 139, 109, 0.18)' },
  },
];

export interface Outcome {
  v: string;
  k: string;
  d: string;
}

export const OUTCOMES: Outcome[] = [
  {
    v: '★4.9',
    k: 'Median rating',
    d: 'Across retained practices after 6 months of structured collection.',
  },
  {
    v: '+72',
    k: 'Reviews / qtr',
    d: 'Median new reviews per quarter once the collection flow is live.',
  },
  {
    v: '<4h',
    k: 'Response SLA',
    d: 'Median first-response time across all monitored review channels.',
  },
  {
    v: '+28%',
    k: 'Local Pack',
    d: 'Lift in Local Pack appearance for the top 20 service queries.',
  },
];
