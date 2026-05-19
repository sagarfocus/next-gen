import Hero from './Hero';
import WhatWeDo from '../../components/service/WhatWeDo';
import HowItWorks from '../../components/service/HowItWorks';
import Results from '../../components/service/Results';
import ServiceCTA from '../../components/service/ServiceCTA';
import ServiceFAQ from '../../components/service/ServiceFAQ';
import ServiceScenario from '../../components/service/ServiceScenario';
import RelatedServices from '../../components/service/RelatedServices';
import type { DoCard } from '../../components/service/WhatWeDo';
import type { HowStep } from '../../components/service/HowItWorks';
import type { ResultStat } from '../../components/service/Results';
import type { ServiceFAQItem } from '../../components/service/ServiceFAQ';
import type { ComparisonRow } from '../../components/service/ServiceScenario';
import type { RelatedServiceLink } from '../../components/service/RelatedServices';

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

const COMPARISON: ComparisonRow[] = [
  {
    label: 'Profile completeness',
    before: 'Partial — services missing, hours stale, no posts.',
    after: 'Every field used, posts every week, photos refreshed monthly.',
  },
  {
    label: 'Categories',
    before: 'One broad category that competes against hospitals.',
    after: 'Primary + secondary categories matched to each service line.',
  },
  {
    label: 'Review velocity',
    before: 'A trickle of unprompted reviews per quarter.',
    after: 'Consistent monthly velocity, HIPAA-safe templated responses.',
  },
  {
    label: 'Map Pack rank',
    before: 'Page two on service-plus-city queries.',
    after: 'Compounding gains on the highest-value local terms.',
  },
  {
    label: 'Direction requests',
    before: 'Flat or declining month over month.',
    after: 'A trend line that lifts once photo cadence and posts kick in.',
  },
];

const FAQS: ServiceFAQItem[] = [
  {
    q: 'How long until our Google Business Profile starts ranking in the Local Pack?',
    a: 'Movement begins inside four weeks once the profile is fully populated, services are mapped to the right categories, and the first reviews are coming in steadily. Most clinics see top-3 Local Pack positions for service-plus-city queries inside 8 to 12 weeks.',
  },
  {
    q: 'We have multiple locations — do they each need their own profile?',
    a: 'Yes. Every clinic gets its own GBP with a unique landing page, phone number, and review stream. We never share a profile across locations; Google penalizes that and patients can\'t tell which clinic is closest.',
  },
  {
    q: 'Are review responses HIPAA-safe?',
    a: 'They are when written correctly. We never confirm a patient relationship in a public reply, never mention specifics, and always redirect into a private channel. We script the template library so the front desk can respond fast without leaking PHI.',
  },
  {
    q: 'What about photos — does it really move the needle?',
    a: 'Yes. Profiles with weekly fresh photos consistently outperform profiles updated quarterly on both direction requests and call volume. We coordinate a quarterly shoot and supply a weekly drip schedule so the cadence is never the bottleneck.',
  },
  {
    q: 'Can you manage Apple Business Connect and Bing Places too?',
    a: 'Yes — both are folded into the Local SEO retainer and seeded from the same canonical NAP data, so updates stay consistent across the open web.',
  },
];

const RELATED: RelatedServiceLink[] = [
  {
    to: '/services/seo-local-search',
    name: 'Local SEO',
    blurb: 'Layer GBP into a full Local Pack + organic strategy.',
    tag: 'Pair with',
  },
  {
    to: '/citation-building',
    name: 'Citation Building',
    blurb: 'Lock in NAP consistency across every directory that feeds Google.',
    tag: 'Pair with',
  },
  {
    to: '/reviews-reputation',
    name: 'Reviews & Reputation',
    blurb: 'Compound the GBP signal that moves the map ranking the fastest.',
    tag: 'Pair with',
  },
];

const GoogleBusinessProfile = () => {
  return (
    <>
      <Hero />
      <WhatWeDo cards={DO_CARDS} />
      <HowItWorks steps={STEPS} />
      <Results stats={STATS} />
      <ServiceScenario
        variant="comparison"
        eyebrow="GBP health audit"
        title="Five vectors most profiles fail on — and the band we ship in."
        intro="Profile health is graded on five vectors before we touch a single field. The gap below is what we close on a typical multi-location engagement in 90 days."
        comparison={COMPARISON}
      />
      <ServiceFAQ
        items={FAQS}
        serviceName="Google Business Profile Management for Healthcare"
        title="Five questions every multi-location practice asks."
      />
      <RelatedServices items={RELATED} />
      <ServiceCTA
        variant="band"
        eyebrow="GBP health check · Free"
        title="Score every location's profile against the five vectors."
        description="Send us the profiles you manage. We hand back a scored gap report inside three business days — yours to keep."
        primaryTo="/free-growth-audit"
        primaryLabel="Request the audit"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_SCHEMA) }}
      />
    </>
  );
};

export default GoogleBusinessProfile;
