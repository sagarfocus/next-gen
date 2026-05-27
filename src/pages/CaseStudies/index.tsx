import CaseStudiesHead from './CaseStudiesHead';
import FeaturedCase from './FeaturedCase';
import PartnersMarquee from './PartnersMarquee';
import CaseStudiesCarousel from './CaseStudiesCarousel';
import StatsStrip from './StatsStrip';
import CaseStudySpotlight from './CaseStudySpotlight';
import EngagementProcess from './EngagementProcess';
import CTABanner from './CTABanner';
import Seo from '@/components/Seo';
import { buildBreadcrumbList } from '@/lib/schema';
import { SITE } from '@/content/site';
import { CASE_STUDIES } from './caseStudies.data';

// Lists every case study currently shipped under /case-studies/:id so
// the hub schema reflects what's actually on the page. Each item points
// at its absolute detail URL — no relative paths in JSON-LD.
const COLLECTION_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Healthcare Marketing Case Studies — TheNextGen',
  url: `${SITE.url}/case-studies`,
  description:
    'Real engagements, real metrics — case studies from clinics, medspas, urgent care, and freestanding ER networks running on the TheNextGen growth operating system.',
  isPartOf: { '@id': `${SITE.url}#website` },
  publisher: { '@id': `${SITE.url}#organization` },
  mainEntity: {
    '@type': 'ItemList',
    name: 'Healthcare marketing case studies',
    numberOfItems: CASE_STUDIES.length,
    itemListElement: CASE_STUDIES.map((study, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      url: `${SITE.url}/case-studies/${study.id}`,
      name: study.name,
    })),
  },
};

const BREADCRUMB_SCHEMA = buildBreadcrumbList([
  { name: 'Home', path: '/' },
  { name: 'Case Studies' },
]);

const CaseStudies = () => {
  return (
    <>
      <Seo
        title="Healthcare Marketing Case Studies — Real Clinic & MedSpa Results"
        description="Real engagements, real metrics — case studies from clinics, medspas, urgent care, and freestanding ER networks running on the TheNextGen growth operating system."
        path="/case-studies"
        schema={[COLLECTION_SCHEMA, BREADCRUMB_SCHEMA]}
      />

      <CaseStudiesHead />
      <FeaturedCase />
      <PartnersMarquee />
      <CaseStudiesCarousel />
      <StatsStrip />
      <CaseStudySpotlight />
      <EngagementProcess />
      <CTABanner />
    </>
  );
};

export default CaseStudies;
