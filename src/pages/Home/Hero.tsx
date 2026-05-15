import type { ReactNode, ReactElement } from 'react';
import { Link } from 'react-router-dom';
import { MotionButton, Parallax } from '../../lib/motion';

interface HeroProps {
  children?: ReactNode;
}

interface FloatingPill {
  slot: 'f1' | 'f2' | 'f3' | 'f4' | 'f5' | 'f6';
  label: string;
  icon: ReactElement;
}

const SearchIcon = () => (
  <svg width={11} height={11} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
);
const ChartIcon = () => (
  <svg width={11} height={11} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
  </svg>
);
const StarIcon = () => (
  <svg width={11} height={11} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polygon points="12 2 15 8.5 22 9.3 17 14.1 18.2 21 12 17.8 5.8 21 7 14.1 2 9.3 9 8.5 12 2" />
  </svg>
);
const SettingsIcon = () => (
  <svg width={11} height={11} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);
const LayoutIcon = () => (
  <svg width={11} height={11} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <path d="M3 9h18" />
    <path d="M9 21V9" />
  </svg>
);
const ChatIcon = () => (
  <svg width={11} height={11} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </svg>
);

const FLOATING_PILLS: FloatingPill[] = [
  { slot: 'f1', label: 'SEO & Local', icon: <SearchIcon /> },
  { slot: 'f2', label: 'Paid Media', icon: <ChartIcon /> },
  { slot: 'f3', label: 'Branding', icon: <StarIcon /> },
  { slot: 'f4', label: 'Automation', icon: <SettingsIcon /> },
  { slot: 'f5', label: 'Web Design', icon: <LayoutIcon /> },
  { slot: 'f6', label: 'Content', icon: <ChatIcon /> },
];

const Hero = ({ children }: HeroProps) => {
  return (
    <section className="hero-section" aria-labelledby="hero-title">
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
                <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </MotionButton>

              <Link to="/our-work" className="link-secondary">
                See Our Work
                <svg width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </Link>
            </div>
          </div>

          {/* RIGHT — simpler N+ orbit (moved here from Services). The
              warm cream gradient backdrop + dashed rings come from
              .hero-svc-orbit-wrap so the page keeps the same warm
              feel the orbital area had on the Services hero. */}
          <Parallax as="div" speed={0.04} className="hero-visual hero-svc-orbit-wrap reveal d3" aria-hidden="true">
            <div className="svc-orbit" aria-hidden="true">
              <div className="svc-orbit-hub">
                <div className="svc-orbit-hub-inner">
                  <div className="svc-orbit-hub-mark">N+</div>
                  <span className="svc-orbit-hub-name">TheNextGen</span>
                  <span className="svc-orbit-hub-tag">Healthcare</span>
                </div>
              </div>

              {FLOATING_PILLS.map(({ slot, label, icon }) => (
                <span key={slot} className={`svc-float ${slot}`}>
                  <span className="tag-ico">{icon}</span>
                  {label}
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
