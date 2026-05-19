import { Link } from 'react-router-dom';
import Breadcrumb from '../../components/Breadcrumb';
import futuristicHealthcare from '../../assets/Futuristic healthcare.png';

interface AutomationHeroProps {
  onBook: () => void;
}

const AutomationHero = ({ onBook }: AutomationHeroProps) => {
  return (
    <section className="au-hero" aria-labelledby="hero-title">
      <div className="container-shell">
        <Breadcrumb current="Automation" />
        <div className="au-hero-grid">
          <div className="reveal">
            <div className="eyebrow">
              <span className="pulse" />
              HIPAA-aware automation library
            </div>

            <h1 className="au-title" id="hero-title">
              Smarter healthcare <span className="accent">automation</span> for
              every patient touchpoint.
            </h1>

            <p className="au-lede">
              Save your front desk 20+ hours a week. Drop in battle-tested
              workflows for patient intake, reminders, reviews, insurance
              verification, and AI chat &mdash; HIPAA-aware, free, and live in
              your clinic in under an hour.
            </p>

            <div className="au-cta-row">
              <Link to="/automation/templates" className="au-btn au-btn-primary au-btn-hero">
                Get the templates
                <svg
                  width={13}
                  height={13}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2.4}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </Link>
              <button
                type="button"
                className="au-btn au-btn-ghost au-btn-hero"
                onClick={onBook}
                aria-haspopup="dialog"
                aria-controls="bookingModal"
              >
                Schedule a call
              </button>
            </div>

            <div className="au-trust">
              <span className="au-trust-label">Trusted by 350+ clinic teams</span>
              <div className="au-trust-logos" aria-label="Featured customers">
                <span>SunCrest&nbsp;Med</span>
                <span>NorthLake&nbsp;Dental</span>
                <span>VitalSpa</span>
              </div>
            </div>
          </div>

          <div className="au-hero-visual reveal d2" aria-hidden="true">
            <img
              src={futuristicHealthcare}
              alt=""
              className="h-img"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AutomationHero;
