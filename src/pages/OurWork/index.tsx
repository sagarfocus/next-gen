import { Link } from 'react-router-dom';
import type { ReactNode } from 'react';
import { Parallax, AnimatedBackground, MotionButton, MotionCard } from '../../lib/motion';

/* ============================================================
   OUR WORK — bespoke gallery page.
   A retrospective of the engagements, capabilities, and
   industries shipped from this studio. SEO-first, image-light,
   distinct from every other page on the site.
   ============================================================ */

// Unsplash — stable photo IDs, digital-marketing + AI editorial.
const IMG = {
  // Hero spotlight — abstract AI-gradient tech vibe (looks AI-generated)
  spotlight:
    'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1100&q=70',
  // Discovery tile — analytics dashboard on laptop (the classic SEO chart shot)
  search:
    'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=70',
  // Web tile — modern multi-screen workspace
  web:
    'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=900&q=70',
  // Closing card — marketing strategy / planning workspace
  studio:
    'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=70',
};

const TAGS = [
  'SEO',
  'Google Ads',
  'Meta Ads',
  'Branding',
  'Web Design',
  'Content',
  'Automation',
  'Field Marketing',
  'Reviews',
  'AI Triage',
  'Local Pack',
  'Schema',
];

const STATS = [
  { v: '200+',   l: 'Practices grown' },
  { v: '$24M+',  l: 'Pipeline moved' },
  { v: '47M',    l: 'Impressions delivered' },
  { v: '4.1×',   l: 'Median ROAS' },
];

const INDUSTRIES = [
  'Emergency Rooms',
  'Urgent Care',
  'Medspas & Aesthetics',
  'Dental Practices',
  'Mental Health',
  'Pediatrics',
  'Chiropractic',
  'Primary Care',
  'Healthcare Networks',
];

const CAPABILITIES: { tag: string; title: string; copy: string; size: 'a' | 'b' | 'c' | 'd' | 'e' | 'f' }[] = [
  {
    size: 'a',
    tag: 'Discovery',
    title: 'Local search systems that own the Map Pack.',
    copy: 'Schema, GBP optimisation, geo-targeted content, and a review engine that compounds month over month.',
  },
  {
    size: 'b',
    tag: 'Acquisition',
    title: 'Paid media that pays back in week one.',
    copy: 'Google + Meta + LinkedIn with server-side tracking and HIPAA-aware audiences.',
  },
  {
    size: 'c',
    tag: 'Brand',
    title: 'Identities patients trust on sight.',
    copy: 'Marks, voice, and motion built to age well across signage, screen, and surgical theatre.',
  },
  {
    size: 'd',
    tag: 'Web',
    title: 'Booking-first websites that convert.',
    copy: 'Speed, schema, accessibility — and a booking pathway with measured drop-off at every step.',
  },
  {
    size: 'e',
    tag: 'Lifecycle',
    title: 'Recall + nurture that earns trust.',
    copy: 'Empathetic recall flows that move return rates without ever feeling like advertising.',
  },
  {
    size: 'f',
    tag: 'Operations',
    title: 'Automations the front desk actually runs on.',
    copy: 'EHR-connected, BAA-covered workflows: intake, reminders, eligibility, AI triage.',
  },
];

const ENGAGEMENTS: {
  sector: string;
  name: string;
  headline: string;
  metric: { v: string; l: string };
  delta: string;
  to: string;
}[] = [
  {
    sector: 'Emergency Room',
    name: 'SunCrest Freestanding ER',
    headline: 'Filled overnight slots without paying for non-emergent traffic.',
    metric: { v: '+318%', l: 'Booked visits, 90d' },
    delta: '+318',
    to: '/case-studies',
  },
  {
    sector: 'Medspa',
    name: 'VitalSpa Aesthetics',
    headline: 'Re-priced the launch funnel around lifetime value, not first visit.',
    metric: { v: '+62%', l: 'AOV, six months' },
    delta: '+62',
    to: '/case-studies',
  },
  {
    sector: 'Dental Network',
    name: 'NorthLake Dental',
    headline: 'Unified seven locations under one search + brand operating system.',
    metric: { v: '−48%', l: 'Cost per patient' },
    delta: '−48',
    to: '/case-studies',
  },
];

/* ---------- SVG art used for non-photo tiles ---------- */

