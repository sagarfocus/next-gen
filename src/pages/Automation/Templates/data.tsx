import type { ReactNode } from 'react';
import patientVerificationImg from '@/assets/nextgen-image/Patientverificationimg.png';
import smsEmailImg from '@/assets/nextgen-image/Smsemailimg.png';
import reviewCollectionImg from '@/assets/nextgen-image/Reviewcollectionimg.png';
import realtimeEligibilityImg from '@/assets/nextgen-image/Realtimeeligibilityimg.png';
import gptBotImg from '@/assets/nextgen-image/Gptbotimg.png';
import dailyAiSocialImg from '@/assets/nextgen-image/Dailyaisocialimg.png';

/* ============================================================
   AUTOMATION · TEMPLATES — data + category illustrations.
   ============================================================ */

export type Tone = 'peri' | 'sage' | 'copper' | 'charcoal';
export type Category = 'Intake' | 'Reminders' | 'Reviews' | 'Insurance' | 'AI' | 'Social';
export type Compliance = 'HIPAA-aware' | 'PHI-free' | 'BAA required';

export interface Template {
  num: string;
  cat: Category;
  title: string;
  blurb: string;
  nodes: string;
  pull: string;
  tone: Tone;
  effort: string;
  saves: string;
  compliance: Compliance;
  img: string;
  imgAlt: string;
}

export const TEMPLATES: Template[] = [
  {
    num: '01',
    cat: 'Intake',
    title: 'Patient intake & insurance verification.',
    blurb:
      'A pre-visit packet that captures consent, demographics, and eligibility before the patient walks in — front desk untouched.',
    nodes: '7 nodes · N8N',
    pull: 'Front desk untouched.',
    tone: 'peri',
    effort: '~45 min setup',
    saves: 'Saves 6–9 hrs/week',
    compliance: 'BAA required',
    img: patientVerificationImg,
    imgAlt: 'Patient intake and insurance verification workflow illustration.',
  },
  {
    num: '02',
    cat: 'Reminders',
    title: 'SMS + email reminder cadence.',
    blurb:
      'A two-channel cadence that lifts show rate without spam — opt-in respected, quiet hours enforced, ICS attached.',
    nodes: '8 nodes · N8N',
    pull: '40% fewer no-shows.',
    tone: 'sage',
    effort: '~30 min setup',
    saves: 'Saves 4–6 hrs/week',
    compliance: 'HIPAA-aware',
    img: smsEmailImg,
    imgAlt: 'SMS and email reminder cadence workflow illustration.',
  },
  {
    num: '03',
    cat: 'Reviews',
    title: 'Sentiment-routed review collection.',
    blurb:
      'Happy patients land on Google; unhappy patients land in your inbox first. Reputation engine that compounds, never embarrasses.',
    nodes: '8 nodes · N8N',
    pull: 'Reputation runs itself.',
    tone: 'copper',
    effort: '~40 min setup',
    saves: '5× review velocity',
    compliance: 'PHI-free',
    img: reviewCollectionImg,
    imgAlt: 'Sentiment-routed review collection workflow illustration.',
  },
  {
    num: '04',
    cat: 'Insurance',
    title: 'Real-time eligibility bot.',
    blurb:
      'Verifies coverage before the appointment — clearinghouse → CRM → front desk dashboard, all in under thirty seconds.',
    nodes: '9 nodes · N8N',
    pull: 'Verified before the door.',
    tone: 'charcoal',
    effort: '~60 min setup',
    saves: 'Saves 8–12 hrs/week',
    compliance: 'BAA required',
    img: realtimeEligibilityImg,
    imgAlt: 'Real-time insurance eligibility bot workflow illustration.',
  },
  {
    num: '05',
    cat: 'AI',
    title: 'GPT chatbot for lead capture.',
    blurb:
      'A scoped GPT assistant that qualifies leads, routes by intent, and books — without ever inventing a clinical answer.',
    nodes: '10 nodes · N8N',
    pull: 'Qualifies while you sleep.',
    tone: 'peri',
    effort: '~75 min setup',
    saves: '24/7 lead capture',
    compliance: 'PHI-free',
    img: gptBotImg,
    imgAlt: 'GPT chatbot for lead capture workflow illustration.',
  },
  {
    num: '06',
    cat: 'Social',
    title: 'Daily AI social auto-poster.',
    blurb:
      'A daily content drip across LinkedIn, Instagram, and X — sourced from your blog, captioned on-brand, scheduled around your calendar.',
    nodes: '9 nodes · N8N',
    pull: 'Set once, ship daily.',
    tone: 'copper',
    effort: '~50 min setup',
    saves: '3 hrs/week creative',
    compliance: 'PHI-free',
    img: dailyAiSocialImg,
    imgAlt: 'Daily AI social auto-poster workflow illustration.',
  },
];

export const FILTERS: Array<'All' | Category> = [
  'All',
  'Intake',
  'Reminders',
  'Reviews',
  'Insurance',
  'AI',
  'Social',
];

const ORIGIN =
  typeof window !== 'undefined' ? window.location.origin : 'https://thenextgenhealth.com';

