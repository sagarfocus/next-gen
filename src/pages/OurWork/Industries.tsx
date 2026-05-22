import { Link } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { INDUSTRY_DETAILS, INDUSTRY_ICONS, detailHref } from './details.data';
import { ArrowIcon } from '../../components/icons';

const Industries = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLUListElement>(null);
  const [progress, setProgress] = useState(0);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    const mqDesktop = window.matchMedia('(min-width: 901px)');
    const mqReduce = window.matchMedia('(prefers-reduced-motion: reduce)');
    let raf = 0;

    const update = () => {
      raf = 0;
      if (!mqDesktop.matches || mqReduce.matches) {
        track.style.transform = '';
        setProgress(0);
        setActive(0);
        return;
      }
      const rect = section.getBoundingClientRect();
      const vh = window.innerHeight;
      const scrollDistance = section.offsetHeight - vh;
      const scrolled = Math.min(Math.max(-rect.top, 0), scrollDistance);
      const p = scrollDistance > 0 ? scrolled / scrollDistance : 0;
      const viewport = track.parentElement;
      const viewportWidth = viewport ? viewport.clientWidth : window.innerWidth;
      const trackOverflow = Math.max(0, track.scrollWidth - viewportWidth);
      track.style.transform = `translate3d(${-p * trackOverflow}px, 0, 0)`;
      setProgress(p);
      setActive(Math.min(INDUSTRY_DETAILS.length - 1, Math.round(p * (INDUSTRY_DETAILS.length - 1))));
    };

    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', update);
    mqDesktop.addEventListener('change', update);
    mqReduce.addEventListener('change', update);
    return () => {
      if (raf) cancelAnimationFrame(raf);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', update);
      mqDesktop.removeEventListener('change', update);
      mqReduce.removeEventListener('change', update);
    };
  }, []);

  return (
    <section ref={sectionRef} className="ow-ind" aria-labelledby="ow-ind-title">
      <div className="ow-ind-sticky">
        <div className="container-shell">
          <header className="ow-ind-head">
            <span className="ow-section-tag">Industries we serve</span>
            <h2 id="ow-ind-title" className="ow-section-h2">
              The clinics this work has shipped for.
            </h2>
            <p className="ow-ind-lede">
              Single-location practices, multi-site networks, and everything between.
              Scroll to explore - every vertical has its own pricing model, regulatory
              edge, and patient journey.
            </p>
          </header>
        </div>

        <div className="ow-ind-viewport" aria-hidden="false">
          <ul ref={trackRef} className="ow-ind-track">
            {INDUSTRY_DETAILS.map((it, i) => {
              const isOpen = i === active;
              return (
                <li
                  key={it.slug}
                  className={`ow-ind-card${isOpen ? ' is-active' : ''}`}
                  aria-current={isOpen ? 'true' : undefined}
                >
                  <Link
                    to={detailHref(it.kind, it.slug)}
                    className="ow-ind-card-btn"
                    aria-label={`Read more about ${it.title}`}
                  >
                    <div className="ow-ind-card-media" aria-hidden="true">
                      <img src={it.img} alt="" loading="lazy" />
                      <div className="ow-ind-card-shade" />
                    </div>
                    <div className="ow-ind-card-top">
                      <span className="ow-ind-card-num">{String(i + 1).padStart(2, '0')} / {String(INDUSTRY_DETAILS.length).padStart(2, '0')}</span>
                      <span className="ow-ind-card-icon" aria-hidden="true">{INDUSTRY_ICONS[it.slug]}</span>
                    </div>
                    <div className="ow-ind-card-bottom">
                      <h3 className="ow-ind-card-title">{it.title}</h3>
                      <p className="ow-ind-card-blurb">{it.blurb}</p>
                      <span className="ow-ind-card-cta">View details
                        <ArrowIcon size={14} />
                      </span>
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="container-shell">
          <div className="ow-ind-progress" aria-hidden="true">
            <div className="ow-ind-progress-meta">
              <span>{String(active + 1).padStart(2, '0')} <em>/ {String(INDUSTRY_DETAILS.length).padStart(2, '0')}</em></span>
              <span className="ow-ind-progress-name">{INDUSTRY_DETAILS[active].title}</span>
              <span className="ow-ind-progress-hint">Scroll to advance →</span>
            </div>
            <div className="ow-ind-progress-rail">
              <div className="ow-ind-progress-fill" style={{ width: `${progress * 100}%` }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Industries;
