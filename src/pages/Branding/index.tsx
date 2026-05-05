import Hero from './Hero';
import ProblemOutcome from '../../components/service/ProblemOutcome';
import WhatWeDo from '../../components/service/WhatWeDo';
import HowItWorks from '../../components/service/HowItWorks';
import Results from '../../components/service/Results';
import CaseStudies from '../../components/service/CaseStudies';
import ServiceCTA from '../../components/service/ServiceCTA';
import type { PainPoint, OutcomeRow } from '../../components/service/ProblemOutcome';
import type { DoCard } from '../../components/service/WhatWeDo';
import type { HowStep } from '../../components/service/HowItWorks';
import type { ResultStat } from '../../components/service/Results';
import type { CaseCard } from '../../components/service/CaseStudies';

const PAINS: PainPoint[] = [
  { title: 'Forgettable identity', desc: "Patients can't tell you apart from the chain down the street." },
  { title: 'Inconsistent application', desc: 'Logo, colors, voice — different on every page.' },
  { title: 'Trust deficit', desc: "First-time visitors don't believe you're competent before they read." },
];

const OUTCOMES: OutcomeRow[] = [
  { label: 'Recall lift', value: '+62%' },
  { label: 'Trust score', value: 'A+ rating' },
  { label: 'Premium positioning', value: 'Established' },
  { label: 'Conversion rate', value: '+38%' },
];

const PinIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);
const LinkIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round">
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
  </svg>
);
const FileIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="9" y1="13" x2="15" y2="13" />
    <line x1="9" y1="17" x2="13" y2="17" />
  </svg>
);
const NetworkIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round">
    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
  </svg>
);
const StarIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 14.5 9 21 9.5 16 14 17.5 21 12 17.5 6.5 21 8 14 3 9.5 9.5 9" />
  </svg>
);
const ChartIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round">
    <line x1="4" y1="20" x2="4" y2="11" />
    <line x1="10" y1="20" x2="10" y2="4" />
    <line x1="16" y1="20" x2="16" y2="14" />
    <line x1="2" y1="20" x2="22" y2="20" />
  </svg>
);

const DO_CARDS: DoCard[] = [
  { name: 'Visual Identity', desc: 'Logo, color, type — built around how patients should feel in the waiting room.', icon: <PinIcon /> },
  { name: 'Messaging', desc: 'Voice, tone, taglines — clinically honest, warmly human.', icon: <LinkIcon /> },
  { name: 'Positioning', desc: "What you stand for, who you're not, why you're different.", icon: <FileIcon /> },
  { name: 'Brand System', desc: 'Tokens, components, rules — applied across web, print, social, and clinic.', icon: <NetworkIcon /> },
  { name: 'Patient Experience', desc: 'Signage, intake forms, post-visit touchpoints — branded end-to-end.', icon: <StarIcon /> },
  { name: 'Brand Guidelines', desc: 'Documented system your team can apply without us in the room.', icon: <ChartIcon /> },
];

const STEPS: HowStep[] = [
  { num: '01', name: 'Audit', desc: 'Current perception, competitor delta, gap analysis.' },
  { num: '02', name: 'Strategy', desc: 'Positioning, voice, and visual direction locked.' },
  { num: '03', name: 'Execution', desc: 'Identity built, system documented, applied across touchpoints.' },
  { num: '04', name: 'Optimization', desc: 'Quarterly brand health check, refresh cadence, scale plan.' },
];

const STATS: ResultStat[] = [
  {
    num: (
      <>
        +62<em>%</em>
      </>
    ),
    label: 'Brand recall',
  },
  {
    num: (
      <>
        A<em>+</em>
      </>
    ),
    label: 'Trust score',
  },
  {
    num: (
      <>
        +38<em>%</em>
      </>
    ),
    label: 'Conversion lift',
  },
  {
    num: (
      <>
        100<em>%</em>
      </>
    ),
    label: 'Touchpoint coverage',
  },
];

const CASES: CaseCard[] = [
  { href: 'https://thenextgenhealth.com/case-studies/brand-identity-design-case-1', emoji: '🏥', num: '+72%', numLbl: 'Recall', sector: 'Emergency Room', name: 'Freestanding ER · Dallas', problem: 'Mistaken for hospital ER repeatedly.', result: 'Distinct color system + voice.' },
  { href: 'https://thenextgenhealth.com/case-studies/brand-identity-design-case-2', emoji: '⚡', num: 'A+', numLbl: 'Trust score', sector: 'Urgent Care', name: 'Multi-location · Houston', problem: 'Inconsistent across 8 locations.', result: 'Brand system + per-location applications.' },
  { href: 'https://thenextgenhealth.com/case-studies/brand-identity-design-case-3', emoji: '✨', num: '+180%', numLbl: 'Premium leads', sector: 'Cosmetic Surgery', name: 'Aesthetic clinic · Austin', problem: 'Looked like a budget med-spa.', result: 'Editorial-grade rebrand.' },
  { href: 'https://thenextgenhealth.com/case-studies/brand-identity-design-case-4', emoji: '👨‍⚕️', num: '+44%', numLbl: 'Recall', sector: 'Primary Care', name: 'Family medicine · San Antonio', problem: 'Generic, forgettable identity.', result: 'Warm, distinctive visual system.' },
  { href: 'https://thenextgenhealth.com/case-studies/brand-identity-design-case-5', emoji: '🧠', num: '+58%', numLbl: 'Inquiries', sector: 'Mental Health', name: 'Therapy practice · Dallas', problem: 'Cold, clinical brand felt unwelcoming.', result: 'Warm, accessible identity.' },
  { href: 'https://thenextgenhealth.com/case-studies/brand-identity-design-case-6', emoji: '🦷', num: '+34%', numLbl: 'Conversion', sector: 'Dental Practice', name: 'General dentistry · Irving', problem: 'No premium positioning.', result: 'Modern, confident rebrand.' },
];

const SERVICE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Healthcare Brand Identity & Design',
  provider: {
    '@type': 'Organization',
    name: 'TheNextGen Healthcare Marketing',
  },
  serviceType: 'Brand Identity Design',
};

const Branding = () => {
  return (
    <>
      <Hero />
      <ProblemOutcome pains={PAINS} outcomes={OUTCOMES} />
      <WhatWeDo cards={DO_CARDS} />
      <HowItWorks steps={STEPS} />
      <Results stats={STATS} />
      <CaseStudies cases={CASES} />
      <ServiceCTA />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_SCHEMA) }}
      />
    </>
  );
};

export default Branding;
