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
import emergencyHero from '../../../assets/er.png';
import snapUrgent from '../../../assets/urgent-care.png';
import snapFreestanding from '../../../assets/freestanding-er.png';
import snapSpecialty from '../../../assets/ophthalmology.png';

const ORIGIN =
  typeof window !== 'undefined' ? window.location.origin : 'https://thenextgenhealth.com';

const BREADCRUMB_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: `${ORIGIN}/` },
    { '@type': 'ListItem', position: 2, name: 'Industries', item: `${ORIGIN}/industries` },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Specialty & Emergency',
      item: `${ORIGIN}/industries/specialty-emergency`,
    },
  ],
};

const FAQS: ServiceFAQItem[] = [
  {
    q: 'How do we compete with hospital systems on emergency keywords?',
    a: 'Hospital systems usually spend big on broad branded queries. We win on the long tail: condition-plus-symptom queries, neighborhood-plus-ER queries, and wait-time queries. The hospital can\'t outbid us on every "abdominal pain ER Plano" search - and that\'s where booked visits actually come from.',
  },
  {
    q: 'Is HIPAA risk higher for ER and urgent-care ads?',
    a: 'Yes - because intent itself reveals condition. We strip URL parameters that leak symptom data, deploy server-side conversion APIs that never ship PHI to ad networks, and use BAA-covered tooling on every step. Compliance is the gate every campaign passes through before launch.',
  },
  {
    q: 'What about wait-time pages - do they actually move bookings?',
    a: 'They are the highest-converting page type on most urgent-care sites we audit. Real-time wait calls, geo-routing to the nearest clinic, and a single-tap "drive to this location" link consistently outperform a generic location page on booking rate.',
  },
  {
    q: 'How fast can you launch for a new facility opening?',
    a: 'Six weeks from kickoff for a single freestanding ER or urgent-care location: GBP rebuild, schema deployment, paid launch, wait-time page, review pipeline. Multi-location systems take 10–12 weeks because we sequence rollouts to avoid competing with yourself.',
  },
  {
    q: 'Do you handle EmergencyMedicalService schema?',
    a: 'Yes. Schema is one of the few free-and-instant ways to qualify in the Local Pack for high-acuity searches. We deploy EmergencyMedicalService, MedicalSpecialty, and condition-specific markup at the page and location level.',
  },
];

const RELATED: RelatedServiceLink[] = [
  {
    to: '/hipaa-compliance',
    name: 'HIPAA Compliance',
    blurb: 'The compliance posture that makes high-acuity marketing safe to scale.',
    tag: 'Foundation',
  },
  {
    to: '/aeo-schema',
    name: 'AEO & Schema',
    blurb: 'EmergencyMedicalService markup that wins Local Pack on acuity queries.',
    tag: 'Strategy',
  },
  {
    to: '/case-studies/er-network-patient-growth',
    name: 'Freestanding ER · case study',
    blurb: 'Dallas-metro ER engagement - visits, revenue, and the playbook behind both.',
    tag: 'Proof',
  },
];

const Illustration = (
  <img src={emergencyHero} alt="Emergency room interior" loading="eager" decoding="async" />
);

const QUICK_STATS: QuickStat[] = [
  {
    num: (
      <>
        +120<em>%</em>
      </>
    ),
    label: 'ER visits',
  },
  {
    num: (
      <>
        4.2<em>×</em>
      </>
    ),
    label: 'Emergency leads',
  },
  {
    num: (
      <>
        99.8<em>%</em>
      </>
    ),
    label: 'Compliance posture',
  },
];

const SPECIALTIES: SpecialtyRow[] = [
  {
    name: 'Freestanding ERs',
    desc: 'Trauma-search dominance, surge response, and competitor overflow capture.',
  },
  {
    name: 'Urgent care',
    desc: 'Volume-driven acquisition with wait-time pages and reputation systems.',
  },
  {
    name: 'Orthopedics',
    desc: 'Condition-page SEO, referral programs, and high-LTV elective campaigns.',
  },
  {
    name: 'Oncology',
    desc: 'HIPAA-safe nurturing flows, second-opinion funnels, and trial recruitment.',
  },
  {
    name: 'Cardiology specialty',
    desc: 'Procedure pages, physician directories, and primary-care referral hubs.',
  },
  {
    name: 'Radiology / imaging',
    desc: 'Service-line pages, payer & referral content, and walk-in acquisition.',
  },
];

