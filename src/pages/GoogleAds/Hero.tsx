import { Link } from 'react-router-dom';
import { ArrowIcon } from '@/components/icons';

const Hero = () => {
  return (
    <section className="ga-hero">
      <div className="container-shell">
        <div className="ga-hero-grid">
          <div>
            <div className="ga-hero-crumb">
              <Link to="/services">Services</Link>
              <span className="sep">/</span>
              <span className="cur">Google Ads</span>
            </div>
            <span className="ga-hero-eyebrow">
              <span className="dot" /> Google Partner · Healthcare-only
            </span>
            <h1 className="ga-hero-title">
              Google Ads that fills <em>chairs, not just clicks.</em>
            </h1>
            <p className="ga-hero-lede">
              Search, Performance Max, Display, YouTube, Shopping, and Local
              Services Ads - run by a healthcare-only PPC team that treats
              your budget like it&rsquo;s their own. HIPAA-aware tracking,
              live ROAS dashboard, named lead.
            </p>

            <div className="ga-hero-ctas">
              <Link to="/free-growth-audit" className="sl-btn-primary">
                Get a free account audit
                <ArrowIcon />
              </Link>
              <a href="#campaign-types" className="sl-btn-ghost">
                See campaign types
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

            <ul className="ga-hero-bullets">
              <li>
                <span className="ga-hero-check" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                </span>
                30-minute audit, no slide deck
              </li>
              <li>
                <span className="ga-hero-check" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                </span>
                HIPAA-aware conversion tracking
              </li>
              <li>
                <span className="ga-hero-check" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                </span>
                Month-to-month after a 90-day ramp
              </li>
            </ul>
          </div>

          <div className="ga-hero-mock" aria-hidden="true">
            <div className="ga-hero-mock-window">
              <div className="ga-hero-mock-bar">
                <span className="dot r" />
                <span className="dot y" />
                <span className="dot g" />
                <div className="ga-hero-mock-url">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><rect x="3" y="4" width="18" height="14" rx="2" /><line x1="3" y1="9" x2="21" y2="9" /></svg>
                  ads.google.com — Performance overview
                </div>
              </div>

              <div className="ga-hero-mock-body">
                <div className="ga-hero-mock-tabs">
                  <span className="ga-hero-mock-tab active">All campaigns</span>
                  <span className="ga-hero-mock-tab">Search</span>
                  <span className="ga-hero-mock-tab">PMax</span>
                  <span className="ga-hero-mock-tab">YouTube</span>
                </div>

                <div className="ga-hero-mock-row">
                  <div className="ga-hero-mock-kpi">
                    <span className="lbl">ROAS</span>
                    <span className="val">4.2<em>×</em></span>
                    <span className="dlt up">+38%</span>
                  </div>
                  <div className="ga-hero-mock-kpi">
                    <span className="lbl">CPA</span>
                    <span className="val">$28<em>.40</em></span>
                    <span className="dlt up">−42%</span>
                  </div>
                  <div className="ga-hero-mock-kpi">
                    <span className="lbl">Conversions</span>
                    <span className="val">1,284</span>
                    <span className="dlt up">+62%</span>
                  </div>
                </div>

                <div className="ga-hero-mock-chart">
                  <div className="ga-hero-mock-chart-head">
                    <span>Weekly performance</span>
                    <span className="legend"><i className="b1" /> Conversions · <i className="b2" /> Cost</span>
                  </div>
                  <div className="ga-hero-mock-bars">
                    {[35, 48, 42, 65, 58, 78, 72, 90].map((h, i) => (
                      <div key={i} className="ga-hero-mock-barcol">
                        <span className="b b1" style={{ height: `${h}%` }} />
                        <span className="b b2" style={{ height: `${h * 0.6}%` }} />
                      </div>
                    ))}
                  </div>
                </div>

                <div className="ga-hero-mock-keys">
                  <div className="ga-hero-mock-key">
                    <span className="ico">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>
                    </span>
                    <span className="kw">emergency dentist near me</span>
                    <span className="met">CTR 14.2%</span>
                  </div>
                  <div className="ga-hero-mock-key">
                    <span className="ico">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>
                    </span>
                    <span className="kw">urgent care saturday</span>
                    <span className="met">CTR 11.8%</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="ga-hero-tag t1">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2}><polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" /></svg>
              ROAS 4.2×
            </div>
            <div className="ga-hero-tag t2">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2}><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
              Quality Score 9/10
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
