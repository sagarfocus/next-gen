import SectionHead from '../../components/service/SectionHead';
import { STACK_GROUPS } from '../../content/website-design/stack';

const ToneA = '#576DB5';
const ToneC = '#B38B6D';
const ToneInk = '#2D3748';

const Stack = () => (
  <section className="sv-section sv-stack">
    <div className="container-shell">
      <SectionHead
        num="06 - Stack & integrations"
        title={
          <>
            Built on a modern, <em>secure stack.</em>
          </>
        }
        meta={
          <>
            Stack chosen
            <br />
            per project
          </>
        }
      />

      <div
        style={{
          display: 'grid',
          gap: 'clamp(16px, 1.8vw, 24px)',
        }}
      >
        {STACK_GROUPS.map((group, gIdx) => (
          <article
            key={group.label}
            style={{
              background: '#fff',
              border: '1px solid rgba(45,55,72,0.10)',
              borderRadius: 18,
              padding: 'clamp(20px, 2.2vw, 30px)',
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
                bottom: 0,
                width: 3,
                background: gIdx === 0 ? ToneA : ToneC,
              }}
            />
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'baseline',
                gap: 16,
                flexWrap: 'wrap',
                marginBottom: 16,
              }}
            >
              <h3
                style={{
                  fontSize: 18,
                  fontWeight: 700,
                  letterSpacing: '-0.005em',
                  color: ToneInk,
                  margin: 0,
                }}
              >
                {group.label}
              </h3>
              <p
                style={{
                  fontSize: 13,
                  color: '#5D4B3A',
                  margin: 0,
                  maxWidth: '52ch',
                }}
              >
                {group.caption}
              </p>
            </div>

            <ul
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(min(170px, 100%), 1fr))',
                gap: 10,
                listStyle: 'none',
                padding: 0,
                margin: 0,
              }}
            >
              {group.items.map((it) => (
                <li
                  key={it.name}
                  style={{
                    border: '1px solid rgba(45,55,72,0.10)',
                    borderRadius: 12,
                    padding: '12px 14px',
                    background: 'rgba(248, 242, 234, 0.45)',
                  }}
                >
                  <div
                    style={{
                      fontSize: 14,
                      fontWeight: 700,
                      color: ToneInk,
                      letterSpacing: '-0.005em',
                    }}
                  >
                    {it.name}
                  </div>
                  <div
                    style={{
                      fontSize: 12,
                      color: '#5A6478',
                      marginTop: 2,
                    }}
                  >
                    {it.note}
                  </div>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Stack;
