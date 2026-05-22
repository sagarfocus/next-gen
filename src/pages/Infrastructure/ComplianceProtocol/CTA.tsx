import { Link } from 'react-router-dom';

import ctaImg from '../../../assets/built-for-clinic.png';
import { ArrowIcon } from '@/components/icons';

const CTA = () => (
  <section className="gtx-cta">
    <div className="gt-shell">
      <div className="gtx-cta-card">
        <div className="gtx-cta-card-img">
          <img src={ctaImg} alt="" loading="lazy" decoding="async" />
          <div className="gtx-cta-card-img-tag" aria-hidden="true">
            <span className="dot" /> Documentation available on request
          </div>
        </div>
        <div className="gtx-cta-card-body">
          <span className="gtx-eyebrow">
            <span className="gtx-eyebrow-dot" aria-hidden="true" />
            Next Step
          </span>
          <h2 className="gtx-cta-h">
            Want the full <em>documentation pack?</em>
          </h2>
          <p>
            Includes our BAA template, vendor registry, incident response
            runbook, and the latest independent compliance audit - delivered
            to your legal team within one business day.
          </p>
          <Link to="/contact" className="gtx-btn-primary">
            Request documentation
            <ArrowIcon />
          </Link>
        </div>
      </div>
    </div>
  </section>
);

export default CTA;
