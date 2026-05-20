import { Link } from 'react-router-dom';

import heroImg from '../../assets/healthcareimg6.png';
import ctaImg from '../../assets/healthcareimg3.png';
import storyBannerImg from '../../assets/ouradvanbtage.png';
import story1 from '../../assets/healthcareimg1.png';
import story2 from '../../assets/jay-1.webp';
import story3 from '../../assets/healthcareimg2.png';
import story4 from '../../assets/shree-gauli.png';
import story5 from '../../assets/healthcareimg4.png';
import story6 from '../../assets/bikash-neupane-P8v2nMWX.png';

/* ============================================================
   HIPAA COMPLIANCE - Image-driven swiss redesign.
   Hero with security image, 3 safeguard pillars, in-scope/out-of-scope
   coverage cards, 4-step compliance loop, image CTA card.
   ============================================================ */

interface Pillar {
  num: string;
  tag: string;
  description: string;
  items: string[];
  tone: 'sage' | 'tan' | 'periwinkle';
  icon: React.ReactNode;
}

const PILLARS: Pillar[] = [
  {
    num: '01',
    tag: 'Administrative',
    description: 'Policies, people, and process - the human layer that keeps the technical work honest.',
    items: [
      'Workforce training (annual + on hire)',
      'Access controls and provisioning',
      'Documented policies, versioned',
      'Incident response plan',
    ],
    tone: 'sage',
    icon: (
      <svg width={22} height={22} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="9" cy="8" r="3" />
        <path d="M3 21a6 6 0 0 1 12 0" />
        <circle cx="17" cy="9" r="2.5" />
        <path d="M14 21a4 4 0 0 1 8 0" />
      </svg>
    ),
  },
  {
    num: '02',
    tag: 'Physical',
    description: 'Where data lives, who walks past it, and how it gets disposed of when its job is done.',
    items: [
      'BAA-covered data centres',
      'Hardware disposal log',
      'Workstation policy',
      'Visitor and tenant controls',
    ],
    tone: 'tan',
    icon: (
      <svg width={22} height={22} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="11" width="18" height="10" rx="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
  },
  {
    num: '03',
    tag: 'Technical',
    description: 'The cryptography, access controls, and logging that protect every signal that moves.',
    items: [
      'End-to-end encryption (TLS 1.3 / AES-256)',
      'MFA enforced across all tools',
      'Audit and access logging',
      'Automatic session timeout',
    ],
    tone: 'periwinkle',
    icon: (
      <svg width={22} height={22} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 2 L 4 6 V 12 C 4 16.5 7.5 20.7 12 22 C 16.5 20.7 20 16.5 20 12 V 6 Z" />
        <path d="M9 12 L 11 14 L 15 10" />
      </svg>
    ),
  },
];

interface CoverageRow {
  area: string;
  inScope: string;
  outScope: string;
  icon: React.ReactNode;
}

const COVERAGE: CoverageRow[] = [
  {
    area: 'Website',
    inScope: 'HIPAA-aware forms, BAA-covered hosting, secure file transfer.',
    outScope: 'Treating the website as a long-term PHI store.',
    icon: (
      <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="4" width="18" height="14" rx="2" />
        <path d="M8 21h8M12 18v3" />
      </svg>
    ),
  },
  {
    area: 'Ad Platforms',
    inScope: 'Server-side conversions with hashed, salted identifiers.',
    outScope: 'Sharing PHI in custom audiences or CRM imports.',
    icon: (
      <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M3 11v8a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-8" />
        <path d="M16 6l-4-4-4 4" />
        <path d="M12 2v14" />
      </svg>
    ),
  },
  {
    area: 'Email & SMS',
    inScope: 'BAA-covered providers, opt-in receipts, encrypted at rest.',
    outScope: 'Treatment-specific content without explicit consent.',
    icon: (
      <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="M3 7l9 6 9-6" />
      </svg>
    ),
  },
  {
    area: 'Analytics',
    inScope: 'IP truncation, PHI-free URLs, consent-aware tag firing.',
    outScope: 'Page-level event tracking on clinical content.',
    icon: (
      <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <line x1="6" y1="20" x2="6" y2="14" />
        <line x1="12" y1="20" x2="12" y2="8" />
        <line x1="18" y1="20" x2="18" y2="11" />
      </svg>
    ),
  },
  {
    area: 'Reviews & Social',
    inScope: 'Sentiment-routed response flows that never solicit PHI.',
    outScope: 'Responding to a public review with patient detail.',
    icon: (
      <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 2 L 14 8 L 20 8.5 L 15.5 12.5 L 17 19 L 12 15.5 L 7 19 L 8.5 12.5 L 4 8.5 L 10 8 Z" />
      </svg>
    ),
  },
];

interface LoopStep {
  num: string;
  label: string;
  title: string;
  body: string;
}

const STEPS: LoopStep[] = [
  {
    num: '01',
    label: 'Scope',
    title: 'Map the surface.',
    body: 'Every system that touches a patient inquiry, charted into a plain-language data flow diagram shared with your team.',
  },
  {
    num: '02',
    label: 'Replace',
    title: 'Migrate non-compliant tools.',
    body: 'Hosting, email, forms, file transfer, analytics - swapped to BAA-covered alternatives without disrupting operations.',
  },
  {
    num: '03',
    label: 'Train',
    title: 'Roll out to staff.',
    body: 'Workforce training across clinical and ops staff. Quarterly refreshers. Sign-offs retained for the auditor.',
  },
  {
    num: '04',
    label: 'Verify',
    title: 'Annual external review.',
    body: 'Penetration test, policy audit, and a remediation register that closes every finding inside 60 days.',
  },
];

const ArrowRight = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

const Check = () => (
  <svg width={12} height={12} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const X = () => (
  <svg width={12} height={12} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

const HipaaCompliance = () => {
  const SCHEMA = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'HIPAA-Compliant Healthcare Marketing',
    serviceType: 'HIPAA + HITECH Compliance for Marketing Operations',
    audience: 'Healthcare practices, clinics, networks',
  };

  return (
    <main className="gt-page gt-page-x hcp-page">
      {/* ─── HERO ─── */}
      <section className="gtx-hero">
        <div className="gt-shell">
          <nav className="gtx-crumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span aria-hidden="true">/</span>
            <Link to="/services">Services</Link>
            <span aria-hidden="true">/</span>
            <span className="cur">HIPAA Compliance</span>
          </nav>

          <div className="gtx-hero-grid">
            <div className="gtx-hero-content">
              <span className="gtx-eyebrow">
                <span className="gtx-eyebrow-dot" aria-hidden="true" />
                HIPAA + HITECH · 2026
              </span>
              <h1 className="gtx-hero-title">
                Marketing,
                <em> under HIPAA.</em>
              </h1>
              <p className="gtx-hero-lede">
                HIPAA is not a checkbox. It is a working discipline that
                touches every system a patient inquiry passes through.
                Here is how we organise it - from forms and hosting to
                ad platforms and analytics.
              </p>
              <div className="gtx-hero-ctas">
                <Link to="/contact" className="gtx-btn-primary">
                  Request a posture review
                  <ArrowRight />
                </Link>
                <Link to="/services" className="gtx-btn-link">
                  View all services →
                </Link>
              </div>
            </div>
            <div className="gtx-hero-visual">
              <img src={heroImg} alt="" loading="eager" decoding="async" />
              <div className="gtx-hero-visual-tag" aria-hidden="true">
                <span className="gtx-hero-visual-tag-num">100%</span>
                <span className="gtx-hero-visual-tag-lbl">BAA-covered toolchain</span>
              </div>
            </div>
          </div>

          <ul className="hcp-credentials">
            <li className="hcp-cred tone-sage">
              <div className="hcp-cred-head">
                <span className="hcp-cred-icon" aria-hidden="true">
                  <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2 L 4 6 V 12 C 4 16.5 7.5 20.7 12 22 C 16.5 20.7 20 16.5 20 12 V 6 Z" />
                    <path d="M9 12 L 11 14 L 15 10" />
                  </svg>
                </span>
                <span className="hcp-cred-num">/01</span>
              </div>
              <div className="hcp-cred-body">
                <span className="hcp-cred-label">Framework</span>
                <strong className="hcp-cred-value">HIPAA + HITECH</strong>
              </div>
              <span className="hcp-cred-seal" aria-hidden="true">CERTIFIED</span>
            </li>

            <li className="hcp-cred tone-periwinkle">
              <div className="hcp-cred-head">
                <span className="hcp-cred-icon" aria-hidden="true">
                  <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 12a9 9 0 1 0 3-6.7" />
                    <path d="M3 4v5h5" />
                  </svg>
                </span>
                <span className="hcp-cred-num">/02</span>
              </div>
              <div className="hcp-cred-body">
                <span className="hcp-cred-label">Review cadence</span>
                <strong className="hcp-cred-value">Annually</strong>
              </div>
              <span className="hcp-cred-seal" aria-hidden="true">EXTERNAL</span>
            </li>

            <li className="hcp-cred tone-tan">
              <div className="hcp-cred-head">
                <span className="hcp-cred-icon" aria-hidden="true">
                  <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" />
                    <path d="M14 3v5h5" />
                    <path d="M9 13l2 2 4-4" />
                  </svg>
                </span>
                <span className="hcp-cred-num">/03</span>
              </div>
              <div className="hcp-cred-body">
                <span className="hcp-cred-label">Hosting + every vendor</span>
                <strong className="hcp-cred-value">BAA-covered</strong>
              </div>
              <span className="hcp-cred-seal" aria-hidden="true">SIGNED</span>
            </li>

            <li className="hcp-cred tone-ink">
              <div className="hcp-cred-head">
                <span className="hcp-cred-icon" aria-hidden="true">
                  <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="5" width="18" height="16" rx="2" />
                    <path d="M3 10h18M8 3v4M16 3v4" />
                  </svg>
                </span>
                <span className="hcp-cred-num">/04</span>
              </div>
              <div className="hcp-cred-body">
                <span className="hcp-cred-label">Last independent audit</span>
                <strong className="hcp-cred-value">Mar 2026</strong>
              </div>
              <span className="hcp-cred-seal" aria-hidden="true">VERIFIED</span>
            </li>
          </ul>
        </div>
      </section>

      {/* ─── OUR STORY (editorial banner + collage + offer block) ─── */}
      <section className="hcp-story">
        <div className="hcp-story-banner">
          <img src={storyBannerImg} alt="" loading="lazy" decoding="async" />
          <div className="hcp-story-banner-overlay" aria-hidden="true">
            <span className="hcp-story-banner-eyebrow">Our Story</span>
            <h2 className="hcp-story-banner-title">Built around clinics. <em>Audited like a hospital.</em></h2>
          </div>
        </div>

        <div className="gt-shell">
          {/* Intro paragraph + collage */}
          <div className="hcp-story-grid">
            <div className="hcp-story-intro">
              <span className="gtx-eyebrow">
                <span className="gtx-eyebrow-dot" aria-hidden="true" />
                Who We Are
              </span>
              <p className="hcp-story-lede">
                At Focus, we are passionate about marketing systems that
                respect patient privacy and protect practices from regulatory
                risk - engineered for trust, accessibility, and compliance
                from day one.
              </p>
              <p className="hcp-story-sub">
                Built and audited by a senior team that has spent the last
                decade inside healthcare. Every protocol on this page is the
                same one we hand to your legal counsel before signing.
              </p>
            </div>

            <div className="hcp-story-collage" aria-hidden="true">
              <div className="hcp-story-tile tile-1"><img src={story1} alt="" loading="lazy" decoding="async" /></div>
              <div className="hcp-story-tile tile-2"><img src={story2} alt="" loading="lazy" decoding="async" /></div>
              <div className="hcp-story-tile tile-3"><img src={story3} alt="" loading="lazy" decoding="async" /></div>
              <div className="hcp-story-tile tile-4"><img src={story4} alt="" loading="lazy" decoding="async" /></div>
              <div className="hcp-story-tile tile-5"><img src={story5} alt="" loading="lazy" decoding="async" /></div>
              <div className="hcp-story-tile tile-6"><img src={story6} alt="" loading="lazy" decoding="async" /></div>
            </div>
          </div>

          {/* What We Offer block */}
          <div className="hcp-story-offer">
            <div className="hcp-story-offer-left">
              <span className="hcp-story-offer-eyebrow">The Calling</span>
              <h3 className="hcp-story-offer-title">
                What We <em>Offer</em>
              </h3>
            </div>
            <div className="hcp-story-offer-right">
              <p className="hcp-story-offer-lede">
                We specialise in transforming visions into reality. Explore
                our portfolio of HIPAA-aware growth systems for clinics,
                medspas, and wellness practices - crafted with precision
                and audited every quarter.
              </p>
              <p className="hcp-story-offer-body">
                Every campaign, form, and analytics call is engineered to
                maintain the security of your patient data while still
                moving the numbers that matter. Assurance that personal
                information is collected and used only with the patient's
                explicit consent - and that the practice never has to
                second-guess whether a marketing decision will hold up
                under regulator review.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 3 SAFEGUARD PILLARS ─── */}
      <section className="hcp-pillars">
        <div className="gt-shell">
          <header className="gtx-sec-head">
            <span className="gtx-eyebrow">
              <span className="gtx-eyebrow-dot" aria-hidden="true" />
              The Safeguard Pillars
            </span>
            <h2 className="gtx-sec-title">
              Three categories. <em>One commitment.</em>
            </h2>
            <p className="gtx-sec-sub">
              The HIPAA Security Rule organises the work into three
              categories of safeguards. Each has its own deliverables,
              owners, and review cycle.
            </p>
          </header>

          <div className="hcp-pillar-grid">
            {PILLARS.map((p) => (
              <article key={p.num} className={`hcp-pillar-card tone-${p.tone}`}>
                <div className="hcp-pillar-head">
                  <span className="hcp-pillar-icon" aria-hidden="true">{p.icon}</span>
                  <span className="hcp-pillar-num" aria-hidden="true">/{p.num}</span>
                </div>
                <h3 className="hcp-pillar-tag">{p.tag}</h3>
                <p className="hcp-pillar-desc">{p.description}</p>
                <ul className="hcp-pillar-list">
                  {p.items.map((item) => (
                    <li key={item}>
                      <span className="hcp-pillar-check" aria-hidden="true">
                        <Check />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ─── COVERAGE MAP (in/out scope per surface) ─── */}
      <section className="hcp-coverage">
        <div className="gt-shell">
          <header className="gtx-sec-head">
            <span className="gtx-eyebrow">
              <span className="gtx-eyebrow-dot" aria-hidden="true" />
              Coverage Map
            </span>
            <h2 className="gtx-sec-title">
              What's in scope. <em>What's out.</em>
            </h2>
            <p className="gtx-sec-sub">
              A practical map of marketing surface area. The right column
              is where most teams over-promise themselves into a breach.
            </p>
          </header>

          <div className="hcp-coverage-list">
            {COVERAGE.map((row, i) => (
              <article key={row.area} className="hcp-coverage-row">
                <div className="hcp-coverage-area">
                  <span className="hcp-coverage-num" aria-hidden="true">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="hcp-coverage-icon" aria-hidden="true">{row.icon}</span>
                  <h3 className="hcp-coverage-area-name">{row.area}</h3>
                </div>
                <div className="hcp-coverage-cell hcp-coverage-in">
                  <span className="hcp-coverage-cell-tag">
                    <Check /> What we do
                  </span>
                  <p>{row.inScope}</p>
                </div>
                <div className="hcp-coverage-cell hcp-coverage-out">
                  <span className="hcp-coverage-cell-tag">
                    <X /> What we won't do
                  </span>
                  <p>{row.outScope}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ─── COMPLIANCE LOOP (4 steps) ─── */}
      <section className="hcp-loop">
        <div className="gt-shell">
          <header className="gtx-sec-head">
            <span className="gtx-eyebrow">
              <span className="gtx-eyebrow-dot" aria-hidden="true" />
              The Compliance Loop
            </span>
            <h2 className="gtx-sec-title">
              Four steps. <em>Re-run annually.</em>
            </h2>
            <p className="gtx-sec-sub">
              Same working method every year, with a remediation register
              that closes findings inside 60 days.
            </p>
          </header>

          <ol className="hcp-loop-grid">
            {STEPS.map((step, i) => (
              <li key={step.num} className="hcp-loop-step">
                <div className="hcp-loop-marker">
                  <span className="hcp-loop-num">{step.num}</span>
                  {i < STEPS.length - 1 && (
                    <span className="hcp-loop-connector" aria-hidden="true" />
                  )}
                </div>
                <div className="hcp-loop-body">
                  <span className="hcp-loop-label">{step.label}</span>
                  <h3 className="hcp-loop-title">{step.title}</h3>
                  <p className="hcp-loop-text">{step.body}</p>
                </div>
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
              <img src={ctaImg} alt="" loading="lazy" decoding="async" />
              <div className="gtx-cta-card-img-tag" aria-hidden="true">
                <span className="dot" /> Delivered under privilege
              </div>
            </div>
            <div className="gtx-cta-card-body">
              <span className="gtx-eyebrow">
                <span className="gtx-eyebrow-dot" aria-hidden="true" />
                Next Step
              </span>
              <h2 className="gtx-cta-h">
                Start with a <em>two-week posture review.</em>
              </h2>
              <p>
                Delivered under privilege. You receive a working remediation
                register, ranked by patient-risk severity, plus a privileged
                memo your legal counsel can take straight to the practice.
                No marketing pitch attached.
              </p>
              <Link to="/contact" className="gtx-btn-primary">
                Request the review
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

export default HipaaCompliance;
