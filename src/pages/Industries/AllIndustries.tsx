import type { ReactElement } from 'react';

interface IndustryRow {
  href: string;
  label: string;
  meta: string;
  illustration: ReactElement;
}

const ArrowIcon = () => (
  <svg
    width={11}
    height={11}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2.6}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

const ROWS: IndustryRow[] = [
  {
    href: 'https://thenextgenhealth.com/industries/dental',
    label: 'Dental',
    meta: 'New patient acquisition & recall',
    illustration: (
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path
          d="M50 22c-12 0-20 8-20 20 0 8 2 14 4 22 1 5 3 14 8 14 4 0 5-7 8-7s4 7 8 7c5 0 7-9 8-14 2-8 4-14 4-22 0-12-8-20-20-20z"
          fill="none"
          stroke="#576DB5"
          strokeWidth="3"
          strokeLinejoin="round"
        />
        <circle cx="50" cy="42" r="3" fill="#8FBC8F" />
      </svg>
    ),
  },
  {
    href: 'https://thenextgenhealth.com/industries/urgent-care',
    label: 'Urgent Care',
    meta: 'Walk-in volume & reputation',
    illustration: (
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <rect x="20" y="30" width="60" height="50" rx="4" fill="none" stroke="#576DB5" strokeWidth="3" strokeLinejoin="round" />
        <rect x="44" y="42" width="12" height="32" rx="2" fill="#8FBC8F" />
        <rect x="34" y="52" width="32" height="12" rx="2" fill="#8FBC8F" />
        <line x1="20" y1="40" x2="80" y2="40" stroke="#B38B6D" strokeWidth="2" />
      </svg>
    ),
  },
  {
    href: 'https://thenextgenhealth.com/industries/medspa',
    label: 'MedSpa',
    meta: 'Aesthetic conversions & LTV',
    illustration: (
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <g transform="translate(50, 50)">
          <path d="M0 -25 Q 12 -5 0 15 Q -12 -5 0 -25 Z" fill="#8FBC8F" transform="rotate(0)" />
          <path d="M0 -25 Q 12 -5 0 15 Q -12 -5 0 -25 Z" fill="#8FBC8F" transform="rotate(72)" opacity=".75" />
          <path d="M0 -25 Q 12 -5 0 15 Q -12 -5 0 -25 Z" fill="#8FBC8F" transform="rotate(144)" opacity=".55" />
          <path d="M0 -25 Q 12 -5 0 15 Q -12 -5 0 -25 Z" fill="#8FBC8F" transform="rotate(216)" opacity=".75" />
          <path d="M0 -25 Q 12 -5 0 15 Q -12 -5 0 -25 Z" fill="#8FBC8F" transform="rotate(288)" opacity=".55" />
          <circle r="6" fill="#576DB5" />
        </g>
      </svg>
    ),
  },
  {
    href: 'https://thenextgenhealth.com/industries/freestanding-ers',
    label: 'Freestanding ER',
    meta: 'High-acuity trauma keywords',
    illustration: (
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path
          d="M10 50 L 28 50 L 36 32 L 48 70 L 58 25 L 68 50 L 90 50"
          fill="none"
          stroke="#576DB5"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <rect x="40" y="20" width="8" height="22" rx="1" fill="#8FBC8F" />
        <rect x="33" y="27" width="22" height="8" rx="1" fill="#8FBC8F" />
      </svg>
    ),
  },
  {
    href: 'https://thenextgenhealth.com/industries/mental-health',
    label: 'Mental Health',
    meta: 'Compliant, sensitive lead-gen',
    illustration: (
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path
          d="M50 30 C 35 30 28 42 32 56 C 35 64 36 70 40 74 L 40 78 L 60 78 L 60 74 C 64 70 65 64 68 56 C 72 42 65 30 50 30 Z"
          fill="none"
          stroke="#B38B6D"
          strokeWidth="3"
          strokeLinejoin="round"
        />
        <path
          d="M50 36 C 56 36 60 42 60 48 M50 36 C 44 36 40 42 40 48"
          fill="none"
          stroke="#8FBC8F"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <line x1="44" y1="78" x2="56" y2="78" stroke="#B38B6D" strokeWidth="3" />
      </svg>
    ),
  },
  {
    href: 'https://thenextgenhealth.com/industries/primary-care',
    label: 'Primary Care',
    meta: 'Annual visits & insurance match',
    illustration: (
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <circle cx="50" cy="40" r="14" fill="none" stroke="#576DB5" strokeWidth="3" />
        <path
          d="M28 80 C 28 64 38 58 50 58 C 62 58 72 64 72 80"
          fill="none"
          stroke="#576DB5"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <rect x="76" y="44" width="6" height="14" rx="1" fill="#8FBC8F" />
        <rect x="73" y="48" width="12" height="6" rx="1" fill="#8FBC8F" />
      </svg>
    ),
  },
  {
    href: 'https://thenextgenhealth.com/industries/chiropractic',
    label: 'Chiropractic',
    meta: 'Pain-point & injury leads',
    illustration: (
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M50 18 L 50 82" stroke="#B38B6D" strokeWidth="3" strokeLinecap="round" />
        <circle cx="50" cy="22" r="6" fill="#576DB5" />
        <ellipse cx="50" cy="34" rx="10" ry="4" fill="#8FBC8F" opacity=".7" />
        <ellipse cx="50" cy="46" rx="12" ry="4" fill="#8FBC8F" opacity=".7" />
        <ellipse cx="50" cy="58" rx="10" ry="4" fill="#8FBC8F" opacity=".7" />
        <ellipse cx="50" cy="70" rx="8" ry="4" fill="#8FBC8F" opacity=".7" />
        <ellipse cx="50" cy="80" rx="6" ry="3" fill="#576DB5" />
      </svg>
    ),
  },
  {
    href: 'https://thenextgenhealth.com/industries/plastic-surgery',
    label: 'Plastic Surgery',
    meta: 'High-ticket consult acquisition',
    illustration: (
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <polygon
          points="50,18 62,40 86,44 68,60 72,84 50,72 28,84 32,60 14,44 38,40"
          fill="none"
          stroke="#576DB5"
          strokeWidth="3"
          strokeLinejoin="round"
        />
        <circle cx="50" cy="50" r="6" fill="#B38B6D" />
      </svg>
    ),
  },
  {
    href: 'https://thenextgenhealth.com/industries/ophthalmology',
    label: 'Ophthalmology',
    meta: 'LASIK & specialty leads',
    illustration: (
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path
          d="M16 50 C 30 30 70 30 84 50 C 70 70 30 70 16 50 Z"
          fill="none"
          stroke="#576DB5"
          strokeWidth="3"
          strokeLinejoin="round"
        />
        <circle cx="50" cy="50" r="14" fill="none" stroke="#B38B6D" strokeWidth="3" />
        <circle cx="50" cy="50" r="6" fill="#8FBC8F" />
        <circle cx="46" cy="46" r="2" fill="#fff" />
      </svg>
    ),
  },
  {
    href: 'https://thenextgenhealth.com/industries/dermatology',
    label: 'Dermatology',
    meta: 'Cosmetic + medical hybrid',
    illustration: (
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <rect x="22" y="22" width="56" height="56" rx="10" fill="none" stroke="#B38B6D" strokeWidth="3" />
        <circle cx="38" cy="38" r="3" fill="#8FBC8F" />
        <circle cx="62" cy="42" r="2.5" fill="#576DB5" />
        <circle cx="44" cy="58" r="2.5" fill="#576DB5" />
        <circle cx="60" cy="62" r="3" fill="#8FBC8F" />
        <circle cx="50" cy="48" r="2" fill="#B38B6D" />
        <circle cx="36" cy="68" r="2" fill="#B38B6D" />
      </svg>
    ),
  },
];

const AllIndustries = () => {
  return (
    <section className="all-ind" id="all-industries" aria-labelledby="all-ind-title">
      <div className="container-shell">
        <div className="all-ind-head">
          <span className="all-ind-eyebrow">All Industries</span>
          <h2 id="all-ind-title" className="all-ind-h2">
            Explore All Industries We Serve.
          </h2>
          <p className="all-ind-sub">
            Deep-dive into our tailored marketing strategies for each healthcare
            specialty &mdash; from urgent care to plastic surgery.
          </p>
          <div className="all-ind-count">
            <span className="num">10 Specialties</span>
            <span className="bar" />
            <span>Tailored Playbooks</span>
          </div>
        </div>

        <div className="all-ind-list">
          {ROWS.map((row) => (
            <a
              key={row.label}
              href={row.href}
              target="_blank"
              rel="noopener noreferrer"
              className="all-ind-row"
            >
              <div className="all-ind-img">{row.illustration}</div>
              <div className="all-ind-body">
                <div className="all-ind-text">
                  <span className="label">{row.label}</span>
                  <span className="meta">{row.meta}</span>
                </div>
                <span className="read-more">
                  Read more
                  <ArrowIcon />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllIndustries;
