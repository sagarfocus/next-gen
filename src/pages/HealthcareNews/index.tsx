import NewsHead from './NewsHead';
import NewsHeroGrid from './NewsHeroGrid';
import NewsThreeColumn from './NewsThreeColumn';
import TrendingRail from './TrendingRail';
import NewsletterStrip from './NewsletterStrip';

const ORIGIN =
  typeof window !== 'undefined' ? window.location.origin : 'https://thenextgenhealth.com';

const NEWS_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Healthcare News & Insights - TheNextGen Weekly Brief',
  description:
    'Weekly editorial brief covering healthcare research, compliance, telehealth, AI operations, and patient-acquisition marketing.',
  url: `${ORIGIN}/healthcare-news`,
  isPartOf: {
    '@type': 'WebSite',
    name: 'TheNextGen Healthcare Marketing',
    url: ORIGIN,
  },
  publisher: {
    '@type': 'Organization',
    name: 'TheNextGen Healthcare Marketing',
    url: ORIGIN,
  },
};

const BREADCRUMB_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: `${ORIGIN}/` },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Resources',
      item: `${ORIGIN}/blog`,
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Healthcare News',
      item: `${ORIGIN}/healthcare-news`,
    },
  ],
};

const HealthcareNews = () => {
  return (
    <>
      <NewsHead />
      <NewsHeroGrid />
      <NewsThreeColumn />
      <TrendingRail />
      <NewsletterStrip />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(NEWS_SCHEMA) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }}
      />
    </>
  );
};

export default HealthcareNews;
