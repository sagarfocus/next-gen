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
import type { VignetteMetric as BenchmarkTile } from '../../components/service/ServiceScenario';
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

// Benchmarks are framed as the *targets we plan against*, not measured client outcomes.
const BENCHMARKS: BenchmarkTile[] = [
  { value: '6 wks', label: 'Typical kickoff-to-launch window' },
  { value: '3 tiers', label: 'Logo · type · color · template scopes' },
  { value: '1 system', label: 'Figma + Illustrator source of truth' },
];

const FAQS: ServiceFAQItem[] = [
  {
    q: 'Will a rebrand actually move bookings, or just look prettier?',
    a: 'A rebrand alone won’t move bookings. A rebrand paired with a redesigned site, ad creative, and review flow does — because patient trust signals get re-tuned across every touchpoint at once. We sequence the work so the lift is measurable.',
  },
  {
    q: 'How disruptive is this for a multi-location practice?',
    a: 'We run rebrands in a phased rollout: signage and exterior last, digital and clinical-printables first. No clinic ever closes for a brand update.',
  },
  {
    q: 'Can you keep our existing name?',
    a: 'Most engagements keep the name and refresh the system — mark, color, type, tone, photography. Full renames are rare and we’ll talk you out of one unless legal or M&A forces it.',
  },
  {
    q: 'What deliverables do we own at the end?',
    a: 'Source files in Figma and Illustrator, a guideline PDF, a templated asset library, and the master logo lockups. You keep editing rights — no platform lock-in.',
  },
  {
    q: 'How is this different from a freelance designer?',
    a: 'We come with the marketing dashboard, the ad team, and the SEO team in the room. The brand system gets pressure-tested against actual campaigns before we sign it off.',
  },
];

const RELATED: RelatedServiceLink[] = [
  {
    to: '/services/website-design-dev',
    name: 'Website Design & Development',
    blurb: 'Translate the new identity into a converting clinic site.',
    tag: 'Pair with',
  },
  {
    to: '/services/content-copywriting',
    name: 'Content & Copywriting',
    blurb: 'Tone-of-voice scaffolding for the rest of the marketing engine.',
    tag: 'Pair with',
  },
  {
    to: '/services/social-media-marketing',
    name: 'Social Media Marketing',
    blurb: 'Templated, on-brand posts the team can ship every week.',
    tag: 'Pair with',
  },
];

const Branding = () => {
  return (
    <>
      <Hero />
      <WhatWeDo cards={DO_CARDS} />
      <HowItWorks steps={STEPS} />
      <Results stats={STATS} />
      <ServiceScenario
        variant="sketch"
        eyebrow="How an engagement runs"
        title="What a rebrand actually moves — without the slide-deck claims."
        intro="A rebrand only earns its keep when it makes the rest of the marketing system faster to ship. Below is a neutral sketch of how we sequence the work, and the targets we plan against."
        sketch={{
          contextLabel: 'Typical multi-location engagement',
          narrative:
            'We start with the patient-facing pages because that is where the system is graded first. Logo, palette, and type get tested against live landing pages — not on a moodboard. By the time signage and printables ship, the digital surface has already been pressure-tested across paid creative and the booking flow.',
          benchmarks: BENCHMARKS,
        }}
      />
      <ServiceFAQ
        items={FAQS}
        serviceName="Healthcare Brand Identity & Design"
        title="The questions that come up before kickoff."
      />
      <RelatedServices items={RELATED} />
      <ServiceCTA
        variant="band"
        eyebrow="Brand-system intro call"
        title="Pressure-test your identity in 30 minutes."
        description="We look at your live touchpoints together — site, ads, social, signage — and tell you whether you need a refresh, a rebuild, or just a template kit."
        primaryTo="/contact"
        primaryLabel="Start the conversation"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_SCHEMA) }}
      />
    </>
  );
};

export default Branding;
