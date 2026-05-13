import { Link } from 'react-router-dom';
import Breadcrumb from '../../components/Breadcrumb';

const HEAD_META = [
  { label: 'Framework',  value: 'HIPAA + HITECH' },
  { label: 'Reviewed',   value: 'Annually' },
  { label: 'Hosting',    value: 'BAA-covered' },
  { label: 'Last Audit', value: 'Mar 2026' },
];

const SAFEGUARDS = [
  { tag: 'Administrative', n: '01', list: ['Workforce training', 'Access controls and provisioning', 'Documented policies', 'Incident response plan'] },
  { tag: 'Physical',       n: '02', list: ['BAA-covered data centres', 'Hardware disposal log', 'Workstation policy', 'Visitor and tenant controls'] },
  { tag: 'Technical',      n: '03', list: ['End-to-end encryption', 'MFA enforced', 'Audit and access logging', 'Automatic session timeout'] },
];

const COVERAGE = [
  { area: 'Website',           in: 'HIPAA-aware forms, BAA hosting, secure file transfer',                 not: 'Treating the website as a PHI store' },
  { area: 'Ad platforms',      in: 'Server-side conversions with hashed identifiers',                       not: 'Sharing PHI in custom audiences or CRM imports' },
  { area: 'Email & SMS',       in: 'BAA-covered providers, opt-in receipts, encrypted at rest',             not: 'Treatment-specific content without explicit consent' },
  { area: 'Analytics',         in: 'IP truncation, no PHI in URLs, consent-aware tags',                     not: 'Page-level event tracking of clinical pages' },
  { area: 'Reviews & social',  in: 'Sentiment-routed flows that never solicit PHI',                         not: 'Responding to a public review with patient detail' },
];

const STEPS = [
  { k: 'Scope',     d: 'Map every system that touches a patient. Build a shared, plain-language data flow diagram with your team.' },
  { k: 'Replace',   d: 'Migrate non-compliant vendors to BAA-covered alternatives. Hosting, email, forms, file transfer, analytics.' },
  { k: 'Train',     d: 'Workforce training rolled out across clinical and ops staff. Quarterly refreshers, sign-off retained.' },
  { k: 'Verify',    d: 'Annual external review. Penetration test, policy audit, and a remediation register that closes inside 60 days.' },
];

const Section = ({ no, title, kicker, children }: { no: string; title: string; kicker?: string; children: React.ReactNode }) => (
  <section className="border-t border-line-faint">
    <div className="container-shell py-[clamp(56px,8vw,112px)]">
      <div className="grid lg:grid-cols-12 gap-x-12 gap-y-10">
        <div className="lg:col-span-3">
          <div className="flex items-baseline gap-3">
            <span className="text-line font-mono text-[13px] tracking-[0.18em]">{no}</span>
            <span className="h-px flex-1 bg-line-soft" />
          </div>
          <h2 className="mt-4 text-heading text-[clamp(22px,2vw,30px)] font-bold tracking-[-0.02em] leading-[1.1]">{title}</h2>
          {kicker && <p className="mt-3 text-muted text-[14px] leading-[1.55] max-w-[34ch]">{kicker}</p>}
        </div>
        <div className="lg:col-span-9">{children}</div>
      </div>
    </div>
  </section>
);

