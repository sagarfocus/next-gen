import { useMemo, useState } from 'react';
import type { ChangeEvent, ReactElement } from 'react';
import { Link } from 'react-router-dom';
import { ArrowIcon, ChevronRightIcon, ClockIcon } from '@/components/icons';
import imgHipaa from '../../assets/nextgen-image/Hippablogimg.png';
import imgUrgentCpa from '../../assets/nextgen-image/Urgentcpablogimg.png';
import imgReviews from '../../assets/nextgen-image/Googlereviewblogimg.png';
import imgGbp from '../../assets/nextgen-image/7googlebuisnessblogimg.png';
import imgAi from '../../assets/nextgen-image/Aipatientblogimg.png';
import imgMedspa from '../../assets/nextgen-image/Medspaltvblogimg.png';
import imgWait from '../../assets/nextgen-image/Waitmarketingblogimg.png';
import imgDashboard from '../../assets/nextgen-image/Marketingbloghimg.png';
import imgFsed from '../../assets/nextgen-image/freestandingerblogimg.png';

interface Article {
  href: string;
  cat: string;
  catLabel: string;
  date: string;
  readTime: string;
  title: string;
  excerpt: string;
  author: string;
  illustration: ReactElement;
}

const ARTICLES: Article[] = [
  {
    href: '/blog/hipaa-tracking',
    cat: 'compliance',
    catLabel: 'HIPAA Compliance',
    date: 'Apr 22, 2026',
    readTime: '8 min read',
    title: 'How to set up HIPAA-compliant Google Ads tracking in 2026.',
    excerpt:
      'A step-by-step guide to server-side tracking, BAA-ready vendors, and the consent flows that keep your conversion data clean without exposing PHI.',
    author: 'Priya Patel',
    illustration: <img src={imgHipaa} alt="" loading="lazy" decoding="async" />,
  },
  {
    href: '/blog/ads-cost',
    cat: 'paid',
    catLabel: 'Paid Media',
    date: 'Apr 18, 2026',
    readTime: '6 min read',
    title: 'Why your urgent care CPA is probably 30% too high.',
    excerpt:
      'The 4 most common bidding mistakes we see in urgent care Google Ads accounts - and the audit checklist we use to identify them in the first 24 hours.',
    author: 'Marcus Rodriguez',
    illustration: <img src={imgUrgentCpa} alt="" loading="lazy" decoding="async" />,
  },
  {
    href: '/blog/reviews',
    cat: 'reputation',
    catLabel: 'Reputation',
    date: 'Apr 14, 2026',
    readTime: '5 min read',
    title: 'Automating Google reviews without violating HIPAA.',
    excerpt:
      "Patient testimonials are 10x more powerful than ad copy - but most review automation tools quietly break HIPAA. Here's the stack we use instead.",
    author: 'Sarah Chen',
    illustration: <img src={imgReviews} alt="" loading="lazy" decoding="async" />,
  },
  {
    href: '/blog/maps-rank',
    cat: 'seo',
    catLabel: 'Local SEO',
    date: 'Apr 10, 2026',
    readTime: '9 min read',
    title: 'The 7 Google Business Profile signals that move map rankings.',
    excerpt:
      'After managing 200+ Google Business Profiles across Texas, these are the 7 signals that actually correlate with local-pack ranking improvement - ranked by leverage.',
    author: 'Marcus Rodriguez',
    illustration: <img src={imgGbp} alt="" loading="lazy" decoding="async" />,
  },
  {
    href: '/blog/ai-chatbot',
    cat: 'automation',
    catLabel: 'Automation & AI',
    date: 'Apr 6, 2026',
    readTime: '11 min read',
    title: 'AI patient intake: what works, what breaks compliance.',
    excerpt:
      "AI scheduling and intake bots can cut front-desk load by 40%. They can also leak PHI in 6 different ways. Here's the architecture that does the first without the second.",
    author: 'David Kim',
    illustration: <img src={imgAi} alt="" loading="lazy" decoding="async" />,
  },
  {
    href: '/blog/medspa',
    cat: 'medspa',
    catLabel: 'MedSpa Marketing',
    date: 'Apr 2, 2026',
    readTime: '7 min read',
    title: 'The MedSpa LTV playbook: turning $300 facials into $4K patients.',
    excerpt:
      "High-LTV MedSpa marketing isn't about cheaper acquisition - it's about better post-purchase journey. Here's the email + SMS + remarketing stack we deploy on day one.",
    author: 'Marcus Rodriguez',
    illustration: <img src={imgMedspa} alt="" loading="lazy" decoding="async" />,
  },
  {
    href: '/blog/urgent-care',
    cat: 'urgent',
    catLabel: 'Urgent Care',
    date: 'Mar 28, 2026',
    readTime: '6 min read',
    title: 'Wait-time marketing: the urgent care advantage no one is using.',
    excerpt:
      'Why publishing real-time wait times publicly converts 23% better than promoting "convenience" or "walk-in welcome" - and the technical stack to do it safely.',
    author: 'Sarah Chen',
    illustration: <img src={imgWait} alt="" loading="lazy" decoding="async" />,
  },
  {
    href: '/blog/analytics',
    cat: 'analytics',
    catLabel: 'Analytics',
    date: 'Mar 24, 2026',
    readTime: '8 min read',
    title: 'The healthcare marketing dashboard every clinic should run.',
    excerpt:
      "CPA, appointment-to-show ratio, LTV, channel ROI - the 12 metrics we put on every client's real-time dashboard, plus the alerts that catch problems before they hit revenue.",
    author: 'David Kim',
    illustration: <img src={imgDashboard} alt="" loading="lazy" decoding="async" />,
  },
  {
    href: '/blog/fsed-trauma',
    cat: 'fsed',
    catLabel: 'FSED',
    date: 'Mar 20, 2026',
    readTime: '10 min read',
    title: 'Freestanding ER marketing: high-acuity keyword bidding done right.',
    excerpt:
      '"Chest pain near me" costs $48 per click. "ER near me" costs $12. Here\'s the keyword segmentation framework that captures the right intent without burning budget on tire-kickers.',
    author: 'Sarah Chen',
    illustration: <img src={imgFsed} alt="" loading="lazy" decoding="async" />,
  },
];

