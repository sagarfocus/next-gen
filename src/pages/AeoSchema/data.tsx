export const COLORS = {
  navy: '#1A2438',
  navy2: '#2D3748',
  body: '#4A5568',
  muted: '#718096',
  cta: '#576DB5',
  ctaSoft: 'rgba(87, 109, 181, 0.12)',
  ctaWash: 'rgba(87, 109, 181, 0.05)',
  tan: '#B38B6D',
  sage: '#5A8F5A',
  mint: '#EBF4DD',
  paper: '#FAFAF8',
};

export const STATS = [
  { v: '12', l: 'Schema types implemented' },
  { v: '88%', l: 'AI Overview eligibility' },
  { v: '100%', l: 'Validation pass rate' },
];

export interface Shift {
  n: string;
  headline: string;
  body: string;
}

export const SHIFTS: Shift[] = [
  {
    n: '01',
    headline: 'Search is becoming an answer engine.',
    body: 'Generative results now resolve a third of branded health queries before the user ever sees the blue links. The practice cited inside the answer wins; the rest disappear.',
  },
  {
    n: '02',
    headline: 'Schema is the underwriting layer.',
    body: 'AI engines need structured assertions about who you are, what you do, and where. Without that, the model defaults to whichever competitor stated it more clearly.',
  },
  {
    n: '03',
    headline: 'Editorial structure outranks copy.',
    body: 'Question-led headings, source-backed claims, and clean entity markup outperform unstructured prose on every conversational query we have benchmarked.',
  },
];

export interface SchemaGroup {
  num: string;
  group: string;
  tag: string;
  description: string;
  types: string[];
  tone: { hex: string; soft: string };
}

export const GROUPS: SchemaGroup[] = [
  {
    num: '01',
    group: 'Entity',
    tag: 'Who · Where',
    description:
      'Who you are, where you are, and how you are related to other entities in the practice.',
    types: ['Organization', 'MedicalClinic', 'Physician', 'LocalBusiness'],
    tone: { hex: '#576DB5', soft: 'rgba(87, 109, 181, 0.14)' },
  },
  {
    num: '02',
    group: 'Content',
    tag: 'Claims · Answers',
    description:
      'What you are saying about clinical topics. The substrate AI engines extract answers from.',
    types: ['MedicalCondition', 'MedicalProcedure', 'FAQPage', 'Article'],
    tone: { hex: '#B38B6D', soft: 'rgba(179, 139, 109, 0.16)' },
  },
  {
    num: '03',
    group: 'Operations',
    tag: 'When · How',
    description:
      'Practical signals that determine whether you appear in time-sensitive or insurance-led queries.',
    types: ['OpeningHours', 'AcceptedInsurance', 'AreaServed', 'Review'],
    tone: { hex: '#5A8F5A', soft: 'rgba(143, 188, 143, 0.18)' },
  },
];

const IconValidated = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M12 2 4 6v6c0 5 3.5 9 8 10 4.5-1 8-5 8-10V6z" />
    <polyline points="9 12 11 14 15 10" />
  </svg>
);
const IconAnswerable = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="9" />
    <path d="M9.5 9.5a2.5 2.5 0 1 1 3.5 2.3c-.6.3-1 .9-1 1.7" />
    <line x1="12" y1="17" x2="12" y2="17.5" />
  </svg>
);
const IconSourced = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M10 13a5 5 0 0 0 7.5.5l3-3a5 5 0 0 0-7-7l-1.5 1.5" />
    <path d="M14 11a5 5 0 0 0-7.5-.5l-3 3a5 5 0 0 0 7 7l1.5-1.5" />
  </svg>
);

export interface Readiness {
  k: string;
  d: string;
  icon: React.ReactNode;
}

export const READINESS: Readiness[] = [
  {
    k: 'Validated',
    d: 'Every page passes Rich Results test with zero errors and zero warnings on entity-level properties.',
    icon: <IconValidated />,
  },
  {
    k: 'Answerable',
    d: 'Every service page leads with a phrased patient question and answers it above the fold in three sentences or fewer.',
    icon: <IconAnswerable />,
  },
  {
    k: 'Sourced',
    d: 'Editorial pieces include linkable, attributable sources. AI engines prefer practices that show their work.',
    icon: <IconSourced />,
  },
];
