import { Link } from 'react-router-dom';
import { ROW_1, ROW_2, type PairCard } from '@/content/services/feature-pairs';

const PairArrow = () => (
  <svg
    width={14}
    height={14}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2.4}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <line x1="7" y1="17" x2="17" y2="7" />
    <polyline points="7 7 17 7 17 17" />
  </svg>
);

const renderCard = ({ ariaId, bg, tag, title, desc, to }: PairCard) => (
  <Link
    key={ariaId}
    to={to}
    className="pair-card"
    aria-labelledby={ariaId}
  >
    <div className="pair-bg">{bg}</div>
    <div className="pair-overlay" />
    <span className="reg-w tl" />
    <span className="reg-w tr" />
    <div className="pair-content">
      <span className="pair-tag">{tag}</span>
      <div className="pair-bottom">
        <h3 id={ariaId} className="pair-title">
          {title}
        </h3>
        <p className="pair-desc">{desc}</p>
        <span className="pair-cta">
          Learn More
          <PairArrow />
        </span>
      </div>
    </div>
  </Link>
);

const FeaturePair = () => {
  return (
    <section className="pair-section" id="local-aeo" aria-labelledby="pair-title">
      <div className="container-shell">
        <div className="pair-head">
          <span className="pair-eyebrow">Local SEO &amp; Visibility</span>
          <h2 id="pair-title" className="pair-h2">
            Own your local search - from map pack to AI Overviews.
          </h2>
          <p className="pair-sub">
            A four-pillar approach to local search visibility, structured data,
            and AI-driven discovery for your healthcare practice.
          </p>
        </div>

        <div className="pair-grid" style={{ marginBottom: 'clamp(20px, 2.5vw, 32px)' }}>
          {ROW_1.map(renderCard)}
        </div>
        <div className="pair-grid">{ROW_2.map(renderCard)}</div>
      </div>
    </section>
  );
};

export default FeaturePair;
