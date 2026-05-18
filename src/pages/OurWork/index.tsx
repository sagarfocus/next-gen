import { Link } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import type { ReactNode } from 'react';
import { Parallax, AnimatedBackground, MotionButton, MotionCard } from '../../lib/motion';
import nextHeroImg1 from '../../assets/nextheroimg1.png';
import nextHeroImg2 from '../../assets/nextheroimg2.png';
import imgER from '../../assets/freestandingemergency.png';
import imgUrgent from '../../assets/urgentcare.png';
import imgMedspa from '../../assets/Medspa.png';
import imgDental from '../../assets/dental.png';
import imgMental from '../../assets/mental health.png';
import imgPediatrics from '../../assets/dermatology.png';
import imgChiro from '../../assets/chiropratic.png';
import imgPrimary from '../../assets/primary care\'.png';
import imgNetworks from '../../assets/medicalautomation.png';
import imgLocalSearch from '../../assets/Local Search.png';
import imgBookingWeb from '../../assets/bookingfirstwebsite.png';
import imgFrontDeskAutomation from '../../assets/automation frontedesk.png';
import imgFeatER from '../../assets/er.png';
import imgFeatSpaMed from '../../assets/spamed.png';
import imgFeatDental from '../../assets/dentalimg.png';
import imgPaidMedia from '../../assets/paidmedia.png';
import imgPatientIdentities from '../../assets/patientidentities.png';
import imgRecall from '../../assets/recall+.png';

/* ============================================================
   OUR WORK — bespoke gallery page.
   A retrospective of the engagements, capabilities, and
   industries shipped from this studio. SEO-first, image-light,
   distinct from every other page on the site.
   ============================================================ */

const IMG = {
  spotlight: nextHeroImg1,
  search:
    'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=70',
  web:
    'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=900&q=70',
  studio: nextHeroImg2,
};

const TAGS = [
  'SEO',
  'Google Ads',
  'Meta Ads',
  'Branding',
  'Web Design',
  'Content',
  'Automation',
  'Field Marketing',
  'Reviews',
  'AI Triage',
  'Local Pack',
  'Schema',
];

const STATS = [
  { v: '200+',   l: 'Practices grown' },
  { v: '$24M+',  l: 'Pipeline moved' },
  { v: '47M',    l: 'Impressions delivered' },
  { v: '4.1×',   l: 'Median ROAS' },
];

type Industry = {
  name: string;
  blurb: string;
  img: string;
  icon: ReactNode;
  description: string;
  services: string[];
  metric: { v: string; l: string };
};

