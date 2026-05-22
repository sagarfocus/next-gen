import { useMemo, useState } from 'react';
import type { ChangeEvent, ReactElement } from 'react';
import { Link } from 'react-router-dom';
import { ArrowIcon, ChevronRightIcon, ClockIcon } from '../../components/icons';

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
    illustration: (
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path
          d="M50 20 L 25 30 V 50 C 25 65 36 78 50 82 C 64 78 75 65 75 50 V 30 Z"
          fill="rgba(87,109,181,.10)"
          stroke="#576DB5"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />
        <path
          d="M40 50 L 47 57 L 62 42"
          fill="none"
          stroke="#8FBC8F"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="78" cy="22" r="4" fill="#B38B6D" />
      </svg>
    ),
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
    illustration: (
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <line x1="20" y1="80" x2="20" y2="22" stroke="#2D3748" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="20" y1="80" x2="80" y2="80" stroke="#2D3748" strokeWidth="1.5" strokeLinecap="round" />
        <polyline
          points="28,68 40,52 52,58 64,38 76,28"
          fill="none"
          stroke="#576DB5"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="76" cy="28" r="4" fill="#8FBC8F" />
        <text
          x="50"
          y="92"
          textAnchor="middle"
          fontFamily="Plus Jakarta Sans, sans-serif"
          fontSize="8"
          fontWeight="700"
          letterSpacing="2"
          fill="#B38B6D"
        >
          CPA
        </text>
      </svg>
    ),
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
    illustration: (
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <polygon
          points="50,18 60,40 84,42 66,58 72,82 50,68 28,82 34,58 16,42 40,40"
          fill="rgba(143,188,143,.20)"
          stroke="#8FBC8F"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />
        <polygon points="50,28 56,42 72,43 60,55 64,71 50,62 36,71 40,55 28,43 44,42" fill="#8FBC8F" />
      </svg>
    ),
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
    illustration: (
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path
          d="M50 18 C 36 18 26 28 26 42 C 26 60 50 84 50 84 S 74 60 74 42 C 74 28 64 18 50 18 Z"
          fill="rgba(179,139,109,.18)"
          stroke="#B38B6D"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />
        <circle cx="50" cy="42" r="9" fill="#fff" stroke="#B38B6D" strokeWidth="2" />
        <circle cx="50" cy="42" r="4" fill="#576DB5" />
      </svg>
    ),
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
    illustration: (
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <rect
          x="22"
          y="28"
          width="56"
          height="40"
          rx="10"
          fill="rgba(87,109,181,.10)"
          stroke="#576DB5"
          strokeWidth="2.5"
        />
        <circle cx="40" cy="48" r="3" fill="#576DB5" />
        <circle cx="50" cy="48" r="3" fill="#8FBC8F" />
        <circle cx="60" cy="48" r="3" fill="#B38B6D" />
        <path
          d="M40 68 L 36 78 L 48 68 Z"
          fill="rgba(87,109,181,.10)"
          stroke="#576DB5"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />
      </svg>
    ),
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
    illustration: (
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <g transform="translate(50, 50)">
          <path d="M0 -22 Q 11 -4 0 14 Q -11 -4 0 -22 Z" fill="#8FBC8F" transform="rotate(0)" />
          <path d="M0 -22 Q 11 -4 0 14 Q -11 -4 0 -22 Z" fill="#8FBC8F" opacity=".75" transform="rotate(72)" />
          <path d="M0 -22 Q 11 -4 0 14 Q -11 -4 0 -22 Z" fill="#8FBC8F" opacity=".55" transform="rotate(144)" />
          <path d="M0 -22 Q 11 -4 0 14 Q -11 -4 0 -22 Z" fill="#8FBC8F" opacity=".75" transform="rotate(216)" />
          <path d="M0 -22 Q 11 -4 0 14 Q -11 -4 0 -22 Z" fill="#8FBC8F" opacity=".55" transform="rotate(288)" />
          <circle r="6" fill="#576DB5" />
        </g>
      </svg>
    ),
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
    illustration: (
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <rect
          x="20"
          y="28"
          width="60"
          height="50"
          rx="6"
          fill="rgba(87,109,181,.10)"
          stroke="#576DB5"
          strokeWidth="2.5"
        />
        <rect x="44" y="40" width="12" height="30" rx="2" fill="#8FBC8F" />
        <rect x="35" y="49" width="30" height="12" rx="2" fill="#8FBC8F" />
      </svg>
    ),
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
    illustration: (
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <circle
          cx="50"
          cy="50"
          r="32"
          fill="none"
          stroke="#B38B6D"
          strokeWidth="3"
          strokeDasharray="3 4"
        />
        <circle cx="50" cy="50" r="22" fill="rgba(87,109,181,.10)" stroke="#576DB5" strokeWidth="2.5" />
        <line x1="50" y1="50" x2="50" y2="32" stroke="#576DB5" strokeWidth="3" strokeLinecap="round" />
        <line x1="50" y1="50" x2="65" y2="58" stroke="#8FBC8F" strokeWidth="3" strokeLinecap="round" />
        <circle cx="50" cy="50" r="3" fill="#576DB5" />
      </svg>
    ),
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
    illustration: (
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path
          d="M14 50 L 30 50 L 38 30 L 50 70 L 60 22 L 70 50 L 86 50"
          fill="none"
          stroke="#576DB5"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <rect x="46" y="20" width="8" height="22" rx="1" fill="#8FBC8F" />
        <rect x="38" y="27" width="24" height="8" rx="1" fill="#8FBC8F" />
      </svg>
    ),
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
      return (
        article.title.toLowerCase().includes(q) ||
        article.excerpt.toLowerCase().includes(q)
      );
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
                No articles match your search. Try a different keyword or
                category.
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
