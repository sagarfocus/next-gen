import { Link } from 'react-router-dom';
import Breadcrumb from '../../components/Breadcrumb';

const FACTS = [
  { label: 'Directories synced',  value: '47' },
  { label: 'NAP audit cadence',   value: 'Monthly' },
  { label: 'Drift detection',     value: '< 48 hrs' },
];

const DIRECTORIES = [
  { tier: 'Anchor',    weight: '01', name: 'Google Business Profile', note: 'Single highest-weight signal for the Local Pack.' },
  { tier: 'Anchor',    weight: '02', name: 'Apple Maps Connect',      note: 'Default discovery on iPhone, increasingly tied to Siri intent.' },
  { tier: 'Anchor',    weight: '03', name: 'Bing Places',             note: 'Powers Cortana, Duck Duck Go, and Microsoft 365 surfaces.' },
  { tier: 'Vertical',  weight: '04', name: 'Healthgrades',            note: 'Top branded SERP result for most clinician name queries.' },
  { tier: 'Vertical',  weight: '05', name: 'Vitals',                  note: 'Insurance-led patients defer to it for second opinions.' },
  { tier: 'Vertical',  weight: '06', name: 'Zocdoc',                  note: 'Conversion-stage; appears on booking-intent searches.' },
  { tier: 'General',   weight: '07', name: 'Yelp',                    note: 'Skews older cohorts; still indexed prominently.' },
  { tier: 'General',   weight: '08', name: 'Foursquare',              note: 'Powers map embeds across third-party apps.' },
];

const PROBLEM = [
  { h: 'Ranking dilution',     d: 'Search engines treat inconsistent NAP records as separate entities, splitting the authority of a single practice across phantom listings.' },
  { h: 'Patient leakage',      d: 'A wrong suite number on three directories sends one in twelve new patients to the wrong door, then routes their review to the wrong listing.' },
  { h: 'Compounding drift',    d: 'Without monthly verification, directories overwrite each other through automated data feeds. The drift gets worse, not better, with time.' },
];

const PROCESS = [
  { k: 'Audit',     d: 'Forensic sweep of 60+ directories. Every variant, duplicate, and dormant listing flagged with a tier-weighted impact score.' },
  { k: 'Consolidate', d: 'Duplicates merged, dormant entries claimed or suppressed, NAP signature standardised across the active set.' },
  { k: 'Monitor',   d: 'Monthly drift detection with a 48-hour response SLA on any unauthorised change to a Tier 1 or Tier 2 listing.' },
];

const Section = ({ no, title, kicker, children }: { no: string; title: string; kicker?: string; children: React.ReactNode }) => (
  <section className="border-t border-line-faint">
    <div className="container-shell py-[clamp(64px,9vw,128px)]">
      <div className="grid lg:grid-cols-12 gap-x-16 gap-y-10">
        <div className="lg:col-span-4">
          <div className="flex items-baseline gap-3">
            <span className="text-line font-mono text-[12px] tracking-[0.2em]">{no}</span>
            <span className="h-px w-12 bg-line" />
          </div>
          <h2 className="mt-5 text-heading text-[clamp(24px,2.2vw,34px)] font-bold tracking-[-0.022em] leading-[1.15]">{title}</h2>
          {kicker && <p className="mt-4 text-muted text-[15px] leading-[1.6] max-w-[38ch]">{kicker}</p>}
        </div>
        <div className="lg:col-span-8">{children}</div>
      </div>
    </div>
  </section>
);

