import BlogHero from './BlogHero';
import EditorialProcess from './EditorialProcess';
import ArticleGrid from './ArticleGrid';
import BlogNewsletter from './BlogNewsletter';
import Seo from '@/components/Seo';
import { buildBreadcrumbList } from '@/lib/schema';
import { SITE } from '@/content/site';

const BLOG_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Blog',
  name: 'TheNextGen Healthcare Marketing Blog',
  description:
    'Field-tested healthcare marketing insights, HIPAA compliance updates, patient acquisition tactics, and case studies.',
  url: `${SITE.url}/blog`,
  publisher: { '@id': `${SITE.url}#organization` },
  isPartOf: { '@id': `${SITE.url}#website` },
  inLanguage: 'en-US',
};

const BREADCRUMB_SCHEMA = buildBreadcrumbList([
  { name: 'Home', path: '/' },
  { name: 'Blog' },
]);

const Blog = () => {
  return (
    <>
      <Seo
        title="Healthcare Marketing Blog — Practitioner-Written Tactics"
        description="Field-tested healthcare marketing insights, HIPAA compliance updates, patient acquisition tactics, and case studies — written by the TheNextGen team."
        path="/blog"
        schema={[BLOG_SCHEMA, BREADCRUMB_SCHEMA]}
      />

      <BlogHero />
      <EditorialProcess />
      <ArticleGrid />
      <BlogNewsletter />
    </>
  );
};

export default Blog;
