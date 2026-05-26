import { Link } from 'react-router-dom';
import { Parallax, AnimatedBackground } from '@/lib/motion';
import { ArrowIcon } from '@/components/icons';
import industryImg from '../../assets/nextgen-image/Industryimg.png';

interface IndustriesHeroProps {
  onBook: () => void;
}

const IndustriesHero = ({ onBook }: IndustriesHeroProps) => {
  return (
    <section className="ind-hero" aria-labelledby="ind-title">
      <AnimatedBackground variant="aurora" intensity="subtle" />
      <div className="container-shell">
        <div className="ind-hero-grid">
          <div className="ind-hero-text">
            <span className="ind-eyebrow">Industries We Serve</span>
            <h1 id="ind-title" className="ind-h1">
              Healthcare marketing tailored to your <span className="accent">specialty</span>.
            </h1>
            <p className="ind-lede">
              We don&rsquo;t do generic. From freestanding ERs to MedSpas, we build
              patient-acquisition systems engineered for the specific dynamics of your vertical -
              high-acuity urgency, walk-in convenience, or longevity-driven retention.
            </p>

            <div className="ind-hero-cta">
              <Link to="/pricing" className="svc-cta-primary">
                Get an Estimated Quote
                <span className="ico" aria-hidden="true">
                  <ArrowIcon size={14} />
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
              <span className="ind-trust-label">Trusted by 200+ Texas Practices</span>
              <div className="ind-trust-stats">
                <span className="ind-trust-stat">
                  <span className="ind-trust-stat-num">3+</span>
                  <span className="ind-trust-stat-label">Specialty Verticals</span>
                </span>
                <span className="ind-trust-stat">
                  <span className="ind-trust-stat-num">$10M+</span>
                  <span className="ind-trust-stat-label">Ad Spend Managed</span>
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
                <img
                  src={industryImg}
                  alt=""
                  loading="eager"
                  decoding="async"
                  className="ind-visual-img"
                />
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
