import Hero from './Hero';
import Workflows from './Workflows';
import Coverage from './Coverage';
import Stack from './Stack';
import Metrics from './Metrics';
import Process from './Process';
import Closing from './Closing';
import Seo from '@/components/Seo';
import { buildBreadcrumbList } from '@/lib/schema';
import { SERVICE_SCHEMA } from './data';

const BREADCRUMB_SCHEMA = buildBreadcrumbList([
  { name: 'Home', path: '/' },
  { name: 'Medical Automation' },
]);

const MedicalAutomation = () => (
  <>
    <Seo
      title="Medical Automation for Clinics — HIPAA-Aware, EHR-Connected Workflows"
      description="Six healthcare automation workflows on one stack — patient intake, insurance verify, adaptive reminders, AI triage, review capture, recall. HIPAA-aware and EHR-connected."
      path="/medical-automation"
      schema={[SERVICE_SCHEMA, BREADCRUMB_SCHEMA]}
    />

    <Hero />
    <Workflows />
    <Coverage />
    <Stack />
    <Metrics />
    <Process />
    <Closing />
  </>
);

export default MedicalAutomation;
