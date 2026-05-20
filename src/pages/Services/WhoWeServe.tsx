import type { ReactElement } from 'react';
import { Link } from 'react-router-dom';

interface ServeCard {
  ariaId: string;
  illustration: ReactElement;
  tag: string;
  title: string;
  desc: string;
  points: string[];
  to: string;
}

const ClinicsIllustration = (
  <svg viewBox="0 0 600 750" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
    <defs>
      <linearGradient id="cliBg" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#576DB5" />
        <stop offset="60%" stopColor="#3A4DA0" />
        <stop offset="100%" stopColor="#2D3748" />
      </linearGradient>
      <radialGradient id="cliHalo" cx="50%" cy="35%" r="60%">
        <stop offset="0%" stopColor="#8FBC8F" stopOpacity=".30" />
        <stop offset="100%" stopColor="#8FBC8F" stopOpacity="0" />
      </radialGradient>
      <linearGradient id="cliGlass" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#fff" stopOpacity=".25" />
        <stop offset="100%" stopColor="#fff" stopOpacity=".05" />
      </linearGradient>
    </defs>
    <rect width="600" height="750" fill="url(#cliBg)" />
    <rect width="600" height="750" fill="url(#cliHalo)" />
    <g stroke="rgba(255,255,255,.05)" strokeWidth="1">
      <line x1="0" y1="120" x2="600" y2="120" />
      <line x1="0" y1="240" x2="600" y2="240" />
      <line x1="0" y1="360" x2="600" y2="360" />
      <line x1="0" y1="480" x2="600" y2="480" />
      <line x1="0" y1="600" x2="600" y2="600" />
      <line x1="120" y1="0" x2="120" y2="750" />
      <line x1="240" y1="0" x2="240" y2="750" />
      <line x1="360" y1="0" x2="360" y2="750" />
      <line x1="480" y1="0" x2="480" y2="750" />
    </g>
    <g transform="translate(300, 280)">
      <polygon points="-20,-100 60,-70 60,160 -20,130" fill="url(#cliGlass)" stroke="rgba(143,188,143,.45)" strokeWidth="1.2" />
      <polygon points="-20,-100 -100,-130 -100,100 -20,130" fill="rgba(255,255,255,.10)" stroke="rgba(143,188,143,.35)" strokeWidth="1" />
      <g fill="rgba(143,188,143,.35)">
        <rect x="-90" y="-118" width="60" height="6" rx="1" />
        <rect x="-90" y="-100" width="60" height="6" rx="1" />
        <rect x="-90" y="-82" width="60" height="6" rx="1" />
        <rect x="-90" y="-64" width="60" height="6" rx="1" />
        <rect x="-90" y="-46" width="60" height="6" rx="1" />
        <rect x="-90" y="-28" width="60" height="6" rx="1" />
        <rect x="-90" y="-10" width="60" height="6" rx="1" />
        <rect x="-90" y="8" width="60" height="6" rx="1" />
        <rect x="-90" y="26" width="60" height="6" rx="1" />
        <rect x="-90" y="44" width="60" height="6" rx="1" />
        <rect x="-90" y="62" width="60" height="6" rx="1" />
        <rect x="-90" y="80" width="60" height="6" rx="1" />
      </g>
      <g transform="translate(0, 0)">
        <rect x="14" y="-40" width="22" height="80" rx="2" fill="#8FBC8F" />
        <rect x="-8" y="-18" width="66" height="22" rx="2" fill="#8FBC8F" />
      </g>
      <polygon points="-50,80 -20,90 -20,130 -50,118" fill="rgba(143,188,143,.25)" stroke="rgba(143,188,143,.55)" strokeWidth="1" />
    </g>
    <g>
      <rect x="60" y="120" width="160" height="44" rx="22" fill="rgba(255,255,255,.10)" stroke="rgba(255,255,255,.20)" strokeWidth="1" />
      <circle cx="84" cy="142" r="5" fill="#8FBC8F" />
      <text x="100" y="147" fontFamily="Plus Jakarta Sans, sans-serif" fontSize="12" fontWeight="700" fill="#fff" letterSpacing="2">CARDIOLOGY</text>
      <rect x="380" y="180" width="170" height="44" rx="22" fill="rgba(255,255,255,.10)" stroke="rgba(255,255,255,.20)" strokeWidth="1" />
      <circle cx="404" cy="202" r="5" fill="#B38B6D" />
      <text x="420" y="207" fontFamily="Plus Jakarta Sans, sans-serif" fontSize="12" fontWeight="700" fill="#fff" letterSpacing="2">DERMATOLOGY</text>
      <rect x="80" y="500" width="180" height="44" rx="22" fill="rgba(255,255,255,.10)" stroke="rgba(255,255,255,.20)" strokeWidth="1" />
      <circle cx="104" cy="522" r="5" fill="#fff" />
      <text x="120" y="527" fontFamily="Plus Jakarta Sans, sans-serif" fontSize="12" fontWeight="700" fill="#fff" letterSpacing="2">URGENT CARE</text>
      <rect x="360" y="560" width="180" height="44" rx="22" fill="rgba(255,255,255,.10)" stroke="rgba(255,255,255,.20)" strokeWidth="1" />
      <circle cx="384" cy="582" r="5" fill="#8FBC8F" />
      <text x="400" y="587" fontFamily="Plus Jakarta Sans, sans-serif" fontSize="12" fontWeight="700" fill="#fff" letterSpacing="2">PEDIATRICS</text>
    </g>
    <g fill="#B38B6D" opacity=".55">
      <path d="M50 80 h10 v3 h-10 z M54 76 h2 v11 h-2 z" />
      <path d="M520 100 h10 v3 h-10 z M524 96 h2 v11 h-2 z" />
      <path d="M40 660 h10 v3 h-10 z M44 656 h2 v11 h-2 z" />
    </g>
  </svg>
);

