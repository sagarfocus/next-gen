import { Link } from 'react-router-dom';
import { MotionButton } from '@/lib/motion';
import { ArrowIcon } from '@/components/icons';

const Closing = () => (
  <section className="fga-close" aria-labelledby="fga-close-title">
    <div className="container-shell">
      <div className="fga-close-card">
        <div className="fga-close-tag">
          <span className="fga-pill-dot" /> Open now
        </div>
        <h2 id="fga-close-title" className="fga-close-h">
          Want the fastest second opinion
          <br />
          in healthcare marketing?
        </h2>
        <p className="fga-close-p">
          One booking, no card. Five business days. A PDF you keep, agency or not.
        </p>
        <MotionButton to="/contact" className="fga-close-cta">
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
