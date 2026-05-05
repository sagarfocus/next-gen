const FeaturedCase = () => {
  return (
    <section className="feat-cs">
      <div className="container-shell">
        <div className="feat-row">
          <a className="all-pill" href="#cs-all">
            <span className="all-pill-icon">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2.4}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="7" y1="17" x2="17" y2="7" />
                <polyline points="7 7 17 7 17 17" />
              </svg>
            </span>
            All Cases
          </a>
          <h2 className="feat-title">Our Featured Case Study</h2>
        </div>

        <article className="feat-card">
          <div className="feat-meta">
            <div>
              <div className="feat-date">
                07<small>May</small>
              </div>
              <h3 className="feat-headline">
                A Texas ER doubled patient acquisition without raising ad spend
              </h3>
              <p className="feat-lede">
                The full breakdown of how a freestanding emergency room in
                Dallas Metro outranked a major hospital network in 90 days using
                local SEO + targeted Google Ads.
              </p>
            </div>
          </div>

          <div className="feat-img">
            <img
              src="https://picsum.photos/seed/csfeat-er/1000/700"
              alt=""
              loading="lazy"
            />
            <div className="feat-img-overlay" />
            <div className="feat-img-tag">
              <span>Dallas, TX</span>
              <span>·</span>
              <span>90-day engagement</span>
              <span>·</span>
              <span>+45% patient visits</span>
            </div>
          </div>

          <aside className="feat-side">
            <div className="feat-logo">
              TheNextGen
              <small>Case Study Lead</small>
            </div>
            <div className="feat-author">
              <div className="feat-author-img">
                <img
                  src="https://picsum.photos/seed/csauthor/300/300"
                  alt=""
                  loading="lazy"
                />
              </div>
              <div>
                <h4 className="feat-author-name">Marcus Reyes</h4>
                <p className="feat-author-role">Strategy Director</p>
              </div>
            </div>
          </aside>
        </article>
      </div>
    </section>
  );
};

export default FeaturedCase;
