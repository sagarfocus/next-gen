import { Link } from 'react-router-dom';
import { ArrowIcon } from '../../components/icons';

const Hero = () => {
  return (
    <section className="sm-hero">
      <div className="container-shell">
        <div className="sm-hero-grid">
          <div>
            <div className="sm-hero-crumb">
              <Link to="/services">Services</Link>
              <span className="sep">/</span>
              <span className="cur">Social Media Marketing</span>
            </div>
            <span className="sm-hero-eyebrow">
              <span className="dot" /> Meta Business Partner · Healthcare-only
            </span>
            <h1 className="sm-hero-title">
              Social media that builds <em>trust between the click and the visit.</em>
            </h1>
            <p className="sm-hero-lede">
              Instagram, Facebook, LinkedIn, TikTok, YouTube Shorts, and
              Pinterest - run by clinicians-turned-content-producers who know
              the difference between a 510(k) post and a board complaint.
              HIPAA-aware moderation, clinical review on every post, named
              creative lead.
            </p>

            <div className="sm-hero-ctas">
              <Link to="/contact" className="sl-btn-primary">
                Book the cadence call
                <ArrowIcon />
              </Link>
              <a href="#platforms" className="sl-btn-ghost">
                See platforms
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round">
                  <line x1="7" y1="17" x2="17" y2="7" />
                  <polyline points="7 7 17 7 17 17" />
                </svg>
              </a>
            </div>

            <ul className="sm-hero-bullets">
              <li>
                <span className="sm-hero-check" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                </span>
                Two channels run deep beats four run shallow
              </li>
              <li>
                <span className="sm-hero-check" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                </span>
                Clinical reviewer on every post
              </li>
              <li>
                <span className="sm-hero-check" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                </span>
                Quarterly shot list - 1 hour on camera
              </li>
            </ul>
          </div>

          <div className="sm-hero-mock" aria-hidden="true">
            <div className="sm-hero-phone">
              <div className="sm-hero-phone-notch" />
              <div className="sm-hero-phone-screen">
                <div className="sm-hero-phone-app">
                  <span className="sm-hero-phone-logo">Instagram</span>
                  <div className="sm-hero-phone-icons">
                    <span className="ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg></span>
                    <span className="ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" /></svg></span>
                  </div>
                </div>

                <div className="sm-hero-stories">
                  {['Tour', 'Reels', 'Care', 'Team', 'Q&A'].map((s) => (
                    <div key={s} className="sm-hero-story">
                      <div className="ring" />
                      <span>{s}</span>
                    </div>
                  ))}
                </div>

                <article className="sm-hero-post">
                  <div className="sm-hero-post-head">
                    <span className="sm-hero-post-avatar" />
                    <div>
                      <span className="sm-hero-post-name">yourclinic.health</span>
                      <span className="sm-hero-post-loc">Yourtown · Sponsored</span>
                    </div>
                  </div>
                  <div className="sm-hero-post-media">
                    <div className="sm-hero-post-overlay">
                      <span className="sm-hero-post-eyebrow">REEL · 28s</span>
                      <span className="sm-hero-post-h">3 questions to ask before booking a dermatologist</span>
                    </div>
                    <div className="sm-hero-post-play">
                      <svg viewBox="0 0 24 24" fill="currentColor"><polygon points="6 4 20 12 6 20 6 4" /></svg>
                    </div>
                  </div>
                  <div className="sm-hero-post-actions">
                    <span className="act"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></svg></span>
                    <span className="act"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" /></svg></span>
                    <span className="act"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" /></svg></span>
                    <span className="act-r"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" /></svg></span>
                  </div>
                  <div className="sm-hero-post-stats">
                    <span><strong>12.4K</strong> views · <strong>847</strong> likes</span>
                  </div>
                </article>
              </div>
            </div>

            <div className="sm-hero-tag t1">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2}><polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" /></svg>
              ER 5.8%
            </div>
            <div className="sm-hero-tag t2">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2}><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>
              312% reach lift
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
