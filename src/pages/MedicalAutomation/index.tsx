import { Link } from 'react-router-dom';
import Breadcrumb from '../../components/Breadcrumb';

const HEAD_META = [
  { label: 'Stack',     value: 'N8N · HL7 · FHIR' },
  { label: 'Coverage',  value: 'Intake → Recall' },
  { label: 'Compliance', value: 'HIPAA + BAA' },
  { label: 'Updated',   value: 'May 2026' },
];

const WORKFLOWS = [
  {
    n: '01',
    name: 'Patient Intake',
    summary: 'Web form → EHR record in under 90 seconds.',
    desc: 'Patients fill one HIPAA-aware form. We push to the EHR, verify insurance in real time, route the chart to the right provider, and SMS-confirm the appointment slot - all without a single staff touch.',
  },
  {
    n: '02',
    name: 'Appointment Reminders',
    summary: 'SMS, email, voice - adaptive cadence.',
    desc: 'A three-touch reminder ladder calibrated to no-show risk per patient. Confirmations and reschedules write back to the EHR live, so the schedule stays clean without front-desk intervention.',
  },
  {
    n: '03',
    name: 'Review Capture',
    summary: 'Post-visit sentiment routing.',
    desc: 'After every visit a sentiment-aware survey fires. Happy patients are routed to Google + your highest-leverage review platform. Critical feedback is routed to the practice owner, never the public.',
  },
  {
    n: '04',
    name: 'Insurance Verification',
    summary: 'Eligibility check before the visit.',
    desc: 'Real-time eligibility against major payers, copay surfaced to the patient before they arrive. Eliminates the most common front-desk rework cycle and improves first-visit collection rates.',
  },
  {
    n: '05',
    name: 'AI Chat + Triage',
    summary: 'After-hours intake and qualification.',
    desc: 'A trained assistant handles after-hours questions, books low-acuity slots, and triages urgent cases to the on-call line. Conversation transcripts attach to the chart for clinical context.',
  },
  {
    n: '06',
    name: 'Recall + Wellness',
    summary: 'Time-based and clinical recall.',
    desc: 'Pulls due dates from the EHR (annuals, follow-ups, screenings), runs the nurture cadence, and books the patient back in - without involving staff until the appointment is on the books.',
  },
];

const COVERAGE = [
  { area: 'Front Desk',  saves: '8–14 hrs/week', moves: 'Confirmation calls, manual reminders, intake re-entry' },
  { area: 'Billing',     saves: '4–9 hrs/week',  moves: 'Eligibility checks, copay surfacing, denial first-pass triage' },
  { area: 'Marketing',   saves: '5–12 hrs/week', moves: 'Review requests, recall campaigns, lead routing' },
  { area: 'Clinical',    saves: '2–6 hrs/week',  moves: 'After-hours triage, pre-visit forms, chart routing' },
];

const STACK = [
  { tag: 'Workflow Engine', list: ['N8N self-hosted', 'BAA-covered hosting', 'Audit logging on every run'] },
  { tag: 'Integrations',    list: ['HL7 v2 + FHIR R4', 'Twilio (BAA)', 'AthenaHealth · Epic · DrChrono'] },
  { tag: 'AI Layer',        list: ['HIPAA-aware LLM gateway', 'Redacted prompts', 'Human-in-loop fallback'] },
  { tag: 'Reporting',       list: ['Live dashboard', 'Weekly anomaly digest', 'Per-workflow ROI math'] },
];

const METRICS = [
  { v: '54%',     k: 'No-show drop',        d: 'Median reduction in no-show rate after adaptive reminder ladder is installed.' },
  { v: '$32k',    k: 'Annual ops saved',    d: 'Median hours-to-dollars saved per single-location clinic in the first twelve months.' },
  { v: '< 90s',   k: 'Intake → EHR',        d: 'Time from form submission to provider-ready chart in the EHR.' },
  { v: '99.8%',   k: 'Audit pass rate',     d: 'Workflow runs that pass internal compliance review on first audit.' },
];

const PROCESS = [
  { k: 'Audit',  d: 'Two-hour working session. Map every system that touches a patient - surface the five highest-leverage automation candidates.' },
  { k: 'Pilot',  d: 'Ship one workflow end-to-end. EHR-connected, BAA-covered, logged. Pilot stays in production from day one, never a sandbox.' },
  { k: 'Scale',  d: 'Add the remaining four workflows over six weeks. Each rolls live with a documented run-book and a named owner on your team.' },
  { k: 'Govern', d: 'Quarterly review of audit logs, payer changes, and EHR upgrades. The system stays compliant as your stack evolves.' },
];

