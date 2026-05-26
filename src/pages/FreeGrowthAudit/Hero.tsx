import { Link } from 'react-router-dom';
import { AnimatedBackground, MotionButton, Parallax } from '@/lib/motion';
import { ArrowIcon } from '@/components/icons';
import medspaImg from '@/assets/nextgen-image/Medspas&wellnessimg.png';
import urgentImg from '@/assets/nextgen-image/Urgentcareimg.png';
import {
  PLACEHOLDER_IMAGE as dentalImg,
  PLACEHOLDER_IMAGE as mentalImg,
} from '@/lib/placeholderImage';

/* -----------------------------------------------------------
   Sample-report mockup that sits beside the form on desktop.
   Replaces the old DocumentVisual with a richer two-page
   spread + floating healthcare practice thumbnails so users
   instantly see the variety of practices this audit covers.
   ----------------------------------------------------------- */
const ReportPreview = () => (
  <div className="fga-hero-stage" aria-hidden="true">
    <div className="fga-doc-spread">
      <div className="fga-doc-page fga-doc-page-back">
        <div className="fga-doc-row fga-doc-head">
          <span className="fga-doc-dot" />
          <span className="fga-doc-label">90-DAY PLAN</span>
          <span className="fga-doc-meta">P. 02</span>
        </div>
        <ul className="fga-doc-plan">
          <li>
            <span className="fga-doc-plan-num">01</span>
            <div>
              <strong>Schema + AI Overview eligibility</strong>
              <em>Week 1–2 · High impact</em>
            </div>
          </li>
          <li>
            <span className="fga-doc-plan-num">02</span>
            <div>
              <strong>Rebuild paid landing flow</strong>
              <em>Week 2–4 · CAC -28%</em>
            </div>
          </li>
          <li>
            <span className="fga-doc-plan-num">03</span>
            <div>
              <strong>Review cadence + reply SLA</strong>
              <em>Week 3–6 · 4.2→4.8★</em>
            </div>
          </li>
          <li>
            <span className="fga-doc-plan-num">04</span>
            <div>
              <strong>GBP service-area pages</strong>
              <em>Week 4–8 · Local pack</em>
            </div>
          </li>
        </ul>
      </div>

      <div className="fga-doc-page fga-doc-page-front">
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
          {[
            { label: 'Local Pack', w: 72 },
            { label: 'Organic', w: 58 },
            { label: 'AI Overviews', w: 34 },
            { label: 'Reviews', w: 81 },
          ].map((b) => (
            <div key={b.label} className="fga-doc-bar">
              <span style={{ width: `${b.w}%` }} />
              <label>{b.label}</label>
              <strong>{b.w}</strong>
            </div>
          ))}
        </div>
        <div className="fga-doc-divider" />
        <div className="fga-doc-row fga-doc-foot">
          <span>Top fix</span>
          <strong>Schema + AI Overviews</strong>
          <span className="fga-doc-arrow">↗</span>
        </div>
      </div>
    </div>

    {/* Floating practice thumbnails — show variety of audiences */}
    <Parallax as="div" speed={0.04} className="fga-hero-thumbs">
      <div className="fga-hero-thumb t1">
        <img src={dentalImg} alt="" loading="lazy" />
        <span>Dental</span>
      </div>
      <div className="fga-hero-thumb t2">
        <img src={medspaImg} alt="" loading="lazy" />
        <span>Med Spa</span>
      </div>
      <div className="fga-hero-thumb t3">
        <img src={urgentImg} alt="" loading="lazy" />
        <span>Urgent care</span>
      </div>
      <div className="fga-hero-thumb t4">
        <img src={mentalImg} alt="" loading="lazy" />
        <span>Mental health</span>
      </div>
    </Parallax>

    <div className="fga-chip fga-chip-1">
      <span className="fga-chip-dot" /> Live ranking pull
    </div>
    <div className="fga-chip fga-chip-3">
      <svg
        width={11}
        height={11}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2.6}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
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
            Free Healthcare
            <br />
            <em>Growth Audit</em> built for your practice.
          </h1>
          <p className="fga-lede">
            A senior strategist audits your visibility, funnel, paid spend &mdash; then hands you a
            ranked 90-day plan as a PDF. Yours to keep, agency or not. Delivered in five business
            days.
          </p>

          {/* Inline social proof strip */}
          <ul className="fga-hero-points" aria-label="What you receive">
            <li>
              <span className="fga-hero-bullet" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.6}>
                  <path d="M5 12l5 5L20 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              Visibility score (Local Pack, organic, AI Overviews, reviews)
            </li>
            <li>
              <span className="fga-hero-bullet" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.6}>
                  <path d="M5 12l5 5L20 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              Funnel-leak map &mdash; the exact step losing patients
            </li>
            <li>
              <span className="fga-hero-bullet" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.6}>
                  <path d="M5 12l5 5L20 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              Paid media review with wasted-spend math
            </li>
            <li>
              <span className="fga-hero-bullet" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.6}>
                  <path d="M5 12l5 5L20 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              Ranked 90-day plan, highest-ROI move first
            </li>
          </ul>

          <div className="fga-cta-row">
            <MotionButton to="/contact" className="fga-cta">
              Start my free audit
              <ArrowIcon />
            </MotionButton>
            <div className="fga-cta-meta">
              <span className="fga-cta-meta-num">87</span> audits delivered this quarter
            </div>
          </div>

          <div className="fga-hero-trustline" aria-label="Trusted by">
            <span className="fga-hero-trust-dot" /> Trusted by 200+ Texas healthcare practices
            <span aria-hidden="true">·</span>
            <span className="fga-hero-trust-stars">
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 17.27l5.18 3.04-1.37-5.88L20 9.75l-6.01-.51L12 4 9.99 9.24 4 9.75l4.19 4.68-1.37 5.88z" />
              </svg>
              <strong>4.9</strong> on Google · 87 audits this quarter
            </span>
          </div>
        </div>

        <ReportPreview />
      </div>
    </div>
  </section>
);

export default Hero;
