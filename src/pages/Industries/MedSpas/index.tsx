import IndustryHero from '../../../components/industry/IndustryHero';
import Specialties from '../../../components/industry/Specialties';
import Playbook from '../../../components/industry/Playbook';
import Numbers from '../../../components/industry/Numbers';
import IndustryCTA from '../../../components/industry/IndustryCTA';
import type { QuickStat } from '../../../components/industry/IndustryHero';
import type { SpecialtyRow } from '../../../components/industry/Specialties';
import type { PlayStep } from '../../../components/industry/Playbook';
import type { BigNumber } from '../../../components/industry/Numbers';

const Illustration = (
  <svg viewBox="0 0 600 750" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
    <defs>
      <linearGradient id="msBg" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#B38B6D" />
        <stop offset="60%" stopColor="#8B6F55" />
        <stop offset="100%" stopColor="#2D3748" />
      </linearGradient>
      <radialGradient id="msHalo" cx="50%" cy="35%" r="60%">
        <stop offset="0%" stopColor="#fff" stopOpacity=".22" />
        <stop offset="100%" stopColor="#fff" stopOpacity="0" />
      </radialGradient>
    </defs>
    <rect width="600" height="750" fill="url(#msBg)" />
    <rect width="600" height="750" fill="url(#msHalo)" />
    <g stroke="rgba(255,255,255,.06)" strokeWidth="1">
      <line x1="0" y1="180" x2="600" y2="180" />
      <line x1="0" y1="380" x2="600" y2="380" />
      <line x1="0" y1="580" x2="600" y2="580" />
      <line x1="200" y1="0" x2="200" y2="750" />
      <line x1="400" y1="0" x2="400" y2="750" />
    </g>
    <g transform="translate(300, 380)">
      <circle r="180" fill="none" stroke="rgba(255,255,255,.20)" strokeWidth="1" strokeDasharray="4 8" />
      <circle r="130" fill="none" stroke="rgba(255,255,255,.30)" strokeWidth="1" strokeDasharray="4 8" />
      <circle r="80" fill="rgba(255,255,255,.12)" stroke="rgba(255,255,255,.45)" strokeWidth="1.2" />
      <circle r="60" fill="none" stroke="rgba(255,255,255,.65)" strokeWidth="1" />
      <g>
        <path d="M0 -50 Q 30 -10 0 30 Q -30 -10 0 -50 Z" fill="rgba(143,188,143,.55)" transform="rotate(0)" />
        <path d="M0 -50 Q 30 -10 0 30 Q -30 -10 0 -50 Z" fill="rgba(143,188,143,.55)" transform="rotate(72)" />
        <path d="M0 -50 Q 30 -10 0 30 Q -30 -10 0 -50 Z" fill="rgba(143,188,143,.55)" transform="rotate(144)" />
        <path d="M0 -50 Q 30 -10 0 30 Q -30 -10 0 -50 Z" fill="rgba(143,188,143,.55)" transform="rotate(216)" />
        <path d="M0 -50 Q 30 -10 0 30 Q -30 -10 0 -50 Z" fill="rgba(143,188,143,.55)" transform="rotate(288)" />
        <circle r="8" fill="#fff" />
      </g>
    </g>
    <g fill="#fff" opacity=".7">
      <path d="M80 110 L 84 120 L 94 124 L 84 128 L 80 138 L 76 128 L 66 124 L 76 120 Z" />
      <path d="M520 90 L 523 97 L 530 100 L 523 103 L 520 110 L 517 103 L 510 100 L 517 97 Z" opacity=".7" />
      <path d="M540 580 L 544 590 L 554 594 L 544 598 L 540 608 L 536 598 L 526 594 L 536 590 Z" opacity=".5" />
    </g>
    <text x="36" y="36" fontFamily="Plus Jakarta Sans, sans-serif" fontSize="10" fontWeight="700" fill="rgba(255,255,255,.65)" letterSpacing="3">FIG. B · AESTHETIC</text>
  </svg>
);

const QUICK_STATS: QuickStat[] = [
  { num: (<>4.5<em>×</em></>), label: 'Average ROAS' },
  { num: (<>+180<em>%</em></>), label: 'Qualified leads' },
  { num: (<>−40<em>%</em></>), label: 'Cost per booking' },
];

const SPECIALTIES: SpecialtyRow[] = [
  { name: 'MedSpa', desc: 'Membership programs, social-led acquisition, and consult-to-treatment funnels.' },
  { name: 'Aesthetics', desc: 'Procedure-page SEO, before/after galleries, and reputation systems.' },
  { name: 'Injectables', desc: 'High-frequency Meta creative tied to seasonal demand and add-on offers.' },
  { name: 'IV therapy', desc: 'Location-based campaigns with package & membership bundles.' },
  { name: 'Wellness clinics', desc: 'Longevity and concierge-style retention sequences for high-LTV members.' },
  { name: 'Boutique fitness + recovery', desc: 'Social-first acquisition and class-booking funnels.' },
];

const STEPS: PlayStep[] = [
  { name: 'Brand & funnel audit', body: 'Brand, creative, audience, and booking funnel reviewed against your service mix and goal CPL.' },
  { name: 'Audience & creative system', body: 'Custom audience model and premium creative library built for your treatments and price point.' },
  { name: 'Consult-to-treatment flow', body: 'High-converting consult forms, tracking, and reminder automation deployed and tuned weekly.' },
  { name: 'Membership & retention', body: 'Email + SMS sequences for upgrades, recall, referrals, and review collection.' },
];

const STATS: BigNumber[] = [
  { num: (<>4.5<em>×</em></>), label: 'AVERAGE ROAS', caption: 'Return on ad spend across multi-channel campaigns in the first 90 days.' },
  { num: (<>+180<em>%</em></>), label: 'QUALIFIED LEADS', caption: 'Lift in pre-qualified consult requests after audience and creative rework.' },
  { num: (<>−40<em>%</em></>), label: 'COST PER BOOKING', caption: 'Reduction in cost per consult through funnel and bid optimization.' },
  { num: (<>$3.8M<em>+</em></>), label: 'ANNUAL REVENUE LIFT', caption: 'Typical added annual revenue across the engagement portfolio.' },
];

const SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'MedSpas & Wellness Brands — Marketing',
  serviceType: 'Healthcare Marketing',
  audience: 'MedSpas, aesthetic clinics, IV therapy, wellness brands',
};

const MedSpas = () => {
  return (
    <>
      <IndustryHero
        tag="Aesthetic"
        title={<>Aesthetic patients, <em>on demand.</em></>}
        lede="High-volume social, Meta campaigns, and conversion-engineered websites built for elective and aesthetic services."
        illustration={Illustration}
        quickStats={QUICK_STATS}
      />
      <Specialties rows={SPECIALTIES} />
      <Playbook steps={STEPS} />
      <Numbers stats={STATS} />
      <IndustryCTA
        tag="Talk to us"
        title={<>Ready to fill your consult calendar?</>}
        body="A 30-minute call. We'll show you what your funnel looks like today and the closest case study from this library — whether you sign with us or not."
      />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />
    </>
  );
};

export default MedSpas;
