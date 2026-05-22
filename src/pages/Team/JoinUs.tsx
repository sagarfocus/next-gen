import { Link } from 'react-router-dom';
import { ArrowIcon } from '../../components/icons';

const JoinUs = () => {
  return (
    <section className="tm-section tm-cta">
      <div className="container-shell">
        <div className="tm-marker">
          <span className="tm-marker-num">04</span>
          <span>Engage</span>
          <span className="tm-marker-line" />
          <span className="tm-marker-meta">Free 30-min call</span>
        </div>

        <div className="tm-cta-grid">
          <h2 className="tm-cta-h2">
            Want this team on <em>your practice?</em>
          </h2>
          <div className="tm-cta-aside">
            <p className="tm-cta-text">
              Every engagement starts with a free 30-minute strategy call. We
              audit your current funnel and walk away with three concrete
              moves - whether you sign with us or not.
            </p>
            <Link to="/contact" className="tm-cta-link">
              Book a strategy call
              <ArrowIcon strokeWidth={1.8} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinUs;
