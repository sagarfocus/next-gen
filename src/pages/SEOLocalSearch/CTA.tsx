import { Link } from 'react-router-dom';

const CTA = () => {
  return (
    <section className="sl-cta" id="audit">
      <div className="container-shell">
        <div className="sl-cta-panel">
          <div className="sl-cta-eyebrow">Free audit · No commitment</div>
          <h2 className="sl-cta-title">Get a 12-page audit of your practice.</h2>
          <p className="sl-cta-desc">
            Submit your website. We&rsquo;ll send back the three
            highest-leverage moves you could make this quarter - whether
            you sign with us or not.
          </p>
          <Link to="/contact" className="sl-btn-primary">
            Request my audit
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

export default CTA;
