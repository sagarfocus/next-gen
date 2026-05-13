import { Link } from 'react-router-dom';
import { Parallax } from '../../lib/motion';

interface IndustriesHeroProps {
  onBook: () => void;
}

const IndustriesHero = ({ onBook }: IndustriesHeroProps) => {
  return (
    <section className="ind-hero" aria-labelledby="ind-title">
      <div className="container-shell">
        <div className="ind-hero-grid">
          <div className="ind-hero-text">
            <span className="ind-eyebrow">Industries We Serve</span>
            <h1 id="ind-title" className="ind-h1">
              Healthcare marketing tailored to your{' '}
              <span className="accent">specialty</span>.
            </h1>
            <p className="ind-lede">
              We don&rsquo;t do generic. From freestanding ERs to MedSpas, we
              build patient-acquisition systems engineered for the specific
              dynamics of your vertical &mdash; high-acuity urgency, walk-in
              convenience, or longevity-driven retention.
            </p>

            <div className="ind-hero-cta">
              <Link to="/pricing" className="svc-cta-primary">
                Get an Estimated Quote
                <span className="ico" aria-hidden="true">
                  <svg
                    width={14}
                    height={14}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2.4}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </span>
              </Link>
              <button
                type="button"
                className="svc-cta-link"
                onClick={onBook}
                aria-haspopup="dialog"
                aria-controls="bookingModal"
              >
                Schedule a Call
                <span className="ico" aria-hidden="true">
                  <svg
                    width={12}
                    height={12}
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
                </span>
              </button>
            </div>

            <div className="ind-trust">
              <span className="ind-trust-label">
                Trusted by 200+ Texas Practices
              </span>
              <div className="ind-trust-stats">
                <span className="ind-trust-stat">
                  <span className="ind-trust-stat-num">3+</span>
                  <span className="ind-trust-stat-label">
                    Specialty Verticals
                  </span>
                </span>
                <span className="ind-trust-stat">
                  <span className="ind-trust-stat-num">$10M+</span>
                  <span className="ind-trust-stat-label">
                    Ad Spend Managed
                  </span>
                </span>
                <span className="ind-trust-stat">
                  <span className="ind-trust-stat-num">3&times;</span>
                  <span className="ind-trust-stat-label">Avg. ROI Lift</span>
                </span>
              </div>
            </div>
          </div>

          <Parallax as="div" speed={0.06} className="ind-visual" aria-hidden="true">
            <div className="ind-visual-frame">
              <div className="ind-visual-svg">
                <svg viewBox="0 0 240 240" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient id="ringGrad" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#576DB5" stopOpacity=".55" />
                      <stop offset="100%" stopColor="#8FBC8F" stopOpacity=".55" />
                    </linearGradient>
                  </defs>
                  <circle
                    cx="120"
                    cy="120"
                    r="100"
                    fill="none"
                    stroke="url(#ringGrad)"
                    strokeWidth="1"
                    strokeDasharray="3 6"
                    opacity=".5"
                  />
                  <circle
                    cx="120"
                    cy="120"
                    r="74"
                    fill="none"
                    stroke="#B38B6D"
                    strokeWidth="1"
                    strokeDasharray="2 5"
                    opacity=".55"
                  />
                  <circle
                    cx="120"
                    cy="120"
                    r="48"
                    fill="rgba(255,255,255,.85)"
                    stroke="#B38B6D"
                    strokeWidth="1.3"
                  />
                  <rect x="113" y="98" width="14" height="44" rx="2" fill="#576DB5" />
                  <rect x="98" y="113" width="44" height="14" rx="2" fill="#576DB5" />
                  <circle cx="120" cy="20" r="6" fill="#B38B6D" />
                  <circle cx="220" cy="120" r="6" fill="#8FBC8F" />
                  <circle cx="120" cy="220" r="6" fill="#576DB5" />
                  <circle cx="20" cy="120" r="6" fill="#B38B6D" />
                  <circle cx="190" cy="50" r="4" fill="#8FBC8F" />
                  <circle cx="190" cy="190" r="4" fill="#576DB5" />
                  <circle cx="50" cy="190" r="4" fill="#B38B6D" />
                  <circle cx="50" cy="50" r="4" fill="#8FBC8F" />
                </svg>
              </div>
            </div>

            <div className="ind-float-card fc1">
              <span className="fc-icon">
                <svg
                  width={18}
                  height={18}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.8}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                </svg>
              </span>
              <div className="fc-text">
                <strong>+312%</strong>
                <small>Patient leads, 90 days</small>
              </div>
            </div>

            <div className="ind-float-card fc2">
              <div className="fc2-head">Specialty Match</div>
              <div className="fc2-stat">98%</div>
              <p className="fc2-text">
                Of campaigns matched to industry-specific patient acquisition
                models.
              </p>
            </div>

            <div className="ind-float-card fc3">
              <span className="fc-icon">
                <svg
                  width={18}
                  height={18}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.8}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                </svg>
              </span>
              <div className="fc-text">
                <strong>HIPAA-Compliant</strong>
                <small>Across all verticals</small>
              </div>
            </div>
          </Parallax>
        </div>
      </div>
    </section>
  );
};

export default IndustriesHero;
