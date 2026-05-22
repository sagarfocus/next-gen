import IndustryHero from '@/components/industry/IndustryHero';
import Specialties from '@/components/industry/Specialties';
import Playbook from '@/components/industry/Playbook';
import Numbers from '@/components/industry/Numbers';
import IndustryPrinciples from '@/components/industry/IndustryPrinciples';
import IndustrySnapshots from '@/components/industry/IndustrySnapshots';
import IndustryCTA from '@/components/industry/IndustryCTA';
import ServiceFAQ from '@/components/service/ServiceFAQ';
import RelatedServices from '@/components/service/RelatedServices';
import type { QuickStat } from '@/components/industry/IndustryHero';
import type { SpecialtyRow } from '@/components/industry/Specialties';
import type { PlayStep } from '@/components/industry/Playbook';
import type { BigNumber } from '@/components/industry/Numbers';
import type { Principle } from '@/components/industry/IndustryPrinciples';
import type { Snapshot } from '@/components/industry/IndustrySnapshots';
import type { ServiceFAQItem } from '@/components/service/ServiceFAQ';
import type { RelatedServiceLink } from '@/components/service/RelatedServices';
import clinicsHero from '../../../assets/primary-care.png';
import snapBooking from '../../../assets/booking-first-website.png';
import snapRecall from '../../../assets/recall-plus.png';
import snapDental from '../../../assets/dental-detail.png';

const ORIGIN =
  typeof window !== 'undefined' ? window.location.origin : 'https://thenextgenhealth.com';

const BREADCRUMB_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: `${ORIGIN}/` },
    { '@type': 'ListItem', position: 2, name: 'Industries', item: `${ORIGIN}/industries` },
    { '@type': 'ListItem', position: 3, name: 'Clinics', item: `${ORIGIN}/industries/clinics` },
  ],
};

const FAQS: ServiceFAQItem[] = [
  {
    q: 'We have multiple locations under one brand - should each have its own marketing footprint?',
    a: "Yes. Each clinic gets its own Google Business Profile, a per-location landing page with that clinic's photos, providers, and insurance list, and a per-location review program. Google penalizes duplicate location pages, and patients can't tell which clinic is closest if they all look identical.",
  },
  {
    q: 'How do you handle providers who come and go?',
    a: "Provider bios live in a central directory with structured data. When someone joins, we publish a bio, wire the schema, and roll them into the next month's content calendar. When someone leaves, we redirect their page to a relevant service line within 24 hours so SEO authority doesn't leak.",
  },
  {
    q: 'What about referral relationships with specialists?',
    a: 'Specialist referral pages are a separate content track. We build provider-to-provider trust pages, attend referral events with you, and instrument referral attribution back to the originating clinic - so you know which relationships actually drive volume.',
  },
  {
    q: 'How do you stay HIPAA-safe when reporting?',
    a: 'Dashboards never show PHI. We aggregate to the location and service-line level, strip identifiers before any data leaves your site, and only use BAA-covered tooling downstream. Your CTO can hand the dashboard to legal without redaction.',
  },
  {
    q: 'Can we start with one location and scale up?',
    a: 'That is the most common pattern. We pick the location with the most ambiguous performance, win it, then template the wins across the network. The system is built to scale to 100+ locations without rebuilding the foundation.',
  },
];

const RELATED: RelatedServiceLink[] = [
  {
    to: '/services/seo',
    name: 'SEO Services',
    blurb: 'Win the map pack and organic SERPs in every catchment area your clinics serve.',
    tag: 'Strategy',
  },
  {
    to: '/services/google-business-profile',
    name: 'Google Business Profile',
    blurb: 'Profile management across every clinic location, run from one console.',
    tag: 'Operations',
  },
  {
    to: '/case-studies/primary-care-seo-roi',
    name: 'Primary care SEO ROI · case study',
    blurb: 'The full engagement, the levers, and the numbers - read the case study.',
    tag: 'Proof',
  },
];

const Illustration = (
  <img src={clinicsHero} alt="Family practice clinic" loading="eager" decoding="async" />
);

const QUICK_STATS: QuickStat[] = [
  {
    num: (
      <>
        +85<em>%</em>
      </>
    ),
    label: 'New patient inquiries',
  },
  {
    num: (
      <>
        4<em>×</em>
      </>
    ),
    label: 'Provider listings ranked',
  },
  {
    num: (
      <>
        92<em>%</em>
      </>
    ),
    label: 'Retention rate',
  },
];

const SPECIALTIES: SpecialtyRow[] = [
  {
    name: 'Family practice',
    desc: 'Local search and recall systems for general primary-care offices.',
  },
  {
    name: 'Cardiology',
    desc: 'Specialist-referral pages, condition deep-dives, and reputation systems.',
  },
  { name: 'Dental', desc: 'Multi-location GBP, treatment SEO, and review automation.' },
  {
    name: 'Pediatrics',
    desc: 'Family-tailored content, vaccine schedules, and parent-targeted ads.',
  },
  {
    name: 'Dermatology',
    desc: 'Procedure-page SEO, before/after libraries, and elective lead capture.',
  },
  {
    name: 'Multi-specialty groups',
    desc: 'Provider directories, hub-and-spoke SEO, and unified analytics.',
  },
];

