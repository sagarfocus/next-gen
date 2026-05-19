import { Link, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import Breadcrumb from '../../components/Breadcrumb';
import { CASE_STUDIES, findCaseStudy } from './caseStudies.data';
import type { CaseStudy } from './caseStudies.data';

const ORIGIN =
  typeof window !== 'undefined' ? window.location.origin : 'https://thenextgenhealth.com';

const buildSchema = (study: CaseStudy) => ({
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: `${study.name} — ${study.metricNum} ${study.metricLbl}`,
  description: study.brief,
  url: `${ORIGIN}/case-studies/${study.id}`,
  about: {
    '@type': 'Organization',
    name: study.name,
    address: study.location,
  },
  author: {
    '@type': 'Organization',
    name: 'TheNextGen Healthcare Marketing',
    url: ORIGIN,
  },
  publisher: {
    '@type': 'Organization',
    name: 'TheNextGen Healthcare Marketing',
    url: ORIGIN,
  },
  mainEntityOfPage: `${ORIGIN}/case-studies/${study.id}`,
});

const buildBreadcrumbSchema = (study: CaseStudy) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: `${ORIGIN}/` },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Case studies',
      item: `${ORIGIN}/case-studies`,
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: study.name,
      item: `${ORIGIN}/case-studies/${study.id}`,
    },
  ],
});

const ArrowOut = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <line x1="7" y1="17" x2="17" y2="7" />
    <polyline points="7 7 17 7 17 17" />
  </svg>
);

const ArrowLeft = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <line x1="19" y1="12" x2="5" y2="12" />
    <polyline points="12 19 5 12 12 5" />
  </svg>
);

const ArrowRight = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

const Quote = () => (
  <svg viewBox="0 0 32 32" fill="currentColor" aria-hidden="true">
    <path d="M9 7C5.7 7 3 9.7 3 13v8c0 1.7 1.3 3 3 3h6c1.7 0 3-1.3 3-3v-6c0-1.7-1.3-3-3-3H8c0-2 1-3 3-3h1V7H9zm15 0c-3.3 0-6 2.7-6 6v8c0 1.7 1.3 3 3 3h6c1.7 0 3-1.3 3-3v-6c0-1.7-1.3-3-3-3h-4c0-2 1-3 3-3h1V7h-3z" />
  </svg>
);

interface DetailProps {
  study: CaseStudy;
}

