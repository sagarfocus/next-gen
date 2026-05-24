import Hero from './Hero';
import TrustStrip from './TrustStrip';
import TheGap from './TheGap';
import Channels from './Channels';
import HowItRuns from './HowItRuns';
import Stack from './Stack';
import Outcomes from './Outcomes';
import Package from './Package';
import Voice from './Voice';
import Faq from './Faq';
import Closing from './Closing';
import Seo from '@/components/Seo';
import { buildBreadcrumbList } from '@/lib/schema';
import { SCHEMA } from './data';

/* ============================================================
   HEALTHCARE GROWTH ENGINE — revamped editorial layout.
   Hero · Trust strip · Gap · Channels · Engine loop · Stack ·
   Outcomes · Engagement package · Voice · FAQ · Closing CTA.
   Swiss grid, hairline rules, restrained colour. Every element
   earns its place — visual hierarchy first, copy second.
   ============================================================ */

const BREADCRUMB_SCHEMA = buildBreadcrumbList([
  { name: 'Home', path: '/' },
  { name: 'Healthcare Growth Engine' },
]);

const HealthcareGrowthEngine = () => (
  <>
    <Seo
      title="The Healthcare Growth Engine — Integrated SEO + Paid + Automation"
      description="One integrated system across SEO, paid media, and automation — instrumented end-to-end, reviewed weekly, tuned for clinic economics. From $2,500/mo, no 12-month lock-in."
      path="/healthcare-growth-engine"
      schema={[SCHEMA, BREADCRUMB_SCHEMA]}
    />

    <Hero />
    <TrustStrip />
    <TheGap />
    <Channels />
    <HowItRuns />
    <Stack />
    <Outcomes />
    <Package />
    <Voice />
    <Faq />
    <Closing />
  </>
);

export default HealthcareGrowthEngine;
