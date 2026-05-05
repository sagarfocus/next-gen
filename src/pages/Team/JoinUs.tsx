import { Link } from 'react-router-dom';

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
              moves &mdash; whether you sign with us or not.
            </p>
            <Link to="/contact" className="tm-cta-link">
              Book a strategy call
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.8}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinUs;
