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
            <span className="dot" /> Delivered under privilege
          </div>
        </div>
        <div className="gtx-cta-card-body">
          <span className="gtx-eyebrow">
            <span className="gtx-eyebrow-dot" aria-hidden="true" />
            Next Step
          </span>
          <h2 className="gtx-cta-h">
            Start with a <em>two-week posture review.</em>
          </h2>
          <p>
            Delivered under privilege. You receive a working remediation register, ranked by
            patient-risk severity, plus a privileged memo your legal counsel can take straight to
            the practice. No marketing pitch attached.
          </p>
          <Link to="/contact" className="gtx-btn-primary">
            Request the review
            <ArrowIcon />
          </Link>
        </div>
      </div>
    </div>
  </section>
);

export default CTA;
