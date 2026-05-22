import { Link } from 'react-router-dom';
import { ArrowIcon } from '../../components/icons';

const Hero = () => {
  return (
    <section className="cm-hero">
      <div className="container-shell">
        <div className="cm-hero-grid">
          <div>
            <div className="cm-hero-crumb">
              <Link to="/services">Services</Link>
              <span className="sep">/</span>
              <span className="cur">Content & Copywriting</span>
            </div>
            <span className="cm-hero-eyebrow">
              <span className="dot" /> Clinician-reviewed · Healthcare-only
            </span>
            <h1 className="cm-hero-title">
              Content that ranks, <em>compounds, and books patients.</em>
            </h1>
            <p className="cm-hero-lede">
              Pillar pages, supporting articles, location pages, AEO-ready
              answers, patient stories, and newsletters - written by
              healthcare specialists, reviewed by licensed clinicians, and
              tuned to compound for 18 months instead of trending for 18 days.
            </p>

            <div className="cm-hero-ctas">
              <Link to="/contact" className="sl-btn-primary">
                Map the quarter
                <ArrowIcon />
              </Link>
              <a href="#content-types" className="sl-btn-ghost">
                See content types
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round">
                  <line x1="7" y1="17" x2="17" y2="7" />
                  <polyline points="7 7 17 7 17 17" />
                </svg>
              </a>
            </div>

            <ul className="cm-hero-bullets">
              <li>
                <span className="cm-hero-check" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                </span>
                Licensed clinician reviews every health claim
              </li>
              <li>
                <span className="cm-hero-check" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                </span>
                E-E-A-T compliant by design (Google 2026)
              </li>
              <li>
                <span className="cm-hero-check" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                </span>
                AEO + schema on every article
              </li>
            </ul>
          </div>

          <div className="cm-hero-mock" aria-hidden="true">
            <div className="cm-hero-article">
              <div className="cm-hero-article-meta">
                <span className="cm-hero-article-cat">Cardiology · Patient guide</span>
                <span className="cm-hero-article-time">8 min read</span>
              </div>
              <h2 className="cm-hero-article-h">
                The 5 questions to ask before any cardiac stress test
              </h2>
              <div className="cm-hero-article-byline">
                <span className="cm-hero-article-avatar" />
                <div>
                  <span className="cm-hero-article-author">Dr. Lena Marin, MD</span>
                  <span className="cm-hero-article-sub">Reviewed Jan 14, 2026 · Updated weekly</span>
                </div>
                <span className="cm-hero-article-badge">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2}><path d="M9 12l2 2 4-4" /><path d="M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9z" /></svg>
                  Clinician-reviewed
                </span>
              </div>
              <div className="cm-hero-article-body">
                <p>
                  If you&rsquo;ve been told you need a cardiac stress test,
                  you&rsquo;re not alone — they&rsquo;re among the most
                  common cardiology orders in the US. But not every test
                  is the right one for every patient...
                </p>
                <ul className="cm-hero-article-toc">
                  <li><span className="num">01</span> Which type of stress test is this?</li>
                  <li><span className="num">02</span> What does the result actually tell us?</li>
                  <li><span className="num">03</span> Are there safer alternatives?</li>
                  <li><span className="num">04</span> How should I prepare?</li>
                  <li><span className="num">05</span> What happens next, either way?</li>
                </ul>
              </div>
              <div className="cm-hero-article-foot">
                <div className="cm-hero-article-cluster">
                  <span className="lbl">Topic cluster</span>
                  <div className="links">
                    <span>Echocardiogram</span>
                    <span>Cardiac CT</span>
                    <span>EKG vs Holter</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="cm-hero-rank">
              <div className="cm-hero-rank-head">
                <span className="ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg></span>
                <span className="kw">"cardiac stress test"</span>
              </div>
              <div className="cm-hero-rank-row">
                <span className="lbl">SERP rank</span>
                <span className="val">#2 <em>↑5</em></span>
              </div>
              <div className="cm-hero-rank-row">
                <span className="lbl">AI Overview</span>
                <span className="val cited">Cited</span>
              </div>
              <div className="cm-hero-rank-row">
                <span className="lbl">Monthly clicks</span>
                <span className="val">1,847 <em>↑62%</em></span>
              </div>
            </div>

            <div className="cm-hero-tag t1">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2}><polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" /></svg>
              14.2K organic / mo
            </div>
            <div className="cm-hero-tag t2">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2}><path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2z" /></svg>
              E-E-A-T compliant
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
