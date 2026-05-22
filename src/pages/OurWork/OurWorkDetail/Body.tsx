import { Link } from 'react-router-dom';
import DetailSectionHead from '@/components/DetailSectionHead';
import { ArrowIcon } from '@/components/icons';
import { type DetailEntry } from '../details.data';
import { KIND_BODY_INTRO } from './data';

const Body = ({ entry }: { entry: DetailEntry }) => {
  const lede = entry.longBody[0] ?? '';
  const restParas = entry.longBody.slice(1);
  return (
    <section className="ow-detail-body" aria-labelledby="ow-detail-body-title">
      <div className="container-shell">
        <DetailSectionHead
          id="ow-detail-body-title"
          eyebrow="The work in depth"
          title="What it looked like inside the engagement."
          intro={KIND_BODY_INTRO[entry.kind](entry)}
        />

        {/* Bottom: image card left, image + text + CTA right */}
        <div className="ow-body-grid">
          <article className="ow-body-card-left">
            <img src={entry.img} alt="" loading="lazy" decoding="async" />
            <div className="ow-body-card-overlay">
              <h3 className="ow-body-card-overlay-title">Inside the engagement.</h3>
              <p className="ow-body-card-overlay-text">{entry.blurb}</p>
              <Link to={entry.ctaTo} className="ow-body-overlay-btn">
                Discover
                <ArrowIcon size={12} />
              </Link>
            </div>
          </article>

          <div className="ow-body-stack-right">
            <div className="ow-body-stack-img">
              <img src={entry.img} alt="" loading="lazy" decoding="async" />
            </div>
            <div className="ow-body-stack-content">
              {restParas.length > 0 ? (
                restParas.map((p, i) => (
                  <p key={i} className="ow-body-stack-text">
                    {p}
                  </p>
                ))
              ) : (
                <p className="ow-body-stack-text">{lede}</p>
              )}
              <Link to={entry.ctaTo} className="ow-body-cta-pill">
                {entry.ctaText}
                <span className="ow-body-cta-ico" aria-hidden="true">
                  <ArrowIcon size={14} />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Body;
