import type { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import NewsThumb from './NewsThumb';

interface LatestItem {
  to: string;
  cat: string;
  title: string;
  meta: string;
}

interface FeaturedItem {
  to: string;
  cat: string;
  title: string;
  meta: string;
}

interface PopularItem {
  to: string;
  num: string;
  cat: string;
  title: string;
  meta: string;
}

const LATEST: LatestItem[] = [
  {
    to: '/healthcare-news/mayo-wearable-heart-monitor',
    cat: 'Research',
    title: 'Mayo Clinic pilots wearable heart-monitor program for high-risk patients',
    meta: 'Apr 27 · 5 min read',
  },
  {
    to: '/healthcare-news/mental-health-coverage-expansion',
    cat: 'Insurance',
    title: 'Major carriers expand mental-health coverage following parity ruling',
    meta: 'Apr 26 · 6 min read',
  },
  {
    to: '/healthcare-news/rural-clinics-shared-ehr',
    cat: 'Operations',
    title: 'Rural clinics partner on shared EHR system to reduce admin overhead',
    meta: 'Apr 26 · 4 min read',
  },
  {
    to: '/healthcare-news/dental-online-bookings-growth',
    cat: 'Marketing',
    title: 'Dental practices report 22% growth in online bookings year-over-year',
    meta: 'Apr 25 · 5 min read',
  },
  {
    to: '/healthcare-news/ai-pharmacy-inventory',
    cat: 'Pharmacy',
    title: 'National chains roll out AI-powered inventory forecasting to cut waste',
    meta: 'Apr 24 · 4 min read',
  },
];

const FEATURED_ITEMS: FeaturedItem[] = [
  {
    to: '/healthcare-news/texas-clinic-n8n-workflows',
    cat: 'Case Study',
    title: 'How a Texas clinic recaptured 18 hours/week with three N8N workflows',
    meta: 'Apr 26 · 7 min read',
  },
  {
    to: '/healthcare-news/hipaa-pitfalls-2026',
    cat: 'Compliance',
    title: 'Five HIPAA pitfalls every healthcare marketer should know in 2026',
    meta: 'Apr 25 · 9 min read',
  },
  {
    to: '/healthcare-news/marketing-stack-standardization',
    cat: 'Tech Stack',
    title: 'The marketing stack modern practices are quietly standardizing on',
    meta: 'Apr 23 · 8 min read',
  },
];

const POPULAR: PopularItem[] = [
  {
    to: '/healthcare-news/patient-reviews-search-weight',
    num: '01',
    cat: 'Reputation',
    title: 'Why patient reviews carry 3× more weight in the 2026 search ranking',
    meta: '5,213 reads',
  },
  {
    to: '/healthcare-news/ai-front-desks-rise',
    num: '02',
    cat: 'Operations',
    title: 'Inside the rise of AI-powered front desks - and what they replace',
    meta: '4,082 reads',
  },
  {
    to: '/healthcare-news/compliant-email-drips',
    num: '03',
    cat: 'Email',
    title: 'Compliant email drips that actually convert patients (with examples)',
    meta: '3,648 reads',
  },
  {
    to: '/healthcare-news/medspa-roas-2026',
    num: '04',
    cat: 'Paid Ads',
    title: 'What healthy ROAS actually looks like for med-spas in 2026',
    meta: '3,201 reads',
  },
  {
    to: '/healthcare-news/ehr-sms-no-show-reduction',
    num: '05',
    cat: 'Automation',
    title: 'How EHR-connected SMS reminders are cutting no-shows by 40%',
    meta: '2,945 reads',
  },
];

const FEATURED_MAIN_TO = '/healthcare-news/texas-clinic-n8n-workflows';

const ArrowRight = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2.2}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

const TrendIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2.2}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
    <polyline points="17 6 23 6 23 12" />
  </svg>
);

const ColumnHead = ({
  title,
  to,
  linkLabel,
  icon,
}: {
  title: string;
  to: string;
  linkLabel: string;
  icon: ReactElement;
}) => (
  <div className="tc-head">
    <h2>{title}</h2>
    <Link to={to} className="tc-link">
      {linkLabel}
      {icon}
    </Link>
  </div>
);

const NewsThreeColumn = () => {
  return (
    <section className="three-col">
      <div className="container-shell">
        <div className="tc-grid">
          {/* COL 1: Latest */}
          <div className="tc-col">
            <ColumnHead
              title="Latest News"
              to="/blog"
              linkLabel="All"
              icon={<ArrowRight />}
            />
            {LATEST.map((item) => (
              <Link key={item.to} className="latest-item" to={item.to}>
                <div className="latest-img">
                  <NewsThumb
                    category={item.cat}
                    seed={`latest-${item.to}`}
                    aspect="square"
                  />
                </div>
                <div>
                  <span className="latest-cat">{item.cat}</span>
                  <h3 className="latest-title">{item.title}</h3>
                  <div className="latest-meta">{item.meta}</div>
                </div>
              </Link>
            ))}
          </div>

          {/* COL 2: Featured */}
          <div className="tc-col">
            <ColumnHead
              title="Featured News"
              to="/case-studies"
              linkLabel="All"
              icon={<ArrowRight />}
            />

            <Link className="featured-main" to={FEATURED_MAIN_TO}>
              <div className="featured-main-img">
                <NewsThumb
                  category="Long Read · Practice Operations"
                  seed="featured-main-long-read"
                  aspect="landscape"
                  caption="Long Read · Practice Operations"
                />
              </div>
              <span className="featured-item-cat">
                Long Read · Practice Operations
              </span>
              <h3 className="featured-main-title">
                The real cost of manual patient intake - and how clinics
                are cutting it in half
              </h3>
              <p className="featured-main-desc">
                An eight-week investigation across 60 clinics reveals where
                front-desk hours actually go, and which automation patterns
                deliver measurable ROI within the first quarter.
              </p>
              <div className="hg-byline">
                <span>
                  By <strong>Marcus Reyes</strong>
                </span>
                <span className="dot" />
                <span>Apr 28 · 12 min</span>
              </div>
            </Link>

            <div className="featured-list">
              {FEATURED_ITEMS.map((item) => (
                <Link key={item.to} className="featured-item" to={item.to}>
                  <span className="featured-item-cat">{item.cat}</span>
                  <h4 className="featured-item-title">{item.title}</h4>
                  <div className="featured-item-meta">{item.meta}</div>
                </Link>
              ))}
            </div>
          </div>

          {/* COL 3: Most Popular */}
          <div className="tc-col">
            <ColumnHead
              title="Most Popular"
              to="/blog"
              linkLabel="Trending"
              icon={<TrendIcon />}
            />
            {POPULAR.map((item) => (
              <Link key={item.to} className="pop-item" to={item.to}>
                <span className="pop-num">{item.num}</span>
                <div>
                  <span className="pop-cat">{item.cat}</span>
                  <h3 className="pop-title">{item.title}</h3>
                  <div className="pop-meta">{item.meta}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsThreeColumn;
