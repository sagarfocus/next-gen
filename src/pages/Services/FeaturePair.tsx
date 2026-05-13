import type { ReactElement } from 'react';
import { Link } from 'react-router-dom';

interface PairCard {
  ariaId: string;
  bg: ReactElement;
  tag: string;
  title: string;
  desc: string;
  to: string;
}

const GbpBg = (
  <svg viewBox="0 0 800 550" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
    <defs>
      <linearGradient id="gbpBg" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#576DB5" />
        <stop offset="100%" stopColor="#46599C" />
      </linearGradient>
      <radialGradient id="gbpHalo" cx="80%" cy="20%" r="70%">
        <stop offset="0%" stopColor="#8FBC8F" stopOpacity=".30" />
        <stop offset="100%" stopColor="#8FBC8F" stopOpacity="0" />
      </radialGradient>
    </defs>
    <rect width="800" height="550" fill="url(#gbpBg)" />
    <rect width="800" height="550" fill="url(#gbpHalo)" />
    <g stroke="rgba(255,255,255,.06)" strokeWidth="1">
      <line x1="0" y1="100" x2="800" y2="100" />
      <line x1="0" y1="200" x2="800" y2="200" />
      <line x1="0" y1="300" x2="800" y2="300" />
      <line x1="0" y1="400" x2="800" y2="400" />
      <line x1="0" y1="500" x2="800" y2="500" />
      <line x1="100" y1="0" x2="100" y2="550" />
      <line x1="200" y1="0" x2="200" y2="550" />
      <line x1="300" y1="0" x2="300" y2="550" />
      <line x1="400" y1="0" x2="400" y2="550" />
      <line x1="500" y1="0" x2="500" y2="550" />
      <line x1="600" y1="0" x2="600" y2="550" />
      <line x1="700" y1="0" x2="700" y2="550" />
    </g>
    <g stroke="rgba(255,255,255,.10)" strokeWidth="1.5" fill="none">
      <path d="M0 220 Q 200 200 400 230 T 800 250" />
      <path d="M0 350 Q 250 320 500 360 T 800 380" />
      <path d="M180 0 Q 200 200 220 400 T 240 550" />
      <path d="M540 0 Q 560 220 580 440 T 600 550" />
    </g>
    <circle cx="540" cy="180" r="100" fill="rgba(143,188,143,.10)" />
    <circle cx="540" cy="180" r="64" fill="none" stroke="rgba(143,188,143,.45)" strokeWidth="1" strokeDasharray="3 6" />
    <path d="M540 110 C 568 110 588 130 588 158 C 588 196 540 245 540 245 C 540 245 492 196 492 158 C 492 130 512 110 540 110 Z" fill="#fff" />
    <circle cx="540" cy="158" r="14" fill="#576DB5" />
    <path d="M533 158 L 538 163 L 548 153" fill="none" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="200" cy="160" r="6" fill="#B38B6D" />
    <circle cx="200" cy="160" r="14" fill="none" stroke="#B38B6D" strokeOpacity=".5" strokeWidth="1" />
    <circle cx="320" cy="320" r="5" fill="#8FBC8F" />
    <circle cx="660" cy="380" r="5" fill="#8FBC8F" />
  </svg>
);

