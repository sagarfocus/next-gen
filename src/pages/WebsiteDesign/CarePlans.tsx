import { Link } from 'react-router-dom';
import SectionHead from '@/components/service/SectionHead';
import { ArrowIcon, CheckIcon } from '@/components/icons';
import { CARE_PLANS } from '@/content/website-design/care-plans';

const ToneA = '#576DB5';
const ToneC = '#B38B6D';
const ToneInk = '#2D3748';

const CarePlans = () => (
  <section className="sv-section sv-care-plans">
    <div className="container-shell">
      <SectionHead
        num="09 - Care plans (post-launch)"
        title={
          <>
            Launch is the start - <em>not the finish line.</em>
          </>
        }
        meta={
          <>
            Pick a tier,
            <br />
            cancel anytime
          </>
        }
      />

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(280px, 100%), 1fr))',
          gap: 'clamp(14px, 1.6vw, 20px)',
        }}
      >
        {CARE_PLANS.map((p) => {
          const accent = p.featured ? ToneA : ToneC;
          return (
            <article
              key={p.name}
              style={{
                background: '#fff',
                border: p.featured ? `2px solid ${ToneA}` : '1px solid rgba(45,55,72,0.10)',
                borderRadius: 18,
                padding: 'clamp(22px, 2.4vw, 28px)',
                display: 'flex',
                flexDirection: 'column',
                gap: 14,
                position: 'relative',
              }}
            >
              {p.badge ? (
                <span
                  style={{
                    position: 'absolute',
                    top: -12,
                    left: 'clamp(20px, 2.4vw, 28px)',
                    fontSize: 10,
                    fontWeight: 800,
                    letterSpacing: '0.22em',
                    textTransform: 'uppercase',
                    color: '#fff',
                    background: accent,
                    padding: '5px 10px',
                    borderRadius: 999,
                  }}
                >
                  {p.badge}
                </span>
              ) : null}
              <h3
                style={{
                  fontSize: 18,
                  fontWeight: 700,
                  color: ToneInk,
                  letterSpacing: '-0.005em',
                  margin: 0,
                }}
              >
                {p.name}
              </h3>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 6 }}>
                <span
                  style={{
                    fontSize: 'clamp(28px, 3.2vw, 36px)',
                    fontWeight: 700,
                    color: ToneInk,
                    letterSpacing: '-0.02em',
                  }}
                >
                  {p.price}
                </span>
                <span style={{ fontSize: 14, color: '#5A6478' }}>{p.period}</span>
              </div>
              <p
                style={{
                  fontSize: 14,
                  lineHeight: 1.55,
                  color: '#4A5568',
                  margin: 0,
                }}
              >
                {p.tagline}
              </p>
              <ul
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 8,
                  listStyle: 'none',
                  padding: 0,
                  margin: '4px 0 0',
                }}
              >
                {p.includes.map((bullet) => (
                  <li
                    key={bullet}
                    style={{
                      display: 'grid',
                      gridTemplateColumns: '18px 1fr',
                      gap: 10,
                      alignItems: 'baseline',
                      fontSize: 13.5,
                      color: '#4A5568',
                      lineHeight: 1.5,
                    }}
                  >
                    <span
                      aria-hidden="true"
                      style={{
                        width: 16,
                        height: 16,
                        borderRadius: 5,
                        background: `${accent}1A`,
                        color: accent,
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
            </article>
          );
        })}
      </div>

      <div
        style={{
          marginTop: 24,
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Link
          to="/pricing"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            fontSize: 13,
            fontWeight: 700,
            color: ToneA,
            textDecoration: 'none',
          }}
        >
          Compare full retainer plans
          <ArrowIcon />
        </Link>
      </div>
    </div>
  </section>
);

export default CarePlans;
