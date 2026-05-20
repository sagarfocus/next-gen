import { Link, useParams, Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import { MotionButton, MotionCard, AnimatedBackground } from '../../lib/motion';
import DetailNarrative, { type NarrativeBlock } from '../../components/DetailNarrative';
import DetailSectionHead from '../../components/DetailSectionHead';
import {
  INDUSTRY_DETAIL_ENTRIES,
  findIndustryDetail,
  industryDetailHref,
  type IndustryDetailEntry,
} from './details.data';

const buildIndustryNarrative = (entry: IndustryDetailEntry): { about: NarrativeBlock; approach: NarrativeBlock } => ({
  about: {
    eyebrow: `About ${entry.label}`,
    title: `${entry.label} marketing, built around the patients your practice was made for.`,
    body:
      entry.longBody[0] ||
      entry.description ||
      `A focused growth playbook for ${entry.label.toLowerCase()} practices, tuned to the patient psychology and regulatory edges of the vertical.`,
    ctaText: 'Learn more',
    ctaTo: '/industries',
    image: entry.image,
    imageAlt: '',
  },
  approach: {
    eyebrow: 'Our approach',
    title: `Our unique approach is what sets ${entry.label.toLowerCase()} growth apart.`,
    body:
      entry.longBody[1] ||
      entry.longBody[0] ||
      `A documented, repeatable system that ties every campaign back to revenue per chair-hour — not impressions, not reach.`,
    ctaText: 'About page',
    ctaTo: '/about',
    image: entry.image,
    imageAlt: '',
  },
});

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

interface HeroProps {
  entry: IndustryDetailEntry;
  numLabel: string;
}

const Hero = ({ entry, numLabel }: HeroProps) => (
  <section className="ow-detail-hero" aria-labelledby="ind-detail-title">
    <AnimatedBackground variant="aurora" intensity="subtle" />
    <div className="container-shell">
      <nav className="ow-crumbs ow-detail-crumbs" aria-label="Breadcrumb">
        <Link to="/">Home</Link>
        <span aria-hidden="true">/</span>
        <Link to="/industries">Industries</Link>
        <span aria-hidden="true">/</span>
        <span aria-current="page">{entry.label}</span>
      </nav>

      <div className="ow-ind-modal-card ow-detail-card">
        <div className="ow-ind-modal-art" aria-hidden="true">
          <img src={entry.image} alt="" />
          <div className="ow-ind-modal-art-shade" />
          <span className="ow-ind-modal-num">{numLabel}</span>
        </div>

        <div className="ow-ind-modal-body">
          <span className="ow-ind-modal-tag">Industry · {entry.meta}</span>
          <h1 id="ind-detail-title" className="ow-ind-modal-title">{entry.label}</h1>
          <p className="ow-ind-modal-blurb">{entry.meta}</p>
          <p className="ow-ind-modal-desc">{entry.description}</p>

          <div className="ow-ind-modal-services">
            <span className="ow-ind-modal-subtag">What we ship</span>
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
              Talk to us about {entry.label}
              <ArrowRight />
            </Link>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Body = ({ entry }: { entry: IndustryDetailEntry }) => {
  const lede = entry.longBody[0] ?? '';
  const restParas = entry.longBody.slice(1);
  return (
    <section className="ow-detail-body" aria-labelledby="ind-detail-body-title">
      <div className="container-shell">
        <DetailSectionHead
          id="ind-detail-body-title"
          eyebrow="The playbook"
          title={<>How we ship {entry.label.toLowerCase()} growth.</>}
          intro={`The patient psychology, the regulatory edges, and the funnel mechanics that make ${entry.label.toLowerCase()} its own discipline — not a generic healthcare playbook.`}
        />

        {/* Bottom: image card left, image + text + CTA right */}
        <div className="ow-body-grid">
          <article className="ow-body-card-left">
            <img src={entry.image} alt="" loading="lazy" decoding="async" />
            <div className="ow-body-card-overlay">
              <h3 className="ow-body-card-overlay-title">Inside the playbook.</h3>
              <p className="ow-body-card-overlay-text">{entry.meta}</p>
              <Link to={entry.ctaTo} className="ow-body-overlay-btn">
                Discover
                <ArrowRight size={12} />
              </Link>
            </div>
          </article>

          <div className="ow-body-stack-right">
            <div className="ow-body-stack-img">
              <img src={entry.image} alt="" loading="lazy" decoding="async" />
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
                Talk to us about {entry.label}
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

const FAQ = ({ entry }: { entry: IndustryDetailEntry }) => (
  <section className="ow-detail-faq" aria-labelledby="ind-detail-faq-title">
    <div className="container-shell">
      <DetailSectionHead
        id="ind-detail-faq-title"
        eyebrow="Frequently asked"
        title={<>Questions we hear about {entry.label.toLowerCase()}.</>}
        intro={`Recurring questions from ${entry.label.toLowerCase()} owners and growth leads — answered before the first conversation.`}
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

const Related = ({ entry }: { entry: IndustryDetailEntry }) => {
  const others = INDUSTRY_DETAIL_ENTRIES.filter((d) => d.slug !== entry.slug).slice(0, 3);
  if (others.length === 0) return null;
  return (
    <section className="ow-detail-related" aria-labelledby="ind-detail-related-title">
      <div className="container-shell">
        <DetailSectionHead
          id="ind-detail-related-title"
          eyebrow="More industries"
          title="Other healthcare verticals we serve."
          intro="Other clinics running the same growth operating system, tuned to their patient psychology and regulatory edge."
        />

        <div className="ow-feat-grid ow-detail-related-grid">
          {others.map((r) => (
            <MotionCard key={r.slug} naked tilt={6} className="ow-feat-card-wrap">
              <Link
                to={industryDetailHref(r.slug)}
                className="ow-feat-card"
                aria-label={`Read more about ${r.label}`}
              >
                <div className="ow-feat-art ow-feat-art--photo" aria-hidden="true">
                  <img src={r.image} alt="" loading="lazy" />
                  <div className="ow-feat-art-shade" />
                  <span className="ow-feat-delta">{r.metric.v}</span>
                </div>
                <div className="ow-feat-body">
                  <span className="ow-feat-sector">Industry</span>
                  <h3 className="ow-feat-name">{r.label}</h3>
                  <p className="ow-feat-headline">{r.meta}</p>
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

const Closing = ({ entry }: { entry: IndustryDetailEntry }) => (
  <section className="ow-close" aria-labelledby="ind-detail-close-title">
    <div className="container-shell">
      <div className="ow-close-card ow-detail-close-card">
        <div className="ow-close-body">
          <span className="ow-pill">
            <span className="ow-pill-dot" /> Now booking · Q3 2026
          </span>
          <h2 id="ind-detail-close-title" className="ow-close-h">
            Ready to ship this playbook
            <br />
            for <em>your</em> {entry.label.toLowerCase()} practice?
          </h2>
          <p className="ow-close-p">
            The five-day audit hands you a real ranked plan for your practice -
            yours to keep, agency or not.
          </p>
          <div className="ow-close-cta">
            <MotionButton to="/free-growth-audit" className="ow-cta-primary ow-cta-primary--light">
              Get my growth audit
              <ArrowRight />
            </MotionButton>
            <Link to="/industries" className="ow-cta-link ow-cta-link--light">
              Back to Industries
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

const serviceSchema = (entry: IndustryDetailEntry) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: `Healthcare marketing for ${entry.label}`,
  serviceType: `${entry.label} - ${entry.meta}`,
  description: entry.description,
  provider: {
    '@type': 'LocalBusiness',
    name: 'TheNextGen Healthcare Marketing',
    url: 'https://thenextgenhealth.com',
  },
  areaServed: 'United States',
});

const faqSchema = (entry: IndustryDetailEntry) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: entry.faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
});

const IndustryDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const entry = slug ? findIndustryDetail(slug) : undefined;

  useEffect(() => {
    if (entry) {
      const prev = document.title;
      document.title = `${entry.label} · Industries · Focus Marketing`;
      return () => {
        document.title = prev;
      };
    }
  }, [entry]);

  if (!entry) {
    return <Navigate to="/industries" replace />;
  }

  const indexInGroup = INDUSTRY_DETAIL_ENTRIES.findIndex((d) => d.slug === entry.slug);
  const numLabel = `${String(indexInGroup + 1).padStart(2, '0')} / ${String(INDUSTRY_DETAIL_ENTRIES.length).padStart(2, '0')}`;

  const narrative = buildIndustryNarrative(entry);

  return (
    <main className="ow-detail-page">
      <Hero entry={entry} numLabel={numLabel} />
      <Body entry={entry} />
      <DetailNarrative about={narrative.about} approach={narrative.approach} />
      <FAQ entry={entry} />
      <Related entry={entry} />
      <Closing entry={entry} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema(entry)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(entry)) }}
      />
    </main>
  );
};

export default IndustryDetail;
