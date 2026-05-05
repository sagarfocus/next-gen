import Hero from './Hero';
import KnowledgeBase from './KnowledgeBase';
import Pillars from './Pillars';
import Methodology from './Methodology';
import Proof from './Proof';
import Pricing from './Pricing';
import FAQ from './FAQ';
import CTA from './CTA';

const SERVICE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Healthcare SEO & Local Search',
  provider: {
    '@type': 'Organization',
    name: 'TheNextGen Healthcare Marketing',
  },
  areaServed: 'United States',
  serviceType: 'Search Engine Optimization',
  offers: [
    { '@type': 'Offer', name: 'Starter', price: '2500', priceCurrency: 'USD' },
    { '@type': 'Offer', name: 'Growth', price: '4500', priceCurrency: 'USD' },
    { '@type': 'Offer', name: 'Scale', price: '7500', priceCurrency: 'USD' },
  ],
};

const SEOLocalSearch = () => {
  return (
    <>
      <Hero />
      <KnowledgeBase />
      <Pillars />
      <Methodology />
      <Proof />
      <Pricing />
      <FAQ />
      <CTA />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_SCHEMA) }}
      />
    </>
  );
};

export default SEOLocalSearch;
