import { Link } from 'react-router-dom';

const FinalCTA = () => {
  return (
    <section className="pr-cta" aria-labelledby="pr-cta-title">
      <div className="container-shell">
        <div className="pr-cta-card">
          <span className="pr-cta-eyebrow">Ready to Scale</span>
          <h2 id="pr-cta-title" className="pr-cta-h2">
            Let&rsquo;s build your <em>patient pipeline</em>.
          </h2>
          <p className="pr-cta-text">
            Get a free 30-minute consultation with a senior practitioner.
            We&rsquo;ll audit your current funnel, recommend the right tier for
            your scale, and outline a custom roadmap &mdash; no commitment.
          </p>
          <div className="pr-cta-actions">
            <Link to="/contact" className="pr-cta-pri">
              Book a Free Consultation
              <span className="ico" aria-hidden="true">
                <svg
                  width={14}
                  height={14}
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
              </span>
            </Link>
            <Link to="/case-studies" className="pr-cta-sec">
              View Case Studies
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
