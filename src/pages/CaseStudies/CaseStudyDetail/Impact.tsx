import { Link } from 'react-router-dom';
import type { CaseStudy } from '../caseStudies.data';
import { ArrowLeft, ArrowRight, Quote } from './icons';

interface ImpactProps {
  study: CaseStudy;
  prev: CaseStudy;
  next: CaseStudy;
}

const Impact = ({ study, prev, next }: ImpactProps) => (
  <section className="csd-impact" aria-labelledby="csd-impact-title">
    <div className="container-shell">
      <header className="csd-impact-head">
        <span className="csd-section-rail csd-section-rail--light">
          03 - Impact snapshot
        </span>
        <h2 id="csd-impact-title" className="csd-impact-title">
          The numbers, told once - verified, attributed, kept honest.
        </h2>
      </header>

      <div className="csd-impact-grid">
        <ul className="csd-kpis">
          {study.kpis.map((k) => (
            <li key={k.label} className="csd-kpi">
              <span className="csd-kpi-value">{k.value}</span>
              <span className="csd-kpi-label">{k.label}</span>
              <span className="csd-kpi-change">{k.change}</span>
            </li>
          ))}
        </ul>

        <figure className="csd-quote-card">
          <span className="csd-quote-mark" aria-hidden="true">
            <Quote />
          </span>
          <blockquote>
            <p>{study.quote.text}</p>
          </blockquote>
          <figcaption>
            <strong>{study.quote.author}</strong>
            <span>{study.quote.role}</span>
          </figcaption>
          <span className="csd-quote-edge" aria-hidden="true" />
        </figure>
      </div>

      <nav className="csd-endnav" aria-label="More case studies">
        <Link to={`/case-studies/${prev.id}`} className="csd-endnav-card csd-endnav-card--prev">
          <span className="csd-endnav-dir">
            <ArrowLeft /> Previous engagement
          </span>
          <span className="csd-endnav-name">{prev.name}</span>
          <span className="csd-endnav-metric">
            <em>{prev.metricNum}</em> {prev.metricLbl}
          </span>
        </Link>
        <Link to="/free-growth-audit" className="csd-endnav-cta">
          <span className="csd-endnav-cta-eyebrow">Want a number like this?</span>
          <span className="csd-endnav-cta-line">
            Start with a 30-minute audit. We will tell you the leak before
            we tell you the price.
          </span>
          <span className="csd-endnav-cta-btn">
            Book the audit <ArrowRight />
          </span>
        </Link>
        <Link to={`/case-studies/${next.id}`} className="csd-endnav-card csd-endnav-card--next">
          <span className="csd-endnav-dir">
            Next engagement <ArrowRight />
          </span>
          <span className="csd-endnav-name">{next.name}</span>
          <span className="csd-endnav-metric">
            <em>{next.metricNum}</em> {next.metricLbl}
          </span>
        </Link>
      </nav>
    </div>
  </section>
);

export default Impact;
