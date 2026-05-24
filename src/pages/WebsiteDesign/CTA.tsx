import { Link } from 'react-router-dom';
import { ArrowIcon } from '@/components/icons';

const CTA = () => {
  return (
    <section className="wd-cta-section" id="audit">
      <div className="container-shell">
        <div className="wd-cta-panel">
          <div className="wd-cta-left">
            <div className="wd-cta-eyebrow">
              <span className="dot" aria-hidden="true" />
              Free build readiness audit · You keep the report
            </div>
            <h2 className="wd-cta-title">
              See exactly what your next website has to clear.
            </h2>
            <p className="wd-cta-desc">
              A short call where we open your current site live, score it against Core Web
              Vitals, accessibility, schema, and conversion patterns — then hand you the
              one-page gap list. Whether you build with us or anyone else, you walk away
              with the plan.
            </p>
            <div className="wd-cta-ctas">
              <Link to="/free-growth-audit" className="sl-btn-primary">
                Get the gap list
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

          <div className="wd-cta-right">
            <div className="wd-cta-stat">
              <span className="wd-cta-stat-num">1.4<em>s</em></span>
              <span className="wd-cta-stat-lbl">Median LCP at launch</span>
            </div>
            <div className="wd-cta-stat">
              <span className="wd-cta-stat-num">+88<em>%</em></span>
              <span className="wd-cta-stat-lbl">Avg booking CVR lift</span>
            </div>
            <div className="wd-cta-stat">
              <span className="wd-cta-stat-num">40<em>+</em></span>
              <span className="wd-cta-stat-lbl">Healthcare sites shipped</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
