import '../../styles/medical-automation.css';
import Seo from '@/components/Seo';
import Hero from './Hero';
import TrustBar from './TrustBar';
import Brief from './Brief';
import Workflows from './Workflows';
import Coverage from './Coverage';
import Stack from './Stack';
import Process from './Process';
import WhyUs from './WhyUs';
import Metrics from './Metrics';
import Testimonials from './Testimonials';
import FAQ, { MAU_FAQ_ITEMS } from './FAQ';
import CTA from './CTA';
import { buildBreadcrumbList } from '@/lib/schema';
import { SERVICE_SCHEMA } from './data';

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: MAU_FAQ_ITEMS.map((it) => ({
    '@type': 'Question',
    name: it.q,
    acceptedAnswer: { '@type': 'Answer', text: it.a.replace(/&[a-z]+;/gi, '') },
  })),
};

const BREADCRUMB_SCHEMA = buildBreadcrumbList([
  { name: 'Home', path: '/' },
  { name: 'Medical Automation' },
]);

const MedicalAutomation = () => (
  <>
    <Seo
      title="Medical Automation for Healthcare Clinics — HIPAA-Aware, EHR-Connected"
      description="Six HIPAA-aware workflows on one BAA-covered stack — patient intake, insurance verify, adaptive reminders, AI triage, review capture, recall. EHR-connected, audit-ready, free workflow audit."
      path="/medical-automation"
      schema={[SERVICE_SCHEMA, FAQ_SCHEMA, BREADCRUMB_SCHEMA]}
    />

    <Hero />
    <TrustBar />
    <Brief />
    <Workflows />
    <Coverage />
    <Stack />
    <Process />
    <WhyUs />
    <Metrics />
    <Testimonials />
    <FAQ />
    <CTA />
  </>
);

export default MedicalAutomation;
