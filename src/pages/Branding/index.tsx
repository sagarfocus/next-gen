import '../../styles/branding.css';
import Hero from './Hero';
import TrustBar from './TrustBar';
import Deliverables from './Deliverables';
import HowBrandWorks from './HowBrandWorks';
import DataShowcase from './DataShowcase';
import BrandAnatomy from './BrandAnatomy';
import Process from './Process';
import CommonMistakes from './CommonMistakes';
import Glossary from './Glossary';
import Comparison from './Comparison';
import LearningHub from './LearningHub';
import SubServices from './SubServices';
import FAQ, { BR_FAQ_ITEMS } from './FAQ';
import CTA from './CTA';

const SERVICE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Healthcare Brand Identity & Design',
  serviceType: 'Brand Identity Design',
  category: [
    'Visual Identity',
    'Voice & Messaging',
    'Positioning',
    'Brand System',
    'Patient Experience',
    'Brand Guidelines',
  ],
  provider: {
    '@type': 'Organization',
    name: 'TheNextGen Healthcare Marketing',
    url: 'https://thenextgen.example.com',
  },
  areaServed: { '@type': 'Country', name: 'United States' },
  audience: {
    '@type': 'Audience',
    audienceType: 'Healthcare practices, clinics, hospital networks, MSO consolidations',
  },
};

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: BR_FAQ_ITEMS.map((it) => ({
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
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Brand Identity & Design',
      item: '/services/brand-identity-design',
    },
  ],
};

const Branding = () => {
  return (
    <>
      <Hero />
      <TrustBar />
      <Deliverables />
      <HowBrandWorks />
      <DataShowcase />
      <BrandAnatomy />
      <Process />
      <CommonMistakes />
      <Glossary />
      <Comparison />
      <LearningHub />
      <SubServices />
      <FAQ />
      <CTA />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_SCHEMA) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }}
      />
    </>
  );
};

export default Branding;
