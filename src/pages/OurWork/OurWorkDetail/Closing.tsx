import { Link } from 'react-router-dom';
import { MotionButton } from '../../../lib/motion';
import { ArrowIcon } from '../../../components/icons';
import { type DetailEntry } from '../details.data';

const Closing = ({ entry }: { entry: DetailEntry }) => (
  <section className="ow-close" aria-labelledby="ow-detail-close-title">
    <div className="container-shell">
      <div className="ow-close-card ow-detail-close-card">
        <div className="ow-close-body">
          <span className="ow-pill">
            <span className="ow-pill-dot" /> Now booking · Q3 2026
          </span>
          <h2 id="ow-detail-close-title" className="ow-close-h">
            Ready to ship this work
            <br />
            for <em>your</em> practice?
          </h2>
          <p className="ow-close-p">
            We take a small number of new engagements each quarter. The five-day audit
            gets you a real, ranked plan - yours to keep, agency or not.
          </p>
          <div className="ow-close-cta">
            <MotionButton to="/free-growth-audit" className="ow-cta-primary ow-cta-primary--light">
              Get my growth audit
              <ArrowIcon />
            </MotionButton>
            <Link to="/our-work" className="ow-cta-link ow-cta-link--light">
              Back to Our Work
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
