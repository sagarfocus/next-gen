import Hero from './Hero';
import Shifts from './Shifts';
import Coverage from './Coverage';
import ReadinessCriteria from './ReadinessCriteria';
import Closing from './Closing';
import Seo from '@/components/Seo';
import { buildBreadcrumbList } from '@/lib/schema';
import { SITE } from '@/content/site';

/* ============================================================
   AEO SCHEMA — Answer-engine optimisation page.
   Lavender/cta-blue tone, code-structure metaphor.
   Quote-style shift cards, schema-group code panels, ship-readiness
   criteria, gradient closing.
   ============================================================ */

const SERVICE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'AEO & Schema Markup for Healthcare Practices',
  serviceType: 'Answer Engine Optimization · Schema Markup · AI Overview Eligibility',
  provider: { '@id': `${SITE.url}#organization` },
  areaServed: { '@type': 'Country', name: 'United States' },
  audience: {
    '@type': 'Audience',
    audienceType: 'Healthcare practices, clinics, multi-location networks',
  },
};

const BREADCRUMB_SCHEMA = buildBreadcrumbList([
  { name: 'Home', path: '/' },
  { name: 'AEO & Schema' },
]);

const AeoSchema = () => (
  <>
    <Seo
      title="AEO & Schema Markup for Healthcare — Get Cited in AI Overviews"
      description="Schema markup and editorial structure built for AI Overviews, voice search, and conversational query surfaces. A working programme, not a one-time SEO retrofit."
      path="/aeo-schema"
      schema={[SERVICE_SCHEMA, BREADCRUMB_SCHEMA]}
    />

    <Hero />
    <Shifts />
    <Coverage />
    <ReadinessCriteria />
    <Closing />
  </>
);

export default AeoSchema;
