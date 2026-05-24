import Hero from './Hero';
import Journey from './Journey';
import FrictionMap from './FrictionMap';
import Touchpoints from './Touchpoints';
import Metrics from './Metrics';
import Process from './Process';
import Closing from './Closing';
import Seo from '@/components/Seo';
import { buildBreadcrumbList } from '@/lib/schema';
import { SITE } from '@/content/site';

const SERVICE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Patient Experience & Journey Design for Healthcare Practices',
  serviceType: 'Patient Experience · UX · Journey Mapping · Operations',
  provider: { '@id': `${SITE.url}#organization` },
  areaServed: { '@type': 'Country', name: 'United States' },
  audience: {
    '@type': 'Audience',
    audienceType: 'Healthcare practices, clinics, hospital networks',
  },
};

const BREADCRUMB_SCHEMA = buildBreadcrumbList([
  { name: 'Home', path: '/' },
  { name: 'Patient Experience' },
]);

const PatientExperience = () => (
  <>
    <Seo
      title="Patient Experience & Journey Design for Healthcare Practices"
      description="Map the patient journey from a 2 a.m. Google search to a follow-up text a week after the visit. Friction map, touchpoint design, and operations review for clinics."
      path="/patient-experience"
      schema={[SERVICE_SCHEMA, BREADCRUMB_SCHEMA]}
    />

    <Hero />
    <Journey />
    <FrictionMap />
    <Touchpoints />
    <Metrics />
    <Process />
    <Closing />
  </>
);

export default PatientExperience;
