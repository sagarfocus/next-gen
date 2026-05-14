import { CountUp } from '../../lib/motion';

interface SmallStat {
  tag: string;
  value: number;
  prefix?: string;
  suffix: string;
  decimals?: number;
  label: string;
  ariaLabel: string;
}

const SMALL_STATS: SmallStat[] = [
  {
    tag: 'Emergency Room',
    value: 47,
    suffix: '%',
    label: 'Increase in walk-in patients in six months.',
    ariaLabel: '47% increase in walk-in patients — Emergency Room',
  },
  {
    tag: 'Urgent Care',
    value: 2.8,
    suffix: '×',
    decimals: 1,
    label: 'Return on ad spend in the first quarter.',
    ariaLabel: '2.8x return on ad spend — Urgent Care',
  },
  {
    tag: 'MedSpa Network',
    value: 1.2,
    prefix: '$',
    suffix: 'M',
    decimals: 1,
    label: 'Revenue generated from Facebook ads in 12 months.',
    ariaLabel: '$1.2M revenue generated — MedSpa Network',
  },
];

const ArrowIcon = ({ size = 14 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.8}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <line x1="7" y1="17" x2="17" y2="7" />
    <polyline points="7 7 17 7 17 17" />
  </svg>
);

const Results = () => {
  return (
    <section
      className="results-section"
      id="results"
      aria-labelledby="results-title"
    >
      <div className="container-shell">
        <div className="results-head">
          <span className="results-eyebrow">Proof of Work</span>
          <h2 id="results-title" className="results-h2">
            Real results.
          </h2>
          <p className="results-sub">
            We don&rsquo;t just talk &mdash; we deliver measurable outcomes for
            healthcare practices.
          </p>
        </div>

        <div className="stats-grid">
          {/* Big featured dark card */}
          <article
            className="stat-featured"
            aria-label="312% increase in Instagram leads — MedSpa"
          >
            <span className="stat-tag">MedSpa</span>
            <p className="stat-num">
              <CountUp to={312} suffix="%" duration={2.0} />
            </p>
            <p className="stat-label">
              Increase in Instagram leads in 90&nbsp;days &mdash; from a single
              optimized funnel and creative refresh.
            </p>
            <span className="stat-arrow" aria-hidden="true">
              <ArrowIcon size={16} />
            </span>
          </article>

          {/* Right column — 3 stacked cards */}
          <div className="stats-right">
            {SMALL_STATS.map(({ tag, value, prefix, suffix, decimals, label, ariaLabel }) => (
              <article
                key={tag}
                className="stat-card"
                aria-label={ariaLabel}
              >
                <span className="stat-tag">{tag}</span>
                <p className="stat-num">
                  <CountUp
                    to={value}
                    prefix={prefix}
                    suffix={suffix}
                    decimals={decimals ?? 0}
                    duration={1.8}
                  />
                </p>
                <p className="stat-label">{label}</p>
                <span className="stat-card-arrow">
                  <ArrowIcon />
                </span>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Results;
