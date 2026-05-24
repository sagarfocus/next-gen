import { Link } from 'react-router-dom';
import { ArrowIcon } from '@/components/icons';

const Hero = () => {
  return (
    <section className="ma-hero">
      <div className="container-shell">
        <div className="ma-hero-grid">
          <div>
            <div className="ma-hero-crumb">
              <Link to="/services">Services</Link>
              <span className="sep">/</span>
              <span className="cur">Meta Ads</span>
            </div>
            <span className="ma-hero-eyebrow">
              <span className="dot" /> Meta Business Partner · Healthcare-only
            </span>
            <h1 className="ma-hero-title">
              Meta Ads that book <em>patients, not just likes.</em>
            </h1>
            <p className="ma-hero-lede">
              Facebook, Instagram, Messenger, and WhatsApp campaigns built for healthcare
              practices. Compliant creative, server-side conversions, and a live dashboard
              that ties every dollar to a booked appointment. No vanity metrics. No spam
              leads. Real patients.
            </p>

            <div className="ma-hero-ctas">
              <Link to="/contact" className="sl-btn-primary">
                Book my free audit
                <ArrowIcon />
              </Link>
              <a href="#process" className="sl-btn-ghost">
                See how it works
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

            <ul className="ma-hero-bullets">
              <li>
                <span className="ma-hero-check" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                </span>
                Two-week fixed-fee audit — you keep the report
              </li>
              <li>
                <span className="ma-hero-check" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                </span>
                Conversions API + server-side tracking, HIPAA-aware
              </li>
              <li>
                <span className="ma-hero-check" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                </span>
                Month-to-month after a 90-day ramp
              </li>
            </ul>
          </div>

          <div className="ma-hero-mock" aria-hidden="true">
            <div className="ma-hero-phone">
              <div className="ma-hero-phone-screen">
                <div className="ma-hero-phone-bar">
                  <span>9:41</span>
                  <span>
                    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M2 16h20v3H2zM3 13h18v2H3zM5 10h14v2H5z" /></svg>
                  </span>
                </div>
                <div className="ma-hero-phone-head">
                  <div className="ma-hero-phone-avatar">FF</div>
                  <div className="ma-hero-phone-handle">
                    <span className="ma-hero-phone-name">focusfinance.clinic</span>
                    <span className="ma-hero-phone-sub">Sponsored</span>
                  </div>
                </div>
                <div className="ma-hero-phone-img" />
                <div className="ma-hero-phone-actions">
                  <span>Like</span>
                  <span>Share</span>
                  <span className="cta">Book →</span>
                </div>
              </div>
            </div>

            <div className="ma-hero-card c1">
              <span className="lbl">Cost / Lead</span>
              <span className="val">$18<em>.40</em></span>
              <span className="dlt">−42%</span>
            </div>

            <div className="ma-hero-card c2">
              <span className="lbl">Bookings</span>
              <span className="val">312</span>
              <span className="dlt">+68%</span>
            </div>

            <div className="ma-hero-tag t1">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2}><polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" /></svg>
              ROAS 4.6×
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
