import { Link } from 'react-router-dom';
import { ArrowIcon } from '@/components/icons';

const CTA = () => {
  return (
    <section className="ofm-cta-section" id="audit">
      <div className="container-shell">
        <div className="ofm-cta-panel">
          <div className="ofm-cta-left">
            <div className="ofm-cta-eyebrow">
              <span className="dot" aria-hidden="true" />
              Free territory walk · You keep the plan
            </div>
            <h2 className="ofm-cta-title">
              Doors open faster when someone is there to open them.
            </h2>
            <p className="ofm-cta-desc">
              We will not staff a single booth without a territory plan and a defined ROAS
              target. Book the walk, walk away with a written one-page plan and the projected
              cost per qualified lead — pilot only if the math holds up.
            </p>
            <div className="ofm-cta-ctas">
              <Link to="/contact" className="sl-btn-primary">
                Book the walk
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

          <div className="ofm-cta-right">
            <div className="ofm-cta-stat">
              <span className="ofm-cta-stat-num">4.1<em>×</em></span>
              <span className="ofm-cta-stat-lbl">Avg field ROAS · trailing 12 mo</span>
            </div>
            <div className="ofm-cta-stat">
              <span className="ofm-cta-stat-num">$68</span>
              <span className="ofm-cta-stat-lbl">Median cost per qualified lead</span>
            </div>
            <div className="ofm-cta-stat">
              <span className="ofm-cta-stat-num">320<em>+</em></span>
              <span className="ofm-cta-stat-lbl">Activations run / year</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
