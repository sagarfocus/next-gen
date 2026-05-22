import { Link } from 'react-router-dom';
import SectionHead from '@/components/service/SectionHead';
import { ArrowIcon, CheckIcon } from '@/components/icons';
import { PACKAGES } from '@/content/website-design/packages';

const ToneA = '#576DB5';
const ToneC = '#B38B6D';
const ToneInk = '#2D3748';

const Packages = () => (
  <section className="sv-section sv-wd-packages" id="packages">
    <div className="container-shell">
      <SectionHead
        num="10 - Project packages"
        title={
          <>
            Three ways to ship - <em>scoped honestly.</em>
          </>
        }
        meta={
          <>
            Fixed fee,
            <br />
            no surprises
          </>
        }
      />

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(300px, 100%), 1fr))',
          gap: 'clamp(14px, 1.8vw, 22px)',
        }}
      >
        {PACKAGES.map((p) => {
          const accent = p.featured ? ToneA : ToneC;
          return (
            <article
              key={p.name}
              style={{
                background: p.featured ? '#1A2438' : '#fff',
                color: p.featured ? '#fff' : ToneInk,
                border: p.featured ? `1px solid ${ToneA}` : '1px solid rgba(45,55,72,0.10)',
                borderRadius: 20,
                padding: 'clamp(24px, 2.6vw, 32px)',
                display: 'flex',
                flexDirection: 'column',
                gap: 14,
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {p.featured ? (
                <span
                  aria-hidden="true"
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 3,
                    background: `linear-gradient(90deg, ${ToneA}, ${ToneC})`,
                  }}
                />
              ) : null}
              {p.badge ? (
                <span
                  style={{
                    alignSelf: 'flex-start',
                    fontSize: 10,
                    fontWeight: 800,
                    letterSpacing: '0.22em',
                    textTransform: 'uppercase',
                    color: p.featured ? '#fff' : accent,
                    background: p.featured ? 'rgba(255,255,255,0.12)' : `${accent}1A`,
                    padding: '5px 10px',
                    borderRadius: 999,
                  }}
                >
                  {p.badge}
                </span>
              ) : null}

              <div>
                <h3
                  style={{
                    fontSize: 20,
                    fontWeight: 700,
                    letterSpacing: '-0.01em',
                    margin: 0,
                  }}
                >
                  {p.name}
                </h3>
                <div
                  style={{
                    fontSize: 12,
                    color: p.featured ? 'rgba(255,255,255,0.65)' : '#7A8597',
                    marginTop: 2,
                  }}
                >
                  {p.bestFor}
                </div>
              </div>

              <div>
                <div
                  style={{
                    fontSize: 'clamp(26px, 3vw, 32px)',
                    fontWeight: 700,
                    letterSpacing: '-0.02em',
                    lineHeight: 1.1,
                  }}
                >
                  {p.price}
                </div>
                <div
                  style={{
                    fontSize: 12,
                    color: p.featured ? 'rgba(255,255,255,0.65)' : '#7A8597',
                    marginTop: 2,
                  }}
                >
                  {p.priceNote}
                </div>
              </div>

              <p
                style={{
                  fontSize: 14,
                  lineHeight: 1.55,
                  color: p.featured ? 'rgba(255,255,255,0.82)' : '#4A5568',
                  margin: 0,
                }}
              >
                {p.tagline}
              </p>

              <ul
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 9,
                  listStyle: 'none',
                  padding: 0,
                  margin: '4px 0 0',
                }}
              >
                {p.bullets.map((bullet) => (
                  <li
                    key={bullet}
                    style={{
                      display: 'grid',
                      gridTemplateColumns: '18px 1fr',
                      gap: 10,
                      alignItems: 'baseline',
                      fontSize: 13.5,
                      color: p.featured ? 'rgba(255,255,255,0.85)' : '#4A5568',
                      lineHeight: 1.5,
                    }}
                  >
                    <span
                      aria-hidden="true"
                      style={{
                        width: 16,
                        height: 16,
                        borderRadius: 5,
                        background: p.featured ? 'rgba(255,255,255,0.15)' : `${accent}1A`,
                        color: p.featured ? '#fff' : accent,
                        display: 'grid',
                        placeItems: 'center',
                      }}
                    >
                      <CheckIcon strokeWidth={3} />
                    </span>
                    {bullet}
                  </li>
                ))}
              </ul>

              <Link
                to={p.ctaHref}
                style={{
                  marginTop: 'auto',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 8,
                  padding: '12px 18px',
                  borderRadius: 12,
                  background: p.featured ? '#fff' : ToneInk,
                  color: p.featured ? ToneInk : '#fff',
                  textDecoration: 'none',
                  fontSize: 14,
                  fontWeight: 700,
                  letterSpacing: '-0.005em',
                }}
              >
                {p.ctaLabel}
                <ArrowIcon />
              </Link>
            </article>
          );
        })}
      </div>
    </div>
  </section>
);

export default Packages;
