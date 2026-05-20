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
  { name: 'UX Design', desc: 'Patient journey maps drive every layout, click target, and copy choice.', icon: <PinIcon /> },
  { name: 'Conversion Design', desc: 'Hero, proof, offer, CTA - every section earns its scroll.', icon: <LinkIcon /> },
  { name: 'Speed Optimization', desc: 'Sub-2s loads on 4G, image pipeline, lazy-load, edge cached.', icon: <FileIcon /> },
  { name: 'Mobile-First', desc: "70% of patient traffic is mobile - that's where the design starts.", icon: <NetworkIcon /> },
  { name: 'CMS & Handoff', desc: 'Built on Webflow, WordPress, or Shopify - your team owns it after.', icon: <StarIcon /> },
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

const COMPARISON: ComparisonRow[] = [
  {
    label: 'Largest Contentful Paint',
    before: 'Multi-second LCP on most Wix or WordPress builds.',
    after: 'Green-band Core Web Vitals on every page we ship.',
  },
  {
    label: 'Booking conversion',
    before: 'Generic contact form, no clear next step.',
    after: 'EHR-wired booking widget embedded into the page.',
  },
  {
    label: 'Service / location pages',
    before: 'One generic "Services" page covering every line.',
    after: 'One unique page per service × per location, with schema.',
  },
  {
    label: 'Accessibility',
    before: 'Common WCAG failures on Lighthouse / axe.',
    after: 'WCAG 2.2 AA at launch with a documented audit trail.',
  },
  {
    label: 'Editing experience',
    before: 'Editing requires the agency every time.',
    after: 'Headless CMS - your team ships copy without dev help.',
  },
];

const FAQS: ServiceFAQItem[] = [
  {
    q: 'How long does a new clinic site take?',
    a: 'Design plus build runs 6 to 9 weeks for single-location practices, 10 to 14 for multi-location systems. We sequence content collection up front so the build never stalls waiting on copy.',
  },
  {
    q: 'Does it have to be in WordPress?',
    a: 'No. We default to a modern Next.js stack for new builds because it’s faster, more secure, and easier to update. WordPress is fine when the team needs to ship blog posts daily; we still harden it for HIPAA.',
  },
  {
    q: 'Can the booking widget connect to our EHR?',
    a: 'Most modern EHRs (Athena, eClinicalWorks, NextGen, Kareo, Cerner, Epic via integration partners) expose schedule APIs we can wire to. We also support widget-style providers (Solv, Zocdoc) when direct API isn’t available.',
  },
  {
    q: 'What about Core Web Vitals and SEO impact?',
    a: 'Every new site ships with green-band LCP, INP, and CLS, structured data on every service and location, and a redirect map so legacy URLs don’t lose authority. We measure SEO impact monthly post-launch.',
  },
  {
    q: 'Who owns the site after launch?',
    a: 'You do. Code, design files, hosting account, domain - all in your name from day one. We can manage hosting and updates as a retainer, or hand off cleanly.',
  },
];

const RELATED: RelatedServiceLink[] = [
  {
    to: '/services/seo-local-search',
    name: 'Local SEO',
    blurb: 'Get the new site ranking in the Local Pack the month it ships.',
    tag: 'Pair with',
  },
  {
    to: '/services/brand-identity-design',
    name: 'Brand Identity & Design',
    blurb: 'Make sure the system the site is built on actually scales.',
    tag: 'Pair with',
  },
  {
    to: '/services/analytics-reporting',
    name: 'Analytics & Reporting',
    blurb: 'Wire the dashboard that proves the new site is converting.',
    tag: 'Pair with',
  },
];

const WebsiteDesign = () => {
  return (
    <>
      <Hero />
      <WhatWeDo cards={DO_CARDS} />
      <HowItWorks steps={STEPS} />
      <Results stats={STATS} />
      <ServiceScenario
        variant="comparison"
        eyebrow="What we leave you with"
        title="The five things that change between the old site and the new one."
        intro="Most healthcare sites fail on the same five vectors. Here is the gap we measure before launch and the band we ship in afterwards."
        comparison={COMPARISON}
      />
      <ServiceFAQ
        items={FAQS}
        serviceName="Healthcare Website Design & Development"
        title="Build, performance, and ownership questions."
      />
      <RelatedServices items={RELATED} />
      <ServiceCTA
        variant="editorial"
        eyebrow="Build readiness audit"
        title="See exactly what your next site has to clear."
        description="A short call where we open your current site live, score it against the five vectors above, and hand you the gap list - even if you build it with someone else."
        primaryTo="/free-growth-audit"
        primaryLabel="Get the gap list"
        secondaryTo="/case-studies"
        secondaryLabel="See past builds"
        bullets={[
          'Core Web Vitals scorecard you can hand a developer tomorrow.',
          'WCAG 2.2 AA pre-flight checklist tailored to your service pages.',
          'A clear go / fix / rebuild verdict before we propose anything.',
        ]}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_SCHEMA) }}
      />
    </>
  );
};

export default WebsiteDesign;