const STEPS: PlayStep[] = [
  {
    name: 'Provider & location audit',
    body: 'Every site, every listing, every clinician page reviewed against demand in the catchment area.',
  },
  {
    name: 'Foundation reset',
    body: 'GBP rebuild, schema, provider bios, and insurance/service pages shipped first.',
  },
  {
    name: 'Acquisition stack',
    body: 'Search + paid layered by intent, with per-location attribution to the booking.',
  },
  {
    name: 'Retention engine',
    body: 'Recall, referral, and review programs running quietly in the background every month.',
  },
];

const SNAPSHOTS: Snapshot[] = [
  {
    image: snapBooking,
    label: 'Per-location landing',
    caption:
      'Each clinic ships with its own location page, photos, providers, insurance list, and booking flow.',
  },
  {
    image: snapRecall,
    label: 'Recall in motion',
    caption:
      'Automated recall and referral sequences run quietly in the background every single month.',
  },
  {
    image: snapDental,
    label: 'Specialty depth',
    caption:
      'Provider directories and treatment SEO stacked deep enough to win competitive metros.',
  },
];

const PRINCIPLES: Principle[] = [
  {
    title: 'Per-location attribution',
    body: 'Every metric is tied to a specific clinic, never to a network average. You see which location is moving and which is flat - the moment it happens.',
    accent: '#576DB5',
  },
  {
    title: 'HIPAA-clean dashboards',
    body: 'No PHI ever leaves your tracking layer. Reporting aggregates to the location and service line so legal can read the same view your CTO does.',
    accent: '#8FBC8F',
  },
  {
    title: 'Provider directories as authority',
    body: 'Bios, schema, and referral pages run together as a system - not loose pages. When a provider moves, the redirects and ranking equity move with them.',
    accent: '#B38B6D',
  },
];

const STATS: BigNumber[] = [
  {
    num: (
      <>
        +85<em>%</em>
      </>
    ),
    label: 'NEW INQUIRIES',
    caption: 'YoY lift across the first six months of engagement.',
  },
  {
    num: (
      <>
        $1.2M<em>+</em>
      </>
    ),
    label: 'ADDED REVENUE',
    caption: 'Average added annual revenue per multi-location group.',
  },
  {
    num: (
      <>
        4<em>×</em>
      </>
    ),
    label: 'LISTINGS RANKED',
    caption: 'Top-3 Map Pack across the four largest local terms.',
  },
  {
    num: (
      <>
        92<em>%</em>
      </>
    ),
    label: 'RECALL RATE',
    caption: 'Automated recall/referral programs running month over month.',
  },
];

const SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Clinics & Multi-Specialty Practices - Marketing',
  serviceType: 'Healthcare Marketing',
  audience: 'Family practices, multi-specialty groups, clinical networks',
};

const Clinics = () => {
  return (
    <>
      <IndustryHero
        tag="Clinical"
        title={
          <>
            Patient flow for clinics, <em>engineered.</em>
          </>
        }
        lede="From single-location family practices to multi-location specialty networks - search, paid, and retention systems built for clinical reality."
        illustration={Illustration}
        quickStats={QUICK_STATS}
      />
      <Specialties rows={SPECIALTIES} />
      <IndustrySnapshots
        items={SNAPSHOTS}
        eyebrow="In practice"
        title={
          <>
            What clinic engagements <em>actually ship.</em>
          </>
        }
      />
      <Playbook steps={STEPS} />
      <Numbers stats={STATS} />
      <IndustryPrinciples
        items={PRINCIPLES}
        sectionNum="04"
        title={
          <>
            How we work for <em>clinic networks.</em>
          </>
        }
        intro="Three operating principles that show up in every clinic engagement - they keep multi-location work from sliding back into single-location habits."
      />
      <ServiceFAQ
        items={FAQS}
        serviceName="Clinics & Multi-Specialty Practices - Marketing"
        title="How clinic owners size up a multi-location engagement."
        sectionNum="05"
      />
      <RelatedServices
        items={RELATED}
        sectionNum="06"
        title="Pair the playbook with the right levers."
        intro="Clinic networks compound when these three layers run together - Local SEO for discovery, GBP for the front door, and proof from a peer engagement."
      />
      <IndustryCTA
        tag="Talk to us"
        title={<>Ready to scale the clinic, the right way?</>}
        body="A 30-minute call. We audit your current setup and share the closest case study from this library - whether you sign with us or not."
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }}
      />
    </>
  );
};

export default Clinics;
