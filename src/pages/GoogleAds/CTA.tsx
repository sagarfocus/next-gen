import { Link } from 'react-router-dom';
import { ArrowIcon } from '../../components/icons';

const CTA = () => {
  return (
    <section className="ga-cta-section" id="audit">
      <div className="container-shell">
        <div className="ga-cta-panel">
          <div className="ga-cta-left">
            <div className="ga-cta-eyebrow">
              <span className="dot" aria-hidden="true" />
              Free account audit · 30 minutes
            </div>
            <h2 className="ga-cta-title">
              See where your Google Ads budget is leaking.
            </h2>
            <p className="ga-cta-desc">
              We open your account live on the call, walk through the
              structure, and flag the three highest-impact fixes before we
              say a word about working together. You leave with a 1-page
              written summary - whether you sign with us or not.
            </p>
            <div className="ga-cta-ctas">
              <Link to="/contact" className="sl-btn-primary">
                Book my audit
                <ArrowIcon />
              </Link>
              <Link to="/pricing" className="sl-btn-ghost">
                See pricing
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
              </Link>
            </div>
          </div>

          <div className="ga-cta-right">
            <div className="ga-cta-stat">
              <span className="ga-cta-stat-num">4.2<em>×</em></span>
              <span className="ga-cta-stat-lbl">Avg ROAS · trailing 12 mo</span>
            </div>
            <div className="ga-cta-stat">
              <span className="ga-cta-stat-num">−42<em>%</em></span>
              <span className="ga-cta-stat-lbl">Avg CPA · first 90 days</span>
            </div>
            <div className="ga-cta-stat">
              <span className="ga-cta-stat-num">$24<em>M</em></span>
              <span className="ga-cta-stat-lbl">Healthcare ad spend managed</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
