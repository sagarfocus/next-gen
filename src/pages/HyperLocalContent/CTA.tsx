import { Link } from 'react-router-dom';

import ctaImg from '../../assets/healthcare-7.png';
import { ArrowIcon } from '@/components/icons';
import { PinIcon, CompassIcon } from './icons';

const CTA = () => (
  <section className="hlc-cta">
    <div className="hlc-shell">
      <div className="hlc-cta-card">
        <div className="hlc-cta-card-img">
          <img src={ctaImg} alt="" loading="lazy" decoding="async" />
          <span className="hlc-cta-card-tag" aria-hidden="true">
            <PinIcon size={12} />
            Two-week deliverable
          </span>
        </div>
        <div className="hlc-cta-card-body">
          <span className="hlc-eyebrow">
            <CompassIcon size={12} />
            The Audit
          </span>
          <h2 className="hlc-cta-title">
            Find the neighbourhoods <em>you are invisible in.</em>
          </h2>
          <p className="hlc-cta-text">
            The audit identifies the municipalities your practice already
            draws from but does not rank for, scored against expected query
            volume. Use it to commission a build - or keep the findings
            as a working SEO roadmap.
          </p>
          <div className="hlc-cta-ctas">
            <Link to="/contact" className="hlc-btn-primary">
              Request the audit
              <ArrowIcon />
            </Link>
            <Link to="/services/seo" className="hlc-btn-link">
              View the SEO programme →
            </Link>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default CTA;
