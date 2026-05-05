import { Link } from 'react-router-dom';

const ServiceCTA = () => {
  return (
    <section className="sv-cta" id="audit">
      <div className="container-shell">
        <div className="sv-cta-panel">
          <div className="sv-cta-eyebrow">Free audit · No commitment</div>
          <h2 className="sv-cta-title">Let&rsquo;s make this work.</h2>
          <p className="sv-cta-desc">
            A 30-minute call. We&rsquo;ll audit your current setup and share
            the closest case study from this library &mdash; whether you sign
            with us or not.
          </p>
          <Link to="/contact" className="sv-btn-primary">
            Book Strategy Call
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2.4}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServiceCTA;
