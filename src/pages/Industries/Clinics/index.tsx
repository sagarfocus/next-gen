import ServiceHero from '../../../components/service/ServiceHero';
import WhatWeDo from '../../../components/service/WhatWeDo';
import HowItWorks from '../../../components/service/HowItWorks';
import Results from '../../../components/service/Results';
import ServiceCTA from '../../../components/service/ServiceCTA';
import type { DoCard } from '../../../components/service/WhatWeDo';
import type { HowStep } from '../../../components/service/HowItWorks';
import type { ResultStat } from '../../../components/service/Results';

const TrendingUp = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round">
    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
    <polyline points="17 6 23 6 23 12" />
  </svg>
);
const ChartIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
    <line x1="4" y1="20" x2="4" y2="11" />
    <line x1="10" y1="20" x2="10" y2="4" />
    <line x1="16" y1="20" x2="16" y2="14" />
    <line x1="2" y1="20" x2="22" y2="20" />
  </svg>
);
const PinIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);
const StethoscopeIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 3v6a4 4 0 0 0 8 0V3" />
    <path d="M10 13v3a4 4 0 0 0 8 0v-2" />
    <circle cx="18" cy="11" r="2" />
  </svg>
);
const StarIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 14.5 9 21 9.5 16 14 17.5 21 12 17.5 6.5 21 8 14 3 9.5 9.5 9" />
  </svg>
);
const NetworkIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round">
    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
  </svg>
);
const FileIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
  </svg>
);
const HeartIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
  </svg>
);

const DO_CARDS: DoCard[] = [
  { name: 'Patient Acquisition Funnel', desc: 'Search-to-booking funnels built around real intent across every clinical specialty.', icon: <PinIcon /> },
  { name: 'Multi-Location SEO', desc: 'Local landing pages, GBP optimization, and citation programs for every site.', icon: <NetworkIcon /> },
  { name: 'Provider Branding', desc: 'Bio pages, headshots, and reputation systems that build trust before the first visit.', icon: <StarIcon /> },
  { name: 'Insurance & Service Pages', desc: 'Plain-language, schema-rich pages that rank for the searches that actually convert.', icon: <FileIcon /> },
  { name: 'Patient Retention', desc: 'Email + SMS journeys for recall, referrals, and review collection on autopilot.', icon: <HeartIcon /> },
  { name: 'Live Reporting', desc: 'Booked appointments, source attribution, and ROI in a single dashboard.', icon: <ChartIcon /> },
];

const STEPS: HowStep[] = [
  { num: '01', name: 'Audit', desc: 'Provider listings, GBP, and clinical SEO posture reviewed across every location.' },
  { num: '02', name: 'Foundation', desc: 'Local pages, provider bios, schema, and reputation systems shipped.' },
  { num: '03', name: 'Acquisition', desc: 'Search + paid layered against intent for each specialty and location.' },
  { num: '04', name: 'Retention', desc: 'Recall, referral, and review programs running every month.' },
];

const STATS: ResultStat[] = [
  { num: (<>+85<em>%</em></>), label: 'New patient inquiries' },
  { num: (<>4<em>×</em></>), label: 'Provider listings ranked' },
  { num: (<>$1.2M<em>+</em></>), label: 'Added annual revenue' },
  { num: (<>92<em>%</em></>), label: 'Recall + retention rate' },
];

const MainCard = () => (
  <>
    <div className="sv-h3d-bar">
      <ChartIcon />
      Patient Volume · Q4 2026
    </div>
    <div className="sv-h3d-pack-tag">Live performance</div>
    <div className="sv-h3d-bars">
      <div className="sv-h3d-bar-col" style={{ height: '30%' }} />
      <div className="sv-h3d-bar-col tan" style={{ height: '48%' }} />
      <div className="sv-h3d-bar-col" style={{ height: '55%' }} />
      <div className="sv-h3d-bar-col sage" style={{ height: '70%' }} />
      <div className="sv-h3d-bar-col" style={{ height: '78%' }} />
      <div className="sv-h3d-bar-col" style={{ height: '92%' }} />
    </div>
    <div className="sv-h3d-stat">
      <span className="sv-h3d-stat-label">New patients</span>
      <span className="sv-h3d-stat-val up">+312</span>
    </div>
    <div className="sv-h3d-stat">
      <span className="sv-h3d-stat-label">Cost / booking</span>
      <span className="sv-h3d-stat-val">$24.10</span>
    </div>
    <div className="sv-h3d-stat">
      <span className="sv-h3d-stat-label">Retention</span>
      <span className="sv-h3d-stat-val up">92%</span>
    </div>
  </>
);

const INDUSTRY_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Clinics & Multi-Specialty Practices — Marketing',
  serviceType: 'Healthcare Marketing',
  audience: 'Family practices, multi-specialty groups, clinical networks',
};

const Clinics = () => {
  return (
    <>
      <ServiceHero
        crumbRoot={{ label: 'Industries', href: '/industries' }}
        crumb="Clinics & Multi-Specialty"
        title={<>Patient flow for clinics, <em>engineered.</em></>}
        lede="From single-location family practices to multi-location specialty networks — search, paid, and patient-retention systems built for clinical reality."
        metric={{ icon: <StethoscopeIcon />, num: (<>+85<em>%</em></>), label: 'New patient inquiries' }}
        keyword={<>"family doctor near me" · CTR 18%</>}
        rankBadge={{ num: <TrendingUp />, label: 'Multi-location ranked' }}
        mainCard={<MainCard />}
      />
      <WhatWeDo cards={DO_CARDS} />
      <HowItWorks steps={STEPS} />
      <Results stats={STATS} />
      <ServiceCTA />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(INDUSTRY_SCHEMA) }}
      />
    </>
  );
};

export default Clinics;
