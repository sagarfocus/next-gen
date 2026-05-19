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
  { name: 'SEO Blogs', desc: 'Patient-intent articles, clinically reviewed, ranked organically.', icon: <PinIcon /> },
  { name: 'Landing Pages', desc: 'Procedure pages and condition deep-dives that convert search traffic.', icon: <LinkIcon /> },
  { name: 'Authority Building', desc: 'Editorial-grade pieces that earn backlinks from medical sites.', icon: <FileIcon /> },
  { name: 'Content Strategy', desc: 'Topic clusters, internal linking, refresh cadence — built to compound.', icon: <NetworkIcon /> },
  { name: 'Clinician Review', desc: 'Every health claim reviewed by a licensed clinician before publish.', icon: <StarIcon /> },
  { name: 'Performance Tracking', desc: 'Traffic, rankings, bookings tracked per piece.', icon: <ChartIcon /> },
];

const STEPS: HowStep[] = [
  { num: '01', name: 'Audit', desc: 'Content gap, competitor delta, ranking review.' },
  { num: '02', name: 'Strategy', desc: 'Topic clusters and editorial calendar locked.' },
  { num: '03', name: 'Execution', desc: 'Production, clinical review, publishing.' },
  { num: '04', name: 'Optimization', desc: 'Refresh top-performers, prune dead pages, monthly retro.' },
];

const STATS: ResultStat[] = [
  {
    num: (
      <>
        14.2K<em>+</em>
      </>
    ),
    label: 'Organic / month',
  },
  { num: '#3', label: 'Avg SERP position' },
  {
    num: (
      <>
        38<em>+</em>
      </>
    ),
    label: 'Bookings / month',
  },
  {
    num: (
      <>
        18<em>+</em>
      </>
    ),
    label: 'Backlinks / quarter',
  },
];

const SERVICE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Healthcare Content Marketing & Copywriting',
  provider: {
    '@type': 'Organization',
    name: 'TheNextGen Healthcare Marketing',
  },
  serviceType: 'Content Marketing',
};

const TIMELINE: TimelineRow[] = [
  {
    marker: 'Quarter 1',
    label: 'Foundation pages',
    detail: 'Pillar pages for the highest-margin service lines, each clinician-reviewed and signed. Schema deployed before any link-building starts.',
  },
  {
    marker: 'Quarter 2',
    label: 'Long-tail compounding',
    detail: 'Two pillars + four supporting pieces per month. The cluster around each pillar starts ranking on its own — long-tail traffic doubles, then triples.',
  },
  {
    marker: 'Quarter 3',
    label: 'AEO + AI answer panels',
    detail: 'We instrument each article for AI surfacing — definitive answers, citable stats, FAQPage schema. Visibility starts landing in AI search overviews.',
  },
  {
    marker: 'Quarter 4',
    label: 'Sustained authority lift',
    detail: 'Articles begin earning backlinks on their own. Each new piece compounds on the audience the prior ones built. Less pushing, more pulling.',
  },
];

const FAQS: ServiceFAQItem[] = [
  {
    q: 'Is AI-written content okay for healthcare SEO in 2026?',
    a: 'AI scaffolding is fine; AI without clinician review is not. We use AI for outlines and structure, then a credentialed reviewer rewrites and signs. Google’s helpful-content updates explicitly reward this hybrid model.',
  },
  {
    q: 'How many articles a month do we need?',
    a: 'Four well-researched pieces beat twenty thin ones. We target two pillar articles plus two supporting pieces a month for a single-location clinic, scaling up for multi-location systems and AEO coverage.',
  },
  {
    q: 'Do you write the location pages too?',
    a: 'Yes, and they are usually the highest-converting page type. Each location page is bespoke — no spun copy. We layer in real photography, real reviews, and locally-relevant condition coverage.',
  },
  {
    q: 'What about HIPAA when we use real patient stories?',
    a: 'We use composite case stories, fully de-identified patient stories with signed authorization, or clinician explainers. Every published piece passes through a compliance checklist before going live.',
  },
  {
    q: 'How long until content moves SEO rankings?',
    a: 'Long-tail condition queries land in 6 to 10 weeks. Competitive head terms compound at 4 to 7 months. We track each article’s rank, click-through, and assisted conversion every week.',
  },
];

const RELATED: RelatedServiceLink[] = [
  {
    to: '/services/seo-local-search',
    name: 'Local SEO',
    blurb: 'Wire each new article into the on-page and link strategy.',
    tag: 'Pair with',
  },
  {
    to: '/aeo-schema',
    name: 'AEO & Schema',
    blurb: 'Make every article eligible for AI answer panels and rich results.',
    tag: 'Pair with',
  },
  {
    to: '/services/social-media-marketing',
    name: 'Social Media Marketing',
    blurb: 'Distribute every long-form piece into a month of social moments.',
    tag: 'Pair with',
  },
];

const ContentMarketing = () => {
  return (
    <>
      <Hero />
      <WhatWeDo cards={DO_CARDS} />
      <HowItWorks steps={STEPS} />
      <Results stats={STATS} />
      <ServiceScenario
        variant="timeline"
        eyebrow="The four-quarter ramp"
        title="When the content engine starts running on its own."
        intro="Content marketing is a compounding asset — it underperforms in months 1–3 and pays back in months 6–18. Here is the curve we expect to see."
        timeline={TIMELINE}
      />
      <ServiceFAQ
        items={FAQS}
        serviceName="Healthcare Content Marketing & Copywriting"
        title="Content, compliance, and AI questions we hear weekly."
      />
      <RelatedServices items={RELATED} />
      <ServiceCTA
        variant="editorial"
        eyebrow="Editorial planning session"
        title="One quarter of content, mapped in 30 minutes."
        description="Bring your top service lines — we walk out with a quarter's worth of pillar topics, the supporting cluster, and the AEO surface for each piece."
        primaryTo="/free-growth-audit"
        primaryLabel="Map the quarter"
        secondaryTo="/aeo-schema"
        secondaryLabel="See AEO + schema"
        bullets={[
          'Live editorial calendar built on your service lines, not ours.',
          'Pillar / supporting / FAQ split — no theory, just the next moves.',
          'Walk away with the plan, even if we never publish a word for you.',
        ]}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_SCHEMA) }}
      />
    </>
  );
};

export default ContentMarketing;
