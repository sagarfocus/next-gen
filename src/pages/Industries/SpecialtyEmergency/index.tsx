import IndustryHero from '../../../components/industry/IndustryHero';
import Specialties from '../../../components/industry/Specialties';
import Playbook from '../../../components/industry/Playbook';
import Numbers from '../../../components/industry/Numbers';
import IndustryCTA from '../../../components/industry/IndustryCTA';
import ServiceFAQ from '../../../components/service/ServiceFAQ';
import RelatedServices from '../../../components/service/RelatedServices';
import type { QuickStat } from '../../../components/industry/IndustryHero';
import type { SpecialtyRow } from '../../../components/industry/Specialties';
import type { PlayStep } from '../../../components/industry/Playbook';
import type { BigNumber } from '../../../components/industry/Numbers';
import type { ServiceFAQItem } from '../../../components/service/ServiceFAQ';
import type { RelatedServiceLink } from '../../../components/service/RelatedServices';

const ORIGIN =
  typeof window !== 'undefined' ? window.location.origin : 'https://thenextgenhealth.com';

const BREADCRUMB_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: `${ORIGIN}/` },
    { '@type': 'ListItem', position: 2, name: 'Industries', item: `${ORIGIN}/industries` },
    { '@type': 'ListItem', position: 3, name: 'Specialty & Emergency', item: `${ORIGIN}/industries/specialty-emergency` },
  ],
};

const FAQS: ServiceFAQItem[] = [
  {
    q: 'How do we compete with hospital systems on emergency keywords?',
    a: 'Hospital systems usually spend big on broad branded queries. We win on the long tail: condition-plus-symptom queries, neighborhood-plus-ER queries, and wait-time queries. The hospital can\'t outbid us on every "abdominal pain ER Plano" search — and that\'s where booked visits actually come from.',
  },
  {
    q: 'Is HIPAA risk higher for ER and urgent-care ads?',
    a: 'Yes — because intent itself reveals condition. We strip URL parameters that leak symptom data, deploy server-side conversion APIs that never ship PHI to ad networks, and use BAA-covered tooling on every step. Compliance is the gate every campaign passes through before launch.',
  },
  {
    q: 'What about wait-time pages — do they actually move bookings?',
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
    blurb: 'Dallas-metro ER engagement — visits, revenue, and the playbook behind both.',
    tag: 'Proof',
  },
];

const Illustration = (
  <svg viewBox="0 0 600 750" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
    <defs>
      <linearGradient id="spBg" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#3F4F66" />
        <stop offset="60%" stopColor="#2D3748" />
        <stop offset="100%" stopColor="#1F2837" />
      </linearGradient>
      <radialGradient id="spHalo" cx="50%" cy="40%" r="60%">
        <stop offset="0%" stopColor="#576DB5" stopOpacity=".30" />
        <stop offset="100%" stopColor="#576DB5" stopOpacity="0" />
      </radialGradient>
    </defs>
    <rect width="600" height="750" fill="url(#spBg)" />
    <rect width="600" height="750" fill="url(#spHalo)" />
    <g stroke="rgba(255,255,255,.05)" strokeWidth="1">
      <line x1="0" y1="180" x2="600" y2="180" />
      <line x1="0" y1="380" x2="600" y2="380" />
      <line x1="0" y1="580" x2="600" y2="580" />
      <line x1="200" y1="0" x2="200" y2="750" />
      <line x1="400" y1="0" x2="400" y2="750" />
    </g>
    <path
      d="M 20 380 L 100 380 L 130 380 L 150 320 L 175 440 L 200 280 L 220 380 L 280 380 L 310 380 L 330 330 L 355 430 L 380 380 L 580 380"
      fill="none"
      stroke="#576DB5"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <g transform="translate(300, 540)">
      <circle r="55" fill="none" stroke="#fff" strokeOpacity=".4" strokeWidth="2" />
      <circle r="80" fill="none" stroke="#576DB5" strokeWidth="2" strokeDasharray="3 5" />
      <circle r="22" fill="rgba(255,255,255,.18)" stroke="#fff" strokeWidth="1.5" />
      <circle r="6" fill="#fff" />
      <path d="M -50 -30 Q -100 -120 -150 -160" fill="none" stroke="rgba(255,255,255,.5)" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M 50 -30 Q 100 -120 150 -160" fill="none" stroke="rgba(255,255,255,.5)" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="-150" cy="-160" r="6" fill="#B38B6D" />
      <circle cx="150" cy="-160" r="6" fill="#B38B6D" />
    </g>
    <g fill="#576DB5" opacity=".7">
      <path d="M50 80 h10 v3 h-10 z M54 76 h2 v11 h-2 z" />
      <path d="M540 220 h10 v3 h-10 z M544 216 h2 v11 h-2 z" />
      <path d="M30 620 h10 v3 h-10 z M34 616 h2 v11 h-2 z" />
    </g>
    <text x="36" y="36" fontFamily="Plus Jakarta Sans, sans-serif" fontSize="10" fontWeight="700" fill="rgba(255,255,255,.55)" letterSpacing="3">FIG. C · ACUITY</text>
  </svg>
);

