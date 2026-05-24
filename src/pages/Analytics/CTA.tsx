import { Link } from 'react-router-dom';
import { ArrowIcon } from '@/components/icons';

const CTA = () => {
  return (
    <section className="an-cta-section" id="audit">
      <div className="container-shell">
        <div className="an-cta-panel">
          <div className="an-cta-left">
            <div className="an-cta-eyebrow">
              <span className="dot" aria-hidden="true" />
              Dashboard audit · No commitment
            </div>
            <h2 className="an-cta-title">Stop trusting three different totals.</h2>
            <p className="an-cta-desc">
              Send us your current stack. We map the tracking gaps, PHI exposure, and attribution
              holes inside one working session - no slide deck, no pitch. You leave with a written
              instrumentation plan, whether or not we ever work together.
            </p>
            <div className="an-cta-ctas">
              <Link to="/free-growth-audit" className="sl-btn-primary">
                Request the audit
                <ArrowIcon />
              </Link>
              <Link to="/case-studies" className="sl-btn-ghost">
                See case studies
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

          <div className="an-cta-right">
            <div className="an-cta-stat">
              <span className="an-cta-stat-num">
                100<em>%</em>
              </span>
              <span className="an-cta-stat-lbl">Channel attribution · per dollar</span>
            </div>
            <div className="an-cta-stat">
              <span className="an-cta-stat-num">
                −85<em>%</em>
              </span>
              <span className="an-cta-stat-lbl">Reporting time saved</span>
            </div>
            <div className="an-cta-stat">
              <span className="an-cta-stat-num">
                $12<em>M+</em>
              </span>
              <span className="an-cta-stat-lbl">Healthcare revenue tracked</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
