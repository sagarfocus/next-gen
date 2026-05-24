import { Link } from 'react-router-dom';
import { ArrowIcon } from '@/components/icons';

const Hero = () => {
  return (
    <section className="ofm-hero">
      <div className="container-shell">
        <div className="ofm-hero-grid">
          <div>
            <div className="ofm-hero-crumb">
              <Link to="/services">Services</Link>
              <span className="sep">/</span>
              <span className="cur">Onsite Field Marketing</span>
            </div>
            <span className="ofm-hero-eyebrow">
              <span className="dot" /> In-Person · Healthcare-only · DFW + 4 metros
            </span>
            <h1 className="ofm-hero-title">
              Field marketing that books <em>patients on the calendar.</em>
            </h1>
            <p className="ofm-hero-lede">
              Booths, referral visits, sponsorships, and door-drops — staffed by trained
              ambassadors and attributed end-to-end. Healthcare grows where doors open
              in person; we run the door and put the numbers on a dashboard you can defend.
            </p>

            <div className="ofm-hero-ctas">
              <Link to="/contact" className="sl-btn-primary">
                Book my field audit
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

            <ul className="ofm-hero-bullets">
              <li>
                <span className="ofm-hero-check" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                </span>
                Activated booth in eleven days from signed contract
              </li>
              <li>
                <span className="ofm-hero-check" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                </span>
                HIPAA-aware tablet intake with live CRM sync
              </li>
              <li>
                <span className="ofm-hero-check" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                </span>
                Zero safety incidents across 320+ activations
              </li>
            </ul>
          </div>

          <div className="ofm-hero-mock" aria-hidden="true">
            <div className="ofm-hero-map">
              <div className="ofm-hero-pin p1">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="4" /></svg>
              </div>
              <div className="ofm-hero-pin p2">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 22 22 2 22" /></svg>
              </div>
              <div className="ofm-hero-pin p3">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="16" height="16" rx="2" /></svg>
              </div>
            </div>

            <div className="ofm-hero-card c1">
              <span className="lbl">Activations · YTD</span>
              <span className="val">147</span>
              <span className="dlt">+34%</span>
            </div>

            <div className="ofm-hero-card c2">
              <span className="lbl">Cost / Lead</span>
              <span className="val">$68</span>
              <span className="dlt">−28%</span>
            </div>

            <div className="ofm-hero-tag t1">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2}><polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" /></svg>
              ROAS 4.1×
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
