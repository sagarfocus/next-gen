import { Link } from 'react-router-dom';
import { Parallax, MotionButton } from '../../lib/motion';
import { ArrowIcon } from '../../components/icons';
import { IMG } from './data';

const Closing = () => (
  <section className="ow-close" aria-labelledby="ow-close-title">
    <div className="container-shell">
      <div className="ow-close-card">
        <Parallax as="div" speed={0.05} className="ow-close-img" aria-hidden="true">
          <img src={IMG.studio} alt="" loading="lazy" />
          <div className="ow-close-shade" />
        </Parallax>
        <div className="ow-close-body">
          <span className="ow-pill">
            <span className="ow-pill-dot" /> Now booking · Q3 2026
          </span>
          <h2 id="ow-close-title" className="ow-close-h">
            Want to be in this list <em>next year</em>?
          </h2>
          <p className="ow-close-p">
            We take a small number of new engagements each quarter. If your
            practice is ready, the audit gets you a real plan in five days.
          </p>
          <div className="ow-close-cta">
            <MotionButton to="/free-growth-audit" className="ow-cta-primary ow-cta-primary--light">
              Get my growth audit
              <ArrowIcon />
            </MotionButton>
            <Link to="/case-studies" className="ow-cta-link ow-cta-link--light">
              Read full case studies
            </Link>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Closing;