const NotFoundCase = () => (
  <main className="csd" id="csd-top">
    <section className="csd-missing">
      <div className="container-shell">
        <p className="csd-missing-eyebrow">Case 404</p>
        <h1 className="csd-missing-h1">That case study has been retired or moved.</h1>
        <p className="csd-missing-sub">
          Pick a live engagement from the library below, or head back to the
          carousel.
        </p>
        <Link to="/case-studies#cs-all" className="csd-missing-link">
          <ArrowLeft /> Back to the case library
        </Link>
        <ul className="csd-missing-list">
          {CASE_STUDIES.map((c) => (
            <li key={c.id}>
              <Link to={`/case-studies/${c.id}`}>
                <span className="csd-missing-emoji" aria-hidden="true">{c.emoji}</span>
                <span>{c.name}</span>
                <ArrowOut />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  </main>
);

const CaseStudyDetail = () => {
  const { slug } = useParams();
  const study = findCaseStudy(slug);

  useEffect(() => {
    if (!study) return;
    const prevTitle = document.title;
    document.title = `${study.name} · Case study · TheNextGen Healthcare Marketing`;

    const ensureMeta = (name: string) => {
      let el = document.querySelector<HTMLMetaElement>(`meta[name="${name}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute('name', name);
        document.head.appendChild(el);
      }
      return el;
    };
    const desc = ensureMeta('description');
    const prevDesc = desc.getAttribute('content');
    desc.setAttribute(
      'content',
      `${study.brief.slice(0, 155)}${study.brief.length > 155 ? '…' : ''}`,
    );

    let canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    const prevCanon = canonical.getAttribute('href');
    canonical.setAttribute('href', `${ORIGIN}/case-studies/${study.id}`);

    return () => {
      document.title = prevTitle;
      if (prevDesc !== null) desc.setAttribute('content', prevDesc);
      if (prevCanon !== null) canonical!.setAttribute('href', prevCanon);
    };
  }, [study]);

  if (!study) return <NotFoundCase />;

  return <Detail study={study} />;
};

const Detail = ({ study }: DetailProps) => {
  const idx = CASE_STUDIES.findIndex((c) => c.id === study.id);
  const next = CASE_STUDIES[(idx + 1) % CASE_STUDIES.length];
  const prev = CASE_STUDIES[(idx - 1 + CASE_STUDIES.length) % CASE_STUDIES.length];

  const total = CASE_STUDIES.length;
  const ordinal = String(idx + 1).padStart(2, '0');

  return (
    <main className="csd" id="csd-top">
      {/* =================== SECTION 1 — PROFILE HERO =================== */}
      <section className="csd-hero" aria-labelledby="csd-hero-title">
        <div className="csd-hero-bg" aria-hidden="true">
          <span className="csd-hero-bg-a" />
          <span className="csd-hero-bg-b" />
          <span className="csd-hero-bg-grid" />
        </div>

        <div className="container-shell csd-hero-shell">
          <Breadcrumb
            items={[
              { label: 'Case studies', to: '/case-studies' },
              { label: study.name },
            ]}
          />
          <div className="csd-topnav">
            <Link to="/case-studies#cs-all" className="csd-back">
              <ArrowLeft /> Case library
            </Link>
            <div className="csd-ordinal">
              <span>Engagement</span>
              <strong>
                {ordinal} <em>/ {String(total).padStart(2, '0')}</em>
              </strong>
            </div>
          </div>

          <div className="csd-hero-grid">
            <header className="csd-hero-copy">
              <span className="csd-sector-pill">
                <span className="csd-sector-emoji" aria-hidden="true">
                  {study.emoji}
                </span>
                {study.sector}
              </span>

              <h1 id="csd-hero-title" className="csd-hero-title">
                {study.name}
              </h1>

              <p className="csd-hero-brief">{study.brief}</p>

              <dl className="csd-meta-grid">
                <div className="csd-meta">
                  <dt>Location</dt>
                  <dd>{study.location}</dd>
                </div>
                <div className="csd-meta">
                  <dt>Specialty</dt>
                  <dd>{study.specialty}</dd>
                </div>
                <div className="csd-meta">
                  <dt>Team</dt>
                  <dd>{study.teamSize}</dd>
                </div>
                <div className="csd-meta">
                  <dt>Engagement</dt>
                  <dd>{study.engagement}</dd>
                </div>
                <div className="csd-meta">
                  <dt>Started</dt>
                  <dd>{study.started}</dd>
                </div>
              </dl>
            </header>

            <aside className="csd-scorecard" aria-label="Headline metric">
              <div className="csd-scorecard-top">
                <span className="csd-scorecard-tag">Headline result</span>
                <span className="csd-scorecard-dot" aria-hidden="true" />
              </div>

              <div className="csd-scorecard-hero">
                <span className="csd-scorecard-num">{study.metricNum}</span>
                <span className="csd-scorecard-lbl">{study.metricLbl}</span>
              </div>

              <ul className="csd-scorecard-mini">
                {study.secondary.map((s) => (
                  <li key={s.label}>
                    <strong>{s.value}</strong>
                    <span>{s.label}</span>
                  </li>
                ))}
              </ul>

              <div className="csd-scorecard-foot">
                <span>Verified outcomes</span>
                <span className="csd-scorecard-foot-line" aria-hidden="true" />
                <span>{study.started}</span>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* =================== SECTION 2 — PLAYBOOK =================== */}
      <section className="csd-playbook" aria-labelledby="csd-playbook-title">
        <div className="container-shell">
          <header className="csd-playbook-head">
            <span className="csd-section-rail">02 — The engagement</span>
            <h2 id="csd-playbook-title" className="csd-playbook-title">
              How we got from week zero to the headline number.
            </h2>
            <p className="csd-playbook-sub">
              A three-phase narrative — what was broken, what we decided, and
              what shipped. No reverse-engineered storytelling. Pulled directly
              from the engagement notes.
            </p>
          </header>

          <ol className="csd-phases">
            {study.phases.map((phase, i) => (
              <li key={phase.label} className={`csd-phase csd-phase--${i + 1}`}>
                <div className="csd-phase-rail">
                  <span className="csd-phase-num">{String(i + 1).padStart(2, '0')}</span>
                  <span className="csd-phase-line" aria-hidden="true" />
                </div>
                <div className="csd-phase-body">
                  <span className="csd-phase-label">{phase.label}</span>
                  <h3 className="csd-phase-headline">{phase.headline}</h3>
                  <p className="csd-phase-narrative">{phase.narrative}</p>
                  <ul className="csd-phase-tactics">
                    {phase.tactics.map((t) => (
                      <li key={t}>
                        <span className="csd-tick" aria-hidden="true" />
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ol>

          <div className="csd-toolstrip">
            <span className="csd-toolstrip-label">Tools in this engagement</span>
            <ul className="csd-tool-chips">
              {study.tools.map((tool) => (
                <li key={tool}>{tool}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* =================== SECTION 3 — IMPACT =================== */}
      <section className="csd-impact" aria-labelledby="csd-impact-title">
        <div className="container-shell">
          <header className="csd-impact-head">
            <span className="csd-section-rail csd-section-rail--light">
              03 — Impact snapshot
            </span>
            <h2 id="csd-impact-title" className="csd-impact-title">
              The numbers, told once — verified, attributed, kept honest.
            </h2>
          </header>

          <div className="csd-impact-grid">
            <ul className="csd-kpis">
              {study.kpis.map((k) => (
                <li key={k.label} className="csd-kpi">
                  <span className="csd-kpi-value">{k.value}</span>
                  <span className="csd-kpi-label">{k.label}</span>
                  <span className="csd-kpi-change">{k.change}</span>
                </li>
              ))}
            </ul>

            <figure className="csd-quote-card">
              <span className="csd-quote-mark" aria-hidden="true">
                <Quote />
              </span>
              <blockquote>
                <p>{study.quote.text}</p>
              </blockquote>
              <figcaption>
                <strong>{study.quote.author}</strong>
                <span>{study.quote.role}</span>
              </figcaption>
              <span className="csd-quote-edge" aria-hidden="true" />
            </figure>
          </div>

          <nav className="csd-endnav" aria-label="More case studies">
            <Link to={`/case-studies/${prev.id}`} className="csd-endnav-card csd-endnav-card--prev">
              <span className="csd-endnav-dir">
                <ArrowLeft /> Previous engagement
              </span>
              <span className="csd-endnav-name">{prev.name}</span>
              <span className="csd-endnav-metric">
                <em>{prev.metricNum}</em> {prev.metricLbl}
              </span>
            </Link>
            <Link to="/free-growth-audit" className="csd-endnav-cta">
              <span className="csd-endnav-cta-eyebrow">Want a number like this?</span>
              <span className="csd-endnav-cta-line">
                Start with a 30-minute audit. We will tell you the leak before
                we tell you the price.
              </span>
              <span className="csd-endnav-cta-btn">
                Book the audit <ArrowRight />
              </span>
            </Link>
            <Link to={`/case-studies/${next.id}`} className="csd-endnav-card csd-endnav-card--next">
              <span className="csd-endnav-dir">
                Next engagement <ArrowRight />
              </span>
              <span className="csd-endnav-name">{next.name}</span>
              <span className="csd-endnav-metric">
                <em>{next.metricNum}</em> {next.metricLbl}
              </span>
            </Link>
          </nav>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildSchema(study)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(buildBreadcrumbSchema(study)),
        }}
      />
    </main>
  );
};

export default CaseStudyDetail;
