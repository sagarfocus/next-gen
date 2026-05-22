import { Link } from 'react-router-dom';

const Hero = () => (
  <>
    <Link to="/about#methodology" className="ph1-crumb">
      <span aria-hidden="true">←</span> Back to Methodology
    </Link>

    <div className="ph1-meta-row">
      <span>Phase</span>
      <span>Discovery &amp; Audit</span>
      <span>Week 01 - 02</span>
      <span>Deliverable: Audit Report</span>
    </div>

    <section className="ph1-hero">
      <div>
        <h2 className="ph1-bignum">
          0<em>1</em>
        </h2>
      </div>
      <div>
        <h1 className="ph1-h1">
          Discovery &amp; <br />
          Technical Audit.
        </h1>
        <p className="ph1-lede">
          A two-week forensic of every search, ad, and front-desk surface
          your clinic owns. We don&rsquo;t guess where patients are leaking
          - we measure it, then we hand you a prioritized scorecard with
          the exact dollar value of each fix.
        </p>
        <div className="ph1-tags">
          <span className="ph1-tag">Technical SEO</span>
          <span className="ph1-tag">Local Search</span>
          <span className="ph1-tag">Paid Media</span>
          <span className="ph1-tag">CRO</span>
          <span className="ph1-tag">Front-desk Ops</span>
        </div>
      </div>
    </section>
  </>
);

export default Hero;
