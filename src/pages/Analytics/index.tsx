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
  { title: 'Spreadsheet chaos', desc: 'Five tools, three reports, zero clarity.' },
  { title: 'No attribution', desc: 'You guess which channel actually books.' },
  { title: 'Reports that lie', desc: 'Vanity metrics hide the truth.' },
];

const OUTCOMES: OutcomeRow[] = [
  { label: 'Attribution accuracy', value: 'End-to-end' },
  { label: 'Reporting time', value: '−85%' },
  { label: 'Decision speed', value: '5× faster' },
  { label: 'ROI clarity', value: 'Per-channel' },
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
  { name: 'Dashboard Setup', desc: 'Live dashboards pulling from Ads, GA4, GBP, CRM, and your booking system.', icon: <PinIcon /> },
  { name: 'Conversion Tracking', desc: 'Phone, form, booking, revenue — every patient action attributed end-to-end.', icon: <LinkIcon /> },
  { name: 'Funnel Analysis', desc: 'Where patients drop off, which channels convert, what to fix next.', icon: <FileIcon /> },
  { name: 'Reporting', desc: 'Weekly Loom walkthroughs, monthly written report, quarterly strategy retros.', icon: <NetworkIcon /> },
  { name: 'Predictive Analytics', desc: 'Forecast next-quarter bookings and revenue from current pipeline.', icon: <StarIcon /> },
  { name: 'HIPAA-Safe Setup', desc: 'PHI-free dashboards, BAA-covered tooling, role-based access.', icon: <ChartIcon /> },
];

const STEPS: HowStep[] = [
  { num: '01', name: 'Audit', desc: 'Tool stack, tracking gaps, data quality.' },
  { num: '02', name: 'Strategy', desc: 'KPI framework and dashboard architecture locked.' },
  { num: '03', name: 'Execution', desc: 'Tracking deployed, dashboards built, team trained.' },
  { num: '04', name: 'Optimization', desc: 'Quarterly model refits, monthly insights review.' },
];

const STATS: ResultStat[] = [
  {
    num: (
      <>
        100<em>%</em>
      </>
    ),
    label: 'Channel attribution',
  },
  {
    num: (
      <>
        −85<em>%</em>
      </>
    ),
    label: 'Reporting time',
  },
  {
    num: (
      <>
        47<em>+</em>
      </>
    ),
    label: 'Live dashboards',
  },
  {
    num: (
      <>
        $12M<em>+</em>
      </>
    ),
    label: 'Revenue tracked',
  },
];

const CASES: CaseCard[] = [
  { href: 'https://thenextgenhealth.com/case-studies/analytics-reporting-case-1', emoji: '🏥', num: '$2M', numLbl: 'Tracked', sector: 'Emergency Room', name: 'Freestanding ER · Dallas', problem: 'No idea which channel drove revenue.', result: 'End-to-end attribution model.' },
  { href: 'https://thenextgenhealth.com/case-studies/analytics-reporting-case-2', emoji: '⚡', num: '−92%', numLbl: 'Report time', sector: 'Urgent Care', name: 'Multi-location · Houston', problem: '12 hours / week pulling reports.', result: 'Live multi-location dashboard.' },
  { href: 'https://thenextgenhealth.com/case-studies/analytics-reporting-case-3', emoji: '✨', num: '+38%', numLbl: 'Spend efficiency', sector: 'Cosmetic Surgery', name: 'Aesthetic clinic · Austin', problem: 'Ad spend allocated by gut feel.', result: 'ROAS-led budget reallocation.' },
  { href: 'https://thenextgenhealth.com/case-studies/analytics-reporting-case-4', emoji: '👨‍⚕️', num: '5×', numLbl: 'Decision speed', sector: 'Primary Care', name: 'Family medicine · San Antonio', problem: 'Monthly retros took 8 hours to prep.', result: 'Auto-refreshing dashboards.' },
  { href: 'https://thenextgenhealth.com/case-studies/analytics-reporting-case-5', emoji: '🧠', num: '+24%', numLbl: 'Patient LTV', sector: 'Mental Health', name: 'Therapy practice · Dallas', problem: "Couldn't track retention drivers.", result: 'Cohort + LTV analysis.' },
  { href: 'https://thenextgenhealth.com/case-studies/analytics-reporting-case-6', emoji: '🦷', num: '100%', numLbl: 'Coverage', sector: 'Dental Practice', name: 'General dentistry · Irving', problem: 'GBP, ads, organic — all separate.', result: 'Unified marketing dashboard.' },
];

const SERVICE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Healthcare Marketing Analytics & Reporting',
  provider: {
    '@type': 'Organization',
    name: 'TheNextGen Healthcare Marketing',
  },
  serviceType: 'Marketing Analytics',
};

const Analytics = () => {
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

export default Analytics;
