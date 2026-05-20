import { Link } from 'react-router-dom';
import Breadcrumb from '../../components/Breadcrumb';

interface MetaRow {
  label: string;
  value: string;
}

const META_ROWS: MetaRow[] = [
  {
    label: 'Sections',
    value: 'Getting Started · Pricing · Services · Compliance · Reporting',
  },
  { label: 'Updated', value: 'May 2026' },
  { label: 'Avg. response', value: 'Under 4 hours' },
];

const ArrowRight = () => (
  <svg
    width={12}
    height={12}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2.2}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

const FAQHead = () => {
  return (
    <section className="ph-page-head">
      <div className="container-shell">
        <Breadcrumb items={[{ label: 'FAQ' }]} section="FAQ" />
        <div className="ph-row">
          <div>
            <div className="ph-eyebrow">
              <span className="ph-issue">38 questions · 5 sections · Updated monthly</span>
            </div>
            <h1 className="ph-title">
              Compliance, pricing, onboarding - answered by the team.
            </h1>
            <p
              style={{
                margin: '18px 0 0',
                maxWidth: '64ch',
                fontSize: 'clamp(15px, 1.3vw, 17px)',
                lineHeight: 1.65,
                color: '#4A5568',
              }}
            >
              Every question below comes from a real practice owner - not a
              generic FAQ template. We refresh this page every month with the
              questions we hear most often during audits and onboarding.
            </p>
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: 12,
                marginTop: 24,
              }}
            >
              <a
                href="#fp-list"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 8,
                  padding: '11px 18px',
                  borderRadius: 10,
                  background: '#2D3748',
                  color: '#fff',
                  fontSize: 13.5,
                  fontWeight: 600,
                  letterSpacing: '-0.005em',
                }}
              >
                Browse all questions <ArrowRight />
              </a>
              <Link
                to="/contact"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 8,
                  padding: '11px 18px',
                  borderRadius: 10,
                  border: '1.5px solid rgba(45,55,72,0.18)',
                  color: '#2D3748',
                  fontSize: 13.5,
                  fontWeight: 600,
                }}
              >
                Can&rsquo;t find yours? Ask us <ArrowRight />
              </Link>
            </div>
          </div>
          <div className="ph-meta">
            {META_ROWS.map((row) => (
              <div key={row.label} className="ph-meta-row">
                <strong>{row.label}</strong>
                <span>{row.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQHead;
