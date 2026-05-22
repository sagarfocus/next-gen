import type { ReactElement } from 'react';
import { Parallax } from '@/lib/motion';

interface IndustryTag {
  slot: 't1' | 't2' | 't3' | 't4' | 't5' | 't6';
  name: string;
  icon: ReactElement;
}

const PlusIcon = () => (
  <svg width={14} height={14} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M10 3h4v7h7v4h-7v7h-4v-7H3v-4h7V3z" />
  </svg>
);

const ClockIcon = () => (
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
    <circle cx="12" cy="12" r="9" />
    <polyline points="12 7 12 12 15 14" />
  </svg>
);

const SparkleIcon = () => (
  <svg width={14} height={14} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 2.2 13.7 9.2 20.8 11 13.7 12.8 12 19.8 10.3 12.8 3.2 11 10.3 9.2 12 2.2Z" />
    <path
      d="M19 3.6 19.8 5.9 22.1 6.6 19.8 7.4 19 9.7 18.2 7.4 15.9 6.6 18.2 5.9 19 3.6Z"
      opacity=".75"
    />
  </svg>
);

const ToothIcon = () => (
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
    <path d="M8 3.2c-2.6 0-4.3 1.7-4.3 4.4 0 1.9.5 3.3 1 4.9.4 1.4.6 3 .9 4.6.3 1.6.9 3.8 1.7 3.8.7 0 1.1-1.4 1.4-3 .3-1.8.8-2.9 1.8-2.9h2.6c1 0 1.5 1.1 1.8 2.9.3 1.6.7 3 1.4 3 .8 0 1.4-2.2 1.7-3.8.3-1.6.5-3.2.9-4.6.5-1.6 1-3 1-4.9 0-2.7-1.7-4.4-4.3-4.4-1.6 0-2.8 1.1-4 1.1-1.2 0-2.4-1.1-4-1.1z" />
  </svg>
);

const BrainIcon = () => (
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
    <path d="M9.5 3.5a2.8 2.8 0 0 0-2.8 2.8v.4A2.8 2.8 0 0 0 4 9.5v1.3a2.8 2.8 0 0 0 0 4.4v1.3a2.8 2.8 0 0 0 2.7 2.8 2.8 2.8 0 0 0 2.8 2.7" />
    <path d="M14.5 3.5a2.8 2.8 0 0 1 2.8 2.8v.4A2.8 2.8 0 0 1 20 9.5v1.3a2.8 2.8 0 0 1 0 4.4v1.3a2.8 2.8 0 0 1-2.7 2.8 2.8 2.8 0 0 1-2.8 2.7" />
    <line x1="12" y1="3.5" x2="12" y2="20.5" />
    <path d="M8 10h2M14 10h2M8 14h2M14 14h2" />
  </svg>
);

const BabyFaceIcon = () => (
  <svg
    width={14}
    height={14}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <circle cx="6.5" cy="6.5" r="2.5" />
    <circle cx="17.5" cy="6.5" r="2.5" />
    <circle cx="12" cy="14" r="7.5" />
    <circle cx="9.5" cy="13" r="1.1" fill="currentColor" stroke="none" />
    <circle cx="14.5" cy="13" r="1.1" fill="currentColor" stroke="none" />
    <path d="M9.6 16.6c.7.7 1.6 1 2.4 1s1.7-.3 2.4-1" />
  </svg>
);

const SpineIcon = () => (
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
    <path d="M12 2v20" />
    <path d="M8 5h8" />
    <path d="M7 9h10" />
    <path d="M8 13h8" />
    <path d="M7 17h10" />
    <path d="M9 21h6" />
  </svg>
);

const StethoscopeIcon = () => (
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
    <path d="M6 3v6a4 4 0 0 0 8 0V3" />
    <path d="M10 13v3a4 4 0 0 0 8 0v-2" />
    <circle cx="18" cy="11" r="2" />
  </svg>
);

interface Specialty {
  name: string;
  meta: string;
  tone: 'sage' | 'periwinkle' | 'clay';
  icon: ReactElement;
}

const SPECIALTIES: Specialty[] = [
  {
    name: 'Emergency Rooms',
    meta: '24/7 high-acuity acquisition',
    tone: 'sage',
    icon: <PlusIcon />,
  },
  {
    name: 'Urgent Care',
    meta: 'Walk-in volume vs. health systems',
    tone: 'periwinkle',
    icon: <ClockIcon />,
  },
  {
    name: 'MedSpas & Aesthetics',
    meta: 'Social + targeted Meta campaigns',
    tone: 'clay',
    icon: <SparkleIcon />,
  },
  { name: 'Dental Practices', meta: 'Locally-optimized growth', tone: 'sage', icon: <ToothIcon /> },
  {
    name: 'Chiropractic',
    meta: 'Recurring local patient flow',
    tone: 'periwinkle',
    icon: <SpineIcon />,
  },
  {
    name: 'Mental Health',
    meta: 'Discreet, demographic-driven',
    tone: 'clay',
    icon: <BrainIcon />,
  },
  {
    name: 'Primary Care',
    meta: 'Service-area patient demand',
    tone: 'sage',
    icon: <StethoscopeIcon />,
  },
  {
    name: 'Pediatrics',
    meta: 'Family-tailored growth strategy',
    tone: 'periwinkle',
    icon: <BabyFaceIcon />,
  },
];

