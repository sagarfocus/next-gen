import PricingHero from './PricingHero';
import PricingTiers from './PricingTiers';
import ComparisonTable from './ComparisonTable';
import InvestmentIncludes from './InvestmentIncludes';
import AutomationROI from './AutomationROI';
import PricingFAQ from './PricingFAQ';
import FinalCTA from './FinalCTA';
import Seo from '@/components/Seo';
import { buildBreadcrumbList } from '@/lib/schema';
import { SITE } from '@/content/site';

// Service + Offers schema for the three retainer tiers. The Scale Elite
// tier uses `priceCurrency` without a fixed `price` to signal a custom
// quote rather than an unknown number.
const SERVICE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Healthcare Marketing Retainer',
  provider: { '@id': `${SITE.url}#organization` },
  serviceType: 'Healthcare Marketing',
  offers: [
    {
      '@type': 'Offer',
      name: 'Starter Care',
      price: '5000',
      priceCurrency: 'USD',
      priceSpecification: {
        '@type': 'UnitPriceSpecification',
        price: '5000',
        priceCurrency: 'USD',
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
        price: '10000',
        priceCurrency: 'USD',
        billingDuration: 'P1M',
      },
    },
    {
      '@type': 'Offer',
      name: 'Scale Elite',
      description: 'Custom-scoped retainer for multi-location healthcare networks.',
      priceCurrency: 'USD',
    },
  ],
};

const BREADCRUMB_SCHEMA = buildBreadcrumbList([
  { name: 'Home', path: '/' },
  { name: 'Pricing' },
]);

const Pricing = () => {
  return (
    <>
      <Seo
        title="Healthcare Marketing Pricing — Retainer Tiers from $5K/Month"
        description="Transparent monthly retainers for healthcare marketing — Starter $5K, Growth $10K, Scale custom. No ad-spend markup, no setup fees, month-to-month after a 90-day setup."
        path="/pricing"
        schema={[SERVICE_SCHEMA, BREADCRUMB_SCHEMA]}
      />

      <PricingHero />
      <PricingTiers />
      <ComparisonTable />
      <InvestmentIncludes />
      <AutomationROI />
      <PricingFAQ />
      <FinalCTA />
    </>
  );
};

export default Pricing;
