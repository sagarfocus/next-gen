import { Link } from 'react-router-dom';
import { ArrowIcon } from '@/components/icons';

const CTA = () => {
  return (
    <section className="mau-cta-section" id="audit">
      <div className="container-shell">
        <div className="mau-cta-panel">
          <div className="mau-cta-left">
            <div className="mau-cta-eyebrow">
              <span className="dot" aria-hidden="true" />
              Free workflow audit · You keep the report
            </div>
            <h2 className="mau-cta-title">
              See exactly where your clinic is paying staff to copy-paste.
            </h2>
            <p className="mau-cta-desc">
              A short working session where we map every system that touches a patient,
              score the three highest-yield workflows for your practice, and deliver a
              one-page automation plan with projected hours recovered. Whether you build
              with us or anyone else — you walk away with the plan.
            </p>
            <div className="mau-cta-ctas">
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

          <div className="mau-cta-right">
            <div className="mau-cta-stat">
              <span className="mau-cta-stat-num">−54<em>%</em></span>
              <span className="mau-cta-stat-lbl">Median no-show drop</span>
            </div>
            <div className="mau-cta-stat">
              <span className="mau-cta-stat-num">$32<em>k</em></span>
              <span className="mau-cta-stat-lbl">Annual ops saved · yr one</span>
            </div>
            <div className="mau-cta-stat">
              <span className="mau-cta-stat-num">99.8<em>%</em></span>
              <span className="mau-cta-stat-lbl">Audit pass rate</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
