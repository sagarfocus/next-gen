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

const SERVICE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Healthcare Marketing Analytics & Reporting',
  serviceType: 'Marketing Analytics',
  category: ['Dashboard build', 'Conversion tracking', 'Multi-touch attribution', 'Cohort + LTV analysis', 'Anomaly alerting', 'Forecasting'],
  provider: {
    '@type': 'Organization',
    name: 'TheNextGen Healthcare Marketing',
    url: 'https://thenextgen.example.com',
  },
  areaServed: { '@type': 'Country', name: 'United States' },
  audience: { '@type': 'Audience', audienceType: 'Healthcare practices, clinics, hospital networks, MSOs' },
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

const BREADCRUMB_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: '/' },
    { '@type': 'ListItem', position: 2, name: 'Services', item: '/services' },
    { '@type': 'ListItem', position: 3, name: 'Analytics & Reporting', item: '/services/analytics-reporting' },
  ],
};

const Analytics = () => {
  return (
    <>
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

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }} />
    </>
  );
};

export default Analytics;
