import { Link } from 'react-router-dom';

import heroImg from '../../assets/healthcareimg7.png';
import collabImg from '../../assets/healthcareimg4.png';
import photo01 from '../../assets/jay-1.webp';
import photo02 from '../../assets/shree-gauli.png';
import photo03 from '../../assets/bikash-neupane-P8v2nMWX.png';
import photo04 from '../../assets/sagar-dongol-G5GPLIyG.png';
import photo05 from '../../assets/bijesh-khadgi-DPyt6Qkz.png';
import photo06 from '../../assets/sumit-sharma-HnVUkwl7.png';

/* ============================================================
   GROWTH TEAM - Image-driven swiss layout.
   Hero with portrait, photo-led role grid, visual cadence,
   image CTA card.
   ============================================================ */

interface Role {
  num: string;
  title: string;
  pitch: string;
  ships: string[];
  owns: string[];
  hours: string;
  photo: string;
}

const ROLES: Role[] = [
  {
    num: '01',
    title: 'Dedicated Ads Manager',
    pitch: 'Owns every paid dollar across Google, Meta, and programmatic. Healthcare-fluent, HIPAA-aware, accountable for CAC.',
    ships: [
      'Weekly campaign builds, audiences, creative briefs',
      'Daily bid + budget management',
      'Conversion API + pipeline attribution',
    ],
    owns: ['CAC', 'ROAS', 'Booked visits'],
    hours: '30+ hrs / week',
    photo: photo01,
  },
  {
    num: '02',
    title: 'SEO & AEO Strategist',
    pitch: 'Senior strategist for organic search and answer-engine optimisation. Knows YMYL ranking nuance cold.',
    ships: [
      'Technical SEO + Core Web Vitals',
      'Local pack and service-area architecture',
      'Answer-engine content briefs',
    ],
    owns: ['Organic sessions', 'Local pack', 'AEO citations'],
    hours: '20+ hrs / week',
    photo: photo02,
  },
  {
    num: '03',
    title: 'Medical Content Writer',
    pitch: 'Trained healthcare writer - not a generalist with a thesaurus. Writes to patient intent and clinician credibility.',
    ships: [
      'Service-line landing copy + provider bios',
      'Pillar content + condition deep-dives',
      'Ad creative, email cadences, SMS scripts',
    ],
    owns: ['Engagement', 'Booking conversion', 'Topical authority'],
    hours: '20+ hrs / week',
    photo: photo03,
  },
  {
    num: '04',
    title: 'Social Media Manager',
    pitch: 'Builds the patient-facing voice across Instagram, TikTok, YouTube Shorts, and LinkedIn - calendar your front desk can sustain.',
    ships: [
      'Monthly content calendar, 4 platforms',
      'Shot lists for in-clinic capture days',
      'Community management with response SLAs',
    ],
    owns: ['Follower growth', 'Saves + shares', 'DM-to-booking'],
    hours: '15+ hrs / week',
    photo: photo04,
  },
  {
    num: '05',
    title: 'Web & Conversion Engineer',
    pitch: 'A developer who treats your site as the highest-leverage asset in the funnel. Speed, accessibility, instrumentation.',
    ships: [
      'Page-speed and a11y remediation',
      'Booking-funnel drop-off instrumentation',
      'A/B testing infrastructure',
    ],
    owns: ['Core Web Vitals', 'Booking completion', 'Site reliability'],
    hours: '10+ hrs / week',
    photo: photo05,
  },
  {
    num: '06',
    title: 'Account Director',
    pitch: 'Your single point of accountability. Runs weekly standups, monthly reviews, quarterly forecasts against panel goals.',
    ships: [
      'Weekly performance reports + forecasts',
      'Monthly strategy review',
      'Quarterly business reviews',
    ],
    owns: ['Total pipeline', 'Forecast accuracy', 'Retention'],
    hours: '10+ hrs / week',
    photo: photo06,
  },
];

const CADENCE: { day: string; event: string; note: string }[] = [
  { day: 'MON', event: 'Sprint planning + KPI review',  note: '60 min · cross-functional'  },
  { day: 'TUE', event: 'Ads + SEO standups',            note: '30 min · per discipline'    },
  { day: 'WED', event: 'Creative review + content QA',  note: 'Async + 45 min sync'        },
  { day: 'THU', event: 'Build day - no meetings',       note: 'Focused execution'          },
  { day: 'FRI', event: 'Weekly performance report',     note: 'Ships by 5pm local'         },
];

const ArrowRight = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

