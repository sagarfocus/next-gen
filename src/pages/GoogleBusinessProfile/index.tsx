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
  { title: 'Invisible on the map', desc: 'Patients pin the hospital, not you.' },
  { title: 'Stale listing', desc: 'Hours wrong, phone wrong, photos from 2018.' },
  { title: 'Reviews stagnant', desc: '4 stars for years, no new reviews.' },
];

const OUTCOMES: OutcomeRow[] = [
  { label: 'Map ranking', value: '#1–3 average' },
  { label: 'Direction requests', value: '+218%' },
  { label: 'Profile views', value: '+340%' },
  { label: 'Review velocity', value: '+18 / month' },
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
  { name: 'Profile Optimization', desc: 'Categories, attributes, services, photos, hours — every field tuned.', icon: <PinIcon /> },
  { name: 'Review Strategy', desc: 'Request automation, response SLAs, sentiment routing — all HIPAA-aware.', icon: <LinkIcon /> },
  { name: 'Local SEO', desc: 'NAP consistency across 70+ directories, citation cleanup, geo-targeted content.', icon: <FileIcon /> },
  { name: 'Map Ranking', desc: 'Proximity, prominence, relevance — engineered for the Local Pack.', icon: <NetworkIcon /> },
  { name: 'Posts & Updates', desc: 'Weekly Q&A, offers, events posted to keep your profile active.', icon: <StarIcon /> },
  { name: 'Live Reporting', desc: 'Profile views, calls, direction requests, and ranking tracked daily.', icon: <ChartIcon /> },
];

const STEPS: HowStep[] = [
  { num: '01', name: 'Audit', desc: 'Profile gaps, citations, review baseline.' },
  { num: '02', name: 'Strategy', desc: '90-day priority matrix and KPI dashboard.' },
  { num: '03', name: 'Execution', desc: 'Profile rebuild, citations cleaned, review program live.' },
  { num: '04', name: 'Optimization', desc: 'Weekly posts, monthly retros, scale plan.' },
];

const STATS: ResultStat[] = [
  { num: '#1', label: 'Avg map position' },
  {
    num: (
      <>
        218<em>%</em>
      </>
    ),
    label: 'Direction requests',
  },
  {
    num: (
      <>
        340<em>%</em>
      </>
    ),
    label: 'Profile views',
  },
  {
    num: (
      <>
        18<em>+</em>
      </>
    ),
    label: 'Reviews / month',
  },
];

const CASES: CaseCard[] = [
  { href: 'https://thenextgenhealth.com/case-studies/google-business-profile-case-1', emoji: '🏥', num: '#1', numLbl: 'Map Pack', sector: 'Emergency Room', name: 'Freestanding ER · Dallas', problem: 'Outranked by hospital network.', result: 'Profile rebuild + citation cleanup.' },
  { href: 'https://thenextgenhealth.com/case-studies/google-business-profile-case-2', emoji: '⚡', num: '+312%', numLbl: 'Profile views', sector: 'Urgent Care', name: 'Multi-location · Houston', problem: 'Listings inconsistent across 8 sites.', result: 'Per-location GBP optimization.' },
  { href: 'https://thenextgenhealth.com/case-studies/google-business-profile-case-3', emoji: '✨', num: '8.2K', numLbl: 'Direction reqs', sector: 'Cosmetic Surgery', name: 'Aesthetic clinic · Austin', problem: 'Premium positioning vs price-led competitors.', result: 'Photo-rich profile + reviews.' },
  { href: 'https://thenextgenhealth.com/case-studies/google-business-profile-case-4', emoji: '👨‍⚕️', num: '+72', numLbl: 'Reviews / qtr', sector: 'Primary Care', name: 'Family medicine · San Antonio', problem: 'No review system, 4.0 stuck.', result: 'Sentiment-routed review automation.' },
  { href: 'https://thenextgenhealth.com/case-studies/google-business-profile-case-5', emoji: '🧠', num: '★4.9', numLbl: 'Rating', sector: 'Mental Health', name: 'Therapy practice · Dallas', problem: 'Sensitive vertical, hard to ask for reviews.', result: 'Empathetic request flow.' },
  { href: 'https://thenextgenhealth.com/case-studies/google-business-profile-case-6', emoji: '🦷', num: '#1', numLbl: 'Local Pack', sector: 'Dental Practice', name: 'General dentistry · Irving', problem: 'Not appearing top-3.', result: 'GBP + citations + reviews.' },
];

const SERVICE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Google Business Profile Management for Healthcare',
  provider: {
    '@type': 'Organization',
    name: 'TheNextGen Healthcare Marketing',
  },
  serviceType: 'Local SEO / Google Business Profile',
};

const GoogleBusinessProfile = () => {
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

export default GoogleBusinessProfile;
