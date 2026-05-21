import Hero from './Hero';
import Problem from './Problem';
import Pillars from './Pillars';
import Methodology from './Methodology';
import Solution from './Solution';
import Dealing from './Dealing';
import Proof from './Proof';
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
      <Problem />
      <Pillars />
      <Methodology />
      <Solution />
      <Dealing />
      <Proof />
      <CTA />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_SCHEMA) }}
      />
    </>
  );
};

export default SEOLocalSearch;