const STEPS: PlayStep[] = [
  {
    name: 'Volume, payer & compliance audit',
    body: 'Specialty volume, payer mix, compliance posture, and current visibility reviewed end to end.',
  },
  {
    name: 'Compliance framework',
    body: 'HIPAA-safe tracking, ad-copy review, and consent flows shipped before anything goes live.',
  },
  {
    name: 'Visibility & capture',
    body: 'Local Pack dominance, ER landing pages, and specialty SEO running across the catchment area.',
  },
  {
    name: 'Optimization & governance',
    body: 'Weekly bid tuning, monthly retro, quarterly clinical-governance review.',
  },
];

const SNAPSHOTS: Snapshot[] = [
  {
    image: snapUrgent,
    label: 'Wait-time pages',
    caption:
      'Real-time wait calls, geo-routing, and single-tap navigation that consistently outperform generic location pages.',
  },
  {
    image: snapFreestanding,
    label: 'Freestanding ER launches',
    caption:
      'Six-week launch sequence - GBP, schema, paid, wait-time page, and review pipeline ready for opening day.',
  },
  {
    image: snapSpecialty,
    label: 'Specialty deep-dives',
    caption:
      "Condition-plus-symptom long-tail SEO and EmergencyMedicalService schema the hospital can't outbid.",
  },
];

const PRINCIPLES: Principle[] = [
  {
    title: 'Compliance-first launches',
    body: 'HIPAA review, server-side conversions, and BAA-covered tooling go in before a single paid dollar ships. Compliance is the gate every campaign passes through, not a cleanup pass.',
    accent: '#576DB5',
  },
  {
    title: 'Acuity-aware audiences',
    body: "We compete on condition-plus-symptom long-tail searches the hospital can't outbid - and tune creative for the moment a patient is choosing where to go right now.",
    accent: '#B38B6D',
  },
  {
    title: 'Wait-time as conversion engine',
    body: "Real-time wait pages, geo-routing to the nearest location, and single-tap navigation outperform generic location pages on booking rate every audit we've run.",
    accent: '#8FBC8F',
  },
];

const STATS: BigNumber[] = [
  {
    num: (
      <>
        +120<em>%</em>
      </>
    ),
    label: 'ER VISITS',
    caption: 'Lift in qualified ER visits from organic + paid combined.',
  },
  {
    num: (
      <>
        4.2<em>×</em>
      </>
    ),
    label: 'EMERGENCY LEADS',
    caption: 'Year-over-year growth in qualified high-acuity inquiries.',
  },
  {
    num: (
      <>
        −35<em>%</em>
      </>
    ),
    label: 'COST PER ACQUISITION',
    caption: 'Reduction through audience layering and landing-page optimization.',
  },
  {
    num: (
      <>
        99.8<em>%</em>
      </>
    ),
    label: 'COMPLIANCE POSTURE',
    caption: 'HIPAA + marketing-rule conformance across active campaigns.',
  },
];

const SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Specialty & Emergency Care - Marketing',
  serviceType: 'Healthcare Marketing',
  audience: 'ERs, urgent care, specialty practices, high-acuity providers',
};

const SpecialtyEmergency = () => {
  return (
    <>
      <IndustryHero
        tag="Acuity"
        title={
          <>
            High-acuity acquisition for <em>specialty care.</em>
          </>
        }
        lede="Compliance-aware, urgency-first marketing built for ERs, urgent care, and specialty practices that need scale and speed."
        illustration={Illustration}
        quickStats={QUICK_STATS}
      />
      <Specialties rows={SPECIALTIES} />
      <IndustrySnapshots
        items={SNAPSHOTS}
        eyebrow="In practice"
        title={
          <>
            The high-acuity stack, <em>in real deployment.</em>
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
            How we work for <em>high-acuity care.</em>
          </>
        }
        intro="Three operating principles that make the difference between high-acuity marketing that scales and high-acuity marketing that gets pulled offline."
      />
      <ServiceFAQ
        items={FAQS}
        serviceName="Specialty & Emergency Care - Marketing"
        title="What ER and urgent-care operators ask first."
        sectionNum="05"
      />
      <RelatedServices
        items={RELATED}
        sectionNum="06"
        title="The compliance and intent layer that scales acuity."
        intro="High-acuity marketing only works when compliance, schema, and proof move together. Here is the order we sequence them in."
      />
      <IndustryCTA
        tag="Talk to us"
        title={<>Ready to capture every search that matters?</>}
        body="A 30-minute call. We'll audit your compliance posture and current visibility, and share the closest case study - whether you sign with us or not."
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

export default SpecialtyEmergency;
