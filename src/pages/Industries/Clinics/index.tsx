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
      <linearGradient id="cliBg" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#576DB5" />
        <stop offset="60%" stopColor="#3A4DA0" />
        <stop offset="100%" stopColor="#2D3748" />
      </linearGradient>
      <radialGradient id="cliHalo" cx="50%" cy="35%" r="60%">
        <stop offset="0%" stopColor="#8FBC8F" stopOpacity=".30" />
        <stop offset="100%" stopColor="#8FBC8F" stopOpacity="0" />
      </radialGradient>
      <linearGradient id="cliGlass" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#fff" stopOpacity=".25" />
        <stop offset="100%" stopColor="#fff" stopOpacity=".05" />
      </linearGradient>
    </defs>
    <rect width="600" height="750" fill="url(#cliBg)" />
    <rect width="600" height="750" fill="url(#cliHalo)" />
    <g stroke="rgba(255,255,255,.05)" strokeWidth="1">
      <line x1="0" y1="120" x2="600" y2="120" />
      <line x1="0" y1="240" x2="600" y2="240" />
      <line x1="0" y1="360" x2="600" y2="360" />
      <line x1="0" y1="480" x2="600" y2="480" />
      <line x1="0" y1="600" x2="600" y2="600" />
      <line x1="120" y1="0" x2="120" y2="750" />
      <line x1="240" y1="0" x2="240" y2="750" />
      <line x1="360" y1="0" x2="360" y2="750" />
      <line x1="480" y1="0" x2="480" y2="750" />
    </g>
    <g transform="translate(300, 380)">
      <polygon points="-20,-100 60,-70 60,160 -20,130" fill="url(#cliGlass)" stroke="rgba(143,188,143,.45)" strokeWidth="1.2" />
      <polygon points="-20,-100 -100,-130 -100,100 -20,130" fill="rgba(255,255,255,.10)" stroke="rgba(143,188,143,.35)" strokeWidth="1" />
      <g fill="rgba(143,188,143,.35)">
        <rect x="-90" y="-118" width="60" height="6" rx="1" />
        <rect x="-90" y="-100" width="60" height="6" rx="1" />
        <rect x="-90" y="-82" width="60" height="6" rx="1" />
        <rect x="-90" y="-64" width="60" height="6" rx="1" />
        <rect x="-90" y="-46" width="60" height="6" rx="1" />
        <rect x="-90" y="-28" width="60" height="6" rx="1" />
        <rect x="-90" y="-10" width="60" height="6" rx="1" />
        <rect x="-90" y="8" width="60" height="6" rx="1" />
        <rect x="-90" y="26" width="60" height="6" rx="1" />
        <rect x="-90" y="44" width="60" height="6" rx="1" />
        <rect x="-90" y="62" width="60" height="6" rx="1" />
        <rect x="-90" y="80" width="60" height="6" rx="1" />
      </g>
      <g transform="translate(0, 0)">
        <rect x="14" y="-40" width="22" height="80" rx="2" fill="#8FBC8F" />
        <rect x="-8" y="-18" width="66" height="22" rx="2" fill="#8FBC8F" />
      </g>
      <polygon points="-50,80 -20,90 -20,130 -50,118" fill="rgba(143,188,143,.25)" stroke="rgba(143,188,143,.55)" strokeWidth="1" />
    </g>
    <g fill="#B38B6D" opacity=".55">
      <path d="M50 80 h10 v3 h-10 z M54 76 h2 v11 h-2 z" />
      <path d="M520 100 h10 v3 h-10 z M524 96 h2 v11 h-2 z" />
      <path d="M40 660 h10 v3 h-10 z M44 656 h2 v11 h-2 z" />
    </g>
    <text x="36" y="36" fontFamily="Plus Jakarta Sans, sans-serif" fontSize="10" fontWeight="700" fill="rgba(255,255,255,.55)" letterSpacing="3">FIG. A · CLINICAL</text>
  </svg>
);

const QUICK_STATS: QuickStat[] = [
  { num: (<>+85<em>%</em></>), label: 'New patient inquiries' },
  { num: (<>4<em>×</em></>), label: 'Provider listings ranked' },
  { num: (<>92<em>%</em></>), label: 'Retention rate' },
];

const SPECIALTIES: SpecialtyRow[] = [
  { name: 'Family practice', desc: 'Local search and recall systems for general primary-care offices.' },
  { name: 'Cardiology', desc: 'Specialist-referral pages, condition deep-dives, and reputation systems.' },
  { name: 'Dental', desc: 'Multi-location GBP, treatment SEO, and review automation.' },
  { name: 'Pediatrics', desc: 'Family-tailored content, vaccine schedules, and parent-targeted ads.' },
  { name: 'Dermatology', desc: 'Procedure-page SEO, before/after libraries, and elective lead capture.' },
  { name: 'Multi-specialty groups', desc: 'Provider directories, hub-and-spoke SEO, and unified analytics.' },
];

const STEPS: PlayStep[] = [
  { name: 'Provider & location audit', body: 'Every site, every listing, every clinician page reviewed against demand in the catchment area.' },
  { name: 'Foundation reset', body: 'GBP rebuild, schema, provider bios, and insurance/service pages shipped first.' },
  { name: 'Acquisition stack', body: 'Search + paid layered by intent, with per-location attribution to the booking.' },
  { name: 'Retention engine', body: 'Recall, referral, and review programs running quietly in the background every month.' },
];

const STATS: BigNumber[] = [
  { num: (<>+85<em>%</em></>), label: 'NEW INQUIRIES', caption: 'YoY lift across the first six months of engagement.' },
  { num: (<>$1.2M<em>+</em></>), label: 'ADDED REVENUE', caption: 'Average added annual revenue per multi-location group.' },
  { num: (<>4<em>×</em></>), label: 'LISTINGS RANKED', caption: 'Top-3 Map Pack across the four largest local terms.' },
  { num: (<>92<em>%</em></>), label: 'RECALL RATE', caption: 'Automated recall/referral programs running month over month.' },
];

const SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Clinics & Multi-Specialty Practices — Marketing',
  serviceType: 'Healthcare Marketing',
  audience: 'Family practices, multi-specialty groups, clinical networks',
};

const Clinics = () => {
  return (
    <>
      <IndustryHero
        tag="Clinical"
        title={<>Patient flow for clinics, <em>engineered.</em></>}
        lede="From single-location family practices to multi-location specialty networks — search, paid, and retention systems built for clinical reality."
        illustration={Illustration}
        quickStats={QUICK_STATS}
      />
      <Specialties rows={SPECIALTIES} />
      <Playbook steps={STEPS} />
      <Numbers stats={STATS} />
      <IndustryCTA
        tag="Talk to us"
        title={<>Ready to scale the clinic, the right way?</>}
        body="A 30-minute call. We audit your current setup and share the closest case study from this library — whether you sign with us or not."
      />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />
    </>
  );
};

export default Clinics;
