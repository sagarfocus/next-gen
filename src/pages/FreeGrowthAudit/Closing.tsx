import { Link } from 'react-router-dom';
import { MotionButton } from '@/lib/motion';
import { ArrowIcon } from '@/components/icons';

const Closing = () => (
  <section className="fga-close" aria-labelledby="fga-close-title">
    <div className="container-shell">
      <div className="fga-close-card">
        <div className="fga-close-tag">
          <span className="fga-pill-dot" /> Slots open this week
        </div>
        <h2 id="fga-close-title" className="fga-close-h">
          Ready for your free
          <br />
          healthcare growth audit?
        </h2>
        <p className="fga-close-p">
          Five business days. A senior strategist. A 12-page PDF you keep, agency or not. No card,
          no upsell, no awkward sales call.
        </p>

        <MotionButton to="#audit-form" className="fga-close-cta">
          Claim my audit
          <ArrowIcon size={18} />
        </MotionButton>

        <div className="fga-close-trust">
          <span>Trusted by 200+ Texas practices</span>
          <span aria-hidden="true">·</span>
          <Link to="/case-studies">See past outcomes</Link>
        </div>
      </div>
    </div>
  </section>
);

export default Closing;
