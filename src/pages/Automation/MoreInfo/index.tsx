import Hero from './Hero';
import Pillars from './Pillars';
import About from './About';
import Solutions from './Solutions';
import Process from './Process';
import CTA from './CTA';
import Seo from '@/components/Seo';
import { buildBreadcrumbList } from '@/lib/schema';
import { SITE } from '@/content/site';

const SERVICE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Healthcare Automation Playbook',
  serviceType: 'Healthcare Workflow Automation Strategy · HIPAA-Aware',
  provider: { '@id': `${SITE.url}#organization` },
  areaServed: { '@type': 'Country', name: 'United States' },
  audience: {
    '@type': 'Audience',
    audienceType: 'Healthcare practice owners, clinic operators, multi-location networks',
  },
};

const BREADCRUMB_SCHEMA = buildBreadcrumbList([
  { name: 'Home', path: '/' },
  { name: 'Automation', path: '/automation' },
  { name: 'Playbook' },
]);

const MoreInfo = () => (
  <main className="amih" id="amih-top">
    <Seo
      title="Healthcare Automation Playbook — HIPAA-Safe Workflow Guide"
      description="A practitioner's guide to deploying patient-facing automation without breaking compliance, scope, or front-desk sanity — written by the team behind 200+ live clinical workflows."
      path="/automation/more-info"
      schema={[SERVICE_SCHEMA, BREADCRUMB_SCHEMA]}
    />

    <Hero />
    <Pillars />
    <About />
    <Solutions />
    <Process />
    <CTA />
  </main>
);

export default MoreInfo;
