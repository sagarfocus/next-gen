import { Link } from 'react-router-dom';
import type { ReactElement } from 'react';

interface ServicesHeroProps {
  onBook: () => void;
}

interface FloatingPill {
  slot: 'f1' | 'f2' | 'f3' | 'f4' | 'f5' | 'f6';
  label: string;
  icon: ReactElement;
}

const SearchIcon = () => (
  <svg
    width={11}
    height={11}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
);

const ChartIcon = () => (
  <svg
    width={11}
    height={11}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
  </svg>
);

const StarIcon = () => (
  <svg
    width={11}
    height={11}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <polygon points="12 2 15 8.5 22 9.3 17 14.1 18.2 21 12 17.8 5.8 21 7 14.1 2 9.3 9 8.5 12 2" />
  </svg>
);

const SettingsIcon = () => (
  <svg
    width={11}
    height={11}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const LayoutIcon = () => (
  <svg
    width={11}
    height={11}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <path d="M3 9h18" />
    <path d="M9 21V9" />
  </svg>
);

const ChatIcon = () => (
  <svg
    width={11}
    height={11}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
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

const CAPABILITIES = [
  'SEO & Local Search',
  'Google Ads & Paid Search',
  'Meta Ads',
  'Social Media Marketing',
  'Content & Copywriting',
  'Google Business Profile',
  'Website Design & Development',
  'Brand Identity Design',
  'Brochure & Print',
  'Strategy & Planning',
  'Onsite Field Marketing',
  'Analytics & Reporting',
];

const ServicesHero = ({ onBook }: ServicesHeroProps) => {
  return (
    <section className="svc-hero" aria-labelledby="svc-title">
      <div className="container-shell">
        <div className="svc-grid">
          {/* CENTER stage — title + CTAs */}
          <div className="svc-stage">
            <h1 id="svc-title" className="svc-h1 reveal d2">
              Healthcare
              <br />
              Marketing
              <br />
              <span className="word-accent">Services</span>
            </h1>

            <div className="svc-stage-cta reveal d3">
              <button
                type="button"
                className="svc-cta-primary"
                onClick={onBook}
                aria-haspopup="dialog"
                aria-controls="bookingModal"
              >
                Get Your Growth Plan
                <span className="ico" aria-hidden="true">
                  <svg
                    width={14}
                    height={14}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2.4}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </span>
              </button>

              <Link to="/services#case-studies" className="svc-cta-link">
                View Case Studies
                <span className="ico" aria-hidden="true">
                  <svg
                    width={12}
                    height={12}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2.4}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="7" y1="17" x2="17" y2="7" />
                    <polyline points="7 7 17 7 17 17" />
                  </svg>
                </span>
              </Link>
            </div>
          </div>

          {/* ORBIT — central hub + 6 floating pills */}
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

          {/* BOTTOM — meta strip + sub paragraph */}
          <div className="svc-sub-row reveal d4">
            <div className="svc-meta">
              <span className="svc-meta-label">HIPAA-Compliant</span>
              <span className="bar" />
              <span className="svc-meta-label">Built for Texas</span>
            </div>
            <p className="svc-sub">
              We deploy a comprehensive, HIPAA-compliant marketing ecosystem
              designed to dominate local search, acquire high-acuity patients,
              and automate your front-desk operations across Texas.
            </p>
          </div>

          {/* CAPABILITY MARQUEE */}
          <div className="svc-bottom reveal d5">
            <span className="svc-bottom-label">Core Capabilities</span>
            <div className="svc-marquee" aria-label="Service capabilities">
              <div className="svc-marquee-track">
                {CAPABILITIES.map((cap) => (
                  <span key={cap} className="svc-marquee-item">
                    {cap}
                  </span>
                ))}
                {/* Duplicate for seamless loop */}
                {CAPABILITIES.map((cap) => (
                  <span key={`dup-${cap}`} className="svc-marquee-item" aria-hidden="true">
                    {cap}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesHero;
