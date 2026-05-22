/* ────────────────────────────────────────────────────────────────────
   GROWTH-PLAN DATA - single source for the chart, phase cards, and timeline.
   Keep figures consistent so the visualisation, table, and KPI panel agree.
   ──────────────────────────────────────────────────────────────────── */

export interface MonthPoint {
  m: number;
  mult: number;
  label?: string;
}
// y axis: growth multiplier vs baseline (1.0 = month 0).
export const TRAJECTORY: MonthPoint[] = [
  { m: 0, mult: 1.0, label: 'Baseline' },
  { m: 1, mult: 0.98 },
  { m: 2, mult: 1.05 },
  { m: 3, mult: 1.18 },
  { m: 4, mult: 1.42, label: 'First booked uplift' },
  { m: 5, mult: 1.78 },
  { m: 6, mult: 2.15 },
  { m: 7, mult: 2.52, label: 'Ranking crossover' },
  { m: 8, mult: 2.84 },
  { m: 9, mult: 3.1 },
  { m: 10, mult: 3.32 },
  { m: 11, mult: 3.55 },
  { m: 12, mult: 3.8, label: 'Compound zone' },
];

export const PHASES = [
  {
    n: '01',
    range: [0, 2],
    name: 'Diagnose',
    tone: 'sage',
    summary: 'Audit the acquisition stack. Build the dashboard. Establish the baseline.',
    deliverables: ['Forensic channel audit', 'Tracking blueprint', 'Baseline scorecard'],
  },
  {
    n: '02',
    range: [2, 5],
    name: 'Build',
    tone: 'tan',
    summary: 'Quiet build. We ship infrastructure before we ship campaigns.',
    deliverables: ['Landing system', 'Editorial spine', 'Conversion pipeline'],
  },
  {
    n: '03',
    range: [5, 8],
    name: 'Launch',
    tone: 'cta',
    summary:
      'A staged release across paid, organic, and direct. Each ships against a stated hypothesis.',
    deliverables: ['Paid by intent tier', 'GBP + local push', 'Email recall flows'],
  },
  {
    n: '04',
    range: [8, 12],
    name: 'Optimize',
    tone: 'heading',
    summary: 'A weekly retrospective and rolling 4-week forecast. Anything stalled is replaced.',
    deliverables: ['Decision log', 'A/B queue', 'Quarterly review'],
  },
];

export const QUARTERS = [
  {
    q: 'Q1',
    months: 'M01 – M03',
    focus: 'Foundation',
    ships: 'Audit, tracking, brand & content infrastructure',
    read: 'Baseline locked',
  },
  {
    q: 'Q2',
    months: 'M04 – M06',
    focus: 'Acquisition',
    ships: 'Paid launch, GBP optimisation, on-site CRO',
    read: 'Bookings curve',
  },
  {
    q: 'Q3',
    months: 'M07 – M09',
    focus: 'Compounding',
    ships: 'Organic crossover, content depth, lifecycle email',
    read: 'Ranking flip',
  },
  {
    q: 'Q4',
    months: 'M10 – M12',
    focus: 'Optimising',
    ships: 'Channel rebalance, retention engine, board review',
    read: 'Compound zone',
  },
];

export const COMMITMENTS = [
  {
    metric: 'Patient acquisition cost',
    delta: '−42%',
    by: 'by month 6',
    detail: 'Median reduction across the active book once paid is restructured by intent tier.',
  },
  {
    metric: 'Booked visits',
    delta: '+78%',
    by: 'by month 9',
    detail: 'Counted as net-new versus the 30 days preceding kickoff. No seasonality credit.',
  },
  {
    metric: 'Organic non-brand traffic',
    delta: '3.8×',
    by: 'by month 12',
    detail: 'On the schema-and-content programme we audit during the diagnose phase.',
  },
];

export const QUARTER_ICONS: React.ReactNode[] = [
  // Q1 Foundation — clipboard check
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.7"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <rect x="9" y="2" width="6" height="4" rx="1" />
    <path d="M9 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-3" />
    <polyline points="9 14 12 17 17 11" />
  </svg>,
  // Q2 Acquisition — megaphone
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.7"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M3 11v2a2 2 0 0 0 2 2h2l5 4V5L7 9H5a2 2 0 0 0-2 2z" />
    <path d="M19 5a8 8 0 0 1 0 14" />
    <path d="M16 8a4 4 0 0 1 0 8" />
  </svg>,
  // Q3 Compounding — trending up
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.7"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <polyline points="22 7 13.5 15.5 8.5 10.5 1 18" />
    <polyline points="16 7 22 7 22 13" />
  </svg>,
  // Q4 Optimising — refresh / loop
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.7"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <polyline points="23 4 23 10 17 10" />
    <polyline points="1 20 1 14 7 14" />
    <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10" />
    <path d="M20.49 15a9 9 0 0 1-14.85 3.36L1 14" />
  </svg>,
];

export const QUARTER_TONES = [
  { hex: '#5A8F5A', soft: 'rgba(143, 188, 143, 0.22)' }, // sage
  { hex: '#B38B6D', soft: 'rgba(179, 139, 109, 0.20)' }, // tan
  { hex: '#576DB5', soft: 'rgba(87, 109, 181, 0.20)' }, // cta
  { hex: '#2D3748', soft: 'rgba(45, 55, 72, 0.14)' }, // heading
];
