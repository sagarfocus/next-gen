import { useEffect } from 'react';
import type { ReactNode } from 'react';
import { Link, useParams } from 'react-router-dom';
import Breadcrumb from '../../components/Breadcrumb';
import { AnimatedBackground } from '../../lib/motion';
import { getPostBySlug, BLOG_POSTS } from './posts';
import type { BlogPostData } from './posts';

/* ============================================================
   BLOG POST — Hero-only detail page.
   Asymmetric 12-column grid. Numbered sections. Massive type.
   Brand palette: ink #1A2438, gold #B38B6D, sage #8FBC8F,
   paper #FAFAF6, line rgba(26,36,56,.10).
   ============================================================ */

const ArrowRight = ({ size = 14 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

const ClockIcon = ({ size = 13 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </svg>
);

/* Icon library — topic-relevant SVGs assigned to blog categories below. */
const ico = (props: { size?: number; children: ReactNode }) => (
  <svg width={props.size ?? 14} height={props.size ?? 14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {props.children}
  </svg>
);

const StarIcon    = () => ico({ children: <path d="M12 2 L 14.6 9 L 22 9.5 L 16.5 14 L 18 21.5 L 12 17.5 L 6 21.5 L 7.5 14 L 2 9.5 L 9.4 9 Z" /> });
const ShieldIcon  = () => ico({ children: <><path d="M12 3l8 3v6c0 5-3.5 8.5-8 9-4.5-.5-8-4-8-9V6l8-3z" /><path d="m9 12 2 2 4-4" /></> });
const LockIcon    = () => ico({ children: <><rect x="4" y="11" width="16" height="10" rx="2" /><path d="M8 11V7a4 4 0 0 1 8 0v4" /></> });
const DocIcon     = () => ico({ children: <><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" /><path d="M14 3v5h5" /><path d="M9 13l2 2 4-4" /></> });
const ChartIcon   = () => ico({ children: <><line x1="6" y1="20" x2="6" y2="14" /><line x1="12" y1="20" x2="12" y2="8" /><line x1="18" y1="20" x2="18" y2="11" /></> });
const TargetIcon  = () => ico({ children: <><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="5" /><circle cx="12" cy="12" r="1.6" /></> });
const DollarIcon  = () => ico({ children: <><line x1="12" y1="3" x2="12" y2="21" /><path d="M17 7H10a3 3 0 0 0 0 6h4a3 3 0 0 1 0 6H7" /></> });
const ChatIcon    = () => ico({ children: <path d="M21 12a8 8 0 0 1-11.5 7.2L4 21l1.8-5A8 8 0 1 1 21 12z" /> });
const TrendIcon   = () => ico({ children: <><polyline points="3 17 9 11 13 15 21 7" /><polyline points="15 7 21 7 21 13" /></> });
const PinIcon     = () => ico({ children: <><path d="M12 22s8-7.5 8-13a8 8 0 0 0-16 0c0 5.5 8 13 8 13z" /><circle cx="12" cy="9" r="2.6" /></> });
const SearchIcon  = () => ico({ children: <><circle cx="11" cy="11" r="7" /><line x1="21" y1="21" x2="16" y2="16" /></> });
const GlobeIcon   = () => ico({ children: <><circle cx="12" cy="12" r="9" /><path d="M3 12h18" /><path d="M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" /></> });
const CogIcon     = () => ico({ children: <><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 0 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1A1.7 1.7 0 0 0 4.6 15a1.7 1.7 0 0 0-1.5-1H3a2 2 0 0 1 0-4h.1A1.7 1.7 0 0 0 4.6 9a1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 0 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 0 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z" /></> });
const BoltIcon    = () => ico({ children: <polygon points="13 2 4 14 12 14 11 22 20 10 12 10 13 2" /> });
const FlowIcon    = () => ico({ children: <><rect x="3" y="3" width="6" height="6" rx="1" /><rect x="15" y="15" width="6" height="6" rx="1" /><path d="M9 6h6a3 3 0 0 1 3 3v6" /></> });
const HeartIcon   = () => ico({ children: <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /> });
const SparkleIcon = () => ico({ children: <><path d="M12 3v18M3 12h18" /><path d="M5 5l14 14M19 5L5 19" /></> });
const PulseIcon   = () => ico({ children: <polyline points="2 12 6 12 9 4 15 20 18 12 22 12" /> });
const PlusIcon    = () => ico({ children: <><path d="M12 5v14M5 12h14" /></> });
const HospitalIcon= () => ico({ children: <><rect x="4" y="6" width="16" height="14" rx="2" /><path d="M12 10v8M8 14h8" /><path d="M9 6V3h6v3" /></> });

/* Wrap the first digit-run in the title with a tan accent span for visual emphasis. */
const formatTitleWithAccent = (title: string): ReactNode[] => {
  const parts = title.split(/(\d+)/);
  let accented = false;
  return parts.map((part, i) => {
    if (!accented && /^\d+$/.test(part)) {
      accented = true;
      return <span key={i} className="bpx-h1-accent">{part}</span>;
    }
    return part;
  });
};

/* Per-category theme: tone color + 3 topic-relevant icons for the floating cards.
   When the user opens a post, the hero's accent + icons match the category. */
type ThemeTone = 'periwinkle' | 'sage' | 'tan' | 'rose' | 'ink';
type IconComponent = (props: { size?: number }) => ReactNode;

interface CategoryTheme {
  tone: ThemeTone;
  icons: [IconComponent, IconComponent, IconComponent];
  label: string;
}
const CATEGORY_THEMES: Record<string, CategoryTheme> = {
  compliance: { tone: 'periwinkle', icons: [ShieldIcon, LockIcon, DocIcon],       label: 'Compliance · HIPAA'    },
  paid:       { tone: 'tan',        icons: [ChartIcon, TargetIcon, DollarIcon],   label: 'Paid Media'             },
  reputation: { tone: 'tan',        icons: [StarIcon, ChatIcon, TrendIcon],       label: 'Reviews & Reputation'   },
  seo:        { tone: 'sage',       icons: [PinIcon, SearchIcon, GlobeIcon],      label: 'Local SEO'              },
  automation: { tone: 'periwinkle', icons: [CogIcon, BoltIcon, FlowIcon],         label: 'Automation & AI'        },
  medspa:     { tone: 'sage',       icons: [HeartIcon, SparkleIcon, StarIcon],    label: 'MedSpa Marketing'       },
  urgent:     { tone: 'rose',       icons: [ClockIcon, PulseIcon, PlusIcon],      label: 'Urgent Care'            },
  analytics:  { tone: 'sage',       icons: [ChartIcon, TrendIcon, TargetIcon],    label: 'Analytics'              },
  fsed:       { tone: 'rose',       icons: [PulseIcon, PlusIcon, HospitalIcon],   label: 'FSED'                   },
};
const DEFAULT_THEME: CategoryTheme = {
  tone: 'ink',
  icons: [StarIcon, ChartIcon, TargetIcon],
  label: 'Article',
};
const themeForPost = (post: BlogPostData): CategoryTheme =>
  CATEGORY_THEMES[post.cat] ?? DEFAULT_THEME;

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

/* ----- Section: Hero (asymmetric 12-col, Swiss header, topic-themed) ----- */
const Hero = ({ post, postId }: { post: BlogPostData; postId: string }) => {
  const theme = themeForPost(post);
  const [Icon1, Icon2, Icon3] = theme.icons;
  // First 3 takeaway labels become floating mini-cards around the illustration.
  const floatCards = post.takeaways.slice(0, 3);
  const floatIcons = [<Icon1 key="i1" />, <Icon2 key="i2" />, <Icon3 key="i3" />];
  return (
    <section className={`bpx-hero bpx-theme-${theme.tone}`} aria-labelledby="bpx-hero-title">
      <AnimatedBackground variant="aurora" intensity="subtle" />
      <div className="container-shell">
        {/* Top meta strip: breadcrumb + chips */}
        <div className="bpx-hero-meta">
          <Breadcrumb items={[{ label: 'Blog', to: '/blog' }, { label: post.catLabel }]} />
          <div className="bpx-hero-chips" aria-hidden="true">
            <span className="bpx-hero-chip is-tag">
              <span className="bpx-hero-chip-dot" />
              Article
            </span>
            <span className="bpx-hero-chip is-meta">
              <ClockIcon />
              {post.readTime}
            </span>
            <span className="bpx-hero-chip is-mono">ID {postId}</span>
          </div>
        </div>

        <div className="bpx-hero-grid">
          <aside className="bpx-hero-rail" aria-hidden="true">
            <span className="bpx-rail-label">FILED</span>
            <span className="bpx-rail-value">{post.catLabel}</span>
            <span className="bpx-rail-line" />
            <span className="bpx-rail-label">READ</span>
            <span className="bpx-rail-value">{post.readTime}</span>
            <span className="bpx-rail-line" />
            <span className="bpx-rail-label">ID</span>
            <span className="bpx-rail-value bpx-rail-mono">{postId}</span>
          </aside>

          <header className="bpx-hero-copy">
            <span className="bpx-eyebrow">
              <span className="bpx-eyebrow-dot" />
              Article · {post.catLabel}
            </span>
            <h1 id="bpx-hero-title" className="bpx-h1">
              {formatTitleWithAccent(post.title)}
            </h1>
            <p className="bpx-lede">{post.excerpt}</p>

            <div className="bpx-byline">
              <span className="bpx-author-avatar" aria-hidden="true">{initialsOf(post.author)}</span>
              <div className="bpx-byline-meta">
                <span className="bpx-byline-name">{post.author}</span>
                <span className="bpx-byline-role">{post.authorRole}</span>
              </div>
              <span className="bpx-byline-sep" aria-hidden="true" />
              <div className="bpx-byline-meta">
                <span className="bpx-byline-label">Published</span>
                <span className="bpx-byline-value">{post.date}</span>
              </div>
            </div>
          </header>

          <figure className="bpx-hero-art" aria-hidden="true">
            <div className="bpx-hero-art-stage">
              <span className="bpx-hero-art-pattern" aria-hidden="true" />
              <div className="bpx-hero-art-frame">{post.illustration}</div>
              {floatCards.map((card, i) => (
                <span
                  key={card.label}
                  className={`bpx-hero-art-float bpx-float-${i + 1}`}
                >
                  <span className="bpx-hero-art-float-ico">{floatIcons[i]}</span>
                  <span className="bpx-hero-art-float-text">{card.label}</span>
                </span>
              ))}
            </div>
            <figcaption className="bpx-hero-art-caption">
              FIG. 01 — {post.catLabel}
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
};

/* ----- Not found ----- */
const NotFoundBlock = () => (
  <main className="bpx" id="bpx-top">
    <section className="bpx-hero">
      <div className="container-shell">
        <Breadcrumb items={[{ label: 'Blog', to: '/blog' }, { label: 'Article not found' }]} />
        <div className="bpx-empty">
          <span className="bpx-eyebrow">
            <span className="bpx-eyebrow-dot" />
            404 · Missing article
          </span>
          <h1 className="bpx-h1">We could not find that article.</h1>
          <p className="bpx-lede">
            The post you tried to open may have moved or been retired.
            Browse the full library below.
          </p>
          <Link to="/blog" className="bpx-btn bpx-btn-primary">
            Back to all articles <ArrowRight />
          </Link>
        </div>
      </div>
    </section>
  </main>
);

/* ----- Main page ----- */
const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = getPostBySlug(slug);
  useDocumentMeta(post);

  if (!post) return <NotFoundBlock />;

  const idx = BLOG_POSTS.findIndex((p) => p.slug === post.slug);
  const postId = `NG-${String(idx + 1).padStart(3, '0')}`;

  return (
    <main className="bpx" id="bpx-top">
      <article>
        <Hero post={post} postId={postId} />

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
