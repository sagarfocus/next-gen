import BlogHero from './BlogHero';
import EditorialProcess from './EditorialProcess';
import ArticleGrid from './ArticleGrid';
import BlogNewsletter from './BlogNewsletter';

const BLOG_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Blog',
  name: 'TheNextGen Healthcare Marketing Blog',
  description:
    'Field-tested healthcare marketing insights, HIPAA compliance updates, patient acquisition tactics, and case studies.',
  url: 'https://thenextgenhealth.com/blog',
  publisher: {
    '@type': 'Organization',
    name: 'TheNextGen Healthcare Marketing',
    url: 'https://thenextgenhealth.com',
  },
};

const Blog = () => {
  return (
    <>
      <BlogHero />
      <EditorialProcess />
      <ArticleGrid />
      <BlogNewsletter />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(BLOG_SCHEMA) }}
      />
    </>
  );
};

export default Blog;
