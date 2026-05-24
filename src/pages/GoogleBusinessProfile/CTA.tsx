import { Link } from 'react-router-dom';
import { ArrowIcon } from '@/components/icons';

const CTA = () => {
  return (
    <section className="gb-cta-section" id="audit">
      <div className="container-shell">
        <div className="gb-cta-panel">
          <div className="gb-cta-left">
            <div className="gb-cta-eyebrow">
              <span className="dot" aria-hidden="true" />
              Free GBP health check · 3 business days
            </div>
            <h2 className="gb-cta-title">
              Score every location&rsquo;s profile against the five vectors.
            </h2>
            <p className="gb-cta-desc">
              Send us the profiles you manage. We hand back a scored gap report inside three
              business days - completeness, categories, reviews, photos, activity - per location.
              Yours to keep, whether or not we ever work together.
            </p>
            <div className="gb-cta-ctas">
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

          <div className="gb-cta-right">
            <div className="gb-cta-stat">
              <span className="gb-cta-stat-num">#1</span>
              <span className="gb-cta-stat-lbl">Avg map-pack position · primary keywords</span>
            </div>
            <div className="gb-cta-stat">
              <span className="gb-cta-stat-num">
                218<em>%</em>
              </span>
              <span className="gb-cta-stat-lbl">Direction-request lift · first 90 days</span>
            </div>
            <div className="gb-cta-stat">
              <span className="gb-cta-stat-num">
                110<em>+</em>
              </span>
              <span className="gb-cta-stat-lbl">Healthcare locations managed</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
