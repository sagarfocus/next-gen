import ServiceHero from '../../../components/service/ServiceHero';
import WhatWeDo from '../../../components/service/WhatWeDo';
import HowItWorks from '../../../components/service/HowItWorks';
import Results from '../../../components/service/Results';
import ServiceCTA from '../../../components/service/ServiceCTA';
import type { DoCard } from '../../../components/service/WhatWeDo';
import type { HowStep } from '../../../components/service/HowItWorks';
import type { ResultStat } from '../../../components/service/Results';

const PulseIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round">
    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
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
const ShieldIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);
const ClockIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);
const PinIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);
const FileIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
  </svg>
);
const NetworkIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round">
    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
  </svg>
);

const DO_CARDS: DoCard[] = [
  { name: 'Emergency Visibility', desc: 'Top-3 Map Pack and high-intent search visibility for trauma and acute conditions.', icon: <PulseIcon /> },
  { name: 'HIPAA-Compliant Campaigns', desc: 'Privacy-preserving conversion tracking and audience modeling, end to end.', icon: <ShieldIcon /> },
  { name: 'Specialist Referral Programs', desc: 'PCP-to-specialist referral pages and partner directory placement.', icon: <NetworkIcon /> },
  { name: 'Geo-Targeted Acquisition', desc: 'Hyper-local campaigns built around catchment area and competitor overflow.', icon: <PinIcon /> },
  { name: 'Crisis Response', desc: 'Rapid-deploy creative for surge events, closures, and community advisories.', icon: <ClockIcon /> },
  { name: 'Compliance Reporting', desc: 'Audit-ready dashboards built around HIPAA, marketing rule, and clinical governance.', icon: <FileIcon /> },
];

const STEPS: HowStep[] = [
  { num: '01', name: 'Audit', desc: 'Specialty volume, payer mix, compliance posture, and visibility reviewed.' },
  { num: '02', name: 'Compliance Framework', desc: 'HIPAA-safe tracking, ad copy review, and consent flows shipped first.' },
  { num: '03', name: 'Visibility & Capture', desc: 'Local pack dominance, ER landing pages, and specialty SEO live.' },
  { num: '04', name: 'Optimization', desc: 'Weekly bid tuning, monthly retro, quarterly clinical governance review.' },
];

const STATS: ResultStat[] = [
  { num: (<>+120<em>%</em></>), label: 'Emergency room visits' },
  { num: (<>4.2<em>×</em></>), label: 'Emergency lead growth' },
  { num: (<>−35<em>%</em></>), label: 'Cost per acquisition' },
  { num: (<>99.8<em>%</em></>), label: 'Compliance posture' },
];

const MainCard = () => (
  <>
    <div className="sv-h3d-bar">
      <PulseIcon />
      Live Acquisition · Q4 2026
    </div>
    <div className="sv-h3d-pack-tag">Surge response</div>
    <div className="sv-h3d-bars">
      <div className="sv-h3d-bar-col" style={{ height: '32%' }} />
      <div className="sv-h3d-bar-col tan" style={{ height: '50%' }} />
      <div className="sv-h3d-bar-col" style={{ height: '68%' }} />
      <div className="sv-h3d-bar-col sage" style={{ height: '78%' }} />
      <div className="sv-h3d-bar-col" style={{ height: '85%' }} />
      <div className="sv-h3d-bar-col" style={{ height: '94%' }} />
    </div>
    <div className="sv-h3d-stat">
      <span className="sv-h3d-stat-label">ER visits</span>
      <span className="sv-h3d-stat-val up">+247</span>
    </div>
    <div className="sv-h3d-stat">
      <span className="sv-h3d-stat-label">CPA</span>
      <span className="sv-h3d-stat-val">$31.80</span>
    </div>
    <div className="sv-h3d-stat">
      <span className="sv-h3d-stat-label">Compliance</span>
      <span className="sv-h3d-stat-val up">99.8%</span>
    </div>
  </>
);

const INDUSTRY_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Specialty & Emergency Care — Marketing',
  serviceType: 'Healthcare Marketing',
  audience: 'ERs, urgent care, specialty practices, high-acuity providers',
};

const SpecialtyEmergency = () => {
  return (
    <>
      <ServiceHero
        crumbRoot={{ label: 'Industries', href: '/industries' }}
        crumb="Specialty & Emergency"
        title={<>High-acuity acquisition for <em>specialty care.</em></>}
        lede="Compliance-aware, urgency-first marketing built for ERs, urgent care, and specialty practices that need scale and speed."
        metric={{ icon: <PulseIcon />, num: (<>+120<em>%</em></>), label: 'ER visits' }}
        keyword={<>"emergency room near me" · CTR 22%</>}
        rankBadge={{ num: (<>4.2<em>×</em></>), label: 'Emergency leads' }}
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

export default SpecialtyEmergency;
