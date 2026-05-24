import { Link } from 'react-router-dom';
import { ArrowIcon } from '@/components/icons';

const CTA = () => {
  return (
    <section className="ma-cta-section" id="audit">
      <div className="container-shell">
        <div className="ma-cta-panel">
          <div className="ma-cta-left">
            <div className="ma-cta-eyebrow">
              <span className="dot" aria-hidden="true" />
              Free 2-week audit · You keep the report
            </div>
            <h2 className="ma-cta-title">
              See exactly where your Meta budget is leaking.
            </h2>
            <p className="ma-cta-desc">
              We open your Business Manager live on the call, walk through structure,
              creative, audiences, and event quality, then deliver a written one-page summary
              with the three highest-impact fixes. Whether you sign with us or not — you
              walk away with a plan.
            </p>
            <div className="ma-cta-ctas">
              <Link to="/free-growth-audit" className="sl-btn-primary">
                Book my audit
                <ArrowIcon />
              </Link>
              <Link to="/services" className="sl-btn-ghost">
                See all services
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

          <div className="ma-cta-right">
            <div className="ma-cta-stat">
              <span className="ma-cta-stat-num">4.6<em>×</em></span>
              <span className="ma-cta-stat-lbl">Avg ROAS · trailing 12 mo</span>
            </div>
            <div className="ma-cta-stat">
              <span className="ma-cta-stat-num">−42<em>%</em></span>
              <span className="ma-cta-stat-lbl">Avg CPL · first 90 days</span>
            </div>
            <div className="ma-cta-stat">
              <span className="ma-cta-stat-num">40<em>+</em></span>
              <span className="ma-cta-stat-lbl">Healthcare accounts run</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
