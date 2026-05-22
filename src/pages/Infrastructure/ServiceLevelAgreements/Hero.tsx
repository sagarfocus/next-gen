import type { CSSProperties } from 'react';
import { Link } from 'react-router-dom';

import heroImg from '../../../assets/analytics-and-report.png';
import { ArrowIcon } from '../../../components/icons';
import Gauge from './Gauge';

const Hero = () => (
  <section className="gtx-hero">
    <div className="gt-shell">
      <nav className="gtx-crumb" aria-label="Breadcrumb">
        <Link to="/about">About</Link>
        <span aria-hidden="true">/</span>
        <Link to="/about#infrastructure">Infrastructure</Link>
        <span aria-hidden="true">/</span>
        <span className="cur">Service Level Agreements</span>
      </nav>

      <div className="gtx-hero-grid">
        <div className="gtx-hero-content">
          <span className="gtx-eyebrow">
            <span className="gtx-eyebrow-dot" aria-hidden="true" />
            Service Level Agreements
          </span>
          <h1 className="gtx-hero-title">
            Response time as a
            <em> measurable commitment.</em>
          </h1>
          <p className="gtx-hero-lede">
            Every engagement ships with a written SLA. Severity tiers,
            response targets, monitoring, and escalation paths - documented
            before the first dollar moves and held to weekly.
          </p>
          <div className="gtx-hero-ctas">
            <Link to="/contact" className="gtx-btn-primary">
              Schedule SLA review
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
            <span className="gtx-hero-visual-tag-num">24/7</span>
            <span className="gtx-hero-visual-tag-lbl">On-call monitoring</span>
          </div>
        </div>
      </div>

      {/* Gauge tiles row */}
      <div className="slax-gauge-row">
        <div className="slax-gauge-tile" style={{ '--slax-tone': '#E1505C' } as CSSProperties}>
          <Gauge pct={96} color="#E1505C" delay={0} />
          <div>
            <strong>&lt; 15 min</strong>
            <span>SEV-0 acknowledgement</span>
            <em className="slax-gauge-live" aria-hidden="true">
              <span className="slax-gauge-live-dot" />
              live · monitoring
            </em>
          </div>
        </div>
        <div className="slax-gauge-tile" style={{ '--slax-tone': '#6FA86F' } as CSSProperties}>
          <Gauge pct={99} color="#6FA86F" delay={140} />
          <div>
            <strong>99.9%</strong>
            <span>Monitored uptime target</span>
            <em className="slax-gauge-live" aria-hidden="true">
              <span className="slax-gauge-live-dot" />
              live · monitoring
            </em>
          </div>
        </div>
        <div className="slax-gauge-tile" style={{ '--slax-tone': '#576DB5' } as CSSProperties}>
          <Gauge pct={100} color="#576DB5" delay={280} />
          <div>
            <strong>24 / 7</strong>
            <span>On-call coverage</span>
            <em className="slax-gauge-live" aria-hidden="true">
              <span className="slax-gauge-live-dot" />
              live · monitoring
            </em>
          </div>
        </div>
        <div className="slax-gauge-tile" style={{ '--slax-tone': '#B38B6D' } as CSSProperties}>
          <Gauge pct={92} color="#B38B6D" delay={420} />
          <div>
            <strong>4 min</strong>
            <span>Avg dashboard refresh</span>
            <em className="slax-gauge-live" aria-hidden="true">
              <span className="slax-gauge-live-dot" />
              live · monitoring
            </em>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