const GrowthTeam = () => {
  const SCHEMA = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'The Growth Team - Healthcare Marketing Department',
    serviceType: 'Embedded Marketing Team',
    audience: 'Multi-location healthcare practices, clinics, medspas',
  };

  return (
    <main className="gt-page gt-page-x">
      {/* ─── HERO ─── */}
      <section className="gtx-hero">
        <div className="gt-shell">
          <nav className="gtx-crumb" aria-label="Breadcrumb">
            <Link to="/about">About</Link>
            <span aria-hidden="true">/</span>
            <span>Infrastructure</span>
            <span aria-hidden="true">/</span>
            <span className="cur">Growth Team</span>
          </nav>

          <div className="gtx-hero-grid">
            <div className="gtx-hero-content">
              <span className="gtx-eyebrow">
                <span className="gtx-eyebrow-dot" aria-hidden="true" />
                The Growth Team
              </span>
              <h1 className="gtx-hero-title">
                A senior healthcare marketing department,
                <em> embedded into your clinic.</em>
              </h1>
              <p className="gtx-hero-lede">
                Not a freelancer. Not a generalist agency. Six dedicated
                specialists - each healthcare-fluent, each on-staff for the
                engagement - running your patient acquisition the way an
                in-house team would.
              </p>
              <div className="gtx-hero-ctas">
                <Link to="/contact" className="gtx-btn-primary">
                  Meet the team
                  <ArrowRight />
                </Link>
                <Link to="/our-work" className="gtx-btn-link">
                  See past work →
                </Link>
              </div>
            </div>
            <div className="gtx-hero-visual">
              <img src={heroImg} alt="" loading="eager" decoding="async" />
              <div className="gtx-hero-visual-tag" aria-hidden="true">
                <span className="gtx-hero-visual-tag-num">6</span>
                <span className="gtx-hero-visual-tag-lbl">Senior specialists, one team</span>
              </div>
            </div>
          </div>

          <ul className="gtx-hero-stats">
            <li>
              <strong>6</strong>
              <span>Senior specialists</span>
            </li>
            <li>
              <strong>105+</strong>
              <span>Weekly hours dedicated</span>
            </li>
            <li>
              <strong>3.1×</strong>
              <span>Median first-year ROAS</span>
            </li>
            <li>
              <strong>0</strong>
              <span>Handoffs to junior staff</span>
            </li>
          </ul>
        </div>
      </section>

      {/* ─── TEAM ─── */}
      <section className="gtx-team">
        <div className="gt-shell">
          <header className="gtx-sec-head">
            <span className="gtx-eyebrow">
              <span className="gtx-eyebrow-dot" aria-hidden="true" />
              The Specialists
            </span>
            <h2 className="gtx-sec-title">
              Six senior specialists. <em>One mission.</em>
            </h2>
            <p className="gtx-sec-sub">
              Healthcare-fluent operators with named accountability for
              the numbers that move your panel.
            </p>
          </header>

          <div className="gtx-team-grid">
            {ROLES.map((role) => (
              <article key={role.num} className="gtx-team-card">
                <div className="gtx-team-card-img">
                  <img src={role.photo} alt="" loading="lazy" decoding="async" />
                  <span className="gtx-team-card-num" aria-hidden="true">
                    /{role.num}
                  </span>
                  <span className="gtx-team-card-hours">{role.hours}</span>
                </div>
                <div className="gtx-team-card-body">
                  <h3 className="gtx-team-card-title">{role.title}</h3>
                  <p className="gtx-team-card-pitch">{role.pitch}</p>
                  <div className="gtx-team-card-tags">
                    {role.owns.map((o) => (
                      <span key={o} className="gtx-team-card-tag">{o}</span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CADENCE ─── */}
      <section className="gtx-cadence">
        <div className="gt-shell">
          <header className="gtx-sec-head">
            <span className="gtx-eyebrow">
              <span className="gtx-eyebrow-dot" aria-hidden="true" />
              Weekly Rhythm
            </span>
            <h2 className="gtx-sec-title">
              The cadence that <em>holds the work.</em>
            </h2>
            <p className="gtx-sec-sub">
              Predictable. Your team always knows what's shipping this week.
            </p>
          </header>

          <ol className="gtx-cad-strip">
            {CADENCE.map((c, i) => (
              <li
                key={c.day}
                className="gtx-cad-cell"
                style={{ '--cell-index': i } as React.CSSProperties}
              >
                <span className="gtx-cad-num" aria-hidden="true">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="gtx-cad-day">{c.day}</span>
                <h3 className="gtx-cad-event">{c.event}</h3>
                <p className="gtx-cad-note">{c.note}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="gtx-cta">
        <div className="gt-shell">
          <div className="gtx-cta-card">
            <div className="gtx-cta-card-img">
              <img src={collabImg} alt="" loading="lazy" decoding="async" />
              <div className="gtx-cta-card-img-tag" aria-hidden="true">
                <span className="dot" /> Open for new engagements
              </div>
            </div>
            <div className="gtx-cta-card-body">
              <span className="gtx-eyebrow">
                <span className="gtx-eyebrow-dot" aria-hidden="true" />
                Next Step
              </span>
              <h2 className="gtx-cta-h">
                Want to meet the team that would <em>run your account?</em>
              </h2>
              <p>
                A 30-minute call. We introduce the senior specialists who
                would be assigned to your practice - by name, by hours,
                by responsibility. No pitch deck.
              </p>
              <Link to="/contact" className="gtx-btn-primary">
                Schedule the introduction
                <ArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />
    </main>
  );
};

export default GrowthTeam;