const MedSpaIllustration = (
  <svg viewBox="0 0 600 750" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
    <defs>
      <linearGradient id="msBg" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#B38B6D" />
        <stop offset="60%" stopColor="#8B6F55" />
        <stop offset="100%" stopColor="#2D3748" />
      </linearGradient>
      <radialGradient id="msHalo" cx="50%" cy="35%" r="60%">
        <stop offset="0%" stopColor="#fff" stopOpacity=".22" />
        <stop offset="100%" stopColor="#fff" stopOpacity="0" />
      </radialGradient>
    </defs>
    <rect width="600" height="750" fill="url(#msBg)" />
    <rect width="600" height="750" fill="url(#msHalo)" />
    <g stroke="rgba(255,255,255,.06)" strokeWidth="1">
      <line x1="0" y1="180" x2="600" y2="180" />
      <line x1="0" y1="380" x2="600" y2="380" />
      <line x1="0" y1="580" x2="600" y2="580" />
      <line x1="200" y1="0" x2="200" y2="750" />
      <line x1="400" y1="0" x2="400" y2="750" />
    </g>
    <g transform="translate(300, 300)">
      <circle r="180" fill="none" stroke="rgba(255,255,255,.20)" strokeWidth="1" strokeDasharray="4 8" />
      <circle r="130" fill="none" stroke="rgba(255,255,255,.30)" strokeWidth="1" strokeDasharray="4 8" />
      <circle r="80" fill="rgba(255,255,255,.12)" stroke="rgba(255,255,255,.45)" strokeWidth="1.2" />
      <circle r="60" fill="none" stroke="rgba(255,255,255,.65)" strokeWidth="1" />
      <g>
        <path d="M0 -50 Q 30 -10 0 30 Q -30 -10 0 -50 Z" fill="rgba(143,188,143,.55)" transform="rotate(0)" />
        <path d="M0 -50 Q 30 -10 0 30 Q -30 -10 0 -50 Z" fill="rgba(143,188,143,.55)" transform="rotate(72)" />
        <path d="M0 -50 Q 30 -10 0 30 Q -30 -10 0 -50 Z" fill="rgba(143,188,143,.55)" transform="rotate(144)" />
        <path d="M0 -50 Q 30 -10 0 30 Q -30 -10 0 -50 Z" fill="rgba(143,188,143,.55)" transform="rotate(216)" />
        <path d="M0 -50 Q 30 -10 0 30 Q -30 -10 0 -50 Z" fill="rgba(143,188,143,.55)" transform="rotate(288)" />
        <circle r="8" fill="#fff" />
      </g>
    </g>
    <g>
      <rect x="40" y="100" width="170" height="44" rx="22" fill="rgba(255,255,255,.16)" stroke="rgba(255,255,255,.30)" strokeWidth="1" />
      <circle cx="64" cy="122" r="5" fill="#8FBC8F" />
      <text x="80" y="127" fontFamily="Plus Jakarta Sans, sans-serif" fontSize="12" fontWeight="700" fill="#fff" letterSpacing="2">AESTHETICS</text>
      <rect x="380" y="140" width="170" height="44" rx="22" fill="rgba(255,255,255,.16)" stroke="rgba(255,255,255,.30)" strokeWidth="1" />
      <circle cx="404" cy="162" r="5" fill="#fff" />
      <text x="420" y="167" fontFamily="Plus Jakarta Sans, sans-serif" fontSize="12" fontWeight="700" fill="#fff" letterSpacing="2">WELLNESS</text>
      <rect x="60" y="540" width="180" height="44" rx="22" fill="rgba(255,255,255,.16)" stroke="rgba(255,255,255,.30)" strokeWidth="1" />
      <circle cx="84" cy="562" r="5" fill="#8FBC8F" />
      <text x="100" y="567" fontFamily="Plus Jakarta Sans, sans-serif" fontSize="12" fontWeight="700" fill="#fff" letterSpacing="2">IV THERAPY</text>
      <rect x="360" y="600" width="190" height="44" rx="22" fill="rgba(255,255,255,.16)" stroke="rgba(255,255,255,.30)" strokeWidth="1" />
      <circle cx="384" cy="622" r="5" fill="#fff" />
      <text x="400" y="627" fontFamily="Plus Jakarta Sans, sans-serif" fontSize="12" fontWeight="700" fill="#fff" letterSpacing="2">INJECTABLES</text>
    </g>
    <g fill="#fff" opacity=".7">
      <path d="M80 80 L 84 90 L 94 94 L 84 98 L 80 108 L 76 98 L 66 94 L 76 90 Z" />
      <path d="M520 60 L 523 67 L 530 70 L 523 73 L 520 80 L 517 73 L 510 70 L 517 67 Z" opacity=".7" />
      <path d="M540 480 L 544 490 L 554 494 L 544 498 L 540 508 L 536 498 L 526 494 L 536 490 Z" opacity=".5" />
    </g>
  </svg>
);

