import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Breadcrumb from '../../components/Breadcrumb';
import { getPostBySlug, getRelatedPosts } from './posts';
import type { BlogPostData } from './posts';

const ArrowRight = () => (
  <svg
    width={13}
    height={13}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2.4}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

const Calendar = () => (
  <svg
    width={12}
    height={12}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.9}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <rect x="3" y="4" width="18" height="18" rx="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);

const Clock = () => (
  <svg
    width={12}
    height={12}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.9}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

const UserIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.8}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <circle cx="12" cy="8" r="4" />
    <path d="M4 22 C 4 16 7 14 12 14 C 17 14 20 16 20 22" />
  </svg>
);

const ORIGIN =
  typeof window !== 'undefined' ? window.location.origin : 'https://thenextgenhealth.com';

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
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': `${ORIGIN}/blog/${post.slug}`,
  },
  inLanguage: 'en-US',
});

const buildBreadcrumbSchema = (post: BlogPostData) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: `${ORIGIN}/` },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: `${ORIGIN}/blog` },
    {
      '@type': 'ListItem',
      position: 3,
      name: post.title,
      item: `${ORIGIN}/blog/${post.slug}`,
    },
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

const NotFoundBlock = () => (
  <main className="bp" id="bp-top">
    <section className="bp-hero">
      <div className="container-shell">
        <Breadcrumb
          items={[
            { label: 'Blog', to: '/blog' },
            { label: 'Article not found' },
          ]}
        />
        <div className="bp-empty">
          <span className="bp-eyebrow">/ 404 &nbsp; Missing article</span>
          <h1 className="bp-h1">We could not find that article.</h1>
          <p className="bp-lede">
            The post you tried to open may have moved or been retired.
            Browse the full library below.
          </p>
          <Link to="/blog" className="bp-btn bp-btn-primary">
            Back to all articles <ArrowRight />
          </Link>
        </div>
      </div>
    </section>
  </main>
);

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = getPostBySlug(slug);
  useDocumentMeta(post);

  if (!post) return <NotFoundBlock />;

  const related = getRelatedPosts(post.related);

  return (
    <main className="bp" id="bp-top">
      <article>
        <section className="bp-hero" aria-labelledby="bp-hero-title">
          <div className="container-shell">
            <Breadcrumb
              items={[
                { label: 'Blog', to: '/blog' },
                { label: post.catLabel },
              ]}
            />

            <div className="bp-hero-grid">
              <header className="bp-hero-copy">
                <span className="bp-eyebrow">
                  <i aria-hidden="true" />
                  {post.catLabel}
                </span>
                <h1 id="bp-hero-title" className="bp-h1">
                  {post.title}
                </h1>
                <p className="bp-lede">{post.excerpt}</p>

                <div className="bp-meta">
                  <span className="bp-meta-item">
                    <Calendar />
                    {post.date}
                  </span>
                  <span className="bp-meta-dot" />
                  <span className="bp-meta-item">
                    <Clock />
                    {post.readTime}
                  </span>
                  <span className="bp-meta-dot" />
                  <span className="bp-meta-item bp-meta-author">
                    <span className="bp-author-avatar" aria-hidden="true">
                      <UserIcon />
                    </span>
                    {post.author}
                    <span className="bp-author-role"> · {post.authorRole}</span>
                  </span>
                </div>
              </header>

              <figure className="bp-hero-art" aria-hidden="true">
                {post.illustration}
              </figure>
            </div>
          </div>
        </section>

        <section className="bp-takeaways" aria-labelledby="bp-takeaways-title">
          <div className="container-shell">
            <header className="bp-section-head">
              <span className="bp-section-label">/ 01 &nbsp; At a glance</span>
              <h2 id="bp-takeaways-title" className="bp-h2">
                The three numbers that matter before you read further.
              </h2>
            </header>
            <div className="bp-takeaways-grid">
              {post.takeaways.map((t) => (
                <article key={t.label} className="bp-stat">
                  <span className="bp-stat-label">{t.label}</span>
                  <span className="bp-stat-value">{t.value}</span>
                  <p className="bp-stat-desc">{t.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bp-playbook" aria-labelledby="bp-playbook-title">
          <div className="container-shell">
            <header className="bp-section-head bp-section-head--split">
              <div>
                <span className="bp-section-label">/ 02 &nbsp; The playbook</span>
                <h2 id="bp-playbook-title" className="bp-h2">
                  Four deliberate moves, in the order that ships fastest.
                </h2>
              </div>
              <p className="bp-section-sub">
                Each step is wired to a concrete decision, an owner, and a
                checkable deliverable — no theory, no fluff.
              </p>
            </header>
            <ol className="bp-steps">
              {post.sections.map((s) => (
                <li key={s.num} className="bp-step">
                  <span className="bp-step-num">{s.num}</span>
                  <h3 className="bp-step-title">{s.title}</h3>
                  <p className="bp-step-desc">{s.desc}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="bp-quote" aria-label="Editor pull-quote">
          <div className="container-shell">
            <blockquote className="bp-quote-frame">
              <span className="bp-quote-mark" aria-hidden="true">
                &ldquo;
              </span>
              <p className="bp-quote-text">{post.pullQuote.quote}</p>
              <cite className="bp-quote-cite">{post.pullQuote.attribution}</cite>
            </blockquote>
          </div>
        </section>

        <section className="bp-cta" aria-labelledby="bp-cta-title">
          <div className="container-shell">
            <div className="bp-cta-frame">
              <div className="bp-cta-copy">
                <span className="bp-cta-eyebrow">Get in touch</span>
                <h2 id="bp-cta-title" className="bp-cta-h2">
                  Want this deployed inside your clinic?
                </h2>
                <p className="bp-cta-text">
                  Book a free 30-minute walkthrough. We&rsquo;ll map the
                  playbook to your stack and surface the first three quick wins.
                </p>
              </div>
              <div className="bp-cta-actions">
                <Link to="/free-growth-audit" className="bp-btn bp-btn-primary">
                  Start a free audit <ArrowRight />
                </Link>
                <Link to="/blog" className="bp-btn bp-btn-ghost">
                  Back to the library
                </Link>
              </div>
            </div>
          </div>
        </section>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(buildBlogPostSchema(post)) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(buildBreadcrumbSchema(post)),
          }}
        />

        {related.length > 0 && (
          <section className="bp-related" aria-labelledby="bp-related-title">
            <div className="container-shell">
              <header className="bp-section-head">
                <span className="bp-section-label">/ 03 &nbsp; Keep reading</span>
                <h2 id="bp-related-title" className="bp-h2">
                  Three more from the same shelf.
                </h2>
              </header>
              <div className="bp-related-grid">
                {related.map((r) => (
                  <Link
                    key={r.slug}
                    to={`/blog/${r.slug}`}
                    className="bp-related-card"
                  >
                    <div className="bp-related-art" aria-hidden="true">
                      {r.illustration}
                    </div>
                    <span className="bp-related-cat">{r.catLabel}</span>
                    <h3 className="bp-related-title">{r.title}</h3>
                    <span className="bp-related-cta">
                      Read article <ArrowRight />
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </article>
    </main>
  );
};

export default BlogPost;
