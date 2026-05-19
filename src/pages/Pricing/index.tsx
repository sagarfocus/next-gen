import PricingHero from './PricingHero';
import PricingTiers from './PricingTiers';
import ComparisonTable from './ComparisonTable';
import InvestmentIncludes from './InvestmentIncludes';
import AutomationROI from './AutomationROI';
import PricingFAQ from './PricingFAQ';
import FinalCTA from './FinalCTA';

const SERVICE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'TheNextGen Healthcare Marketing Retainer',
  provider: {
    '@type': 'Organization',
    name: 'TheNextGen Healthcare Marketing',
  },
  offers: [
    {
      '@type': 'Offer',
      name: 'Starter Care',
      price: '5000',
      priceCurrency: 'USD',
      priceSpecification: {
        '@type': 'UnitPriceSpecification',
        billingDuration: 'P1M',
      },
    },
    {
      '@type': 'Offer',
      name: 'Growth Pro',
      price: '10000',
      priceCurrency: 'USD',
      priceSpecification: {
        '@type': 'UnitPriceSpecification',
        billingDuration: 'P1M',
      },
    },
    {
      '@type': 'Offer',
      name: 'Scale Elite',
      description: 'Custom pricing',
    },
  ],
};

const Pricing = () => {
  return (
    <>
      <PricingHero />
      <PricingTiers />
      <ComparisonTable />
      <InvestmentIncludes />
      <AutomationROI />
      <PricingFAQ />
      <FinalCTA />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_SCHEMA) }}
      />
    </>
  );
};

export default Pricing;
