import { Link, useParams, Navigate } from 'react-router-dom';
import Breadcrumb from '../../components/Breadcrumb';
import {
  NEWS_ARTICLES,
  newsBySlug,
  relatedArticles,
  CATEGORY_TONES,
  type NewsArticle,
} from './news.data';

/* ============================================================
   HEALTHCARE-NEWS — single-article detail page.
   Editorial layout: tone-coded hero, full-bleed cover image,
   takeaways panel, two-column body with sidebar, pull-quote,
   related-stories rail, tied service CTA.
   Distinct visual language from BlogPost / CaseStudyDetail.
   ============================================================ */

const COLORS = {
  navy:  '#1A2438',
  navy2: '#2D3748',
  body:  '#4A5568',
  muted: '#718096',
  paper: '#FAFAF8',
  mint:  '#EBF4DD',
};

/* ─── Tone-coloured category pill ─── */
const CategoryPill = ({ article, size = 'md' }: { article: NewsArticle; size?: 'sm' | 'md' }) => {
  const t = CATEGORY_TONES[article.category];
  const pad = size === 'sm' ? 'px-2.5 py-1 text-[10.5px]' : 'px-3 py-1.5 text-[11px]';
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full font-mono font-bold tracking-[0.18em] uppercase ${pad}`}
      style={{ background: t.soft, color: t.hex }}
    >
      <span className="w-1.5 h-1.5 rounded-full" style={{ background: t.hex }} aria-hidden="true" />
      {article.category}
    </span>
  );
};

/* ─── Section 01 · HERO ─── */
const Hero = ({ article }: { article: NewsArticle }) => {
  const t = CATEGORY_TONES[article.category];
  return (
    <section className="ph-page-head">
      <div className="container-shell">
        <Breadcrumb current={article.title.slice(0, 48) + (article.title.length > 48 ? '…' : '')} />

        <div className="mt-8 grid lg:grid-cols-12 gap-x-12 gap-y-12">
          <div className="lg:col-span-7">
            <CategoryPill article={article} />
            <h1 className="mt-6 font-extrabold leading-[1.02] tracking-[-0.034em] text-[clamp(34px,5vw,68px)]" style={{ color: COLORS.navy }}>
              {article.title}
            </h1>
            <p className="mt-7 text-[18px] leading-[1.65] max-w-[60ch]" style={{ color: COLORS.body }}>
              {article.lede}
            </p>

            {/* Byline meta row */}
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-[13px]" style={{ color: COLORS.muted }}>
              <div className="flex items-center gap-3">
                <span
                  className="inline-grid place-items-center w-9 h-9 rounded-full font-mono text-[12px] font-bold"
                  style={{ background: t.soft, color: t.hex }}
                  aria-hidden="true"
                >
                  {article.author.split(' ').map((w) => w[0]).join('').slice(0, 2)}
                </span>
                <span>
                  By <strong style={{ color: COLORS.navy }}>{article.author}</strong>
                </span>
              </div>
              <span className="opacity-30">·</span>
              <span>{article.date}</span>
              <span className="opacity-30">·</span>
              <span>{article.readTime}</span>
            </div>
          </div>

          {/* Right-side: small stat-card with tone accent */}
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
                {article.takeaways[0]}
              </h2>
              {article.takeaways[1] && (
                <p className="mt-4 text-[14px] leading-[1.6]" style={{ color: COLORS.body }}>
                  {article.takeaways[1]}
                </p>
              )}
              <div className="mt-6 pt-5 border-t flex items-center gap-2 text-[10.5px] uppercase tracking-[0.20em] font-bold" style={{ borderColor: 'rgba(26, 36, 56, 0.10)', color: t.hex }}>
                <span className="w-1.5 h-1.5 rounded-full" style={{ background: t.hex }} />
                {article.takeaways.length} key takeaways below
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
            src={article.img}
            alt=""
            loading="eager"
            decoding="async"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: 'linear-gradient(180deg, rgba(26, 36, 56, 0) 60%, rgba(26, 36, 56, 0.35) 100%)' }}
          />
          <div className="absolute bottom-5 right-5 inline-flex items-center gap-2 px-3 py-1.5 rounded-full backdrop-blur-md" style={{ background: 'rgba(255, 255, 255, 0.18)', border: '1px solid rgba(255, 255, 255, 0.25)' }}>
            <span className="font-mono text-[10.5px] tracking-[0.18em] uppercase text-white font-bold">Editorial</span>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ─── Section 02 · STORY ARC (narrative timeline) ─── */
const Takeaways = ({ article }: { article: NewsArticle }) => {
  const t = CATEGORY_TONES[article.category];
  const total = article.takeaways.length;
  // Split a takeaway at the first em-dash, semicolon or colon so we can lead
  // with a bold opening phrase and continue with the rest as supporting text.
  const splitTake = (text: string): [string, string] => {
    const m = text.match(/^(.{6,80}?)([—–:;])\s+(.+)$/);
    if (m) return [m[1], m[3]];
    const words = text.split(/\s+/);
    const cut = Math.min(8, Math.max(4, Math.floor(words.length / 3)));
    return [words.slice(0, cut).join(' '), words.slice(cut).join(' ')];
  };

  return (
    <section className="border-t" style={{ borderColor: 'rgba(26, 36, 56, 0.08)' }}>
      <div className="container-shell py-[clamp(64px,8vw,112px)]">
        <header className="grid lg:grid-cols-12 gap-x-12 gap-y-3 mb-12 lg:mb-16">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 font-mono text-[12px] tracking-[0.22em] uppercase font-bold" style={{ color: t.hex }}>
              <span>01</span>
              <span className="h-px w-12" style={{ background: t.hex, opacity: 0.5 }} />
              <span>The story arc</span>
            </div>
            <h2 className="mt-5 font-extrabold tracking-[-0.024em] leading-[1.08] text-[clamp(28px,3.6vw,44px)] max-w-[18ch]" style={{ color: COLORS.navy }}>
              {article.takeaways.length} beats. One{' '}
              <span style={{ color: t.hex }}>story</span>.
            </h2>
          </div>
          <p className="lg:col-span-5 text-[15.5px] leading-[1.7] max-w-[44ch] self-end" style={{ color: COLORS.body }}>
            Read the topic the way a journalist would tell it — sequenced, weighted, and
            built on what actually moved.
          </p>
        </header>

        {/* Vertical narrative timeline */}
        <div className="relative grid lg:grid-cols-12 gap-x-12">
          <div className="lg:col-span-9 lg:col-start-3 relative">
            {/* Tone-coloured spine that runs the full length of the arc */}
            <span
              aria-hidden="true"
              className="absolute left-[19px] sm:left-[23px] top-3 bottom-3 w-px"
              style={{ background: `linear-gradient(180deg, ${t.hex} 0%, ${t.hex}55 100%)` }}
            />

            <ol className="space-y-10 sm:space-y-14">
              {article.takeaways.map((take, i) => {
                const [lead, rest] = splitTake(take);
                return (
                  <li key={i} className="relative pl-12 sm:pl-14">
                    {/* Beat marker on the spine */}
                    <span
                      aria-hidden="true"
                      className="absolute left-0 top-1 inline-grid place-items-center w-[40px] h-[40px] sm:w-[48px] sm:h-[48px] rounded-full border-2 bg-white font-mono text-[12px] sm:text-[13px] font-bold"
                      style={{ borderColor: t.hex, color: t.hex }}
                    >
                      {String(i + 1).padStart(2, '0')}
                    </span>

                    {/* Beat label */}
                    <div className="flex items-center gap-2 font-mono text-[10.5px] sm:text-[11px] tracking-[0.22em] uppercase font-bold" style={{ color: COLORS.muted }}>
                      <span>Beat {String(i + 1).padStart(2, '0')}</span>
                      <span className="opacity-30">/</span>
                      <span style={{ color: t.hex }}>{String(total).padStart(2, '0')}</span>
                    </div>

                    {/* Story beat — bold lead then supporting clause */}
                    <p
                      className="mt-3 text-[19px] sm:text-[22px] leading-[1.4] tracking-[-0.014em]"
                      style={{ color: COLORS.body }}
                    >
                      <strong className="font-extrabold" style={{ color: COLORS.navy }}>
                        {lead}
                        {rest ? ' ' : ''}
                      </strong>
                      {rest ? (i === 0 ? <>— {rest}</> : <>{rest.startsWith(',') || rest.startsWith('.') ? '' : '— '}{rest}</>) : null}
                    </p>
                  </li>
                );
              })}

              {/* End marker — story closes here */}
              <li className="relative pl-12 sm:pl-14">
                <span
                  aria-hidden="true"
                  className="absolute left-0 top-1 inline-grid place-items-center w-[40px] h-[40px] sm:w-[48px] sm:h-[48px] rounded-full"
                  style={{ background: t.hex, color: '#FFFFFF' }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </span>
                <div className="flex items-center gap-2 font-mono text-[10.5px] sm:text-[11px] tracking-[0.22em] uppercase font-bold" style={{ color: t.hex }}>
                  <span>The story so far</span>
                </div>
                <p className="mt-2 text-[14.5px] leading-[1.55]" style={{ color: COLORS.muted }}>
                  Continue to the full report below for the working detail.
                </p>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ─── Section 03 · BODY + SIDEBAR ─── */
const Body = ({ article }: { article: NewsArticle }) => {
  const t = CATEGORY_TONES[article.category];
  return (
    <section className="border-t" style={{ borderColor: 'rgba(26, 36, 56, 0.08)', background: COLORS.paper }}>
      <div className="container-shell py-[clamp(72px,9vw,128px)]">
        <header className="grid lg:grid-cols-12 gap-x-12 gap-y-3 mb-12">
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 font-mono text-[12px] tracking-[0.22em] uppercase font-bold" style={{ color: t.hex }}>
              <span>02</span>
              <span className="h-px w-12" style={{ background: t.hex, opacity: 0.5 }} />
              <span>The story</span>
            </div>
            <h2 className="mt-5 font-extrabold tracking-[-0.022em] leading-[1.1] text-[clamp(26px,3vw,38px)]" style={{ color: COLORS.navy }}>
              The full picture, in context.
            </h2>
          </div>
        </header>

        <div className="grid lg:grid-cols-12 gap-x-12 gap-y-10">
          {/* Body copy */}
          <div className="lg:col-span-8 space-y-6">
            {article.body.map((para, i) => (
              <p
                key={i}
                className="text-[16.5px] leading-[1.75] first-letter:font-bold"
                style={{ color: COLORS.body }}
              >
                {i === 0 && (
                  <span
                    className="float-left mr-3 font-extrabold leading-none tracking-[-0.02em]"
                    style={{ color: COLORS.navy, fontSize: '4.2rem', lineHeight: '0.85' }}
                  >
                    {para.charAt(0)}
                  </span>
                )}
                {i === 0 ? para.slice(1) : para}
              </p>
            ))}

            {/* Pull quote (if available) */}
            {article.quote && (
              <figure
                className="relative my-8 rounded-[22px] p-8 sm:p-10 border-l-[6px]"
                style={{
                  background: COLORS.mint,
                  borderLeftColor: t.hex,
                }}
              >
                <span
                  className="absolute top-4 right-6 font-serif text-[64px] leading-none"
                  style={{ color: t.hex, opacity: 0.35 }}
                  aria-hidden="true"
                >
                  &ldquo;
                </span>
                <blockquote className="text-[20px] sm:text-[22px] leading-[1.45] font-bold tracking-[-0.012em] max-w-[40ch]" style={{ color: COLORS.navy }}>
                  {article.quote.text}
                </blockquote>
                <figcaption className="mt-5 font-mono text-[11.5px] tracking-[0.2em] uppercase font-bold" style={{ color: t.hex }}>
                  — {article.quote.attribution}
                </figcaption>
              </figure>
            )}
          </div>

          {/* Sticky sidebar */}
          <aside className="lg:col-span-4">
            <div className="lg:sticky lg:top-28 space-y-5">
              {/* Article metadata card */}
              <div className="bg-white border rounded-[18px] p-6" style={{ borderColor: 'rgba(26, 36, 56, 0.10)' }}>
                <div className="font-mono text-[10.5px] tracking-[0.22em] uppercase font-bold mb-4" style={{ color: COLORS.muted }}>
                  In this report
                </div>
                <dl className="space-y-3 text-[13px]">
                  <div className="flex items-center justify-between">
                    <dt style={{ color: COLORS.muted }}>Category</dt>
                    <dd style={{ color: COLORS.navy }} className="font-semibold">{article.category}</dd>
                  </div>
                  <div className="flex items-center justify-between">
                    <dt style={{ color: COLORS.muted }}>Author</dt>
                    <dd style={{ color: COLORS.navy }} className="font-semibold">{article.author}</dd>
                  </div>
                  <div className="flex items-center justify-between">
                    <dt style={{ color: COLORS.muted }}>Published</dt>
                    <dd style={{ color: COLORS.navy }} className="font-semibold">{article.date}</dd>
                  </div>
                  <div className="flex items-center justify-between">
                    <dt style={{ color: COLORS.muted }}>Read time</dt>
                    <dd style={{ color: COLORS.navy }} className="font-semibold">{article.readTime}</dd>
                  </div>
                </dl>
              </div>

              {/* Share / back-to-news */}
              <div className="bg-white border rounded-[18px] p-6" style={{ borderColor: 'rgba(26, 36, 56, 0.10)' }}>
                <div className="font-mono text-[10.5px] tracking-[0.22em] uppercase font-bold mb-3" style={{ color: COLORS.muted }}>
                  Newsroom
                </div>
                <Link
                  to="/healthcare-news"
                  className="group inline-flex items-center gap-2 text-[14px] font-semibold"
                  style={{ color: COLORS.navy }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <line x1="19" y1="12" x2="5" y2="12" />
                    <polyline points="12 19 5 12 12 5" />
                  </svg>
                  Back to all stories
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

/* ─── Section 04 · RELATED ─── */
const Related = ({ article }: { article: NewsArticle }) => {
  const related = relatedArticles(article.slug, 3);
  return (
    <section className="border-t" style={{ borderColor: 'rgba(26, 36, 56, 0.08)' }}>
      <div className="container-shell py-[clamp(64px,8vw,112px)]">
        <header className="grid lg:grid-cols-12 gap-x-12 gap-y-3 mb-10 items-end">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 font-mono text-[12px] tracking-[0.22em] uppercase font-bold" style={{ color: COLORS.muted }}>
              <span>03</span>
              <span className="h-px w-12" style={{ background: '#B38B6D', opacity: 0.5 }} />
              <span>Continue reading</span>
            </div>
            <h2 className="mt-5 font-extrabold tracking-[-0.024em] leading-[1.1] text-[clamp(26px,3vw,38px)]" style={{ color: COLORS.navy }}>
              Three more stories worth your time.
            </h2>
          </div>
          <Link
            to="/healthcare-news"
            className="lg:col-span-5 lg:justify-self-end inline-flex items-center gap-2 text-[14px] font-semibold"
            style={{ color: COLORS.navy }}
          >
            All stories
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </Link>
        </header>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {related.map((r) => (
            <Link
              key={r.slug}
              to={`/healthcare-news/${r.slug}`}
              className="group bg-white border rounded-[20px] overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_48px_-28px_rgba(45,55,72,0.22)]"
              style={{ borderColor: 'rgba(26, 36, 56, 0.10)' }}
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-bg-soft">
                <img src={r.img} alt="" loading="lazy" decoding="async" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-6 sm:p-7 flex flex-col gap-3">
                <CategoryPill article={r} size="sm" />
                <h3 className="text-[18px] font-extrabold leading-[1.18] tracking-[-0.018em]" style={{ color: COLORS.navy }}>
                  {r.title}
                </h3>
                <div className="mt-1 text-[12px]" style={{ color: COLORS.muted }}>
                  {r.date} · {r.readTime}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ─── Section 05 · CTA (tied to relevant service) ─── */
const Closing = ({ article }: { article: NewsArticle }) => {
  if (!article.ctaTo || !article.ctaTitle) return null;
  return (
    <section className="border-t" style={{ borderColor: 'rgba(26, 36, 56, 0.08)' }}>
      <div className="container-shell py-[clamp(72px,9vw,128px)]">
        <article
          className="relative rounded-[28px] overflow-hidden p-10 sm:p-14 lg:p-16"
          style={{ background: 'linear-gradient(90deg, #DDD9E5 0%, #DDE3DC 50%, #EFE7CD 100%)' }}
        >
          <div className="grid lg:grid-cols-12 gap-x-12 gap-y-8 items-end">
            <div className="lg:col-span-8">
              <div className="font-mono text-[12px] tracking-[0.24em] uppercase font-bold" style={{ color: '#B38B6D' }}>
                From insight → engagement
              </div>
              <h3 className="mt-5 font-extrabold leading-[1.04] tracking-[-0.028em] text-[clamp(28px,3.8vw,46px)] max-w-[24ch]" style={{ color: COLORS.navy }}>
                {article.ctaTitle}
              </h3>
              {article.ctaBody && (
                <p className="mt-5 text-[16px] leading-[1.65] max-w-[58ch]" style={{ color: COLORS.body }}>
                  {article.ctaBody}
                </p>
              )}
            </div>
            <div className="lg:col-span-4 flex flex-col gap-4 lg:items-end">
              <Link to={article.ctaTo} className="btn-primary">
                {article.ctaLabel ?? 'Learn more'} →
              </Link>
              <Link to="/contact" className="text-[14px] font-semibold underline-offset-4 hover:underline" style={{ color: COLORS.navy }}>
                Talk to a strategist
              </Link>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

const NewsDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = slug ? newsBySlug(slug) : undefined;

  if (!article) {
    return <Navigate to="/healthcare-news" replace />;
  }

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'NewsArticle',
    headline: article.title,
    description: article.lede,
    datePublished: article.date,
    author: { '@type': 'Person', name: article.author },
    publisher: {
      '@type': 'Organization',
      name: 'TheNextGen Healthcare Marketing',
    },
    articleSection: article.category,
  };

  return (
    <>
      <Hero article={article} />
      <Takeaways article={article} />
      <Body article={article} />
      <Related article={article} />
      <Closing article={article} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
    </>
  );
};

export default NewsDetail;
export { NEWS_ARTICLES };
