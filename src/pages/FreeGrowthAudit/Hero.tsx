import { Link } from 'react-router-dom';
import { Parallax, AnimatedBackground, MotionButton } from '../../lib/motion';
import { ArrowIcon } from '../../components/icons';

const DocumentVisual = () => (
  <div className="fga-doc">
    <div className="fga-doc-shadow" aria-hidden="true" />
    <div className="fga-doc-paper">
      <div className="fga-doc-row fga-doc-head">
        <span className="fga-doc-dot" />
        <span className="fga-doc-label">GROWTH AUDIT · 2026</span>
        <span className="fga-doc-meta">CONFIDENTIAL</span>
      </div>
      <div className="fga-doc-row">
        <h4 className="fga-doc-h">Visibility Score</h4>
        <div className="fga-doc-score">
          <span className="fga-doc-score-num">64</span>
          <span className="fga-doc-score-base">/100</span>
        </div>
      </div>
      <div className="fga-doc-bars">
        <div className="fga-doc-bar"><span style={{ width: '72%' }} /><label>Local Pack</label><strong>72</strong></div>
        <div className="fga-doc-bar"><span style={{ width: '58%' }} /><label>Organic</label><strong>58</strong></div>
        <div className="fga-doc-bar"><span style={{ width: '34%' }} /><label>AI Overviews</label><strong>34</strong></div>
        <div className="fga-doc-bar"><span style={{ width: '81%' }} /><label>Reviews</label><strong>81</strong></div>
      </div>
      <div className="fga-doc-divider" />
      <div className="fga-doc-row fga-doc-foot">
        <span>Top fix</span>
        <strong>Schema + AI Overview eligibility</strong>
        <span className="fga-doc-arrow">↗</span>
      </div>
    </div>

    {/* Floating annotation chips */}
    <div className="fga-chip fga-chip-1">
      <span className="fga-chip-dot" /> Live ranking pull
    </div>
    <div className="fga-chip fga-chip-2">
      4 priority moves
    </div>
    <div className="fga-chip fga-chip-3">
      <svg width={11} height={11} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.6} strokeLinecap="round" strokeLinejoin="round">
        <polyline points="20 6 9 17 4 12" />
      </svg>
      PDF you keep
    </div>
  </div>
);

const Hero = () => (
  <section className="fga-hero" aria-labelledby="fga-h1">
    <AnimatedBackground variant="aurora" intensity="subtle" />
    <div className="container-shell">
      <nav className="fga-crumbs" aria-label="Breadcrumb">
        <Link to="/">Home</Link>
        <span aria-hidden="true">/</span>
        <span aria-current="page">Free Growth Audit</span>
      </nav>

      <div className="fga-hero-grid">
        <div className="fga-hero-copy">
          <span className="fga-pill">
            <span className="fga-pill-dot" />
            Free · 5-day delivery · No card
          </span>
          <h1 id="fga-h1" className="fga-h1">
            Find the leak
            <br />
            <em>before</em> you raise the budget.
          </h1>
          <p className="fga-lede">
            A senior strategist audits your healthcare practice&rsquo;s acquisition
            stack - visibility, funnel, paid spend - and hands you the ranked
            ninety-day fix as a PDF. Yours to keep.
          </p>
          <div className="fga-cta-row">
            <MotionButton to="/contact" className="fga-cta">
              Start my audit
              <ArrowIcon />
            </MotionButton>
            <div className="fga-cta-meta">
              <span className="fga-cta-meta-num">87</span> audits delivered this quarter
            </div>
          </div>
        </div>

        <Parallax as="div" speed={0.06} className="fga-hero-visual" aria-hidden="true">
          <DocumentVisual />
        </Parallax>
      </div>
    </div>
  </section>
);

export default Hero;
