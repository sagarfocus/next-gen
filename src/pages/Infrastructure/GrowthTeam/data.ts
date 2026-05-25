import photoShree from '../../../assets/shree-gauli.png';
import photoBikash from '../../../assets/bikash-neupane.png';
import photoSonu from '../../../assets/sagar-dongol.png';
import photoSumit from '../../../assets/sumit-sharma.png';
import photoRahul from '../../../assets/rahul-roy.png';
import photoBijesh from '../../../assets/bijesh-khadgi.png';
import { SITE } from '@/content/site';

export interface Role {
  name: string;
  title: string;
  pitch: string;
  ships: string[];
  owns: string[];
  hours: string;
  photo: string;
}

export const ROLES: Role[] = [
  {
    name: 'Shree Gauli',
    title: 'Sr. Marketing Officer',
    pitch:
      'Leads strategy across every channel. Owns the roadmap from positioning through quarterly forecasts so nothing slips between disciplines.',
    ships: [
      'Quarterly marketing strategy + roadmap',
      'Cross-channel orchestration',
      'Forecasting against panel and revenue goals',
    ],
    owns: ['Strategy', 'Forecast accuracy', 'Retention'],
    hours: '20+ hrs / week',
    photo: photoShree,
  },
  {
    name: 'Bikash Neupane',
    title: 'Marketing & IT Project Manager',
    pitch:
      'Bridges marketing and tech. Runs the standups, keeps the trackers honest, and ensures the stack (CRM, analytics, integrations) supports what we ship.',
    ships: [
      'Weekly sprint planning + standups',
      'Project tracking + stakeholder updates',
      'Martech + integrations management',
    ],
    owns: ['On-time delivery', 'Tooling reliability', 'Project velocity'],
    hours: '20+ hrs / week',
    photo: photoBikash,
  },
  {
    name: 'Sonu Sagar Dongol',
    title: 'Paid Ads Specialist & Media Buyer',
    pitch:
      'Owns every paid dollar across Google, Meta, and programmatic. Healthcare-fluent, HIPAA-aware, accountable for CAC and ROAS.',
    ships: [
      'Weekly campaign builds, audiences, creative briefs',
      'Daily bid + budget management',
      'Conversion API + pipeline attribution',
    ],
    owns: ['CAC', 'ROAS', 'Booked visits'],
    hours: '30+ hrs / week',
    photo: photoSonu,
  },
  {
    name: 'Sumit Sharma',
    title: 'SEO Manager',
    pitch:
      'Senior operator for organic search and answer-engine optimisation. Knows YMYL ranking nuance, technical SEO, and local-pack mechanics cold.',
    ships: [
      'Technical SEO + Core Web Vitals',
      'Local pack and service-area architecture',
      'Answer-engine content briefs',
    ],
    owns: ['Organic sessions', 'Local pack', 'AEO citations'],
    hours: '20+ hrs / week',
    photo: photoSumit,
  },
  {
    name: 'Rahul Roy',
    title: 'Healthcare Content Writer',
    pitch:
      'Trained healthcare writer - not a generalist with a thesaurus. Writes to patient intent and clinician credibility across web, ads, and email.',
    ships: [
      'Service-line landing copy + provider bios',
      'Pillar content + condition deep-dives',
      'Ad creative, email cadences, SMS scripts',
    ],
    owns: ['Engagement', 'Booking conversion', 'Topical authority'],
    hours: '20+ hrs / week',
    photo: photoRahul,
  },
  {
    name: 'Bijesh Khadgi',
    title: 'Social Media Manager',
    pitch:
      'Builds the patient-facing voice across Instagram, TikTok, YouTube Shorts, and LinkedIn - a calendar your front desk can sustain.',
    ships: [
      'Monthly content calendar, 4 platforms',
      'Shot lists for in-clinic capture days',
      'Community management with response SLAs',
    ],
    owns: ['Follower growth', 'Saves + shares', 'DM-to-booking'],
    hours: '15+ hrs / week',
    photo: photoBijesh,
  },
];

export const CADENCE: { day: string; event: string; note: string }[] = [
  { day: 'MON', event: 'Sprint planning + KPI review', note: '60 min · cross-functional' },
  { day: 'TUE', event: 'Ads + SEO standups', note: '30 min · per discipline' },
  { day: 'WED', event: 'Creative review + content QA', note: 'Async + 45 min sync' },
  { day: 'THU', event: 'Build day - no meetings', note: 'Focused execution' },
  { day: 'FRI', event: 'Weekly performance report', note: 'Ships by 5pm local' },
];

export const SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'The Growth Team - Healthcare Marketing Department',
  serviceType: 'Embedded Marketing Team',
  provider: { '@id': `${SITE.url}#organization` },
  areaServed: { '@type': 'Country', name: 'United States' },
  audience: 'Multi-location healthcare practices, clinics, medspas',
};