const CATEGORIES: { id: string; label: string; count: number }[] = [
  { id: 'all', label: 'All', count: 42 },
  { id: 'seo', label: 'Local SEO', count: 8 },
  { id: 'paid', label: 'Paid Media', count: 7 },
  { id: 'compliance', label: 'HIPAA', count: 6 },
  { id: 'automation', label: 'Automation & AI', count: 5 },
  { id: 'reputation', label: 'Reputation', count: 4 },
  { id: 'medspa', label: 'MedSpa', count: 5 },
  { id: 'urgent', label: 'Urgent Care', count: 4 },
  { id: 'fsed', label: 'FSED', count: 3 },
];

const CalendarIcon = () => (
  <svg
    width={11}
    height={11}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.8}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="3" y="4" width="18" height="18" rx="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);

const UserIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.8}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="8" r="4" />
    <path d="M4 22 C 4 16 7 14 12 14 C 17 14 20 16 20 22" />
  </svg>
);

const ArticleGrid = () => {
  const [activeCat, setActiveCat] = useState('all');
  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return ARTICLES.filter((article) => {
      const catMatches = activeCat === 'all' || article.cat === activeCat;
      if (!catMatches) return false;
      if (!q) return true;
      return article.title.toLowerCase().includes(q) || article.excerpt.toLowerCase().includes(q);
    });
  }, [activeCat, query]);

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    if (e.target.value.trim() !== '' && activeCat !== 'all') {
      setActiveCat('all');
    }
  };

  return (
    <>
      <section className="bl-tools" aria-label="Filter articles">
        <div className="container-shell">
          <div className="bl-tools-grid">
            <div className="bl-cats" role="tablist">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  className={`bl-cat${activeCat === cat.id ? ' is-active' : ''}`}
                  onClick={() => setActiveCat(cat.id)}
                >
                  {cat.label} <span className="count">{cat.count}</span>
                </button>
              ))}
            </div>

            <div className="bl-search">
              <svg
                width={16}
                height={16}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.8}
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
              <input
                type="search"
                placeholder="Search articles..."
                aria-label="Search articles"
                value={query}
                onChange={handleSearch}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bl-grid-section" aria-label="All articles">
        <div className="container-shell">
          <div className="bl-grid" id="bl-grid">
            {filtered.length === 0 ? (
              <div className="bl-empty">
                No articles match your search. Try a different keyword or category.
              </div>
            ) : (
              filtered.map((article) => (
                <Link key={article.href} to={article.href} className="bl-card">
                  <div className="bl-card-cover">
                    <span className="bl-card-cat">{article.catLabel}</span>
                    {article.illustration}
                  </div>
                  <div className="bl-card-body">
                    <div className="bl-card-meta-top">
                      <span className="item">
                        <CalendarIcon />
                        {article.date}
                      </span>
                      <span className="dot" />
                      <span className="item">
                        <ClockIcon size={11} />
                        {article.readTime}
                      </span>
                    </div>
                    <h3 className="bl-card-title">{article.title}</h3>
                    <p className="bl-card-excerpt">{article.excerpt}</p>
                    <div className="bl-card-foot">
                      <div className="bl-card-author">
                        <div className="bl-card-author-avatar" aria-hidden="true">
                          <UserIcon />
                        </div>
                        <span className="bl-card-author-name">{article.author}</span>
                      </div>
                      <span className="bl-card-cta">
                        Read more
                        <ArrowIcon size={11} />
                      </span>
                    </div>
                  </div>
                </Link>
              ))
            )}
          </div>

          <nav className="bl-pagination" aria-label="Pagination">
            <button className="bl-pg-btn bl-pg-arrow" disabled aria-label="Previous page">
              <svg
                width={14}
                height={14}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2.2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>
            <button className="bl-pg-btn is-active">1</button>
            <button className="bl-pg-btn">2</button>
            <button className="bl-pg-btn">3</button>
            <button className="bl-pg-btn">4</button>
            <button className="bl-pg-btn bl-pg-arrow" aria-label="Next page">
              <ChevronRightIcon />
            </button>
          </nav>
        </div>
      </section>
    </>
  );
};

export default ArticleGrid;
