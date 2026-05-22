import { Link } from 'react-router-dom';
import { ArrowIcon } from '@/components/icons';

const Hero = () => {
  return (
    <section className="sl-hero">
      <div className="container-shell">
        <div className="sl-hero-grid">
          <div>
            <div className="sl-hero-crumb">
              <Link to="/services">Services</Link>
              <span className="sep">/</span>
              <span className="cur">SEO &amp; Local Search</span>
            </div>
            <h1 className="sl-hero-title">
              SEO that fills your <em>waiting room.</em>
            </h1>
            <p className="sl-hero-lede">
              Healthcare-only SEO and local search. Built around how patients
              actually look for clinics - and how Google decides who
              shows up first.
            </p>
            <div className="sl-hero-ctas">
              <a href="#audit" className="sl-btn-primary">
                Get a free audit
                <ArrowIcon />
              </a>
              <a href="#method" className="sl-btn-ghost">
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
          </div>

          <div className="sl-h3d" aria-hidden="true">
            <div className="sl-h3d-metric">
              <div className="sl-h3d-metric-row">
                <div className="sl-h3d-metric-icon">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2.2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
                    <polyline points="17 6 23 6 23 12" />
                  </svg>
                </div>
                <div>
                  <div className="sl-h3d-metric-num">
                    +47<em>%</em>
                  </div>
                  <div className="sl-h3d-metric-label">Bookings · 30d</div>
                </div>
              </div>
            </div>

            <div className="sl-h3d-keyword">
              <span className="arrow-up">↑</span>
              "dentist near me" · #1
            </div>

            <div className="sl-h3d-main">
              <div className="sl-h3d-search">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
                <span className="sl-h3d-search-text">
                  urgent care near me
                  <span className="sl-h3d-search-cursor" />
                </span>
              </div>

              <div className="sl-h3d-pack-tag">Map Pack · Top 3</div>
              <div className="sl-h3d-map">
                <div className="sl-h3d-pin you" />
                <div className="sl-h3d-pin b" />
                <div className="sl-h3d-pin c" />
              </div>

              <div className="sl-h3d-list">
                <div className="sl-h3d-row">
                  <div className="sl-h3d-rank you">1</div>
                  <div className="sl-h3d-row-text">
                    <div className="sl-h3d-row-name you">Your Clinic</div>
                    <div className="sl-h3d-row-meta">
                      <span className="sl-h3d-stars">★ 4.9</span> · 0.4 mi · Open now
                    </div>
                  </div>
                  <div className="sl-h3d-row-tick">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={3}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                </div>
                <div className="sl-h3d-row">
                  <div className="sl-h3d-rank">2</div>
                  <div className="sl-h3d-row-text">
                    <div className="sl-h3d-row-name">Hospital Network</div>
                    <div className="sl-h3d-row-meta">
                      <span className="sl-h3d-stars">★ 4.2</span> · 0.8 mi
                    </div>
                  </div>
                </div>
                <div className="sl-h3d-row">
                  <div className="sl-h3d-rank">3</div>
                  <div className="sl-h3d-row-text">
                    <div className="sl-h3d-row-name">Big Chain Urgent</div>
                    <div className="sl-h3d-row-meta">
                      <span className="sl-h3d-stars">★ 4.5</span> · 1.2 mi
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="sl-h3d-rank-badge">
              <div className="sl-h3d-rank-icon">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2.2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polygon points="12 2 14.5 9 21 9.5 16 14 17.5 21 12 17.5 6.5 21 8 14 3 9.5 9.5 9" />
                </svg>
              </div>
              <div>
                <div className="sl-h3d-rank-num">#1</div>
                <div className="sl-h3d-rank-label">Local Pack</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
