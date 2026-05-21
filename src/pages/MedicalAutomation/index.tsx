import type { JSX } from 'react';
import Breadcrumb from '../../components/Breadcrumb';
import Section from '../../components/editorial/Section';
import EditorialCTA from '../../components/editorial/EditorialCTA';
import { CountUp, Reveal } from '../../lib/motion';

const HEAD_META = [
  { label: 'Stack',      value: 'N8N · HL7 · FHIR' },
  { label: 'Coverage',   value: 'Intake → Recall' },
  { label: 'Compliance', value: 'HIPAA + BAA' },
  { label: 'Updated',    value: 'May 2026' },
];

type WorkflowKey = 'intake' | 'reminder' | 'review' | 'insurance' | 'triage' | 'recall';

const WORKFLOWS: {
  n: string;
  key: WorkflowKey;
  trigger: string;
  name: string;
  outcome: string;
  meta: string;
}[] = [
  { n: '01', key: 'intake',    trigger: 'Form submitted',   name: 'Patient Intake',      outcome: 'EHR record live',    meta: '< 90 sec' },
  { n: '02', key: 'insurance', trigger: 'Slot booked',      name: 'Insurance Verify',    outcome: 'Copay surfaced',     meta: 'Real-time' },
  { n: '03', key: 'reminder',  trigger: '24h before visit', name: 'Adaptive Reminder',   outcome: 'Confirmed / rebooked', meta: '3-touch ladder' },
  { n: '04', key: 'triage',    trigger: 'After-hours ping', name: 'AI Triage',           outcome: 'Routed or booked',   meta: '24/7' },
  { n: '05', key: 'review',    trigger: 'Visit complete',   name: 'Review Capture',      outcome: 'Public review',      meta: 'Sentiment-routed' },
  { n: '06', key: 'recall',    trigger: 'Recall date hits', name: 'Recall + Wellness',   outcome: 'Patient re-booked',  meta: 'EHR-driven' },
];

type CoverageKey = 'front' | 'billing' | 'marketing' | 'clinical';

const COVERAGE: { area: string; key: CoverageKey; low: number; high: number; one: string }[] = [
  { area: 'Front Desk', key: 'front',     low: 8, high: 14, one: 'Confirmations · reminders · intake' },
  { area: 'Billing',    key: 'billing',   low: 4, high: 9,  one: 'Eligibility · copay · denial triage'  },
  { area: 'Marketing',  key: 'marketing', low: 5, high: 12, one: 'Reviews · recall · lead routing'      },
  { area: 'Clinical',   key: 'clinical',  low: 2, high: 6,  one: 'Triage · pre-visit · chart routing'   },
];

type StackKey = 'engine' | 'integrations' | 'ai' | 'reporting';

const STACK: { tag: string; key: StackKey; tools: string[] }[] = [
  { tag: 'Workflow Engine', key: 'engine',       tools: ['N8N', 'BAA hosting', 'Audit logs'] },
  { tag: 'Integrations',    key: 'integrations', tools: ['HL7 · FHIR', 'Twilio BAA', 'Athena · Epic'] },
  { tag: 'AI Layer',        key: 'ai',           tools: ['HIPAA gateway', 'Redacted prompts', 'Human-in-loop'] },
  { tag: 'Reporting',       key: 'reporting',    tools: ['Live dashboard', 'Weekly digest', 'Per-flow ROI'] },
];

const METRICS = [
  { value: 54,   suffix: '%',  k: 'No-show drop',       d: 'After adaptive reminder ladder.' },
  { value: 32,   prefix: '$', suffix: 'k', k: 'Annual ops saved',   d: 'Hours-to-dollars per clinic, year one.' },
  { value: 90,   prefix: '< ', suffix: 's', k: 'Intake → EHR',       d: 'Form to provider-ready chart.' },
  { value: 99.8, suffix: '%',  decimals: 1, k: 'Audit pass rate',    d: 'Runs that pass compliance review.' },
];

type ProcessKey = 'audit' | 'pilot' | 'scale' | 'govern';

const PROCESS: { n: string; key: ProcessKey; k: string; week: string; d: string }[] = [
  { n: '01', key: 'audit',  k: 'Audit',  week: 'Week 1',    d: 'Map every system touching a patient.' },
  { n: '02', key: 'pilot',  k: 'Pilot',  week: 'Week 2–3',  d: 'Ship one workflow live, EHR-connected.' },
  { n: '03', key: 'scale',  k: 'Scale',  week: 'Week 4–8',  d: 'Roll the remaining five into production.' },
  { n: '04', key: 'govern', k: 'Govern', week: 'Quarterly', d: 'Audit logs, payer drift, EHR upgrades.' },
];

