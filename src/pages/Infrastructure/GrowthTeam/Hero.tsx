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
        <span className="cur">Growth Team</span>
      </nav>

      <div className="gtx-hero-grid">
        <div className="gtx-hero-content">
          <span className="gtx-eyebrow">
            <span className="gtx-eyebrow-dot" aria-hidden="true" />
            The Growth Team
          </span>
          <h1 className="gtx-hero-title">
            A senior healthcare marketing department,
            <em> embedded into your clinic.</em>
          </h1>
          <p className="gtx-hero-lede">
            Not a freelancer. Not a generalist agency. Six dedicated specialists - each
            healthcare-fluent, each on-staff for the engagement - running your patient acquisition
            the way an in-house team would.
          </p>
          <div className="gtx-hero-ctas">
            <Link to="/contact" className="gtx-btn-primary">
              Meet the team
              <ArrowIcon />
            </Link>
            <Link to="/our-work" className="gtx-btn-link">
              See past work →
            </Link>
          </div>
        </div>
        <div className="gtx-hero-visual">
          <img src={heroImg} alt="" loading="eager" decoding="async" />
          <div className="gtx-hero-visual-tag" aria-hidden="true">
            <span className="gtx-hero-visual-tag-num">6</span>
            <span className="gtx-hero-visual-tag-lbl">Senior specialists, one team</span>
          </div>
        </div>
      </div>

      <ul className="gtx-hero-stats">
        <li>
          <strong>6</strong>
          <span>Senior specialists</span>
        </li>
        <li>
          <strong>105+</strong>
          <span>Weekly hours dedicated</span>
        </li>
        <li>
          <strong>3.1×</strong>
          <span>Median first-year ROAS</span>
        </li>
        <li>
          <strong>0</strong>
          <span>Handoffs to junior staff</span>
        </li>
      </ul>
    </div>
  </section>
);

export default Hero;
