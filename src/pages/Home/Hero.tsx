import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { HERO_IMAGE_URL, HERO_IMAGE_ALT } from '../../assets/hero-image';

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
      <div className="container-shell">
        <div className="hero-grid">
          {/* LEFT — copy + CTAs */}
          <div className="hero-content">
            <div className="hero-eyebrow reveal d1">
              <span className="hero-pulse" aria-hidden="true" />
              Healthcare Growth, Simplified
            </div>

            <h1 id="hero-title" className="hero-title reveal d2">
              Complete Healthcare Marketing
              <br />
              That Drives <span className="accent-text">Real Growth</span>
            </h1>

            <p className="hero-lede reveal d3">
              We help healthcare brands, clinics, medspas, and wellness
              businesses grow through SEO, paid ads, website design, branding,
              content, and performance-focused digital strategy.
            </p>

            <div className="hero-cta-row reveal d4">
              <Link to="/#book" className="btn-primary btn-hero">
                Book a Demo
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

              <Link to="/#services" className="link-secondary">
                Explore Services
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

          {/* RIGHT — visual frame with corner registration marks + image */}
          <div className="hero-visual reveal d3" aria-hidden="true">
            <div className="visual-frame">
              <span className="reg tl" />
              <span className="reg tr" />
              <span className="reg bl" />
              <span className="reg br" />

              <div className="hero-img-wrap">
                <img
                  className="hero-img"
                  src={HERO_IMAGE_URL}
                  alt={HERO_IMAGE_ALT}
                  loading="eager"
                  decoding="async"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Cert strip (or any other content) renders here, inside the hero
            section so it shares the hero's bottom padding. */}
        {children}
      </div>
    </section>
  );
};

export default Hero;