const CitationBg = (
  <svg viewBox="0 0 800 550" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
    <defs>
      <linearGradient id="citBg" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#2D3748" />
        <stop offset="100%" stopColor="#1F2837" />
      </linearGradient>
      <radialGradient id="citGlow" cx="30%" cy="60%" r="60%">
        <stop offset="0%" stopColor="#B38B6D" stopOpacity=".30" />
        <stop offset="100%" stopColor="#B38B6D" stopOpacity="0" />
      </radialGradient>
    </defs>
    <rect width="800" height="550" fill="url(#citBg)" />
    <rect width="800" height="550" fill="url(#citGlow)" />
    <g stroke="rgba(179,139,109,.4)" strokeWidth="1" fill="none">
      <line x1="180" y1="160" x2="400" y2="280" />
      <line x1="620" y1="140" x2="400" y2="280" />
      <line x1="120" y1="380" x2="400" y2="280" />
      <line x1="660" y1="400" x2="400" y2="280" />
      <line x1="280" y1="450" x2="400" y2="280" />
      <line x1="540" y1="460" x2="400" y2="280" />
      <line x1="180" y1="160" x2="620" y2="140" strokeDasharray="4 4" strokeOpacity=".5" />
      <line x1="120" y1="380" x2="660" y2="400" strokeDasharray="4 4" strokeOpacity=".5" />
    </g>
    <g>
      <circle cx="180" cy="160" r="22" fill="#2D3748" stroke="#B38B6D" strokeWidth="1.5" />
      <text x="180" y="166" fontFamily="Plus Jakarta Sans, sans-serif" fontSize="11" fontWeight="700" fill="#fff" textAnchor="middle">.com</text>
      <circle cx="620" cy="140" r="22" fill="#2D3748" stroke="#B38B6D" strokeWidth="1.5" />
      <text x="620" y="146" fontFamily="Plus Jakarta Sans, sans-serif" fontSize="11" fontWeight="700" fill="#fff" textAnchor="middle">.org</text>
      <circle cx="120" cy="380" r="22" fill="#2D3748" stroke="#B38B6D" strokeWidth="1.5" />
      <text x="120" y="386" fontFamily="Plus Jakarta Sans, sans-serif" fontSize="11" fontWeight="700" fill="#fff" textAnchor="middle">.net</text>
      <circle cx="660" cy="400" r="22" fill="#2D3748" stroke="#B38B6D" strokeWidth="1.5" />
      <text x="660" y="406" fontFamily="Plus Jakarta Sans, sans-serif" fontSize="11" fontWeight="700" fill="#fff" textAnchor="middle">.io</text>
      <circle cx="280" cy="450" r="14" fill="#B38B6D" />
      <circle cx="540" cy="460" r="14" fill="#B38B6D" />
    </g>
    <circle cx="400" cy="280" r="60" fill="none" stroke="rgba(143,188,143,.30)" strokeWidth="1" strokeDasharray="3 5" />
    <circle cx="400" cy="280" r="44" fill="#8FBC8F" />
    <g fill="#2D3748">
      <rect x="384" y="266" width="32" height="3" rx="1" />
      <rect x="384" y="276" width="24" height="3" rx="1" opacity=".7" />
      <rect x="384" y="286" width="28" height="3" rx="1" opacity=".5" />
    </g>
  </svg>
);

const HyperLocalBg = (
  <svg viewBox="0 0 800 550" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
    <defs>
      <linearGradient id="hlBg" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#3A4556" />
        <stop offset="100%" stopColor="#2D3748" />
      </linearGradient>
      <radialGradient id="hlGlow" cx="50%" cy="40%" r="60%">
        <stop offset="0%" stopColor="#8FBC8F" stopOpacity=".22" />
        <stop offset="100%" stopColor="#8FBC8F" stopOpacity="0" />
      </radialGradient>
    </defs>
    <rect width="800" height="550" fill="url(#hlBg)" />
    <rect width="800" height="550" fill="url(#hlGlow)" />
    <path
      d="M 180 100 L 640 80 L 700 200 L 720 380 L 600 480 L 380 460 L 200 420 L 120 320 L 140 180 Z"
      fill="none"
      stroke="rgba(179,139,109,.55)"
      strokeWidth="2"
      strokeLinejoin="round"
      strokeDasharray="4 5"
    />
    <path
      d="M 180 100 L 640 80 L 700 200 L 720 380 L 600 480 L 380 460 L 200 420 L 120 320 L 140 180 Z"
      fill="rgba(143,188,143,.06)"
      stroke="none"
    />
    <g stroke="rgba(255,255,255,.10)" strokeWidth="1" fill="none">
      <line x1="180" y1="280" x2="700" y2="260" />
      <line x1="400" y1="80" x2="380" y2="460" />
    </g>
    <g>
      <circle cx="280" cy="200" r="6" fill="#fff" />
      <text x="280" y="184" fontFamily="Plus Jakarta Sans, sans-serif" fontSize="10" fontWeight="700" fill="rgba(255,255,255,.7)" textAnchor="middle" letterSpacing="2">DALLAS</text>
      <circle cx="280" cy="200" r="14" fill="none" stroke="rgba(255,255,255,.35)" strokeWidth="1" />
      <circle cx="500" cy="180" r="9" fill="#8FBC8F" />
      <text x="500" y="160" fontFamily="Plus Jakarta Sans, sans-serif" fontSize="11" fontWeight="700" fill="#fff" textAnchor="middle" letterSpacing="2">IRVING</text>
      <circle cx="500" cy="180" r="22" fill="none" stroke="#8FBC8F" strokeOpacity=".5" strokeWidth="1" />
      <circle cx="500" cy="180" r="34" fill="none" stroke="#8FBC8F" strokeOpacity=".25" strokeWidth="1" />
      <circle cx="600" cy="320" r="6" fill="#fff" />
      <text x="600" y="346" fontFamily="Plus Jakarta Sans, sans-serif" fontSize="10" fontWeight="700" fill="rgba(255,255,255,.7)" textAnchor="middle" letterSpacing="2">PLANO</text>
      <circle cx="600" cy="320" r="14" fill="none" stroke="rgba(255,255,255,.35)" strokeWidth="1" />
      <circle cx="380" cy="380" r="6" fill="#fff" />
      <text x="380" y="406" fontFamily="Plus Jakarta Sans, sans-serif" fontSize="10" fontWeight="700" fill="rgba(255,255,255,.7)" textAnchor="middle" letterSpacing="2">FRISCO</text>
      <circle cx="380" cy="380" r="14" fill="none" stroke="rgba(255,255,255,.35)" strokeWidth="1" />
      <circle cx="220" cy="350" r="5" fill="#B38B6D" />
      <circle cx="660" cy="220" r="5" fill="#B38B6D" />
      <circle cx="540" cy="430" r="5" fill="#B38B6D" />
    </g>
  </svg>
);

