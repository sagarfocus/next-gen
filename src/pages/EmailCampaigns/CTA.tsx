import { Link } from 'react-router-dom';
import { ArrowIcon } from '@/components/icons';

const CTA = () => {
  return (
    <section className="em-cta-section" id="audit">
      <div className="container-shell">
        <div className="em-cta-panel">
          <div className="em-cta-left">
            <div className="em-cta-eyebrow">
              <span className="dot" aria-hidden="true" />
              Free drip-engine walkthrough · 30 minutes
            </div>
            <h2 className="em-cta-title">
              Map every patient touchpoint in one session.
            </h2>
            <p className="em-cta-desc">
              We sit with you for 30 minutes, audit your current sequences,
              and identify which three drips you can ship first to move
              bookings without rebuilding the stack. You leave with a 1-page
              written plan - whether or not you ever sign with us.
            </p>
            <div className="em-cta-ctas">
              <Link to="/contact" className="sl-btn-primary">
                Book the walkthrough
                <ArrowIcon />
              </Link>
              <Link to="/case-studies" className="sl-btn-ghost">
                See case studies
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round">
                  <line x1="7" y1="17" x2="17" y2="7" />
                  <polyline points="7 7 17 7 17 17" />
                </svg>
              </Link>
            </div>
          </div>

          <div className="em-cta-right">
            <div className="em-cta-stat">
              <span className="em-cta-stat-num">68<em>%</em></span>
              <span className="em-cta-stat-lbl">Avg open rate · lifecycle drips</span>
            </div>
            <div className="em-cta-stat">
              <span className="em-cta-stat-num">47<em>+</em></span>
              <span className="em-cta-stat-lbl">Bookings / mo · attributed</span>
            </div>
            <div className="em-cta-stat">
              <span className="em-cta-stat-num">21<em>d</em></span>
              <span className="em-cta-stat-lbl">To 4 flows live · BAA-covered</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
