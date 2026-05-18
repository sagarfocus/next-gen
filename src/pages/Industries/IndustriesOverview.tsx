import { useEffect, useState } from 'react';
import type { ReactElement } from 'react';
import { Link } from 'react-router-dom';

import emergencyImg from '../../assets/freestandingemergency.png';
import urgentCareImg from "../../assets/urgentcare'.png";
import medspaImg from '../../assets/medddsspa.png';

interface OverviewCard {
  href: string;
  ariaId: string;
  meta: string;
  titleText: string;
  title: ReactElement;
  text: string;
  image: string;
  imageAlt: string;
  illustration: ReactElement;
  description: string;
  services: string[];
  metric: { v: string; l: string };
  ctaTo: string;
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
    titleText: 'Freestanding Emergency Rooms',
    title: <>Freestanding Emergency Rooms</>,
    text: 'Patient acquisition built for trauma searches, immediate visibility, and competitor overflow capture.',
    image: emergencyImg,
    imageAlt: 'Freestanding emergency room illustration',
    description:
      "Emergency-care acquisition isn't optimised paid search — it's a closed loop of clinical intent, payer-mix routing, and overflow capture from hospital partners. We rebuild that loop end-to-end so every booked visit moves revenue, not just impressions.",
    services: [
      'Trauma intent SEO + GBP',
      'Wait-time landing pages',
      'Insurance verification flows',
      'Geo-fenced display + connected TV',
      'EmergencyMedicalService schema',
    ],
    metric: { v: '+318%', l: 'Booked visits, 90d' },
    ctaTo: '/industries/specialty-emergency',
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
    titleText: 'Urgent Care & Walk-in Clinics',
    title: <>Urgent Care &amp; Walk-in Clinics</>,
    text: 'Volume-driven patient acquisition with reputation systems and wait-time transparency.',
    image: urgentCareImg,
    imageAlt: 'Urgent care clock illustration',
    description:
      'Walk-in clinics live and die on volume. We build the reputation systems, wait-time transparency, and intent-aware paid funnels that keep your locations full all year — not just during flu season.',
    services: [
      'Wait-time + queue transparency pages',
      'Reputation + review velocity engine',
      'Same-day intent paid campaigns',
      'GBP + service-area page network',
      'After-hours intake automation',
    ],
    metric: { v: '+92%', l: 'Same-day bookings, 6mo' },
    ctaTo: '/industries/clinics',
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
    titleText: 'MedSpas & Wellness Clinics',
    title: <>MedSpas &amp; Wellness Clinics</>,
    text: 'High-LTV patient acquisition with social-led lead generation and automated retention sequences.',
    image: medspaImg,
    imageAlt: 'MedSpa wellness illustration',
    description:
      'MedSpas earn their margin on the second and third visit, not the first. We model paid acquisition around lifetime value, then layer the retention sequences and loyalty mechanics that turn one-off bookings into multi-year patient relationships.',
    services: [
      'LTV-modelled paid acquisition',
      'Social-led lead generation',
      'Membership + loyalty programmes',
      'Aftercare + recall automation',
      'Treatment-bundle creative + landing pages',
    ],
    metric: { v: '+62%', l: 'AOV, six months' },
    ctaTo: '/industries/medspas',
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
  const [modalIdx, setModalIdx] = useState<number | null>(null);
  const modalCard = modalIdx !== null ? CARDS[modalIdx] : null;

  useEffect(() => {
    if (modalIdx === null) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setModalIdx(null);
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', onKey);
    };
  }, [modalIdx]);

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
          {CARDS.map((card, i) => (
            <button
              key={card.ariaId}
              type="button"
              className="ind-ov-card"
              aria-labelledby={card.ariaId}
              aria-haspopup="dialog"
              onClick={() => setModalIdx(i)}
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
            </button>
          ))}
        </div>
      </div>

      {modalCard !== null && modalIdx !== null && (
        <div
          className="ow-ind-modal"
          role="dialog"
          aria-modal="true"
          aria-labelledby="ind-ov-modal-title"
          onClick={() => setModalIdx(null)}
        >
          <div className="ow-ind-modal-card" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="ow-ind-modal-close"
              onClick={() => setModalIdx(null)}
              aria-label="Close details"
            >
              <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="6" y1="6" x2="18" y2="18" />
                <line x1="6" y1="18" x2="18" y2="6" />
              </svg>
            </button>

            <div className="ow-ind-modal-art" aria-hidden="true">
              <img src={modalCard.image} alt="" />
              <div className="ow-ind-modal-art-shade" />
              <span className="ow-ind-modal-num">
                {String(modalIdx + 1).padStart(2, '0')} / {String(CARDS.length).padStart(2, '0')}
              </span>
            </div>

            <div className="ow-ind-modal-body">
              <span className="ow-ind-modal-tag">Industry · {modalCard.meta}</span>
              <h2 id="ind-ov-modal-title" className="ow-ind-modal-title">{modalCard.titleText}</h2>
              <p className="ow-ind-modal-blurb">{modalCard.text}</p>
              <p className="ow-ind-modal-desc">{modalCard.description}</p>

              <div className="ow-ind-modal-services">
                <span className="ow-ind-modal-subtag">What we ship</span>
                <ul>
                  {modalCard.services.map((s) => (
                    <li key={s}>
                      <svg width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      {s}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="ow-ind-modal-foot">
                <div className="ow-ind-modal-metric">
                  <strong>{modalCard.metric.v}</strong>
                  <span>{modalCard.metric.l}</span>
                </div>
                <Link to={modalCard.ctaTo} className="ow-ind-modal-cta">
                  Explore {modalCard.titleText.split(' ').slice(0, 2).join(' ')}
                  <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default IndustriesOverview;
