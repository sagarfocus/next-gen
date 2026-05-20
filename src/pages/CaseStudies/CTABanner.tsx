const CTABanner = () => {
  return (
    <section className="cs-cta-banner">
      <div className="container-shell">
        <div className="ctab-grid">
          <div>
            <h2 className="ctab-title">
              Want a result like these on your practice?
            </h2>
            <p className="ctab-desc">
              Book a 30-minute strategy call. We&rsquo;ll audit your current
              funnel, share the closest case study from this library, and build
              a plan you can implement with us - or without.
            </p>
          </div>
          <a href="#book" className="ctab-btn">
            Book a strategy call
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
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