const INDUSTRIES: Industry[] = [
  {
    name: 'Emergency Rooms',
    blurb: 'Freestanding & hospital-attached.',
    img: imgER,
    description:
      'We rebuild your emergency-care funnel around true ED intent — chest-pain, trauma, kid-with-a-fever — and bend paid spend away from non-emergent traffic that crowds rooms but never converts on revenue.',
    services: [
      'Trauma intent SEO',
      'Wait-time landing pages',
      'Insurance verification flows',
      'Geo-fenced display + connected TV',
      'EmergencyMedicalService schema',
    ],
    metric: { v: '+318%', l: 'Booked emergency visits, 90 days' },
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
  },
  {
    name: 'Urgent Care',
    blurb: 'Walk-in volume, fast turnaround.',
    img: imgUrgent,
    description:
      'Walk-in volume that pays back the same week. We re-engineer your local presence so the parent searching at 8pm chooses you, not the national chain across town.',
    services: [
      'Same-day appointment funnels',
      'Google Business Profile optimisation',
      'Insurance-by-location pages',
      'After-hours paid search',
      'Patient review automation',
    ],
    metric: { v: '−42%', l: 'Cost per walk-in, 6 months' },
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v10M7 12h10" />
      </svg>
    ),
  },
  {
    name: 'Medspas & Aesthetics',
    blurb: 'Injectables, lasers, lifetime value.',
    img: imgMedspa,
    description:
      'Re-price the launch funnel around lifetime value, not first visit. We build full-funnel ecosystems for injectables, lasers, and body — the kind that survive seasonality and don\'t collapse when Groupon disappears.',
    services: [
      'Treatment-specific landing pages',
      'Before/after gallery SEO',
      'Loyalty + membership automation',
      'Instagram + TikTok ad creative',
      'Patient retention sequences',
    ],
    metric: { v: '+62%', l: 'Average order value, 6 months' },
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 2l2.3 5.3L20 9l-4 4.2L17 20l-5-2.8L7 20l1-6.8L4 9l5.7-1.7L12 2z" />
      </svg>
    ),
  },
  {
    name: 'Dental Practices',
    blurb: 'Solo to DSO-level networks.',
    img: imgDental,
    description:
      'Solo office to DSO — one search and brand operating system. We unify locations under one marketing engine, then push each office\'s local rankings independently so they never cannibalise each other.',
    services: [
      'Multi-location SEO',
      'Insurance-accepted pages per office',
      'New-patient nurture flows',
      'Service-area schema',
      'Treatment-coordinator call scripts',
    ],
    metric: { v: '−48%', l: 'Cost per new patient' },
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M7 3c-2 0-3 1.5-3 4 0 3 1 5 1.5 8s1 7 2.5 7c1 0 1-3 2-5s1.5-2 2 0 1 5 2 5c1.5 0 2-4 2.5-7s1.5-5 1.5-8c0-2.5-1-4-3-4-1.5 0-2.5 1-3.5 1S8.5 3 7 3z" />
      </svg>
    ),
  },
  {
    name: 'Mental Health',
    blurb: 'Empathetic recall + insurance flow.',
    img: imgMental,
    description:
      'Make the front door feel safe and the back office actually work. From search to scheduled session in under 24 hours — without the cold-CRM email tone that pushes anxious patients straight back to Google.',
    services: [
      'Specialty-matched landing pages',
      'Telehealth booking funnels',
      'Therapist directory SEO',
      'Insurance verification automation',
      'Crisis-line ad compliance review',
    ],
    metric: { v: '4.6×', l: 'Booked sessions per ad spend' },
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M9 21V9a3 3 0 0 1 3-3 3 3 0 0 1 3 3v12" />
        <path d="M5 14a4 4 0 0 1 0-8 4 4 0 0 1 4-4" />
        <path d="M19 14a4 4 0 0 0 0-8 4 4 0 0 0-4-4" />
      </svg>
    ),
  },
  {
    name: 'Pediatrics',
    blurb: 'Parent-first comms, well-visit ladders.',
    img: imgPediatrics,
    description:
      'Write to the parent\'s actual questions, schedule for their actual life, and remind without the guilt. We tune every touch — search, ad copy, intake, recall — to the way overwhelmed parents actually behave at 9pm on a Sunday.',
    services: [
      'Well-visit reminder sequences',
      'Vaccine page SEO',
      'School-form automation',
      'Parent education content',
      'Sick-visit same-day funnels',
    ],
    metric: { v: '+71%', l: 'Well-visit attachment, 12 months' },
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="8" r="4" />
        <path d="M5 21a7 7 0 0 1 14 0" />
      </svg>
    ),
  },
  {
    name: 'Chiropractic',
    blurb: 'Decompression, wellness, retention.',
    img: imgChiro,
    description:
      'Front door for the first visit, funnel for the next ten, and the brand that earns referrals year after year. We replace one-off promo offers with a retention system that compounds.',
    services: [
      'Condition-specific SEO',
      'Decompression therapy ads',
      'Membership funnel design',
      'Patient testimonial video',
      'Local sports + corporate partnerships',
    ],
    metric: { v: '+158%', l: 'Membership conversions' },
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 2v20" />
        <path d="M8 5h8M7 9h10M6 13h12M7 17h10M8 21h8" />
      </svg>
    ),
  },
  {
    name: 'Primary Care',
    blurb: 'Panel growth + payer mix optimisation.',
    img: imgPrimary,
    description:
      'Grow your panel with the patients your panel actually needs — by payer, by zip, by visit type. Volume that lifts revenue, not just utilisation.',
    services: [
      'Panel-growth campaigns',
      'Payer-mix landing pages',
      'Annual wellness funnels',
      'Same-day-visit ads',
      'Care-gap closure flows',
    ],
    metric: { v: '+24%', l: 'Commercial payer mix shift' },
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M3 12h4l3-8 4 16 3-8h4" />
      </svg>
    ),
  },
  {
    name: 'Healthcare Networks',
    blurb: 'Multi-location brand operating systems.',
    img: imgNetworks,
    description:
      'The system that lets 7, 70, or 700 locations rank, convert, and report — without seven, seventy, or seven hundred marketing teams. One brand, one tech spine, one weekly dashboard.',
    services: [
      'Centralised brand system',
      'Location-page templates at scale',
      'Cross-location performance reporting',
      'Service-line launch playbooks',
      'Post-acquisition integration runbooks',
    ],
    metric: { v: '7 → 17', l: 'Locations unified in 14 months' },
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="2.5" />
        <circle cx="5" cy="5" r="2" />
        <circle cx="19" cy="5" r="2" />
        <circle cx="5" cy="19" r="2" />
        <circle cx="19" cy="19" r="2" />
        <path d="M7 6.5l3 4M17 6.5l-3 4M7 17.5l3-4M17 17.5l-3-4" />
      </svg>
    ),
  },
];

