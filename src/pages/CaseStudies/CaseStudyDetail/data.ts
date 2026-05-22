import type { CaseStudy } from '../caseStudies.data';

export const ORIGIN =
  typeof window !== 'undefined' ? window.location.origin : 'https://thenextgenhealth.com';

export const buildSchema = (study: CaseStudy) => ({
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: `${study.name} - ${study.metricNum} ${study.metricLbl}`,
  description: study.brief,
  url: `${ORIGIN}/case-studies/${study.id}`,
  about: {
    '@type': 'Organization',
    name: study.name,
    address: study.location,
  },
  author: {
    '@type': 'Organization',
    name: 'TheNextGen Healthcare Marketing',
    url: ORIGIN,
  },
  publisher: {
    '@type': 'Organization',
    name: 'TheNextGen Healthcare Marketing',
    url: ORIGIN,
  },
  mainEntityOfPage: `${ORIGIN}/case-studies/${study.id}`,
});

export const buildBreadcrumbSchema = (study: CaseStudy) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: `${ORIGIN}/` },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Case studies',
      item: `${ORIGIN}/case-studies`,
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: study.name,
      item: `${ORIGIN}/case-studies/${study.id}`,
    },
  ],
});