const Hero = () => (
  <section className="ph-page-head">
    <div className="container-shell">
      <Breadcrumb current="HIPAA Compliance" />
      <div className="mt-6 grid lg:grid-cols-12 gap-x-12 gap-y-10 items-end">
        <div className="lg:col-span-8">
          <div className="flex items-center gap-3 text-line font-mono text-[12px] tracking-[0.22em] uppercase">
            <span className="inline-block h-[6px] w-[6px] rounded-full bg-accent-soft" />
            HIPAA + HITECH · 2026
          </div>
          <h1 className="mt-6 text-heading font-extrabold leading-[0.98] tracking-[-0.038em] text-[clamp(44px,6.4vw,86px)]">
            Marketing,<br/>
            under <span className="text-line">HIPAA</span>.
          </h1>
          <p className="mt-7 text-body text-[17px] leading-[1.65] max-w-[58ch]">
            HIPAA is not a checkbox. It is a working discipline that touches every system a
            patient inquiry passes through. Here is the way we organise it — from forms and
            hosting to ad platforms and analytics.
          </p>
        </div>
        <div className="lg:col-span-4">
          <div className="border-t-2 border-heading">
            {HEAD_META.map((row) => (
              <div key={row.label} className="grid grid-cols-2 py-3 border-b border-line-faint text-[14px]">
                <span className="text-muted font-medium">{row.label}</span>
                <span className="text-heading font-semibold text-right">{row.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Safeguards = () => (
  <Section no="01" title="The three safeguard pillars" kicker="HIPAA organises the work into three categories. Each has its own deliverables, owners, and review cycle.">
    <div className="grid sm:grid-cols-3 gap-[1px] bg-line-faint border border-line-faint">
      {SAFEGUARDS.map((s) => (
        <div key={s.n} className="bg-bg p-7 sm:p-8 flex flex-col gap-5">
          <div className="flex items-baseline justify-between">
            <span className="font-mono text-[12px] text-line tracking-[0.18em]">{s.n}</span>
            <span className="text-[10px] uppercase tracking-[0.18em] text-muted font-semibold">Safeguard</span>
          </div>
          <h3 className="text-heading text-[26px] font-extrabold leading-[1.05] tracking-[-0.02em]">{s.tag}</h3>
          <ul className="mt-2 space-y-2.5 text-[14px] text-body">
            {s.list.map((l) => (
              <li key={l} className="flex gap-2 items-baseline">
                <span className="text-accent-soft">✓</span>
                <span>{l}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </Section>
);

const CoverageTable = () => (
  <Section no="02" title="What is in scope and out of scope" kicker="A practical map of marketing surface area. The right column is where most teams over-promise.">
    <div className="border border-line-faint">
      <div className="grid grid-cols-[1fr_1.6fr_1.4fr] gap-x-6 px-7 py-4 bg-heading text-white text-[11px] uppercase tracking-[0.18em] font-semibold">
        <span>Surface</span>
        <span>What we do</span>
        <span>What we won&rsquo;t do</span>
      </div>
      {COVERAGE.map((c, i) => (
        <div key={c.area} className={`grid grid-cols-[1fr_1.6fr_1.4fr] gap-x-6 px-7 py-6 items-start text-[14px] ${i < COVERAGE.length - 1 ? 'border-b border-line-faint' : ''}`}>
          <span className="text-heading font-semibold">{c.area}</span>
          <span className="text-body leading-[1.55]">{c.in}</span>
          <span className="text-muted leading-[1.55] italic">{c.not}</span>
        </div>
      ))}
    </div>
  </Section>
);

const Method = () => (
  <Section no="03" title="The compliance loop" kicker="Four-step working method. Same loop, re-run annually, with a remediation register that closes findings inside 60 days.">
    <ol className="grid sm:grid-cols-2 gap-x-12 gap-y-10">
      {STEPS.map((s, i) => (
        <li key={s.k} className="relative pl-10">
          <span className="absolute left-0 top-1 font-mono text-line text-[13px] tracking-[0.16em]">0{i + 1}</span>
          <h4 className="text-heading text-[22px] font-bold tracking-[-0.015em]">{s.k}.</h4>
          <p className="mt-3 text-body text-[15px] leading-[1.6]">{s.d}</p>
        </li>
      ))}
    </ol>
  </Section>
);

const Closing = () => (
  <Section no="04" title="Start with a posture review" kicker="Two-week assessment with a remediation list and a privileged memo for your counsel.">
    <div className="bg-heading text-white p-10 sm:p-14 relative overflow-hidden">
      <div className="absolute right-0 top-0 h-full w-[160px] bg-accent-soft/15" />
      <div className="absolute right-6 top-6 font-mono text-[11px] tracking-[0.22em] text-white/70">
        AUDIT · CONFIDENTIAL
      </div>
      <h3 className="text-[clamp(32px,4vw,52px)] font-extrabold leading-[1.02] tracking-[-0.028em] max-w-[18ch]">
        Treat compliance like an operating system.
      </h3>
      <p className="mt-6 text-white/75 text-[16px] leading-[1.6] max-w-[58ch]">
        The compliance review is delivered under privilege. You receive a working remediation
        register, ranked by patient-risk severity. No marketing pitch.
      </p>
      <div className="mt-10 flex flex-wrap items-center gap-5">
        <Link to="/contact" className="btn-primary">Request the review →</Link>
        <Link to="/services" className="text-white/85 text-[14px] font-medium underline-offset-4 hover:underline">
          Read service overview
        </Link>
      </div>
    </div>
  </Section>
);

const HipaaCompliance = () => (
  <>
    <Hero />
    <Safeguards />
    <CoverageTable />
    <Method />
    <Closing />
  </>
);

export default HipaaCompliance;
