import { Link, useParams, Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import { MotionButton, MotionCard, AnimatedBackground } from '../../lib/motion';
import DetailNarrative, { type NarrativeBlock } from '../../components/DetailNarrative';
import DetailSectionHead from '../../components/DetailSectionHead';

const KIND_BODY_INTRO: Record<DetailKind, (entry: DetailEntry) => string> = {
  engagement: () => 'Three paragraphs that map the challenge, the rebuild, and the outcome — written by the strategist who shipped the work.',
  industry: () => 'The patient psychology, the regulatory edges, and the funnel mechanics that make this vertical its own discipline.',
  capability: () => 'How this discipline runs inside the Focus growth operating system — and why it compounds when the other five run alongside it.',
};

const KIND_FAQ_INTRO: Record<DetailKind, string> = {
  engagement: 'The same questions every leadership team raises about an engagement like this — answered up front so the discovery call moves faster.',
  industry: 'Recurring questions from practice owners and growth leads in this vertical — answered before the first conversation.',
  capability: 'Common questions about how this discipline runs, how it is reported, and how it integrates with the rest of the stack.',
};

const KIND_RELATED_INTRO: Record<DetailKind, string> = {
  engagement: 'Three sibling engagements from the same quarter — different verticals, same operating cadence.',
  industry: 'Other healthcare verticals running the same growth operating system, tuned to their patient psychology.',
  capability: 'The other disciplines this capability shares a calendar and growth lead with.',
};
import {
  ENGAGEMENT_DETAILS,
  INDUSTRY_DETAILS,
  CAPABILITY_DETAILS,
  INDUSTRY_ICONS,
  findDetail,
  detailHref,
  type DetailEntry,
  type DetailKind,
} from './details.data';

const PAREN_TYPE_LABEL: Record<DetailKind, string> = {
  engagement: 'Engagement',
  industry: 'Industry',
  capability: 'Capability',
};

const KIND_GROUP: Record<DetailKind, DetailEntry[]> = {
  engagement: ENGAGEMENT_DETAILS,
  industry: INDUSTRY_DETAILS,
  capability: CAPABILITY_DETAILS,
};

const KIND_LABEL_PLURAL: Record<DetailKind, string> = {
  engagement: 'Engagements',
  industry: 'Industries',
  capability: 'Capabilities',
};

const ArrowRight = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

const Check = ({ size = 14 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

interface DetailHeroProps {
  entry: DetailEntry;
  numLabel: string;
}

const DetailHero = ({ entry, numLabel }: DetailHeroProps) => (
  <section className="ow-detail-hero" aria-labelledby="ow-detail-title">
    <AnimatedBackground variant="aurora" intensity="subtle" />
    <div className="container-shell">
      <nav className="ow-crumbs ow-detail-crumbs" aria-label="Breadcrumb">
        <Link to="/">Home</Link>
        <span aria-hidden="true">/</span>
        <Link to="/our-work">Our Work</Link>
        <span aria-hidden="true">/</span>
        <span aria-current="page">{entry.title}</span>
      </nav>

      <div className="ow-ind-modal-card ow-detail-card">
        <div className="ow-ind-modal-art" aria-hidden="true">
          <img src={entry.img} alt="" />
          <div className="ow-ind-modal-art-shade" />
          <span className="ow-ind-modal-num">{numLabel}</span>
          {entry.kind === 'industry' && INDUSTRY_ICONS[entry.slug] && (
            <span className="ow-ind-modal-art-icon">{INDUSTRY_ICONS[entry.slug]}</span>
          )}
        </div>

        <div className="ow-ind-modal-body">
          <span className="ow-ind-modal-tag">{entry.eyebrow}</span>
          <h1 id="ow-detail-title" className="ow-ind-modal-title">{entry.title}</h1>
          <p className="ow-ind-modal-blurb">{entry.blurb}</p>
          <p className="ow-ind-modal-desc">{entry.description}</p>

          <div className="ow-ind-modal-services">
            <span className="ow-ind-modal-subtag">{entry.serviceLabel}</span>
            <ul>
              {entry.services.map((s) => (
                <li key={s}>
                  <Check />
                  {s}
                </li>
              ))}
            </ul>
          </div>

          <div className="ow-ind-modal-foot">
            <div className="ow-ind-modal-metric">
              <strong>{entry.metric.v}</strong>
              <span>{entry.metric.l}</span>
            </div>
            <Link to={entry.ctaTo} className="ow-ind-modal-cta">
              {entry.ctaText}
              <ArrowRight />
            </Link>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const DetailBody = ({ entry }: { entry: DetailEntry }) => {
  const lede = entry.longBody[0] ?? '';
  const restParas = entry.longBody.slice(1);
  return (
    <section className="ow-detail-body" aria-labelledby="ow-detail-body-title">
      <div className="container-shell">
        <DetailSectionHead
          id="ow-detail-body-title"
          eyebrow="The work in depth"
          title="What it looked like inside the engagement."
          intro={KIND_BODY_INTRO[entry.kind](entry)}
        />

        {/* Bottom: image card left, image + text + CTA right */}
        <div className="ow-body-grid">
          <article className="ow-body-card-left">
            <img src={entry.img} alt="" loading="lazy" decoding="async" />
            <div className="ow-body-card-overlay">
              <h3 className="ow-body-card-overlay-title">Inside the engagement.</h3>
              <p className="ow-body-card-overlay-text">{entry.blurb}</p>
              <Link to={entry.ctaTo} className="ow-body-overlay-btn">
                Discover
                <ArrowRight size={12} />
              </Link>
            </div>
          </article>

          <div className="ow-body-stack-right">
            <div className="ow-body-stack-img">
              <img src={entry.img} alt="" loading="lazy" decoding="async" />
            </div>
            <div className="ow-body-stack-content">
              {restParas.length > 0 ? (
                restParas.map((p, i) => (
                  <p key={i} className="ow-body-stack-text">{p}</p>
                ))
              ) : (
                <p className="ow-body-stack-text">{lede}</p>
              )}
              <Link to={entry.ctaTo} className="ow-body-cta-pill">
                {entry.ctaText}
                <span className="ow-body-cta-ico" aria-hidden="true">
                  <ArrowRight size={14} />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const DetailFAQ = ({ entry }: { entry: DetailEntry }) => (
  <section className="ow-detail-faq" aria-labelledby="ow-detail-faq-title">
    <div className="container-shell">
      <DetailSectionHead
        id="ow-detail-faq-title"
        eyebrow="Frequently asked"
        title="Questions we hear about this work."
        intro={KIND_FAQ_INTRO[entry.kind]}
      />
      <ol className="ow-detail-faq-list">
        {entry.faqs.map((f, i) => (
          <li key={f.q}>
            <span className="ow-detail-faq-num">{String(i + 1).padStart(2, '0')}</span>
            <div>
              <h3>{f.q}</h3>
              <p>{f.a}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  </section>
);

const Related = ({ entry }: { entry: DetailEntry }) => {
  const group = KIND_GROUP[entry.kind].filter((d) => d.slug !== entry.slug).slice(0, 3);
  if (group.length === 0) return null;
  return (
    <section className="ow-detail-related" aria-labelledby="ow-detail-related-title">
      <div className="container-shell">
        <DetailSectionHead
          id="ow-detail-related-title"
          eyebrow={`More ${KIND_LABEL_PLURAL[entry.kind]}`}
          title={
            entry.kind === 'engagement'
              ? 'More engagements from this quarter.'
              : entry.kind === 'industry'
                ? 'Other clinics this work has shipped for.'
                : 'Other capabilities in the operating system.'
          }
          intro={KIND_RELATED_INTRO[entry.kind]}
        />

        <div className="ow-feat-grid ow-detail-related-grid">
          {group.map((r) => (
            <MotionCard key={r.slug} naked tilt={6} className="ow-feat-card-wrap">
              <Link
                to={detailHref(r.kind, r.slug)}
                className="ow-feat-card"
                aria-label={`Read more about ${r.title}`}
              >
                <div className="ow-feat-art ow-feat-art--photo" aria-hidden="true">
                  <img src={r.img} alt="" loading="lazy" />
                  <div className="ow-feat-art-shade" />
                  <span className="ow-feat-delta">{r.metric.v}</span>
                </div>
                <div className="ow-feat-body">
                  <span className="ow-feat-sector">{PAREN_TYPE_LABEL[r.kind]}</span>
                  <h3 className="ow-feat-name">{r.title}</h3>
                  <p className="ow-feat-headline">{r.blurb}</p>
                  <div className="ow-feat-foot">
                    <div>
                      <strong>{r.metric.v}</strong>
                      <span>{r.metric.l}</span>
                    </div>
                    <span className="ow-feat-arrow" aria-hidden="true">↗</span>
                  </div>
                </div>
              </Link>
            </MotionCard>
          ))}
        </div>
      </div>
    </section>
  );
};

const Closing = ({ entry }: { entry: DetailEntry }) => (
  <section className="ow-close" aria-labelledby="ow-detail-close-title">
    <div className="container-shell">
      <div className="ow-close-card ow-detail-close-card">
        <div className="ow-close-body">
          <span className="ow-pill">
            <span className="ow-pill-dot" /> Now booking · Q3 2026
          </span>
          <h2 id="ow-detail-close-title" className="ow-close-h">
            Ready to ship this work
            <br />
            for <em>your</em> practice?
          </h2>
          <p className="ow-close-p">
            We take a small number of new engagements each quarter. The five-day audit
            gets you a real, ranked plan - yours to keep, agency or not.
          </p>
          <div className="ow-close-cta">
            <MotionButton to="/free-growth-audit" className="ow-cta-primary ow-cta-primary--light">
              Get my growth audit
              <ArrowRight />
            </MotionButton>
            <Link to="/our-work" className="ow-cta-link ow-cta-link--light">
              Back to Our Work
            </Link>
          </div>
        </div>
        <div className="ow-detail-close-metric" aria-hidden="true">
          <strong>{entry.metric.v}</strong>
          <span>{entry.metric.l}</span>
        </div>
      </div>
    </div>
  </section>
);

const ABOUT_HEADLINE: Record<DetailKind, (entry: DetailEntry) => string> = {
  engagement: (e) => `${e.title}, a focused engagement built around healthcare growth.`,
  industry: (e) => `${e.title} marketing, built around the verticals patients actually search for.`,
  capability: (e) => `${e.title.replace(/\.$/, '')} — a discipline inside the Focus growth operating system.`,
};

const APPROACH_HEADLINE: Record<DetailKind, (entry: DetailEntry) => string> = {
  engagement: () => 'Our unique approach is what sets the outcome apart.',
  industry: (e) => `How we ship growth for ${e.title.toLowerCase()} — and what sets it apart.`,
  capability: () => 'Our unique approach is what sets this discipline apart.',
};

const buildNarrativeBlocks = (entry: DetailEntry): { about: NarrativeBlock; approach: NarrativeBlock } => {
  const aboutBody =
    entry.longBody[0] ||
    entry.description ||
    'A healthcare growth engagement engineered around revenue-accountable outcomes, not vanity metrics.';
  const approachBody =
    entry.longBody[1] ||
    entry.longBody[0] ||
    entry.description ||
    'A documented, repeatable playbook that puts patients first and ties every dollar of spend back to chair-time and revenue.';
  return {
    about: {
      eyebrow: `About this ${entry.kind}`,
      title: ABOUT_HEADLINE[entry.kind](entry),
      body: aboutBody,
      ctaText: 'Learn more',
      ctaTo: '/our-work',
      image: entry.img,
      imageAlt: '',
    },
    approach: {
      eyebrow: 'Our approach',
      title: APPROACH_HEADLINE[entry.kind](entry),
      body: approachBody,
      ctaText: 'About page',
      ctaTo: '/about',
      image: entry.img,
      imageAlt: '',
    },
  };
};

const buildSchema = (entry: DetailEntry) => {
  if (entry.kind === 'engagement') {
    return {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: entry.title,
      description: entry.description,
      about: entry.eyebrow,
      mainEntityOfPage: `https://thenextgenhealth.com${detailHref(entry.kind, entry.slug)}`,
    };
  }
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: entry.title,
    serviceType: entry.kind === 'industry' ? 'Healthcare marketing services for ' + entry.title : entry.title,
    description: entry.description,
    provider: {
      '@type': 'LocalBusiness',
      name: 'TheNextGen Healthcare Marketing',
      url: 'https://thenextgenhealth.com',
    },
    areaServed: 'United States',
  };
};

const faqSchema = (entry: DetailEntry) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: entry.faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
});

const OurWorkDetail = () => {
  const { kind, slug } = useParams<{ kind: string; slug: string }>();
  const validKind = (kind === 'engagement' || kind === 'industry' || kind === 'capability')
    ? (kind as DetailKind)
    : null;

  const entry = validKind && slug ? findDetail(validKind, slug) : undefined;

  useEffect(() => {
    if (entry) {
      const prevTitle = document.title;
      document.title = `${entry.title} · ${PAREN_TYPE_LABEL[entry.kind]} · Our Work`;
      return () => {
        document.title = prevTitle;
      };
    }
  }, [entry]);

  if (!validKind || !entry) {
    return <Navigate to="/our-work" replace />;
  }

  const group = KIND_GROUP[entry.kind];
  const indexInGroup = group.findIndex((d) => d.slug === entry.slug);
  const numLabel = `${String(indexInGroup + 1).padStart(2, '0')} / ${String(group.length).padStart(2, '0')}`;
  const narrative = buildNarrativeBlocks(entry);

  return (
    <main className="ow-detail-page">
      <DetailHero entry={entry} numLabel={numLabel} />
      <DetailBody entry={entry} />
      <DetailNarrative about={narrative.about} approach={narrative.approach} />
      <DetailFAQ entry={entry} />
      <Related entry={entry} />
      <Closing entry={entry} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildSchema(entry)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(entry)) }}
      />
    </main>
  );
};

export default OurWorkDetail;
