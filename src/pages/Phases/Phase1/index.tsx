import '../../../styles/phase1.css';
import Hero from './Hero';
import Scorecard from './Scorecard';
import Dimensions from './Dimensions';
import Funnel from './Funnel';
import Timeline from './Timeline';
import Deliverables from './Deliverables';
import Foot from './Foot';
import Seo from '@/components/Seo';
import { buildBreadcrumbList } from '@/lib/schema';
import { SITE } from '@/content/site';

/**
 * Phase 1 - Swiss layout: Numerical anchor + visual audit modules.
 * Body focuses on SEO-perspective audit dimensions with inline SVG
 * illustrations so each section is self-explanatory.
 */

const SERVICE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Phase 1 — Discovery & Technical Audit',
  serviceType: 'Healthcare Marketing Audit · Discovery Phase',
  provider: { '@id': `${SITE.url}#organization` },
  areaServed: { '@type': 'Country', name: 'United States' },
  audience: {
    '@type': 'Audience',
    audienceType: 'Healthcare practices, clinics, hospital networks',
  },
};

const BREADCRUMB_SCHEMA = buildBreadcrumbList([
  { name: 'Home', path: '/' },
  { name: 'Methodology' },
  { name: 'Phase 1 — Discovery & Audit' },
]);

const Phase1 = () => (
  <main className="ph1-root">
    <Seo
      title="Phase 1: Discovery & Technical Audit — Healthcare Marketing Methodology"
      description="A two-week forensic of every search, ad, and front-desk surface your clinic owns. We measure where patients are leaking, then hand you a prioritized scorecard."
      path="/methodology/phase-1"
      schema={[SERVICE_SCHEMA, BREADCRUMB_SCHEMA]}
    />

    <div className="ph1-wrap">
      <Hero />
      <Scorecard />
      <Dimensions />
      <Funnel />
      <Timeline />
      <Deliverables />
      <Foot />
    </div>
  </main>
);

export default Phase1;