type Capability = {
  tag: string;
  title: string;
  copy: string;
  size: 'a' | 'b' | 'c' | 'd' | 'e' | 'f';
  description: string;
  services: string[];
  metric: { v: string; l: string };
  to: string;
  img: string;
};

const CAPABILITIES: Capability[] = [
  {
    size: 'a',
    tag: 'Discovery',
    title: 'Local search systems that own the Map Pack.',
    copy: 'Schema, GBP optimisation, geo-targeted content, and a review engine that compounds month over month.',
    description:
      'Healthcare buyers start with high-intent searches in their zip code. We engineer the systems that put your practice in the Local Pack on the searches that matter — emergency-care, same-day appointments, specialty visits — and keep you there as competitors churn around you.',
    services: [
      'Local schema + GBP optimisation',
      'Service-area page architecture',
      'Review-velocity engine',
      'Geo-targeted content briefs',
      'Citations + NAP cleanup',
    ],
    metric: { v: '+187%', l: 'Local Pack impressions, 90d' },
    to: '/services/seo-local-search',
    img: imgLocalSearch,
  },
  {
    size: 'b',
    tag: 'Acquisition',
    title: 'Paid media that pays back in week one.',
    copy: 'Google + Meta + LinkedIn with server-side tracking and HIPAA-aware audiences.',
    description:
      'Paid spend that compounds, not leaks. HIPAA-aware audience design, server-side conversion tracking, and budget routed toward patients with real lifetime value — not the cheapest first click.',
    services: [
      'Google + Meta + LinkedIn campaigns',
      'Server-side conversion tracking',
      'HIPAA-aware audience design',
      'Landing-flow experiments',
      'Weekly CAC + LTV reporting',
    ],
    metric: { v: '4.1×', l: 'Median ROAS across clients' },
    to: '/services/paid-media',
    img: imgPaidMedia,
  },
  {
    size: 'c',
    tag: 'Brand',
    title: 'Identities patients trust on sight.',
    copy: 'Marks, voice, and motion built to age well across signage, screen, and surgical theatre.',
    description:
      'A brand system designed for the moment a patient is choosing between you and the practice down the street. Marks, voice, and motion that read as competent and current across every surface — signage, screen, surgical theatre.',
    services: [
      'Visual identity systems',
      'Patient-facing voice + tone',
      'Photography + motion direction',
      'Wayfinding + collateral',
      'Brand guidelines + ops manual',
    ],
    metric: { v: '7+', l: 'Identities shipped at network scale' },
    to: '/services/brand-identity',
    img: imgPatientIdentities,
  },
  {
    size: 'd',
    tag: 'Web',
    title: 'Booking-first websites that convert.',
    copy: 'Speed, schema, accessibility — and a booking pathway with measured drop-off at every step.',
    description:
      'Sites engineered around the booking pathway. Speed, schema, accessibility — and a drop-off map at every step so we know exactly where conversion leaks happen and which fix moves the number.',
    services: [
      'Booking-first information architecture',
      'Core Web Vitals + accessibility',
      'HIPAA-respecting analytics',
      'Funnel drop-off instrumentation',
      'CMS your team can actually use',
    ],
    metric: { v: '+38%', l: 'Booking completion lift' },
    to: '/services/web-design',
    img: imgBookingWeb,
  },
  {
    size: 'e',
    tag: 'Lifecycle',
    title: 'Recall + nurture that earns trust.',
    copy: 'Empathetic recall flows that move return rates without ever feeling like advertising.',
    description:
      'Patient lifecycle communication that respects intent. Empathetic recall flows that move return rates and reactivate dormant patients without ever feeling transactional, templated, or manipulative.',
    services: [
      'Recall email + SMS cadences',
      'Reactivation campaigns',
      'Permission-based review asks',
      'Care-gap nurture flows',
      'NPS + satisfaction loops',
    ],
    metric: { v: '+24%', l: 'Annual patient return rate' },
    to: '/services/lifecycle-engagement',
    img: imgRecall,
  },
  {
    size: 'f',
    tag: 'Operations',
    title: 'Automations the front desk actually runs on.',
    copy: 'EHR-connected, BAA-covered workflows: intake, reminders, eligibility, AI triage.',
    description:
      'EHR-connected, BAA-covered workflows that take busywork off the front desk so staff can spend time on patients, not on phones. Intake, reminders, eligibility, AI triage — running where your team already works.',
    services: [
      'Intake + scheduling automation',
      'Insurance verification flows',
      'Appointment reminders + recall',
      'AI-assisted triage routing',
      'EHR-to-CRM data bridges',
    ],
    metric: { v: '−42%', l: 'No-show rate, networked clinics' },
    to: '/services/automation',
    img: imgFrontDeskAutomation,
  },
];

