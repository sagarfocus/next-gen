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

const SERVICE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Healthcare Google Ads Management',
  serviceType: 'Pay-Per-Click Advertising',
  category: ['Search Ads', 'Performance Max', 'Display', 'YouTube Ads', 'Shopping', 'Local Services Ads'],
  provider: {
    '@type': 'Organization',
    name: 'TheNextGen Healthcare Marketing',
    url: 'https://thenextgen.example.com',
  },
  areaServed: { '@type': 'Country', name: 'United States' },
  audience: { '@type': 'Audience', audienceType: 'Healthcare practices, clinics, hospital networks' },
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

const BREADCRUMB_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: '/' },
    { '@type': 'ListItem', position: 2, name: 'Services', item: '/services' },
    { '@type': 'ListItem', position: 3, name: 'Google Ads', item: '/services/google-ads' },
  ],
};

const GoogleAds = () => {
  return (
    <>
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

export default GoogleAds;