const Hero = () => (
  <section className="ph-page-head">
    <div className="container-shell">
      <Breadcrumb current="Citation Building" />
      <div className="mt-8 grid lg:grid-cols-12 gap-x-16 gap-y-12 items-end">
        <div className="lg:col-span-8">
          <div className="text-line font-mono text-[12px] tracking-[0.24em] uppercase">
            Local SEO · Authority Signals
          </div>
          <h1 className="mt-7 text-heading font-extrabold leading-[1.02] tracking-[-0.036em] text-[clamp(40px,5.4vw,72px)] max-w-[16ch]">
            One signature for your practice. Across every directory that ranks.
          </h1>
          <p className="mt-8 text-body text-[18px] leading-[1.65] max-w-[58ch]">
            A citation programme that consolidates your name, address, and phone into
            a single authoritative record — then keeps it that way across the
            directories search engines actually weight.
          </p>
        </div>
        <div className="lg:col-span-4">
          <div className="border-t-2 border-heading pt-6">
            {FACTS.map((f) => (
              <div key={f.label} className="py-4 border-b border-line-faint flex items-baseline justify-between">
                <span className="text-muted text-[13px] font-medium">{f.label}</span>
                <span className="text-heading text-[20px] font-bold tabular-nums tracking-[-0.01em]">{f.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

const WhyItMatters = () => (
  <Section no="01" title="Why citation hygiene moves rankings" kicker="Three quiet failure modes that compound until they become an acquisition problem.">
    <div className="space-y-10">
      {PROBLEM.map((p, i) => (
        <div key={p.h} className="grid grid-cols-[44px_1fr] gap-x-6">
          <span className="text-line font-mono text-[14px] tracking-[0.16em] pt-1">0{i + 1}</span>
          <div>
            <h3 className="text-heading text-[20px] font-bold tracking-[-0.015em]">{p.h}</h3>
            <p className="mt-3 text-body text-[15.5px] leading-[1.65] max-w-[64ch]">{p.d}</p>
          </div>
        </div>
      ))}
    </div>
  </Section>
);

const Directories = () => (
  <Section no="02" title="The directories we work" kicker="Eight representative entries from the live programme. Tiers are weighted by current ranking influence, not vendor pricing.">
    <div>
      <div className="grid grid-cols-[60px_1.4fr_2fr_120px] gap-x-6 px-1 py-4 border-b-2 border-heading text-[11px] uppercase tracking-[0.2em] font-bold text-muted">
        <span></span>
        <span>Directory</span>
        <span>Why it matters</span>
        <span className="text-right">Tier</span>
      </div>
      {DIRECTORIES.map((d) => (
        <div key={d.name} className="grid grid-cols-[60px_1.4fr_2fr_120px] gap-x-6 px-1 py-5 items-baseline border-b border-line-faint">
          <span className="font-mono text-[13px] text-line tracking-[0.14em]">{d.weight}</span>
          <span className="text-heading font-semibold text-[16px]">{d.name}</span>
          <span className="text-body text-[14px] leading-[1.55]">{d.note}</span>
          <span className="text-right text-[11px] uppercase tracking-[0.18em] font-semibold text-heading">{d.tier}</span>
        </div>
      ))}
    </div>
  </Section>
);

const HowWeWork = () => (
  <Section no="03" title="How we run the programme" kicker="A three-stage discipline. Each stage has a deliverable and a measurement.">
    <ol className="grid sm:grid-cols-3 gap-x-10 gap-y-8">
      {PROCESS.map((s, i) => (
        <li key={s.k} className="border-t-2 border-heading pt-6">
          <div className="font-mono text-line text-[12px] tracking-[0.2em]">0{i + 1}</div>
          <h4 className="mt-4 text-heading text-[24px] font-bold tracking-[-0.018em] leading-none">{s.k}</h4>
          <p className="mt-4 text-body text-[14.5px] leading-[1.65]">{s.d}</p>
        </li>
      ))}
    </ol>
  </Section>
);

const Closing = () => (
  <Section no="04" title="Begin with the audit" kicker="A fixed-fee, two-week diagnostic. The audit is independent — you keep the findings either way.">
    <div className="bg-heading text-white p-10 sm:p-14">
      <h3 className="text-[clamp(28px,3.4vw,44px)] font-extrabold leading-[1.08] tracking-[-0.024em] max-w-[24ch]">
        Quantify what your citation footprint is costing you in patients.
      </h3>
      <p className="mt-6 text-white/75 text-[16px] leading-[1.65] max-w-[60ch]">
        The audit returns a ranked remediation register: every duplicate, every misspelling,
        every dormant listing, scored against tier weight. Delivered as a working document,
        not a slide deck.
      </p>
      <div className="mt-10 flex flex-wrap items-center gap-6">
        <Link to="/contact" className="btn-primary">Request the audit</Link>
        <Link to="/services/seo-local-search" className="text-white/80 text-[14px] font-medium underline-offset-4 hover:underline">
          View the SEO programme
        </Link>
      </div>
    </div>
  </Section>
);

const CitationBuilding = () => (
  <>
    <Hero />
    <WhyItMatters />
    <Directories />
    <HowWeWork />
    <Closing />
  </>
);

export default CitationBuilding;
