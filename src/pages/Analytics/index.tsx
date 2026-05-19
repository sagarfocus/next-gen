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

const COMPARISON: ComparisonRow[] = [
  {
    label: 'Source of truth',
    before: 'Three different dashboards, three different totals.',
    after: 'One unified dashboard pulling Ads, GA4, GBP, CRM, booking.',
  },
  {
    label: 'Attribution model',
    before: 'Last-click only — paid steals credit from SEO.',
    after: 'Multi-touch, with assisted conversions weighted to channel.',
  },
  {
    label: 'PHI exposure',
    before: 'Patient names sometimes leak through URL parameters.',
    after: 'Server-side conversion API + scrubbed identifiers, BAA on every tool.',
  },
  {
    label: 'Reporting cadence',
    before: 'Monthly PDF, three days late, no narrative.',
    after: 'Live dashboard + weekly Loom + monthly written read-out.',
  },
  {
    label: 'Time to a decision',
    before: '4–6 hours scraping screenshots before a meeting.',
    after: 'One link, two minutes, screenshot-ready.',
  },
];

const FAQS: ServiceFAQItem[] = [
  {
    q: 'Why do we need a custom dashboard when GA4 already exists?',
    a: 'GA4 sees clicks and pageviews. Practice owners need to see booked patients, attributed revenue, and channel ROI in one screen. We bridge GA4 to your booking system, CRM, and ad accounts so the dashboard answers the question you actually ask: did the spend pay off?',
  },
  {
    q: 'Can you make analytics HIPAA-safe?',
    a: 'Yes. We strip PHI before any data leaves your site, run hashed identifiers for cross-system attribution, and only use BAA-covered tools downstream. You can hand the dashboard to legal without a redaction pass.',
  },
  {
    q: 'How long until the dashboard is reliable?',
    a: 'Two weeks to instrument and clean. Two more for back-fill and validation. By week five you should be making spend decisions off the report, not your gut.',
  },
  {
    q: 'Do you replace our marketing agency’s reports?',
    a: 'We give you a neutral source of truth. Most clients keep their agency but stop trusting only the agency’s own numbers. The friction usually improves the partnership.',
  },
  {
    q: 'What happens if we change CRMs or booking platforms?',
    a: 'We rebuild the connector inside one sprint. Your historical data is preserved in the warehouse layer so dashboards keep continuity across the migration.',
  },
];

const RELATED: RelatedServiceLink[] = [
  {
    to: '/services/google-ads',
    name: 'Google Ads',
    blurb: 'Pour the analytics signal back into smarter bids and lower CPA.',
    tag: 'Pair with',
  },
  {
    to: '/services/seo-local-search',
    name: 'Local SEO',
    blurb: 'See exactly which Local Pack rankings are producing booked patients.',
    tag: 'Pair with',
  },
  {
    to: '/medical-automation',
    name: 'Medical Automation',
    blurb: 'Trigger workflows from the same data you’re already reporting on.',
    tag: 'Pair with',
  },
];

const Analytics = () => {
  return (
    <>
      <Hero />
      <WhatWeDo cards={DO_CARDS} />
      <HowItWorks steps={STEPS} />
      <Results stats={STATS} />
      <ServiceScenario
        variant="comparison"
        eyebrow="What changes the day you switch"
        title="From three half-truths to one number you can defend."
        intro="The biggest analytics win is not a new chart — it is the moment leadership trusts the same number. Here is the gap most clinics close in 30 days."
        comparison={COMPARISON}
      />
      <ServiceFAQ
        items={FAQS}
        serviceName="Healthcare Marketing Analytics & Reporting"
        title="What practice owners actually ask first."
      />
      <RelatedServices items={RELATED} />
      <ServiceCTA
        variant="band"
        eyebrow="Dashboard audit · No commitment"
        title="Stop trusting three different totals."
        description="Send us your current stack and we will map the gaps inside one working session — no slide deck, no pitch."
        primaryTo="/free-growth-audit"
        primaryLabel="Request audit"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_SCHEMA) }}
      />
    </>
  );
};

export default Analytics;
