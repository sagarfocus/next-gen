import '../../../styles/phase2.css';
import Hero from './Hero';
import Modules from './Modules';
import Stack from './Stack';
import Gantt from './Gantt';
import Strip from './Strip';
import Seo from '@/components/Seo';
import { buildBreadcrumbList } from '@/lib/schema';
import { SITE } from '@/content/site';

/**
 * Phase 2 - Swiss layout #2: modular block grid with light accent cards,
 * hover lifts, integration stack, and parallel-sprint Gantt timeline.
 */

const SERVICE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Phase 2 — Strategy & Infrastructure Build',
  serviceType: 'Healthcare Marketing Strategy · Infrastructure Build',
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
  { name: 'Phase 2 — Strategy & Build' },
]);

const Phase2 = () => (
  <main className="ph2-root">
    <Seo
      title="Phase 2: Strategy & Infrastructure Build — Healthcare Marketing Methodology"
      description="Two parallel tracks — strategy maps service-specific keywords and persona journeys; the build track wires the infrastructure so every lead becomes a tracked, attributable event."
      path="/methodology/phase-2"
      schema={[SERVICE_SCHEMA, BREADCRUMB_SCHEMA]}
    />

    <div className="ph2-wrap">
      <Hero />
      <Modules />
      <Stack />
      <Gantt />
    </div>

    <Strip />
  </main>
);

export default Phase2;
