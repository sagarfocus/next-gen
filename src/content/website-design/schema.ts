import { FAQS } from './faqs';

const ORG_NAME = 'TheNextGen Healthcare Marketing';
const SERVICE_URL = 'https://focusyourfinance.com/services/website-design-dev';

export const SERVICE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Healthcare Website Design & Development',
  url: SERVICE_URL,
  provider: { '@type': 'Organization', name: ORG_NAME },
  areaServed: 'United States',
  serviceType: 'Website Design & Development',
  offers: [
    { '@type': 'Offer', name: 'Essential single-location', price: '7500', priceCurrency: 'USD' },
    { '@type': 'Offer', name: 'Growth', price: '14500', priceCurrency: 'USD' },
    { '@type': 'Offer', name: 'Multi-location / Custom', price: '28000', priceCurrency: 'USD' },
  ],
};

export const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQS.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: {
      '@type': 'Answer',
      text: typeof f.a === 'string' ? f.a : '',
    },
  })),
};

export const BREADCRUMB_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://focusyourfinance.com/' },
    { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://focusyourfinance.com/services' },
    { '@type': 'ListItem', position: 3, name: 'Website Design & Development', item: SERVICE_URL },
  ],
};
