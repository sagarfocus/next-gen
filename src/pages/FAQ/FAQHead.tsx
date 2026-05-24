import { Link } from 'react-router-dom';
import Breadcrumb from '@/components/Breadcrumb';
import { ArrowIcon } from '@/components/icons';
import { META_ROWS } from '@/content/faq/meta';
import { CATEGORIES } from '@/content/faq/categories';

const QUESTION_COUNT = CATEGORIES.reduce((sum, c) => sum + c.items.length, 0);
const SECTION_COUNT = CATEGORIES.length;

const FAQHead = () => {
  return (
    <section className="ph-page-head">
      <div className="container-shell">
        <Breadcrumb items={[{ label: 'FAQ' }]} section="FAQ" />
        <div className="ph-row">
          <div>
            <div className="ph-eyebrow">
              <span className="ph-issue">
                {QUESTION_COUNT} questions · {SECTION_COUNT} sections · Updated monthly
              </span>
            </div>
            <h1 className="ph-title">Compliance, pricing, onboarding - answered by the team.</h1>
            <p
              style={{
                margin: '18px 0 0',
                maxWidth: '64ch',
                fontSize: 'clamp(15px, 1.3vw, 17px)',
                lineHeight: 1.65,
                color: '#4A5568',
              }}
            >
              Every question below comes from a real practice owner - not a generic FAQ template. We
              refresh this page every month with the questions we hear most often during audits and
              onboarding.
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
                Browse all questions <ArrowIcon size={12} strokeWidth={2.2} />
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
                Can&rsquo;t find yours? Ask us <ArrowIcon size={12} strokeWidth={2.2} />
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