const AeoBg = (
  <svg viewBox="0 0 800 550" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
    <defs>
      <linearGradient id="aeoBg" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#576DB5" />
        <stop offset="100%" stopColor="#3A4DA0" />
      </linearGradient>
      <radialGradient id="aeoGlow" cx="20%" cy="20%" r="60%">
        <stop offset="0%" stopColor="#8FBC8F" stopOpacity=".25" />
        <stop offset="100%" stopColor="#8FBC8F" stopOpacity="0" />
      </radialGradient>
    </defs>
    <rect width="800" height="550" fill="url(#aeoBg)" />
    <rect width="800" height="550" fill="url(#aeoGlow)" />
    <g stroke="rgba(255,255,255,.18)" strokeWidth="1.4" fill="none">
      <line x1="400" y1="120" x2="220" y2="240" />
      <line x1="400" y1="120" x2="400" y2="240" />
      <line x1="400" y1="120" x2="580" y2="240" />
      <line x1="220" y1="240" x2="160" y2="380" />
      <line x1="220" y1="240" x2="280" y2="380" />
      <line x1="580" y1="240" x2="520" y2="380" />
      <line x1="580" y1="240" x2="640" y2="380" />
    </g>
    <g>
      <rect x="320" y="90" width="160" height="60" rx="14" fill="#fff" stroke="#B38B6D" strokeWidth="1.4" />
      <text x="400" y="115" fontFamily="Plus Jakarta Sans, sans-serif" fontSize="11" fontWeight="700" fill="#576DB5" textAnchor="middle" letterSpacing="2">SCHEMA ROOT</text>
      <text x="400" y="138" fontFamily="Plus Jakarta Sans, sans-serif" fontSize="13" fontWeight="700" fill="#2D3748" textAnchor="middle" letterSpacing="-.4">MedicalOrganization</text>
    </g>
    <g>
      <rect x="160" y="220" width="120" height="40" rx="10" fill="rgba(143,188,143,.25)" stroke="#8FBC8F" strokeWidth="1" />
      <text x="220" y="245" fontFamily="Plus Jakarta Sans, sans-serif" fontSize="11" fontWeight="700" fill="#fff" textAnchor="middle">Service</text>
      <rect x="340" y="220" width="120" height="40" rx="10" fill="rgba(143,188,143,.25)" stroke="#8FBC8F" strokeWidth="1" />
      <text x="400" y="245" fontFamily="Plus Jakarta Sans, sans-serif" fontSize="11" fontWeight="700" fill="#fff" textAnchor="middle">FAQPage</text>
      <rect x="520" y="220" width="120" height="40" rx="10" fill="rgba(143,188,143,.25)" stroke="#8FBC8F" strokeWidth="1" />
      <text x="580" y="245" fontFamily="Plus Jakarta Sans, sans-serif" fontSize="11" fontWeight="700" fill="#fff" textAnchor="middle">Physician</text>
    </g>
    <g fill="#B38B6D">
      <circle cx="160" cy="380" r="10" />
      <circle cx="280" cy="380" r="10" />
      <circle cx="520" cy="380" r="10" />
      <circle cx="640" cy="380" r="10" />
    </g>
    <g fill="#fff">
      <path d="M120 100 L 124 110 L 134 114 L 124 118 L 120 128 L 116 118 L 106 114 L 116 110 Z" />
      <path d="M680 110 L 683 117 L 690 120 L 683 123 L 680 130 L 677 123 L 670 120 L 677 117 Z" opacity=".7" />
      <path d="M700 460 L 703 467 L 710 470 L 703 473 L 700 480 L 697 473 L 690 470 L 697 467 Z" opacity=".6" />
    </g>
    <text x="400" y="470" fontFamily="Plus Jakarta Sans, sans-serif" fontSize="11" fontWeight="700" fill="rgba(255,255,255,.5)" textAnchor="middle" letterSpacing="3">
      JSON-LD · AI OVERVIEWS · VOICE
    </text>
  </svg>
);

