import { Link } from 'react-router-dom';
import { PLACEHOLDER_IMAGE as ctaImg } from '@/lib/placeholderImage';
import { ArrowIcon } from '@/components/icons';

const CTA = () => (
  <section className="gtx-cta">
    <div className="gt-shell">
      <div className="gtx-cta-card">
        <div className="gtx-cta-card-img">
          <img src={ctaImg} alt="" loading="lazy" decoding="async" />
          <div className="gtx-cta-card-img-tag" aria-hidden="true">
            <span className="dot" /> SLA included in every engagement
          </div>
        </div>
        <div className="gtx-cta-card-body">
          <span className="gtx-eyebrow">
            <span className="gtx-eyebrow-dot" aria-hidden="true" />
            Next Step
          </span>
          <h2 className="gtx-cta-h">
            Want the SLA written into <em>your engagement?</em>
          </h2>
          <p>
            Every contract ships with these terms attached. Schedule a review and we'll walk through
            the redline with your legal team - line by line, before signing.
          </p>
          <Link to="/contact" className="gtx-btn-primary">
            Schedule SLA review
            <ArrowIcon />
          </Link>
        </div>
      </div>
    </div>
  </section>
);

export default CTA;
