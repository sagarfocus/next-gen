import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Breadcrumb from '../../components/Breadcrumb';
import { getPostBySlug, BLOG_POSTS } from './posts';
import type { BlogPostData } from './posts';

/* Category-relevant cover photography for the hero. */
import imgCompliance from '../../assets/patientidentities.png';
import imgPaid from '../../assets/paidmedia.png';
import imgReputation from '../../assets/recall+.png';
import imgSeo from '../../assets/Local Search.png';
import imgAutomation from '../../assets/medicalautomation.png';
import imgMedspa from '../../assets/Medspa.png';
import imgUrgent from '../../assets/urgentcare.png';
import imgAnalytics from '../../assets/analytics and report.png';
import imgFsed from '../../assets/freestandingemergency.png';
import imgDefault from '../../assets/healthcareimg3.png';

/* ============================================================
   BLOG POST — Editorial detail page (hero-only).
   Mirrors HealthcareNews/NewsDetail hero pattern:
   category pill, massive title, lede, byline, story-brief card,
   full-bleed cover image with EDITORIAL tag.
   ============================================================ */

const COLORS = {
  navy:  '#1A2438',
  body:  '#4A5568',
  muted: '#718096',
  mint:  '#EBF4DD',
};

const FEATURE_IMAGES: Record<string, string> = {
  compliance: imgCompliance,
  paid: imgPaid,
  reputation: imgReputation,
  seo: imgSeo,
  automation: imgAutomation,
  medspa: imgMedspa,
  urgent: imgUrgent,
  analytics: imgAnalytics,
  fsed: imgFsed,
};

/* Tone palette mirrors bpx-theme-* CSS variables, but inlined so the
   hero pill, brief card accent, and avatar can read them directly. */
type ThemeTone = 'periwinkle' | 'sage' | 'tan' | 'rose' | 'ink';
const TONE_COLORS: Record<ThemeTone, { hex: string; soft: string }> = {
  periwinkle: { hex: '#576DB5', soft: 'rgba(87, 109, 181, 0.12)' },
  sage:       { hex: '#4F7A4F', soft: 'rgba(143, 188, 143, 0.18)' },
  tan:        { hex: '#B38B6D', soft: 'rgba(179, 139, 109, 0.16)' },
  rose:       { hex: '#C13E4A', soft: 'rgba(225, 80, 92, 0.14)'   },
  ink:        { hex: '#2D3748', soft: 'rgba(45, 55, 72, 0.10)'    },
};
const CATEGORY_TONE: Record<string, ThemeTone> = {
  compliance: 'periwinkle',
  paid:       'tan',
  reputation: 'tan',
  seo:        'sage',
  automation: 'periwinkle',
  medspa:     'sage',
  urgent:     'rose',
  analytics:  'sage',
  fsed:       'rose',
};
const toneForPost = (post: BlogPostData) =>
  TONE_COLORS[CATEGORY_TONE[post.cat] ?? 'ink'];

const ArrowRight = ({ size = 14 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

const ORIGIN =
  typeof window !== 'undefined' ? window.location.origin : 'https://thenextgenhealth.com';

const initialsOf = (name: string): string =>
  name
    .split(' ')
    .map((p) => p[0])
    .filter(Boolean)
    .slice(0, 2)
    .join('')
    .toUpperCase();

const buildBlogPostSchema = (post: BlogPostData) => ({
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: post.title,
  description: post.metaDescription,
  url: `${ORIGIN}/blog/${post.slug}`,
  datePublished: post.date,
  dateModified: post.date,
  articleSection: post.catLabel,
  author: {
    '@type': 'Person',
    name: post.author,
    jobTitle: post.authorRole,
  },
  publisher: {
    '@type': 'Organization',
    name: 'TheNextGen Healthcare Marketing',
    url: ORIGIN,
  },
  mainEntityOfPage: { '@type': 'WebPage', '@id': `${ORIGIN}/blog/${post.slug}` },
  inLanguage: 'en-US',
});

const buildBreadcrumbSchema = (post: BlogPostData) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: `${ORIGIN}/` },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: `${ORIGIN}/blog` },
    { '@type': 'ListItem', position: 3, name: post.title, item: `${ORIGIN}/blog/${post.slug}` },
  ],
});

