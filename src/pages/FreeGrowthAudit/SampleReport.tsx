import analyticsImg from '@/assets/analytics-and-report.png';
import seoImg from '@/assets/seo-local-search.png';
import strategyImg from '@/assets/strategy-planning.png';

interface ReportPage {
  num: string;
  title: string;
  caption: string;
  img: string;
  alt: string;
  bullets: string[];
}

const PAGES: ReportPage[] = [
  {
    num: '01',
    title: 'Visibility Score',
    caption: 'Page 1 — how you stack up locally',
    img: seoImg,
    alt: 'Sample local SEO visibility score report page',
    bullets: [
      'Score 0–100 across Local Pack, organic, AI Overviews, reviews',
      'Side-by-side with your top three local competitors',
      'Keyword gaps annotated with monthly search volume',
    ],
  },
  {
    num: '02',
    title: 'Funnel Leak Map',
    caption: 'Page 3 — the step losing the most patients',
    img: analyticsImg,
    alt: 'Sample funnel leak analytics dashboard for a healthcare practice',
    bullets: [
      'Search → click → visit → form → book, step by step',
      'Drop-off percentages and dollar value of the leak',
      'The exact friction point flagged with screenshot evidence',
    ],
  },
  {
    num: '03',
    title: 'Ranked 90-Day Plan',
    caption: 'Page 7 — what to do, in order',
    img: strategyImg,
    alt: 'Sample 90-day healthcare marketing strategy plan deliverable',
    bullets: [
      'Highest-ROI move first, every action time-boxed',
      'Owner suggested, estimated effort, expected lift',
      'Yours to run in-house or hand to any agency',
    ],
  },
];

const SampleReport = () => (
  <section className="fga-sample" aria-labelledby="fga-sample-title">
    <div className="container-shell">
      <header className="fga-section-head fga-sample-head">
        <span className="fga-section-tag">A real report</span>
        <h2 id="fga-sample-title" className="fga-section-h2">
          Twelve pages. Each one usable on Monday morning.
        </h2>
        <p className="fga-section-lede">
          Most &ldquo;free audits&rdquo; are a one-page PDF screenshot of a SEMrush dashboard. Ours
          is a bound 12-page strategist-written report &mdash; preview three of the pages below.
        </p>
      </header>

      <div className="fga-sample-grid">
        {PAGES.map((p) => (
          <article key={p.num} className="fga-sample-card">
            <div className="fga-sample-frame">
              <div className="fga-sample-frame-bar" aria-hidden="true">
                <span /> <span /> <span />
                <em>focus_audit_{p.num}.pdf</em>
              </div>
              <img src={p.img} alt={p.alt} loading="lazy" />
            </div>
            <div className="fga-sample-body">
              <p className="fga-sample-caption">{p.caption}</p>
              <h3 className="fga-sample-h">{p.title}</h3>
              <ul className="fga-sample-bullets">
                {p.bullets.map((b) => (
                  <li key={b}>
                    <span aria-hidden="true">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.6}>
                        <path d="M5 12l5 5L20 7" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>

      <p className="fga-sample-foot">
        And nine more pages: paid-media review, content gap, GBP audit, schema readiness, review
        velocity, automation candidates, brand check, intake-form rewrite suggestions, and the
        decision matrix.
      </p>
    </div>
  </section>
);

export default SampleReport;
