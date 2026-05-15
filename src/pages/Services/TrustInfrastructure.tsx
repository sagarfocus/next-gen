import { useState } from 'react';
import type { ReactElement } from 'react';
import BookingModal from '../../components/BookingModal';

interface TrustCardData {
  featured?: boolean;
  ariaId: string;
  icon: ReactElement;
  tag: string;
  title: string;
  text: string;
  bullets: string[];
}

const StarShieldIcon = () => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.7}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M12 2 L 14.6 9 L 22 9.5 L 16.5 14 L 18 21.5 L 12 17.5 L 6 21.5 L 7.5 14 L 2 9.5 L 9.4 9 Z" />
  </svg>
);

const ShieldCheckIcon = () => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.7}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M12 2 L 4 6 V 12 C 4 16.5 7.5 20.7 12 22 C 16.5 20.7 20 16.5 20 12 V 6 Z" />
    <path d="M9 12 L 11 14 L 15 10" />
  </svg>
);

const ArrowIcon = () => (
  <svg
    width={14}
    height={14}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2.2}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <line x1="7" y1="17" x2="17" y2="7" />
    <polyline points="7 7 17 7 17 17" />
  </svg>
);

const TRUST_CARDS: TrustCardData[] = [
  {
    featured: true,
    ariaId: 'trust-1',
    icon: <StarShieldIcon />,
    tag: 'Patient Trust',
    title: 'Reputation Management',
    text: 'Active monitoring and response across Google, Healthgrades, and Vitals — turning patient feedback into a competitive advantage.',
    bullets: [
      'Review monitoring & response automation',
      'Sentiment analysis dashboards',
      'HIPAA-compliant response templates',
      'Multi-platform reputation scoring',
    ],
  },
  {
    ariaId: 'trust-2',
    icon: <ShieldCheckIcon />,
    tag: 'Compliance',
    title: 'HIPAA-Compliant Web Design',
    text: 'Secure, accessible websites engineered for the healthcare standard — encrypted forms, BAA-ready hosting, and ADA accessibility.',
    bullets: [
      'SSL encryption & secure form handling',
      'BAA-ready hosting infrastructure',
      'WCAG 2.1 AA accessibility compliance',
      'Annual security audits & updates',
    ],
  },
];

const TrustInfrastructure = () => {
  const [bookingOpen, setBookingOpen] = useState(false);

  return (
    <section
      className="trust-section"
      id="trust"
      aria-labelledby="trust-title"
    >
      <div className="container-shell">
        <div className="trust-grid">
          {/* LEFT — sticky header */}
          <div className="trust-head">
            <span className="trust-eyebrow">Trust &amp; Infrastructure</span>
            <h2 id="trust-title" className="trust-h2">
              Built on the same standards as your practice.
            </h2>
            <p className="trust-sub">
              Your digital presence must convey the same level of clinical
              excellence and security as your physical facility &mdash;
              engineered for trust, accessibility, and compliance from day one.
            </p>
            <button
              type="button"
              className="trust-cta"
              onClick={() => setBookingOpen(true)}
              aria-haspopup="dialog"
              aria-expanded={bookingOpen}
              aria-controls="bookingModal"
            >
              Talk to a specialist
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
            </button>
          </div>

          {/* RIGHT — 2 cards */}
          <div className="trust-cards">
            {TRUST_CARDS.map(({ featured, ariaId, icon, tag, title, text, bullets }) => (
              <article
                key={ariaId}
                className={`trust-card${featured ? ' is-featured' : ''}`}
                aria-labelledby={ariaId}
              >
                <div className="trust-card-head">
                  <span className="trust-icon" aria-hidden="true">
                    {icon}
                  </span>
                  <span className="trust-arrow" aria-hidden="true">
                    <ArrowIcon />
                  </span>
                </div>
                <span className="trust-tag">{tag}</span>
                <h3 id={ariaId} className="trust-title">
                  {title}
                </h3>
                <p className="trust-text">{text}</p>
                <ul className="trust-list">
                  {bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </div>

      <BookingModal open={bookingOpen} onClose={() => setBookingOpen(false)} />
    </section>
  );
};

export default TrustInfrastructure;
