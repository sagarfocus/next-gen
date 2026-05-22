export const TAILWIND_ACCENT = '#B38B6D';

export const SERVICE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Free Healthcare Growth Audit',
  serviceType: 'Marketing audit and 90-day growth plan',
  provider: {
    '@type': 'LocalBusiness',
    name: 'TheNextGen Healthcare Marketing',
    url: 'https://thenextgenhealth.com',
  },
  description:
    'A free 5-day working audit for healthcare practices: visibility score, funnel leak map, paid media review, and a ranked 90-day plan. Yours to keep.',
  areaServed: 'United States',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
    availability: 'https://schema.org/InStock',
  },
};

export const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is the growth audit really free?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. No credit card, no upsell on the call. The plan ships as a PDF either way and is yours to keep.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does the audit take?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Five business days from submission to delivery. The working call is 45 minutes once the audit is complete.',
      },
    },
    {
      '@type': 'Question',
      name: 'Who runs the audit?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A senior growth strategist on our team - not a templated report and not a sales representative.',
      },
    },
  ],
};