const SectionHead = ({ no, title, kicker }: { no: string; title: string; kicker?: string }) => (
  <div className="lg:col-span-3">
    <div className="flex items-baseline gap-3">
      <span className="text-line font-mono text-[13px] tracking-[0.18em]">{no}</span>
      <span className="h-px flex-1 bg-line-soft" />
    </div>
    <h2 className="mt-4 text-heading text-[clamp(22px,2vw,30px)] font-bold tracking-[-0.02em] leading-[1.1]">
      {title}
    </h2>
    {kicker && (
      <p className="mt-3 text-muted text-[14px] leading-[1.55] max-w-[34ch]">{kicker}</p>
    )}
  </div>
);

const Section = ({
  no,
  title,
  kicker,
  children,
}: {
  no: string;
  title: string;
  kicker?: string;
  children: React.ReactNode;
}) => (
  <section className="border-t border-line-faint">
    <div className="container-shell py-[clamp(56px,8vw,112px)]">
      <div className="grid lg:grid-cols-12 gap-x-12 gap-y-10">
        <SectionHead no={no} title={title} kicker={kicker} />
        <div className="lg:col-span-9">{children}</div>
      </div>
    </div>
  </section>
);

const Hero = () => (
  <section className="ph-page-head">
    <div className="container-shell">
      <Breadcrumb current="Medical Automation" />
      <div className="mt-6 grid lg:grid-cols-12 gap-x-12 gap-y-10 items-end">
        <div className="lg:col-span-8">
          <div className="flex items-center gap-3 text-line font-mono text-[12px] tracking-[0.22em] uppercase">
            <span className="inline-block h-[6px] w-[6px] rounded-full bg-accent-soft" />
            HIPAA-Aware · EHR-Connected · 2026
          </div>
          <h1 className="mt-6 text-heading font-extrabold leading-[0.98] tracking-[-0.038em] text-[clamp(44px,6.4vw,86px)]">
            Healthcare automation,
            <br />
            <span className="text-line italic">that the clinic actually runs on</span>.
          </h1>
          <p className="mt-7 text-body text-[17px] leading-[1.65] max-w-[58ch]">
            Six production-ready workflows - intake, reminders, reviews, insurance,
            AI triage, and recall - built on a BAA-covered stack, connected to your EHR.
            Not templates. Operations.
          </p>
        </div>
        <div className="lg:col-span-4">
          <div className="border-t-2 border-heading">
            {HEAD_META.map((row) => (
              <div
                key={row.label}
                className="grid grid-cols-2 py-3 border-b border-line-faint text-[14px]"
              >
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

const Workflows = () => (
  <Section
    no="01"
    title="Six workflows that move the clinic"
    kicker="Every workflow ships connected to your EHR on day one. Templates that never reach production are not workflows."
  >
    <div className="border-t-2 border-heading">
      {WORKFLOWS.map((w) => (
        <article
          key={w.n}
          className="grid lg:grid-cols-12 gap-x-10 gap-y-3 py-7 border-b border-line-faint items-baseline"
        >
          <div className="lg:col-span-1 font-mono text-line text-[14px] tracking-[0.18em]">
            {w.n}
          </div>
          <div className="lg:col-span-4">
            <h3 className="text-heading text-[24px] font-extrabold tracking-[-0.022em] leading-[1.05]">
              {w.name}
              <span className="text-line">.</span>
            </h3>
            <div className="mt-2 text-[12px] uppercase tracking-[0.16em] text-muted font-semibold">
              {w.summary}
            </div>
          </div>
          <div className="lg:col-span-7">
            <p className="text-body text-[16px] leading-[1.65]">{w.desc}</p>
          </div>
        </article>
      ))}
    </div>
  </Section>
);

const Coverage = () => (
  <Section
    no="02"
    title="Where the hours go back"
    kicker="Median weekly hours returned to staff per single-location clinic. Reinvested in patient time, not paperwork."
  >
    <div className="border-t-2 border-heading">
      {COVERAGE.map((c, i) => (
        <div
          key={c.area}
          className="grid lg:grid-cols-12 gap-x-10 gap-y-2 py-6 border-b border-line-faint items-baseline"
        >
          <div className="lg:col-span-1 font-mono text-line text-[13px] tracking-[0.18em]">
            0{i + 1}.
          </div>
          <div className="lg:col-span-3 text-heading font-bold text-[18px] tracking-[-0.018em]">
            {c.area}
          </div>
          <div className="lg:col-span-3 text-heading font-extrabold text-[22px] tabular-nums tracking-[-0.018em]">
            {c.saves}
          </div>
          <div className="lg:col-span-5">
            <p className="text-body text-[14.5px] leading-[1.55]">{c.moves}</p>
          </div>
        </div>
      ))}
    </div>
  </Section>
);

const Stack = () => (
  <Section
    no="03"
    title="The stack we ship on"
    kicker="No black boxes. Every workflow is yours, auditable, exportable, and BAA-covered end to end."
  >
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-[1px] bg-line-faint border border-line-faint">
      {STACK.map((s, i) => (
        <div key={s.tag} className="bg-bg p-6 flex flex-col gap-4">
          <div className="flex items-baseline justify-between">
            <span className="font-mono text-[11px] text-line tracking-[0.18em]">
              0{i + 1}.
            </span>
            <span className="text-[9px] uppercase tracking-[0.18em] text-muted font-semibold">
              Layer
            </span>
          </div>
          <h4 className="text-heading text-[18px] font-bold tracking-[-0.015em]">{s.tag}</h4>
          <ul className="space-y-2 text-[13px] text-body mt-auto">
            {s.list.map((l) => (
              <li key={l} className="flex gap-2 items-baseline">
                <span className="text-line">-</span>
                <span>{l}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </Section>
);

const Metrics = () => (
  <Section
    no="04"
    title="What the workflows move"
    kicker="Median results across HIPAA-aware automation engagements. Pulled live from the same dashboard your team uses."
  >
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-[1px] bg-heading">
      {METRICS.map((m, i) => (
        <div key={m.k} className="bg-bg p-7 flex flex-col gap-3">
          <span className="font-mono text-[11px] text-line tracking-[0.18em]">
            0{i + 1}.
          </span>
          <div className="text-heading font-extrabold text-[clamp(36px,4.2vw,52px)] leading-[0.95] tracking-[-0.035em] tabular-nums">
            {m.v}
          </div>
          <div className="text-[10px] uppercase tracking-[0.18em] text-muted font-semibold">
            {m.k}
          </div>
          <p className="text-body text-[13px] leading-[1.55] mt-1 max-w-[28ch]">{m.d}</p>
        </div>
      ))}
    </div>
  </Section>
);

const Process = () => (
  <Section
    no="05"
    title="How we ship it"
    kicker="Four phases, eight weeks from audit to all six workflows in production."
  >
    <div className="border-t-2 border-heading">
      {PROCESS.map((s, i) => (
        <div
          key={s.k}
          className="grid lg:grid-cols-12 gap-x-10 gap-y-2 py-6 border-b border-line-faint items-baseline"
        >
          <div className="lg:col-span-1 font-mono text-line text-[13px] tracking-[0.18em]">
            0{i + 1}.
          </div>
          <div className="lg:col-span-3 text-heading font-bold text-[20px] tracking-[-0.018em]">
            {s.k}
          </div>
          <div className="lg:col-span-8">
            <p className="text-body text-[15.5px] leading-[1.65]">{s.d}</p>
          </div>
        </div>
      ))}
    </div>
  </Section>
);

const Closing = () => (
  <Section
    no="06"
    title="Audit your stack"
    kicker="Two-hour working session. We map every system, surface the five highest-leverage workflows, and price the pilot."
  >
    <div className="bg-heading text-white p-10 sm:p-14 relative overflow-hidden">
      <div className="absolute left-0 bottom-0 w-full h-[5px] bg-gradient-to-r from-accent-soft via-line to-cta" />
      <div className="font-mono text-[12px] tracking-[0.22em] text-line uppercase">
        Stack Audit · No Cost
      </div>
      <h3 className="mt-5 text-[clamp(32px,4vw,52px)] font-extrabold leading-[1.02] tracking-[-0.028em] max-w-[22ch]">
        Software does not run a clinic. Workflows do.
      </h3>
      <p className="mt-6 text-white/75 text-[16px] leading-[1.6] max-w-[58ch]">
        We do not ship a pilot without a documented run-book and a named owner on your team.
        Book the audit, walk away with the plan - pilot only if it pays for itself in week one.
      </p>
      <div className="mt-10 flex flex-wrap items-center gap-5">
        <Link to="/contact" className="btn-primary">
          Book the audit →
        </Link>
        <Link
          to="/automation"
          className="text-white/85 text-[14px] font-medium underline-offset-4 hover:underline"
        >
          See the workflow library
        </Link>
      </div>
    </div>
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
