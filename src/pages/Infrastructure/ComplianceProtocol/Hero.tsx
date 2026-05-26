import { Link } from 'react-router-dom';

import { PLACEHOLDER_IMAGE as heroImg } from '@/lib/placeholderImage';
import { ArrowIcon } from '@/components/icons';

const Hero = () => (
  <section className="gtx-hero">
    <div className="gt-shell">
      <nav className="gtx-crumb" aria-label="Breadcrumb">
        <Link to="/about">About</Link>
        <span aria-hidden="true">/</span>
        <Link to="/about#infrastructure">Infrastructure</Link>
        <span aria-hidden="true">/</span>
        <span className="cur">Compliance Protocol</span>
      </nav>

      <div className="gtx-hero-grid">
        <div className="gtx-hero-content">
          <span className="gtx-eyebrow">
            <span className="gtx-eyebrow-dot" aria-hidden="true" />
            Compliance Protocol
          </span>
          <h1 className="gtx-hero-title">
            Healthcare-grade infrastructure,
            <em> documented and audited.</em>
          </h1>
          <p className="gtx-hero-lede">
            Every engagement runs on a HIPAA-aligned stack: BAA-covered tools, encrypted intake,
            PHI-safe analytics, audited logs. This page summarises the protocols stakeholders, legal
            teams, and security reviewers ask for before BAA execution.
          </p>
          <div className="gtx-hero-ctas">
            <Link to="/contact" className="gtx-btn-primary">
              Request documentation pack
              <ArrowIcon />
            </Link>
            <Link to="/about" className="gtx-btn-link">
              Back to Infrastructure →
            </Link>
          </div>
        </div>
        <div className="gtx-hero-visual">
          <img src={heroImg} alt="" loading="eager" decoding="async" />
          <div className="gtx-hero-visual-tag" aria-hidden="true">
            <span className="gtx-hero-visual-tag-num">100%</span>
            <span className="gtx-hero-visual-tag-lbl">BAA-covered toolchain</span>
          </div>
        </div>
      </div>

      <ul className="gtx-hero-stats">
        <li>
          <strong>100%</strong>
          <span>BAAs signed (healthcare clients)</span>
        </li>
        <li>
          <strong>AES-256</strong>
          <span>Encryption at rest</span>
        </li>
        <li>
          <strong>TLS 1.3</strong>
          <span>Transit security</span>
        </li>
        <li>
          <strong>6 yrs</strong>
          <span>Audit-log retention (HIPAA)</span>
        </li>
      </ul>
    </div>
  </section>
);

export default Hero;
