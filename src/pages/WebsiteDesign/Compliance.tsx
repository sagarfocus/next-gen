import { Link } from 'react-router-dom';
import SectionHead from '../../components/service/SectionHead';
import { ArrowIcon, CheckIcon } from '../../components/icons';
import { COMPLIANCE_PILLARS } from '../../content/website-design/compliance';

const ToneA = '#576DB5';
const ToneC = '#B38B6D';
const ToneInk = '#2D3748';

const Compliance = () => (
  <section className="sv-section sv-compliance">
    <div className="container-shell">
      <SectionHead
        num="07 - Accessibility & HIPAA"
        title={
          <>
            Accessibility-defensible. <em>HIPAA-aware.</em>
          </>
        }
        meta={
          <>
            Audit report
            <br />
            ships with site
          </>
        }
      />

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(380px, 100%), 1fr))',
          gap: 'clamp(16px, 1.8vw, 24px)',
        }}
      >
        {COMPLIANCE_PILLARS.map((p, idx) => {
          const accent = idx === 0 ? ToneA : ToneC;
          return (
            <article
              key={p.tag}
              style={{
                background: '#fff',
                border: '1px solid rgba(45,55,72,0.10)',
                borderRadius: 18,
                padding: 'clamp(22px, 2.4vw, 32px)',
                display: 'flex',
                flexDirection: 'column',
                gap: 16,
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <span
                aria-hidden="true"
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: 3,
                  background: accent,
                }}
              />
              <span
                style={{
                  display: 'inline-block',
                  alignSelf: 'flex-start',
                  fontSize: 11,
                  fontWeight: 800,
                  letterSpacing: '0.22em',
                  textTransform: 'uppercase',
                  color: accent,
                  padding: '4px 10px',
                  borderRadius: 999,
                  background: `${accent}14`,
                }}
              >
                {p.tag}
              </span>
              <h3
                style={{
                  fontSize: 'clamp(20px, 2vw, 24px)',
                  fontWeight: 700,
                  letterSpacing: '-0.015em',
                  color: ToneInk,
                  margin: 0,
                  lineHeight: 1.2,
                }}
              >
                {p.title}
              </h3>
              <p
                style={{
                  fontSize: 14.5,
                  lineHeight: 1.6,
                  color: '#4A5568',
                  margin: 0,
                }}
              >
                {p.lede}
              </p>

              <ul
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 10,
                  listStyle: 'none',
                  padding: 0,
                  margin: '4px 0 0',
                }}
              >
                {p.bullets.map((b) => (
                  <li
                    key={b.label}
                    style={{
                      display: 'grid',
                      gridTemplateColumns: '20px 1fr',
                      gap: 10,
                      alignItems: 'baseline',
                    }}
                  >
                    <span
                      aria-hidden="true"
                      style={{
                        width: 18,
                        height: 18,
                        borderRadius: 6,
                        background: `${accent}1A`,
                        color: accent,
                        display: 'grid',
                        placeItems: 'center',
                      }}
                    >
                      <CheckIcon strokeWidth={3} />
                    </span>
                    <div>
                      <span
                        style={{
                          fontSize: 14,
                          fontWeight: 700,
                          color: ToneInk,
                        }}
                      >
                        {b.label}
                      </span>
                      <span
                        style={{
                          fontSize: 13.5,
                          color: '#5A6478',
                          marginLeft: 6,
                        }}
                      >
                        - {b.detail}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>

              <Link
                to={p.link.to}
                style={{
                  marginTop: 4,
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 8,
                  fontSize: 13,
                  fontWeight: 700,
                  color: accent,
                  textDecoration: 'none',
                  letterSpacing: '-0.005em',
                }}
              >
                {p.link.label}
                <ArrowIcon />
              </Link>
            </article>
          );
        })}
      </div>
    </div>
  </section>
);

export default Compliance;
