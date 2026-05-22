import { Link } from 'react-router-dom';

import heroImg from '../../assets/local-search.png';
import { ArrowIcon } from '@/components/icons';
import { PinIcon, CompassIcon } from './icons';
import { MARKERS } from './data';

const Hero = () => (
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
              <ArrowIcon />
            </Link>
            <Link to="/services/seo" className="hlc-btn-link">
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
);

export default Hero;
