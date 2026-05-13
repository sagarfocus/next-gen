import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import heroVideo from '../../assets/mp_.mp4';
import { HERO_IMAGE_URL } from '../../assets/hero-image';

interface HeroProps {
  /**
   * Rendered after the hero grid, inside the same hero section container.
   * Used for the cert strip so it shares the hero's bottom padding.
   */
  children?: ReactNode;
}

const Hero = ({ children }: HeroProps) => {
  return (
    <section className="hero-section" aria-labelledby="hero-title">
      {/* Full-bleed cinematic video background */}
      <div className="hero-video-bg" aria-hidden="true">
        <video
          className="hero-video-el"
          src={heroVideo}
          poster={HERO_IMAGE_URL}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        />
        <div className="hero-video-tint" />
        <div className="hero-video-grid" />
        <div className="hero-video-scan" />
        <div className="hero-video-vignette" />
        <div className="hero-video-readability" />
      </div>

      <div className="container-shell">
        <div className="hero-grid hero-grid--solo">
          <div className="hero-content">
            <div className="hero-eyebrow reveal d1">
              <span className="hero-pulse" aria-hidden="true" />
              Healthcare Growth Partner
            </div>

            <h1 id="hero-title" className="hero-title reveal d2">
              We Market Healthcare.
              <br />
              <span className="accent-text">Relentlessly.</span>
            </h1>

            <p className="hero-lede reveal d3">
              SEO, paid ads, branding, content, and websites built for clinics,
              medspas, urgent care centers, and healthcare brands that want
              measurable growth.
            </p>

            <div className="hero-cta-row reveal d4">
              <Link to="/free-growth-audit" className="btn-primary btn-hero">
                Get a Free Growth Audit
                <svg
                  width={16}
                  height={16}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </Link>

              <Link to="/our-work" className="link-secondary">
                See Our Work
                <svg
                  width={14}
                  height={14}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {children}
      </div>
    </section>
  );
};

export default Hero;
