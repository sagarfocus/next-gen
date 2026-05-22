import { Link } from 'react-router-dom';
import NewsThumb from './NewsThumb';

interface SideArticle {
  to: string;
  cat: string;
  title: string;
  meta: string;
}

const SIDE_ARTICLES: SideArticle[] = [
  {
    to: '/healthcare-news/fda-glucose-monitor-type2',
    cat: 'Regulation',
    title: 'FDA approves first continuous glucose monitor for Type 2 diabetes',
    meta: 'Apr 30 · 4 min read',
  },
  {
    to: '/healthcare-news/telemedicine-q1-record',
    cat: 'Telehealth',
    title: 'Telemedicine visits hit a record high in Q1, led by mental-health specialties',
    meta: 'Apr 29 · 6 min read',
  },
  {
    to: '/healthcare-news/voice-ai-front-desks',
    cat: 'AI & Operations',
    title: 'Hospital network adopts voice-AI front desks across 38 locations',
    meta: 'Apr 28 · 5 min read',
  },
  {
    to: '/healthcare-news/cms-cardiac-monitoring',
    cat: 'Policy',
    title: 'CMS announces expanded reimbursement for at-home cardiac monitoring',
    meta: 'Apr 27 · 7 min read',
  },
];

const NewsHeroGrid = () => {
  return (
    <section className="hn-hero">
      <div className="container-shell">
        <div className="hg-grid">
          <Link className="hg-main" to="/healthcare-news/ai-imaging-diagnostic-errors">
            <div className="hg-main-img">
              <NewsThumb
                category="Research"
                seed="hn-main-research"
                aspect="landscape"
                caption="Editorial · Research"
              />
            </div>
            <span className="hg-cat">Research</span>
            <h2 className="hg-main-title">
              AI-driven imaging tool cuts diagnostic errors by 47% in multi-site hospital trial
            </h2>
            <p className="hg-main-desc">
              A 14-month study across nine US hospital networks reports the largest measured drop in
              radiology misreads of the decade. Researchers credit a hybrid model combining
              federated learning with structured clinician feedback loops.
            </p>
            <div className="hg-byline">
              <span>
                By <strong>Aanya Patel</strong>
              </span>
              <span className="dot" />
              <span>May 1, 2026</span>
              <span className="dot" />
              <span>9 min read</span>
            </div>
          </Link>

          <div className="hg-side">
            {SIDE_ARTICLES.map((article) => (
              <Link key={article.to} className="hg-side-item" to={article.to}>
                <div className="hg-side-img">
                  <NewsThumb
                    category={article.cat}
                    seed={`hg-side-${article.to}`}
                    aspect="square"
                  />
                </div>
                <div>
                  <span className="hg-side-cat">{article.cat}</span>
                  <h3 className="hg-side-title">{article.title}</h3>
                  <div className="hg-side-meta">{article.meta}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsHeroGrid;
