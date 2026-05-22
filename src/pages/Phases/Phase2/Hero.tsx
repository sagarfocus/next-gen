import { Link } from 'react-router-dom';

const Hero = () => (
  <>
    <Link to="/about#methodology" className="ph2-crumb">
      ← Back to Methodology
    </Link>

    <section className="ph2-hero">
      <div className="ph2-rail">
        <span className="ph2-rail-vert">Phase 02</span>
        <span className="ph2-rail-num">02</span>
      </div>
      <div className="ph2-hero-content">
        <span className="ph2-eyebrow">/ Build - Week 03 - 04</span>
        <h1 className="ph2-h1">
          Strategy &amp; <em>Infrastructure</em>&nbsp;Build.
        </h1>
        <p className="ph2-lede">
          Two parallel tracks. Strategy maps the route - service-specific
          keywords, competitor wedges, and the patient journey for each
          persona. The build track wires the infrastructure underneath so
          every lead becomes a tracked, attributable event.
        </p>
        <div className="ph2-stat">
          <div className="ph2-stat-big">14d</div>
          <div className="ph2-stat-cap">Avg time to ship</div>
        </div>
      </div>
    </section>
  </>
);

export default Hero;
