import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import NewsThumb from './NewsThumb';
import { newsBySlug } from './news.data';

const imgFor = (path: string) => {
  const slug = path.replace('/healthcare-news/', '');
  return newsBySlug(slug)?.img;
};

interface TrendCard {
  to: string;
  cat: string;
  title: string;
  meta: string;
}

const CARDS: TrendCard[] = [
  {
    to: '/healthcare-news/ai-imaging-diagnostic-errors',
    cat: 'Research',
    title: 'AI imaging tool cuts radiology errors 47%',
    meta: 'May 1, 2026 · 9 min',
  },
  {
    to: '/healthcare-news/telemedicine-q1-record',
    cat: 'Telehealth',
    title: 'Mental-health visits hit a new Q1 record',
    meta: 'Apr 29 · 6 min',
  },
  {
    to: '/healthcare-news/voice-ai-front-desks',
    cat: 'Operations',
    title: 'Voice-AI front desks land in 38 hospitals',
    meta: 'Apr 28 · 5 min',
  },
  {
    to: '/healthcare-news/patient-reviews-search-weight',
    cat: 'Marketing',
    title: 'Why patient reviews carry 3× more SEO weight',
    meta: 'Apr 27 · 7 min',
  },
  {
    to: '/healthcare-news/hipaa-pitfalls-2026',
    cat: 'Compliance',
    title: 'Five HIPAA pitfalls every marketer must know',
    meta: 'Apr 25 · 9 min',
  },
  {
    to: '/healthcare-news/ehr-sms-no-show-reduction',
    cat: 'Automation',
    title: 'EHR-connected SMS cut no-shows by 40%',
    meta: 'Apr 24 · 5 min',
  },
  {
    to: '/healthcare-news/texas-clinic-n8n-workflows',
    cat: 'Case Study',
    title: 'Texas clinic reclaims 18 hrs a week with N8N',
    meta: 'Apr 22 · 7 min',
  },
  {
    to: '/healthcare-news/medspa-roas-2026',
    cat: 'Paid Ads',
    title: 'What healthy ROAS looks like for med-spas',
    meta: 'Apr 20 · 6 min',
  },
];

const renderCard = (card: TrendCard, ariaHidden: boolean) => (
  <Link
    className="trend-card"
    to={card.to}
    aria-hidden={ariaHidden || undefined}
    tabIndex={ariaHidden ? -1 : undefined}
  >
    <div className="trend-img">
      <NewsThumb
        category={card.cat}
        seed={`trend-${card.to}`}
        aspect="landscape"
        image={imgFor(card.to)}
      />
    </div>
    <span className="trend-cat">{card.cat}</span>
    <h3 className="trend-title">{card.title}</h3>
    <div className="trend-meta">{card.meta}</div>
  </Link>
);

const TrendingRail = () => {
  return (
    <section className="trending" aria-labelledby="trending-title">
      <div className="container-shell">
        <div className="trending-head">
          <div className="trending-eyebrow">Welcome to TheNextGen Lab</div>
          <h2 className="trending-title" id="trending-title">
            Stay updated with
            <br />
            the trending articles
          </h2>
          <p className="trending-sub">
            Hover any card to pause the rail and click through. New stories drop every Friday in our
            weekly brief.
          </p>
        </div>
      </div>

      <svg
        className="trending-rope"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="ropeGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#B38B6D" stopOpacity="0" />
            <stop offset="15%" stopColor="#B38B6D" stopOpacity=".55" />
            <stop offset="50%" stopColor="#B38B6D" stopOpacity=".9" />
            <stop offset="85%" stopColor="#B38B6D" stopOpacity=".55" />
            <stop offset="100%" stopColor="#B38B6D" stopOpacity="0" />
          </linearGradient>
        </defs>
        <circle cx="600" cy="14" r="5" fill="#B38B6D" />
        <circle
          cx="600"
          cy="14"
          r="9"
          fill="none"
          stroke="#B38B6D"
          strokeOpacity=".4"
          strokeWidth="1"
        />
        <path
          d="M 600,18 C 600,40 500,50 380,60 S 140,90 40,108"
          fill="none"
          stroke="url(#ropeGrad)"
          strokeWidth="1.5"
          strokeDasharray="1 5"
          strokeLinecap="round"
        />
        <path
          d="M 600,18 C 600,40 700,50 820,60 S 1060,90 1160,108"
          fill="none"
          stroke="url(#ropeGrad)"
          strokeWidth="1.5"
          strokeDasharray="1 5"
          strokeLinecap="round"
        />
        <circle cx="40" cy="108" r="3" fill="#B38B6D" />
        <circle cx="1160" cy="108" r="3" fill="#B38B6D" />
      </svg>

      <div className="trending-rail">
        <div className="trending-track">
          {CARDS.map((card) => (
            <Fragment key={`a-${card.to}`}>{renderCard(card, false)}</Fragment>
          ))}
          {CARDS.map((card) => (
            <Fragment key={`b-${card.to}`}>{renderCard(card, true)}</Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingRail;
