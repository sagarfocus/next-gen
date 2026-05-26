import type { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import Breadcrumb from '@/components/Breadcrumb';
import { AnimatedBackground } from '@/lib/motion';
import { ArrowIcon } from '@/components/icons';
import imgHipaa from '../../assets/nextgen-image/Hippablogimg.png';
import imgGbp from '../../assets/nextgen-image/7googlebuisnessblogimg.png';
import imgCpa from '../../assets/nextgen-image/Urgentcpablogimg.png';
import imgFeatured from '../../assets/nextgen-image/bannerblogimg.png';
import imgAi from '../../assets/nextgen-image/Gptbotimg.png';
import imgMedspa from '../../assets/nextgen-image/Medspas&wellnessimg.png';
import imgReviews from '../../assets/nextgen-image/Reviewcollectionimg.png';
import imgUrgent from '../../assets/nextgen-image/Urgentcareimg.png';
import imgDash from '../../assets/nextgen-image/Visibiltyscoreimg.png';

interface SideCard {
  href: string;
  cls: string;
  cat: string;
  catColor?: string;
  title: string;
  meta: string;
  illustration: ReactElement;
}

const LEFT_SIDE: SideCard[] = [
  {
    href: '/blog/hipaa-tracking',
    cls: 's1',
    cat: 'Compliance',
    title: 'HIPAA-compliant Google Ads tracking in 2026.',
    meta: 'Apr 22, 2026 · 8 min read',
    illustration: <img src={imgHipaa} alt="" loading="lazy" decoding="async" />,
  },
  {
    href: '/blog/maps-rank',
    cls: 's2',
    cat: 'Local SEO',
    title: '7 Google Business Profile signals that move map rankings.',
    meta: 'Apr 10, 2026 · 9 min read',
    illustration: <img src={imgGbp} alt="" loading="lazy" decoding="async" />,
  },
];

const RIGHT_SIDE: SideCard[] = [
  {
    href: '/blog/ads-cost',
    cls: 's3',
    cat: 'Paid Media',
    title: 'Why your urgent care CPA is probably 30% too high.',
    meta: 'Apr 18, 2026 · 6 min read',
    illustration: <img src={imgCpa} alt="" loading="lazy" decoding="async" />,
  },
];

interface LatestItem {
  href: string;
  title: string;
  meta: string;
  thumb: ReactElement;
}

const LATEST: LatestItem[] = [
  {
    href: '/blog/ai-chatbot',
    title: 'AI patient intake: what works, what breaks compliance.',
    meta: 'Apr 6 · 11 min',
    thumb: <img src={imgAi} alt="" loading="lazy" decoding="async" />,
  },
  {
    href: '/blog/medspa',
    title: 'MedSpa LTV: turning $300 facials into $4K patients.',
    meta: 'Apr 2 · 7 min',
    thumb: <img src={imgMedspa} alt="" loading="lazy" decoding="async" />,
  },
  {
    href: '/blog/reviews',
    title: 'Automating Google reviews without violating HIPAA.',
    meta: 'Apr 14 · 5 min',
    thumb: <img src={imgReviews} alt="" loading="lazy" decoding="async" />,
  },
  {
    href: '/blog/urgent-care',
    title: 'Wait-time marketing: the urgent care advantage no one is using.',
    meta: 'Mar 28 · 6 min',
    thumb: <img src={imgUrgent} alt="" loading="lazy" decoding="async" />,
  },
  {
    href: '/blog/analytics',
    title: 'The healthcare marketing dashboard every clinic should run.',
    meta: 'Mar 24 · 8 min',
    thumb: <img src={imgDash} alt="" loading="lazy" decoding="async" />,
  },
];

interface TrendingTopic {
  label: string;
  to: string;
}

// Each trending topic anchors to a real article that covers the topic.
const TRENDING_TOPICS: TrendingTopic[] = [
  { label: 'Local SEO', to: '/blog/maps-rank' },
  { label: 'HIPAA Tracking', to: '/blog/hipaa-tracking' },
  { label: 'CPA Benchmarks', to: '/blog/ads-cost' },
  { label: 'AI Intake', to: '/blog/ai-chatbot' },
  { label: 'MedSpa LTV', to: '/blog/medspa' },
  { label: 'Reviews', to: '/blog/reviews' },
];

const renderSideCard = (card: SideCard) => (
  <Link key={card.href} to={card.href} className={`bl-side-card ${card.cls}`}>
    <div className="bl-side-cover">{card.illustration}</div>
    <div className="bl-side-body">
      <span className="bl-side-cat">{card.cat}</span>
      <h3 className="bl-side-title">{card.title}</h3>
      <span className="bl-side-meta">{card.meta}</span>
    </div>
  </Link>
);

const BlogHero = () => {
  return (
    <section className="bl-hero" aria-labelledby="bl-title">
      <AnimatedBackground variant="aurora" intensity="subtle" />
      <span className="bl-hero-reg tr" aria-hidden="true" />
      <span className="bl-hero-reg bl" aria-hidden="true" />

      <div className="container-shell">
        <Breadcrumb current="Blog" />

        <div className="bl-mast reveal d2">
          <span className="bl-mast-eyebrow">
            <span className="swatch" aria-hidden="true">
              <i />
              <i />
              <i />
            </span>
            The Practitioner&rsquo;s Brief
          </span>
          <h1 id="bl-title" className="bl-mast-h1">
            Healthcare <span className="ital">marketing,</span> written by{' '}
            <span className="accent">practitioners</span>.
          </h1>
          <p className="bl-mast-lede">
            <strong>Field-tested tactics, not theory.</strong> Patient acquisition strategies, HIPAA
            updates, and growth case studies from the team that&rsquo;s helped 200+ Texas practices
            scale.
          </p>
        </div>

        <div className="bl-hero-topics reveal d3">
          <span className="bl-hero-topics-label">Trending Topics</span>
          {TRENDING_TOPICS.map((topic) => (
            <Link key={topic.label} to={topic.to} className="bl-hero-topic">
              {topic.label}
            </Link>
          ))}
        </div>

        <div className="bl-edit-grid reveal d3">
          <div className="bl-side">{LEFT_SIDE.map(renderSideCard)}</div>

          <Link to="/blog/ads-cost" className="bl-feat">
            <div className="bl-feat-cover">
              <span className="bl-feat-badge">Featured</span>
              <img src={imgFeatured} alt="" loading="lazy" decoding="async" />
            </div>
            <div className="bl-feat-body">
              <span className="bl-feat-cat">Growth Strategy</span>
              <h2 className="bl-feat-title">
                The new Cost Per Acquisition benchmarks for healthcare in 2026.
              </h2>
              <p className="bl-feat-excerpt">
                After analyzing $10M+ in healthcare ad spend across 200+ Texas practices,
                we&rsquo;ve compiled the actual CPA ranges - plus the 4 levers that consistently
                bring it down.
              </p>
              <div className="bl-feat-meta">
                <span>Apr 28, 2026</span>
                <span className="dot" />
                <span className="author">Sarah Chen</span>
                <span className="dot" />
                <span>12 min read</span>
              </div>
            </div>
          </Link>

          <div className="bl-side">
            <aside className="bl-latest" aria-label="Latest articles">
              <div className="bl-latest-head">
                <h3 className="bl-latest-title">Latest</h3>
                <a href="#bl-grid" className="bl-latest-link">
                  See all
                  <ArrowIcon size={11} />
                </a>
              </div>

              <div className="bl-latest-list">
                {LATEST.map((item) => (
                  <Link key={item.href} to={item.href} className="bl-latest-item">
                    <div className="bl-latest-body">
                      <h4 className="bl-latest-h">{item.title}</h4>
                      <span className="bl-latest-meta">{item.meta}</span>
                    </div>
                    <span className="bl-latest-thumb">{item.thumb}</span>
                  </Link>
                ))}
              </div>
            </aside>

            {RIGHT_SIDE.map(renderSideCard)}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogHero;
