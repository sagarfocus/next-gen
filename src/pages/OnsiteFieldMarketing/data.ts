export const FIELD_CHANNELS = [
  {
    n: '01',
    name: 'Community Events',
    summary: 'Health fairs · school sports physicals · senior centers · wellness days',
    desc: 'A dedicated street team books, staffs, and reports on the 15-25 highest-yield community moments per metro. Branded booth, screening tablets, and same-day lead handoff to your front desk.',
    tags: ['Booth + signage', 'Screening table', 'Same-day handoff', 'Photo release'],
  },
  {
    n: '02',
    name: 'B2B Referral Visits',
    summary: 'PCPs · OB-GYNs · urgent care · gyms · schools · employers',
    desc: 'Quarterly visit cadence with named territory reps. Co-branded literature, lunch-and-learns, and a CRM-tracked referral loop so every drop-in becomes a measurable downstream consult.',
    tags: ['Named territory rep', 'Co-branded leave-behinds', 'Lunch & learns', 'Referral loop'],
  },
  {
    n: '03',
    name: 'Door-to-Door Geo Drops',
    summary: 'Hyper-local print + intake card distribution',
    desc: 'Targeted ZIP-level walks aligned with your highest-paying procedure. QR-tracked print pieces, every door an attributable touch in the dashboard.',
    tags: ['ZIP walk plan', 'QR-tracked print', 'Crew uniforms', 'Daily route reports'],
  },
  {
    n: '04',
    name: 'Sponsorships + Activations',
    summary: 'Local sports leagues · charity 5Ks · festival booths',
    desc: 'Sponsorship deals that lock in screening tables, signage, and post-event lead exports. We negotiate the deal, staff the booth, and measure the ROI down to first-visit revenue.',
    tags: ['Deal negotiation', 'Asset placement', 'Lead exports', 'Post-event report'],
  },
];

export const DELIVERABLES = [
  {
    tag: 'Field Ops',
    list: [
      'Territory mapping + ZIP scoring',
      'Booth, signage, collateral kit',
      'Trained brand ambassadors',
      'Crew uniforms + COI binders',
    ],
  },
  {
    tag: 'Lead Capture',
    list: [
      'Tablet intake forms',
      'QR-coded print pieces',
      'Live CRM sync (HubSpot, Salesforce, custom)',
      'Same-day front-desk handoff',
    ],
  },
  {
    tag: 'Reporting',
    list: [
      'Daily activation report',
      'Cost per qualified lead',
      'Booked-visit attribution',
      'Quarterly channel-ROAS review',
    ],
  },
  {
    tag: 'Compliance',
    list: [
      'HIPAA-aware intake flow',
      'Consent + photo releases',
      'BAA on every downstream tool',
      'OSHA-trained event ops',
    ],
  },
];

export const METRICS = [
  {
    v: '320',
    unit: '+',
    k: 'Activations / yr',
    d: 'Field events run for healthcare clients across DFW, Austin, Houston, and surrounding metros.',
  },
  {
    v: '$68',
    k: 'Cost / qualified lead',
    d: 'Median cost per consult-ready lead from on-site activations across 2025 cohorts.',
  },
  {
    v: '4.1',
    unit: '×',
    k: 'ROAS',
    d: 'Median return on field marketing spend, blended across community + B2B channels.',
  },
  {
    v: '11',
    unit: ' days',
    k: 'Time to ramp',
    d: 'From signed contract to first activated booth, including staffing and collateral.',
  },
];

export const PROCESS = [
  {
    n: '01',
    k: 'Map',
    t: 'Week 1',
    d: 'Audit your service area, payer mix, and current referral graph. Surface the 10 highest-yield community and B2B touchpoints per metro.',
  },
  {
    n: '02',
    k: 'Build',
    t: 'Week 2-3',
    d: 'Design the booth, collateral, intake flow, and CRM hand-off. Train the territory reps on your tone, services, and compliance posture.',
  },
  {
    n: '03',
    k: 'Activate',
    t: 'Week 4+',
    d: 'Weekly cadence of events and visits across your metro. Live reporting from the field — every lead, every booked visit, every dollar accounted for.',
  },
  {
    n: '04',
    k: 'Compound',
    t: 'Quarterly',
    d: 'Channel-ROAS review. Cut the low performers, double the winners, and refit the territory plan so the channel compounds month over month.',
  },
];

export const CHALLENGES = [
  'Empty booths and forgotten event swag',
  'Referral relationships that fade after the first visit',
  'Print drops with no way to measure response',
  'Sponsorships that look great but produce no patients',
  'Field reps with no training in your service lines',
  'Lead lists exported to a spreadsheet and never followed up',
  'Front desks blindsided by walk-ins from the event',
  'HIPAA-risky intake on paper clipboards',
  'No attribution from activation to booked first visit',
  'No quarterly review of which channels are actually working',
  'Vendor invoices stacked with mystery line items',
  'Territory reps who quit before the third quarter',
];

import { SITE } from '@/content/site';

export const SERVICE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Onsite Field Marketing for Healthcare',
  serviceType: 'Field Marketing · Community Activations · B2B Referrals',
  provider: { '@id': `${SITE.url}#organization` },
  areaServed: ['Dallas', 'Fort Worth', 'Austin', 'Houston', 'San Antonio'],
  description:
    'Community activations, B2B referral visits, geo-targeted print, and sponsorships — staffed, attributed, and reported. Field marketing for clinics, medspas, urgent care, and multi-location healthcare brands.',
  offers: {
    '@type': 'Offer',
    description: '90-day field marketing pilot with full attribution dashboard.',
  },
};
