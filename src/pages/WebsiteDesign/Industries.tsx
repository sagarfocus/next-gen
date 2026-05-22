import { Link } from 'react-router-dom';
import SectionHead from '@/components/service/SectionHead';
import { ArrowIcon } from '@/components/icons';
import { INDUSTRIES } from '@/content/website-design/industries';

const ToneC = '#B38B6D';
const ToneInk = '#2D3748';

const Industries = () => (
  <section className="sv-section sv-wd-industries">
    <div className="container-shell">
      <SectionHead
        num="08 - Industries we build for"
        title={
          <>
            Healthcare-first - <em>vertical-specific.</em>
          </>
        }
        meta={
          <>
            One discipline.
            <br />
            Eight verticals.
          </>
        }
      />

      <ul
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(min(260px, 100%), 1fr))',
          gap: 'clamp(10px, 1.2vw, 14px)',
          listStyle: 'none',
          padding: 0,
          margin: 0,
        }}
      >
        {INDUSTRIES.map((it) => (
          <li key={it.label}>
            <Link
              to={it.to}
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 6,
                padding: '16px 18px',
                borderRadius: 14,
                background: '#fff',
                border: '1px solid rgba(45,55,72,0.10)',
                textDecoration: 'none',
                color: 'inherit',
                transition: 'transform .18s ease, border-color .18s ease',
                position: 'relative',
              }}
            >
              <span
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  gap: 8,
                }}
              >
                <span
                  style={{
                    fontSize: 15,
                    fontWeight: 700,
                    color: ToneInk,
                    letterSpacing: '-0.005em',
                  }}
                >
                  {it.label}
                </span>
                <span
                  aria-hidden="true"
                  style={{
                    color: ToneC,
                    display: 'inline-flex',
                  }}
                >
                  <ArrowIcon />
                </span>
              </span>
              <span
                style={{
                  fontSize: 13,
                  lineHeight: 1.5,
                  color: '#5A6478',
                }}
              >
                {it.blurb}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default Industries;
