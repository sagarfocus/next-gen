import { Link } from 'react-router-dom';
import { MotionCard } from '@/lib/motion';
import { ENGAGEMENT_DETAILS, detailHref } from './details.data';
import { ENGAGEMENT_DELTAS, ENGAGEMENT_HEADLINES, ENGAGEMENT_SECTORS } from './data';

const Featured = () => (
  <section className="ow-feat" aria-labelledby="ow-feat-title">
    <div className="container-shell">
      <header className="ow-section-head">
        <span className="ow-section-tag">Featured engagements</span>
        <h2 id="ow-feat-title" className="ow-section-h2">
          Three from the last quarter.
        </h2>
      </header>

      <div className="ow-feat-grid">
        {ENGAGEMENT_DETAILS.map((e, i) => (
          <MotionCard key={e.slug} naked tilt={7} className="ow-feat-card-wrap">
            <Link
              to={detailHref(e.kind, e.slug)}
              className="ow-feat-card"
              aria-label={`Read more about ${e.title}`}
            >
              <div className="ow-feat-art ow-feat-art--photo" aria-hidden="true">
                <img src={e.img} alt="" loading="lazy" />
                <div className="ow-feat-art-shade" />
                <span className="ow-feat-delta">
                  {ENGAGEMENT_DELTAS[i]}
                  <small>%</small>
                </span>
              </div>
              <div className="ow-feat-body">
                <span className="ow-feat-sector">{ENGAGEMENT_SECTORS[i]}</span>
                <h3 className="ow-feat-name">{e.title}</h3>
                <p className="ow-feat-headline">{ENGAGEMENT_HEADLINES[i]}</p>
                <div className="ow-feat-foot">
                  <div>
                    <strong>{e.metric.v}</strong>
                    <span>{e.metric.l}</span>
                  </div>
                  <span className="ow-feat-arrow" aria-hidden="true">
                    ↗
                  </span>
                </div>
              </div>
            </Link>
          </MotionCard>
        ))}
      </div>
    </div>
  </section>
);

export default Featured;
