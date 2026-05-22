import { Link } from 'react-router-dom';
import { ArrowIcon } from '../../../components/icons';

const CTABanner = () => (
  <section className="atx-cta" aria-labelledby="atx-cta-title">
    <div className="container-shell">
      <div className="atx-cta-frame">
        <div className="atx-cta-copy">
          <span className="atx-cta-eyebrow"><span className="atx-eyebrow-dot" />Need one we have not built?</span>
          <h2 id="atx-cta-title" className="atx-cta-h2">Book a 15-minute build session.</h2>
          <p className="atx-cta-text">
            Free, no pitch. We scope the workflow on the call and ship the
            spec the same week — yours to keep, agency or not.
          </p>
        </div>
        <div className="atx-cta-actions">
          <Link to="/free-growth-audit" className="atx-btn atx-btn-primary">Book the session <ArrowIcon size={14} /></Link>
          <Link to="/automation" className="atx-btn atx-btn-ghost">Back to Automation</Link>
        </div>
      </div>
    </div>
  </section>
);

export default CTABanner;
