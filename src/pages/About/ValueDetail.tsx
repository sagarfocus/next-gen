import { Link, useParams, Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import type { ReactElement } from 'react';
import { MotionButton, MotionCard, AnimatedBackground } from '../../lib/motion';
import DetailNarrative, { type NarrativeBlock } from '../../components/DetailNarrative';
import DetailSectionHead from '../../components/DetailSectionHead';
import healthcareImg1 from '../../assets/healthcareimg1.png';
import healthcareImg2 from '../../assets/healthcareimg2.png';
import strategyImg from '../../assets/strategy planning.png';
import {
  VALUE_ENTRIES,
  findValue,
  valueDetailHref,
  type ValueEntry,
} from './values.data';

const VALUE_IMAGES: Record<string, { about: string; approach: string }> = {
  'patient-first-marketing': { about: healthcareImg1, approach: healthcareImg2 },
  'revenue-accountable-results': { about: strategyImg, approach: healthcareImg1 },
  'compliance-without-compromise': { about: healthcareImg2, approach: strategyImg },
};

const buildValueNarrative = (entry: ValueEntry): { about: NarrativeBlock; approach: NarrativeBlock } => {
  const imgs = VALUE_IMAGES[entry.slug] || { about: healthcareImg1, approach: healthcareImg2 };
  return {
    about: {
      eyebrow: `About this principle`,
      title: `${entry.title} — a built-in constraint, not a marketing line.`,
      body:
        entry.longBody[0] ||
        entry.lead ||
        'A foundational principle that shapes every campaign we ship from this studio.',
      ctaText: 'Learn more',
      ctaTo: '/about',
      image: imgs.about,
      imageAlt: '',
    },
    approach: {
      eyebrow: 'Our approach',
      title: 'Our unique approach is what sets this principle apart.',
      body:
        entry.longBody[1] ||
        entry.body ||
        'We treat this principle as a build-time constraint, audited internally on every campaign before it ships.',
      ctaText: 'About page',
      ctaTo: '/about',
      image: imgs.approach,
      imageAlt: '',
    },
  };
};

const ArrowRight = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

const Check = () => (
  <svg width={12} height={12} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);
const X = () => (
  <svg width={12} height={12} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

interface HeroProps {
  entry: ValueEntry;
  index: number;
}

const Hero = ({ entry, index }: HeroProps) => (
  <section className="ab-value-hero" aria-labelledby="ab-value-detail-title">
    <AnimatedBackground variant="aurora" intensity="subtle" />
    <div className="container-shell">
      <nav className="ow-crumbs ow-detail-crumbs" aria-label="Breadcrumb">
        <Link to="/">Home</Link>
        <span aria-hidden="true">/</span>
        <Link to="/about">About</Link>
        <span aria-hidden="true">/</span>
        <span aria-current="page">{entry.title}</span>
      </nav>

      <div className="ab-value-hero-card">
        <div className="ab-value-hero-head">
          <span className={`ab-mission-modal-icon ab-mission-modal-icon-${index + 1}`} aria-hidden="true">
            {entry.icon}
          </span>
          <div className="ab-value-hero-meta">
            <span className="ab-value-hero-num">{entry.num}</span>
            <h1 id="ab-value-detail-title" className="ab-value-hero-title">{entry.title}</h1>
            <p className="ab-value-hero-lead">{entry.lead}</p>
          </div>
        </div>

        <p className="ab-value-hero-body">{entry.body}</p>

        <div className="ab-value-hero-cols">
          <div className="ab-mission-modal-col ab-mission-modal-col-dont">
            <span className="ab-mission-modal-subtag">
              <X /> {entry.dontTitle}
            </span>
            <ul>
              {entry.dontList.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="ab-mission-modal-col ab-mission-modal-col-do">
            <span className="ab-mission-modal-subtag">
              <Check /> {entry.doTitle}
            </span>
            <ul>
              {entry.doList.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="ab-value-hero-foot">
          <div className="ab-value-hero-proof">
            <strong>{entry.proof.v}</strong>
            <span>{entry.proof.l}</span>
          </div>
          <Link to="/contact" className="ab-value-hero-cta">
            Talk to us about this
            <ArrowRight />
          </Link>
        </div>
      </div>
    </div>
  </section>
);

const BODY_CARD_META: { title: string; tone: 'rose' | 'periwinkle' | 'tan'; icon: ReactElement }[] = [
  {
    title: 'The challenge',
    tone: 'rose',
    icon: (
      <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 9v4" />
        <path d="M12 17h.01" />
        <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
      </svg>
    ),
  },
  {
    title: 'Our approach',
    tone: 'periwinkle',
    icon: (
      <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="9" />
        <polyline points="9 12 11 14 15 10" />
      </svg>
    ),
  },
  {
    title: 'The outcome',
    tone: 'tan',
    icon: (
      <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 2 L 14.6 9 L 22 9.5 L 16.5 14 L 18 21.5 L 12 17.5 L 6 21.5 L 7.5 14 L 2 9.5 L 9.4 9 Z" />
      </svg>
    ),
  },
];

const Body = ({ entry }: { entry: ValueEntry }) => (
  <section className="ow-detail-body" aria-labelledby="ab-value-body-title">
    <div className="container-shell">
      <DetailSectionHead
        id="ab-value-body-title"
        eyebrow="In practice"
        title="How this principle holds across the work."
        intro="Three short reads — what we refuse to do, what we do instead, and the outcome that shows the principle is more than a marketing line."
      />
      <div className="ab-value-body-grid">
        {BODY_CARD_META.map((meta, i) => {
          const text = entry.longBody[i];
          if (!text) return null;
          return (
            <article key={i} className={`ab-value-body-card tone-${meta.tone}`}>
              <span className="ab-value-body-num">/{String(i + 1).padStart(2, '0')}</span>
              <span className="ab-value-body-icon" aria-hidden="true">{meta.icon}</span>
              <h3 className="ab-value-body-title">{meta.title}</h3>
              <p className="ab-value-body-text">{text}</p>
            </article>
          );
        })}
      </div>
    </div>
  </section>
);

const FAQ = ({ entry }: { entry: ValueEntry }) => (
  <section className="ow-detail-faq" aria-labelledby="ab-value-faq-title">
    <div className="container-shell">
      <DetailSectionHead
        id="ab-value-faq-title"
        eyebrow="Frequently asked"
        title="Questions we hear about this principle."
        intro="Recurring questions from leadership teams about how this principle is enforced — and what happens when something crosses the line."
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

const Related = ({ entry }: { entry: ValueEntry }) => {
  const others = VALUE_ENTRIES.filter((v) => v.slug !== entry.slug);
  if (others.length === 0) return null;
  return (
    <section className="ow-detail-related" aria-labelledby="ab-value-related-title">
      <div className="container-shell">
        <DetailSectionHead
          id="ab-value-related-title"
          eyebrow="More principles"
          title="The other principles that guide every campaign."
          intro="The two sibling principles that ship with this one — applied to every campaign, in every vertical, every time."
        />

        <div className="ab-value-related-grid">
          {others.map((r) => (
            <MotionCard key={r.slug} naked tilt={6} className="ow-feat-card-wrap">
              <Link
                to={valueDetailHref(r.slug)}
                className="ab-value-related-card"
                aria-label={`Read more about ${r.title}`}
              >
                <span className="ab-value-related-num">{r.num}</span>
                <span className="ab-value-related-icon" aria-hidden="true">{r.icon}</span>
                <h3 className="ab-value-related-title">{r.title}</h3>
                <p className="ab-value-related-blurb">{r.blurb}</p>
                <span className="ab-value-related-cta">
                  Read more
                  <ArrowRight size={14} />
                </span>
              </Link>
            </MotionCard>
          ))}
        </div>
      </div>
    </section>
  );
};

const Closing = ({ entry }: { entry: ValueEntry }) => (
  <section className="ow-close" aria-labelledby="ab-value-close-title">
    <div className="container-shell">
      <div className="ow-close-card ow-detail-close-card">
        <div className="ow-close-body">
          <span className="ow-pill">
            <span className="ow-pill-dot" /> Open for new engagements
          </span>
          <h2 id="ab-value-close-title" className="ow-close-h">
            Want a marketing partner
            <br />
            who works <em>this way</em>?
          </h2>
          <p className="ow-close-p">
            Start with the five-day audit. A real ranked plan for your practice,
            yours to keep — held to the same principles you just read.
          </p>
          <div className="ow-close-cta">
            <MotionButton to="/free-growth-audit" className="ow-cta-primary ow-cta-primary--light">
              Get my growth audit
              <ArrowRight />
            </MotionButton>
            <Link to="/about" className="ow-cta-link ow-cta-link--light">
              Back to About
            </Link>
          </div>
        </div>
        <div className="ow-detail-close-metric" aria-hidden="true">
          <strong>{entry.proof.v}</strong>
          <span>{entry.proof.l}</span>
        </div>
      </div>
    </div>
  </section>
);

const faqSchema = (entry: ValueEntry) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: entry.faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
});

const articleSchema = (entry: ValueEntry) => ({
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: entry.title,
  description: entry.lead,
  about: 'Healthcare marketing principles',
  mainEntityOfPage: `https://thenextgenhealth.com${valueDetailHref(entry.slug)}`,
});

const ValueDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const entry = slug ? findValue(slug) : undefined;
  const index = entry ? VALUE_ENTRIES.findIndex((v) => v.slug === entry.slug) : -1;

  useEffect(() => {
    if (entry) {
      const prev = document.title;
      document.title = `${entry.title} · Core Values · About`;
      return () => {
        document.title = prev;
      };
    }
  }, [entry]);

  if (!entry || index < 0) {
    return <Navigate to="/about" replace />;
  }

  const narrative = buildValueNarrative(entry);

  return (
    <main className="ow-detail-page ab-value-detail-page">
      <Hero entry={entry} index={index} />
      <Body entry={entry} />
      <DetailNarrative about={narrative.about} approach={narrative.approach} />
      <FAQ entry={entry} />
      <Related entry={entry} />
      <Closing entry={entry} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema(entry)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(entry)) }}
      />
    </main>
  );
};

export default ValueDetail;
