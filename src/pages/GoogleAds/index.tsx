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
import type { TimelineRow } from '../../components/service/ServiceScenario';
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

const TIMELINE: TimelineRow[] = [
  {
    marker: 'Day 0',
    label: 'Inherit the account',
    detail: 'We import history, audit the structure, and freeze the bad bids before we touch a single budget.',
  },
  {
    marker: 'Day 7',
    label: 'Tracking goes clean',
    detail: 'Phone, form, booking events fire correctly. PHI stripped from URLs and conversion APIs. The dashboard finally tells the truth.',
  },
  {
    marker: 'Day 30',
    label: 'Smart bidding earns its data',
    detail: 'Negative keyword sweep done, ad groups rebuilt around real patient intent. CPA starts moving in the right direction once smart-bidding has enough clean signal.',
  },
  {
    marker: 'Day 90',
    label: 'Compound starts showing',
    detail: 'Retargeting feeds the email engine, branded protection layered last, and the weekly report finally has a story instead of just numbers.',
  },
];

const FAQS: ServiceFAQItem[] = [
  {
    q: 'How quickly should I expect Google Ads to lower our cost per booked patient?',
    a: 'Most clinics see early CPA improvements inside the first 30 days from negative-keyword cleanup and conversion-tracking fixes alone. Sustained reductions land in months 2–3 once smart bidding has enough clean conversion data to optimize against.',
  },
  {
    q: 'Will running Google Ads conflict with our HIPAA obligations?',
    a: 'No — but the default Google tag will. We deploy a HIPAA-aware tracking layer that strips PHI from URLs, parameters, and form payloads before any data leaves your site, and we sign BAAs with every downstream tool that touches the lead.',
  },
  {
    q: 'Do you require a 12-month contract?',
    a: 'No. We run month-to-month after a short 90-day ramp. Most clients stay because the dashboard makes the spend defensible — not because the contract forces them to.',
  },
  {
    q: 'How do you decide what to bid on?',
    a: 'We start from your highest-margin services, layer in geographic radius around each clinic, then test in-market and custom-intent audiences. Branded protection is always last, because it usually does not need our help.',
  },
  {
    q: 'Can you take over an existing Google Ads account?',
    a: 'Yes. We import history, preserve learning, and audit the structure before we touch the bids. You keep ownership of the account — we just operate it.',
  },
];

const RELATED: RelatedServiceLink[] = [
  {
    to: '/services/analytics-reporting',
    name: 'Analytics & Reporting',
    blurb: 'Wire the ROAS dashboard that proves the ad spend is paying for itself.',
    tag: 'Pair with',
  },
  {
    to: '/services/seo-local-search',
    name: 'Local SEO',
    blurb: 'Capture the high-intent searchers Google Ads can’t profitably bid on.',
    tag: 'Pair with',
  },
  {
    to: '/services/email-drip-campaigns',
    name: 'Email Drip Campaigns',
    blurb: 'Re-engage every lead that clicked but didn’t book the first time.',
    tag: 'Pair with',
  },
];

const GoogleAds = () => {
  return (
    <>
      <Hero />
      <WhatWeDo cards={DO_CARDS} />
      <HowItWorks steps={STEPS} />
      <Results stats={STATS} />
      <ServiceScenario
        variant="timeline"
        eyebrow="Inside the first 90 days"
        title="What the account looks like, week by week."
        intro="Most clinics inherit a Google Ads account that has been bleeding for months. Here is the order we stabilize it in — same playbook on every engagement."
        timeline={TIMELINE}
      />
      <ServiceFAQ
        items={FAQS}
        serviceName="Google Ads Management for Healthcare"
        title="Five questions every practice owner asks."
      />
      <RelatedServices items={RELATED} />
      <ServiceCTA
        variant="editorial"
        eyebrow="Free 30-min audit"
        title="See where your account is leaking budget."
        description="We open your Google Ads account live on the call, walk through the structure, and flag the three highest-impact fixes before we say a word about working together."
        primaryTo="/free-growth-audit"
        primaryLabel="Book the audit"
        secondaryTo="/case-studies"
        secondaryLabel="See ad-account case studies"
        bullets={[
          'Live screen-share — your numbers, not a generic deck.',
          'A 1-page written summary you can forward to your team.',
          'Free, whether or not you decide to engage us afterwards.',
        ]}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_SCHEMA) }}
      />
    </>
  );
};

export default GoogleAds;