type Engagement = {
  sector: string;
  name: string;
  headline: string;
  metric: { v: string; l: string };
  delta: string;
  to: string;
  img?: string;
  description: string;
  services: string[];
};

const ENGAGEMENTS: Engagement[] = [
  {
    sector: 'Emergency Room',
    name: 'SunCrest Freestanding ER',
    headline: 'Filled overnight slots without paying for non-emergent traffic.',
    metric: { v: '+318%', l: 'Booked visits, 90d' },
    delta: '+318',
    to: '/case-studies',
    img: imgFeatER,
    description:
      'A 24/7 freestanding ER bleeding overnight capacity to non-emergent traffic and chasing impressions across broken ad accounts. We rebuilt the funnel around true ED intent — chest pain, trauma, kid-with-a-fever — and routed paid spend to the patients who actually convert on revenue.',
    services: [
      'Trauma intent SEO + GBP rebuild',
      'Wait-time + insurance landing pages',
      'Geo-fenced display + connected TV',
      'EmergencyMedicalService schema',
      'Insurance verification automation',
    ],
  },
  {
    sector: 'Medspa',
    name: 'VitalSpa Aesthetics',
    headline: 'Re-priced the launch funnel around lifetime value, not first visit.',
    metric: { v: '+62%', l: 'AOV, six months' },
    delta: '+62',
    to: '/case-studies',
    img: imgFeatSpaMed,
    description:
      'A multi-treatment medspa scaling past founder-led growth. We re-priced the entire launch funnel around lifetime value instead of first-visit revenue, then layered loyalty + financing flows that compound — instead of discount cycles that train the wrong behaviour.',
    services: [
      'LTV-modelled paid acquisition',
      'Membership + loyalty programme',
      'Financing-aware landing flows',
      'Treatment-bundle ad creative',
      'Aftercare + recall automation',
    ],
  },
  {
    sector: 'Dental Network',
    name: 'NorthLake Dental',
    headline: 'Unified seven locations under one search + brand operating system.',
    metric: { v: '−48%', l: 'Cost per patient' },
    delta: '−48',
    to: '/case-studies',
    img: imgFeatDental,
    description:
      'Seven dental locations operating as seven brands. We unified them under one search + brand operating system, then engineered cross-location attribution so each clinic could see its own pipeline without drowning in the others’ noise.',
    services: [
      'Network-wide brand system',
      'Per-location SEO + GBP',
      'Cross-location attribution',
      'Centralised paid media',
      'Patient-routing automation',
    ],
  },
];

/* ---------- SVG art used for non-photo tiles ---------- */

const MeshArt = () => (
  <svg viewBox="0 0 600 420" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
    <defs>
      <radialGradient id="mwA" cx="20%" cy="20%" r="60%">
        <stop offset="0%" stopColor="#576DB5" stopOpacity="0.85" />
        <stop offset="100%" stopColor="#576DB5" stopOpacity="0" />
      </radialGradient>
      <radialGradient id="mwB" cx="85%" cy="35%" r="55%">
        <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.55" />
        <stop offset="100%" stopColor="#D4AF37" stopOpacity="0" />
      </radialGradient>
      <radialGradient id="mwC" cx="40%" cy="90%" r="65%">
        <stop offset="0%" stopColor="#8FBC8F" stopOpacity="0.55" />
        <stop offset="100%" stopColor="#8FBC8F" stopOpacity="0" />
      </radialGradient>
    </defs>
    <rect width="600" height="420" fill="#1A2438" />
    <rect width="600" height="420" fill="url(#mwA)" />
    <rect width="600" height="420" fill="url(#mwB)" />
    <rect width="600" height="420" fill="url(#mwC)" />
    <g stroke="rgba(255,255,255,0.10)" strokeWidth="1" fill="none">
      <circle cx="120" cy="320" r="80" />
      <circle cx="120" cy="320" r="140" strokeDasharray="3 6" />
      <circle cx="480" cy="100" r="60" />
      <circle cx="480" cy="100" r="110" strokeDasharray="3 6" />
    </g>
    <g fill="#D4AF37">
      <circle cx="120" cy="320" r="6" />
      <circle cx="480" cy="100" r="6" />
    </g>
    <text x="32" y="44" fontFamily="ui-monospace,Menlo" fontSize="11" letterSpacing="2" fill="rgba(255,255,255,0.65)">
      FIG. 01 — TERRITORY
    </text>
    <text x="32" y="398" fontFamily="ui-monospace,Menlo" fontSize="11" letterSpacing="2" fill="rgba(255,255,255,0.5)">
      SCALE · 1 : ∞
    </text>
  </svg>
);

