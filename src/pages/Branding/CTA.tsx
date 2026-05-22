import { Link } from 'react-router-dom';
import { ArrowIcon } from '@/components/icons';

const CTA = () => {
  return (
    <section className="br-cta-section" id="audit">
      <div className="container-shell">
        <div className="br-cta-panel">
          <div className="br-cta-left">
            <div className="br-cta-eyebrow">
              <span className="dot" aria-hidden="true" />
              Brand pressure-test · 30 minutes
            </div>
            <h2 className="br-cta-title">
              Pressure-test your identity in one session.
            </h2>
            <p className="br-cta-desc">
              We look at your live touchpoints together - site, ads, social,
              GBP, signage, intake forms - and tell you whether you need a
              refresh, a rebuild, or just a template kit. You leave with a
              one-page verdict, whether or not we ever work together.
            </p>
            <div className="br-cta-ctas">
              <Link to="/contact" className="sl-btn-primary">
                Start the conversation
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

          <div className="br-cta-right">
            <div className="br-cta-stat">
              <span className="br-cta-stat-num">+62<em>%</em></span>
              <span className="br-cta-stat-lbl">Brand recall · 6 mo post-launch</span>
            </div>
            <div className="br-cta-stat">
              <span className="br-cta-stat-num">+38<em>%</em></span>
              <span className="br-cta-stat-lbl">Conversion lift · re-tuned creative</span>
            </div>
            <div className="br-cta-stat">
              <span className="br-cta-stat-num">40<em>+</em></span>
              <span className="br-cta-stat-lbl">Healthcare rebrands shipped</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
