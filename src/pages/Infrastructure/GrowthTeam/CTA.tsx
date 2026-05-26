import { Link } from 'react-router-dom';

import collabImg from '@/assets/nextgen-image/Ouradvantageimg1.png';
import { ArrowIcon } from '@/components/icons';

const CTA = () => (
  <section className="gtx-cta">
    <div className="gt-shell">
      <div className="gtx-cta-card">
        <div className="gtx-cta-card-img">
          <img src={collabImg} alt="" loading="lazy" decoding="async" />
          <div className="gtx-cta-card-img-tag" aria-hidden="true">
            <span className="dot" /> Open for new engagements
          </div>
        </div>
        <div className="gtx-cta-card-body">
          <span className="gtx-eyebrow">
            <span className="gtx-eyebrow-dot" aria-hidden="true" />
            Next Step
          </span>
          <h2 className="gtx-cta-h">
            Want to meet the team that would <em>run your account?</em>
          </h2>
          <p>
            A 30-minute call. We introduce the senior specialists who would be assigned to your
            practice - by name, by hours, by responsibility. No pitch deck.
          </p>
          <Link to="/contact" className="gtx-btn-primary">
            Schedule the introduction
            <ArrowIcon />
          </Link>
        </div>
      </div>
    </div>
  </section>
);

export default CTA;
