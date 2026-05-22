import { Link } from 'react-router-dom';
import { AnimatedBackground } from '@/lib/motion';
import { ArrowIcon, CheckIcon } from '@/components/icons';
import { INDUSTRY_ICONS, type DetailEntry } from '../details.data';

interface DetailHeroProps {
  entry: DetailEntry;
  numLabel: string;
}

const Hero = ({ entry, numLabel }: DetailHeroProps) => (
  <section className="ow-detail-hero" aria-labelledby="ow-detail-title">
    <AnimatedBackground variant="aurora" intensity="subtle" />
    <div className="container-shell">
      <nav className="ow-crumbs ow-detail-crumbs" aria-label="Breadcrumb">
        <Link to="/">Home</Link>
        <span aria-hidden="true">/</span>
        <Link to="/our-work">Our Work</Link>
        <span aria-hidden="true">/</span>
        <span aria-current="page">{entry.title}</span>
      </nav>

      <div className="ow-ind-modal-card ow-detail-card">
        <div className="ow-ind-modal-art" aria-hidden="true">
          <img src={entry.img} alt="" />
          <div className="ow-ind-modal-art-shade" />
          <span className="ow-ind-modal-num">{numLabel}</span>
          {entry.kind === 'industry' && INDUSTRY_ICONS[entry.slug] && (
            <span className="ow-ind-modal-art-icon">{INDUSTRY_ICONS[entry.slug]}</span>
          )}
        </div>

        <div className="ow-ind-modal-body">
          <span className="ow-ind-modal-tag">{entry.eyebrow}</span>
          <h1 id="ow-detail-title" className="ow-ind-modal-title">
            {entry.title}
          </h1>
          <p className="ow-ind-modal-blurb">{entry.blurb}</p>
          <p className="ow-ind-modal-desc">{entry.description}</p>

          <div className="ow-ind-modal-services">
            <span className="ow-ind-modal-subtag">{entry.serviceLabel}</span>
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
              {entry.ctaText}
              <ArrowIcon />
            </Link>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
