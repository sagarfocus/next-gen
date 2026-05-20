import { Link } from 'react-router-dom';

import heroImg from '../../assets/Local Search.png';
import dallasImg from '../../assets/healthcareimg1.png';
import houstonImg from '../../assets/healthcareimg2.png';
import austinImg from '../../assets/healthcareimg3.png';
import sanAntonioImg from '../../assets/healthcareimg4.png';
import fortWorthImg from '../../assets/healthcareimg5.png';
import elPasoImg from '../../assets/healthcareimg6.png';
import ctaImg from '../../assets/healthcareimg7.png';

/* ============================================================
   HYPER-LOCAL CONTENT — Cartographic / Field Atlas design.
   Map-pin iconography, coordinate-style typography, photographic
   metro tiles, scoped to .hlc-page with .hlc-* class system.
   ============================================================ */

interface Marker {
  value: string;
  label: string;
}
const MARKERS: Marker[] = [
  { value: '6',       label: 'Texas metros covered'   },
  { value: '380+',    label: 'Active geo pages'        },
  { value: '14 pos.', label: 'Median ranking lift'     },
  { value: '60 days', label: 'Audit-to-launch window'  },
];

interface Why {
  num: string;
  title: string;
  body: string;
  hint: string;
}
const WHY: Why[] = [
  {
    num: '01',
    title: 'Patients search local.',
    body: 'High-intent healthcare queries are local by nature. A practice ranking for "urgent care" in a metro means nothing if it does not also rank for the neighbourhood three blocks from the building.',
    hint: 'Catchment-bound queries',
  },
  {
    num: '02',
    title: 'Hospitals own the wide net.',
    body: 'A boutique practice will not outrank a hospital network for broad service terms. The win is in the long-tail municipality terms hospitals do not bother to write content for.',
    hint: 'Long-tail municipality wins',
  },
  {
    num: '03',
    title: 'AI engines reward specificity.',
    body: 'Conversational search now favours specific, neighbourhood-grounded answers. Generic city-level pages are quietly being filtered out of AI Overviews.',
    hint: 'AEO-grade local relevance',
  },
];

interface Metro {
  code: string;
  name: string;
  pages: number;
  coord: string;
  signal: string;
  img: string;
}
const METROS: Metro[] = [
  { code: 'TX-001', name: 'Dallas',      pages: 42, coord: '32.78°N · 96.80°W', signal: 'Highest concentration of FSED demand. Densest review volume.',   img: dallasImg     },
  { code: 'TX-002', name: 'Houston',     pages: 51, coord: '29.76°N · 95.37°W', signal: 'Multi-site urgent care competition. Long-tail wins outweigh aggregate.', img: houstonImg   },
  { code: 'TX-003', name: 'Austin',      pages: 38, coord: '30.27°N · 97.74°W', signal: 'Aesthetic and concierge categories. Higher LTV per visit.',     img: austinImg    },
  { code: 'TX-004', name: 'San Antonio', pages: 34, coord: '29.42°N · 98.49°W', signal: 'Primary care and Medicare advantage cohorts.',                 img: sanAntonioImg},
  { code: 'TX-005', name: 'Fort Worth',  pages: 29, coord: '32.75°N · 97.33°W', signal: 'Suburban family medicine. Recall and continuity drive value.', img: fortWorthImg },
  { code: 'TX-006', name: 'El Paso',     pages: 22, coord: '31.76°N · 106.49°W',signal: 'Bilingual content opportunity. Lower competition on Spanish terms.', img: elPasoImg },
];

interface Block {
  num: string;
  k: string;
  d: string;
  marker: string;
}
const ANATOMY: Block[] = [
  { num: '01', k: 'Hero',     d: 'Neighbourhood name written the way a resident speaks it. Driving distance from a landmark people actually use.', marker: 'Spoken local'   },
  { num: '02', k: 'Services', d: 'A service mix specific to that catchment. The downtown clinic is not the suburbs clinic - its page should not be either.', marker: 'Catchment-specific' },
  { num: '03', k: 'Proof',    d: 'Reviews from patients in that ZIP, photos of the building locals recognise, the names of partner pharmacies nearby.', marker: 'ZIP-bound proof' },
];

const PinIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 22s8-7.5 8-13a8 8 0 0 0-16 0c0 5.5 8 13 8 13z" />
    <circle cx="12" cy="9" r="2.6" />
  </svg>
);

const CompassIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="9" />
    <polygon points="16,8 13,13 8,16 11,11" fill="currentColor" stroke="none" />
  </svg>
);

const ArrowRight = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

const HyperLocalContent = () => {
  const SCHEMA = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Hyper-Local Content & Geo-Targeted Landing Pages',
    serviceType: 'Local SEO · Programmatic Catchment Pages',
    areaServed: 'Texas',
  };

  return (
    <main className="hlc-page">
      {/* ─── HERO ─── */}
      <section className="hlc-hero">
        <div className="hlc-shell">
          <nav className="hlc-crumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span aria-hidden="true">/</span>
            <Link to="/services">Services</Link>
            <span aria-hidden="true">/</span>
            <span className="cur">Hyper-Local Content</span>
          </nav>

          {/* Coordinate strip */}
          <div className="hlc-coord-strip" aria-hidden="true">
            <CompassIcon size={14} />
            <span className="hlc-coord">31.97°N · 99.90°W</span>
            <span className="hlc-coord-divider" />
            <span className="hlc-coord">TX</span>
            <span className="hlc-coord-divider" />
            <span className="hlc-coord">FIELD ATLAS · 2026</span>
          </div>

          <div className="hlc-hero-grid">
            <div className="hlc-hero-content">
              <span className="hlc-eyebrow">
                <PinIcon size={14} />
                Hyper-Local Content
              </span>
              <h1 className="hlc-hero-title">
                A page for every <em>neighbourhood</em> you serve.
              </h1>
              <p className="hlc-hero-lede">
                Programmatic landing pages - one per municipality, suburb, or
                catchment your practice draws from. Each is unique, indexable,
                and built to win the long-tail searches the hospital networks
                ignore.
              </p>
              <div className="hlc-hero-ctas">
                <Link to="/contact" className="hlc-btn-primary">
                  Request a catchment audit
                  <ArrowRight />
                </Link>
                <Link to="/services/seo-local-search" className="hlc-btn-link">
                  View the SEO programme →
                </Link>
              </div>
            </div>

            <div className="hlc-hero-visual">
              <img src={heroImg} alt="" loading="eager" decoding="async" />
              <div className="hlc-hero-visual-pin" aria-hidden="true">
                <PinIcon size={16} />
                <div>
                  <strong>380+</strong>
                  <span>Active geo pages</span>
                </div>
              </div>
              <span className="hlc-hero-crosshair tl" aria-hidden="true" />
              <span className="hlc-hero-crosshair tr" aria-hidden="true" />
              <span className="hlc-hero-crosshair bl" aria-hidden="true" />
              <span className="hlc-hero-crosshair br" aria-hidden="true" />
            </div>
          </div>

          {/* Marker strip */}
          <ul className="hlc-markers">
            {MARKERS.map((m, i) => (
              <li key={m.label} className="hlc-marker">
                <span className="hlc-marker-pin" aria-hidden="true">
                  <PinIcon size={14} />
                </span>
                <div className="hlc-marker-body">
                  <strong>{m.value}</strong>
                  <span>{m.label}</span>
                </div>
                <span className="hlc-marker-num" aria-hidden="true">
                  /{String(i + 1).padStart(2, '0')}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ─── WHY (3 reasons) ─── */}
      <section className="hlc-why">
        <div className="hlc-shell">
          <header className="hlc-sec-head">
            <span className="hlc-eyebrow">
              <PinIcon size={12} />
              The Case
            </span>
            <h2 className="hlc-sec-title">
              Why <em>geographic pages</em> matter.
            </h2>
            <p className="hlc-sec-sub">
              The case for treating every catchment as its own market - and
              writing for it that way.
            </p>
          </header>

          <div className="hlc-why-grid">
            {WHY.map((w) => (
              <article key={w.num} className="hlc-why-card">
                <div className="hlc-why-card-head">
                  <span className="hlc-why-num">{w.num}</span>
                  <span className="hlc-why-hint">{w.hint}</span>
                </div>
                <h3 className="hlc-why-title">{w.title}</h3>
                <p className="hlc-why-body">{w.body}</p>
                <span className="hlc-why-line" aria-hidden="true" />
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ─── COVERAGE (6 metros) ─── */}
      <section className="hlc-coverage">
        <div className="hlc-shell">
          <header className="hlc-sec-head">
            <span className="hlc-eyebrow">
              <CompassIcon size={12} />
              Where We Operate
            </span>
            <h2 className="hlc-sec-title">
              Six Texas metros. <em>Ranked by active pages.</em>
            </h2>
            <p className="hlc-sec-sub">
              Coverage extends to surrounding municipalities and suburbs.
              Each metro is its own atlas page.
            </p>
          </header>

          <div className="hlc-metro-grid">
            {METROS.map((m, i) => (
              <article
                key={m.code}
                className={`hlc-metro-card${i === 0 ? ' is-feature' : ''}`}
              >
                <div className="hlc-metro-img">
                  <img src={m.img} alt="" loading="lazy" decoding="async" />
                  <span className="hlc-metro-pages-badge" aria-hidden="true">
                    <PinIcon size={12} />
                    {m.pages} pages
                  </span>
                </div>
                <div className="hlc-metro-body">
                  <h3 className="hlc-metro-name">{m.name}</h3>
                  <span className="hlc-metro-coord">{m.coord}</span>
                  <p className="hlc-metro-signal">{m.signal}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ─── ANATOMY (3 page blocks) ─── */}
      <section className="hlc-anatomy">
        <div className="hlc-shell">
          <header className="hlc-sec-head">
            <span className="hlc-eyebrow">
              <PinIcon size={12} />
              Anatomy
            </span>
            <h2 className="hlc-sec-title">
              Three blocks. <em>None copied from anywhere else on the site.</em>
            </h2>
            <p className="hlc-sec-sub">
              Every hyper-local page is built around the same three blocks -
              tuned per catchment, never templated.
            </p>
          </header>

          <ol className="hlc-anatomy-grid">
            {ANATOMY.map((a, i) => (
              <li key={a.num} className="hlc-anatomy-step">
                <div className="hlc-anatomy-step-head">
                  <span className="hlc-anatomy-num">{a.num}</span>
                  {i < ANATOMY.length - 1 && (
                    <span className="hlc-anatomy-line" aria-hidden="true" />
                  )}
                </div>
                <span className="hlc-anatomy-marker">{a.marker}</span>
                <h3 className="hlc-anatomy-title">{a.k}</h3>
                <p className="hlc-anatomy-body">{a.d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="hlc-cta">
        <div className="hlc-shell">
          <div className="hlc-cta-card">
            <div className="hlc-cta-card-img">
              <img src={ctaImg} alt="" loading="lazy" decoding="async" />
              <span className="hlc-cta-card-tag" aria-hidden="true">
                <PinIcon size={12} />
                Two-week deliverable
              </span>
            </div>
            <div className="hlc-cta-card-body">
              <span className="hlc-eyebrow">
                <CompassIcon size={12} />
                The Audit
              </span>
              <h2 className="hlc-cta-title">
                Find the neighbourhoods <em>you are invisible in.</em>
              </h2>
              <p className="hlc-cta-text">
                The audit identifies the municipalities your practice already
                draws from but does not rank for, scored against expected query
                volume. Use it to commission a build - or keep the findings
                as a working SEO roadmap.
              </p>
              <div className="hlc-cta-ctas">
                <Link to="/contact" className="hlc-btn-primary">
                  Request the audit
                  <ArrowRight />
                </Link>
                <Link to="/services/seo-local-search" className="hlc-btn-link">
                  View the SEO programme →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />
    </main>
  );
};

export default HyperLocalContent;
