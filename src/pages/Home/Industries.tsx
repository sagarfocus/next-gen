import type { ReactElement } from 'react';

interface IndustryTag {
  slot: 't1' | 't2' | 't3' | 't4' | 't5' | 't6';
  name: string;
  icon: ReactElement;
}

const PlusIcon = () => (
  <svg width={12} height={12} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M10 3h4v7h7v4h-7v7h-4v-7H3v-4h7V3z" />
  </svg>
);

const ClockIcon = () => (
  <svg
    width={12}
    height={12}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2.4}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="9" />
    <polyline points="12 7 12 12 15 14" />
  </svg>
);

const StarIcon = () => (
  <svg
    width={12}
    height={12}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2.4}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <polygon points="12 2 15 8.5 22 9.3 17 14.1 18.2 21 12 17.8 5.8 21 7 14.1 2 9.3 9 8.5 12 2" />
  </svg>
);

const ToothIcon = () => (
  <svg
    width={12}
    height={12}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2.4}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M8 3c-3 0-5 2-5 5 0 6 4 13 5 13 1 0 2-3 4-3s3 3 4 3c1 0 5-7 5-13 0-3-2-5-5-5-2 0-3 1-4 1s-2-1-4-1z" />
  </svg>
);

const BrainIcon = () => (
  <svg
    width={12}
    height={12}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2.4}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M9 4a3 3 0 0 0-3 3v1a3 3 0 0 0-3 3v2a3 3 0 0 0 3 3v1a3 3 0 0 0 3 3" />
    <path d="M15 4a3 3 0 0 1 3 3v1a3 3 0 0 1 3 3v2a3 3 0 0 1-3 3v1a3 3 0 0 1-3 3" />
    <line x1="12" y1="4" x2="12" y2="20" />
  </svg>
);

const HeartIcon = () => (
  <svg
    width={12}
    height={12}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2.4}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
  </svg>
);

const TAGS: IndustryTag[] = [
  { slot: 't1', name: 'Emergency Room', icon: <PlusIcon /> },
  { slot: 't2', name: 'Urgent Care', icon: <ClockIcon /> },
  { slot: 't3', name: 'MedSpa', icon: <StarIcon /> },
  { slot: 't4', name: 'Dental', icon: <ToothIcon /> },
  { slot: 't5', name: 'Mental Health', icon: <BrainIcon /> },
  { slot: 't6', name: 'Pediatrics', icon: <HeartIcon /> },
];

