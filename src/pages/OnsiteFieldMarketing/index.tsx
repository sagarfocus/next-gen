import '../../styles/onsite-field-marketing.css';
import Seo from '@/components/Seo';
import Hero from './Hero';
import TrustBar from './TrustBar';
import Brief from './Brief';
import Channels from './Channels';
import Deliverables from './Deliverables';
import Process from './Process';
import WhyUs from './WhyUs';
import Metrics from './Metrics';
import Challenges from './Challenges';
import Testimonials from './Testimonials';
import FAQ, { OFM_FAQ_ITEMS } from './FAQ';
import CTA from './CTA';
import { buildBreadcrumbList } from '@/lib/schema';
import { SERVICE_SCHEMA } from './data';

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: OFM_FAQ_ITEMS.map((it) => ({
    '@type': 'Question',
    name: it.q,
    acceptedAnswer: { '@type': 'Answer', text: it.a },
  })),
};

const BREADCRUMB_SCHEMA = buildBreadcrumbList([
  { name: 'Home', path: '/' },
  { name: 'Onsite Field Marketing' },
]);

const OnsiteFieldMarketing = () => (
  <>
    <Seo
      title="Onsite Field Marketing for Healthcare — Community Booths, B2B Referrals & Sponsorships"
      description="Healthcare-only field marketing. Booths, B2B referral visits, sponsorships, and door-drops — staffed by trained ambassadors, HIPAA-aware tablet intake, every lead attributed to first-visit revenue."
      path="/onsite-field-marketing"
      schema={[SERVICE_SCHEMA, FAQ_SCHEMA, BREADCRUMB_SCHEMA]}
    />

    <Hero />
    <TrustBar />
    <Brief />
    <Channels />
    <Deliverables />
    <Process />
    <WhyUs />
    <Metrics />
    <Challenges />
    <Testimonials />
    <FAQ />
    <CTA />
  </>
);

export default OnsiteFieldMarketing;
