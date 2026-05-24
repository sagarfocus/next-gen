import IndustryHero from '@/components/industry/IndustryHero';
import Specialties from '@/components/industry/Specialties';
import Playbook from '@/components/industry/Playbook';
import Numbers from '@/components/industry/Numbers';
import IndustryPrinciples from '@/components/industry/IndustryPrinciples';
import IndustrySnapshots from '@/components/industry/IndustrySnapshots';
import IndustryCTA from '@/components/industry/IndustryCTA';
import ServiceFAQ from '@/components/service/ServiceFAQ';
import RelatedServices from '@/components/service/RelatedServices';
import Seo from '@/components/Seo';
import { buildBreadcrumbList } from '@/lib/schema';
import { SITE } from '@/content/site';
import type { QuickStat } from '@/components/industry/IndustryHero';
import type { SpecialtyRow } from '@/components/industry/Specialties';
import type { PlayStep } from '@/components/industry/Playbook';
import type { BigNumber } from '@/components/industry/Numbers';
import type { Principle } from '@/components/industry/IndustryPrinciples';
import type { Snapshot } from '@/components/industry/IndustrySnapshots';
import type { ServiceFAQItem } from '@/components/service/ServiceFAQ';
import type { RelatedServiceLink } from '@/components/service/RelatedServices';
import medspasHero from '../../../assets/med-spa-banner.png';
import snapMedspa from '../../../assets/medspa.png';
import snapAesthetic from '../../../assets/plastic-surgery.png';
import snapDerm from '../../../assets/dermatology.png';

const BREADCRUMB_SCHEMA = buildBreadcrumbList([
  { name: 'Home', path: '/' },
  { name: 'Industries', path: '/industries' },
  { name: 'MedSpas & Aesthetics' },
]);

const FAQS: ServiceFAQItem[] = [
  {
    q: 'Patients usually find us on Instagram - do we still need Google Ads and SEO?',
    a: 'Yes, but for different stages. Instagram and TikTok create demand; Google captures it the moment someone types "lip filler near me." Without the search layer, the demand you built leaks to whichever competitor ranks above you. We run them as one system, not two.',
  },
  {
    q: 'How do you measure LTV when most patients pay cash and procedures happen months apart?',
    a: "We pipe booking, treatment, and POS data into one customer record, then attribute LTV at 90 / 180 / 365 day windows. Treatments that look low-margin on first visit often unlock the highest LTV - that's the signal worth bidding behind.",
  },
  {
    q: 'Are before/after photos compliant in paid ads?',
    a: "Yes - when you have signed photo releases, when the photo isn't paired with promises of identical results, and when Meta's policies for cosmetic claims are followed precisely. We audit your release library before any creative goes live.",
  },
  {
    q: 'What about retention - the second and third visit is where the money is?',
    a: 'A retention drip ships alongside acquisition. Post-visit care, recall sequences for time-sensitive treatments (Botox at 4 months, lasers at 6), and a membership offer pitched at the right moment. We measure 90-day rebook rate as a primary KPI.',
  },
  {
    q: 'How do you handle competitive metros with 30+ med-spas in five miles?',
    a: 'We differentiate on niche, not breadth - we pick the two treatments where your team has a clear edge and dominate the search and social space around them. Wide positioning loses to narrow positioning in saturated metros every time.',
  },
];

const RELATED: RelatedServiceLink[] = [
  {
    to: '/meta-ads',
    name: 'Meta Ads',
    blurb: 'Aesthetic Instagram and Facebook creative that converts cold scrolls.',
    tag: 'Strategy',
  },
  {
    to: '/services/social-media-marketing',
    name: 'Social Media Marketing',
    blurb: 'The organic engine that makes the paid creative work harder.',
    tag: 'Distribution',
  },
  {
    to: '/case-studies/cosmetic-surgery-lead-growth',
    name: 'Aesthetic clinic lead growth · case study',
    blurb: 'The engagement narrative and the lead-growth numbers in one read.',
    tag: 'Proof',
  },
];

const Illustration = (
  <img src={medspasHero} alt="MedSpa treatment room" loading="eager" decoding="async" />
);

const QUICK_STATS: QuickStat[] = [
  {
    num: (
      <>
        4.5<em>×</em>
      </>
    ),
    label: 'Average ROAS',
  },
  {
    num: (
      <>
        +180<em>%</em>
      </>
    ),
    label: 'Qualified leads',
  },
  {
    num: (
      <>
        −40<em>%</em>
      </>
    ),
    label: 'Cost per booking',
  },
];

const SPECIALTIES: SpecialtyRow[] = [
  {
    name: 'MedSpa',
    desc: 'Membership programs, social-led acquisition, and consult-to-treatment funnels.',
  },
  {
    name: 'Aesthetics',
    desc: 'Procedure-page SEO, before/after galleries, and reputation systems.',
  },
  {
    name: 'Injectables',
    desc: 'High-frequency Meta creative tied to seasonal demand and add-on offers.',
  },
  { name: 'IV therapy', desc: 'Location-based campaigns with package & membership bundles.' },
  {
    name: 'Wellness clinics',
    desc: 'Longevity and concierge-style retention sequences for high-LTV members.',
  },
  {
    name: 'Boutique fitness + recovery',
    desc: 'Social-first acquisition and class-booking funnels.',
  },
];

