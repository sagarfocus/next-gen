import Hero from './Hero';
import Chart from './Chart';
import Phases from './Phases';
import Quarters from './Quarters';
import Commitments from './Commitments';
import Closing from './Closing';
import Seo from '@/components/Seo';
import { buildBreadcrumbList } from '@/lib/schema';
import { SITE } from '@/content/site';

const SERVICE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'The 12-Month Healthcare Growth Plan',
  serviceType: 'Healthcare Marketing Strategy · Growth Roadmap',
  provider: { '@id': `${SITE.url}#organization` },
  areaServed: { '@type': 'Country', name: 'United States' },
  audience: {
    '@type': 'Audience',
    audienceType: 'Healthcare practices, clinics, hospital networks',
  },
};

const BREADCRUMB_SCHEMA = buildBreadcrumbList([
  { name: 'Home', path: '/' },
  { name: 'Growth Plan' },
]);

const GrowthPlan = () => (
  <>
    <Seo
      title="The 12-Month Healthcare Growth Plan — Four Phases, One Chart"
      description="A growth plan you can read at a glance — four phases, twelve months, one trajectory benchmarked against your starting line. Engineered for healthcare practices."
      path="/growth-plan"
      schema={[SERVICE_SCHEMA, BREADCRUMB_SCHEMA]}
    />

    <Hero />
    <Chart />
    <Phases />
    <Quarters />
    <Commitments />
    <Closing />
  </>
);

export default GrowthPlan;