const MeshArt = () => (
  <svg viewBox="0 0 600 420" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
    <defs>
      <radialGradient id="mwA" cx="20%" cy="20%" r="60%">
        <stop offset="0%" stopColor="#576DB5" stopOpacity="0.85" />
        <stop offset="100%" stopColor="#576DB5" stopOpacity="0" />
      </radialGradient>
      <radialGradient id="mwB" cx="85%" cy="35%" r="55%">
        <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.55" />
        <stop offset="100%" stopColor="#D4AF37" stopOpacity="0" />
      </radialGradient>
      <radialGradient id="mwC" cx="40%" cy="90%" r="65%">
        <stop offset="0%" stopColor="#8FBC8F" stopOpacity="0.55" />
        <stop offset="100%" stopColor="#8FBC8F" stopOpacity="0" />
      </radialGradient>
    </defs>
    <rect width="600" height="420" fill="#1A2438" />
    <rect width="600" height="420" fill="url(#mwA)" />
    <rect width="600" height="420" fill="url(#mwB)" />
    <rect width="600" height="420" fill="url(#mwC)" />
    <g stroke="rgba(255,255,255,0.10)" strokeWidth="1" fill="none">
      <circle cx="120" cy="320" r="80" />
      <circle cx="120" cy="320" r="140" strokeDasharray="3 6" />
      <circle cx="480" cy="100" r="60" />
      <circle cx="480" cy="100" r="110" strokeDasharray="3 6" />
    </g>
    <g fill="#D4AF37">
      <circle cx="120" cy="320" r="6" />
      <circle cx="480" cy="100" r="6" />
    </g>
    <text x="32" y="44" fontFamily="ui-monospace,Menlo" fontSize="11" letterSpacing="2" fill="rgba(255,255,255,0.65)">
      FIG. 01 — TERRITORY
    </text>
    <text x="32" y="398" fontFamily="ui-monospace,Menlo" fontSize="11" letterSpacing="2" fill="rgba(255,255,255,0.5)">
      SCALE · 1 : ∞
    </text>
  </svg>
);

const ChartArt = () => (
  <svg viewBox="0 0 600 320" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
    <defs>
      <linearGradient id="cha" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#576DB5" stopOpacity="0.30" />
        <stop offset="100%" stopColor="#576DB5" stopOpacity="0" />
      </linearGradient>
    </defs>
    <rect width="600" height="320" fill="#FFFFFF" />
    <g stroke="rgba(26,36,56,0.06)" strokeWidth="1">
      <line x1="0" y1="80"  x2="600" y2="80" />
      <line x1="0" y1="160" x2="600" y2="160" />
      <line x1="0" y1="240" x2="600" y2="240" />
    </g>
    <path
      d="M 30 240 L 110 220 L 190 200 L 270 170 L 350 130 L 430 90 L 510 60 L 580 40"
      fill="none"
      stroke="#576DB5"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M 30 240 L 110 220 L 190 200 L 270 170 L 350 130 L 430 90 L 510 60 L 580 40 L 580 320 L 30 320 Z"
      fill="url(#cha)"
    />
    <g fill="#576DB5">
      <circle cx="350" cy="130" r="6" />
      <circle cx="350" cy="130" r="12" fill="none" stroke="#576DB5" strokeWidth="1.2" opacity="0.55" />
    </g>
    <text x="358" y="118" fontFamily="ui-monospace,Menlo" fontSize="11" fill="#1A2438" fontWeight="700">
      Q3 inflection
    </text>
    <text x="32" y="34" fontFamily="ui-monospace,Menlo" fontSize="10" letterSpacing="2" fill="rgba(26,36,56,0.55)">
      ORGANIC PATIENT VISITS
    </text>
    <text x="32" y="304" fontFamily="ui-monospace,Menlo" fontSize="10" letterSpacing="2" fill="rgba(26,36,56,0.45)">
      MAR · MAY · JUL · SEP · NOV
    </text>
  </svg>
);

const FunnelArt = () => (
  <svg viewBox="0 0 480 280" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
    <rect width="480" height="280" fill="#FAFAF6" />
    <g>
      <rect x="40" y="40"  width="400" height="32" rx="8" fill="#576DB5" />
      <rect x="80" y="92"  width="320" height="32" rx="8" fill="#576DB5" opacity="0.78" />
      <rect x="120" y="144" width="240" height="32" rx="8" fill="#576DB5" opacity="0.55" />
      <rect x="170" y="196" width="140" height="32" rx="8" fill="#B38B6D" />
    </g>
    <g fontFamily="ui-monospace,Menlo" fontSize="10" letterSpacing="1" fill="#FFFFFF">
      <text x="50"  y="61">CLICK</text>
      <text x="90"  y="113">SEARCH</text>
      <text x="130" y="165">VISIT</text>
      <text x="180" y="217">BOOK</text>
    </g>
    <g fontFamily="ui-monospace,Menlo" fontSize="11" fill="#1A2438" fontWeight="700">
      <text x="450" y="61"  textAnchor="end">100%</text>
      <text x="410" y="113" textAnchor="end">62%</text>
      <text x="370" y="165" textAnchor="end">38%</text>
      <text x="320" y="217" textAnchor="end">18%</text>
    </g>
  </svg>
);

