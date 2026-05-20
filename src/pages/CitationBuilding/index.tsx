import { Link } from 'react-router-dom';
import Breadcrumb from '../../components/Breadcrumb';
import heroImg from '../../assets/Local Search.png';
import closingImg from '../../assets/ouradvanbtage.png';

/* ============================================================
   CITATION BUILDING — Local-SEO authority page.
   Sage tone, "one signature across every directory" metaphor.
   Tiered authority groups (Anchor → Vertical → General),
   numbered failure modes, three-step working programme.
   ============================================================ */

const COLORS = {
  navy:   '#1A2438',
  body:   '#4A5568',
  muted:  '#718096',
  sage:   '#5A8F5A',
  sageSoft: 'rgba(143, 188, 143, 0.18)',
  tan:    '#B38B6D',
  tanSoft: 'rgba(179, 139, 109, 0.16)',
  ctaBlue: '#576DB5',
  mint:   '#EBF4DD',
};

const STATS = [
  { v: '47+',   l: 'Directories synced'  },
  { v: 'Monthly', l: 'NAP audit cadence' },
  { v: '< 48 hr', l: 'Drift detection'   },
];

interface FailureMode {
  n: string;
  title: string;
  body: string;
  badge: string;
  badgeBg: string;
  badgeColor: string;
}

const FAILURE_MODES: FailureMode[] = [
  {
    n: '01',
    title: 'Ranking dilution',
    body:
      'Search engines treat inconsistent NAP records as separate entities, splitting the authority of a single practice across phantom listings.',
    badge: 'Authority leak',
    badgeBg: 'rgba(212, 175, 124, 0.16)',
    badgeColor: '#8B6B4C',
  },
  {
    n: '02',
    title: 'Patient leakage',
    body:
      'A wrong suite number on three directories sends one in twelve new patients to the wrong door, then routes their review to the wrong listing.',
    badge: 'Bookings lost',
    badgeBg: 'rgba(220, 70, 70, 0.12)',
    badgeColor: '#B33A2B',
  },
  {
    n: '03',
    title: 'Compounding drift',
    body:
      'Without monthly verification, directories overwrite each other through automated data feeds. The drift gets worse, not better, with time.',
    badge: 'Time bomb',
    badgeBg: 'rgba(143, 188, 143, 0.20)',
    badgeColor: '#3A6B3A',
  },
];

interface TierGroup {
  num: string;
  label: string;
  tagline: string;
  entries: { name: string; note: string }[];
}

const TIERS: TierGroup[] = [
  {
    num: '01',
    label: 'Anchor',
    tagline: 'The three records the algorithm trusts most.',
    entries: [
      { name: 'Google Business Profile', note: 'Single highest-weight signal for the Local Pack.' },
      { name: 'Apple Maps Connect',      note: 'Default discovery on iPhone, increasingly tied to Siri intent.' },
      { name: 'Bing Places',             note: 'Powers Cortana, Duck Duck Go and Microsoft 365 surfaces.' },
    ],
  },
  {
    num: '02',
    label: 'Vertical',
    tagline: 'Healthcare-specific surfaces patients defer to.',
    entries: [
      { name: 'Healthgrades', note: 'Top branded SERP result for most clinician name queries.' },
      { name: 'Vitals',       note: 'Insurance-led patients defer to it for second opinions.' },
      { name: 'Zocdoc',       note: 'Conversion-stage; appears on booking-intent searches.' },
    ],
  },
  {
    num: '03',
    label: 'General',
    tagline: 'Broad index sources that round out the citation graph.',
    entries: [
      { name: 'Yelp',       note: 'Skews older cohorts; still indexed prominently.' },
      { name: 'Foursquare', note: 'Powers map embeds across third-party apps.' },
    ],
  },
];

const StepIconAudit = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="11" cy="11" r="7" />
    <path d="M16 16l5 5" />
    <path d="M8 11h6M11 8v6" />
  </svg>
);
const StepIconConsolidate = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M4 6h6M14 6h6" />
    <path d="M4 18h6M14 18h6" />
    <path d="M12 6v12" />
    <circle cx="12" cy="12" r="2" />
  </svg>
);
const StepIconMonitor = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </svg>
);

interface Step {
  k: string;
  d: string;
  icon: React.ReactNode;
  out: string;
}

