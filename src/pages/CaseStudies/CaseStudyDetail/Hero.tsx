import { Link } from 'react-router-dom';
import Breadcrumb from '@/components/Breadcrumb';
import type { CaseStudy } from '../caseStudies.data';
import { ArrowLeft } from './icons';

interface HeroProps {
  study: CaseStudy;
  ordinal: string;
  total: number;
}

const Hero = ({ study, ordinal, total }: HeroProps) => (
  <section className="csd-hero" aria-labelledby="csd-hero-title">
    <div className="csd-hero-bg" aria-hidden="true">
      <span className="csd-hero-bg-a" />
      <span className="csd-hero-bg-b" />
      <span className="csd-hero-bg-grid" />
    </div>

    <div className="container-shell csd-hero-shell">
      <Breadcrumb
        items={[
          { label: 'Case studies', to: '/case-studies' },
          { label: study.name },
        ]}
      />
      <div className="csd-topnav">
        <Link to="/case-studies#cs-all" className="csd-back">
          <ArrowLeft /> Case library
        </Link>
        <div className="csd-ordinal">
          <span>Engagement</span>
          <strong>
            {ordinal} <em>/ {String(total).padStart(2, '0')}</em>
          </strong>
        </div>
      </div>

      <div className="csd-hero-grid">
        <header className="csd-hero-copy">
          <span className="csd-sector-pill">
            <span className="csd-sector-emoji" aria-hidden="true">
              {study.emoji}
            </span>
            {study.sector}
          </span>

          <h1 id="csd-hero-title" className="csd-hero-title">
            {study.name}
          </h1>

          <p className="csd-hero-brief">{study.brief}</p>

          <dl className="csd-meta-grid">
            <div className="csd-meta">
              <dt>Location</dt>
              <dd>{study.location}</dd>
            </div>
            <div className="csd-meta">
              <dt>Specialty</dt>
              <dd>{study.specialty}</dd>
            </div>
            <div className="csd-meta">
              <dt>Team</dt>
              <dd>{study.teamSize}</dd>
            </div>
            <div className="csd-meta">
              <dt>Engagement</dt>
              <dd>{study.engagement}</dd>
            </div>
            <div className="csd-meta">
              <dt>Started</dt>
              <dd>{study.started}</dd>
            </div>
          </dl>
        </header>

        <aside className="csd-scorecard" aria-label="Headline metric">
          <div className="csd-scorecard-top">
            <span className="csd-scorecard-tag">Headline result</span>
            <span className="csd-scorecard-dot" aria-hidden="true" />
          </div>

          <div className="csd-scorecard-hero">
            <span className="csd-scorecard-num">{study.metricNum}</span>
            <span className="csd-scorecard-lbl">{study.metricLbl}</span>
          </div>

          <ul className="csd-scorecard-mini">
            {study.secondary.map((s) => (
              <li key={s.label}>
                <strong>{s.value}</strong>
                <span>{s.label}</span>
              </li>
            ))}
          </ul>

          <div className="csd-scorecard-foot">
            <span>Verified outcomes</span>
            <span className="csd-scorecard-foot-line" aria-hidden="true" />
            <span>{study.started}</span>
          </div>
        </aside>
      </div>
    </div>
  </section>
);

export default Hero;
