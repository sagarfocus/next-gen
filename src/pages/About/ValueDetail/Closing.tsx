import { Link } from 'react-router-dom';
import { MotionButton } from '../../../lib/motion';
import { ArrowIcon } from '../../../components/icons';
import type { ValueEntry } from '../../../content/about/values.data';

const Closing = ({ entry }: { entry: ValueEntry }) => (
  <section className="ow-close" aria-labelledby="ab-value-close-title">
    <div className="container-shell">
      <div className="ow-close-card ow-detail-close-card">
        <div className="ow-close-body">
          <span className="ow-pill">
            <span className="ow-pill-dot" /> Open for new engagements
          </span>
          <h2 id="ab-value-close-title" className="ow-close-h">
            Want a marketing partner
            <br />
            who works <em>this way</em>?
          </h2>
          <p className="ow-close-p">
            Start with the five-day audit. A real ranked plan for your practice,
            yours to keep — held to the same principles you just read.
          </p>
          <div className="ow-close-cta">
            <MotionButton to="/free-growth-audit" className="ow-cta-primary ow-cta-primary--light">
              Get my growth audit
              <ArrowIcon />
            </MotionButton>
            <Link to="/about" className="ow-cta-link ow-cta-link--light">
              Back to About
            </Link>
          </div>
        </div>
        <div className="ow-detail-close-metric" aria-hidden="true">
          <strong>{entry.proof.v}</strong>
          <span>{entry.proof.l}</span>
        </div>
      </div>
    </div>
  </section>
);

export default Closing;