const ROW_1: PairCard[] = [
  { ariaId: 'card-gbp', bg: GbpBg, tag: 'Local Pack', title: 'Google Business Profile', desc: 'Complete optimization and weekly management of your GBP to secure Local Pack rankings.', to: '/services/google-business-profile' },
  { ariaId: 'card-citation', bg: CitationBg, tag: 'Authority', title: 'Citation Building', desc: 'Establishing authoritative backlinks and consistent NAP data across healthcare directories.', to: '/citation-building' },
];

const ROW_2: PairCard[] = [
  { ariaId: 'card-hl', bg: HyperLocalBg, tag: 'Geo-Targeted', title: 'Hyper-Local Content', desc: 'Creating programmatic landing pages for surrounding Texas municipalities and suburbs.', to: '/hyper-local-content' },
  { ariaId: 'card-aeo', bg: AeoBg, tag: 'AI Search', title: 'AEO & Schema', desc: 'Structuring data for AI Overviews and voice search dominance in the medical sector.', to: '/aeo-schema' },
];

const PairArrow = () => (
  <svg
    width={14}
    height={14}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2.4}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <line x1="7" y1="17" x2="17" y2="7" />
    <polyline points="7 7 17 7 17 17" />
  </svg>
);

const renderCard = ({ ariaId, bg, tag, title, desc, to }: PairCard) => (
  <Link
    key={ariaId}
    to={to}
    className="pair-card"
    aria-labelledby={ariaId}
  >
    <div className="pair-bg">{bg}</div>
    <div className="pair-overlay" />
    <span className="reg-w tl" />
    <span className="reg-w tr" />
    <div className="pair-content">
      <span className="pair-tag">{tag}</span>
      <div className="pair-bottom">
        <h3 id={ariaId} className="pair-title">
          {title}
        </h3>
        <p className="pair-desc">{desc}</p>
        <span className="pair-cta">
          Learn More
          <PairArrow />
        </span>
      </div>
    </div>
  </Link>
);

const FeaturePair = () => {
  return (
    <section className="pair-section" id="local-aeo" aria-labelledby="pair-title">
      <div className="container-shell">
        <div className="pair-head">
          <span className="pair-eyebrow">Local SEO &amp; Visibility</span>
          <h2 id="pair-title" className="pair-h2">
            Own your local search &mdash; from map pack to AI Overviews.
          </h2>
          <p className="pair-sub">
            A four-pillar approach to local search visibility, structured data,
            and AI-driven discovery for your healthcare practice.
          </p>
        </div>

        <div className="pair-grid" style={{ marginBottom: 'clamp(20px, 2.5vw, 32px)' }}>
          {ROW_1.map(renderCard)}
        </div>
        <div className="pair-grid">{ROW_2.map(renderCard)}</div>
      </div>
    </section>
  );
};

export default FeaturePair;
