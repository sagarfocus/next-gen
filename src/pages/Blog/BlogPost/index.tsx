import { useParams } from 'react-router-dom';
import { getPostBySlug, BLOG_POSTS } from '../../../content/blog/posts';
import Hero from './Hero';
import NotFoundBlock from './NotFoundBlock';
import { useDocumentMeta, buildBlogPostSchema, buildBreadcrumbSchema } from './data';

/* ============================================================
   BLOG POST — Editorial detail page (hero-only).
   Mirrors HealthcareNews/NewsDetail hero pattern:
   category pill, massive title, lede, byline, story-brief card,
   full-bleed cover image with EDITORIAL tag.
   ============================================================ */

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = getPostBySlug(slug);
  useDocumentMeta(post);

  if (!post) return <NotFoundBlock />;

  const idx = BLOG_POSTS.findIndex((p) => p.slug === post.slug);
  const postId = `NG-${String(idx + 1).padStart(3, '0')}`;

  return (
    <main className="bpx" id="bpx-top" data-post-id={postId}>
      <article>
        <Hero post={post} />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(buildBlogPostSchema(post)) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(buildBreadcrumbSchema(post)) }}
        />
      </article>
    </main>
  );
};

export default BlogPost;
