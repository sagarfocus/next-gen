import '../../styles/seo.css';
import Hero from './Hero';
import TrustBar from './TrustBar';
import Capabilities from './Capabilities';
import DataShowcase from './DataShowcase';
import HowGoogleRanks from './HowGoogleRanks';
import Glossary from './Glossary';
import Process from './Process';
import Comparison from './Comparison';
import LearningHub from './LearningHub';
import SubServices from './SubServices';
import FAQ, { SEO_FAQ_ITEMS } from './FAQ';
import CTA from './CTA';

const SERVICE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Healthcare SEO Services',
  serviceType: 'Search Engine Optimization',
  category: ['Technical SEO', 'On-Page SEO', 'Off-Page SEO', 'Local SEO', 'AEO', 'Content SEO'],
  provider: {
    '@type': 'Organization',
    name: 'TheNextGen Healthcare Marketing',
    url: 'https://thenextgen.example.com',
  },
  areaServed: { '@type': 'Country', name: 'United States' },
  audience: { '@type': 'Audience', audienceType: 'Healthcare practices, clinics, hospital networks' },
  offers: [
    { '@type': 'Offer', name: 'Starter', price: '2500', priceCurrency: 'USD', description: 'Foundational SEO program' },
    { '@type': 'Offer', name: 'Growth', price: '4500', priceCurrency: 'USD', description: 'Full-suite SEO + content engine' },
    { '@type': 'Offer', name: 'Scale', price: '7500', priceCurrency: 'USD', description: 'Multi-location SEO at portfolio scale' },
  ],
};

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: SEO_FAQ_ITEMS.map((it) => ({
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
    { '@type': 'ListItem', position: 3, name: 'SEO', item: '/services/seo' },
  ],
};

const SEO = () => {
  return (
    <>
      <Hero />
      <TrustBar />
      <Capabilities />
      <DataShowcase />
      <HowGoogleRanks />
      <Glossary />
      <Process />
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

export default SEO;
