import { useEffect, useMemo } from 'react';
import type { ReactNode } from 'react';
import { Link, useParams } from 'react-router-dom';
import Breadcrumb from '../../components/Breadcrumb';
import { AnimatedBackground } from '../../lib/motion';
import { getPostBySlug, getRelatedPosts, BLOG_POSTS } from './posts';
import type { BlogPostData } from './posts';

/* Category-relevant feature images for the mid-page ImageBreak section */
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

/* ============================================================
   BLOG POST — Swiss editorial detail page.
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

/* Process & Distribution icons (sidebar of Apply-it-now) */
const PrintIcon    = () => ico({ children: <><polyline points="6 9 6 2 18 2 18 9" /><rect x="4" y="9" width="16" height="9" rx="2" /><rect x="6" y="14" width="12" height="7" /></> });
const TaskListIcon = () => ico({ children: <><rect x="5" y="4" width="14" height="17" rx="2" /><path d="M9 3h6v3H9z" /><polyline points="9 13 11 15 15 11" /></> });
const AgentIcon    = () => ico({ children: <><circle cx="12" cy="9" r="3.4" /><path d="M5 21a7 7 0 0 1 14 0" /><circle cx="18" cy="5" r="2" /></> });
const RefreshIcon  = () => ico({ children: <><polyline points="21 4 21 10 15 10" /><path d="M3.5 12.5a8 8 0 0 1 14.4-5l3.1 3" /><polyline points="3 20 3 14 9 14" /><path d="M20.5 11.5a8 8 0 0 1-14.4 5l-3.1-3" /></> });
const FilterIcon   = () => ico({ children: <path d="M3 4h18l-7 9v6l-4-2v-4z" /> });

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

const wordsIn = (post: BlogPostData): number => {
  const sectionsWords = post.sections.reduce((acc, s) => acc + s.title.length + s.desc.length, 0);
  const baseWords = post.title.length + post.excerpt.length + post.metaDescription.length;
  // Approximate: ~5 chars per word
  return Math.max(900, Math.round((baseWords + sectionsWords) / 4) * 6);
};

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

/* ----- Section: Data band — horizontal specs strip ----- */
const DataBand = ({ post, wordCount }: { post: BlogPostData; wordCount: number }) => (
  <section className="bpx-databand" aria-label="Article metadata">
    <div className="container-shell">
      <ul className="bpx-databand-list">
        <li className="bpx-databand-item">
          <span className="bpx-databand-label">Reading time</span>
          <span className="bpx-databand-value">{post.readTime}</span>
        </li>
        <li className="bpx-databand-item">
          <span className="bpx-databand-label">Word count</span>
          <span className="bpx-databand-value">~{wordCount.toLocaleString()}</span>
        </li>
        <li className="bpx-databand-item">
          <span className="bpx-databand-label">Sections</span>
          <span className="bpx-databand-value">{String(post.sections.length).padStart(2, '0')}</span>
        </li>
        <li className="bpx-databand-item">
          <span className="bpx-databand-label">Category</span>
          <span className="bpx-databand-value">{post.catLabel}</span>
        </li>
        <li className="bpx-databand-item">
          <span className="bpx-databand-label">Last updated</span>
          <span className="bpx-databand-value">{post.date}</span>
        </li>
      </ul>
    </div>
  </section>
);

/* ----- Section: TL;DR ribbon — single-sentence summary ----- */
const TLDR = ({ post }: { post: BlogPostData }) => (
  <section className="bpx-tldr" aria-label="Summary">
    <div className="container-shell">
      <div className="bpx-tldr-frame">
        <span className="bpx-tldr-label">TL;DR</span>
        <p className="bpx-tldr-text">{post.metaDescription}</p>
      </div>
    </div>
  </section>
);