const NetworkArt = () => (
  <svg viewBox="0 0 480 280" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
    <rect width="480" height="280" fill="#1A2438" />
    <g stroke="#D4AF37" strokeWidth="1" strokeDasharray="3 5" fill="none" opacity="0.6">
      <line x1="240" y1="140" x2="80"  y2="60" />
      <line x1="240" y1="140" x2="400" y2="60" />
      <line x1="240" y1="140" x2="80"  y2="220" />
      <line x1="240" y1="140" x2="400" y2="220" />
      <line x1="240" y1="140" x2="60"  y2="140" />
      <line x1="240" y1="140" x2="420" y2="140" />
    </g>
    <g>
      <circle cx="240" cy="140" r="36" fill="#576DB5" />
      <circle cx="240" cy="140" r="50" fill="none" stroke="rgba(212,175,55,0.35)" strokeWidth="1" />
    </g>
    <g fill="#FAFAF6">
      <rect x="60"  y="50"  width="40" height="20" rx="4" />
      <rect x="380" y="50"  width="40" height="20" rx="4" />
      <rect x="60"  y="210" width="40" height="20" rx="4" />
      <rect x="380" y="210" width="40" height="20" rx="4" />
      <rect x="40"  y="130" width="40" height="20" rx="4" />
      <rect x="400" y="130" width="40" height="20" rx="4" />
    </g>
  </svg>
);

const BrandArt = () => (
  <svg viewBox="0 0 480 280" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
    <rect width="480" height="280" fill="#FAFAF6" />
    <g fill="none" stroke="#1A2438" strokeWidth="1.4">
      <circle cx="120" cy="140" r="56" />
      <circle cx="240" cy="140" r="56" />
      <circle cx="360" cy="140" r="56" />
    </g>
    <circle cx="120" cy="140" r="56" fill="#576DB5" opacity="0.42" />
    <circle cx="240" cy="140" r="56" fill="#B38B6D" opacity="0.42" />
    <circle cx="360" cy="140" r="56" fill="#8FBC8F" opacity="0.42" />
    <text x="240" y="44" textAnchor="middle" fontFamily="Plus Jakarta Sans,sans-serif" fontSize="12" letterSpacing="6" fill="#1A2438" fontWeight="800">
      IDENTITY · TONE · MOTION
    </text>
  </svg>
);

/* ---------- Sections ---------- */

const Hero = () => (
  <section className="ow-hero" aria-labelledby="ow-h1">
    <AnimatedBackground variant="aurora" intensity="medium" />
    <div className="container-shell">
      <nav className="ow-crumbs" aria-label="Breadcrumb">
        <Link to="/">Home</Link>
        <span aria-hidden="true">/</span>
        <span aria-current="page">Our Work</span>
      </nav>

      <div className="ow-hero-grid">
        <div className="ow-hero-copy">
          <span className="ow-pill">
            <span className="ow-pill-dot" />
            Selected work · Healthcare · 2019–2026
          </span>
          <h1 id="ow-h1" className="ow-h1">
            Six years.
            <br />
            <em>Two hundred</em> practices.
            <br />
            One playbook.
          </h1>
          <p className="ow-lede">
            A retrospective of the marketing, branding, and operations work
            we have shipped for clinics, medspas, urgent care centers, and
            multi-location healthcare brands.
          </p>
          <div className="ow-hero-cta">
            <MotionButton to="/contact" className="ow-cta-primary">
              Start a project
              <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </MotionButton>
            <Link to="/case-studies" className="ow-cta-link">
              Read full case studies
            </Link>
          </div>
        </div>

        <Parallax as="div" speed={0.06} className="ow-hero-visual" aria-hidden="true">
          <figure className="ow-spotlight">
            <img src={IMG.spotlight} alt="" loading="eager" />
            <figcaption>
              <span className="ow-spot-tag">In production</span>
              <span className="ow-spot-title">Multi-location growth OS</span>
            </figcaption>
          </figure>

          <div className="ow-floater ow-floater-1">
            <span className="ow-floater-num">+318<small>%</small></span>
            <span className="ow-floater-lbl">Booked visits · 90d</span>
          </div>
          <div className="ow-floater ow-floater-2">
            <span className="ow-floater-dot" /> Live ranking · Map Pack
          </div>
        </Parallax>
      </div>
    </div>
  </section>
);

