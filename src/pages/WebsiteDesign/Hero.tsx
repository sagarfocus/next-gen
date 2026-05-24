import { Link } from 'react-router-dom';
import { ArrowIcon } from '@/components/icons';

const Hero = () => {
  return (
    <section className="wd-hero">
      <div className="container-shell">
        <div className="wd-hero-grid">
          <div>
            <div className="wd-hero-crumb">
              <Link to="/services">Services</Link>
              <span className="sep">/</span>
              <span className="cur">Website Design &amp; Development</span>
            </div>
            <span className="wd-hero-eyebrow">
              <span className="dot" /> Custom builds · Healthcare-only · HIPAA-aware
            </span>
            <h1 className="wd-hero-title">
              Websites that book <em>patients, not just clicks.</em>
            </h1>
            <p className="wd-hero-lede">
              We design and build fast, accessible, conversion-first websites for healthcare
              practices. Strategy, UX, design, code, content, SEO, and care plans — all under
              one roof, all measured against the same number: booked appointments.
            </p>

            <div className="wd-hero-ctas">
              <Link to="/contact" className="sl-btn-primary">
                Get my free audit
                <ArrowIcon />
              </Link>
              <a href="#process" className="sl-btn-ghost">
                See how we build
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2.4}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="7" y1="17" x2="17" y2="7" />
                  <polyline points="7 7 17 7 17 17" />
                </svg>
              </a>
            </div>

            <ul className="wd-hero-bullets">
              <li>
                <span className="wd-hero-check" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                </span>
                Sub-2-second LCP and WCAG 2.2 AA accessibility, written into the contract
              </li>
              <li>
                <span className="wd-hero-check" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                </span>
                Your code, your CMS, your domain — full ownership at handover
              </li>
              <li>
                <span className="wd-hero-check" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                </span>
                Built-in SEO, schema, and analytics from day one
              </li>
            </ul>
          </div>

          <div className="wd-hero-mock" aria-hidden="true">
            <div className="wd-hero-browser">
              <div className="wd-hero-browser-bar">
                <span className="dot r" />
                <span className="dot y" />
                <span className="dot g" />
                <div className="wd-hero-browser-url">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>
                  yourclinic.com
                </div>
              </div>
              <div className="wd-hero-browser-body">
                <div className="wd-hero-mock-hero" />
                <div className="wd-hero-mock-block b1" />
                <div className="wd-hero-mock-block b2" />
                <div className="wd-hero-mock-block b3" />
                <div className="wd-hero-mock-block b4" />
              </div>
            </div>

            <div className="wd-hero-card c1">
              <span className="lbl">LCP</span>
              <span className="val">1.4<em>s</em></span>
              <span className="dlt">−62%</span>
            </div>

            <div className="wd-hero-card c2">
              <span className="lbl">CVR</span>
              <span className="val">9.6<em>%</em></span>
              <span className="dlt">+88%</span>
            </div>

            <div className="wd-hero-tag t1">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2}><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
              Lighthouse 98
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
