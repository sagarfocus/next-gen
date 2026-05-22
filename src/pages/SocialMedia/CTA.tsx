import { Link } from 'react-router-dom';
import { ArrowIcon } from '@/components/icons';

const CTA = () => {
  return (
    <section className="sm-cta-section" id="audit">
      <div className="container-shell">
        <div className="sm-cta-panel">
          <div className="sm-cta-left">
            <div className="sm-cta-eyebrow">
              <span className="dot" aria-hidden="true" />
              Free cadence call · 30 minutes
            </div>
            <h2 className="sm-cta-title">
              Pick the two channels worth your team&rsquo;s time.
            </h2>
            <p className="sm-cta-desc">
              We open your current channels live on the call, look at your
              audience signals and clinical voice, and tell you which two to
              commit to before next quarter. You leave with a 1-page written
              cadence plan - whether you sign with us or not.
            </p>
            <div className="sm-cta-ctas">
              <Link to="/contact" className="sl-btn-primary">
                Book the cadence call
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

          <div className="sm-cta-right">
            <div className="sm-cta-stat">
              <span className="sm-cta-stat-num">312<em>%</em></span>
              <span className="sm-cta-stat-lbl">Avg reach lift · first 90 days</span>
            </div>
            <div className="sm-cta-stat">
              <span className="sm-cta-stat-num">5.8<em>%</em></span>
              <span className="sm-cta-stat-lbl">Engagement rate · vs. 1.2% industry</span>
            </div>
            <div className="sm-cta-stat">
              <span className="sm-cta-stat-num">120<em>+</em></span>
              <span className="sm-cta-stat-lbl">Healthcare accounts managed</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