const PROCESS: Step[] = [
  { k: 'Audit',       d: 'Forensic sweep of 60+ directories. Every variant, duplicate, and dormant listing flagged with a tier-weighted impact score.', icon: <StepIconAudit />,       out: 'Remediation register' },
  { k: 'Consolidate', d: 'Duplicates merged, dormant entries claimed or suppressed, NAP signature standardised across the active set.',                 icon: <StepIconConsolidate />, out: 'Canonical NAP record' },
  { k: 'Monitor',     d: 'Monthly drift detection with a 48-hour response SLA on any unauthorised change to a Tier 1 or Tier 2 listing.',                icon: <StepIconMonitor />,     out: 'Live drift dashboard' },
];

/* ─── HERO ─── */
const Hero = () => (
  <section className="ph-page-head">
    <div className="container-shell">
      <Breadcrumb current="Citation Building" />
      <div className="mt-8 grid lg:grid-cols-12 gap-x-12 gap-y-12 items-end">
        <div className="lg:col-span-7">
          <div className="inline-flex items-center gap-3 px-3 py-1.5 rounded-full" style={{ background: COLORS.mint, color: COLORS.navy }}>
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: COLORS.sage }} />
            <span className="font-mono text-[11.5px] tracking-[0.22em] uppercase font-bold">Local SEO · Authority Signals</span>
          </div>
          <h1 className="mt-7 font-extrabold leading-[1.00] tracking-[-0.036em] text-[clamp(40px,5.8vw,76px)] max-w-[14ch]" style={{ color: COLORS.navy }}>
            One{' '}
            <span className="bg-clip-text text-transparent" style={{ backgroundImage: `linear-gradient(90deg, ${COLORS.sage}, ${COLORS.tan})` }}>
              signature
            </span>
            . Every directory that ranks.
          </h1>
          <p className="mt-7 text-[18px] leading-[1.65] max-w-[56ch]" style={{ color: COLORS.body }}>
            A citation programme that consolidates your name, address and phone into a
            single authoritative record — then keeps it that way across the directories
            search engines actually weight.
          </p>
        </div>
        <div className="lg:col-span-5">
          <div className="relative rounded-[28px] overflow-hidden border aspect-[5/4] shadow-[0_28px_60px_-32px_rgba(45,55,72,0.32)]" style={{ borderColor: 'rgba(26, 36, 56, 0.10)' }}>
            <img src={heroImg} alt="" className="absolute inset-0 w-full h-full object-cover" loading="eager" decoding="async" />
            <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(180deg, rgba(26, 36, 56, 0) 50%, rgba(26, 36, 56, 0.50) 100%)' }} />
            <div className="absolute bottom-5 left-5 right-5">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full backdrop-blur-md" style={{ background: 'rgba(255, 255, 255, 0.20)', border: '1px solid rgba(255, 255, 255, 0.30)' }}>
                <span className="w-1.5 h-1.5 rounded-full bg-white" />
                <span className="font-mono text-[11px] tracking-[0.18em] uppercase text-white font-bold">Live · 47 directories</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div className="mt-12 lg:mt-16 grid sm:grid-cols-3 gap-[1px] rounded-[18px] overflow-hidden border" style={{ borderColor: 'rgba(26, 36, 56, 0.10)', background: 'rgba(26, 36, 56, 0.08)' }}>
        {STATS.map((s) => (
          <div key={s.l} className="bg-white p-6 sm:p-8 flex flex-col gap-2">
            <span className="font-extrabold text-[clamp(28px,3vw,40px)] leading-[1] tracking-[-0.024em]" style={{ color: COLORS.navy }}>{s.v}</span>
            <span className="text-[12px] uppercase tracking-[0.18em] font-bold" style={{ color: COLORS.muted }}>{s.l}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ─── SECTION HEADER (shared) ─── */
const SectionHeader = ({ no, eyebrow, title, kicker }: { no: string; eyebrow: string; title: React.ReactNode; kicker?: string }) => (
  <header className="mb-12 lg:mb-16 grid lg:grid-cols-12 gap-x-12 gap-y-4">
    <div className="lg:col-span-7">
      <div className="flex items-center gap-3 font-mono text-[12px] tracking-[0.22em] uppercase" style={{ color: COLORS.tan }}>
        <span className="font-bold">{no}</span>
        <span className="h-px w-12" style={{ background: COLORS.tan, opacity: 0.5 }} />
        <span className="font-bold">{eyebrow}</span>
      </div>
      <h2 className="mt-5 font-extrabold tracking-[-0.024em] leading-[1.08] text-[clamp(28px,3.6vw,46px)]" style={{ color: COLORS.navy }}>
        {title}
      </h2>
    </div>
    {kicker && (
      <p className="lg:col-span-5 text-[15.5px] leading-[1.7] max-w-[44ch] self-end" style={{ color: COLORS.body }}>
        {kicker}
      </p>
    )}
  </header>
);

/* ─── SECTION 01: Why citation hygiene matters ─── */
const FailureModes = () => (
  <section className="border-t" style={{ borderColor: 'rgba(26, 36, 56, 0.08)' }}>
    <div className="container-shell py-[clamp(72px,9vw,128px)]">
      <SectionHeader
        no="01"
        eyebrow="The quiet failure modes"
        title={<>Three ways inconsistent citations cost you patients.</>}
        kicker="Failure modes that compound silently — until they become an acquisition problem you can no longer ignore."
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
        {FAILURE_MODES.map((f) => (
          <article
            key={f.n}
            className="bg-white rounded-[20px] p-7 sm:p-8 border flex flex-col gap-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_48px_-28px_rgba(45,55,72,0.22)]"
            style={{ borderColor: 'rgba(26, 36, 56, 0.10)' }}
          >
            <div className="flex items-center justify-between">
              <span className="font-mono text-[12px] tracking-[0.18em] font-bold" style={{ color: COLORS.muted }}>{f.n}</span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10.5px] uppercase tracking-[0.16em] font-bold" style={{ background: f.badgeBg, color: f.badgeColor }}>
                <span className="w-1.5 h-1.5 rounded-full" style={{ background: f.badgeColor }} />
                {f.badge}
              </span>
            </div>
            <h3 className="text-[24px] font-extrabold tracking-[-0.02em] leading-[1.1]" style={{ color: COLORS.navy }}>{f.title}</h3>
            <p className="text-[14.5px] leading-[1.65]" style={{ color: COLORS.body }}>{f.body}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
);

/* ─── SECTION 02: The directories (tiered groups) ─── */
const Directories = () => (
  <section className="border-t" style={{ borderColor: 'rgba(26, 36, 56, 0.08)', background: '#FAFAF8' }}>
    <div className="container-shell py-[clamp(72px,9vw,128px)]">
      <SectionHeader
        no="02"
        eyebrow="Coverage map"
        title={<>The directories we work, ranked by ranking weight.</>}
        kicker="Tiers are weighted by current ranking influence — not vendor pricing. Anchor first. Always."
      />

      <div className="space-y-6 lg:space-y-7">
        {TIERS.map((tier) => (
          <article
            key={tier.num}
            className="bg-white rounded-[24px] border overflow-hidden grid lg:grid-cols-[280px_1fr]"
            style={{ borderColor: 'rgba(26, 36, 56, 0.10)' }}
          >
            <div className="p-7 lg:p-8 border-b lg:border-b-0 lg:border-r flex flex-col gap-4 justify-between" style={{ background: COLORS.mint, borderColor: 'rgba(26, 36, 56, 0.10)' }}>
              <div>
                <div className="font-mono text-[11.5px] tracking-[0.22em] uppercase font-bold" style={{ color: COLORS.sage }}>Tier {tier.num}</div>
                <h3 className="mt-2 text-[28px] font-extrabold tracking-[-0.022em] leading-none" style={{ color: COLORS.navy }}>
                  {tier.label}
                </h3>
              </div>
              <p className="text-[13.5px] leading-[1.55]" style={{ color: COLORS.body }}>{tier.tagline}</p>
              <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] font-bold" style={{ color: COLORS.sage }}>
                <span className="w-1.5 h-1.5 rounded-full" style={{ background: COLORS.sage }} />
                {tier.entries.length} {tier.entries.length === 1 ? 'directory' : 'directories'}
              </div>
            </div>
            <div className="p-2 sm:p-3 grid sm:grid-cols-3 gap-2">
              {tier.entries.map((e) => (
                <div key={e.name} className="p-5 rounded-[16px] flex flex-col gap-3" style={{ background: '#F8F9FA' }}>
                  <h4 className="text-[16px] font-bold tracking-[-0.012em] leading-[1.2]" style={{ color: COLORS.navy }}>{e.name}</h4>
                  <p className="text-[13px] leading-[1.55]" style={{ color: COLORS.body }}>{e.note}</p>
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

/* ─── SECTION 03: How we run the programme ─── */
const Process = () => (
  <section className="border-t" style={{ borderColor: 'rgba(26, 36, 56, 0.08)' }}>
    <div className="container-shell py-[clamp(72px,9vw,128px)]">
      <SectionHeader
        no="03"
        eyebrow="The working programme"
        title={<>Audit → Consolidate → Monitor.</>}
        kicker="Three disciplines, one loop. Each stage produces a working deliverable your team owns."
      />

      <div className="relative grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
        {/* Connecting line (desktop only) */}
        <svg className="hidden lg:block absolute top-[88px] left-0 right-0 w-full h-[2px] pointer-events-none" viewBox="0 0 1200 2" preserveAspectRatio="none" aria-hidden="true">
          <line x1="80" y1="1" x2="1120" y2="1" stroke={COLORS.sage} strokeOpacity="0.4" strokeWidth="2" strokeDasharray="4 8" />
        </svg>

        {PROCESS.map((s, i) => (
          <article key={s.k} className="relative bg-white rounded-[20px] border p-7 flex flex-col gap-4" style={{ borderColor: 'rgba(26, 36, 56, 0.10)' }}>
            <div className="flex items-center gap-4">
              <span className="inline-grid place-items-center w-14 h-14 rounded-full text-white relative z-10" style={{ background: COLORS.sage, boxShadow: '0 12px 32px -12px rgba(90, 143, 90, 0.6)' }}>
                <span className="w-7 h-7 block">{s.icon}</span>
              </span>
              <span className="font-mono text-[13px] tracking-[0.16em] font-bold" style={{ color: COLORS.sage }}>0{i + 1}</span>
            </div>
            <h3 className="text-[26px] font-extrabold tracking-[-0.02em] leading-[1.08]" style={{ color: COLORS.navy }}>{s.k}</h3>
            <p className="text-[14px] leading-[1.6]" style={{ color: COLORS.body }}>{s.d}</p>
            <div className="mt-2 pt-4 border-t inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] font-bold" style={{ borderColor: 'rgba(26, 36, 56, 0.08)', color: COLORS.muted }}>
              <span>Output</span>
              <span className="font-bold" style={{ color: COLORS.navy }}>· {s.out}</span>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

/* ─── SECTION 04: Closing CTA ─── */
const Closing = () => (
  <section className="border-t" style={{ borderColor: 'rgba(26, 36, 56, 0.08)' }}>
    <div className="container-shell py-[clamp(72px,9vw,128px)]">
      <article className="relative rounded-[28px] overflow-hidden grid lg:grid-cols-[1.3fr_1fr]" style={{ background: 'linear-gradient(90deg, #DDD9E5 0%, #DDE3DC 50%, #EFE7CD 100%)' }}>
        <div className="p-10 sm:p-14 lg:p-16 flex flex-col justify-center">
          <div className="font-mono text-[12px] tracking-[0.24em] uppercase font-bold" style={{ color: COLORS.tan }}>
            Two-week audit · Fixed fee
          </div>
          <h3 className="mt-5 font-extrabold leading-[1.04] tracking-[-0.028em] text-[clamp(30px,4vw,52px)] max-w-[22ch]" style={{ color: COLORS.navy }}>
            Quantify what your citation footprint is costing you in patients.
          </h3>
          <p className="mt-6 text-[16px] leading-[1.65] max-w-[58ch]" style={{ color: COLORS.body }}>
            Yours to keep. The audit returns a ranked remediation register: every duplicate,
            every misspelling, every dormant listing — scored against tier weight. A working
            document, not a slide deck.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-5">
            <Link to="/contact" className="btn-primary">Request the audit →</Link>
            <Link to="/services/seo-local-search" className="text-[14px] font-semibold underline-offset-4 hover:underline" style={{ color: COLORS.navy }}>
              View the SEO programme
            </Link>
          </div>
        </div>
        <div className="relative min-h-[260px] lg:min-h-[440px] overflow-hidden">
          <img src={closingImg} alt="" loading="lazy" decoding="async" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(90deg, rgba(221, 227, 220, 0.45) 0%, rgba(221, 227, 220, 0) 30%, rgba(239, 231, 205, 0) 100%)' }} />
        </div>
      </article>
    </div>
  </section>
);

const CitationBuilding = () => (
  <>
    <Hero />
    <FailureModes />
    <Directories />
    <Process />
    <Closing />
  </>
);

export default CitationBuilding;
