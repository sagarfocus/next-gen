import { Link } from 'react-router-dom';
import { MotionCard } from '../../lib/motion';
import { CAPABILITY_DETAILS, detailHref } from './details.data';
import { CAPABILITY_STATS, CAPABILITY_TAGS } from './data';

const Capabilities = () => (
  <section className="ow-cap" aria-labelledby="ow-cap-title">
    <div className="container-shell">
      <header className="ow-section-head ow-section-head--split">
        <div className="ow-section-head-main">
          <span className="ow-section-tag">What we ship</span>
          <h2 id="ow-cap-title" className="ow-section-h2">
            Six capabilities. One operating system.
          </h2>
        </div>
        <p className="ow-section-aside">
          Each capability runs as its own discipline — with a scorecard, a
          cadence, and an owner — but they share one calendar and one growth
          lead. That is how the engine stays in sync.
        </p>
      </header>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
        {CAPABILITY_DETAILS.map((cap, i) => {
          const stats = CAPABILITY_STATS[i];
          return (
            <MotionCard
              key={cap.slug}
              naked
              tilt={4}
              className="cap-card"
            >
              {/* Image with rounded inner radius */}
              <div className="cap-card-art">
                <img src={cap.img} alt="" loading="lazy" />
              </div>

              {/* Title row + circular arrow icon top-right */}
              <div className="cap-card-head">
                <div className="cap-card-head-text">
                  <h3 className="cap-card-title">{cap.title}</h3>
                  <span className="cap-card-tag">{CAPABILITY_TAGS[i]}</span>
                </div>
                <span className="cap-card-pin" aria-hidden="true">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="7" y1="17" x2="17" y2="7" />
                    <polyline points="7 7 17 7 17 17" />
                  </svg>
                </span>
              </div>

              {/* Short blurb */}
              <p className="cap-card-copy">{cap.blurb}</p>

              {/* Footer: 3 stat columns + "See more" pill button */}
              <div className="cap-card-foot">
                <div className="cap-card-stats">
                  {stats.map((s) => (
                    <div key={s.l} className="cap-card-stat">
                      <span className="cap-card-stat-v">{s.v}</span>
                      <span className="cap-card-stat-l">{s.l}</span>
                    </div>
                  ))}
                </div>
                <Link
                  to={detailHref(cap.kind, cap.slug)}
                  className="cap-card-cta"
                  aria-label={`See more about ${CAPABILITY_TAGS[i]} - ${cap.title}`}
                >
                  See more
                </Link>
              </div>
            </MotionCard>
          );
        })}
      </div>
    </div>
  </section>
);

export default Capabilities;
