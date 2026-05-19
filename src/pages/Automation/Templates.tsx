import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import Breadcrumb from '../../components/Breadcrumb';

type Tone = 'peri' | 'sage' | 'copper' | 'charcoal';

interface Template {
  num: string;
  cat: 'Intake' | 'Reminders' | 'Reviews' | 'Insurance' | 'AI' | 'Social';
  title: string;
  nodes: string;
  pull: string;
  tone: Tone;
  effort: string;
  saves: string;
  compliance: 'HIPAA-aware' | 'PHI-free' | 'BAA required';
}

const TEMPLATES: Template[] = [
  {
    num: '01',
    cat: 'Intake',
    title: 'Patient intake & insurance verification.',
    nodes: '7 nodes · N8N',
    pull: 'Front desk untouched.',
    tone: 'peri',
    effort: '~45 min setup',
    saves: 'Saves 6–9 hrs/week',
    compliance: 'BAA required',
  },
  {
    num: '02',
    cat: 'Reminders',
    title: 'SMS + email reminder cadence.',
    nodes: '8 nodes · N8N',
    pull: '40% fewer no-shows.',
    tone: 'sage',
    effort: '~30 min setup',
    saves: 'Saves 4–6 hrs/week',
    compliance: 'HIPAA-aware',
  },
  {
    num: '03',
    cat: 'Reviews',
    title: 'Sentiment-routed review collection.',
    nodes: '8 nodes · N8N',
    pull: 'Reputation runs itself.',
    tone: 'copper',
    effort: '~40 min setup',
    saves: '5× review velocity',
    compliance: 'PHI-free',
  },
  {
    num: '04',
    cat: 'Insurance',
    title: 'Real-time eligibility bot.',
    nodes: '9 nodes · N8N',
    pull: 'Verified before the door.',
    tone: 'charcoal',
    effort: '~60 min setup',
    saves: 'Saves 8–12 hrs/week',
    compliance: 'BAA required',
  },
  {
    num: '05',
    cat: 'AI',
    title: 'GPT chatbot for lead capture.',
    nodes: '10 nodes · N8N',
    pull: 'Qualifies while you sleep.',
    tone: 'peri',
    effort: '~75 min setup',
    saves: '24/7 lead capture',
    compliance: 'PHI-free',
  },
  {
    num: '06',
    cat: 'Social',
    title: 'Daily AI social auto-poster.',
    nodes: '9 nodes · N8N',
    pull: 'Set once, ship daily.',
    tone: 'copper',
    effort: '~50 min setup',
    saves: '3 hrs/week creative',
    compliance: 'PHI-free',
  },
];

const FILTERS: Array<'All' | Template['cat']> = [
  'All',
  'Intake',
  'Reminders',
  'Reviews',
  'Insurance',
  'AI',
  'Social',
];

const ORIGIN =
  typeof window !== 'undefined' ? window.location.origin : 'https://thenextgenhealth.com';

const TEMPLATES_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Healthcare automation template library',
  description:
    'Six healthcare-grade workflow automations covering patient intake, reminders, reviews, insurance verification, lead capture, and social posting.',
  numberOfItems: TEMPLATES.length,
  itemListElement: TEMPLATES.map((t, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: t.title.replace(/\.$/, ''),
    description: `${t.cat} workflow — ${t.nodes}. ${t.saves}. ${t.compliance}.`,
    url: `${ORIGIN}/automation/templates#tpl-${t.num}`,
  })),
};

