import { Link } from 'react-router-dom';
import Breadcrumb from '@/components/Breadcrumb';
import { AnimatedBackground } from '@/lib/motion';
import { ArrowIcon } from '@/components/icons';
import { CategoryArt } from './data';

const Hero = ({ filter, visibleCount }: { filter: string; visibleCount: number }) => (
  <section className="atx-hero" aria-labelledby="atx-hero-title">
    <AnimatedBackground variant="aurora" intensity="subtle" />
    <div className="container-shell">
      <div className="atx-hero-meta">
        <Breadcrumb items={[{ label: 'Automation', to: '/automation' }, { label: 'Templates' }]} />
        <div className="atx-hero-chips" aria-hidden="true">
          <span className="atx-hero-chip">
            <span className="atx-hero-chip-dot" />
            Template library · 2026
          </span>
          <span className="atx-hero-chip atx-mono">
            /{String(visibleCount).padStart(2, '0')}{' '}
            {filter === 'All' ? 'workflows' : `${filter.toLowerCase()} workflows`}
          </span>
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
          <span className="atx-eyebrow">
            <span className="atx-eyebrow-dot" />
            Automation library · Free to keep
          </span>
          <h1 id="atx-hero-title" className="atx-h1">
            Six<span className="atx-h1-accent">.</span> Healthcare-grade automations.
            <br />
            <span className="atx-h1-quiet">Live in your stack the same afternoon.</span>
          </h1>
          <p className="atx-lede">
            Each workflow is shipped as an N8N spec, vetted for HIPAA boundaries, and tuned for the
            moments where most clinics quietly lose hours every week.
          </p>
          <div className="atx-hero-cta">
            <Link to="/free-growth-audit" className="atx-btn atx-btn-primary">
              Get the library <ArrowIcon size={14} />
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

export default Hero;
