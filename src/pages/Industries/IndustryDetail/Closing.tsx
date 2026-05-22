import { Link } from 'react-router-dom';
import { MotionButton } from '../../../lib/motion';
import { ArrowIcon } from '../../../components/icons';
import type { IndustryDetailEntry } from '../../../content/industries/details.data';

const Closing = ({ entry }: { entry: IndustryDetailEntry }) => (
  <section className="ow-close" aria-labelledby="ind-detail-close-title">
    <div className="container-shell">
      <div className="ow-close-card ow-detail-close-card">
        <div className="ow-close-body">
          <span className="ow-pill">
            <span className="ow-pill-dot" /> Now booking · Q3 2026
          </span>
          <h2 id="ind-detail-close-title" className="ow-close-h">
            Ready to ship this playbook
            <br />
            for <em>your</em> {entry.label.toLowerCase()} practice?
          </h2>
          <p className="ow-close-p">
            The five-day audit hands you a real ranked plan for your practice -
            yours to keep, agency or not.
          </p>
          <div className="ow-close-cta">
            <MotionButton to="/free-growth-audit" className="ow-cta-primary ow-cta-primary--light">
              Get my growth audit
              <ArrowIcon />
            </MotionButton>
            <Link to="/industries" className="ow-cta-link ow-cta-link--light">
              Back to Industries
            </Link>
          </div>
        </div>
        <div className="ow-detail-close-metric" aria-hidden="true">
          <strong>{entry.metric.v}</strong>
          <span>{entry.metric.l}</span>
        </div>
      </div>
    </div>
  </section>
);

export default Closing;