const Arrow = () => (
  <svg
    width={18}
    height={18}
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

const Templates = () => {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>('All');

  const visible = useMemo(
    () => (filter === 'All' ? TEMPLATES : TEMPLATES.filter((t) => t.cat === filter)),
    [filter],
  );

  return (
    <main className="atpl" id="atpl-top">
      <section className="atpl-hero" aria-labelledby="atpl-title">
        <div className="container-shell">
          <Breadcrumb
            items={[
              { label: 'Automation', to: '/automation' },
              { label: 'Templates' },
            ]}
          />

          <div className="atpl-hero-grid">
            <div>
              <span className="atpl-meta">
                <i aria-hidden="true" />
                Template library · 2026
              </span>
              <h1 id="atpl-title" className="atpl-display">
                Six<span className="atpl-dot">.</span>
              </h1>
              <p className="atpl-lede">
                Six healthcare-grade automations. Free to keep. Live in your
                stack the same afternoon.
              </p>
            </div>

            <aside className="atpl-hero-aside" aria-hidden="true">
              <span className="atpl-count">/0{visible.length}</span>
              <span className="atpl-meta">
                {filter === 'All' ? 'Workflows' : `${filter} workflows`}
              </span>
            </aside>
          </div>
        </div>
      </section>

      <section className="atpl-filters" aria-label="Filter by category">
        <div className="container-shell">
          <div className="atpl-filter-row" role="tablist">
            {FILTERS.map((f) => (
              <button
                key={f}
                type="button"
                role="tab"
                aria-selected={filter === f}
                className={`atpl-chip${filter === f ? ' is-active' : ''}`}
                onClick={() => setFilter(f)}
              >
                {f}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="atpl-list" aria-label="Template list">
        <div className="container-shell">
          {visible.length === 0 ? (
            <p
              style={{
                padding: '32px 0',
                color: '#4A5568',
                fontSize: 15,
              }}
            >
              No templates in this category yet — pick another, or{' '}
              <Link to="/free-growth-audit" style={{ color: '#576DB5', fontWeight: 600 }}>
                request a custom build
              </Link>
              .
            </p>
          ) : (
            <ol className="atpl-rows">
              {visible.map((t) => (
                <li
                  key={t.num}
                  id={`tpl-${t.num}`}
                  className={`atpl-row tone-${t.tone}`}
                >
                  <span className="atpl-num">/{t.num}</span>
                  <span className="atpl-cat">
                    <i aria-hidden="true" />
                    {t.cat}
                  </span>
                  <h2 className="atpl-title">{t.title}</h2>
                  <span className="atpl-nodes">{t.nodes}</span>
                  <span className="atpl-pull">{t.pull}</span>
                  <span
                    className="atpl-badges"
                    aria-label={`Effort and value summary for ${t.title}`}
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: 8,
                      marginTop: 4,
                    }}
                  >
                    <span
                      style={{
                        fontSize: 11,
                        fontWeight: 700,
                        letterSpacing: '0.06em',
                        padding: '4px 10px',
                        borderRadius: 999,
                        background: 'rgba(87,109,181,0.10)',
                        color: '#576DB5',
                      }}
                    >
                      {t.effort}
                    </span>
                    <span
                      style={{
                        fontSize: 11,
                        fontWeight: 700,
                        letterSpacing: '0.06em',
                        padding: '4px 10px',
                        borderRadius: 999,
                        background: 'rgba(143,188,143,0.18)',
                        color: '#2D5A3D',
                      }}
                    >
                      {t.saves}
                    </span>
                    <span
                      style={{
                        fontSize: 11,
                        fontWeight: 700,
                        letterSpacing: '0.06em',
                        padding: '4px 10px',
                        borderRadius: 999,
                        background: 'rgba(179,139,109,0.16)',
                        color: '#8C5A3D',
                      }}
                    >
                      {t.compliance}
                    </span>
                  </span>
                  <Link
                    to="/free-growth-audit"
                    className="atpl-get"
                    aria-label={`Request the ${t.title} workflow`}
                  >
                    Get this workflow <Arrow />
                  </Link>
                </li>
              ))}
            </ol>
          )}
        </div>
      </section>

      <section className="atpl-cta" aria-labelledby="atpl-cta-title">
        <div className="container-shell">
          <div className="atpl-cta-grid">
            <span className="atpl-cta-num">+</span>
            <h2 id="atpl-cta-title" className="atpl-cta-h">
              Need one we have not built yet?
            </h2>
            <p className="atpl-cta-sub">
              15-minute build session. Free, no pitch.
            </p>
            <Link to="/free-growth-audit" className="atpl-cta-btn">
              Book the session <Arrow />
            </Link>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(TEMPLATES_SCHEMA) }}
      />
    </main>
  );
};

export default Templates;
