import type { ReactNode, ReactElement } from 'react';
import { Link } from 'react-router-dom';
import { MotionButton, Parallax } from '../../lib/motion';
import logoSrc from '../../assets/the-nextgen-logo.png';

interface HeroProps {
  /**
   * Rendered after the hero grid, inside the same hero section container.
   * Used for the cert strip so it shares the hero's bottom padding.
   */
  children?: ReactNode;
}

interface OrbitPill {
  slot: 'o1' | 'o2' | 'o3' | 'o4' | 'o5' | 'o6';
  label: string;
  sub: string;
  icon: ReactElement;
}

const SearchIcon = () => (
  <svg width={12} height={12} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
);
const ChartIcon = () => (
  <svg width={12} height={12} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polyline points="4 17 10 11 14 15 20 9" />
    <polyline points="14 9 20 9 20 15" />
  </svg>
);
const StarIcon = () => (
  <svg width={12} height={12} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polygon points="12 2 15 8.5 22 9.3 17 14.1 18.2 21 12 17.8 5.8 21 7 14.1 2 9.3 9 8.5 12 2" />
  </svg>
);
const BotIcon = () => (
  <svg width={12} height={12} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="4" y="8" width="16" height="12" rx="2" />
    <line x1="12" y1="4" x2="12" y2="8" />
    <circle cx="9" cy="14" r="1.5" />
    <circle cx="15" cy="14" r="1.5" />
  </svg>
);
const LayoutIcon = () => (
  <svg width={12} height={12} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <line x1="3" y1="9" x2="21" y2="9" />
  </svg>
);
const ChatIcon = () => (
  <svg width={12} height={12} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </svg>
);

const ORBIT_PILLS: OrbitPill[] = [
  { slot: 'o1', label: 'SEO & Local', sub: 'Rank higher. Get found locally.', icon: <SearchIcon /> },
  { slot: 'o2', label: 'Paid Media',  sub: 'Targeted campaigns. Measurable.', icon: <ChartIcon /> },
  { slot: 'o3', label: 'Branding',    sub: 'A memorable brand that converts.', icon: <StarIcon /> },
  { slot: 'o4', label: 'Automation',  sub: 'Streamline. Nurture. Scale.',     icon: <BotIcon /> },
  { slot: 'o5', label: 'Web Design',  sub: 'High-performance sites that convert.', icon: <LayoutIcon /> },
  { slot: 'o6', label: 'Content',     sub: 'Editorial that educates patients.', icon: <ChatIcon /> },
];

const Hero = ({ children }: HeroProps) => {
  return (
    <section className="hero-section" aria-labelledby="hero-title">
      {/* Solid brand backdrop — pure navy, no gradient. A faint tech
          grid stays for editorial texture but it's a 1px line pattern,
          not a color gradient. */}
      <div className="hero-bg-stack" aria-hidden="true">
        <div className="hero-grid-pattern" />
      </div>

      <div className="container-shell">
        <div className="hero-grid">
          {/* LEFT — copy + CTAs */}
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
              <MotionButton to="/free-growth-audit" className="m-btn-cta hero-mbtn">
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
              </MotionButton>

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

          {/* RIGHT — 3D orbit stage. Capabilities rotate around the brand
              mark; subtle parallax drift on scroll. */}
          <Parallax as="div" speed={0.04} className="hero-visual hero-orbit reveal d3" aria-hidden="true">
            <div className="ho-stage">
              {/* Concentric dashed orbit rings — animated rotation */}
              <div className="ho-ring ho-ring-1" />
              <div className="ho-ring ho-ring-2" />
              <div className="ho-ring ho-ring-3" />
              <div className="ho-ring-glow" />

              {/* Soft anchor markers on outermost ring */}
              <span className="ho-mark m-tl" />
              <span className="ho-mark m-tr" />
              <span className="ho-mark m-bl" />
              <span className="ho-mark m-br" />

              {/* Central brand card */}
              <div className="ho-core">
                <div className="ho-core-inner">
                  <div className="ho-core-mark">
                    <img src={logoSrc} alt="" />
                  </div>
                  <div className="ho-core-divider" />
                  <div className="ho-core-tag">Healthcare<br />Growth OS</div>
                </div>
              </div>

              {/* Ambient floating orbs — pure decoration, sit behind pills */}
              <span className="ho-orb ho-orb-1" aria-hidden="true" />
              <span className="ho-orb ho-orb-2" aria-hidden="true" />
              <span className="ho-orb ho-orb-3" aria-hidden="true" />
              <span className="ho-orb ho-orb-4" aria-hidden="true" />
              <span className="ho-orb ho-orb-5" aria-hidden="true" />

              {/* Service pills — orbit around the central platform.
                  Each pill carries its sphere icon, label, and a one-line
                  tagline. They revolve continuously, counter-rotating to
                  stay upright. Staggered delays distribute them 60° apart. */}
              {ORBIT_PILLS.map(({ slot, label, sub, icon }) => (
                <span key={slot} className={`ho-pill ${slot}`}>
                  <span className="ho-pill-ico">{icon}</span>
                  <span className="ho-pill-text">
                    <strong className="ho-pill-label">{label}</strong>
                    <span className="ho-pill-sub">{sub}</span>
                  </span>
                </span>
              ))}
            </div>
          </Parallax>
        </div>

        {children}
      </div>
    </section>
  );
};

export default Hero;