const PILLARS = ['Patient Acquisition Costs', 'Competitive Dynamics', 'Compliance Requirements'];

const TAGS: IndustryTag[] = [
  { slot: 't1', name: 'Emergency Room', icon: <PlusIcon /> },
  { slot: 't2', name: 'Urgent Care', icon: <ClockIcon /> },
  { slot: 't3', name: 'MedSpa', icon: <SparkleIcon /> },
  { slot: 't4', name: 'Dental', icon: <ToothIcon /> },
  { slot: 't5', name: 'Mental Health', icon: <BrainIcon /> },
  { slot: 't6', name: 'Pediatrics', icon: <BabyFaceIcon /> },
];

const Industries = () => {
  return (
    <section className="industries-section" id="industries" aria-labelledby="ind-title">
      <div className="container-shell">
        <span className="ind-eyebrow">Industries</span>

        <div className="ind-grid">
          {/* LEFT - visual with floating glass tags. Subtle Parallax wraps the
              whole visual column so the figure drifts as the section enters
              view; floating .ind-tag items keep their own roam animations. */}
          <Parallax as="div" speed={0.05} className="ind-visual" aria-hidden="true">
            <svg className="ind-bg" viewBox="0 0 600 700" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="indHubGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#7388C9" />
                  <stop offset="100%" stopColor="#576DB5" />
                </linearGradient>
              </defs>
              {/* concentric dashed orbits */}
              <circle
                cx="300"
                cy="350"
                r="260"
                fill="none"
                stroke="#B38B6D"
                strokeOpacity=".18"
                strokeWidth="1"
                strokeDasharray="2 8"
              />
              <circle
                cx="300"
                cy="350"
                r="190"
                fill="none"
                stroke="#B38B6D"
                strokeOpacity=".25"
                strokeWidth="1"
                strokeDasharray="2 8"
              />
              <circle
                cx="300"
                cy="350"
                r="120"
                fill="none"
                stroke="#B38B6D"
                strokeOpacity=".35"
                strokeWidth="1"
                strokeDasharray="3 6"
              />
              {/* hub-to-edge spokes pointing toward each specialty */}
              <g
                stroke="#B38B6D"
                strokeWidth="1"
                strokeDasharray="4 5"
                opacity=".42"
                strokeLinecap="round"
              >
                <line x1="260.1" y1="295.7" x2="146.5" y2="146.3" />
                <line x1="346.4" y1="300.3" x2="473.9" y2="163.5" />
                <line x1="232.8" y1="339.4" x2="48.1" y2="310.1" />
                <line x1="367.9" y1="353.6" x2="554.6" y2="363.3" />
                <line x1="260.0" y1="405.0" x2="150.1" y2="556.3" />
                <line x1="336.0" y1="407.7" x2="435.1" y2="566.2" />
              </g>
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
              {/* soft aura behind hub */}
              <circle cx="300" cy="350" r="108" fill="#7388C9" opacity=".09" />
              <circle cx="300" cy="350" r="80" fill="#8FBC8F" opacity=".07" />
              {/* radial pulse rings emanating from hub */}
              <g fill="none" stroke="#576DB5" strokeWidth="1.4">
                <circle cx="300" cy="350" r="68">
                  <animate
                    attributeName="r"
                    values="68;240;240"
                    dur="5s"
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="stroke-opacity"
                    values=".5;0;0"
                    dur="5s"
                    repeatCount="indefinite"
                  />
                </circle>
                <circle cx="300" cy="350" r="68">
                  <animate
                    attributeName="r"
                    values="68;240;240"
                    dur="5s"
                    begin="1.67s"
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="stroke-opacity"
                    values=".5;0;0"
                    dur="5s"
                    begin="1.67s"
                    repeatCount="indefinite"
                  />
                </circle>
                <circle cx="300" cy="350" r="68">
                  <animate
                    attributeName="r"
                    values="68;240;240"
                    dur="5s"
                    begin="3.34s"
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="stroke-opacity"
                    values=".5;0;0"
                    dur="5s"
                    begin="3.34s"
                    repeatCount="indefinite"
                  />
                </circle>
              </g>
              {/* data nodes at spoke/inner-orbit intersections */}
              <g>
                <circle
                  cx="227.8"
                  cy="254.2"
                  r="4"
                  fill="#fff"
                  stroke="#576DB5"
                  strokeWidth="1.4"
                />
                <circle
                  cx="381.8"
                  cy="262.2"
                  r="4"
                  fill="#fff"
                  stroke="#576DB5"
                  strokeWidth="1.4"
                />
                <circle
                  cx="181.5"
                  cy="331.2"
                  r="4"
                  fill="#fff"
                  stroke="#576DB5"
                  strokeWidth="1.4"
                />
                <circle
                  cx="419.8"
                  cy="356.3"
                  r="4"
                  fill="#fff"
                  stroke="#576DB5"
                  strokeWidth="1.4"
                />
                <circle
                  cx="229.5"
                  cy="447.1"
                  r="4"
                  fill="#fff"
                  stroke="#576DB5"
                  strokeWidth="1.4"
                />
                <circle
                  cx="363.6"
                  cy="451.8"
                  r="4"
                  fill="#fff"
                  stroke="#576DB5"
                  strokeWidth="1.4"
                />
                <circle cx="227.8" cy="254.2" r="1.6" fill="#576DB5" />
                <circle cx="381.8" cy="262.2" r="1.6" fill="#576DB5" />
                <circle cx="181.5" cy="331.2" r="1.6" fill="#576DB5" />
                <circle cx="419.8" cy="356.3" r="1.6" fill="#576DB5" />
                <circle cx="229.5" cy="447.1" r="1.6" fill="#576DB5" />
                <circle cx="363.6" cy="451.8" r="1.6" fill="#576DB5" />
              </g>
              {/* center hub */}
              <g>
                <circle cx="300" cy="350" r="56" fill="#fff" stroke="#B38B6D" strokeWidth="1.4" />
                <circle cx="300" cy="350" r="44" fill="url(#indHubGrad)" />
                <rect x="294" y="332" width="12" height="36" rx="2" fill="#fff" />
                <rect x="282" y="344" width="36" height="12" rx="2" fill="#fff" />
                <circle
                  cx="300"
                  cy="350"
                  r="68"
                  fill="none"
                  stroke="#576DB5"
                  strokeOpacity=".25"
                  strokeWidth="1"
                />
              </g>
              {/* sage halo */}
              <circle
                cx="300"
                cy="350"
                r="86"
                fill="none"
                stroke="#8FBC8F"
                strokeOpacity=".35"
                strokeWidth="1"
                strokeDasharray="4 6"
              />
              {/* plus marks */}
              <g fill="#B38B6D" opacity=".55">
                <path d="M70 340 h8 v3 h-8 z M73 337 h2 v9 h-2 z" />
                <path d="M520 340 h10 v3 h-10 z M524 336 h2 v11 h-2 z" />
                <path d="M295 100 h10 v3 h-10 z M299 96 h2 v11 h-2 z" />
                <path d="M295 600 h10 v3 h-10 z M299 596 h2 v11 h-2 z" />
              </g>
              {/* baseline ground */}
              <line
                x1="80"
                y1="640"
                x2="520"
                y2="640"
                stroke="#B38B6D"
                strokeOpacity=".30"
                strokeWidth="1"
              />
              <circle cx="80" cy="640" r="2.5" fill="#B38B6D" />
              <circle cx="520" cy="640" r="2.5" fill="#B38B6D" />
              <text
                x="36"
                y="36"
                fontFamily="Plus Jakarta Sans, sans-serif"
                fontSize="9"
                fill="#718096"
                letterSpacing="2"
              >
                FIG. 02
              </text>
            </svg>

            {TAGS.map(({ slot, name, icon }) => (
              <span key={slot} className={`ind-tag ${slot}`}>
                <span className="tag-ico">{icon}</span>
                {name}
              </span>
            ))}
          </Parallax>

          {/* RIGHT - dark panel */}
          <div className="ind-panel">
            <h2 id="ind-title" className="ind-h2">
              Industries We Serve
            </h2>
            <p className="ind-lead">
              Specialized marketing for every type of healthcare facility - because an ER and a
              MedSpa require fundamentally different growth strategies.
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
              <ul className="ind-specs" role="list">
                {SPECIALTIES.map((s) => (
                  <li key={s.name} className={`ind-spec tone-${s.tone}`}>
                    <span className="ind-spec-ico" aria-hidden="true">
                      {s.icon}
                    </span>
                    <span className="ind-spec-name">{s.name}</span>
                    <span className="ind-spec-meta">{s.meta}</span>
                  </li>
                ))}
              </ul>

              <div className="ind-pillars" aria-label="Every vertical varies on">
                <span className="ind-pillars-label">Every vertical varies on</span>
                <span className="ind-pillars-rule" aria-hidden="true" />
                <div className="ind-pillars-chips">
                  {PILLARS.map((p) => (
                    <span key={p} className="ind-pillar">
                      {p}
                    </span>
                  ))}
                </div>
              </div>

              <div className="ind-strap">
                <span className="ind-strap-dot" aria-hidden="true" />
                <span className="ind-strap-text">
                  <strong>Clinic Growth OS</strong> adapts to every clinical reality - from same-day
                  appointment slots to 6-month elective procedure pipelines. Industry-specific
                  playbooks, not a generic strategy.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Industries;
