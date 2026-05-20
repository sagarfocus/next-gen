import { useMemo, useState } from 'react';
import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import Breadcrumb from '../../components/Breadcrumb';
import { AnimatedBackground } from '../../lib/motion';

/* ============================================================
   AUTOMATION · TEMPLATES — Swiss editorial library page.
   Alternating section bgs: #FAFAF8 ↔ #F8F9FA.
   Brand palette only: ink, gold, sage, periwinkle.
   ============================================================ */

type Tone = 'peri' | 'sage' | 'copper' | 'charcoal';
type Category = 'Intake' | 'Reminders' | 'Reviews' | 'Insurance' | 'AI' | 'Social';
type Compliance = 'HIPAA-aware' | 'PHI-free' | 'BAA required';

interface Template {
  num: string;
  cat: Category;
  title: string;
  blurb: string;
  nodes: string;
  pull: string;
  tone: Tone;
  effort: string;
  saves: string;
  compliance: Compliance;
}

const TEMPLATES: Template[] = [
  {
    num: '01',
    cat: 'Intake',
    title: 'Patient intake & insurance verification.',
    blurb: 'A pre-visit packet that captures consent, demographics, and eligibility before the patient walks in — front desk untouched.',
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
    blurb: 'A two-channel cadence that lifts show rate without spam — opt-in respected, quiet hours enforced, ICS attached.',
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
    blurb: 'Happy patients land on Google; unhappy patients land in your inbox first. Reputation engine that compounds, never embarrasses.',
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
    blurb: 'Verifies coverage before the appointment — clearinghouse → CRM → front desk dashboard, all in under thirty seconds.',
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
    blurb: 'A scoped GPT assistant that qualifies leads, routes by intent, and books — without ever inventing a clinical answer.',
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
    blurb: 'A daily content drip across LinkedIn, Instagram, and X — sourced from your blog, captioned on-brand, scheduled around your calendar.',
    nodes: '9 nodes · N8N',
    pull: 'Set once, ship daily.',
    tone: 'copper',
    effort: '~50 min setup',
    saves: '3 hrs/week creative',
    compliance: 'PHI-free',
  },
];

const FILTERS: Array<'All' | Category> = ['All', 'Intake', 'Reminders', 'Reviews', 'Insurance', 'AI', 'Social'];

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
    description: `${t.cat} workflow - ${t.nodes}. ${t.saves}. ${t.compliance}.`,
    url: `${ORIGIN}/automation/templates#tpl-${t.num}`,
  })),
};

