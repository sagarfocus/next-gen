import jayPhoto from '../../assets/Jay-dahal.png';

const Founder = () => {
  return (
    <section className="tm-section tm-founder">
      <div className="container-shell">
        <div className="tm-marker">
          <span className="tm-marker-num">01</span>
          <span>Founder</span>
          <span className="tm-marker-line" />
          <span className="tm-marker-meta">Irving, TX</span>
        </div>

        <div className="tm-founder-grid">
          <div className="tm-founder-mark tm-founder-mark-photo">
            <img src={jayPhoto} alt="Jay Dahal" className="tm-founder-photo" />
            <div className="tm-founder-tag">Founder · Est. 2018</div>
            <div className="tm-founder-stamp">
              <span>FOCUS</span>
              <span>01 / 09</span>
            </div>
          </div>

          <div className="tm-founder-body">
            <div className="tm-founder-eyebrow">President &amp; Founder</div>
            <h2 className="tm-founder-name">Jay Dahal</h2>
            <div className="tm-founder-creds">
              <span className="tm-founder-cred">CPA</span>
              <span className="tm-founder-cred">CTC</span>
            </div>
            <p className="tm-founder-role">
              Practitioner-owner, healthcare growth strategist.
            </p>
            <p className="tm-founder-bio">
              Jay built TheNextGen on a single thesis: healthcare deserves a
              marketing partner that understands clinical reality, financial
              accountability, and HIPAA &mdash; not a generalist agency that
              treats clinics like e-commerce stores.
            </p>
            <p className="tm-founder-bio">
              As a CPA and Certified Tax Coach, he brings a rare blend of
              operational rigor and revenue discipline to every engagement
              &mdash; making sure marketing investment maps directly to
              practice profitability.
            </p>
            <p className="tm-founder-quote">
              We measure ourselves in booked appointments and patient lifetime
              value &mdash; not impressions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Founder;
