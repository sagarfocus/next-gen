import Hero from './Hero';
import FailureModes from './FailureModes';
import Directories from './Directories';
import Process from './Process';
import Closing from './Closing';
import Seo from '@/components/Seo';
import { buildBreadcrumbList } from '@/lib/schema';
import { SITE } from '@/content/site';

/* ============================================================
   CITATION BUILDING — Local-SEO authority page.
   Sage tone, "one signature across every directory" metaphor.
   Tiered authority groups (Anchor → Vertical → General),
   numbered failure modes, three-step working programme.
   ============================================================ */

const SERVICE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Healthcare Citation Building & NAP Consistency',
  serviceType: 'Local SEO · Authority Signals · Citation Management',
  provider: { '@id': `${SITE.url}#organization` },
  areaServed: { '@type': 'Country', name: 'United States' },
  audience: {
    '@type': 'Audience',
    audienceType: 'Healthcare practices, clinics, multi-location MSOs',
  },
};

const BREADCRUMB_SCHEMA = buildBreadcrumbList([
  { name: 'Home', path: '/' },
  { name: 'Citation Building' },
]);

const CitationBuilding = () => (
  <>
    <Seo
      title="Healthcare Citation Building — NAP Consistency for Local Pack Ranking"
      description="A citation programme that consolidates your name, address, and phone into one authoritative record across the healthcare directories search engines actually weight."
      path="/citation-building"
      schema={[SERVICE_SCHEMA, BREADCRUMB_SCHEMA]}
    />

    <Hero />
    <FailureModes />
    <Directories />
    <Process />
    <Closing />
  </>
);

export default CitationBuilding;