const SpecialtyIllustration = (
  <svg viewBox="0 0 600 750" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
    <defs>
      <linearGradient id="spBg" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#3F4F66" />
        <stop offset="60%" stopColor="#2D3748" />
        <stop offset="100%" stopColor="#1F2837" />
      </linearGradient>
      <radialGradient id="spHalo" cx="50%" cy="40%" r="60%">
        <stop offset="0%" stopColor="#576DB5" stopOpacity=".30" />
        <stop offset="100%" stopColor="#576DB5" stopOpacity="0" />
      </radialGradient>
    </defs>
    <rect width="600" height="750" fill="url(#spBg)" />
    <rect width="600" height="750" fill="url(#spHalo)" />
    <g stroke="rgba(255,255,255,.05)" strokeWidth="1">
      <line x1="0" y1="180" x2="600" y2="180" />
      <line x1="0" y1="380" x2="600" y2="380" />
      <line x1="0" y1="580" x2="600" y2="580" />
      <line x1="200" y1="0" x2="200" y2="750" />
      <line x1="400" y1="0" x2="400" y2="750" />
    </g>
    <path
      d="M 20 300 L 100 300 L 130 300 L 150 240 L 175 360 L 200 200 L 220 300 L 280 300 L 310 300 L 330 250 L 355 350 L 380 300 L 580 300"
      fill="none"
      stroke="#576DB5"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <g transform="translate(300, 460)">
      <circle r="55" fill="none" stroke="#fff" strokeOpacity=".4" strokeWidth="2" />
      <circle r="80" fill="none" stroke="#576DB5" strokeWidth="2" strokeDasharray="3 5" />
      <circle r="22" fill="rgba(255,255,255,.18)" stroke="#fff" strokeWidth="1.5" />
      <circle r="6" fill="#fff" />
      <path d="M -50 -30 Q -100 -120 -150 -160" fill="none" stroke="rgba(255,255,255,.5)" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M 50 -30 Q 100 -120 150 -160" fill="none" stroke="rgba(255,255,255,.5)" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="-150" cy="-160" r="6" fill="#B38B6D" />
      <circle cx="150" cy="-160" r="6" fill="#B38B6D" />
    </g>
    <g>
      <rect x="40" y="100" width="180" height="44" rx="22" fill="rgba(255,255,255,.10)" stroke="rgba(255,255,255,.22)" strokeWidth="1" />
      <circle cx="64" cy="122" r="5" fill="#576DB5" />
      <text x="80" y="127" fontFamily="Plus Jakarta Sans, sans-serif" fontSize="12" fontWeight="700" fill="#fff" letterSpacing="2">EMERGENCY</text>
      <rect x="380" y="80" width="180" height="44" rx="22" fill="rgba(255,255,255,.10)" stroke="rgba(255,255,255,.22)" strokeWidth="1" />
      <circle cx="404" cy="102" r="5" fill="#8FBC8F" />
      <text x="420" y="107" fontFamily="Plus Jakarta Sans, sans-serif" fontSize="12" fontWeight="700" fill="#fff" letterSpacing="2">ORTHOPEDICS</text>
      <rect x="60" y="640" width="170" height="44" rx="22" fill="rgba(255,255,255,.10)" stroke="rgba(255,255,255,.22)" strokeWidth="1" />
      <circle cx="84" cy="662" r="5" fill="#B38B6D" />
      <text x="100" y="667" fontFamily="Plus Jakarta Sans, sans-serif" fontSize="12" fontWeight="700" fill="#fff" letterSpacing="2">ONCOLOGY</text>
      <rect x="370" y="660" width="180" height="44" rx="22" fill="rgba(255,255,255,.10)" stroke="rgba(255,255,255,.22)" strokeWidth="1" />
      <circle cx="394" cy="682" r="5" fill="#fff" />
      <text x="410" y="687" fontFamily="Plus Jakarta Sans, sans-serif" fontSize="12" fontWeight="700" fill="#fff" letterSpacing="2">RADIOLOGY</text>
    </g>
    <g fill="#576DB5" opacity=".7">
      <path d="M50 60 h10 v3 h-10 z M54 56 h2 v11 h-2 z" />
      <path d="M540 200 h10 v3 h-10 z M544 196 h2 v11 h-2 z" />
      <path d="M30 540 h10 v3 h-10 z M34 536 h2 v11 h-2 z" />
    </g>
  </svg>
);

