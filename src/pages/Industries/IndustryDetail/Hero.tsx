import { Link } from 'react-router-dom';
import { AnimatedBackground } from '@/lib/motion';
import { ArrowIcon, CheckIcon } from '@/components/icons';
import type { IndustryDetailEntry } from '@/content/industries/details.data';

interface HeroProps {
  entry: IndustryDetailEntry;
  numLabel: string;
}

const Hero = ({ entry, numLabel }: HeroProps) => (
  <section className="ow-detail-hero" aria-labelledby="ind-detail-title">
    <AnimatedBackground variant="aurora" intensity="subtle" />
    <div className="container-shell">
      <nav className="ow-crumbs ow-detail-crumbs" aria-label="Breadcrumb">
        <Link to="/">Home</Link>
        <span aria-hidden="true">/</span>
        <Link to="/industries">Industries</Link>
        <span aria-hidden="true">/</span>
        <span aria-current="page">{entry.label}</span>
      </nav>

      <div className="ow-ind-modal-card ow-detail-card">
        <div className="ow-ind-modal-art" aria-hidden="true">
          <img src={entry.image} alt="" />
          <div className="ow-ind-modal-art-shade" />
          <span className="ow-ind-modal-num">{numLabel}</span>
        </div>

        <div className="ow-ind-modal-body">
          <span className="ow-ind-modal-tag">Industry · {entry.meta}</span>
          <h1 id="ind-detail-title" className="ow-ind-modal-title">
            {entry.label}
          </h1>
          <p className="ow-ind-modal-blurb">{entry.meta}</p>
          <p className="ow-ind-modal-desc">{entry.description}</p>

          <div className="ow-ind-modal-services">
            <span className="ow-ind-modal-subtag">What we ship</span>
            <ul>
              {entry.services.map((s) => (
                <li key={s}>
                  <CheckIcon size={14} strokeWidth={2.6} />
                  {s}
                </li>
              ))}
            </ul>
          </div>

          <div className="ow-ind-modal-foot">
            <div className="ow-ind-modal-metric">
              <strong>{entry.metric.v}</strong>
              <span>{entry.metric.l}</span>
            </div>
            <Link to={entry.ctaTo} className="ow-ind-modal-cta">
              Talk to us about {entry.label}
              <ArrowIcon />
            </Link>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