/* ---------------- ICONS ---------------- */

const ICON = {
  width: 22, height: 22, viewBox: '0 0 24 24', fill: 'none',
  stroke: 'currentColor', strokeWidth: 1.6,
  strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const,
};

const IntakeIcon    = () => <svg {...ICON}><rect x="5" y="3" width="14" height="18" rx="2" /><path d="M9 3v3h6V3" /><path d="m9 13 2 2 4-4" /></svg>;
const InsuranceIcon = () => <svg {...ICON}><path d="M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6Z" /><path d="m9 12 2 2 4-4" /></svg>;
const ReminderIcon  = () => <svg {...ICON}><path d="M18 16V11a6 6 0 0 0-12 0v5l-2 2h16Z" /><path d="M10 20a2 2 0 0 0 4 0" /></svg>;
const TriageIcon    = () => <svg {...ICON}><rect x="3" y="6" width="18" height="12" rx="2" /><circle cx="9" cy="12" r="1.2" /><circle cx="15" cy="12" r="1.2" /><path d="M12 18v2" /></svg>;
const ReviewIcon    = () => <svg {...ICON}><path d="m12 4 2.5 5.2 5.7.8-4.1 4 .9 5.7L12 17l-5 2.6.8-5.7L3.8 10l5.7-.8Z" /></svg>;
const RecallIcon    = () => <svg {...ICON}><path d="M21 12a9 9 0 1 1-3-6.7" /><path d="M21 4v5h-5" /></svg>;

const WORKFLOW_ICON: Record<WorkflowKey, () => JSX.Element> = {
  intake: IntakeIcon, reminder: ReminderIcon, review: ReviewIcon,
  insurance: InsuranceIcon, triage: TriageIcon, recall: RecallIcon,
};

const FrontIcon     = () => <svg {...ICON}><path d="M3 6h12v9H7l-4 4Z" /><path d="M11 10h.01M8 10h.01M14 10h.01" /></svg>;
const BillingIcon   = () => <svg {...ICON}><rect x="3" y="6" width="18" height="12" rx="2" /><path d="M3 10h18" /><path d="M7 15h3" /></svg>;
const MarketingIcon = () => <svg {...ICON}><path d="m4 11 12-6v14L4 13Z" /><path d="M8 12v6" /><path d="M16 9a3 3 0 0 1 0 6" /></svg>;
const ClinicalIcon  = () => <svg {...ICON}><path d="M8 3v6a4 4 0 0 0 8 0V3" /><circle cx="18" cy="14" r="3" /><path d="M12 13v2a4 4 0 0 0 3 3.9" /></svg>;

const COVERAGE_ICON: Record<CoverageKey, () => JSX.Element> = {
  front: FrontIcon, billing: BillingIcon, marketing: MarketingIcon, clinical: ClinicalIcon,
};

const EngineIcon       = () => <svg {...ICON}><circle cx="12" cy="12" r="3.2" /><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1A1.7 1.7 0 0 0 9 19.4a1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1A1.7 1.7 0 0 0 4.6 15 1.7 1.7 0 0 0 3 14H3a2 2 0 1 1 0-4h.1A1.7 1.7 0 0 0 4.6 9 1.7 1.7 0 0 0 4.3 7.2l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1A1.7 1.7 0 0 0 9 4.6 1.7 1.7 0 0 0 10 3.1V3a2 2 0 1 1 4 0v.1c0 .7.4 1.3 1 1.5a1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8c.2.6.8 1 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1Z" /></svg>;
const IntegrationsIcon = () => <svg {...ICON}><path d="M10 13a5 5 0 0 0 7 0l3-3a5 5 0 0 0-7-7l-1 1" /><path d="M14 11a5 5 0 0 0-7 0l-3 3a5 5 0 0 0 7 7l1-1" /></svg>;
const AiIcon           = () => <svg {...ICON}><path d="m12 3 1.6 3.4L17 8l-3.4 1.6L12 13l-1.6-3.4L7 8l3.4-1.6Z" /><path d="m19 15 .9 1.9 1.9.9-1.9.9-.9 1.9-.9-1.9L16 17.8l1.9-.9Z" /></svg>;
const ReportingIcon    = () => <svg {...ICON}><path d="M3 21h18" /><path d="M6 17v-5" /><path d="M11 17V8" /><path d="M16 17v-7" /><path d="M21 17v-3" /></svg>;