/* ---------- Sections ---------- */

const Hero = () => (
  <section className="ow-hero" aria-labelledby="ow-h1">
    <AnimatedBackground variant="aurora" intensity="medium" />
    <div className="container-shell">
      <nav className="ow-crumbs" aria-label="Breadcrumb">
        <Link to="/">Home</Link>
        <span aria-hidden="true">/</span>
        <span aria-current="page">Our Work</span>
      </nav>

      <div className="ow-hero-grid">
        <div className="ow-hero-copy">
          <span className="ow-pill">
            <span className="ow-pill-dot" />
            Selected work · Healthcare · 2019–2026
          </span>
          <h1 id="ow-h1" className="ow-h1">
            Six years.
            <br />
            <em>Two hundred</em> practices.
            <br />
            One playbook.
          </h1>
          <p className="ow-lede">
            A retrospective of the marketing, branding, and operations work
            we have shipped for clinics, medspas, urgent care centers, and
            multi-location healthcare brands.
          </p>
          <div className="ow-hero-cta">
            <MotionButton to="/contact" className="ow-cta-primary">
              Start a project
              <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </MotionButton>
            <Link to="/case-studies" className="ow-cta-link">
              Read full case studies
            </Link>
          </div>
        </div>

        <Parallax as="div" speed={0.06} className="ow-hero-visual" aria-hidden="true">
          <figure className="ow-spotlight">
            <img src={IMG.spotlight} alt="" loading="eager" />
            <figcaption>
              <span className="ow-spot-tag">In production</span>
              <span className="ow-spot-title">Multi-location growth OS</span>
            </figcaption>
          </figure>

          <div className="ow-floater ow-floater-1">
            <span className="ow-floater-num">+318<small>%</small></span>
            <span className="ow-floater-lbl">Booked visits · 90d</span>
          </div>
          <div className="ow-floater ow-floater-2">
            <span className="ow-floater-dot" /> Live ranking · Map Pack
          </div>
        </Parallax>
      </div>
    </div>
  </section>
);

const Marquee = () => (
  <section className="ow-marquee" aria-hidden="true">
    <div className="ow-marquee-track">
      {[...TAGS, ...TAGS].map((t, i) => (
        <span key={`${t}-${i}`} className="ow-mq-item">
          <span className="ow-mq-dot" /> {t}
        </span>
      ))}
    </div>
  </section>
);

