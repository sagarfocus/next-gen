import { Link } from 'react-router-dom';
import Breadcrumb from '@/components/Breadcrumb';
import moreInfoBanner from '../../../assets/more-info-banner.png';
import { ArrowIcon } from '@/components/icons';

const Hero = () => (
  <section className="amih-hero" aria-labelledby="amih-hero-title">
    <div className="container-shell">
      <Breadcrumb current="Automation · More info" />

      <div className="amih-hero-grid">
        <div className="amih-hero-copy">
          <span className="amih-eyebrow">
            <i aria-hidden="true" />
            Healthcare automation, deep-dive
          </span>
          <h1 id="amih-hero-title" className="amih-h1">
            The complete playbook for healthcare automation.
          </h1>
          <p className="amih-lede">
            A practitioner&rsquo;s guide to deploying patient-facing
            automation without breaking compliance, scope, or your front
            desk&rsquo;s sanity - written by the team behind 200+
            live clinical workflows.
          </p>
          <div className="amih-hero-cta">
            <Link to="/free-growth-audit" className="amih-btn amih-btn-primary">
              Start your automation audit <ArrowIcon size={14} strokeWidth={2.2} />
            </Link>
            <a href="#amih-solutions" className="amih-btn amih-btn-ghost">
              Browse the playbook
            </a>
          </div>
        </div>

        <img
          src={moreInfoBanner}
          alt="The complete playbook for healthcare automation"
          className="amih-hero-banner"
        />
      </div>
    </div>
  </section>
);

export default Hero;
