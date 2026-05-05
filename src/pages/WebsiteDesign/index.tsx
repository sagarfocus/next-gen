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
  { title: 'Slow site', desc: '5+ second loads. Patients leave before booking.' },
  { title: 'Confusing booking flow', desc: '5 clicks to a phone number nobody picks up.' },
  { title: 'Outdated look', desc: 'Site says 2014, your practice says 2026.' },
];

const OUTCOMES: OutcomeRow[] = [
  { label: 'Conversion rate', value: '7.4% avg' },
  { label: 'Page speed', value: '98 / 100' },
  { label: 'Mobile UX', value: 'A+ rating' },
  { label: 'Booking flow', value: '2 taps' },
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
  { name: 'UX Design', desc: 'Patient journey maps drive every layout, click target, and copy choice.', icon: <PinIcon /> },
  { name: 'Conversion Design', desc: 'Hero, proof, offer, CTA — every section earns its scroll.', icon: <LinkIcon /> },
  { name: 'Speed Optimization', desc: 'Sub-2s loads on 4G, image pipeline, lazy-load, edge cached.', icon: <FileIcon /> },
  { name: 'Mobile-First', desc: "70% of patient traffic is mobile — that's where the design starts.", icon: <NetworkIcon /> },
  { name: 'CMS & Handoff', desc: 'Built on Webflow, WordPress, or Shopify — your team owns it after.', icon: <StarIcon /> },
  { name: 'Accessibility', desc: 'WCAG AA compliant by default. Healthcare requires it.', icon: <ChartIcon /> },
];

const STEPS: HowStep[] = [
  { num: '01', name: 'Audit', desc: 'Performance, UX, and conversion benchmark.' },
  { num: '02', name: 'Strategy', desc: 'Information architecture and page-by-page brief.' },
  { num: '03', name: 'Execution', desc: 'Design system, build, content load, QA.' },
  { num: '04', name: 'Optimization', desc: 'A/B tests, heatmaps, monthly performance retro.' },
];

const STATS: ResultStat[] = [
  {
    num: (
      <>
        7.4<em>%</em>
      </>
    ),
    label: 'Avg conversion rate',
  },
  {
    num: (
      <>
        98<em>/100</em>
      </>
    ),
    label: 'Page speed score',
  },
  {
    num: (
      <>
        −72<em>%</em>
      </>
    ),
    label: 'Bounce rate',
  },
  {
    num: (
      <>
        A<em>+</em>
      </>
    ),
    label: 'Mobile UX rating',
  },
];

const CASES: CaseCard[] = [
  { href: 'https://thenextgenhealth.com/case-studies/website-design-dev-case-1', emoji: '🏥', num: '+62%', numLbl: 'Bookings', sector: 'Emergency Room', name: 'Freestanding ER · Dallas', problem: '8s mobile load, 2014 design.', result: 'Sub-2s rebuild on Webflow.' },
  { href: 'https://thenextgenhealth.com/case-studies/website-design-dev-case-2', emoji: '⚡', num: '8.4%', numLbl: 'CVR', sector: 'Urgent Care', name: 'Multi-location · Houston', problem: 'No location pages, broken booking.', result: 'Per-location pages + 2-tap flow.' },
  { href: 'https://thenextgenhealth.com/case-studies/website-design-dev-case-3', emoji: '✨', num: '+150%', numLbl: 'Leads', sector: 'Cosmetic Surgery', name: 'Aesthetic clinic · Austin', problem: 'Outdated look hurt premium positioning.', result: 'Editorial-style brand redesign.' },
  { href: 'https://thenextgenhealth.com/case-studies/website-design-dev-case-4', emoji: '👨‍⚕️', num: '6.8%', numLbl: 'CVR', sector: 'Primary Care', name: 'Family medicine · San Antonio', problem: 'Weak mobile UX, cluttered nav.', result: 'Mobile-first rebuild + clean IA.' },
  { href: 'https://thenextgenhealth.com/case-studies/website-design-dev-case-5', emoji: '🧠', num: '+88%', numLbl: 'Form fills', sector: 'Mental Health', name: 'Therapy practice · Dallas', problem: 'Cold tone, hard to find a path forward.', result: 'Empathetic copy + clear booking.' },
  { href: 'https://thenextgenhealth.com/case-studies/website-design-dev-case-6', emoji: '🦷', num: '4.2s', numLbl: '→ 1.6s', sector: 'Dental Practice', name: 'General dentistry · Irving', problem: 'Slow, image-heavy pages.', result: 'Speed pipeline + WebP everywhere.' },
];

const SERVICE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Healthcare Website Design & Development',
  provider: {
    '@type': 'Organization',
    name: 'TheNextGen Healthcare Marketing',
  },
  serviceType: 'Website Design & Development',
};

const WebsiteDesign = () => {
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

export default WebsiteDesign;
