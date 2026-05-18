import type { ReactElement } from 'react';

import emergencyImg from '../../assets/freestandingemergency.png';
import urgentCareImg from "../../assets/urgentcare'.png";
import medspaImg from '../../assets/medddsspa.png';

interface OverviewCard {
  href: string;
  ariaId: string;
  meta: string;
  title: ReactElement;
  text: string;
  image: string;
  imageAlt: string;
  illustration: ReactElement;
}

const ArrowIcon = () => (
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
);

const CARDS: OverviewCard[] = [
  {
    href: '#emergency-room',
    ariaId: 'ov-1',
    meta: 'High Acuity',
    title: <>Freestanding Emergency Rooms</>,
    text: 'Patient acquisition built for trauma searches, immediate visibility, and competitor overflow capture.',
    image: emergencyImg,
    imageAlt: 'Freestanding emergency room illustration',
    illustration: (
      <svg
        viewBox="0 0 320 240"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M 30 130 L 80 130 L 95 90 L 115 170 L 135 70 L 155 130 L 200 130 L 215 110 L 230 150 L 250 130 L 290 130"
          fill="none"
          stroke="#576DB5"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <rect x="148" y="60" width="20" height="60" rx="3" fill="#fff" stroke="#576DB5" strokeWidth="1.5" />
        <rect x="128" y="80" width="60" height="20" rx="3" fill="#fff" stroke="#576DB5" strokeWidth="1.5" />
        <rect x="148" y="60" width="20" height="60" rx="3" fill="#576DB5" />
        <rect x="128" y="80" width="60" height="20" rx="3" fill="#576DB5" />
      </svg>
    ),
  },
  {
    href: '#urgent-care',
    ariaId: 'ov-2',
    meta: 'Walk-In Volume',
    title: <>Urgent Care &amp; Walk-in Clinics</>,
    text: 'Volume-driven patient acquisition with reputation systems and wait-time transparency.',
    image: urgentCareImg,
    imageAlt: 'Urgent care clock illustration',
    illustration: (
      <svg
        viewBox="0 0 320 240"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <circle cx="160" cy="120" r="62" fill="#fff" stroke="#B38B6D" strokeWidth="1.8" />
        <circle
          cx="160"
          cy="120"
          r="48"
          fill="none"
          stroke="#8FBC8F"
          strokeWidth="1.2"
          strokeDasharray="3 5"
        />
        <line x1="160" y1="120" x2="160" y2="88" stroke="#576DB5" strokeWidth="2.6" strokeLinecap="round" />
        <line x1="160" y1="120" x2="184" y2="124" stroke="#B38B6D" strokeWidth="2.6" strokeLinecap="round" />
        <circle cx="160" cy="120" r="4" fill="#576DB5" />
        <rect x="220" y="60" width="6" height="20" rx="1.5" fill="#8FBC8F" />
        <rect x="213" y="67" width="20" height="6" rx="1.5" fill="#8FBC8F" />
      </svg>
    ),
  },
  {
    href: '#wellness',
    ariaId: 'ov-3',
    meta: 'Longevity',
    title: <>MedSpas &amp; Wellness Clinics</>,
    text: 'High-LTV patient acquisition with social-led lead generation and automated retention sequences.',
    image: medspaImg,
    imageAlt: 'MedSpa wellness illustration',
    illustration: (
      <svg
        viewBox="0 0 320 240"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <g transform="translate(160, 120)">
          <circle
            r="60"
            fill="none"
            stroke="#B38B6D"
            strokeWidth="1.2"
            strokeDasharray="3 5"
            opacity=".55"
          />
          <g>
            <path d="M0 -50 Q 22 -10 0 30 Q -22 -10 0 -50 Z" fill="#8FBC8F" fillOpacity=".55" transform="rotate(0)" />
            <path d="M0 -50 Q 22 -10 0 30 Q -22 -10 0 -50 Z" fill="#8FBC8F" fillOpacity=".55" transform="rotate(72)" />
            <path d="M0 -50 Q 22 -10 0 30 Q -22 -10 0 -50 Z" fill="#8FBC8F" fillOpacity=".55" transform="rotate(144)" />
            <path d="M0 -50 Q 22 -10 0 30 Q -22 -10 0 -50 Z" fill="#8FBC8F" fillOpacity=".55" transform="rotate(216)" />
            <path d="M0 -50 Q 22 -10 0 30 Q -22 -10 0 -50 Z" fill="#8FBC8F" fillOpacity=".55" transform="rotate(288)" />
          </g>
          <circle r="10" fill="#576DB5" />
        </g>
      </svg>
    ),
  },
];

const IndustriesOverview = () => {
  return (
    <section className="ind-overview" aria-labelledby="ind-ov-title">
      <div className="container-shell">
        <div className="ind-ov-head">
          <span className="ind-ov-eyebrow">Who We Serve</span>
          <h2 id="ind-ov-title" className="ind-ov-h2">
            We currently serve three healthcare verticals.
          </h2>
          <p className="ind-ov-sub">
            Each industry has its own patient psychology, regulatory landscape,
            and acquisition dynamics. We build playbooks &mdash; not templates
            &mdash; for each one.
          </p>
          <a href="#deep-dive" className="ind-ov-link">
            Explore industry deep-dives
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
          </a>
        </div>

        <div className="ind-ov-grid">
          {CARDS.map((card) => (
            <a
              key={card.ariaId}
              href={card.href}
              className="ind-ov-card"
              aria-labelledby={card.ariaId}
            >
              <div className="ind-ov-img has-img">
                <img
                  src={card.image}
                  alt={card.imageAlt}
                  loading="lazy"
                  decoding="async"
                />
                <span className="ind-ov-arrow" aria-hidden="true">
                  <ArrowIcon />
                </span>
              </div>
              <span className="ind-ov-meta">
                <span className="date">{card.meta}</span>
              </span>
              <h3 id={card.ariaId} className="ind-ov-title">
                {card.title}
              </h3>
              <p className="ind-ov-sub-text">{card.text}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesOverview;
