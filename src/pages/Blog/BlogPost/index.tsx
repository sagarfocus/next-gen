import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { getPostBySlug, BLOG_POSTS } from '@/content/blog/posts';
import Hero from './Hero';
import NotFoundBlock from './NotFoundBlock';
import Seo from '@/components/Seo';
import { buildBlogPostSchema, buildBreadcrumbSchema } from './data';

/* ============================================================
   BLOG POST — Editorial detail page (hero-only).
   ============================================================ */

const BlogPost = () => {
  const { t } = useTranslation('blog');
  const { slug } = useParams<{ slug: string }>();
  const post = getPostBySlug(slug);

  if (!post) return <NotFoundBlock />;

  const idx = BLOG_POSTS.findIndex((p) => p.slug === post.slug);
  const postId = `NG-${String(idx + 1).padStart(3, '0')}`;

  const localizedTitle = t(`posts.${post.slug}.title`, post.title);
  const localizedDescription = t(`posts.${post.slug}.metaDescription`, post.metaDescription);
  const localizedSection = t(`posts.${post.slug}.catLabel`, post.catLabel);

  return (
    <main className="bpx" id="bpx-top" data-post-id={postId}>
      <Seo
        title={localizedTitle}
        description={localizedDescription}
        path={`/blog/${post.slug}`}
        type="article"
        article={{
          publishedTime: post.date,
          modifiedTime: post.date,
          author: post.author,
          section: localizedSection,
        }}
        schema={[buildBlogPostSchema(post), buildBreadcrumbSchema(post)]}
      />

      <article>
        <Hero post={post} />
      </article>
    </main>
  );
};

export default BlogPost;
