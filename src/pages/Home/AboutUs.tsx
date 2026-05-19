import { Link } from 'react-router-dom';

import aboutImg1 from '../../assets/healthcareimg1.png';
import aboutImg2 from '../../assets/healthcareimg2.png';
import aboutImg3 from '../../assets/healthcareimg3.png';

const ArrowIcon = () => (
  <svg
    width={14}
    height={14}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <line x1="7" y1="17" x2="17" y2="7" />
    <polyline points="7 7 17 7 17 17" />
  </svg>
);

const LeafIcon = () => (
  <svg
    width={18}
    height={18}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.7}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M4 20c8 0 16-6 16-16-8 0-16 6-16 16Z" />
    <path d="M4 20c4-6 8-10 14-12" />
  </svg>
);

const ShieldIcon = () => (
  <svg
    width={20}
    height={20}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.7}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M12 3l8 3v6c0 5-3.5 8.5-8 9-4.5-.5-8-4-8-9V6l8-3z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

const TargetIcon = () => (
  <svg
    width={20}
    height={20}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.7}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="9" />
    <circle cx="12" cy="12" r="5" />
    <circle cx="12" cy="12" r="1.6" fill="currentColor" />
  </svg>
);

const AboutUs = () => {
  return (
    <section
      className="ah-section"
      id="about-us"
      aria-labelledby="ah-title"
    >
      <div className="container-shell">
        <span className="ah-eyebrow">About Us</span>

        {/* ROW 1 — Title left, trust meta above paragraph on right */}
        <div className="ah-intro">
          <div className="ah-intro-left">
            <h2 id="ah-title" className="ah-title">
              Built for the healthcare practices ready to grow.
            </h2>
          </div>
          <div className="ah-intro-right">
            <div className="ah-intro-meta">
              <div className="ah-avatars" aria-hidden="true">
                <span className="ah-avatar" />
                <span className="ah-avatar" />
                <span className="ah-avatar" />
              </div>
              <div className="ah-intro-stat">
                <span className="ah-intro-stat-num">200+</span>
                <span className="ah-intro-stat-lbl">Partner Practices</span>
              </div>
            </div>
            <p className="ah-intro-text">
              We help healthcare practices grow faster with marketing systems
              built specifically for clinics, medspas, and wellness brands
              &mdash; HIPAA-aware, ROI-tracked, and engineered to compound
              month over month so your patient pipeline never goes quiet.
            </p>
          </div>
        </div>

        {/* ROW 2 — Gallery with feature card and floating overlays */}
        <div className="ah-gallery">
          <div className="ah-gallery-left">
            <div className="ah-img ah-img-secondary">
              <img src={aboutImg1} alt="" loading="lazy" decoding="async" />
            </div>
            <article className="ah-feature">
              <span className="ah-feature-icon" aria-hidden="true">
                <LeafIcon />
              </span>
              <h3 className="ah-feature-title">Healthcare Growth Engine</h3>
              <p className="ah-feature-desc">
                Integrated SEO, paid media, and automation &mdash; every
                channel optimized for patient acquisition and retention.
              </p>
              <Link
                to="/about"
                className="ah-feature-arrow"
                aria-label="Learn more about our growth engine"
              >
                <ArrowIcon />
              </Link>
            </article>
          </div>

          <div className="ah-gallery-right">
            <div className="ah-img ah-img-hero">
              <img src={aboutImg2} alt="" loading="lazy" decoding="async" />
              <div className="ah-float-stat" aria-hidden="false">
                <span className="ah-float-stat-num">120+</span>
                <span className="ah-float-stat-lbl">Programs Launched</span>
              </div>
              <Link to="/about" className="ah-float-link">
                Learn More
                <span className="ah-float-link-ico" aria-hidden="true">
                  <ArrowIcon />
                </span>
              </Link>
            </div>
          </div>
        </div>

        {/* ROW 3 — Collaboration block */}
        <div className="ah-collab">
          <div className="ah-collab-left">
            <h3 className="ah-collab-title">
              Collaborate to build a patient-first growth system.
            </h3>
            <p className="ah-collab-text">
              We embed inside your team so strategy, execution, and reporting
              move as one. Every decision is grounded in patient data and
              real revenue impact &mdash; not vanity metrics.
            </p>
            <div className="ah-pillars">
              <article className="ah-pillar">
                <span className="ah-pillar-icon" aria-hidden="true">
                  <ShieldIcon />
                </span>
                <div className="ah-pillar-body">
                  <h4 className="ah-pillar-title">Built With Expert Strategy</h4>
                  <p className="ah-pillar-desc">
                    Senior healthcare strategists owning every roadmap.
                  </p>
                </div>
              </article>
              <article className="ah-pillar">
                <span className="ah-pillar-icon" aria-hidden="true">
                  <TargetIcon />
                </span>
                <div className="ah-pillar-body">
                  <h4 className="ah-pillar-title">Focused on Revenue</h4>
                  <p className="ah-pillar-desc">
                    Appointments, retention, and patient lifetime value.
                  </p>
                </div>
              </article>
            </div>
          </div>

          <div className="ah-collab-right">
            <div className="ah-img ah-img-hero">
              <img src={aboutImg3} alt="" loading="lazy" decoding="async" />
              <div className="ah-float-quote">
                <h4 className="ah-float-quote-title">
                  Collaboration is the Key of Success
                </h4>
                <p className="ah-float-quote-text">
                  Embedded growth partners &mdash; not vendors.
                </p>
              </div>
              <Link to="/about" className="ah-cta">
                More About Us
                <span className="ah-cta-ico" aria-hidden="true">
                  <ArrowIcon />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
