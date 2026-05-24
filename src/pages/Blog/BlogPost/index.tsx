import { useParams } from 'react-router-dom';
import { getPostBySlug, BLOG_POSTS } from '@/content/blog/posts';
import Hero from './Hero';
import NotFoundBlock from './NotFoundBlock';
import Seo from '@/components/Seo';
import { buildBlogPostSchema, buildBreadcrumbSchema } from './data';

/* ============================================================
   BLOG POST — Editorial detail page (hero-only).
   Mirrors HealthcareNews/NewsDetail hero pattern:
   category pill, massive title, lede, byline, story-brief card,
   full-bleed cover image with EDITORIAL tag.
   ============================================================ */

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = getPostBySlug(slug);

  if (!post) return <NotFoundBlock />;

  const idx = BLOG_POSTS.findIndex((p) => p.slug === post.slug);
  const postId = `NG-${String(idx + 1).padStart(3, '0')}`;

  return (
    <main className="bpx" id="bpx-top" data-post-id={postId}>
      <Seo
        title={post.title}
        description={post.metaDescription}
        path={`/blog/${post.slug}`}
        type="article"
        article={{
          publishedTime: post.date,
          modifiedTime: post.date,
          author: post.author,
          section: post.catLabel,
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
