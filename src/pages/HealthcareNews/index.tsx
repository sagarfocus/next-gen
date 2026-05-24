import NewsHead from './NewsHead';
import NewsHeroGrid from './NewsHeroGrid';
import NewsThreeColumn from './NewsThreeColumn';
import TrendingRail from './TrendingRail';
import NewsletterStrip from './NewsletterStrip';
import Seo from '@/components/Seo';
import { buildBreadcrumbList } from '@/lib/schema';
import { SITE } from '@/content/site';

const NEWS_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Healthcare News & Insights - TheNextGen Weekly Brief',
  description:
    'Weekly editorial brief covering healthcare research, compliance, telehealth, AI operations, and patient-acquisition marketing.',
  url: `${SITE.url}/healthcare-news`,
  isPartOf: { '@id': `${SITE.url}#website` },
  publisher: { '@id': `${SITE.url}#organization` },
  inLanguage: 'en-US',
};

// Note: prior breadcrumb used "Resources → /blog" at position 2, but
// /healthcare-news isn't a child of /blog (there is no /resources route).
// Corrected to a direct Home → Healthcare News crumb that matches the URL.
const BREADCRUMB_SCHEMA = buildBreadcrumbList([
  { name: 'Home', path: '/' },
  { name: 'Healthcare News' },
]);

const HealthcareNews = () => {
  return (
    <>
      <Seo
        title="Healthcare News & HIPAA Industry Updates — Weekly Brief"
        description="Weekly editorial brief covering healthcare research, compliance, telehealth, AI operations, and patient-acquisition marketing — from the TheNextGen team."
        path="/healthcare-news"
        schema={[NEWS_SCHEMA, BREADCRUMB_SCHEMA]}
      />

      <NewsHead />
      <NewsHeroGrid />
      <NewsThreeColumn />
      <TrendingRail />
      <NewsletterStrip />
    </>
  );
};

export default HealthcareNews;
