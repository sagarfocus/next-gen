import ServiceHero from '../../../components/service/ServiceHero';
import WhatWeDo from '../../../components/service/WhatWeDo';
import HowItWorks from '../../../components/service/HowItWorks';
import Results from '../../../components/service/Results';
import ServiceCTA from '../../../components/service/ServiceCTA';
import type { DoCard } from '../../../components/service/WhatWeDo';
import type { HowStep } from '../../../components/service/HowItWorks';
import type { ResultStat } from '../../../components/service/Results';

const SparkleIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.2 13.7 9.2 20.8 11 13.7 12.8 12 19.8 10.3 12.8 3.2 11 10.3 9.2 12 2.2Z" />
    <path d="M19 3.6 19.8 5.9 22.1 6.6 19.8 7.4 19 9.7 18.2 7.4 15.9 6.6 18.2 5.9 19 3.6Z" opacity=".75" />
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
const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
  </svg>
);
const CalendarIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);
const HeartIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
  </svg>
);
const TargetIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="6" />
    <circle cx="12" cy="12" r="2" />
  </svg>
);
const FileIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
  </svg>
);

const DO_CARDS: DoCard[] = [
  { name: 'Meta Campaign Strategy', desc: 'Audience layers, creative testing, and bid pacing tuned to elective treatments.', icon: <TargetIcon /> },
  { name: 'Treatment Page SEO', desc: 'Service pages that rank for high-intent procedure searches in your market.', icon: <FileIcon /> },
  { name: 'Booking Funnels', desc: 'Consult-to-treatment funnels with friction removed at every step.', icon: <CalendarIcon /> },
  { name: 'Social-Led Content', desc: 'Before/after libraries, reels, and stories shot and shipped weekly.', icon: <InstagramIcon /> },
  { name: 'Retention Sequences', desc: 'Automated touchpoints for membership upgrades, recall, and reviews.', icon: <HeartIcon /> },
  { name: 'ROI Reporting', desc: 'Live ROAS dashboard, weekly Loom walkthrough, monthly written report.', icon: <ChartIcon /> },
];

const STEPS: HowStep[] = [
  { num: '01', name: 'Audit', desc: 'Brand, creative, audience, and booking funnel reviewed against your goal mix.' },
  { num: '02', name: 'Audience & Creative', desc: 'Custom audience model + premium creative system built for your treatments.' },
  { num: '03', name: 'Funnels & Bookings', desc: 'High-converting consult flows, tracking, and reminder automation live.' },
  { num: '04', name: 'Retention', desc: 'Membership, recall, and review programs running every month.' },
];

const STATS: ResultStat[] = [
  { num: (<>4.5<em>×</em></>), label: 'Average ROAS' },
  { num: (<>+180<em>%</em></>), label: 'Qualified leads' },
  { num: (<>−40<em>%</em></>), label: 'Cost per booking' },
  { num: (<>$3.8M<em>+</em></>), label: 'Annual revenue lift' },
];

const MainCard = () => (
  <>
    <div className="sv-h3d-bar">
      <SparkleIcon />
      Bookings · Q4 2026
    </div>
    <div className="sv-h3d-pack-tag">Funnel performance</div>
    <div className="sv-h3d-bars">
      <div className="sv-h3d-bar-col" style={{ height: '40%' }} />
      <div className="sv-h3d-bar-col tan" style={{ height: '62%' }} />
      <div className="sv-h3d-bar-col" style={{ height: '70%' }} />
      <div className="sv-h3d-bar-col sage" style={{ height: '85%' }} />
      <div className="sv-h3d-bar-col" style={{ height: '88%' }} />
      <div className="sv-h3d-bar-col" style={{ height: '96%' }} />
    </div>
    <div className="sv-h3d-stat">
      <span className="sv-h3d-stat-label">Consults booked</span>
      <span className="sv-h3d-stat-val up">+184</span>
    </div>
    <div className="sv-h3d-stat">
      <span className="sv-h3d-stat-label">Cost / consult</span>
      <span className="sv-h3d-stat-val">$36.20</span>
    </div>
    <div className="sv-h3d-stat">
      <span className="sv-h3d-stat-label">ROAS</span>
      <span className="sv-h3d-stat-val up">4.5×</span>
    </div>
  </>
);

const INDUSTRY_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'MedSpas & Wellness Brands — Marketing',
  serviceType: 'Healthcare Marketing',
  audience: 'MedSpas, aesthetic clinics, IV therapy, wellness brands',
};

const MedSpas = () => {
  return (
    <>
      <ServiceHero
        crumbRoot={{ label: 'Industries', href: '/industries' }}
        crumb="MedSpas & Wellness"
        title={<>Aesthetic patients, <em>on demand.</em></>}
        lede="High-volume social, Meta campaigns, and conversion-engineered websites built for elective and aesthetic services."
        metric={{ icon: <SparkleIcon />, num: (<>4.5<em>×</em></>), label: 'Average ROAS' }}
        keyword={<>"medspa near me" · CTR 14%</>}
        rankBadge={{ num: (<>+180<em>%</em></>), label: 'Qualified leads' }}
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

export default MedSpas;
