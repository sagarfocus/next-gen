import { Link } from 'react-router-dom';

import clinicsImg from '../../assets/builtforclinic.png';
import medspaImg from '../../assets/medddsspa.png';
import emergencyImg from '../../assets/freestandingemergency.png';

interface ServeCard {
  ariaId: string;
  image: string;
  tag: string;
  title: string;
  desc: string;
  points: string[];
  accent: string;
  to: string;
  stat: string;
  cta: string;
}

const CARDS: ServeCard[] = [
  {
    ariaId: 'serve-1',
    image: clinicsImg,
    tag: 'Clinical',
    title: 'Clinics & Multi-Specialty Practices',
    desc: 'Search, paid, and patient-acquisition systems engineered for single offices and multi-location networks alike.',
    points: ['Family Practice', 'Cardiology', 'Dental', 'Pediatrics'],
    accent: '#7AA1E8',
    to: '/industries/clinics',
    stat: '200+ clinics served',
    cta: 'Explore clinics',
  },
  {
    ariaId: 'serve-2',
    image: medspaImg,
    tag: 'Aesthetic',
    title: 'MedSpas & Wellness Brands',
    desc: 'High-volume social, Meta campaigns, and conversion-engineered sites tuned for elective and aesthetic services.',
    points: ['MedSpa', 'Aesthetics', 'IV Therapy', 'Wellness'],
    accent: '#E6B98C',
    to: '/industries/medspas',
    stat: '40+ medspas activated',
    cta: 'Explore medspas',
  },
  {
    ariaId: 'serve-3',
    image: emergencyImg,
    tag: 'Acuity',
    title: 'Specialty & Emergency Care',
    desc: 'Compliance-aware, urgency-first patient acquisition for ERs, urgent care, and specialty practices.',
    points: ['Emergency', 'Urgent Care', 'Orthopedics', 'Oncology'],
    accent: '#A8D5A8',
    to: '/industries/specialty-emergency',
    stat: '12+ ER & specialty networks',
    cta: 'Explore specialty',
  },
];

const CardArrow = () => (
  <span className="serve-arrow" aria-hidden="true">
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
          {CARDS.map(({ ariaId, image, tag, title, desc, points, accent, to, stat, cta }) => (
            <Link
              key={ariaId}
              to={to}
              className="serve-card"
              aria-labelledby={ariaId}
              style={{ ['--serve-accent' as string]: accent }}
            >
              <div className="serve-img" aria-hidden="true">
                <img src={image} alt="" loading="lazy" decoding="async" />
              </div>
              <div className="serve-overlay" aria-hidden="true" />

              <div className="serve-card-top">
                <span className="serve-tag">{tag}</span>
                <CardArrow />
              </div>

              <div className="serve-card-foot">
                <h3 id={ariaId} className="serve-title">
                  {title}
                </h3>
                <p className="serve-desc">{desc}</p>
                <ul className="serve-points">
                  {points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>

                <div className="serve-reveal" aria-hidden="true">
                  <span className="serve-reveal-divider" />
                  <div className="serve-reveal-row">
                    <span className="serve-reveal-stat">{stat}</span>
                    <span className="serve-reveal-cta">
                      {cta}
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
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <polyline points="13 6 19 12 13 18" />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoWeServe;
