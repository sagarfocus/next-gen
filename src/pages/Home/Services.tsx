import { useEffect, useRef, useState } from 'react';
import type { CSSProperties, ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface ServiceCardData {
  tag: string;
  title: string;
  sub: string;
  ariaLabel: string;
  illustration: ReactNode;
}

/* ---- Card illustrations (kept inline as JSX per the design) ---- */

const SeoIllustration = (
  <svg viewBox="0 0 320 240" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <defs>
      <radialGradient id="seoBg" cx="50%" cy="50%" r="60%">
        <stop offset="0%" stopColor="#8FBC8F" stopOpacity=".18" />
        <stop offset="100%" stopColor="#8FBC8F" stopOpacity="0" />
      </radialGradient>
    </defs>
    <rect width="320" height="240" fill="#FAFAF8" />
    <circle cx="160" cy="120" r="110" fill="url(#seoBg)" />
    <g fill="#B38B6D" opacity=".25">
      <circle cx="60" cy="60" r="1.5" />
      <circle cx="100" cy="60" r="1.5" />
      <circle cx="140" cy="60" r="1.5" />
      <circle cx="220" cy="60" r="1.5" />
      <circle cx="260" cy="60" r="1.5" />
      <circle cx="60" cy="180" r="1.5" />
      <circle cx="100" cy="180" r="1.5" />
      <circle cx="220" cy="180" r="1.5" />
      <circle cx="260" cy="180" r="1.5" />
    </g>
    <circle cx="140" cy="115" r="48" fill="none" stroke="#B38B6D" strokeWidth="2.4" />
    <circle cx="140" cy="115" r="48" fill="#fff" fillOpacity=".5" />
    <line x1="178" y1="153" x2="208" y2="183" stroke="#B38B6D" strokeWidth="3" strokeLinecap="round" />
    <path
      d="M140 92 C 152 92 160 100 160 112 C 160 126 140 142 140 142 C 140 142 120 126 120 112 C 120 100 128 92 140 92 Z"
      fill="#8FBC8F"
    />
    <circle cx="140" cy="111" r="6" fill="#fff" />
  </svg>
);

const SocialIllustration = (
  <svg viewBox="0 0 320 240" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <defs>
      <radialGradient id="socBg" cx="50%" cy="50%" r="60%">
        <stop offset="0%" stopColor="#576DB5" stopOpacity=".14" />
        <stop offset="100%" stopColor="#576DB5" stopOpacity="0" />
      </radialGradient>
    </defs>
    <rect width="320" height="240" fill="#FAFAF8" />
    <circle cx="160" cy="120" r="110" fill="url(#socBg)" />
    <g>
      <path
        d="M80 90 H160 a14 14 0 0 1 14 14 v36 a14 14 0 0 1 -14 14 H110 l-18 18 v-18 H80 a14 14 0 0 1 -14 -14 v-36 a14 14 0 0 1 14 -14 z"
        fill="#fff"
        stroke="#B38B6D"
        strokeWidth="1.6"
      />
      <circle cx="100" cy="122" r="3" fill="#B38B6D" />
      <circle cx="120" cy="122" r="3" fill="#B38B6D" />
      <circle cx="140" cy="122" r="3" fill="#B38B6D" />
    </g>
    <g>
      <path
        d="M170 60 H240 a12 12 0 0 1 12 12 v30 a12 12 0 0 1 -12 12 H200 l-14 14 v-14 H170 a12 12 0 0 1 -12 -12 v-30 a12 12 0 0 1 12 -12 z"
        fill="#576DB5"
      />
      <circle cx="190" cy="87" r="2.5" fill="#fff" />
      <circle cx="206" cy="87" r="2.5" fill="#fff" />
      <circle cx="222" cy="87" r="2.5" fill="#fff" />
    </g>
    <g>
      <path
        d="M180 150 H252 a12 12 0 0 1 12 12 v26 a12 12 0 0 1 -12 12 H214 l-12 12 v-12 H180 a12 12 0 0 1 -12 -12 v-26 a12 12 0 0 1 12 -12 z"
        fill="#fff"
        stroke="#8FBC8F"
        strokeWidth="1.6"
      />
      <circle cx="200" cy="174" r="2.5" fill="#8FBC8F" />
      <circle cx="216" cy="174" r="2.5" fill="#8FBC8F" />
      <circle cx="232" cy="174" r="2.5" fill="#8FBC8F" />
    </g>
  </svg>
);

const AdsIllustration = (
  <svg viewBox="0 0 320 240" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <defs>
      <radialGradient id="adsBg" cx="50%" cy="50%" r="60%">
        <stop offset="0%" stopColor="#B38B6D" stopOpacity=".14" />
        <stop offset="100%" stopColor="#B38B6D" stopOpacity="0" />
      </radialGradient>
    </defs>
    <rect width="320" height="240" fill="#FAFAF8" />
    <circle cx="160" cy="120" r="110" fill="url(#adsBg)" />
    <line x1="60" y1="180" x2="260" y2="180" stroke="#B38B6D" strokeOpacity=".4" strokeWidth="1" />
    <rect x="80" y="140" width="28" height="40" rx="3" fill="#fff" stroke="#B38B6D" strokeWidth="1.5" />
    <rect x="120" y="115" width="28" height="65" rx="3" fill="#fff" stroke="#B38B6D" strokeWidth="1.5" />
    <rect
      x="160"
      y="90"
      width="28"
      height="90"
      rx="3"
      fill="#8FBC8F"
      fillOpacity=".25"
      stroke="#8FBC8F"
      strokeWidth="1.5"
    />
    <rect x="200" y="60" width="28" height="120" rx="3" fill="#576DB5" />
    <path d="M80 70 L 220 70" fill="none" stroke="#B38B6D" strokeWidth="1.6" strokeDasharray="3 4" />
    <polyline
      points="210,62 220,70 210,78"
      fill="none"
      stroke="#B38B6D"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const FieldIllustration = (
  <svg viewBox="0 0 320 240" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <defs>
      <radialGradient id="fldBg" cx="50%" cy="50%" r="60%">
        <stop offset="0%" stopColor="#8FBC8F" stopOpacity=".14" />
        <stop offset="100%" stopColor="#8FBC8F" stopOpacity="0" />
      </radialGradient>
    </defs>
    <rect width="320" height="240" fill="#FAFAF8" />
    <circle cx="160" cy="120" r="110" fill="url(#fldBg)" />
    <circle
      cx="160"
      cy="130"
      r="80"
      fill="none"
      stroke="#B38B6D"
      strokeOpacity=".3"
      strokeWidth="1"
      strokeDasharray="3 5"
    />
    <circle
      cx="160"
      cy="130"
      r="55"
      fill="none"
      stroke="#B38B6D"
      strokeOpacity=".5"
      strokeWidth="1"
      strokeDasharray="3 5"
    />
    <g>
      <rect x="125" y="80" width="70" height="80" rx="2" fill="#fff" stroke="#B38B6D" strokeWidth="1.5" />
      <rect x="153" y="100" width="14" height="38" fill="#8FBC8F" fillOpacity=".4" />
      <rect x="141" y="113" width="38" height="12" fill="#8FBC8F" fillOpacity=".4" />
      <rect
        x="195"
        y="110"
        width="36"
        height="50"
        rx="2"
        fill="#576DB5"
        fillOpacity=".15"
        stroke="#576DB5"
        strokeWidth="1"
      />
      <rect
        x="89"
        y="110"
        width="36"
        height="50"
        rx="2"
        fill="#576DB5"
        fillOpacity=".15"
        stroke="#576DB5"
        strokeWidth="1"
      />
    </g>
    <circle cx="160" cy="130" r="4" fill="#576DB5" />
  </svg>
);

const AutomationIllustration = (
  <svg viewBox="0 0 320 240" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <defs>
      <radialGradient id="autBg" cx="50%" cy="50%" r="60%">
        <stop offset="0%" stopColor="#576DB5" stopOpacity=".12" />
        <stop offset="100%" stopColor="#576DB5" stopOpacity="0" />
      </radialGradient>
    </defs>
    <rect width="320" height="240" fill="#FAFAF8" />
    <circle cx="160" cy="120" r="110" fill="url(#autBg)" />
    <g stroke="#B38B6D" strokeWidth="1.4" fill="none" strokeLinecap="round">
      <path d="M80 80 C 110 80 110 120 140 120" />
      <path d="M80 160 C 110 160 110 120 140 120" />
      <path d="M180 120 C 210 120 210 80 240 80" />
      <path d="M180 120 C 210 120 210 160 240 160" />
    </g>
    <g>
      <rect x="62" y="68" width="36" height="24" rx="6" fill="#fff" stroke="#B38B6D" strokeWidth="1.5" />
      <rect x="62" y="148" width="36" height="24" rx="6" fill="#fff" stroke="#B38B6D" strokeWidth="1.5" />
      <rect x="222" y="68" width="36" height="24" rx="6" fill="#fff" stroke="#B38B6D" strokeWidth="1.5" />
      <rect x="222" y="148" width="36" height="24" rx="6" fill="#fff" stroke="#B38B6D" strokeWidth="1.5" />
    </g>
    <circle cx="160" cy="120" r="22" fill="#576DB5" />
    <circle cx="160" cy="120" r="32" fill="none" stroke="#576DB5" strokeOpacity=".4" strokeWidth="1" />
    <circle cx="160" cy="120" r="42" fill="none" stroke="#576DB5" strokeOpacity=".2" strokeWidth="1" />
    <path
      d="M152 120 L 158 126 L 168 114"
      fill="none"
      stroke="#fff"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const EmailIllustration = (
  <svg viewBox="0 0 320 240" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <defs>
      <radialGradient id="emlBg" cx="50%" cy="50%" r="60%">
        <stop offset="0%" stopColor="#B38B6D" stopOpacity=".12" />
        <stop offset="100%" stopColor="#B38B6D" stopOpacity="0" />
      </radialGradient>
    </defs>
    <rect width="320" height="240" fill="#FAFAF8" />
    <circle cx="160" cy="120" r="110" fill="url(#emlBg)" />
    <rect
      x="100"
      y="86"
      width="120"
      height="74"
      rx="4"
      fill="#fff"
      stroke="#B38B6D"
      strokeOpacity=".4"
      strokeWidth="1.4"
    />
    <rect
      x="92"
      y="78"
      width="120"
      height="74"
      rx="4"
      fill="#fff"
      stroke="#B38B6D"
      strokeOpacity=".7"
      strokeWidth="1.4"
    />
    <rect x="84" y="70" width="120" height="74" rx="4" fill="#fff" stroke="#B38B6D" strokeWidth="1.6" />
    <path d="M84 76 L 144 116 L 204 76" fill="none" stroke="#B38B6D" strokeWidth="1.6" strokeLinejoin="round" />
    <line x1="120" y1="180" x2="240" y2="180" stroke="#B38B6D" strokeOpacity=".3" strokeDasharray="3 5" />
    <circle cx="170" cy="180" r="3.5" fill="#8FBC8F" />
    <circle cx="200" cy="180" r="3.5" fill="#8FBC8F" fillOpacity=".7" />
    <circle cx="230" cy="180" r="3.5" fill="#8FBC8F" fillOpacity=".4" />
    <circle cx="260" cy="180" r="3.5" fill="#576DB5" />
  </svg>
);

const SERVICES: ServiceCardData[] = [
  {
    tag: 'Search',
    title: 'SEO & Local Search',
    sub: 'Rank for the searches that bring patients to your door.',
    ariaLabel: 'SEO and Local Search',
    illustration: SeoIllustration,
  },
  {
    tag: 'Social',
    title: 'Social Media Marketing',
    sub: 'Show up where your patients spend their time — consistently.',
    ariaLabel: 'Social Media Marketing',
    illustration: SocialIllustration,
  },
  {
    tag: 'Paid Media',
    title: 'Google Ads & Paid Search',
    sub: 'High-intent traffic, tightly tracked, ROI-optimized weekly.',
    ariaLabel: 'Google Ads and Paid Search',
    illustration: AdsIllustration,
  },
  {
    tag: 'Field',
    title: 'Onsite Field Marketing',
    sub: 'In-clinic activations and community presence that convert locally.',
    ariaLabel: 'Onsite Field Marketing',
    illustration: FieldIllustration,
  },
  {
    tag: 'Automation',
    title: 'Medical Automation',
    sub: 'n8n & custom workflows that handle intake, follow-up, and reporting.',
    ariaLabel: 'Medical Automation',
    illustration: AutomationIllustration,
  },
  {
    tag: 'Lifecycle',
    title: 'Email & Drip Campaigns',
    sub: 'Nurture leads, recover no-shows, and re-engage past patients.',
    ariaLabel: 'Email and Drip Campaigns',
    illustration: EmailIllustration,
  },
];

const ChevronLeft = () => (
  <svg
    width={18}
    height={18}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <polyline points="15 18 9 12 15 6" />
  </svg>
);

const ChevronRight = () => (
  <svg
    width={18}
    height={18}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <polyline points="9 18 15 12 9 6" />
  </svg>
);

const CardArrow = () => (
  <span className="card-arrow" aria-hidden="true">
    <svg
      width={14}
      height={14}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="7" y1="17" x2="17" y2="7" />
      <polyline points="7 7 17 7 17 17" />
    </svg>
  </span>
);

const Services = () => {
  const trackRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const [prevDisabled, setPrevDisabled] = useState(true);
  const [nextDisabled, setNextDisabled] = useState(false);
  const [fillStyle, setFillStyle] = useState<CSSProperties>({});

  const update = () => {
    const track = trackRef.current;
    const bar = barRef.current;
    if (!track || !bar) return;
    const max = track.scrollWidth - track.clientWidth;
    setPrevDisabled(track.scrollLeft <= 1);
    setNextDisabled(track.scrollLeft >= max - 1);
    const barW = bar.clientWidth;
    const segW = Math.max(40, (track.clientWidth / track.scrollWidth) * barW);
    const pct = max > 0 ? track.scrollLeft / max : 0;
    setFillStyle({
      width: `${segW}px`,
      transform: `translateX(${pct * (barW - segW)}px)`,
    });
  };

  const step = () => {
    const track = trackRef.current;
    if (!track) return 320;
    const card = track.querySelector<HTMLElement>('.service-card');
    return card ? card.getBoundingClientRect().width : 320;
  };

  const handlePrev = () =>
    trackRef.current?.scrollBy({ left: -step(), behavior: 'smooth' });
  const handleNext = () =>
    trackRef.current?.scrollBy({ left: step(), behavior: 'smooth' });

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    update();
    track.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    // Re-measure after fonts/images settle
    const t = window.setTimeout(update, 250);
    return () => {
      track.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
      window.clearTimeout(t);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section
      className="services-section"
      id="services"
      aria-labelledby="services-title"
    >
      <div className="container-shell">
        <div className="services-head">
          <span className="services-eyebrow">Services</span>
          <div className="services-text">
            <h2 id="services-title" className="services-h2">
              Marketing built for healthcare practices.
            </h2>
            <p className="services-sub">
              Six core capabilities &mdash; one integrated growth engine for
              clinics, medspas, and wellness brands.
            </p>
          </div>
          <Link to="/services" className="all-link">
            View all services
            <span className="ico" aria-hidden="true">
              <svg
                width={14}
                height={14}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2.2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="7" y1="17" x2="17" y2="7" />
                <polyline points="7 7 17 7 17 17" />
              </svg>
            </span>
          </Link>
        </div>

        <div className="services-track-wrap">
          <div className="services-grid" ref={trackRef}>
            {SERVICES.map(({ tag, title, sub, ariaLabel, illustration }) => (
              <Link
                key={title}
                to="/services"
                className="service-card"
                aria-label={ariaLabel}
              >
                <div className="card-img">
                  <CardArrow />
                  {illustration}
                </div>
                <span className="card-tag">{tag}</span>
                <h3 className="card-title">{title}</h3>
                <p className="card-sub">{sub}</p>
              </Link>
            ))}
          </div>
        </div>

        <div className="slider-nav" role="group" aria-label="Services slider navigation">
          <button
            type="button"
            className="nav-chev prev"
            onClick={handlePrev}
            disabled={prevDisabled}
            aria-label="Previous service"
          >
            <ChevronLeft />
          </button>
          <div className="nav-bar" ref={barRef} aria-hidden="true">
            <span className="nav-bar-fill" style={fillStyle} />
          </div>
          <button
            type="button"
            className="nav-chev next"
            onClick={handleNext}
            disabled={nextDisabled}
            aria-label="Next service"
          >
            <ChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
