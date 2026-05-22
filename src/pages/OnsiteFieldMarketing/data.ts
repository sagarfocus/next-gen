export const HEAD_META = [
  { label: 'Channel',  value: 'In-person · Field' },
  { label: 'Geo',      value: 'DFW + 4 metros' },
  { label: 'Cadence',  value: 'Weekly activations' },
  { label: 'Updated',  value: 'May 2026' },
];

export const FIELD_CHANNELS = [
  {
    n: '01',
    name: 'Community Events',
    summary: 'Health fairs, school sports physicals, senior centers, corporate wellness days.',
    desc: 'A dedicated street team books, staffs, and reports on the 15–25 highest-yield community moments per metro. Branded booth, intake tablets, and same-day lead handoff to your front desk.',
  },
  {
    n: '02',
    name: 'B2B Referral Visits',
    summary: 'PCPs, OB-GYNs, urgent care, gyms, schools, employers.',
    desc: 'Quarterly visit cadence with named territory reps. Co-branded literature, lunch-and-learns, and a CRM-tracked referral loop so every drop-in turns into a measurable downstream consult.',
  },
  {
    n: '03',
    name: 'Door-to-Door Geo Drops',
    summary: 'Hyper-local print + intake card distribution.',
    desc: 'Targeted ZIP-level walks aligned with your highest-paying procedure. QR-tracked print pieces, every door an attributable touch in the dashboard.',
  },
  {
    n: '04',
    name: 'Sponsorship + Activations',
    summary: 'Local sports leagues, charity 5Ks, festival booths.',
    desc: 'Sponsorship deals that lock in screening tables, signage, and post-event lead exports. We negotiate the deal, staff the booth, and measure the ROI down to first-visit revenue.',
  },
];

export const DELIVERABLES = [
  { tag: 'Field Ops',     list: ['Territory mapping', 'Booth + collateral kit', 'Trained brand ambassadors'] },
  { tag: 'Lead Capture',  list: ['Tablet intake forms', 'QR-coded print', 'Live CRM sync'] },
  { tag: 'Reporting',     list: ['Daily activation report', 'Cost per qualified lead', 'Booked-visit attribution'] },
  { tag: 'Compliance',    list: ['HIPAA-aware intake', 'Consent capture', 'Photo + media releases'] },
];

export const METRICS = [
  { v: '320+',   k: 'Activations / yr',   d: 'Field events run for healthcare clients across DFW, Austin, Houston, and surrounding metros.' },
  { v: '$68',    k: 'Cost / qualified lead', d: 'Median cost per consult-ready lead from on-site activations across 2025 cohorts.' },
  { v: '4.1×',   k: 'ROAS',               d: 'Median return on field marketing spend, blended across community + B2B channels.' },
  { v: '11 days', k: 'Time to ramp',      d: 'From signed contract to first activated booth, including staffing and collateral.' },
];

export const PROCESS = [
  { k: 'Map',      d: 'Audit your service area, payer mix, and current referral graph. Surface the 10 highest-yield community + B2B touchpoints.' },
  { k: 'Build',    d: 'Design the booth, collateral, intake flow, and CRM hand-off. Train the territory reps on your tone, services, and compliance.' },
  { k: 'Activate', d: 'Weekly cadence of events and visits across your metro. Live reporting from the field - every lead, every booked visit.' },
  { k: 'Compound', d: 'Quarterly review of channel ROAS. Cut the low performers, double the winners. The territory plan compounds month over month.' },
];

export const SERVICE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Onsite Field Marketing for Healthcare',
  serviceType: 'Field Marketing · Community Activations · B2B Referrals',
  provider: {
    '@type': 'LocalBusiness',
    name: 'TheNextGen Healthcare Marketing',
    url: 'https://thenextgenhealth.com',
  },
  areaServed: ['Dallas', 'Fort Worth', 'Austin', 'Houston', 'San Antonio'],
  description:
    'Community activations, B2B referral visits, geo-targeted print, and sponsorships - staffed, attributed, and reported. Field marketing for clinics, medspas, urgent care, and multi-location healthcare brands.',
  offers: {
    '@type': 'Offer',
    description: '90-day field marketing pilot with full attribution dashboard.',
  },
};
