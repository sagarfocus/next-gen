interface SideArticle {
  href: string;
  cat: string;
  title: string;
  meta: string;
  imgSeed: string;
}

const SIDE_ARTICLES: SideArticle[] = [
  {
    href: '#article-2',
    cat: 'Regulation',
    title: 'FDA approves first continuous glucose monitor for Type 2 diabetes',
    meta: 'Apr 30 · 4 min read',
    imgSeed: 'healthnewsside1',
  },
  {
    href: '#article-3',
    cat: 'Telehealth',
    title: 'Telemedicine visits hit a record high in Q1, led by mental-health specialties',
    meta: 'Apr 29 · 6 min read',
    imgSeed: 'healthnewsside2',
  },
  {
    href: '#article-4',
    cat: 'AI & Operations',
    title: 'Hospital network adopts voice-AI front desks across 38 locations',
    meta: 'Apr 28 · 5 min read',
    imgSeed: 'healthnewsside3',
  },
  {
    href: '#article-5',
    cat: 'Policy',
    title: 'CMS announces expanded reimbursement for at-home cardiac monitoring',
    meta: 'Apr 27 · 7 min read',
    imgSeed: 'healthnewsside4',
  },
];

const NewsHeroGrid = () => {
  return (
    <section className="hn-hero">
      <div className="container-shell">
        <div className="hg-grid">
          <a className="hg-main" href="#article-1">
            <div className="hg-main-img">
              <img
                src="https://picsum.photos/seed/healthnewsfeature1/1200/700"
                alt=""
                loading="lazy"
              />
            </div>
            <span className="hg-cat">Research</span>
            <h2 className="hg-main-title">
              AI-driven imaging tool cuts diagnostic errors by 47% in multi-site
              hospital trial
            </h2>
            <p className="hg-main-desc">
              A 14-month study across nine US hospital networks reports the
              largest measured drop in radiology misreads of the decade.
              Researchers credit a hybrid model combining federated learning
              with structured clinician feedback loops.
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
          </a>

          <div className="hg-side">
            {SIDE_ARTICLES.map((article) => (
              <a
                key={article.href}
                className="hg-side-item"
                href={article.href}
              >
                <div className="hg-side-img">
                  <img
                    src={`https://picsum.photos/seed/${article.imgSeed}/400/400`}
                    alt=""
                    loading="lazy"
                  />
                </div>
                <div>
                  <span className="hg-side-cat">{article.cat}</span>
                  <h3 className="hg-side-title">{article.title}</h3>
                  <div className="hg-side-meta">{article.meta}</div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsHeroGrid;
