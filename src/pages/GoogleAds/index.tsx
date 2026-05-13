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
  { title: 'Burning ad spend', desc: "Bids climb but bookings don't. No conversion clarity." },
  { title: 'Wasted clicks', desc: 'Broad-match traffic that never books.' },
  { title: 'No attribution', desc: "You can't tell which keyword booked which patient." },
];

const OUTCOMES: OutcomeRow[] = [
  { label: 'CPA', value: '−60%' },
  { label: 'ROAS', value: '4.2× avg' },
  { label: 'Conversion rate', value: '+92%' },
  { label: 'Wasted spend', value: 'Eliminated' },
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
  { name: 'Campaign Setup', desc: 'Account architecture, audience layers, ad groups built around real patient intent.', icon: <PinIcon /> },
  { name: 'Conversion Tracking', desc: 'Phone, form, booking — every patient action attributed back to its first ad click.', icon: <LinkIcon /> },
  { name: 'ROI Optimization', desc: 'Bid strategy, negative keywords, budget pacing tuned weekly against ROAS targets.', icon: <FileIcon /> },
  { name: 'Creative Testing', desc: 'Multi-variant headlines and visuals A/B tested every two weeks.', icon: <NetworkIcon /> },
  { name: 'Audience Segmentation', desc: 'In-market, custom-intent, and remarketing layers tuned to clinic specialties.', icon: <StarIcon /> },
  { name: 'Live Reporting', desc: 'Live ROAS dashboard, weekly Loom walkthrough, monthly written report.', icon: <ChartIcon /> },
];

const STEPS: HowStep[] = [
  { num: '01', name: 'Audit', desc: 'Account, conversions, and historical spend reviewed.' },
  { num: '02', name: 'Strategy', desc: 'Campaign architecture and KPI targets locked.' },
  { num: '03', name: 'Execution', desc: 'Campaigns launched, tracking deployed, creative live.' },
  { num: '04', name: 'Optimization', desc: 'Weekly bid + budget tuning, monthly retro.' },
];

const STATS: ResultStat[] = [
  {
    num: (
      <>
        4.2<em>×</em>
      </>
    ),
    label: 'Avg ROAS',
  },
  {
    num: (
      <>
        −60<em>%</em>
      </>
    ),
    label: 'CPA reduction',
  },
  {
    num: (
      <>
        $8M<em>+</em>
      </>
    ),
    label: 'Patient revenue',
  },
  {
    num: (
      <>
        92<em>%</em>
      </>
    ),
    label: 'Conversion lift',
  },
];

const CASES: CaseCard[] = [
  { emoji: '🏥', num: '4.6×', numLbl: 'ROAS', sector: 'Emergency Room', name: 'Freestanding ER · Dallas', problem: 'CPA over $180, ROAS under 2×.', result: 'Restructured campaigns + negative keyword cleanup.' },
  { emoji: '⚡', num: '−54%', numLbl: 'CPA', sector: 'Urgent Care', name: 'Multi-location · Houston', problem: 'Spending across 8 sites, no per-location attribution.', result: 'Per-location campaigns + booking conversions.' },
  { emoji: '✨', num: '+180%', numLbl: 'Leads', sector: 'Cosmetic Surgery', name: 'Aesthetic clinic · Austin', problem: 'Lead form spam from broad targeting.', result: 'Tightened audiences + premium creative.' },
  { emoji: '👨‍⚕️', num: '3.8×', numLbl: 'ROAS', sector: 'Primary Care', name: 'Family medicine · San Antonio', problem: 'Wasting budget on awareness, no booking lift.', result: 'Bottom-funnel intent keywords + conversion tracking.' },
  { emoji: '🧠', num: '−42%', numLbl: 'Cost / lead', sector: 'Mental Health', name: 'Therapy practice · Dallas', problem: 'High CPL for a sensitive vertical.', result: 'Audience layering + landing page optimization.' },
  { emoji: '🦷', num: '5.2×', numLbl: 'ROAS', sector: 'Dental Practice', name: 'General dentistry · Irving', problem: 'Local ads underperforming.', result: 'Geo-targeting + service-page landing flows.' },
];

const SERVICE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Google Ads Management for Healthcare',
  provider: {
    '@type': 'Organization',
    name: 'TheNextGen Healthcare Marketing',
  },
  serviceType: 'Pay-Per-Click / Google Ads',
};

const GoogleAds = () => {
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

export default GoogleAds;
