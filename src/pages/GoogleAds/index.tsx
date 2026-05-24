import '../../styles/googleads.css';
import Hero from './Hero';
import TrustBar from './TrustBar';
import CampaignTypes from './CampaignTypes';
import HowAdsWork from './HowAdsWork';
import DataShowcase from './DataShowcase';
import AdAnatomy from './AdAnatomy';
import Process from './Process';
import CommonMistakes from './CommonMistakes';
import Glossary from './Glossary';
import Comparison from './Comparison';
import LearningHub from './LearningHub';
import SubServices from './SubServices';
import FAQ, { GA_FAQ_ITEMS } from './FAQ';
import CTA from './CTA';
import Seo from '@/components/Seo';
import { buildBreadcrumbList } from '@/lib/schema';
import { SITE } from '@/content/site';

const SERVICE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Healthcare Google Ads Management',
  serviceType: 'Pay-Per-Click Advertising',
  category: ['Search Ads', 'Performance Max', 'Display', 'YouTube Ads', 'Shopping', 'Local Services Ads'],
  provider: { '@id': `${SITE.url}#organization` },
  areaServed: { '@type': 'Country', name: 'United States' },
  audience: {
    '@type': 'Audience',
    audienceType: 'Healthcare practices, clinics, hospital networks',
  },
  offers: [
    { '@type': 'Offer', name: 'Starter', price: '2500', priceCurrency: 'USD', description: 'Single-location, single-campaign-type accounts' },
    { '@type': 'Offer', name: 'Growth', price: '4500', priceCurrency: 'USD', description: 'Multi-campaign, Search + PMax + Remarketing' },
    { '@type': 'Offer', name: 'Scale', price: '7500', priceCurrency: 'USD', description: 'Multi-location networks, full-channel paid' },
  ],
};

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: GA_FAQ_ITEMS.map((it) => ({
    '@type': 'Question',
    name: it.q,
    acceptedAnswer: { '@type': 'Answer', text: it.a },
  })),
};

const BREADCRUMB_SCHEMA = buildBreadcrumbList([
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'Google Ads' },
]);

const GoogleAds = () => {
  return (
    <>
      <Seo
        title="Healthcare Google Ads Management — HIPAA-Aware PPC"
        description="Search, PMax, Display, YouTube, and Local Services Ads run by a healthcare-only PPC team. HIPAA-aware tracking, 30-minute audit, month-to-month after a 90-day ramp."
        path="/services/google-ads"
        schema={[SERVICE_SCHEMA, FAQ_SCHEMA, BREADCRUMB_SCHEMA]}
      />

      <Hero />
      <TrustBar />
      <CampaignTypes />
      <HowAdsWork />
      <DataShowcase />
      <AdAnatomy />
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

export default GoogleAds;
