import type { ReactElement } from 'react';

/**
 * Home page — "Industries We Serve" section content.
 *
 * Eight specialty cards (left list) and six floating tags (right SVG visual)
 * each carry their own glyph. The large inline SVG diagram (orbits, hub,
 * data nodes) stays in `src/pages/Home/Industries.tsx` — it's bespoke art,
 * not data.
 */

const PlusIcon = () => (
  <svg width={14} height={14} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M10 3h4v7h7v4h-7v7h-4v-7H3v-4h7V3z" />
  </svg>
);

const ClockIcon = () => (
  <svg
    width={14}
    height={14}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2.4}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="9" />
    <polyline points="12 7 12 12 15 14" />
  </svg>
);

const SparkleIcon = () => (
  <svg width={14} height={14} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 2.2 13.7 9.2 20.8 11 13.7 12.8 12 19.8 10.3 12.8 3.2 11 10.3 9.2 12 2.2Z" />
    <path
      d="M19 3.6 19.8 5.9 22.1 6.6 19.8 7.4 19 9.7 18.2 7.4 15.9 6.6 18.2 5.9 19 3.6Z"
      opacity=".75"
    />
  </svg>
);

const ToothIcon = () => (
  <svg
    width={14}
    height={14}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2.2}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M8 3.2c-2.6 0-4.3 1.7-4.3 4.4 0 1.9.5 3.3 1 4.9.4 1.4.6 3 .9 4.6.3 1.6.9 3.8 1.7 3.8.7 0 1.1-1.4 1.4-3 .3-1.8.8-2.9 1.8-2.9h2.6c1 0 1.5 1.1 1.8 2.9.3 1.6.7 3 1.4 3 .8 0 1.4-2.2 1.7-3.8.3-1.6.5-3.2.9-4.6.5-1.6 1-3 1-4.9 0-2.7-1.7-4.4-4.3-4.4-1.6 0-2.8 1.1-4 1.1-1.2 0-2.4-1.1-4-1.1z" />
  </svg>
);

const BrainIcon = () => (
  <svg
    width={14}
    height={14}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2.2}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M9.5 3.5a2.8 2.8 0 0 0-2.8 2.8v.4A2.8 2.8 0 0 0 4 9.5v1.3a2.8 2.8 0 0 0 0 4.4v1.3a2.8 2.8 0 0 0 2.7 2.8 2.8 2.8 0 0 0 2.8 2.7" />
    <path d="M14.5 3.5a2.8 2.8 0 0 1 2.8 2.8v.4A2.8 2.8 0 0 1 20 9.5v1.3a2.8 2.8 0 0 1 0 4.4v1.3a2.8 2.8 0 0 1-2.7 2.8 2.8 2.8 0 0 1-2.8 2.7" />
    <line x1="12" y1="3.5" x2="12" y2="20.5" />
    <path d="M8 10h2M14 10h2M8 14h2M14 14h2" />
  </svg>
);

const BabyFaceIcon = () => (
  <svg
    width={14}
    height={14}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <circle cx="6.5" cy="6.5" r="2.5" />
    <circle cx="17.5" cy="6.5" r="2.5" />
    <circle cx="12" cy="14" r="7.5" />
    <circle cx="9.5" cy="13" r="1.1" fill="currentColor" stroke="none" />
    <circle cx="14.5" cy="13" r="1.1" fill="currentColor" stroke="none" />
    <path d="M9.6 16.6c.7.7 1.6 1 2.4 1s1.7-.3 2.4-1" />
  </svg>
);

const SpineIcon = () => (
  <svg
    width={14}
    height={14}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2.4}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M12 2v20" />
    <path d="M8 5h8" />
    <path d="M7 9h10" />
    <path d="M8 13h8" />
    <path d="M7 17h10" />
    <path d="M9 21h6" />
  </svg>
);

const StethoscopeIcon = () => (
  <svg
    width={14}
    height={14}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2.4}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M6 3v6a4 4 0 0 0 8 0V3" />
    <path d="M10 13v3a4 4 0 0 0 8 0v-2" />
    <circle cx="18" cy="11" r="2" />
  </svg>
);

export interface HomeIndustryTag {
  slot: 't1' | 't2' | 't3' | 't4' | 't5' | 't6';
  name: string;
  icon: ReactElement;
}

export interface HomeIndustrySpecialty {
  name: string;
  meta: string;
  tone: 'sage' | 'periwinkle' | 'clay';
  icon: ReactElement;
}

export const HOME_INDUSTRY_SPECIALTIES: readonly HomeIndustrySpecialty[] = [
  {
    name: 'Emergency Rooms',
    meta: '24/7 high-acuity acquisition',
    tone: 'sage',
    icon: <PlusIcon />,
  },
  {
    name: 'Urgent Care',
    meta: 'Walk-in volume vs. health systems',
    tone: 'periwinkle',
    icon: <ClockIcon />,
  },
  {
    name: 'MedSpas & Aesthetics',
    meta: 'Social + targeted Meta campaigns',
    tone: 'clay',
    icon: <SparkleIcon />,
  },
  { name: 'Dental Practices', meta: 'Locally-optimized growth', tone: 'sage', icon: <ToothIcon /> },
  {
    name: 'Chiropractic',
    meta: 'Recurring local patient flow',
    tone: 'periwinkle',
    icon: <SpineIcon />,
  },
  {
    name: 'Mental Health',
    meta: 'Discreet, demographic-driven',
    tone: 'clay',
    icon: <BrainIcon />,
  },
  {
    name: 'Primary Care',
    meta: 'Service-area patient demand',
    tone: 'sage',
    icon: <StethoscopeIcon />,
  },
  {
    name: 'Pediatrics',
    meta: 'Family-tailored growth strategy',
    tone: 'periwinkle',
    icon: <BabyFaceIcon />,
  },
];

export const HOME_INDUSTRY_TAGS: readonly HomeIndustryTag[] = [
  { slot: 't1', name: 'Emergency Room', icon: <PlusIcon /> },
  { slot: 't2', name: 'Urgent Care', icon: <ClockIcon /> },
  { slot: 't3', name: 'MedSpa', icon: <SparkleIcon /> },
  { slot: 't4', name: 'Dental', icon: <ToothIcon /> },
  { slot: 't5', name: 'Mental Health', icon: <BrainIcon /> },
  { slot: 't6', name: 'Pediatrics', icon: <BabyFaceIcon /> },
];

export const HOME_INDUSTRY_PILLARS: readonly string[] = [
  'Patient Acquisition Costs',
  'Competitive Dynamics',
  'Compliance Requirements',
];

export const HOME_INDUSTRY_COPY = {
  eyebrow: 'Industries',
  title: 'Industries We Serve',
  lead: 'Specialized marketing for every type of healthcare facility - because an ER and a MedSpa require fundamentally different growth strategies.',
  pillarsLabel: 'Every vertical varies on',
  // `<strong>Clinic Growth OS</strong>` rendered separately in the section
  // (so its inline emphasis is preserved). The rest of the strap copy:
  strapBefore: 'Clinic Growth OS',
  strapAfter:
    ' adapts to every clinical reality - from same-day appointment slots to 6-month elective procedure pipelines. Industry-specific playbooks, not a generic strategy.',
} as const;

export const HOME_INDUSTRY_STATS = [
  { label: 'campaigns launched', num: '500+' },
  { label: 'ad spend managed', num: '$10M+' },
  // The third stat's number uses the `&times;` JSX entity (rendered as ×).
  // We render that in the section file directly so the `&times;` survives.
  { label: 'average ROI', num: '3×' },
] as const;