const CARDS: ServeCard[] = [
  {
    ariaId: 'serve-1',
    illustration: ClinicsIllustration,
    tag: 'Clinical',
    title: 'Clinics & Multi-Specialty Practices',
    desc: 'From single-location family practices to multi-location networks - SEO, paid media, and patient-acquisition systems built for clinical reality.',
    points: ['Family Practice', 'Cardiology', 'Dental', 'Pediatrics'],
    to: '/industries/clinics',
  },
  {
    ariaId: 'serve-2',
    illustration: MedSpaIllustration,
    tag: 'Aesthetic',
    title: 'MedSpas & Wellness Brands',
    desc: 'High-volume social, Meta campaigns, and conversion-focused websites engineered for elective and aesthetic services.',
    points: ['MedSpa', 'Aesthetics', 'IV Therapy', 'Wellness'],
    to: '/industries/medspas',
  },
  {
    ariaId: 'serve-3',
    illustration: SpecialtyIllustration,
    tag: 'Acuity',
    title: 'Specialty & Emergency Care',
    desc: 'Compliance-aware, high-acuity patient acquisition for ERs, urgent care, and specialty practices that need scale and speed.',
    points: ['Emergency', 'Urgent Care', 'Orthopedics', 'Oncology'],
    to: '/industries/specialty-emergency',
  },
];

const CardArrow = () => (
  <span className="serve-arrow" aria-hidden="true">
    <svg
      width={16}
      height={16}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="7" y1="17" x2="17" y2="7" />
      <polyline points="7 7 17 7 17 17" />
    </svg>
  </span>
);

const WhoWeServe = () => {
  return (
    <section
      className="serve-section"
      id="who-we-serve"
      aria-labelledby="serve-title"
    >
      <div className="container-shell">
        <div className="serve-head">
          <span className="serve-eyebrow">Who We Serve</span>
          <h2 id="serve-title" className="serve-h2">
            Built for healthcare practices that want to lead.
          </h2>
          <p className="serve-sub">
            We exclusively serve healthcare practices that want to dominate
            their market - from solo medspas to multi-location networks.
          </p>
        </div>

        <div className="serve-grid">
          {CARDS.map(({ ariaId, illustration, tag, title, desc, points, to }) => (
            <Link
              key={ariaId}
              to={to}
              className="serve-card"
              aria-labelledby={ariaId}
            >
              <div className="serve-img">{illustration}</div>
              <div className="serve-overlay" />
              <CardArrow />
              <div className="serve-content">
                <span className="serve-tag">{tag}</span>
                <h3 id={ariaId} className="serve-title">
                  {title}
                </h3>
                <p className="serve-desc">{desc}</p>
                <ul className="serve-points">
                  {points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoWeServe;
