import {
  AlertTriangle,
  ArrowRight,
  Bell,
  CalendarCheck,
  CheckCircle2,
  ClipboardCheck,
  ClipboardList,
  Clock,
  FileText,
  Hourglass,
  Inbox,
  Network,
  Phone,
  PhoneOff,
  Send,
  Shield,
  ShieldCheck,
  Sparkles,
  UserCheck,
  type LucideIcon,
} from 'lucide-react';

/* ============================================================
   AUTOMATION TEMPLATE · DETAIL PAGE
   Patient Intake & Insurance Verification
   Self-contained — Tailwind + lucide-react only.
   ============================================================ */

const NAVY = '#1A2942';

const STATS: { icon: LucideIcon; value: string; label: string }[] = [
  { icon: Network, value: '7 nodes', label: 'N8N workflow' },
  { icon: Clock, value: '~45 min', label: 'Setup time' },
  { icon: Hourglass, value: '6–9 hrs', label: 'Saved per week' },
  { icon: ShieldCheck, value: 'BAA', label: 'HIPAA-sensitive' },
];

const BEFORE: { icon: LucideIcon; text: string }[] = [
  { icon: ClipboardList, text: 'Paper forms handed out at check-in.' },
  { icon: Phone, text: 'Front desk on hold with insurers.' },
  { icon: FileText, text: 'Demographics keyed in twice.' },
  { icon: AlertTriangle, text: 'Eligibility surprises at the counter.' },
];

const AFTER: { icon: LucideIcon; text: string }[] = [
  { icon: Send, text: 'Pre-visit packet sent automatically.' },
  { icon: UserCheck, text: 'Consent + demographics captured online.' },
  { icon: ShieldCheck, text: 'Eligibility verified before they arrive.' },
  { icon: Inbox, text: 'Issues flagged to staff inbox, not the lobby.' },
];

const NODES: { n: string; icon: LucideIcon; label: string; copy: string }[] = [
  {
    n: '01',
    icon: CalendarCheck,
    label: 'Appointment Booked',
    copy: 'Trigger fires the moment a slot is reserved in the scheduler.',
  },
  {
    n: '02',
    icon: Send,
    label: 'Send Intake Form',
    copy: 'Patient receives a branded pre-visit link by SMS and email.',
  },
  {
    n: '03',
    icon: ClipboardCheck,
    label: 'Collect Consent & Demographics',
    copy: 'Signed forms and patient details written straight to the chart.',
  },
  {
    n: '04',
    icon: Shield,
    label: 'Verify Insurance Eligibility',
    copy: 'Real-time clearinghouse check confirms coverage and copay.',
  },
  {
    n: '05',
    icon: AlertTriangle,
    label: 'Flag Issues',
    copy: 'Anything missing or expired routes to a staff review queue.',
  },
  {
    n: '06',
    icon: FileText,
    label: 'Compile Pre-Visit Packet',
    copy: 'One clean PDF lands on the chart — ready before the patient is.',
  },
  {
    n: '07',
    icon: Bell,
    label: 'Notify Staff',
    copy: 'A single morning summary tells the front desk what to expect.',
  },
];

const OUTCOMES: { icon: LucideIcon; label: string; copy: string }[] = [
  {
    icon: FileText,
    label: 'Pre-filled patient packet',
    copy: 'Every form complete before they step through the door.',
  },
  {
    icon: ShieldCheck,
    label: 'Eligibility confirmed',
    copy: 'Coverage, copay, and deductible verified in advance.',
  },
  {
    icon: UserCheck,
    label: 'Consent captured',
    copy: 'Signed, time-stamped, and filed to the chart automatically.',
  },
  {
    icon: PhoneOff,
    label: 'Front desk freed up',
    copy: 'No more hold music, no more clipboards at check-in.',
  },
];

const SETUP_STEPS: { n: string; title: string; copy: string; minutes: string }[] = [
  {
    n: '01',
    title: 'Import the spec',
    copy: 'Drop the N8N JSON into your instance — every node is labelled.',
    minutes: '10 min',
  },
  {
    n: '02',
    title: 'Connect credentials',
    copy: 'Scheduler, clearinghouse, and messaging — slot-by-slot.',
    minutes: '20 min',
  },
  {
    n: '03',
    title: 'Pilot & switch on',
    copy: 'Run a 24-hour shadow pass, then route live appointments through.',
    minutes: '15 min',
  },
];

/* ---------- Tiny helpers ---------- */

const SectionLabel = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-block text-[11px] font-semibold tracking-[0.24em] uppercase text-slate-500">
    {children}
  </span>
);

const Divider = () => <div className="h-px w-full bg-slate-200" />;

/* ---------- Page ---------- */