const STACK_ICON: Record<StackKey, () => JSX.Element> = {
  engine: EngineIcon, integrations: IntegrationsIcon, ai: AiIcon, reporting: ReportingIcon,
};

const AuditIcon  = () => <svg {...ICON}><circle cx="11" cy="11" r="6" /><path d="m20 20-4.3-4.3" /></svg>;
const PilotIcon  = () => <svg {...ICON}><path d="M4 21V4l13 6.5L4 17" /><path d="M11 13v8" /></svg>;
const ScaleIcon  = () => <svg {...ICON}><path d="M3 21h18" /><path d="M7 21V11" /><path d="M12 21V7" /><path d="M17 21V4" /></svg>;
const GovernIcon = () => <svg {...ICON}><path d="M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6Z" /></svg>;

const PROCESS_ICON: Record<ProcessKey, () => JSX.Element> = {
  audit: AuditIcon, pilot: PilotIcon, scale: ScaleIcon, govern: GovernIcon,
};

/* ---------------- HERO ---------------- */

const Hero = () => (
  <section className="ph-page-head">
    <div className="container-shell">
      <Breadcrumb current="Medical Automation" />
      <div className="mt-6 grid lg:grid-cols-12 gap-x-12 gap-y-10 items-end">
        <div className="lg:col-span-8">
          <div className="flex items-center gap-3 text-line font-mono text-[12px] tracking-[0.22em] uppercase">
            <span className="inline-block h-[6px] w-[6px] rounded-full bg-accent-soft animate-pulse" />
            HIPAA-Aware · EHR-Connected · 2026
          </div>
          <h1 className="mt-6 text-heading font-extrabold leading-[0.98] tracking-[-0.038em] text-[clamp(44px,6.4vw,86px)]">
            Healthcare automation,
            <br />
            <span className="text-line italic">that the clinic actually runs on</span>.
          </h1>
          <p className="mt-7 text-body text-[17px] leading-[1.65] max-w-[52ch]">
            Six workflows. One stack. Connected to your EHR.
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

/* ---------------- 01 · RICH WORKFLOW CARD GRID ---------------- */

const Workflows = () => (
  <Section
    no="01"
    title="Six workflows, always running"
    kicker="Each workflow is a contract: a known trigger, a known outcome, zero staff in the loop."
  >
    <div className="grid sm:grid-cols-2 gap-4 lg:gap-5">
      {WORKFLOWS.map((w, i) => {
        const Icon = WORKFLOW_ICON[w.key];
        return (
          <Reveal key={w.key} variant="up" delay={i * 60}>
            <article className="group relative bg-bg border border-line-faint rounded-2xl p-7 lg:p-8 overflow-hidden h-full flex flex-col transition-all duration-300 hover:border-heading hover:shadow-[0_18px_40px_-24px_rgba(15,23,42,0.18)] hover:-translate-y-[2px]">
              {/* large faded number watermark */}
              <span
                aria-hidden="true"
                className="absolute -right-2 -top-6 text-[160px] font-extrabold leading-none tracking-[-0.05em] text-line-faint/30 select-none pointer-events-none"
              >
                {w.n}
              </span>

              {/* accent stripe along the top */}
              <span
                aria-hidden="true"
                className="absolute left-0 top-0 h-[3px] w-16 bg-gradient-to-r from-accent-soft to-cta rounded-tl-2xl"
              />

              {/* Top row: spec pill */}
              <div className="relative flex items-center justify-between z-10">
                <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted font-semibold">
                  Workflow / {w.n}
                </span>
                <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-line border border-line-faint rounded-full px-3 py-1 bg-bg/80 backdrop-blur-sm">
                  {w.meta}
                </span>
              </div>

              {/* Visual hero: icon with soft gradient blob backdrop */}
              <div className="relative mt-8 mb-6 z-10">
                <div
                  aria-hidden="true"
                  className="absolute -inset-3 rounded-full bg-gradient-to-br from-accent-soft/20 via-line-soft/40 to-transparent blur-xl"
                />
                <div className="relative h-16 w-16 rounded-2xl bg-heading text-white flex items-center justify-center shadow-[0_8px_22px_-10px_rgba(15,23,42,0.6)] transition-transform duration-300 group-hover:scale-[1.04] group-hover:rotate-[-3deg]">
                  <Icon />
                </div>
              </div>

              {/* Workflow name */}
              <h3 className="relative text-heading text-[28px] lg:text-[30px] font-extrabold leading-[1.05] tracking-[-0.025em] z-10">
                {w.name}
                <span className="text-cta">.</span>
              </h3>

              {/* Trigger → Outcome mini flow */}
              <div className="relative mt-auto pt-8 z-10">
                <div className="grid grid-cols-[auto_1fr] gap-x-3 gap-y-2 items-center">
                  <span className="text-[9px] uppercase tracking-[0.22em] text-muted font-bold">From</span>
                  <span className="text-body text-[14.5px] font-medium leading-tight">{w.trigger}</span>

                  {/* vertical connector */}
                  <span aria-hidden="true" className="row-span-1 flex justify-center">
                    <span className="block h-3 w-px border-l border-dashed border-line" />
                  </span>
                  <span aria-hidden="true" />

                  <span className="text-[9px] uppercase tracking-[0.22em] text-cta font-bold">To</span>
                  <span className="text-heading text-[14.5px] font-semibold leading-tight">{w.outcome}</span>
                </div>
              </div>
            </article>
          </Reveal>
        );
      })}
    </div>
  </Section>
);

/* ---------------- 02 · COVERAGE BAR CHART (replaces text table) ---------------- */

const Coverage = () => {
  const max = 14;
  return (
    <Section
      no="02"
      title="Hours given back, weekly"
      kicker="Median across single-location clinics. Reinvested in patient time."
    >
      <Reveal variant="up">
        <div className="border-t-2 border-heading pt-8 space-y-7">
          {COVERAGE.map((c) => {
            const Icon = COVERAGE_ICON[c.key];
            const widthPct = (c.high / max) * 100;
            const lowPct = (c.low / max) * 100;
            return (
              <div key={c.area} className="grid grid-cols-[auto_minmax(0,1fr)_auto] gap-x-5 items-center">
                {/* Left: icon + area name */}
                <div className="flex items-center gap-4 min-w-[150px]">
                  <span className="h-10 w-10 rounded-full border border-line-faint flex items-center justify-center text-heading">
                    <Icon />
                  </span>
                  <div className="flex flex-col">
                    <span className="text-heading font-bold text-[16px] tracking-[-0.01em]">{c.area}</span>
                    <span className="text-muted text-[11px] uppercase tracking-[0.16em] font-semibold">{c.one}</span>
                  </div>
                </div>

                {/* Middle: bar */}
                <div className="relative h-[14px] bg-line-faint/60 rounded-full overflow-hidden">
                  {/* low marker — lighter */}
                  <div
                    className="absolute inset-y-0 left-0 bg-line-soft"
                    style={{ width: `${lowPct}%` }}
                  />
                  {/* high — solid heading color */}
                  <div
                    className="absolute inset-y-0 left-0 bg-heading rounded-full"
                    style={{ width: `${widthPct}%`, mixBlendMode: 'normal' }}
                  >
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 h-3 w-3 rounded-full bg-cta border-2 border-bg" />
                  </div>
                </div>

                {/* Right: hours range */}
                <div className="text-heading font-extrabold text-[20px] tabular-nums tracking-[-0.018em] min-w-[110px] text-right">
                  {c.low}–{c.high}
                  <span className="text-muted text-[12px] font-medium ml-1">hrs/wk</span>
                </div>
              </div>
            );
          })}
        </div>
      </Reveal>
    </Section>
  );
};

/* ---------------- 03 · STACK (kept 4-up, trimmed text + icons) ---------------- */

const Stack = () => (
  <Section
    no="03"
    title="The stack we ship on"
    kicker="No black boxes. Auditable, exportable, BAA-covered end to end."
  >
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-[1px] bg-line-faint border border-line-faint">
      {STACK.map((s, i) => {
        const Icon = STACK_ICON[s.key];
        return (
          <div key={s.tag} className="bg-bg p-7 flex flex-col gap-5">
            <div className="flex items-center justify-between">
              <span className="h-9 w-9 rounded-full bg-bg-soft flex items-center justify-center text-heading">
                <Icon />
              </span>
              <span className="font-mono text-[11px] text-line tracking-[0.18em]">0{i + 1}</span>
            </div>
            <h4 className="text-heading text-[18px] font-bold tracking-[-0.015em]">{s.tag}</h4>
            <ul className="space-y-1.5 text-[12.5px] text-body mt-auto">
              {s.tools.map((l) => (
                <li key={l} className="flex gap-2 items-baseline">
                  <span className="text-line">•</span>
                  <span>{l}</span>
                </li>
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  </Section>
);

/* ---------------- 04 · METRICS with CountUp ---------------- */

const Metrics = () => (
  <Section
    no="04"
    title="What the workflows move"
    kicker="Median results across HIPAA-aware engagements."
  >
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-[1px] bg-heading">
      {METRICS.map((m, i) => (
        <div key={m.k} className="bg-bg p-7 flex flex-col gap-3">
          <span className="font-mono text-[11px] text-line tracking-[0.18em]">0{i + 1}.</span>
          <div className="text-heading font-extrabold text-[clamp(36px,4.2vw,52px)] leading-[0.95] tracking-[-0.035em] tabular-nums">
            <CountUp
              to={m.value}
              prefix={m.prefix}
              suffix={m.suffix}
              decimals={m.decimals ?? 0}
              duration={2}
            />
          </div>
          <div className="text-[10px] uppercase tracking-[0.18em] text-muted font-semibold">{m.k}</div>
          <p className="text-body text-[13px] leading-[1.55] mt-1 max-w-[28ch]">{m.d}</p>
        </div>
      ))}
    </div>
  </Section>
);

/* ---------------- 05 · PROCESS as horizontal timeline ---------------- */

const Process = () => (
  <Section
    no="05"
    title="How we ship it"
    kicker="Four phases, eight weeks from audit to all six in production."
  >
    <Reveal variant="up">
      <div className="border-t-2 border-heading pt-12">
        <div className="grid md:grid-cols-4 gap-y-12 md:gap-x-6 relative">
          {/* connector line on desktop */}
          <div className="hidden md:block absolute left-[10%] right-[10%] top-[26px] h-px border-t border-dashed border-line-faint pointer-events-none" />

          {PROCESS.map((p) => {
            const Icon = PROCESS_ICON[p.key];
            return (
              <div key={p.k} className="relative bg-bg flex flex-col items-start gap-4 md:px-3">
                <div className="flex items-center gap-4">
                  <div className="h-14 w-14 rounded-full bg-heading text-white flex items-center justify-center shrink-0">
                    <Icon />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-mono text-[12px] text-line tracking-[0.18em]">{p.n}</span>
                    <span className="text-[10px] uppercase tracking-[0.18em] text-muted font-semibold">{p.week}</span>
                  </div>
                </div>
                <h3 className="text-heading text-[24px] font-extrabold tracking-[-0.02em] leading-[1.1]">
                  {p.k}
                  <span className="text-line">.</span>
                </h3>
                <p className="text-body text-[14px] leading-[1.55]">{p.d}</p>
              </div>
            );
          })}
        </div>
      </div>
    </Reveal>
  </Section>
);

/* ---------------- 06 · CLOSING ---------------- */

const Closing = () => (
  <Section
    no="06"
    title="Audit your stack"
    kicker="Two-hour working session. We map every system, surface the five highest-leverage workflows, and price the pilot."
  >
    <EditorialCTA
      eyebrow="Stack Audit · No Cost"
      title="Software does not run a clinic. Workflows do."
      description="We do not ship a pilot without a documented run-book and a named owner on your team. Book the audit, walk away with the plan - pilot only if it pays for itself in week one."
      primaryHref="/contact"
      primaryLabel="Book the audit →"
      secondaryHref="/automation"
      secondaryLabel="See the workflow library"
    />
  </Section>
);

const SERVICE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Medical Automation for Healthcare Clinics',
  serviceType: 'Healthcare Workflow Automation · HIPAA-Aware',
  provider: {
    '@type': 'LocalBusiness',
    name: 'TheNextGen Healthcare Marketing',
    url: 'https://thenextgenhealth.com',
  },
  description:
    'HIPAA-aware automation for healthcare practices: patient intake, appointment reminders, review capture, insurance verification, AI triage, and recall - built on a BAA-covered stack and connected to your EHR.',
  areaServed: 'United States',
  offers: {
    '@type': 'Offer',
    description: '8-week pilot to deploy all six workflows in production with full audit trail.',
  },
};

const MedicalAutomation = () => (
  <>
    <Hero />
    <Workflows />
    <Coverage />
    <Stack />
    <Metrics />
    <Process />
    <Closing />

    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_SCHEMA) }}
    />
  </>
);

export default MedicalAutomation;
