import '../../styles/analytics.css';
import Hero from './Hero';
import TrustBar from './TrustBar';
import DataSources from './DataSources';
import HowAttributionWorks from './HowAttributionWorks';
import DataShowcase from './DataShowcase';
import DashboardAnatomy from './DashboardAnatomy';
import Process from './Process';
import CommonMistakes from './CommonMistakes';
import Glossary from './Glossary';
import Comparison from './Comparison';
import LearningHub from './LearningHub';
import SubServices from './SubServices';
import FAQ, { AN_FAQ_ITEMS } from './FAQ';
import CTA from './CTA';
import Seo from '@/components/Seo';
import { buildBreadcrumbList } from '@/lib/schema';
import { SITE } from '@/content/site';

const SERVICE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Healthcare Marketing Analytics & Reporting',
  serviceType: 'Marketing Analytics',
  category: [
    'Dashboard build',
    'Conversion tracking',
    'Multi-touch attribution',
    'Cohort + LTV analysis',
    'Anomaly alerting',
    'Forecasting',
  ],
  provider: { '@id': `${SITE.url}#organization` },
  areaServed: { '@type': 'Country', name: 'United States' },
  audience: {
    '@type': 'Audience',
    audienceType: 'Healthcare practices, clinics, hospital networks, MSOs',
  },
};

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: AN_FAQ_ITEMS.map((it) => ({
    '@type': 'Question',
    name: it.q,
    acceptedAnswer: { '@type': 'Answer', text: it.a },
  })),
};

const BREADCRUMB_SCHEMA = buildBreadcrumbList([
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'Analytics & Reporting' },
]);

const Analytics = () => {
  return (
    <>
      <Seo
        title="Healthcare Marketing Analytics & Reporting — HIPAA-Aware Dashboards"
        description="Unify Google Ads, Meta, GA4, Search Console, GBP, CRM, EHR, call tracking, and booking data into one HIPAA-aware dashboard with multi-touch attribution."
        path="/services/analytics-reporting"
        schema={[SERVICE_SCHEMA, FAQ_SCHEMA, BREADCRUMB_SCHEMA]}
      />

      <Hero />
      <TrustBar />
      <DataSources />
      <HowAttributionWorks />
      <DataShowcase />
      <DashboardAnatomy />
      <Process />
      <CommonMistakes />
      <Glossary />
      <Comparison />
      <LearningHub />
      <SubServices />
      <FAQ />
      <CTA />
    </>
  );
};

export default Analytics;