const PatientIntakeWorkflow = () => {
  return (
    <main
      className="bg-white text-slate-800 antialiased selection:bg-amber-100"
    >
      {/* ============== 1 · HERO ============== */}
      <section className="relative overflow-hidden border-b border-slate-100">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-32 -right-24 h-[420px] w-[420px] rounded-full opacity-[0.05] blur-3xl"
          style={{ background: NAVY }}
        />
        <div className="mx-auto max-w-6xl px-6 pt-20 pb-16 sm:px-8 md:pt-28 md:pb-24">
          <div className="flex items-center gap-3 text-[11px] font-semibold tracking-[0.28em] uppercase text-slate-500">
            <span style={{ color: NAVY }}>FIG. 02</span>
            <span className="h-px w-8 bg-slate-300" />
            <span>INTAKE</span>
          </div>

          <h1
            className="mt-8 max-w-4xl text-4xl leading-[1.05] tracking-tight sm:text-5xl md:text-6xl"
            style={{
              color: NAVY,
                            fontWeight: 500,
            }}
          >
            Patient Intake
            <span className="text-slate-400"> &amp; </span>
            <span className="italic">Insurance Verification.</span>
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-slate-600 sm:text-xl">
            A pre-visit packet that captures consent, demographics, and eligibility
            before the patient walks in — <em className="text-slate-800">front desk untouched.</em>
          </p>

          <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <a
              href="#cta"
              className="group inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold text-white shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-lg"
              style={{ background: NAVY }}
            >
              Get this workflow
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-0.5"
              />
            </a>
            <a
              href="#how-it-works"
              className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 transition-colors hover:text-slate-900"
            >
              See how it works
              <ArrowRight size={14} />
            </a>
          </div>

          {/* Stat strip */}
          <div className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-slate-200 bg-slate-200 md:grid-cols-4">
            {STATS.map(({ icon: Icon, value, label }) => (
              <div
                key={label}
                className="flex flex-col gap-2 bg-white px-5 py-6 transition-colors hover:bg-slate-50"
              >
                <Icon size={18} style={{ color: NAVY }} strokeWidth={1.6} />
                <div className="mt-1 text-2xl font-semibold" style={{ color: NAVY }}>
                  {value}
                </div>
                <div className="text-[11px] font-semibold tracking-[0.18em] uppercase text-slate-500">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============== 2 · BEFORE / AFTER ============== */}
      <section className="border-b border-slate-100 bg-[#FAFAF8]">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:px-8 md:py-28">
          <div className="mx-auto max-w-2xl text-center">
            <SectionLabel>The shift</SectionLabel>
            <h2
              className="mt-4 text-3xl tracking-tight sm:text-4xl"
              style={{
                color: NAVY,
                                fontWeight: 500,
              }}
            >
              From the lobby pile-up to a quiet morning.
            </h2>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 md:gap-10">
            {/* Before */}
            <div className="relative rounded-2xl border border-slate-200 bg-white p-8 sm:p-10">
              <div className="flex items-center justify-between">
                <SectionLabel>Before</SectionLabel>
                <span className="text-[11px] font-mono text-slate-400">today</span>
              </div>
              <h3
                className="mt-3 text-2xl"
                style={{
                  color: NAVY,
                                    fontWeight: 500,
                }}
              >
                The front desk juggles it.
              </h3>
              <ul className="mt-7 space-y-4">
                {BEFORE.map(({ icon: Icon, text }) => (
                  <li key={text} className="flex items-start gap-3 text-slate-600">
                    <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-500">
                      <Icon size={15} strokeWidth={1.7} />
                    </span>
                    <span className="leading-relaxed">{text}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* After */}
            <div
              className="relative rounded-2xl border p-8 sm:p-10"
              style={{
                background: 'linear-gradient(180deg, #FFFFFF 0%, #F4F6FB 100%)',
                borderColor: 'rgba(26,41,66,0.15)',
              }}
            >
              <div className="flex items-center justify-between">
                <SectionLabel>After</SectionLabel>
                <span
                  className="inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[10px] font-semibold tracking-widest uppercase text-white"
                  style={{ background: NAVY }}
                >
                  <Sparkles size={10} /> Automated
                </span>
              </div>
              <h3
                className="mt-3 text-2xl"
                style={{
                  color: NAVY,
                                    fontWeight: 500,
                }}
              >
                The workflow handles it.
              </h3>
              <ul className="mt-7 space-y-4">
                {AFTER.map(({ icon: Icon, text }) => (
                  <li key={text} className="flex items-start gap-3 text-slate-700">
                    <span
                      className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-white"
                      style={{ background: NAVY }}
                    >
                      <Icon size={15} strokeWidth={1.8} />
                    </span>
                    <span className="leading-relaxed">{text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ============== 3 · HOW IT WORKS (FLOW) ============== */}
      <section
        id="how-it-works"
        className="border-b border-slate-100 bg-white"
        aria-labelledby="hiw-title"
      >
        <div className="mx-auto max-w-6xl px-6 py-20 sm:px-8 md:py-28">
          <div className="flex flex-col items-start gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <SectionLabel>How it works</SectionLabel>
              <h2
                id="hiw-title"
                className="mt-4 text-3xl tracking-tight sm:text-4xl"
                style={{
                  color: NAVY,
                                    fontWeight: 500,
                }}
              >
                Seven nodes, end-to-end.
              </h2>
            </div>
            <div className="flex items-center gap-2 text-[11px] font-mono text-slate-500">
              <Network size={14} strokeWidth={1.6} />
              <span>n8n · 7 nodes</span>
            </div>
          </div>

          <Divider />

          {/* Flow — horizontal on lg+, vertical on small */}
          <div className="mt-14">
            {/* Desktop / large: 3-col grid with custom connectors using border-r on cards */}
            <ol
              className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 sm:gap-x-8 md:grid-cols-3 lg:grid-cols-4 lg:gap-x-6"
              aria-label="Workflow nodes in order"
            >
              {NODES.map((node, i) => {
                const Icon = node.icon;
                const isLast = i === NODES.length - 1;
                return (
                  <li
                    key={node.n}
                    className="group relative flex flex-col"
                    aria-label={`Step ${i + 1}: ${node.label}`}
                  >
                    {/* Connector — sits between cards on larger screens */}
                    {!isLast && (
                      <span
                        aria-hidden="true"
                        className="absolute top-9 right-[-14px] hidden h-px w-7 bg-slate-200 lg:block"
                      />
                    )}
                    {!isLast && (
                      <ArrowRight
                        aria-hidden="true"
                        size={14}
                        strokeWidth={1.4}
                        className="absolute top-[28px] right-[-18px] hidden text-slate-300 lg:block"
                      />
                    )}

                    <div className="relative h-full rounded-xl border border-slate-200 bg-white p-6 transition-all hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-md">
                      <div className="flex items-center justify-between">
                        <span
                          className="flex h-10 w-10 items-center justify-center rounded-lg"
                          style={{ background: 'rgba(26,41,66,0.06)', color: NAVY }}
                        >
                          <Icon size={18} strokeWidth={1.7} />
                        </span>
                        <span className="font-mono text-xs tracking-widest text-slate-400">
                          {node.n}
                        </span>
                      </div>
                      <h3
                        className="mt-5 text-lg font-semibold leading-snug"
                        style={{ color: NAVY }}
                      >
                        {node.label}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-slate-600">
                        {node.copy}
                      </p>
                    </div>

                    {/* Vertical connector for small screens (between rows) */}
                    {!isLast && (
                      <span
                        aria-hidden="true"
                        className="mx-auto mt-4 block h-6 w-px bg-slate-200 sm:hidden"
                      />
                    )}
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
      </section>

      {/* ============== 4 · WHAT YOU GET ============== */}
      <section className="border-b border-slate-100 bg-[#FAFAF8]">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:px-8 md:py-28">
          <div className="max-w-2xl">
            <SectionLabel>What you get</SectionLabel>
            <h2
              className="mt-4 text-3xl tracking-tight sm:text-4xl"
              style={{
                color: NAVY,
                                fontWeight: 500,
              }}
            >
              Four quiet outcomes, every morning.
            </h2>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {OUTCOMES.map(({ icon: Icon, label, copy }) => (
              <div
                key={label}
                className="group rounded-2xl border border-slate-200 bg-white p-6 transition-all hover:-translate-y-0.5 hover:shadow-md"
              >
                <span
                  className="flex h-11 w-11 items-center justify-center rounded-xl"
                  style={{ background: 'rgba(26,41,66,0.06)', color: NAVY }}
                >
                  <Icon size={20} strokeWidth={1.6} />
                </span>
                <h3 className="mt-5 text-base font-semibold" style={{ color: NAVY }}>
                  {label}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============== 5 · SETUP & REQUIREMENTS ============== */}
      <section className="border-b border-slate-100 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:px-8 md:py-28">
          <div className="grid gap-12 md:grid-cols-12">
            <div className="md:col-span-5">
              <SectionLabel>Setup</SectionLabel>
              <h2
                className="mt-4 text-3xl tracking-tight sm:text-4xl"
                style={{
                  color: NAVY,
                                    fontWeight: 500,
                }}
              >
                Live in under an hour.
              </h2>
              <p className="mt-5 text-base leading-relaxed text-slate-600">
                Three steps, ~45 minutes total. No code. Your existing scheduler,
                clearinghouse, and messaging stack stay exactly where they are.
              </p>
            </div>

            <ol className="relative md:col-span-7" aria-label="Setup steps">
              {/* vertical rail */}
              <span
                aria-hidden="true"
                className="absolute top-3 bottom-3 left-[19px] w-px bg-slate-200"
              />

              {SETUP_STEPS.map((step) => (
                <li key={step.n} className="relative flex gap-5 pb-8 last:pb-0">
                  <span
                    className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-white text-xs font-semibold tracking-widest"
                    style={{ background: NAVY }}
                  >
                    {step.n}
                  </span>
                  <div className="flex-1 rounded-xl border border-slate-200 bg-white p-5">
                    <div className="flex items-center justify-between gap-3">
                      <h3 className="text-base font-semibold" style={{ color: NAVY }}>
                        {step.title}
                      </h3>
                      <span className="font-mono text-[11px] tracking-wider text-slate-500">
                        {step.minutes}
                      </span>
                    </div>
                    <p className="mt-1.5 text-sm leading-relaxed text-slate-600">
                      {step.copy}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          {/* Compliance callout */}
          <aside
            className="mt-14 flex flex-col gap-5 rounded-2xl border p-6 sm:flex-row sm:items-center sm:gap-6 sm:p-8"
            style={{
              background: 'rgba(26,41,66,0.04)',
              borderColor: 'rgba(26,41,66,0.18)',
            }}
            aria-label="Compliance requirement"
          >
            <span
              className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-white"
              style={{ background: NAVY }}
              aria-hidden="true"
            >
              <Shield size={22} strokeWidth={1.7} />
            </span>
            <div className="flex-1">
              <div className="flex items-center gap-3">
                <SectionLabel>Compliance</SectionLabel>
                <span className="hidden h-px flex-1 bg-slate-300/60 sm:block" />
              </div>
              <h3
                className="mt-1 text-xl"
                style={{
                  color: NAVY,
                                    fontWeight: 500,
                }}
              >
                BAA required — this workflow touches PHI.
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-slate-600">
                You&apos;ll sign a Business Associate Agreement before go-live.
                Storage, transport, and audit logging are HIPAA-aligned by default.
              </p>
            </div>
            <a
              href="#cta"
              className="inline-flex items-center gap-2 self-start rounded-full border border-slate-300 px-5 py-2.5 text-sm font-semibold transition-colors hover:bg-white sm:self-auto"
              style={{ color: NAVY }}
            >
              Review BAA
              <ArrowRight size={14} />
            </a>
          </aside>
        </div>
      </section>

      {/* ============== 6 · FINAL CTA ============== */}
      <section
        id="cta"
        className="relative overflow-hidden"
        style={{ background: NAVY }}
        aria-labelledby="cta-title"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-32 top-1/2 h-[460px] w-[460px] -translate-y-1/2 rounded-full opacity-[0.07]"
          style={{ background: 'radial-gradient(circle, #FFFFFF 0%, transparent 70%)' }}
        />
        <div className="relative mx-auto max-w-5xl px-6 py-24 text-center sm:px-8 md:py-32">
          <span className="inline-block text-[11px] font-semibold tracking-[0.28em] uppercase text-white/60">
            Ready when you are
          </span>

          <blockquote
            id="cta-title"
            className="mx-auto mt-10 max-w-3xl text-4xl leading-tight italic tracking-tight text-white sm:text-5xl md:text-6xl"
            style={{
                            fontWeight: 400,
            }}
          >
            &ldquo;Front desk untouched.&rdquo;
          </blockquote>

          <p className="mx-auto mt-8 max-w-xl text-base leading-relaxed text-white/70">
            Drop the workflow into your N8N instance this afternoon. We&apos;ll wire
            up your scheduler, clearinghouse, and messaging on a free 30-minute call.
          </p>

          <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#"
              className="group inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-semibold shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-xl"
              style={{ color: NAVY }}
            >
              Get this workflow
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-0.5"
              />
            </a>
            <a
              href="/automation/templates"
              className="inline-flex items-center gap-2 rounded-full border border-white/25 px-7 py-3.5 text-sm font-medium text-white/85 transition-colors hover:border-white/50 hover:text-white"
            >
              See all six workflows
            </a>
          </div>

          <div className="mt-14 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-[11px] font-semibold tracking-[0.2em] uppercase text-white/50">
            <span className="inline-flex items-center gap-2">
              <CheckCircle2 size={12} /> BAA on signing
            </span>
            <span className="inline-flex items-center gap-2">
              <CheckCircle2 size={12} /> 7-node N8N spec
            </span>
            <span className="inline-flex items-center gap-2">
              <CheckCircle2 size={12} /> Yours to keep
            </span>
          </div>
        </div>
      </section>
    </main>
  );
};

export default PatientIntakeWorkflow;
