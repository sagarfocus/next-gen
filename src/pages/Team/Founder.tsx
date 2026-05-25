import jayPhoto from '../../assets/jay-1.webp';

const Founder = () => {
  return (
    <section className="ngt-section ngt-founder">
      <div className="container-shell">
        <div className="ngt-mark">
          <span className="ngt-mark-num">01</span>
          <span className="ngt-mark-lbl">Founder</span>
          <span className="ngt-mark-line" />
          <span className="ngt-mark-meta">Irving, TX</span>
        </div>

        <div className="ngt-fd-grid">
          <figure className="ngt-fd-fig">
            <div className="ngt-fd-photo-wrap">
              <img
                src={jayPhoto}
                alt="Jay Dahal, Founder"
                className="ngt-fd-photo"
                width={520}
                height={620}
                decoding="async"
                fetchPriority="high"
              />
              <span className="ngt-fd-stamp">FOUNDER</span>
            </div>
          </figure>

          <div className="ngt-fd-body">
            <div className="ngt-fd-eyebrow">
              <span className="ngt-fd-eyebrow-rule" aria-hidden="true" />
              President &amp; Founder
            </div>

            <div className="ngt-fd-plate">
              <h2 className="ngt-fd-name">Jay Dahal</h2>
              <span className="ngt-fd-name-rule" aria-hidden="true" />
            </div>

            <div className="ngt-fd-creds">
              <span className="ngt-fd-cred">CPA</span>
              <span className="ngt-fd-cred">CTC</span>
              <span className="ngt-fd-cred ngt-fd-cred-ghost">Healthcare strategist</span>
            </div>

            <p className="ngt-fd-role">Practitioner-owner. Healthcare growth strategist.</p>

            <div className="ngt-fd-bio">
              <p>
                Jay built TheNextGen on a single thesis: healthcare deserves a marketing partner
                that understands clinical reality, financial accountability, and HIPAA — not a
                generalist agency that treats clinics like e-commerce stores.
              </p>
              <p>
                As a CPA and Certified Tax Coach, he brings a rare blend of operational rigor and
                revenue discipline to every engagement — making sure marketing investment maps
                directly to practice profitability.
              </p>
            </div>

            <blockquote className="ngt-fd-quote">
              <span className="ngt-fd-quote-mark" aria-hidden="true">
                &ldquo;
              </span>
              We measure ourselves in booked appointments and patient lifetime value — not
              impressions.
              <span className="ngt-fd-quote-mark ngt-fd-quote-mark-end" aria-hidden="true">
                &rdquo;
              </span>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Founder;