const Stats = () => (
  <section className="ow-stats" aria-label="Engagement totals">
    <div className="container-shell">
      <div className="ow-stats-grid">
        {STATS.map((s, i) => (
          <div key={s.l} className="ow-stat">
            <span className="ow-stat-mono">0{i + 1}</span>
            <div className="ow-stat-v">{s.v}</div>
            <div className="ow-stat-l">{s.l}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

type DetailModalProps = {
  open: boolean;
  onClose: () => void;
  img: string;
  numLabel?: string;
  eyebrow: string;
  title: string;
  blurb?: string;
  description: string;
  serviceLabel: string;
  services: string[];
  metric: { v: string; l: string };
  cta: { text: string; to: string };
};

const DetailModal = ({
  open,
  onClose,
  img,
  numLabel,
  eyebrow,
  title,
  blurb,
  description,
  serviceLabel,
  services,
  metric,
  cta,
}: DetailModalProps) => {
  useEffect(() => {
    if (!open) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', onKey);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="ow-ind-modal"
      role="dialog"
      aria-modal="true"
      aria-labelledby="ow-detail-modal-title"
      onClick={onClose}
    >
      <div className="ow-ind-modal-card" onClick={(e) => e.stopPropagation()}>
        <button
          type="button"
          className="ow-ind-modal-close"
          onClick={onClose}
          aria-label="Close details"
        >
          <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <line x1="6" y1="6" x2="18" y2="18" />
            <line x1="6" y1="18" x2="18" y2="6" />
          </svg>
        </button>

        <div className="ow-ind-modal-art" aria-hidden="true">
          <img src={img} alt="" />
          <div className="ow-ind-modal-art-shade" />
          {numLabel && <span className="ow-ind-modal-num">{numLabel}</span>}
        </div>

        <div className="ow-ind-modal-body">
          <span className="ow-ind-modal-tag">{eyebrow}</span>
          <h2 id="ow-detail-modal-title" className="ow-ind-modal-title">{title}</h2>
          {blurb && <p className="ow-ind-modal-blurb">{blurb}</p>}
          <p className="ow-ind-modal-desc">{description}</p>

          <div className="ow-ind-modal-services">
            <span className="ow-ind-modal-subtag">{serviceLabel}</span>
            <ul>
              {services.map((s) => (
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
              <strong>{metric.v}</strong>
              <span>{metric.l}</span>
            </div>
            <Link to={cta.to} className="ow-ind-modal-cta">
              {cta.text}
              <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

const Capabilities = () => {
  const [modalIdx, setModalIdx] = useState<number | null>(null);
  const modalItem = modalIdx !== null ? CAPABILITIES[modalIdx] : null;

  return (
    <section className="ow-cap" aria-labelledby="ow-cap-title">
      <div className="container-shell">
        <header className="ow-section-head">
          <span className="ow-section-tag">What we ship</span>
          <h2 id="ow-cap-title" className="ow-section-h2">
            Six capabilities. One operating system.
          </h2>
        </header>

        <div className="ow-bento">
          {CAPABILITIES.map((cap, i) => (
            <MotionCard
              key={cap.tag}
              naked
              tilt={5}
              className={`ow-tile ow-tile-${cap.size}`}
            >
              <button
                type="button"
                className="ow-tile-btn"
                onClick={() => setModalIdx(i)}
                aria-haspopup="dialog"
                aria-label={`View details for ${cap.tag} — ${cap.title}`}
              >
                <div className="ow-tile-art ow-tile-art-img">
                  <img src={cap.img} alt="" loading="lazy" />
                </div>
                <div className="ow-tile-body">
                  <span className="ow-tile-tag">{cap.tag}</span>
                  <h3 className="ow-tile-title">{cap.title}</h3>
                  <p className="ow-tile-copy">{cap.copy}</p>
                  <span className="ow-tile-cta">View details
                    <svg width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </span>
                </div>
              </button>
            </MotionCard>
          ))}
        </div>
      </div>

      {modalItem !== null && modalIdx !== null && (
        <DetailModal
          open
          onClose={() => setModalIdx(null)}
          img={modalItem.img}
          numLabel={`${String(modalIdx + 1).padStart(2, '0')} / ${String(CAPABILITIES.length).padStart(2, '0')}`}
          eyebrow={`Capability · ${modalItem.tag}`}
          title={modalItem.title}
          blurb={modalItem.copy}
          description={modalItem.description}
          serviceLabel="What we ship"
          services={modalItem.services}
          metric={modalItem.metric}
          cta={{ text: `Talk to us about ${modalItem.tag}`, to: modalItem.to }}
        />
      )}
    </section>
  );
};

const Industries = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLUListElement>(null);
  const [progress, setProgress] = useState(0);
  const [active, setActive] = useState(0);
  const [modalIdx, setModalIdx] = useState<number | null>(null);

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

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    const mqDesktop = window.matchMedia('(min-width: 901px)');
    const mqReduce = window.matchMedia('(prefers-reduced-motion: reduce)');
    let raf = 0;

    const update = () => {
      raf = 0;
      if (!mqDesktop.matches || mqReduce.matches) {
        track.style.transform = '';
        setProgress(0);
        setActive(0);
        return;
      }
      const rect = section.getBoundingClientRect();
      const vh = window.innerHeight;
      const scrollDistance = section.offsetHeight - vh;
      const scrolled = Math.min(Math.max(-rect.top, 0), scrollDistance);
      const p = scrollDistance > 0 ? scrolled / scrollDistance : 0;
      const viewport = track.parentElement;
      const viewportWidth = viewport ? viewport.clientWidth : window.innerWidth;
      const trackOverflow = Math.max(0, track.scrollWidth - viewportWidth);
      track.style.transform = `translate3d(${-p * trackOverflow}px, 0, 0)`;
      setProgress(p);
      setActive(Math.min(INDUSTRIES.length - 1, Math.round(p * (INDUSTRIES.length - 1))));
    };

    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', update);
    mqDesktop.addEventListener('change', update);
    mqReduce.addEventListener('change', update);
    return () => {
      if (raf) cancelAnimationFrame(raf);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', update);
      mqDesktop.removeEventListener('change', update);
      mqReduce.removeEventListener('change', update);
    };
  }, []);

  const modalItem = modalIdx !== null ? INDUSTRIES[modalIdx] : null;
  return (
    <>
    <section ref={sectionRef} className="ow-ind" aria-labelledby="ow-ind-title">
      <div className="ow-ind-sticky">
        <div className="container-shell">
          <header className="ow-ind-head">
            <span className="ow-section-tag">Industries we serve</span>
            <h2 id="ow-ind-title" className="ow-section-h2">
              The clinics this work has shipped for.
            </h2>
            <p className="ow-ind-lede">
              Single-location practices, multi-site networks, and everything between.
              Scroll to explore — every vertical has its own pricing model, regulatory
              edge, and patient journey.
            </p>
          </header>
        </div>

        <div className="ow-ind-viewport" aria-hidden="false">
          <ul ref={trackRef} className="ow-ind-track">
            {INDUSTRIES.map((it, i) => {
              const isOpen = i === active;
              return (
                <li
                  key={it.name}
                  className={`ow-ind-card${isOpen ? ' is-active' : ''}`}
                  aria-current={isOpen ? 'true' : undefined}
                >
                  <button
                    type="button"
                    className="ow-ind-card-btn"
                    onClick={() => setModalIdx(i)}
                    aria-label={`View details for ${it.name}`}
                    aria-haspopup="dialog"
                  >
                    <div className="ow-ind-card-media" aria-hidden="true">
                      <img src={it.img} alt="" loading="lazy" />
                      <div className="ow-ind-card-shade" />
                    </div>
                    <div className="ow-ind-card-top">
                      <span className="ow-ind-card-num">{String(i + 1).padStart(2, '0')} / {String(INDUSTRIES.length).padStart(2, '0')}</span>
                      <span className="ow-ind-card-icon" aria-hidden="true">{it.icon}</span>
                    </div>
                    <div className="ow-ind-card-bottom">
                      <h3 className="ow-ind-card-title">{it.name}</h3>
                      <p className="ow-ind-card-blurb">{it.blurb}</p>
                      <span className="ow-ind-card-cta">View details
                        <svg width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <line x1="5" y1="12" x2="19" y2="12" />
                          <polyline points="12 5 19 12 12 19" />
                        </svg>
                      </span>
                    </div>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="container-shell">
          <div className="ow-ind-progress" aria-hidden="true">
            <div className="ow-ind-progress-meta">
              <span>{String(active + 1).padStart(2, '0')} <em>/ {String(INDUSTRIES.length).padStart(2, '0')}</em></span>
              <span className="ow-ind-progress-name">{INDUSTRIES[active].name}</span>
              <span className="ow-ind-progress-hint">Scroll to advance →</span>
            </div>
            <div className="ow-ind-progress-rail">
              <div className="ow-ind-progress-fill" style={{ width: `${progress * 100}%` }} />
            </div>
          </div>
        </div>
      </div>
    </section>

    {modalItem !== null && modalIdx !== null && (
      <div
        className="ow-ind-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="ow-ind-modal-title"
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
            <img src={modalItem.img} alt="" />
            <div className="ow-ind-modal-art-shade" />
            <span className="ow-ind-modal-num">
              {String(modalIdx + 1).padStart(2, '0')} / {String(INDUSTRIES.length).padStart(2, '0')}
            </span>
            <span className="ow-ind-modal-art-icon">{modalItem.icon}</span>
          </div>

          <div className="ow-ind-modal-body">
            <span className="ow-ind-modal-tag">Industry · Healthcare</span>
            <h2 id="ow-ind-modal-title" className="ow-ind-modal-title">{modalItem.name}</h2>
            <p className="ow-ind-modal-blurb">{modalItem.blurb}</p>
            <p className="ow-ind-modal-desc">{modalItem.description}</p>

            <div className="ow-ind-modal-services">
              <span className="ow-ind-modal-subtag">What we ship</span>
              <ul>
                {modalItem.services.map((s) => (
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
                <strong>{modalItem.metric.v}</strong>
                <span>{modalItem.metric.l}</span>
              </div>
              <Link to="/contact" className="ow-ind-modal-cta">
                Talk to us about {modalItem.name}
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
    </>
  );
};

const Featured = () => {
  const [modalIdx, setModalIdx] = useState<number | null>(null);
  const modalItem = modalIdx !== null ? ENGAGEMENTS[modalIdx] : null;

  return (
    <section className="ow-feat" aria-labelledby="ow-feat-title">
      <div className="container-shell">
        <header className="ow-section-head">
          <span className="ow-section-tag">Featured engagements</span>
          <h2 id="ow-feat-title" className="ow-section-h2">
            Three from the last quarter.
          </h2>
        </header>

        <div className="ow-feat-grid">
          {ENGAGEMENTS.map((e, i) => (
            <MotionCard key={e.name} naked tilt={7} className="ow-feat-card-wrap">
              <button
                type="button"
                className="ow-feat-card"
                onClick={() => setModalIdx(i)}
                aria-haspopup="dialog"
                aria-label={`View details for ${e.name}`}
              >
                <div className={`ow-feat-art${e.img ? ' ow-feat-art--photo' : ''}`} aria-hidden="true">
                  {e.img ? (
                    <>
                      <img src={e.img} alt="" loading="lazy" />
                      <div className="ow-feat-art-shade" />
                    </>
                  ) : (
                    <MeshArt />
                  )}
                  <span className="ow-feat-delta">{e.delta}<small>%</small></span>
                </div>
                <div className="ow-feat-body">
                  <span className="ow-feat-sector">{e.sector}</span>
                  <h3 className="ow-feat-name">{e.name}</h3>
                  <p className="ow-feat-headline">{e.headline}</p>
                  <div className="ow-feat-foot">
                    <div>
                      <strong>{e.metric.v}</strong>
                      <span>{e.metric.l}</span>
                    </div>
                    <span className="ow-feat-arrow" aria-hidden="true">↗</span>
                  </div>
                </div>
              </button>
            </MotionCard>
          ))}
        </div>
      </div>

      {modalItem !== null && modalIdx !== null && (
        <DetailModal
          open
          onClose={() => setModalIdx(null)}
          img={modalItem.img || ''}
          numLabel={`${String(modalIdx + 1).padStart(2, '0')} / ${String(ENGAGEMENTS.length).padStart(2, '0')}`}
          eyebrow={`Engagement · ${modalItem.sector}`}
          title={modalItem.name}
          blurb={modalItem.headline}
          description={modalItem.description}
          serviceLabel="What we delivered"
          services={modalItem.services}
          metric={modalItem.metric}
          cta={{ text: `Talk to us about ${modalItem.sector}`, to: modalItem.to }}
        />
      )}
    </section>
  );
};

const Closing = () => (
  <section className="ow-close" aria-labelledby="ow-close-title">
    <div className="container-shell">
      <div className="ow-close-card">
        <Parallax as="div" speed={0.05} className="ow-close-img" aria-hidden="true">
          <img src={IMG.studio} alt="" loading="lazy" />
          <div className="ow-close-shade" />
        </Parallax>
        <div className="ow-close-body">
          <span className="ow-pill">
            <span className="ow-pill-dot" /> Now booking · Q3 2026
          </span>
          <h2 id="ow-close-title" className="ow-close-h">
            Want to be in this list <em>next year</em>?
          </h2>
          <p className="ow-close-p">
            We take a small number of new engagements each quarter. If your
            practice is ready, the audit gets you a real plan in five days.
          </p>
          <div className="ow-close-cta">
            <MotionButton to="/free-growth-audit" className="ow-cta-primary ow-cta-primary--light">
              Get my growth audit
              <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </MotionButton>
            <Link to="/case-studies" className="ow-cta-link ow-cta-link--light">
              Read full case studies
            </Link>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const COLLECTION_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Our Work — Healthcare Marketing Portfolio',
  url: 'https://thenextgenhealth.com/our-work',
  description:
    'A retrospective of marketing, branding, web, and automation work shipped for clinics, medspas, urgent care, and multi-location healthcare brands.',
  isPartOf: {
    '@type': 'WebSite',
    name: 'TheNextGen Healthcare Marketing',
    url: 'https://thenextgenhealth.com',
  },
  about: [
    { '@type': 'Thing', name: 'Healthcare SEO' },
    { '@type': 'Thing', name: 'Healthcare paid media' },
    { '@type': 'Thing', name: 'Medical brand identity' },
    { '@type': 'Thing', name: 'Healthcare automation' },
  ],
};

/* Silence "unused" warning for ReactNode import in environments without TS dead-code stripping. */
const _noopNode: ReactNode = null;

const OurWork = () => (
  <main className="ow-page">
    <Hero />
    <Marquee />
    <Stats />
    <Capabilities />
    <Industries />
    <Featured />
    <Closing />

    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(COLLECTION_SCHEMA) }}
    />
    <span hidden>{_noopNode}</span>
  </main>
);

export default OurWork;