const QUICK_STATS: QuickStat[] = [
  { num: (<>+120<em>%</em></>), label: 'ER visits' },
  { num: (<>4.2<em>×</em></>), label: 'Emergency leads' },
  { num: (<>99.8<em>%</em></>), label: 'Compliance posture' },
];

const SPECIALTIES: SpecialtyRow[] = [
  { name: 'Freestanding ERs', desc: 'Trauma-search dominance, surge response, and competitor overflow capture.' },
  { name: 'Urgent care', desc: 'Volume-driven acquisition with wait-time pages and reputation systems.' },
  { name: 'Orthopedics', desc: 'Condition-page SEO, referral programs, and high-LTV elective campaigns.' },
  { name: 'Oncology', desc: 'HIPAA-safe nurturing flows, second-opinion funnels, and trial recruitment.' },
  { name: 'Cardiology specialty', desc: 'Procedure pages, physician directories, and primary-care referral hubs.' },
  { name: 'Radiology / imaging', desc: 'Service-line pages, payer & referral content, and walk-in acquisition.' },
];

const STEPS: PlayStep[] = [
  { name: 'Volume, payer & compliance audit', body: 'Specialty volume, payer mix, compliance posture, and current visibility reviewed end to end.' },
  { name: 'Compliance framework', body: 'HIPAA-safe tracking, ad-copy review, and consent flows shipped before anything goes live.' },
  { name: 'Visibility & capture', body: 'Local Pack dominance, ER landing pages, and specialty SEO running across the catchment area.' },
  { name: 'Optimization & governance', body: 'Weekly bid tuning, monthly retro, quarterly clinical-governance review.' },
];

const STATS: BigNumber[] = [
  { num: (<>+120<em>%</em></>), label: 'ER VISITS', caption: 'Lift in qualified ER visits from organic + paid combined.' },
  { num: (<>4.2<em>×</em></>), label: 'EMERGENCY LEADS', caption: 'Year-over-year growth in qualified high-acuity inquiries.' },
  { num: (<>−35<em>%</em></>), label: 'COST PER ACQUISITION', caption: 'Reduction through audience layering and landing-page optimization.' },
  { num: (<>99.8<em>%</em></>), label: 'COMPLIANCE POSTURE', caption: 'HIPAA + marketing-rule conformance across active campaigns.' },
];

const SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Specialty & Emergency Care — Marketing',
  serviceType: 'Healthcare Marketing',
  audience: 'ERs, urgent care, specialty practices, high-acuity providers',
};

const SpecialtyEmergency = () => {
  return (
    <>
      <IndustryHero
        tag="Acuity"
        title={<>High-acuity acquisition for <em>specialty care.</em></>}
        lede="Compliance-aware, urgency-first marketing built for ERs, urgent care, and specialty practices that need scale and speed."
        illustration={Illustration}
        quickStats={QUICK_STATS}
      />
      <Specialties rows={SPECIALTIES} />
      <Playbook steps={STEPS} />
      <Numbers stats={STATS} />
      <ServiceFAQ
        items={FAQS}
        serviceName="Specialty & Emergency Care — Marketing"
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
        body="A 30-minute call. We'll audit your compliance posture and current visibility, and share the closest case study — whether you sign with us or not."
      />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }}
      />
    </>
  );
};

export default SpecialtyEmergency;