const Marquee = () => (
  <section className="ow-marquee" aria-hidden="true">
    <div className="ow-marquee-track">
      {[...TAGS, ...TAGS].map((t, i) => (
        <span key={`${t}-${i}`} className="ow-mq-item">
          <span className="ow-mq-dot" /> {t}
        </span>
      ))}
    </div>
  </section>
);

const Stats = () => (
  <section className="ow-stats" aria-label="Engagement totals">
    <div className="container-shell">
      <div className="ow-stats-grid">
        {STATS.map((s, i) => (
          <div key={s.l} className="ow-stat">
            <span className="ow-stat-mono">0{i + 1}</span>
            <div className="ow-stat-v">{s.v}</div>
            <div className="ow-stat-l">{s.l}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Capabilities = () => (
  <section className="ow-cap" aria-labelledby="ow-cap-title">
    <div className="container-shell">
      <header className="ow-section-head">
        <span className="ow-section-tag">What we ship</span>
        <h2 id="ow-cap-title" className="ow-section-h2">
          Six capabilities. One operating system.
        </h2>
      </header>

      <div className="ow-bento">
        {/* Tile A — Hero capability with full image */}
        <MotionCard naked tilt={5} className="ow-tile ow-tile-a">
          <div className="ow-tile-art ow-tile-art-img">
            <img src={IMG.search} alt="" loading="lazy" />
          </div>
          <div className="ow-tile-body">
            <span className="ow-tile-tag">{CAPABILITIES[0].tag}</span>
            <h3 className="ow-tile-title">{CAPABILITIES[0].title}</h3>
            <p className="ow-tile-copy">{CAPABILITIES[0].copy}</p>
          </div>
        </MotionCard>

        {/* Tile B — Paid media (chart art) */}
        <MotionCard naked tilt={5} className="ow-tile ow-tile-b">
          <div className="ow-tile-art"><ChartArt /></div>
          <div className="ow-tile-body">
            <span className="ow-tile-tag">{CAPABILITIES[1].tag}</span>
            <h3 className="ow-tile-title">{CAPABILITIES[1].title}</h3>
            <p className="ow-tile-copy">{CAPABILITIES[1].copy}</p>
          </div>
        </MotionCard>

        {/* Tile C — Brand (abstract art) */}
        <MotionCard naked tilt={5} className="ow-tile ow-tile-c">
          <div className="ow-tile-art"><BrandArt /></div>
          <div className="ow-tile-body">
            <span className="ow-tile-tag">{CAPABILITIES[2].tag}</span>
            <h3 className="ow-tile-title">{CAPABILITIES[2].title}</h3>
            <p className="ow-tile-copy">{CAPABILITIES[2].copy}</p>
          </div>
        </MotionCard>

        {/* Tile D — Web (image) */}
        <MotionCard naked tilt={5} className="ow-tile ow-tile-d">
          <div className="ow-tile-art ow-tile-art-img">
            <img src={IMG.web} alt="" loading="lazy" />
          </div>
          <div className="ow-tile-body">
            <span className="ow-tile-tag">{CAPABILITIES[3].tag}</span>
            <h3 className="ow-tile-title">{CAPABILITIES[3].title}</h3>
            <p className="ow-tile-copy">{CAPABILITIES[3].copy}</p>
          </div>
        </MotionCard>

        {/* Tile E — Lifecycle (funnel art) */}
        <MotionCard naked tilt={5} className="ow-tile ow-tile-e">
          <div className="ow-tile-art"><FunnelArt /></div>
          <div className="ow-tile-body">
            <span className="ow-tile-tag">{CAPABILITIES[4].tag}</span>
            <h3 className="ow-tile-title">{CAPABILITIES[4].title}</h3>
            <p className="ow-tile-copy">{CAPABILITIES[4].copy}</p>
          </div>
        </MotionCard>

        {/* Tile F — Automation (network art, dark) */}
        <MotionCard naked tilt={5} className="ow-tile ow-tile-f">
          <div className="ow-tile-art"><NetworkArt /></div>
          <div className="ow-tile-body">
            <span className="ow-tile-tag">{CAPABILITIES[5].tag}</span>
            <h3 className="ow-tile-title">{CAPABILITIES[5].title}</h3>
            <p className="ow-tile-copy">{CAPABILITIES[5].copy}</p>
          </div>
        </MotionCard>
      </div>
    </div>
  </section>
);

const Industries = () => (
  <section className="ow-ind" aria-labelledby="ow-ind-title">
    <div className="container-shell">
      <div className="ow-ind-grid">
        <div className="ow-ind-text">
          <span className="ow-section-tag ow-section-tag--dark">Industries</span>
          <h2 id="ow-ind-title" className="ow-section-h2 ow-section-h2--dark">
            The clinics this work has shipped for.
          </h2>
          <p className="ow-ind-lede">
            Single-location practices, multi-site networks, and everything between.
            Every vertical has its own pricing model, regulatory edge, and patient
            journey — the playbook adapts.
          </p>
        </div>
        <ul className="ow-ind-pills">
          {INDUSTRIES.map((it) => (
            <li key={it}><span /> {it}</li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

const Featured = () => (
  <section className="ow-feat" aria-labelledby="ow-feat-title">
    <div className="container-shell">
      <header className="ow-section-head">
        <span className="ow-section-tag">Featured engagements</span>
        <h2 id="ow-feat-title" className="ow-section-h2">
          Three from the last quarter.
        </h2>
      </header>

      <div className="ow-feat-grid">
        {ENGAGEMENTS.map((e) => (
          <MotionCard key={e.name} naked tilt={7} className="ow-feat-card-wrap">
            <Link to={e.to} className="ow-feat-card">
              <div className="ow-feat-art" aria-hidden="true">
                <MeshArt />
                <span className="ow-feat-delta">{e.delta}<small>%</small></span>
              </div>
              <div className="ow-feat-body">
                <span className="ow-feat-sector">{e.sector}</span>
                <h3 className="ow-feat-name">{e.name}</h3>
                <p className="ow-feat-headline">{e.headline}</p>
                <div className="ow-feat-foot">
                  <div>
                    <strong>{e.metric.v}</strong>
                    <span>{e.metric.l}</span>
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

const Closing = () => (
  <section className="ow-close" aria-labelledby="ow-close-title">
    <div className="container-shell">
      <div className="ow-close-card">
        <Parallax as="div" speed={0.05} className="ow-close-img" aria-hidden="true">
          <img src={IMG.studio} alt="" loading="lazy" />
          <div className="ow-close-shade" />
        </Parallax>
        <div className="ow-close-body">
          <span className="ow-pill">
            <span className="ow-pill-dot" /> Now booking · Q3 2026
          </span>
          <h2 id="ow-close-title" className="ow-close-h">
            Want to be in this list <em>next year</em>?
          </h2>
          <p className="ow-close-p">
            We take a small number of new engagements each quarter. If your
            practice is ready, the audit gets you a real plan in five days.
          </p>
          <div className="ow-close-cta">
            <MotionButton to="/free-growth-audit" className="ow-cta-primary ow-cta-primary--light">
              Get my growth audit
              <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </MotionButton>
            <Link to="/case-studies" className="ow-cta-link ow-cta-link--light">
              Read full case studies
            </Link>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const COLLECTION_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Our Work — Healthcare Marketing Portfolio',
  url: 'https://thenextgenhealth.com/our-work',
  description:
    'A retrospective of marketing, branding, web, and automation work shipped for clinics, medspas, urgent care, and multi-location healthcare brands.',
  isPartOf: {
    '@type': 'WebSite',
    name: 'TheNextGen Healthcare Marketing',
    url: 'https://thenextgenhealth.com',
  },
  about: [
    { '@type': 'Thing', name: 'Healthcare SEO' },
    { '@type': 'Thing', name: 'Healthcare paid media' },
    { '@type': 'Thing', name: 'Medical brand identity' },
    { '@type': 'Thing', name: 'Healthcare automation' },
  ],
};

/* Silence "unused" warning for ReactNode import in environments without TS dead-code stripping. */
const _noopNode: ReactNode = null;

const OurWork = () => (
  <main className="ow-page">
    <Hero />
    <Marquee />
    <Stats />
    <Capabilities />
    <Industries />
    <Featured />
    <Closing />

    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(COLLECTION_SCHEMA) }}
    />
    <span hidden>{_noopNode}</span>
  </main>
);

export default OurWork;
