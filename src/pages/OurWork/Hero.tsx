import { Link } from 'react-router-dom';
import { Parallax, AnimatedBackground, MotionButton } from '@/lib/motion';
import { ArrowIcon } from '@/components/icons';
import { IMG } from './data';

const Hero = () => (
  <section className="ow-hero" aria-labelledby="ow-h1">
    <AnimatedBackground variant="aurora" intensity="medium" />
    <div className="container-shell">
      <nav className="ow-crumbs" aria-label="Breadcrumb">
        <Link to="/">Home</Link>
        <span aria-hidden="true">/</span>
        <span aria-current="page">Our Work</span>
      </nav>

      <div className="ow-hero-grid">
        <div className="ow-hero-copy">
          <span className="ow-pill">
            <span className="ow-pill-dot" />
            Selected work · Healthcare · 2019–2026
          </span>
          <h1 id="ow-h1" className="ow-h1">
            Six years.
            <br />
            <em>Two hundred</em> practices.
            <br />
            One playbook.
          </h1>
          <p className="ow-lede">
            A retrospective of the marketing, branding, and operations work
            we have shipped for clinics, medspas, urgent care centers, and
            multi-location healthcare brands.
          </p>
          <div className="ow-hero-cta">
            <MotionButton to="/contact" className="ow-cta-primary">
              Start a project
              <ArrowIcon />
            </MotionButton>
            <Link to="/case-studies" className="ow-cta-link">
              Read full case studies
            </Link>
          </div>
        </div>

        <Parallax as="div" speed={0.06} className="ow-hero-visual" aria-hidden="true">
          <figure className="ow-spotlight">
            <img src={IMG.spotlight} alt="" loading="eager" />
            <figcaption>
              <span className="ow-spot-tag">In production</span>
              <span className="ow-spot-title">Multi-location growth OS</span>
            </figcaption>
          </figure>

          <div className="ow-floater ow-floater-1">
            <span className="ow-floater-num">+318<small>%</small></span>
            <span className="ow-floater-lbl">Booked visits · 90d</span>
          </div>
          <div className="ow-floater ow-floater-2">
            <span className="ow-floater-dot" /> Live ranking · Map Pack
          </div>
        </Parallax>
      </div>
    </div>
  </section>
);

export default Hero;