export const TEMPLATES_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Healthcare automation template library',
  description:
    'Six healthcare-grade workflow automations covering patient intake, reminders, reviews, insurance verification, lead capture, and social posting.',
  numberOfItems: TEMPLATES.length,
  itemListElement: TEMPLATES.map((t, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: t.title.replace(/\.$/, ''),
    description: `${t.cat} workflow - ${t.nodes}. ${t.saves}. ${t.compliance}.`,
    url: `${ORIGIN}/automation/templates#tpl-${t.num}`,
  })),
};

/* ---------- Per-category illustration (Swiss minimal SVG, brand colors) ---------- */
export const CategoryArt = ({ cat }: { cat: Category }): ReactNode => {
  const common = {
    viewBox: '0 0 240 160',
    xmlns: 'http://www.w3.org/2000/svg',
    'aria-hidden': true as const,
  };
  switch (cat) {
    case 'Intake':
      return (
        <svg {...common}>
          <rect width="240" height="160" fill="#F8F9FA" />
          <circle cx="48" cy="32" r="36" fill="rgba(87,109,181,0.10)" />
          <rect
            x="68"
            y="34"
            width="104"
            height="100"
            rx="10"
            fill="#FFFFFF"
            stroke="#1A2438"
            strokeWidth="1.5"
          />
          <line x1="80" y1="54" x2="160" y2="54" stroke="#1A2438" strokeWidth="1.2" />
          <line x1="80" y1="68" x2="148" y2="68" stroke="#1A2438" strokeWidth="1.2" opacity="0.6" />
          <line x1="80" y1="82" x2="156" y2="82" stroke="#1A2438" strokeWidth="1.2" opacity="0.4" />
          <rect x="80" y="100" width="60" height="14" rx="3" fill="#B38B6D" />
          <circle cx="190" cy="124" r="14" fill="#8FBC8F" />
          <path
            d="M184 124 L189 129 L196 119"
            stroke="#FFFFFF"
            strokeWidth="2.2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case 'Reminders':
      return (
        <svg {...common}>
          <rect width="240" height="160" fill="#F8F9FA" />
          <circle cx="200" cy="40" r="34" fill="rgba(143,188,143,0.16)" />
          <path
            d="M120 32 C 100 32 88 48 88 70 V 90 L 80 100 H 160 L 152 90 V 70 C 152 48 140 32 120 32 Z"
            fill="#FFFFFF"
            stroke="#1A2438"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
          <circle cx="120" cy="108" r="10" fill="#1A2438" />
          <line
            x1="120"
            y1="20"
            x2="120"
            y2="28"
            stroke="#1A2438"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <rect x="30" y="120" width="40" height="20" rx="10" fill="#8FBC8F" />
          <text
            x="50"
            y="134"
            textAnchor="middle"
            fontFamily="ui-monospace"
            fontSize="10"
            fontWeight="800"
            fill="#FFFFFF"
          >
            SMS
          </text>
          <rect x="170" y="120" width="44" height="20" rx="10" fill="#B38B6D" />
          <text
            x="192"
            y="134"
            textAnchor="middle"
            fontFamily="ui-monospace"
            fontSize="10"
            fontWeight="800"
            fill="#FFFFFF"
          >
            MAIL
          </text>
        </svg>
      );
    case 'Reviews':
      return (
        <svg {...common}>
          <rect width="240" height="160" fill="#F8F9FA" />
          <circle cx="40" cy="120" r="32" fill="rgba(179,139,109,0.18)" />
          <circle cx="200" cy="40" r="36" fill="rgba(87,109,181,0.12)" />
          <g transform="translate(120 80)">
            <polygon
              points="0,-44 14,-14 46,-10 22,12 30,44 0,28 -30,44 -22,12 -46,-10 -14,-14"
              fill="#B38B6D"
            />
            <polygon
              points="0,-22 7,-7 23,-5 11,6 15,22 0,14 -15,22 -11,6 -23,-5 -7,-7"
              fill="#1A2438"
              opacity="0.9"
            />
          </g>
          <rect x="64" y="120" width="112" height="6" rx="3" fill="rgba(26,36,56,0.18)" />
        </svg>
      );
    case 'Insurance':
      return (
        <svg {...common}>
          <rect width="240" height="160" fill="#F8F9FA" />
          <circle cx="200" cy="120" r="36" fill="rgba(143,188,143,0.16)" />
          <path
            d="M120 24 L 76 40 V 88 C 76 116 96 140 120 148 C 144 140 164 116 164 88 V 40 Z"
            fill="#FFFFFF"
            stroke="#1A2438"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
          <path
            d="M100 92 L 114 106 L 142 78"
            stroke="#8FBC8F"
            strokeWidth="3.2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="48" cy="36" r="6" fill="#B38B6D" />
          <line
            x1="180"
            y1="50"
            x2="216"
            y2="50"
            stroke="#1A2438"
            strokeWidth="1.2"
            opacity="0.45"
          />
          <line
            x1="180"
            y1="62"
            x2="208"
            y2="62"
            stroke="#1A2438"
            strokeWidth="1.2"
            opacity="0.30"
          />
        </svg>
      );
    case 'AI':
      return (
        <svg {...common}>
          <rect width="240" height="160" fill="#F8F9FA" />
          <circle cx="40" cy="40" r="32" fill="rgba(87,109,181,0.14)" />
          <circle cx="200" cy="120" r="34" fill="rgba(212,175,55,0.18)" />
          <rect
            x="68"
            y="44"
            width="104"
            height="76"
            rx="14"
            fill="#FFFFFF"
            stroke="#1A2438"
            strokeWidth="1.8"
          />
          <circle cx="96" cy="80" r="6" fill="#1A2438" />
          <circle cx="120" cy="80" r="6" fill="#576DB5" />
          <circle cx="144" cy="80" r="6" fill="#8FBC8F" />
          <path
            d="M96 102 L 92 116 L 110 102 Z"
            fill="#FFFFFF"
            stroke="#1A2438"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          <line
            x1="120"
            y1="32"
            x2="120"
            y2="22"
            stroke="#1A2438"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <circle cx="120" cy="18" r="5" fill="#B38B6D" />
        </svg>
      );
    case 'Social':
      return (
        <svg {...common}>
          <rect width="240" height="160" fill="#F8F9FA" />
          <circle cx="60" cy="120" r="30" fill="rgba(87,109,181,0.14)" />
          <circle cx="180" cy="40" r="34" fill="rgba(143,188,143,0.16)" />
          <circle cx="60" cy="44" r="14" fill="#FFFFFF" stroke="#1A2438" strokeWidth="2" />
          <circle cx="180" cy="116" r="14" fill="#FFFFFF" stroke="#1A2438" strokeWidth="2" />
          <circle cx="120" cy="80" r="20" fill="#FFFFFF" stroke="#1A2438" strokeWidth="2" />
          <line
            x1="72"
            y1="54"
            x2="106"
            y2="72"
            stroke="#B38B6D"
            strokeWidth="2"
            strokeDasharray="3 4"
          />
          <line
            x1="134"
            y1="88"
            x2="166"
            y2="108"
            stroke="#B38B6D"
            strokeWidth="2"
            strokeDasharray="3 4"
          />
          <line
            x1="106"
            y1="88"
            x2="74"
            y2="106"
            stroke="#8FBC8F"
            strokeWidth="2"
            strokeDasharray="3 4"
          />
        </svg>
      );
  }
};

export const STATS = [
  {
    id: '01',
    label: 'Library size',
    value: '06',
    desc: 'Workflows covering the six moments most clinics leak hours into every week.',
    tone: 'gold' as const,
  },
  {
    id: '02',
    label: 'Median payback',
    value: '< 14 d',
    desc: 'Most clinics see the first workflow pay back its setup time inside two weeks.',
    tone: 'sage' as const,
  },
  {
    id: '03',
    label: 'Combined value',
    value: '30+ hrs/wk',
    desc: 'The library at full deployment recovers more than thirty front-desk hours per week.',
    tone: 'ink' as const,
  },
];

export const HOW_STEPS = [
  {
    num: '01',
    title: 'Browse',
    desc: 'Pick the workflow that maps to the hour-leak you want to plug first — by category, compliance posture, or ROI.',
  },
  {
    num: '02',
    title: 'Import',
    desc: 'Drop the spec into your N8N instance — every node is documented, every credential slot is labelled.',
  },
  {
    num: '03',
    title: 'Customise',
    desc: 'Swap in your CRM, your scheduler, your messaging stack. Brand the patient-facing surfaces with your voice.',
  },
  {
    num: '04',
    title: 'Ship',
    desc: 'Run a 24-hour pilot, then turn the workflow on for the front desk. Most workflows pay back inside two weeks.',
  },
];

export const WHO_FOR = [
  {
    label: 'Front-desk lead',
    desc: 'You want every patient touchpoint logged, reminded, and reviewed — without owning a new tool yourself.',
  },
  {
    label: 'Operations director',
    desc: 'You want the hour-leaks closed and the SOP documented in one place every clinic can audit.',
  },
  {
    label: 'Marketing lead',
    desc: 'You want the review engine running, the lead capture qualifying, and the social feed shipping — daily, automatically.',
  },
];

export const PROMISES = [
  'Every workflow is yours to keep — no retainer, no usage cap.',
  'Every spec is documented in plain language, not just node-soup.',
  'Every compliance posture is declared up front, before deploy.',
  'Every workflow ships with an SOP your team can audit.',
];

export const RELATED = [
  {
    to: '/automation',
    cat: 'Overview',
    title: 'Automation, end-to-end.',
    desc: 'How the library, the custom builds, and the ops layer all hook together.',
  },
  {
    to: '/automation/more-info',
    cat: 'Process',
    title: 'How we build automations.',
    desc: 'The discovery → spec → ship cadence we follow for every workflow that leaves the studio.',
  },
  {
    to: '/free-growth-audit',
    cat: 'Audit',
    title: 'The free growth audit.',
    desc: 'A five-day audit that surfaces the hour-leaks your library will close first.',
  },
];
