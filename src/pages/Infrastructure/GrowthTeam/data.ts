import photoShree from '../../../assets/shree-gauli.png';
import photoBikash from '../../../assets/bikash-neupane.png';
import photoSonu from '../../../assets/sagar-dongol.png';
import photoSumit from '../../../assets/sumit-sharma.png';
import photoRahul from '../../../assets/rahul-roy.png';
import photoBijesh from '../../../assets/bijesh-khadgi.png';

export interface Role {
  num: string;
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
    num: '01',
    name: 'Shree Gauli',
    title: 'SEO & AEO Strategist',
    pitch: 'Senior strategist for organic search and answer-engine optimisation. Knows YMYL ranking nuance cold.',
    ships: [
      'Technical SEO + Core Web Vitals',
      'Local pack and service-area architecture',
      'Answer-engine content briefs',
    ],
    owns: ['Organic sessions', 'Local pack', 'AEO citations'],
    hours: '20+ hrs / week',
    photo: photoShree,
  },
  {
    num: '02',
    name: 'Bikash Neupane',
    title: 'Medical Content Writer',
    pitch: 'Trained healthcare writer - not a generalist with a thesaurus. Writes to patient intent and clinician credibility.',
    ships: [
      'Service-line landing copy + provider bios',
      'Pillar content + condition deep-dives',
      'Ad creative, email cadences, SMS scripts',
    ],
    owns: ['Engagement', 'Booking conversion', 'Topical authority'],
    hours: '20+ hrs / week',
    photo: photoBikash,
  },
  {
    num: '03',
    name: 'Sonu Sagar Dangol',
    title: 'Social Media Manager',
    pitch: 'Builds the patient-facing voice across Instagram, TikTok, YouTube Shorts, and LinkedIn - calendar your front desk can sustain.',
    ships: [
      'Monthly content calendar, 4 platforms',
      'Shot lists for in-clinic capture days',
      'Community management with response SLAs',
    ],
    owns: ['Follower growth', 'Saves + shares', 'DM-to-booking'],
    hours: '15+ hrs / week',
    photo: photoSonu,
  },
  {
    num: '04',
    name: 'Sumit Sharma',
    title: 'Account Director',
    pitch: 'Your single point of accountability. Runs weekly standups, monthly reviews, quarterly forecasts against panel goals.',
    ships: [
      'Weekly performance reports + forecasts',
      'Monthly strategy review',
      'Quarterly business reviews',
    ],
    owns: ['Total pipeline', 'Forecast accuracy', 'Retention'],
    hours: '10+ hrs / week',
    photo: photoSumit,
  },
  {
    num: '05',
    name: 'Rahul Roy',
    title: 'Dedicated Ads Manager',
    pitch: 'Owns every paid dollar across Google, Meta, and programmatic. Healthcare-fluent, HIPAA-aware, accountable for CAC.',
    ships: [
      'Weekly campaign builds, audiences, creative briefs',
      'Daily bid + budget management',
      'Conversion API + pipeline attribution',
    ],
    owns: ['CAC', 'ROAS', 'Booked visits'],
    hours: '30+ hrs / week',
    photo: photoRahul,
  },
  {
    num: '06',
    name: 'Bijesh Khadgi',
    title: 'Web & Conversion Engineer',
    pitch: 'A developer who treats your site as the highest-leverage asset in the funnel. Speed, accessibility, instrumentation.',
    ships: [
      'Page-speed and a11y remediation',
      'Booking-funnel drop-off instrumentation',
      'A/B testing infrastructure',
    ],
    owns: ['Core Web Vitals', 'Booking completion', 'Site reliability'],
    hours: '10+ hrs / week',
    photo: photoBijesh,
  },
];

export const CADENCE: { day: string; event: string; note: string }[] = [
  { day: 'MON', event: 'Sprint planning + KPI review',  note: '60 min · cross-functional'  },
  { day: 'TUE', event: 'Ads + SEO standups',            note: '30 min · per discipline'    },
  { day: 'WED', event: 'Creative review + content QA',  note: 'Async + 45 min sync'        },
  { day: 'THU', event: 'Build day - no meetings',       note: 'Focused execution'          },
  { day: 'FRI', event: 'Weekly performance report',     note: 'Ships by 5pm local'         },
];

export const SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'The Growth Team - Healthcare Marketing Department',
  serviceType: 'Embedded Marketing Team',
  audience: 'Multi-location healthcare practices, clinics, medspas',
};