/* ----- Section: At-a-glance stats — 3 takeaway tiles ----- */
const TONE_BY_INDEX = ['gold', 'sage', 'ink'] as const;
const AtAGlance = ({ post }: { post: BlogPostData }) => (
  <section className="bpx-glance" aria-labelledby="bpx-glance-title">
    <div className="container-shell">
      <header className="adv-head det-head">
        <span className="adv-eyebrow">/ 01 &nbsp; At a glance</span>
        <h2 id="bpx-glance-title" className="adv-h2">
          The three numbers that matter before you read further.
        </h2>
        <p className="adv-intro">
          A specimen-sheet read of the article — what the data shows up front,
          before the playbook.
        </p>
      </header>

      <div className="bpx-glance-grid">
        {post.takeaways.map((t, i) => (
          <article key={t.label} className={`bpx-stat tone-${TONE_BY_INDEX[i] ?? 'ink'}`}>
            <span className="bpx-stat-id">{String(i + 1).padStart(2, '0')}</span>
            <span className="bpx-stat-label">{t.label}</span>
            <span className="bpx-stat-value">{t.value}</span>
            <p className="bpx-stat-desc">{t.desc}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
);

/* ----- Section: Featured image break ----- */
const ImageBreak = ({ post }: { post: BlogPostData }) => {
  const theme = themeForPost(post);
  const [Icon1, Icon2, Icon3] = theme.icons;
  const featureIcons = [<Icon1 key="i1" />, <Icon2 key="i2" />, <Icon3 key="i3" />];
  const features = post.takeaways.slice(0, 3);
  const image = FEATURE_IMAGES[post.cat] ?? imgDefault;

  return (
    <section className={`bpx-break bpx-theme-${theme.tone}`} aria-label="In practice">
      <div className="container-shell">
        <div className="bpx-break-card">
          {/* Left: dark editorial panel */}
          <div className="bpx-break-panel">
            <span className="bpx-break-eyebrow">
              <span className="bpx-break-eyebrow-dot" aria-hidden="true" />
              In Practice · Fig. 02
            </span>
            <h3 className="bpx-break-title">
              How the playbook below maps to a <em>working clinic stack.</em>
            </h3>
            <p className="bpx-break-sub">
              Three signals to watch as you read. Each one shows up again in
              the playbook section below — concretely.
            </p>

            <ul className="bpx-break-features">
              {features.map((f, i) => (
                <li key={f.label} className="bpx-break-feature">
                  <span className="bpx-break-feature-ico" aria-hidden="true">
                    {featureIcons[i]}
                  </span>
                  <div className="bpx-break-feature-body">
                    <span className="bpx-break-feature-label">{f.label}</span>
                    <span className="bpx-break-feature-value">{f.value}</span>
                  </div>
                </li>
              ))}
            </ul>

            <Link to="#bpx-playbook-title" className="bpx-break-link">
              Skip to the playbook
              <ArrowRight size={12} />
            </Link>
          </div>

          {/* Right: real photography matched to category */}
          <div className="bpx-break-photo">
            <img src={image} alt="" loading="lazy" decoding="async" />
            <span className="bpx-break-photo-tag" aria-hidden="true">
              {theme.label}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ----- Section: Playbook header + step cards ----- */
const STEP_ICONS = ['◐', '◑', '◒', '◓', '◔', '◕'];
const Playbook = ({ post }: { post: BlogPostData }) => (
  <section className="bpx-playbook" aria-labelledby="bpx-playbook-title">
    <div className="container-shell">
      <header className="adv-head det-head">
        <span className="adv-eyebrow">/ 02 &nbsp; The playbook</span>
        <h2 id="bpx-playbook-title" className="adv-h2">
          {post.sections.length === 4
            ? 'Four deliberate moves, in the order that ships fastest.'
            : `${post.sections.length} deliberate moves, in the order that ships fastest.`}
        </h2>
        <p className="adv-intro">
          Each step is wired to a concrete decision, an owner, and a checkable
          deliverable — no theory, no fluff.
        </p>
      </header>

      <ol className="bpx-steps">
        {post.sections.map((s, i) => (
          <li key={s.num} className="bpx-step">
            <div className="bpx-step-num-wrap">
              <span className="bpx-step-num">{s.num}</span>
              <span className="bpx-step-mark" aria-hidden="true">{STEP_ICONS[i % STEP_ICONS.length]}</span>
            </div>
            <div className="bpx-step-body">
              <h3 className="bpx-step-title">{s.title}</h3>
              <p className="bpx-step-desc">{s.desc}</p>
              <div className="bpx-step-rail" aria-hidden="true">
                <span className="bpx-step-rail-line" />
                <span className="bpx-step-rail-tag">STEP {s.num} / {String(post.sections.length).padStart(2, '0')}</span>
              </div>
            </div>
          </li>
        ))}
      </ol>
    </div>
  </section>
);

/* ----- Section: Pull quote ----- */
const PullQuote = ({ post }: { post: BlogPostData }) => (
  <section className="bpx-quote" aria-label="Pull quote">
    <div className="container-shell">
      <blockquote className="bpx-quote-frame">
        <span className="bpx-quote-mark" aria-hidden="true">&ldquo;</span>
        <p className="bpx-quote-text">{post.pullQuote.quote}</p>
        <footer className="bpx-quote-foot">
          <span className="bpx-author-avatar bpx-author-avatar-sm" aria-hidden="true">
            {initialsOf(post.pullQuote.attribution.split('·')[0]?.trim() || post.author)}
          </span>
          <cite className="bpx-quote-cite">{post.pullQuote.attribution}</cite>
        </footer>
      </blockquote>
    </div>
  </section>
);

/* ----- Section: Apply-it-now checklist (sidebar + numbered task cards) ----- */
const TASK_ICONS: IconComponent[] = [CogIcon, TargetIcon, ClockIcon, FilterIcon, ChatIcon, RefreshIcon];

interface ChecklistTask {
  title: string;
  desc: string;
}

const Checklist = ({ post }: { post: BlogPostData }) => {
  const items = useMemo<ChecklistTask[]>(() => {
    const base: ChecklistTask[] = post.sections.map((s) => ({
      title: s.title.replace(/\.$/, ''),
      desc: s.desc,
    }));
    const tail: ChecklistTask[] = [
      {
        title: 'Brief the front desk',
        desc: 'Brief the front desk on the new flow with a one-page SOP everyone can audit.',
      },
      {
        title: '30-day follow-up',
        desc: 'Set a 30-day follow-up to re-audit and lock the changes in.',
      },
    ];
    return [...base, ...tail];
  }, [post]);

  return (
    <section className="bpx-checklist" aria-labelledby="bpx-checklist-title">
      <div className="container-shell">
        <div className="bpx-cl-layout">
          <aside className="bpx-cl-side">
            <span className="bpx-cl-eyebrow">
              <span className="bpx-cl-eyebrow-dot" />/ 03 &nbsp; APPLY IT NOW
            </span>
            <h2 id="bpx-checklist-title" className="bpx-cl-side-title">
              A field-tested checklist your team can run this week.
            </h2>
            <div className="bpx-cl-distrib">
              <h3 className="bpx-cl-distrib-h">Process &amp; Distribution</h3>
              <div className="bpx-cl-distrib-icons" aria-hidden="true">
                <span className="bpx-cl-distrib-ico"><PrintIcon /></span>
                <span className="bpx-cl-distrib-ico"><TaskListIcon /></span>
                <span className="bpx-cl-distrib-ico"><AgentIcon /></span>
              </div>
              <p className="bpx-cl-distrib-text">
                Print it, paste it into your project tracker, or hand it to the
                agency you already work with — the order matters.
              </p>
              <p className="bpx-cl-distrib-emph">The order matters.</p>
            </div>
          </aside>

          <div className="bpx-cl-main">
            <h2 className="bpx-cl-main-title">
              A field-tested checklist your team can run this week.
            </h2>
            <ol className="bpx-cl-tasks">
              {items.map((item, i) => {
                const Icon = TASK_ICONS[i % TASK_ICONS.length];
                return (
                  <li key={i} className="bpx-task">
                    <div className="bpx-task-num" aria-hidden="true">
                      {String(i + 1).padStart(2, '0')}
                    </div>
                    <div className="bpx-task-icon" aria-hidden="true">
                      <Icon size={28} />
                    </div>
                    <h3 className="bpx-task-title">{item.title}</h3>
                    <p className="bpx-task-desc">{item.desc}</p>
                    <div className="bpx-task-foot">
                      <span className="bpx-task-status">
                        <span className="bpx-task-status-dot" />
                        Status: Active
                      </span>
                      <span className="bpx-task-tick">
                        <span className="bpx-task-tick-box" aria-hidden="true" />
                        Tick to Complete
                      </span>
                    </div>
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ----- Section: Who this is for (3 reader personas) ----- */
const WhoFor = ({ post }: { post: BlogPostData }) => {
  const personas = useMemo(() => {
    const base = [
      {
        label: 'Clinic owner',
        desc: 'You sign the cheques and want the numbers to map to chair-time, not impressions.',
      },
      {
        label: 'Marketing lead',
        desc: 'You inherited the stack and need a playbook your CFO will fund without a fight.',
      },
      {
        label: 'Operations director',
        desc: `You move ${post.catLabel.toLowerCase()} from project to repeatable system — without breaking what works.`,
      },
    ];
    return base;
  }, [post]);
  return (
    <section className="bpx-who" aria-labelledby="bpx-who-title">
      <div className="container-shell">
        <header className="adv-head det-head">
          <span className="adv-eyebrow">/ 04 &nbsp; Who this is for</span>
          <h2 id="bpx-who-title" className="adv-h2">
            Three reader profiles this article was written for.
          </h2>
          <p className="adv-intro">
            We write to a specific reader on a specific day. If you see yourself
            here, you are in the right place.
          </p>
        </header>
        <div className="bpx-who-grid">
          {personas.map((p, i) => (
            <article key={p.label} className="bpx-who-card">
              <span className="bpx-who-num">/{String(i + 1).padStart(2, '0')}</span>
              <h3 className="bpx-who-title">{p.label}</h3>
              <p className="bpx-who-desc">{p.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ----- Section: Author profile ----- */
const AuthorBlock = ({ post }: { post: BlogPostData }) => {
  const samePostsByCategory = useMemo(
    () =>
      BLOG_POSTS.filter((p) => p.cat === post.cat && p.slug !== post.slug).slice(0, 3),
    [post],
  );
  return (
    <section className="bpx-author" aria-labelledby="bpx-author-title">
      <div className="container-shell">
        <div className="bpx-author-frame">
          <div className="bpx-author-portrait" aria-hidden="true">
            <span className="bpx-author-portrait-initials">{initialsOf(post.author)}</span>
            <span className="bpx-author-portrait-tag">EDITOR · {post.catLabel}</span>
          </div>
          <div className="bpx-author-copy">
            <span className="bpx-eyebrow">
              <span className="bpx-eyebrow-dot" />
              About the editor
            </span>
            <h2 id="bpx-author-title" className="bpx-author-name">
              {post.author}
            </h2>
            <p className="bpx-author-role">{post.authorRole}</p>
            <p className="bpx-author-bio">
              {post.author.split(' ')[0]} writes the {post.catLabel.toLowerCase()} desk at TheNextGen.
              Their work pairs senior healthcare marketing experience with field tests
              run inside real clinics — and ships every brief as a system the front desk
              can actually run on Monday.
            </p>
            {samePostsByCategory.length > 0 && (
              <div className="bpx-author-more">
                <span className="bpx-author-more-label">More from this desk</span>
                <ul>
                  {samePostsByCategory.map((p) => (
                    <li key={p.slug}>
                      <Link to={`/blog/${p.slug}`} className="bpx-author-more-link">
                        {p.title}
                        <ArrowRight size={12} />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

/* ----- Section: CTA banner ----- */
const CTABanner = () => (
  <section className="bpx-cta" aria-labelledby="bpx-cta-title">
    <div className="container-shell">
      <div className="bpx-cta-frame">
        <div className="bpx-cta-copy">
          <span className="bpx-cta-eyebrow">
            <span className="bpx-eyebrow-dot" />
            Want this deployed?
          </span>
          <h2 id="bpx-cta-title" className="bpx-cta-h2">
            Get the same playbook running in your clinic.
          </h2>
          <p className="bpx-cta-text">
            Book a free 30-minute walkthrough. We map the article to your stack
            and surface the first three quick wins — yours to keep, agency or not.
          </p>
        </div>
        <div className="bpx-cta-actions">
          <Link to="/free-growth-audit" className="bpx-btn bpx-btn-primary">
            Start a free audit <ArrowRight />
          </Link>
          <Link to="/blog" className="bpx-btn bpx-btn-ghost">
            Back to the library
          </Link>
        </div>
      </div>
    </div>
  </section>
);

/* ----- Section: Related articles ----- */
const Related = ({ related }: { related: BlogPostData[] }) => {
  if (related.length === 0) return null;
  return (
    <section className="bpx-related" aria-labelledby="bpx-related-title">
      <div className="container-shell">
        <header className="adv-head det-head">
          <span className="adv-eyebrow">/ 05 &nbsp; Keep reading</span>
          <h2 id="bpx-related-title" className="adv-h2">
            Three more from the same shelf.
          </h2>
          <p className="adv-intro">
            Hand-picked siblings — each one extends or contrasts the playbook
            you just read.
          </p>
        </header>
        <div className="bpx-related-grid">
          {related.map((r, i) => (
            <Link key={r.slug} to={`/blog/${r.slug}`} className="bpx-related-card">
              <div className="bpx-related-art" aria-hidden="true">
                {r.illustration}
                <span className="bpx-related-num">/{String(i + 1).padStart(2, '0')}</span>
              </div>
              <div className="bpx-related-body">
                <span className="bpx-related-cat">{r.catLabel}</span>
                <h3 className="bpx-related-title">{r.title}</h3>
                <p className="bpx-related-meta">{r.date} · {r.readTime}</p>
                <span className="bpx-related-cta">
                  Read article <ArrowRight />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ----- Section: Newsletter ----- */
const Newsletter = () => (
  <section className="bpx-news" aria-labelledby="bpx-news-title">
    <div className="container-shell">
      <div className="bpx-news-grid">
        <div className="bpx-news-copy">
          <span className="bpx-eyebrow">
            <span className="bpx-eyebrow-dot" />
            The dispatch
          </span>
          <h2 id="bpx-news-title" className="bpx-news-h2">
            One healthcare growth playbook in your inbox, every Tuesday.
          </h2>
          <p className="bpx-news-text">
            Concise, field-tested, and free. No upsell — unsubscribe in one click.
          </p>
        </div>
        <form
          className="bpx-news-form"
          onSubmit={(e) => e.preventDefault()}
          aria-label="Subscribe to the dispatch"
        >
          <label className="bpx-news-field">
            <span className="bpx-news-field-label">Work email</span>
            <input type="email" placeholder="you@clinic.com" autoComplete="email" />
          </label>
          <button type="submit" className="bpx-btn bpx-btn-primary">
            Subscribe <ArrowRight />
          </button>
        </form>
      </div>
    </div>
  </section>
);

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

  const related = getRelatedPosts(post.related);
  const wordCount = wordsIn(post);
  const idx = BLOG_POSTS.findIndex((p) => p.slug === post.slug);
  const postId = `NG-${String(idx + 1).padStart(3, '0')}`;

  return (
    <main className="bpx" id="bpx-top">
      <article>
        <Hero post={post} postId={postId} />
        <DataBand post={post} wordCount={wordCount} />
        <TLDR post={post} />
        <AtAGlance post={post} />
        <ImageBreak post={post} />
        <Playbook post={post} />
        <PullQuote post={post} />
        <Checklist post={post} />
        <WhoFor post={post} />
        <AuthorBlock post={post} />
        <CTABanner />
        <Related related={related} />
        <Newsletter />

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