const useDocumentMeta = (post: BlogPostData | undefined) => {
  useEffect(() => {
    if (!post) return;
    const prevTitle = document.title;
    document.title = `${post.title} | TheNextGen Resources`;

    const ensure = (name: string) => {
      let el = document.querySelector<HTMLMetaElement>(`meta[name="${name}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute('name', name);
        document.head.appendChild(el);
      }
      return el;
    };

    const desc = ensure('description');
    const prevDesc = desc.getAttribute('content');
    desc.setAttribute('content', post.metaDescription);

    let canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    const prevCanon = canonical.getAttribute('href');
    canonical.setAttribute('href', `${window.location.origin}/blog/${post.slug}`);

    return () => {
      document.title = prevTitle;
      if (prevDesc !== null) desc.setAttribute('content', prevDesc);
      if (prevCanon !== null) canonical!.setAttribute('href', prevCanon);
    };
  }, [post]);
};

/* ─── Tone-coloured category pill ─── */
const CategoryPill = ({ post }: { post: BlogPostData }) => {
  const t = toneForPost(post);
  return (
    <span
      className="inline-flex items-center gap-2 rounded-full font-mono font-bold tracking-[0.18em] uppercase px-3 py-1.5 text-[11px]"
      style={{ background: t.soft, color: t.hex }}
    >
      <span className="w-1.5 h-1.5 rounded-full" style={{ background: t.hex }} aria-hidden="true" />
      {post.catLabel}
    </span>
  );
};

/* ─── Section: Hero ─── */
const Hero = ({ post }: { post: BlogPostData }) => {
  const t = toneForPost(post);
  const brief = post.takeaways[0];
  const supporting = post.takeaways[1];
  const cover = FEATURE_IMAGES[post.cat] ?? imgDefault;

  return (
    <section className="ph-page-head">
      <div className="container-shell">
        <Breadcrumb items={[{ label: 'Blog', to: '/blog' }, { label: post.catLabel }]} />

        <div className="mt-8 grid lg:grid-cols-12 gap-x-12 gap-y-12">
          <div className="lg:col-span-7">
            <CategoryPill post={post} />
            <h1
              className="mt-6 font-extrabold leading-[1.02] tracking-[-0.034em] text-[clamp(34px,5vw,68px)]"
              style={{ color: COLORS.navy }}
            >
              {post.title}
            </h1>
            <p className="mt-7 text-[18px] leading-[1.65] max-w-[60ch]" style={{ color: COLORS.body }}>
              {post.excerpt}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-[13px]" style={{ color: COLORS.muted }}>
              <div className="flex items-center gap-3">
                <span
                  className="inline-grid place-items-center w-9 h-9 rounded-full font-mono text-[12px] font-bold"
                  style={{ background: t.soft, color: t.hex }}
                  aria-hidden="true"
                >
                  {initialsOf(post.author)}
                </span>
                <span>
                  By <strong style={{ color: COLORS.navy }}>{post.author}</strong>
                </span>
              </div>
              <span className="opacity-30">·</span>
              <span>{post.date}</span>
              <span className="opacity-30">·</span>
              <span>{post.readTime}</span>
            </div>
          </div>

          {/* Right-side: story-brief card with tone accent */}
          <div className="lg:col-span-5">
            <div
              className="relative rounded-[24px] p-8 overflow-hidden border"
              style={{
                background: COLORS.mint,
                borderColor: 'rgba(26, 36, 56, 0.10)',
              }}
            >
              <span
                className="absolute top-0 left-0 right-0 h-1"
                style={{ background: t.hex }}
                aria-hidden="true"
              />
              <div className="font-mono text-[11px] tracking-[0.22em] uppercase font-bold" style={{ color: t.hex }}>
                Story brief
              </div>
              <h2 className="mt-3 text-[20px] font-extrabold tracking-[-0.018em] leading-[1.18]" style={{ color: COLORS.navy }}>
                {brief.label}: {brief.value}
              </h2>
              {brief.desc && (
                <p className="mt-4 text-[14px] leading-[1.6]" style={{ color: COLORS.body }}>
                  {brief.desc}
                </p>
              )}
              {supporting && (
                <p className="mt-3 text-[13.5px] leading-[1.6]" style={{ color: COLORS.muted }}>
                  {supporting.desc}
                </p>
              )}
              <div
                className="mt-6 pt-5 border-t flex items-center gap-2 text-[10.5px] uppercase tracking-[0.20em] font-bold"
                style={{ borderColor: 'rgba(26, 36, 56, 0.10)', color: t.hex }}
              >
                <span className="w-1.5 h-1.5 rounded-full" style={{ background: t.hex }} />
                {post.takeaways.length} key takeaways below
              </div>
            </div>
          </div>
        </div>

        {/* Full-bleed cover image */}
        <div
          className="mt-12 lg:mt-16 relative rounded-[28px] overflow-hidden border aspect-[21/9] shadow-[0_28px_60px_-32px_rgba(45,55,72,0.32)]"
          style={{ borderColor: 'rgba(26, 36, 56, 0.10)' }}
        >
          <img
            src={cover}
            alt=""
            loading="eager"
            decoding="async"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: 'linear-gradient(180deg, rgba(26, 36, 56, 0) 60%, rgba(26, 36, 56, 0.35) 100%)' }}
          />
          <div
            className="absolute bottom-5 right-5 inline-flex items-center gap-2 px-3 py-1.5 rounded-full backdrop-blur-md"
            style={{ background: 'rgba(255, 255, 255, 0.18)', border: '1px solid rgba(255, 255, 255, 0.25)' }}
          >
            <span className="font-mono text-[10.5px] tracking-[0.18em] uppercase text-white font-bold">Editorial</span>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ─── Not found ─── */
const NotFoundBlock = () => (
  <main className="ph-page-head">
    <div className="container-shell py-24">
      <Breadcrumb items={[{ label: 'Blog', to: '/blog' }, { label: 'Article not found' }]} />
      <div className="mt-10 max-w-[60ch]">
        <span
          className="inline-flex items-center gap-2 rounded-full font-mono font-bold tracking-[0.18em] uppercase px-3 py-1.5 text-[11px]"
          style={{ background: TONE_COLORS.ink.soft, color: TONE_COLORS.ink.hex }}
        >
          <span className="w-1.5 h-1.5 rounded-full" style={{ background: TONE_COLORS.ink.hex }} />
          404 · Missing article
        </span>
        <h1
          className="mt-6 font-extrabold leading-[1.02] tracking-[-0.034em] text-[clamp(34px,5vw,68px)]"
          style={{ color: COLORS.navy }}
        >
          We could not find that article.
        </h1>
        <p className="mt-7 text-[18px] leading-[1.65]" style={{ color: COLORS.body }}>
          The post you tried to open may have moved or been retired. Browse the full library below.
        </p>
        <Link
          to="/blog"
          className="mt-8 inline-flex items-center gap-2 px-5 py-3 rounded-full font-mono text-[12px] uppercase tracking-[0.18em] font-bold text-white"
          style={{ background: COLORS.navy }}
        >
          Back to all articles <ArrowRight />
        </Link>
      </div>
    </div>
  </main>
);

/* ─── Main page ─── */
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