const STEPS: PlayStep[] = [
  {
    name: 'Brand & funnel audit',
    body: 'Brand, creative, audience, and booking funnel reviewed against your service mix and goal CPL.',
  },
  {
    name: 'Audience & creative system',
    body: 'Custom audience model and premium creative library built for your treatments and price point.',
  },
  {
    name: 'Consult-to-treatment flow',
    body: 'High-converting consult forms, tracking, and reminder automation deployed and tuned weekly.',
  },
  {
    name: 'Membership & retention',
    body: 'Email + SMS sequences for upgrades, recall, referrals, and review collection.',
  },
];

const SNAPSHOTS: Snapshot[] = [
  {
    image: snapMedspa,
    label: 'Consult-to-treatment flow',
    caption:
      'High-converting consult forms, reminder automation, and a path that turns first visits into members.',
  },
  {
    image: snapAesthetic,
    label: 'Aesthetic creative library',
    caption:
      'Treatment-specific Meta creative, before/after assets, and seasonal angles tuned weekly.',
  },
  {
    image: snapDerm,
    label: 'Premium positioning',
    caption:
      'Procedure pages, photography, and reputation systems that earn the price your treatments deserve.',
  },
];

const PRINCIPLES: Principle[] = [
  {
    title: 'LTV-weighted bidding',
    body: 'Bids are set against the 365-day patient value, not first-visit margin. Treatments that look low-margin on day one often unlock the highest LTV - and the bids follow that signal.',
    accent: '#B38B6D',
  },
  {
    title: 'Compliance-safe creative',
    body: 'Every before/after asset passes a Meta + FTC review before the creative goes live. Release library, claims, and disclaimers audited up front - never as cleanup.',
    accent: '#576DB5',
  },
  {
    title: 'Retention as primary KPI',
    body: '90-day rebook rate is reported alongside acquisition cost. The second visit is where the economics turn - and retention sequences run from week one, not month six.',
    accent: '#8FBC8F',
  },
];

const STATS: BigNumber[] = [
  {
    num: (
      <>
        4.5<em>×</em>
      </>
    ),
    label: 'AVERAGE ROAS',
    caption: 'Return on ad spend across multi-channel campaigns in the first 90 days.',
  },
  {
    num: (
      <>
        +180<em>%</em>
      </>
    ),
    label: 'QUALIFIED LEADS',
    caption: 'Lift in pre-qualified consult requests after audience and creative rework.',
  },
  {
    num: (
      <>
        −40<em>%</em>
      </>
    ),
    label: 'COST PER BOOKING',
    caption: 'Reduction in cost per consult through funnel and bid optimization.',
  },
  {
    num: (
      <>
        $3.8M<em>+</em>
      </>
    ),
    label: 'ANNUAL REVENUE LIFT',
    caption: 'Typical added annual revenue across the engagement portfolio.',
  },
];

const SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'MedSpas & Wellness Brands - Marketing',
  serviceType: 'Healthcare Marketing',
  provider: { '@id': `${SITE.url}#organization` },
  audience: 'MedSpas, aesthetic clinics, IV therapy, wellness brands',
};

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQS.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
};

const MedSpas = () => {
  return (
    <>
      <Seo
        title="MedSpa & Aesthetic Marketing — On-Demand Patient Acquisition"
        description="High-volume social, Meta campaigns, and conversion-engineered websites built for elective and aesthetic services."
        path="/industries/medspas"
        schema={[SCHEMA, FAQ_SCHEMA, BREADCRUMB_SCHEMA]}
      />

      <IndustryHero
        tag="Aesthetic"
        title={
          <>
            Aesthetic patients, <em>on demand.</em>
          </>
        }
        lede="High-volume social, Meta campaigns, and conversion-engineered websites built for elective and aesthetic services."
        illustration={Illustration}
        quickStats={QUICK_STATS}
      />
      <Specialties rows={SPECIALTIES} />
      <IndustrySnapshots
        items={SNAPSHOTS}
        eyebrow="In practice"
        title={
          <>
            The aesthetic funnel, <em>visualized.</em>
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
            How we work for <em>aesthetics.</em>
          </>
        }
        intro="Three operating principles that distinguish a med-spa engagement from a generic agency rollout - measured against LTV, compliance, and rebook rate from day one."
      />
      <ServiceFAQ
        items={FAQS}
        serviceName="MedSpas & Aesthetics - Marketing"
        title="The five questions med-spa owners ask before signing."
        sectionNum="05"
      />
      <RelatedServices
        items={RELATED}
        sectionNum="06"
        title="Layer the levers that make aesthetics scale."
        intro="Meta builds the demand, social keeps the brand visible between visits, and a peer case study tells you what realistic compound looks like."
      />
      <IndustryCTA
        tag="Talk to us"
        title={<>Ready to fill your consult calendar?</>}
        body="A 30-minute call. We'll show you what your funnel looks like today and the closest case study from this library - whether you sign with us or not."
      />
    </>
  );
};

export default MedSpas;
