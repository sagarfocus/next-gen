import { Link } from 'react-router-dom';
import { ArrowIcon } from '@/components/icons';

const CTA = () => {
  return (
    <section className="cm-cta-section" id="audit">
      <div className="container-shell">
        <div className="cm-cta-panel">
          <div className="cm-cta-left">
            <div className="cm-cta-eyebrow">
              <span className="dot" aria-hidden="true" />
              Editorial planning session · 30 minutes
            </div>
            <h2 className="cm-cta-title">
              One quarter of content, mapped in 30 minutes.
            </h2>
            <p className="cm-cta-desc">
              Bring your top three service lines - we walk out with a
              quarter&rsquo;s worth of pillar topics, the supporting cluster
              for each, and the AEO surface every article needs to capture.
              You leave with the plan, even if we never publish a word for
              you.
            </p>
            <div className="cm-cta-ctas">
              <Link to="/contact" className="sl-btn-primary">
                Map the quarter
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

          <div className="cm-cta-right">
            <div className="cm-cta-stat">
              <span className="cm-cta-stat-num">14.2<em>K</em></span>
              <span className="cm-cta-stat-lbl">Monthly organic · post month-6 ramp</span>
            </div>
            <div className="cm-cta-stat">
              <span className="cm-cta-stat-num">#3</span>
              <span className="cm-cta-stat-lbl">Avg SERP position · primary keywords</span>
            </div>
            <div className="cm-cta-stat">
              <span className="cm-cta-stat-num">90<em>+</em></span>
              <span className="cm-cta-stat-lbl">Healthcare content programs run</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