/* ---------- Icons ---------- */
const ArrowRight = ({ size = 14 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

const Check = ({ size = 14 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.6} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

/* ---------- Per-category illustration (Swiss minimal SVG, brand colors) ---------- */
const CategoryArt = ({ cat }: { cat: Category }): ReactNode => {
  const common = {
    viewBox: '0 0 240 160',
    xmlns: 'http://www.w3.org/2000/svg',
    'aria-hidden': true as const,
  };
  switch (cat) {
    case 'Intake':
      return (
        <svg {...common}>
          <rect width="240" height="160" fill="#F8F9FA" />
          <circle cx="48" cy="32" r="36" fill="rgba(87,109,181,0.10)" />
          <rect x="68" y="34" width="104" height="100" rx="10" fill="#FFFFFF" stroke="#1A2438" strokeWidth="1.5" />
          <line x1="80" y1="54" x2="160" y2="54" stroke="#1A2438" strokeWidth="1.2" />
          <line x1="80" y1="68" x2="148" y2="68" stroke="#1A2438" strokeWidth="1.2" opacity="0.6" />
          <line x1="80" y1="82" x2="156" y2="82" stroke="#1A2438" strokeWidth="1.2" opacity="0.4" />
          <rect x="80" y="100" width="60" height="14" rx="3" fill="#B38B6D" />
          <circle cx="190" cy="124" r="14" fill="#8FBC8F" />
          <path d="M184 124 L189 129 L196 119" stroke="#FFFFFF" strokeWidth="2.2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case 'Reminders':
      return (
        <svg {...common}>
          <rect width="240" height="160" fill="#F8F9FA" />
          <circle cx="200" cy="40" r="34" fill="rgba(143,188,143,0.16)" />
          <path d="M120 32 C 100 32 88 48 88 70 V 90 L 80 100 H 160 L 152 90 V 70 C 152 48 140 32 120 32 Z" fill="#FFFFFF" stroke="#1A2438" strokeWidth="1.8" strokeLinejoin="round" />
          <circle cx="120" cy="108" r="10" fill="#1A2438" />
          <line x1="120" y1="20" x2="120" y2="28" stroke="#1A2438" strokeWidth="2" strokeLinecap="round" />
          <rect x="30" y="120" width="40" height="20" rx="10" fill="#8FBC8F" />
          <text x="50" y="134" textAnchor="middle" fontFamily="ui-monospace" fontSize="10" fontWeight="800" fill="#FFFFFF">SMS</text>
          <rect x="170" y="120" width="44" height="20" rx="10" fill="#B38B6D" />
          <text x="192" y="134" textAnchor="middle" fontFamily="ui-monospace" fontSize="10" fontWeight="800" fill="#FFFFFF">MAIL</text>
        </svg>
      );
    case 'Reviews':
      return (
        <svg {...common}>
          <rect width="240" height="160" fill="#F8F9FA" />
          <circle cx="40" cy="120" r="32" fill="rgba(179,139,109,0.18)" />
          <circle cx="200" cy="40" r="36" fill="rgba(87,109,181,0.12)" />
          <g transform="translate(120 80)">
            <polygon points="0,-44 14,-14 46,-10 22,12 30,44 0,28 -30,44 -22,12 -46,-10 -14,-14" fill="#B38B6D" />
            <polygon points="0,-22 7,-7 23,-5 11,6 15,22 0,14 -15,22 -11,6 -23,-5 -7,-7" fill="#1A2438" opacity="0.9" />
          </g>
          <rect x="64" y="120" width="112" height="6" rx="3" fill="rgba(26,36,56,0.18)" />
        </svg>
      );
    case 'Insurance':
      return (
        <svg {...common}>
          <rect width="240" height="160" fill="#F8F9FA" />
          <circle cx="200" cy="120" r="36" fill="rgba(143,188,143,0.16)" />
          <path d="M120 24 L 76 40 V 88 C 76 116 96 140 120 148 C 144 140 164 116 164 88 V 40 Z" fill="#FFFFFF" stroke="#1A2438" strokeWidth="1.8" strokeLinejoin="round" />
          <path d="M100 92 L 114 106 L 142 78" stroke="#8FBC8F" strokeWidth="3.2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="48" cy="36" r="6" fill="#B38B6D" />
          <line x1="180" y1="50" x2="216" y2="50" stroke="#1A2438" strokeWidth="1.2" opacity="0.45" />
          <line x1="180" y1="62" x2="208" y2="62" stroke="#1A2438" strokeWidth="1.2" opacity="0.30" />
        </svg>
      );
    case 'AI':
      return (
        <svg {...common}>
          <rect width="240" height="160" fill="#F8F9FA" />
          <circle cx="40" cy="40" r="32" fill="rgba(87,109,181,0.14)" />
          <circle cx="200" cy="120" r="34" fill="rgba(212,175,55,0.18)" />
          <rect x="68" y="44" width="104" height="76" rx="14" fill="#FFFFFF" stroke="#1A2438" strokeWidth="1.8" />
          <circle cx="96" cy="80" r="6" fill="#1A2438" />
          <circle cx="120" cy="80" r="6" fill="#576DB5" />
          <circle cx="144" cy="80" r="6" fill="#8FBC8F" />
          <path d="M96 102 L 92 116 L 110 102 Z" fill="#FFFFFF" stroke="#1A2438" strokeWidth="1.5" strokeLinejoin="round" />
          <line x1="120" y1="32" x2="120" y2="22" stroke="#1A2438" strokeWidth="2" strokeLinecap="round" />
          <circle cx="120" cy="18" r="5" fill="#B38B6D" />
        </svg>
      );
    case 'Social':
      return (
        <svg {...common}>
          <rect width="240" height="160" fill="#F8F9FA" />
          <circle cx="60" cy="120" r="30" fill="rgba(87,109,181,0.14)" />
          <circle cx="180" cy="40" r="34" fill="rgba(143,188,143,0.16)" />
          <circle cx="60" cy="44" r="14" fill="#FFFFFF" stroke="#1A2438" strokeWidth="2" />
          <circle cx="180" cy="116" r="14" fill="#FFFFFF" stroke="#1A2438" strokeWidth="2" />
          <circle cx="120" cy="80" r="20" fill="#FFFFFF" stroke="#1A2438" strokeWidth="2" />
          <line x1="72" y1="54" x2="106" y2="72" stroke="#B38B6D" strokeWidth="2" strokeDasharray="3 4" />
          <line x1="134" y1="88" x2="166" y2="108" stroke="#B38B6D" strokeWidth="2" strokeDasharray="3 4" />
          <line x1="106" y1="88" x2="74" y2="106" stroke="#8FBC8F" strokeWidth="2" strokeDasharray="3 4" />
        </svg>
      );
  }
};

/* ---------- Sections ---------- */

const Hero = ({ filter, visibleCount }: { filter: string; visibleCount: number }) => (
  <section className="atx-hero" aria-labelledby="atx-hero-title">
    <AnimatedBackground variant="aurora" intensity="subtle" />
    <div className="container-shell">
      <div className="atx-hero-meta">
        <Breadcrumb items={[{ label: 'Automation', to: '/automation' }, { label: 'Templates' }]} />
        <div className="atx-hero-chips" aria-hidden="true">
          <span className="atx-hero-chip"><span className="atx-hero-chip-dot" />Template library · 2026</span>
          <span className="atx-hero-chip atx-mono">/{String(visibleCount).padStart(2, '0')} {filter === 'All' ? 'workflows' : `${filter.toLowerCase()} workflows`}</span>
        </div>
      </div>

      <div className="atx-hero-grid">
        <aside className="atx-hero-rail" aria-hidden="true">
          <span className="atx-rail-label">FILED</span>
          <span className="atx-rail-value">Healthcare ops</span>
          <span className="atx-rail-line" />
          <span className="atx-rail-label">PLATFORM</span>
          <span className="atx-rail-value">N8N</span>
          <span className="atx-rail-line" />
          <span className="atx-rail-label">EDITION</span>
          <span className="atx-rail-value atx-mono">2026.Q2</span>
        </aside>

        <header className="atx-hero-copy">
          <span className="atx-eyebrow"><span className="atx-eyebrow-dot" />Automation library · Free to keep</span>
          <h1 id="atx-hero-title" className="atx-h1">
            Six<span className="atx-h1-accent">.</span> Healthcare-grade automations.<br />
            <span className="atx-h1-quiet">Live in your stack the same afternoon.</span>
          </h1>
          <p className="atx-lede">
            Each workflow is shipped as an N8N spec, vetted for HIPAA boundaries,
            and tuned for the moments where most clinics quietly lose hours every week.
          </p>
          <div className="atx-hero-cta">
            <Link to="/free-growth-audit" className="atx-btn atx-btn-primary">
              Get the library <ArrowRight />
            </Link>
            <a href="#atx-list" className="atx-btn atx-btn-ghost">
              Browse below
            </a>
          </div>
        </header>

        <figure className="atx-hero-art" aria-hidden="true">
          <div className="atx-hero-art-frame">
            <CategoryArt cat="AI" />
          </div>
          <figcaption className="atx-hero-art-cap">FIG. 01 — AUTOMATION SPECIMEN</figcaption>
        </figure>
      </div>
    </div>
  </section>
);

const DataBand = () => {
  const totalSetup = '~5 hrs';
  const totalSaves = '30+ hrs/wk';
  return (
    <section className="atx-databand" aria-label="Library metadata">
      <div className="container-shell">
        <ul className="atx-databand-list">
          <li className="atx-databand-item">
            <span className="atx-databand-label">Workflows</span>
            <span className="atx-databand-value">06</span>
          </li>
          <li className="atx-databand-item">
            <span className="atx-databand-label">Total setup</span>
            <span className="atx-databand-value">{totalSetup}</span>
          </li>
          <li className="atx-databand-item">
            <span className="atx-databand-label">Combined savings</span>
            <span className="atx-databand-value">{totalSaves}</span>
          </li>
          <li className="atx-databand-item">
            <span className="atx-databand-label">Platform</span>
            <span className="atx-databand-value">N8N · self-hosted</span>
          </li>
          <li className="atx-databand-item">
            <span className="atx-databand-label">Compliance modes</span>
            <span className="atx-databand-value">3</span>
          </li>
        </ul>
      </div>
    </section>
  );
};

const TLDR = () => (
  <section className="atx-tldr" aria-label="Summary">
    <div className="container-shell">
      <div className="atx-tldr-frame">
        <span className="atx-tldr-label">TL;DR</span>
        <p className="atx-tldr-text">
          Six healthcare-grade workflow specs. Each one ships with the nodes,
          consent surface, and compliance posture your clinic actually needs —
          ready to import into N8N in under an hour, free to keep.
        </p>
      </div>
    </div>
  </section>
);

const STATS = [
  { id: '01', label: 'Library size', value: '06', desc: 'Workflows covering the six moments most clinics leak hours into every week.', tone: 'gold' as const },
  { id: '02', label: 'Median payback', value: '< 14 d', desc: 'Most clinics see the first workflow pay back its setup time inside two weeks.', tone: 'sage' as const },
  { id: '03', label: 'Combined value', value: '30+ hrs/wk', desc: 'The library at full deployment recovers more than thirty front-desk hours per week.', tone: 'ink' as const },
];

const AtAGlance = () => (
  <section className="atx-glance" aria-labelledby="atx-glance-title">
    <div className="container-shell">
      <header className="adv-head det-head">
        <span className="adv-eyebrow">/ 01 &nbsp; At a glance</span>
        <h2 id="atx-glance-title" className="adv-h2">The library, in three numbers.</h2>
        <p className="adv-intro">
          What the library is worth — measured in setup hours, payback days,
          and front-desk time recovered every week.
        </p>
      </header>
      <div className="atx-glance-grid">
        {STATS.map((s) => (
          <article key={s.id} className={`atx-stat tone-${s.tone}`}>
            <span className="atx-stat-id">/{s.id}</span>
            <span className="atx-stat-label">{s.label}</span>
            <span className="atx-stat-value">{s.value}</span>
            <p className="atx-stat-desc">{s.desc}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
);

const FilterBar = ({ filter, setFilter }: { filter: 'All' | Category; setFilter: (f: 'All' | Category) => void }) => (
  <section className="atx-filters" aria-label="Filter by category">
    <div className="container-shell">
      <div className="atx-filter-head">
        <span className="atx-eyebrow"><span className="atx-eyebrow-dot" />/ 02 · Filter the library</span>
        <p className="atx-filter-hint">{filter === 'All' ? 'All six workflows shown.' : `Showing the ${filter.toLowerCase()} workflow only.`}</p>
      </div>
      <div className="atx-filter-row" role="tablist">
        {FILTERS.map((f) => (
          <button
            key={f}
            type="button"
            role="tab"
            aria-selected={filter === f}
            className={`atx-chip${filter === f ? ' is-active' : ''}`}
            onClick={() => setFilter(f)}
          >
            {f}
          </button>
        ))}
      </div>
    </div>
  </section>
);

const TemplateCard = ({ t, index }: { t: Template; index: number }) => (
  <li id={`tpl-${t.num}`} className={`atx-card tone-${t.tone}`}>
    <div className="atx-card-art" aria-hidden="true">
      <CategoryArt cat={t.cat} />
      <span className="atx-card-num">/{t.num}</span>
      <span className="atx-card-cat-pill">{t.cat}</span>
    </div>
    <div className="atx-card-body">
      <div className="atx-card-head">
        <span className="atx-card-mono">FIG. {String(index + 2).padStart(2, '0')} — {t.cat.toUpperCase()}</span>
        <h3 className="atx-card-title">{t.title}</h3>
        <p className="atx-card-blurb">{t.blurb}</p>
      </div>

      <div className="atx-card-specs">
        <div className="atx-card-spec">
          <span className="atx-card-spec-label">Build</span>
          <span className="atx-card-spec-value">{t.nodes}</span>
        </div>
        <div className="atx-card-spec">
          <span className="atx-card-spec-label">Setup</span>
          <span className="atx-card-spec-value">{t.effort}</span>
        </div>
        <div className="atx-card-spec">
          <span className="atx-card-spec-label">Value</span>
          <span className="atx-card-spec-value">{t.saves}</span>
        </div>
        <div className="atx-card-spec">
          <span className="atx-card-spec-label">Compliance</span>
          <span className="atx-card-spec-value">{t.compliance}</span>
        </div>
      </div>

      <div className="atx-card-foot">
        <p className="atx-card-pull">&ldquo;{t.pull}&rdquo;</p>
        <Link to="/free-growth-audit" className="atx-btn atx-btn-primary atx-btn-sm" aria-label={`Get the ${t.title} workflow`}>
          Get this workflow <ArrowRight />
        </Link>
      </div>
    </div>
  </li>
);

const Library = ({ visible }: { visible: Template[] }) => (
  <section className="atx-list" id="atx-list" aria-labelledby="atx-list-title">
    <div className="container-shell">
      <header className="adv-head det-head">
        <span className="adv-eyebrow">/ 03 &nbsp; The library</span>
        <h2 id="atx-list-title" className="adv-h2">Six workflows. Each one shipped as a spec.</h2>
        <p className="adv-intro">
          Browse the library. Every card has its own nodes, compliance posture,
          and time-saved baseline — pick the one your clinic will actually use first.
        </p>
      </header>

      {visible.length === 0 ? (
        <div className="atx-empty">
          <span className="atx-empty-icon" aria-hidden="true">∅</span>
          <p>
            No templates in this category yet —{' '}
            <Link to="/free-growth-audit">request a custom build</Link>.
          </p>
        </div>
      ) : (
        <ol className="atx-cards">
          {visible.map((t, i) => (
            <TemplateCard key={t.num} t={t} index={i} />
          ))}
        </ol>
      )}
    </div>
  </section>
);

const HOW_STEPS = [
  { num: '01', title: 'Browse', desc: 'Pick the workflow that maps to the hour-leak you want to plug first — by category, compliance posture, or ROI.' },
  { num: '02', title: 'Import', desc: 'Drop the spec into your N8N instance — every node is documented, every credential slot is labelled.' },
  { num: '03', title: 'Customise', desc: 'Swap in your CRM, your scheduler, your messaging stack. Brand the patient-facing surfaces with your voice.' },
  { num: '04', title: 'Ship', desc: 'Run a 24-hour pilot, then turn the workflow on for the front desk. Most workflows pay back inside two weeks.' },
];

const HowItWorks = () => (
  <section className="atx-how" aria-labelledby="atx-how-title">
    <div className="container-shell">
      <header className="adv-head det-head">
        <span className="adv-eyebrow">/ 04 &nbsp; How it works</span>
        <h2 id="atx-how-title" className="adv-h2">Four moves from library to live workflow.</h2>
        <p className="adv-intro">
          The same deployment cadence we use inside paying engagements — minus
          the retainer. The library does the hard part; the four moves do the rest.
        </p>
      </header>
      <ol className="atx-steps">
        {HOW_STEPS.map((s) => (
          <li key={s.num} className="atx-step">
            <span className="atx-step-num">{s.num}</span>
            <div className="atx-step-body">
              <h3 className="atx-step-title">{s.title}</h3>
              <p className="atx-step-desc">{s.desc}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  </section>
);

const ImageBreak = () => (
  <section className="atx-break" aria-hidden="true">
    <div className="container-shell">
      <div className="atx-break-frame">
        <div className="atx-break-art">
          <CategoryArt cat="Intake" />
        </div>
        <div className="atx-break-meta">
          <span className="atx-mono">FIG. 09 — IN PRACTICE</span>
          <p className="atx-break-caption">
            Every workflow ships as an N8N spec with the compliance posture
            documented at every node.
          </p>
        </div>
      </div>
    </div>
  </section>
);

const COMPLIANCE_TIERS = [
  {
    key: 'BAA required',
    desc: 'Touches PHI directly. Runs only behind a signed Business Associate Agreement with every vendor in the path.',
    count: TEMPLATES.filter((t) => t.compliance === 'BAA required').length,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 2 L 4 6 V 12 C 4 16.5 7.5 20.7 12 22 C 16.5 20.7 20 16.5 20 12 V 6 Z" />
        <path d="M9 12 L 11 14 L 15 10" />
      </svg>
    ),
  },
  {
    key: 'HIPAA-aware',
    desc: 'Touches scheduling and messaging metadata — no clinical PHI. Built to respect HIPAA boundaries by design.',
    count: TEMPLATES.filter((t) => t.compliance === 'HIPAA-aware').length,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="9" />
        <path d="M8 12 L 11 15 L 16 9" />
      </svg>
    ),
  },
  {
    key: 'PHI-free',
    desc: 'Workflow operates entirely outside the PHI surface. Reviews, social, lead capture — public-facing only.',
    count: TEMPLATES.filter((t) => t.compliance === 'PHI-free').length,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="4" y="6" width="16" height="14" rx="2" />
        <path d="M8 10 L 12 14 L 16 10" />
      </svg>
    ),
  },
];

const Compliance = () => (
  <section className="atx-comp" aria-labelledby="atx-comp-title">
    <div className="container-shell">
      <header className="adv-head det-head">
        <span className="adv-eyebrow">/ 05 &nbsp; Compliance posture</span>
        <h2 id="atx-comp-title" className="adv-h2">Three modes. One library.</h2>
        <p className="adv-intro">
          Every workflow declares its compliance posture up front — so the
          front desk, the compliance lead, and IT all see the same boundary
          before anything ships.
        </p>
      </header>
      <div className="atx-comp-grid">
        {COMPLIANCE_TIERS.map((c) => (
          <article key={c.key} className="atx-comp-card">
            <span className="atx-comp-icon">{c.icon}</span>
            <div className="atx-comp-head">
              <h3 className="atx-comp-title">{c.key}</h3>
              <span className="atx-comp-count">{c.count} workflow{c.count === 1 ? '' : 's'}</span>
            </div>
            <p className="atx-comp-desc">{c.desc}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
);

const WHO_FOR = [
  {
    label: 'Front-desk lead',
    desc: 'You want every patient touchpoint logged, reminded, and reviewed — without owning a new tool yourself.',
  },
  {
    label: 'Operations director',
    desc: 'You want the hour-leaks closed and the SOP documented in one place every clinic can audit.',
  },
  {
    label: 'Marketing lead',
    desc: 'You want the review engine running, the lead capture qualifying, and the social feed shipping — daily, automatically.',
  },
];

const WhoFor = () => (
  <section className="atx-who" aria-labelledby="atx-who-title">
    <div className="container-shell">
      <header className="adv-head det-head">
        <span className="adv-eyebrow">/ 06 &nbsp; Who this is for</span>
        <h2 id="atx-who-title" className="adv-h2">Three roles the library was written for.</h2>
        <p className="adv-intro">
          The library is one resource, but three readers will pick it up — each
          one looking for a different boundary, a different number, a different proof.
        </p>
      </header>
      <div className="atx-who-grid">
        {WHO_FOR.map((p, i) => (
          <article key={p.label} className="atx-who-card">
            <span className="atx-who-num">/{String(i + 1).padStart(2, '0')}</span>
            <h3 className="atx-who-title">{p.label}</h3>
            <p className="atx-who-desc">{p.desc}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
);

const PullQuote = () => (
  <section className="atx-quote" aria-label="Pull quote">
    <div className="container-shell">
      <blockquote className="atx-quote-frame">
        <span className="atx-quote-mark" aria-hidden="true">&ldquo;</span>
        <p className="atx-quote-text">
          The cheapest hour a clinic ever recovers is the one a workflow
          stops asking the front desk to spend.
        </p>
        <footer className="atx-quote-foot">
          <span className="atx-quote-avatar" aria-hidden="true">FN</span>
          <cite className="atx-quote-cite">Focus Marketing · Automation desk</cite>
        </footer>
      </blockquote>
    </div>
  </section>
);

const PROMISES = [
  'Every workflow is yours to keep — no retainer, no usage cap.',
  'Every spec is documented in plain language, not just node-soup.',
  'Every compliance posture is declared up front, before deploy.',
  'Every workflow ships with an SOP your team can audit.',
];

const Promise = () => (
  <section className="atx-promise" aria-labelledby="atx-promise-title">
    <div className="container-shell">
      <header className="adv-head det-head">
        <span className="adv-eyebrow">/ 07 &nbsp; The promise</span>
        <h2 id="atx-promise-title" className="adv-h2">What the library will and will not do.</h2>
        <p className="adv-intro">
          Four commitments that hold across every workflow in the library —
          and across every customisation we ship for paying clients too.
        </p>
      </header>
      <ul className="atx-promise-list">
        {PROMISES.map((p, i) => (
          <li key={i} className="atx-promise-item">
            <span className="atx-promise-box"><Check /></span>
            <span className="atx-promise-num">/{String(i + 1).padStart(2, '0')}</span>
            <span className="atx-promise-text">{p}</span>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

const CTABanner = () => (
  <section className="atx-cta" aria-labelledby="atx-cta-title">
    <div className="container-shell">
      <div className="atx-cta-frame">
        <div className="atx-cta-copy">
          <span className="atx-cta-eyebrow"><span className="atx-eyebrow-dot" />Need one we have not built?</span>
          <h2 id="atx-cta-title" className="atx-cta-h2">Book a 15-minute build session.</h2>
          <p className="atx-cta-text">
            Free, no pitch. We scope the workflow on the call and ship the
            spec the same week — yours to keep, agency or not.
          </p>
        </div>
        <div className="atx-cta-actions">
          <Link to="/free-growth-audit" className="atx-btn atx-btn-primary">Book the session <ArrowRight /></Link>
          <Link to="/automation" className="atx-btn atx-btn-ghost">Back to Automation</Link>
        </div>
      </div>
    </div>
  </section>
);

const RELATED = [
  {
    to: '/automation',
    cat: 'Overview',
    title: 'Automation, end-to-end.',
    desc: 'How the library, the custom builds, and the ops layer all hook together.',
  },
  {
    to: '/automation/more-info',
    cat: 'Process',
    title: 'How we build automations.',
    desc: 'The discovery → spec → ship cadence we follow for every workflow that leaves the studio.',
  },
  {
    to: '/free-growth-audit',
    cat: 'Audit',
    title: 'The free growth audit.',
    desc: 'A five-day audit that surfaces the hour-leaks your library will close first.',
  },
];

const Related = () => (
  <section className="atx-related" aria-labelledby="atx-related-title">
    <div className="container-shell">
      <header className="adv-head det-head">
        <span className="adv-eyebrow">/ 08 &nbsp; Keep reading</span>
        <h2 id="atx-related-title" className="adv-h2">More from the automation desk.</h2>
        <p className="adv-intro">
          Hand-picked resources that extend the library — process, audit, and
          the operating system the workflows plug into.
        </p>
      </header>
      <div className="atx-related-grid">
        {RELATED.map((r, i) => (
          <Link key={r.to} to={r.to} className="atx-related-card">
            <span className="atx-related-num">/{String(i + 1).padStart(2, '0')}</span>
            <span className="atx-related-cat">{r.cat}</span>
            <h3 className="atx-related-title">{r.title}</h3>
            <p className="atx-related-desc">{r.desc}</p>
            <span className="atx-related-cta">Read <ArrowRight size={12} /></span>
          </Link>
        ))}
      </div>
    </div>
  </section>
);

/* ---------- Main ---------- */
const Templates = () => {
  const [filter, setFilter] = useState<'All' | Category>('All');
  const visible = useMemo(
    () => (filter === 'All' ? TEMPLATES : TEMPLATES.filter((t) => t.cat === filter)),
    [filter],
  );

  return (
    <main className="atx" id="atx-top">
      <Hero filter={filter} visibleCount={visible.length} />
      <DataBand />
      <TLDR />
      <AtAGlance />
      <FilterBar filter={filter} setFilter={setFilter} />
      <Library visible={visible} />
      <ImageBreak />
      <HowItWorks />
      <Compliance />
      <WhoFor />
      <PullQuote />
      <Promise />
      <CTABanner />
      <Related />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(TEMPLATES_SCHEMA) }}
      />
    </main>
  );
};

export default Templates;