const Industries = () => {
  return (
    <section
      className="industries-section"
      id="industries"
      aria-labelledby="ind-title"
    >
      <div className="container-shell">
        <span className="ind-eyebrow">Industries</span>

        <div className="ind-grid">
          {/* LEFT — visual with floating glass tags */}
          <div className="ind-visual" aria-hidden="true">
            <svg
              className="ind-bg"
              viewBox="0 0 600 700"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="indHubGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#7388C9" />
                  <stop offset="100%" stopColor="#576DB5" />
                </linearGradient>
              </defs>
              {/* concentric dashed orbits */}
              <circle cx="300" cy="350" r="260" fill="none" stroke="#B38B6D" strokeOpacity=".18" strokeWidth="1" strokeDasharray="2 8" />
              <circle cx="300" cy="350" r="190" fill="none" stroke="#B38B6D" strokeOpacity=".25" strokeWidth="1" strokeDasharray="2 8" />
              <circle cx="300" cy="350" r="120" fill="none" stroke="#B38B6D" strokeOpacity=".35" strokeWidth="1" strokeDasharray="3 6" />
              {/* subtle dot grid */}
              <g fill="#B38B6D" opacity=".25">
                <circle cx="120" cy="140" r="1.6" />
                <circle cx="180" cy="140" r="1.6" />
                <circle cx="420" cy="140" r="1.6" />
                <circle cx="480" cy="140" r="1.6" />
                <circle cx="120" cy="560" r="1.6" />
                <circle cx="180" cy="560" r="1.6" />
                <circle cx="420" cy="560" r="1.6" />
                <circle cx="480" cy="560" r="1.6" />
              </g>
              {/* center hub */}
              <g>
                <circle cx="300" cy="350" r="56" fill="#fff" stroke="#B38B6D" strokeWidth="1.4" />
                <circle cx="300" cy="350" r="44" fill="url(#indHubGrad)" />
                <rect x="294" y="332" width="12" height="36" rx="2" fill="#fff" />
                <rect x="282" y="344" width="36" height="12" rx="2" fill="#fff" />
                <circle cx="300" cy="350" r="68" fill="none" stroke="#576DB5" strokeOpacity=".25" strokeWidth="1" />
              </g>
              {/* sage halo */}
              <circle cx="300" cy="350" r="86" fill="none" stroke="#8FBC8F" strokeOpacity=".35" strokeWidth="1" strokeDasharray="4 6" />
              {/* plus marks */}
              <g fill="#B38B6D" opacity=".55">
                <path d="M70 340 h8 v3 h-8 z M73 337 h2 v9 h-2 z" />
                <path d="M520 340 h10 v3 h-10 z M524 336 h2 v11 h-2 z" />
                <path d="M295 100 h10 v3 h-10 z M299 96 h2 v11 h-2 z" />
                <path d="M295 600 h10 v3 h-10 z M299 596 h2 v11 h-2 z" />
              </g>
              {/* baseline ground */}
              <line x1="80" y1="640" x2="520" y2="640" stroke="#B38B6D" strokeOpacity=".30" strokeWidth="1" />
              <circle cx="80" cy="640" r="2.5" fill="#B38B6D" />
              <circle cx="520" cy="640" r="2.5" fill="#B38B6D" />
              <text x="36" y="36" fontFamily="Plus Jakarta Sans, sans-serif" fontSize="9" fill="#718096" letterSpacing="2">FIG. 02</text>
            </svg>

            {TAGS.map(({ slot, name, icon }) => (
              <span key={slot} className={`ind-tag ${slot}`}>
                <span className="tag-ico">{icon}</span>
                {name}
              </span>
            ))}
          </div>

          {/* RIGHT — dark panel */}
          <div className="ind-panel">
            <h2 id="ind-title" className="ind-h2">
              Industries We Serve
            </h2>
            <p className="ind-lead">
              Specialized marketing for every type of healthcare facility
              &mdash; because an ER and a MedSpa require fundamentally
              different growth strategies.
            </p>

            <div className="ind-stats">
              <div className="ind-stat">
                <span className="ind-stat-label">campaigns launched</span>
                <span className="ind-stat-num">500+</span>
              </div>
              <div className="ind-stat">
                <span className="ind-stat-label">ad spend managed</span>
                <span className="ind-stat-num">$10M+</span>
              </div>
              <div className="ind-stat">
                <span className="ind-stat-label">average ROI</span>
                <span className="ind-stat-num">3&times;</span>
              </div>
            </div>

            <div className="ind-body">
              <p>
                Our team has deep operational experience across the full
                spectrum of healthcare facilities. We serve{' '}
                <a href="https://thenextgenhealth.com/industries/freestanding-emergency-rooms">
                  Freestanding Emergency Rooms
                </a>{' '}
                that require high-acuity, 24/7 patient acquisition campaigns.
                We help{' '}
                <a href="https://thenextgenhealth.com/industries/urgent-care-centers">
                  Urgent Care Centers
                </a>{' '}
                compete with large health systems for walk-in volume. We grow{' '}
                <a href="https://thenextgenhealth.com/industries/medspas-aesthetics">
                  MedSpas &amp; Aesthetics Clinics
                </a>{' '}
                through social media and targeted Meta campaigns. We support{' '}
                <a href="https://thenextgenhealth.com/industries/dental-practices">
                  Dental Practices
                </a>
                ,{' '}
                <a href="https://thenextgenhealth.com/industries/chiropractic-clinics">
                  Chiropractic Clinics
                </a>
                ,{' '}
                <a href="https://thenextgenhealth.com/industries/mental-health-practices">
                  Mental Health Practices
                </a>
                ,{' '}
                <a href="https://thenextgenhealth.com/industries/primary-care-clinics">
                  Primary Care
                </a>
                , and{' '}
                <a href="https://thenextgenhealth.com/industries/pediatric-clinics">
                  Pediatric Clinics
                </a>{' '}
                with locally-optimized growth strategies tailored to their
                unique patient demographics and service areas.
              </p>
              <p className="foot">
                Each vertical has different patient acquisition costs,
                competitive dynamics, and compliance requirements. Our
                industry-specific playbooks ensure you are never paying for a
                generic strategy designed for a different type of practice
                &mdash; whether you need to fill same-day appointment slots or
                build a 6-month elective procedure pipeline, our Clinic Growth
                OS adapts to your clinical reality.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Industries;
