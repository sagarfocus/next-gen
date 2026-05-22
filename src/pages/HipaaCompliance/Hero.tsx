import { Link } from 'react-router-dom';
import heroImg from '../../assets/healthcare-6.png';
import { ArrowIcon } from '@/components/icons';

const Hero = () => (
  <section className="gtx-hero">
    <div className="gt-shell">
      <nav className="gtx-crumb" aria-label="Breadcrumb">
        <Link to="/">Home</Link>
        <span aria-hidden="true">/</span>
        <Link to="/services">Services</Link>
        <span aria-hidden="true">/</span>
        <span className="cur">HIPAA Compliance</span>
      </nav>

      <div className="gtx-hero-grid">
        <div className="gtx-hero-content">
          <span className="gtx-eyebrow">
            <span className="gtx-eyebrow-dot" aria-hidden="true" />
            HIPAA + HITECH · 2026
          </span>
          <h1 className="gtx-hero-title">
            Marketing,
            <em> under HIPAA.</em>
          </h1>
          <p className="gtx-hero-lede">
            HIPAA is not a checkbox. It is a working discipline that
            touches every system a patient inquiry passes through.
            Here is how we organise it - from forms and hosting to
            ad platforms and analytics.
          </p>
          <div className="gtx-hero-ctas">
            <Link to="/contact" className="gtx-btn-primary">
              Request a posture review
              <ArrowIcon />
            </Link>
            <Link to="/services" className="gtx-btn-link">
              View all services →
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

      <ul className="hcp-credentials">
        <li className="hcp-cred tone-sage">
          <div className="hcp-cred-head">
            <span className="hcp-cred-icon" aria-hidden="true">
              <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2 L 4 6 V 12 C 4 16.5 7.5 20.7 12 22 C 16.5 20.7 20 16.5 20 12 V 6 Z" />
                <path d="M9 12 L 11 14 L 15 10" />
              </svg>
            </span>
            <span className="hcp-cred-num">/01</span>
          </div>
          <div className="hcp-cred-body">
            <span className="hcp-cred-label">Framework</span>
            <strong className="hcp-cred-value">HIPAA + HITECH</strong>
          </div>
          <span className="hcp-cred-seal" aria-hidden="true">CERTIFIED</span>
        </li>

        <li className="hcp-cred tone-periwinkle">
          <div className="hcp-cred-head">
            <span className="hcp-cred-icon" aria-hidden="true">
              <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 12a9 9 0 1 0 3-6.7" />
                <path d="M3 4v5h5" />
              </svg>
            </span>
            <span className="hcp-cred-num">/02</span>
          </div>
          <div className="hcp-cred-body">
            <span className="hcp-cred-label">Review cadence</span>
            <strong className="hcp-cred-value">Annually</strong>
          </div>
          <span className="hcp-cred-seal" aria-hidden="true">EXTERNAL</span>
        </li>

        <li className="hcp-cred tone-tan">
          <div className="hcp-cred-head">
            <span className="hcp-cred-icon" aria-hidden="true">
              <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" />
                <path d="M14 3v5h5" />
                <path d="M9 13l2 2 4-4" />
              </svg>
            </span>
            <span className="hcp-cred-num">/03</span>
          </div>
          <div className="hcp-cred-body">
            <span className="hcp-cred-label">Hosting + every vendor</span>
            <strong className="hcp-cred-value">BAA-covered</strong>
          </div>
          <span className="hcp-cred-seal" aria-hidden="true">SIGNED</span>
        </li>

        <li className="hcp-cred tone-ink">
          <div className="hcp-cred-head">
            <span className="hcp-cred-icon" aria-hidden="true">
              <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="5" width="18" height="16" rx="2" />
                <path d="M3 10h18M8 3v4M16 3v4" />
              </svg>
            </span>
            <span className="hcp-cred-num">/04</span>
          </div>
          <div className="hcp-cred-body">
            <span className="hcp-cred-label">Last independent audit</span>
            <strong className="hcp-cred-value">Mar 2026</strong>
          </div>
          <span className="hcp-cred-seal" aria-hidden="true">VERIFIED</span>
        </li>
      </ul>
    </div>
  </section>
);

export default Hero;
