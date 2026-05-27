import {
  ArrowRight,
  Bell,
  Brain,
  CalendarCheck,
  CalendarDays,
  CheckCircle2,
  Clock,
  Database,
  GitBranch,
  Hourglass,
  Inbox,
  MessageCircle,
  Moon,
  Network,
  Shield,
  Sparkles,
  Tag,
  UserPlus,
  UserX,
  type LucideIcon,
} from 'lucide-react';

/* ============================================================
   AUTOMATION TEMPLATE · DETAIL PAGE
   GPT Chatbot for Lead Capture
   Self-contained — Tailwind + lucide-react only.
   ============================================================ */

const NAVY = '#1A2942';

const STATS: { icon: LucideIcon; value: string; label: string }[] = [
  { icon: Network, value: '10 nodes', label: 'N8N workflow' },
  { icon: Clock, value: '~75 min', label: 'Setup time' },
  { icon: Hourglass, value: '24/7', label: 'Lead capture' },
  { icon: Shield, value: 'PHI-free', label: 'No patient data' },
];

const BEFORE: { icon: LucideIcon; text: string }[] = [
  { icon: Moon, text: 'Leads land at midnight, replied to next afternoon.' },
  { icon: UserX, text: 'Inquiry forms with no real follow-through.' },
  { icon: Inbox, text: 'Off-brand auto-replies that go nowhere.' },
  { icon: Brain, text: 'Risk of a chatbot inventing a clinical answer.' },
];

const AFTER: { icon: LucideIcon; text: string }[] = [
  { icon: MessageCircle, text: 'Visitor greeted within seconds, any hour.' },
  { icon: Shield, text: 'Scoped to your FAQs — no clinical guesses, ever.' },
  { icon: UserPlus, text: 'Qualified leads land in your CRM, ready to call.' },
  { icon: CalendarCheck, text: 'Bookings drop into the calendar without you.' },
];

const NODES: { n: string; icon: LucideIcon; label: string; copy: string }[] = [
  {
    n: '01',
    icon: MessageCircle,
    label: 'Chat Opened',
    copy: 'Trigger fires the moment the widget receives its first message.',
  },
  {
    n: '02',
    icon: Sparkles,
    label: 'Greet & Capture',
    copy: 'A warm, on-brand opener asks what the visitor came for.',
  },
  {
    n: '03',
    icon: Brain,
    label: 'GPT Classify Intent',
    copy: 'Intent is parsed: booking, general question, clinical, or other.',
  },
  {
    n: '04',
    icon: Shield,
    label: 'Knowledge Guardrail',
    copy: 'Responses are pinned to your FAQ — clinical questions escalate.',
  },
  {
    n: '05',
    icon: GitBranch,
    label: 'Qualified Lead?',
    copy: 'IF node splits the flow on intent and a short qualification check.',
  },
  {
    n: '06',
    icon: UserPlus,
    label: 'Collect Contact',
    copy: 'Name, email, and best number — captured in two short turns.',
  },
  {
    n: '07',
    icon: CalendarDays,
    label: 'Check Availability',
    copy: 'Live read of the scheduler returns the next three open slots.',
  },
  {
    n: '08',
    icon: CalendarCheck,
    label: 'Book Appointment',
    copy: 'Visitor picks a slot and the calendar event is created.',
  },
  {
    n: '09',
    icon: Database,
    label: 'Push to CRM',
    copy: 'Lead record lands in your CRM with the full transcript attached.',
  },
  {
    n: '10',
    icon: Bell,
    label: 'Notify & Confirm',
    copy: 'Staff alert fires; patient gets a branded confirmation in seconds.',
  },
];

const OUTCOMES: { icon: LucideIcon; label: string; copy: string }[] = [
  {
    icon: Clock,
    label: '24/7 lead capture',
    copy: 'Inquiries handled in real time — weekends and after-hours included.',
  },
  {
    icon: Shield,
    label: 'Scoped, safe answers',
    copy: 'The bot only speaks from your sanctioned content — never invents.',
  },
  {
    icon: CalendarCheck,
    label: 'Auto-booked visits',
    copy: 'Qualified leads pick a slot inside the chat, no callback needed.',
  },
  {
    icon: Tag,
    label: 'CRM-fed pipeline',
    copy: 'Every conversation lands tagged, transcribed, and ready to action.',
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
    title: 'Configure & connect',
    copy: 'GPT key, knowledge base, scheduler, and CRM — credentials and prompts.',
    minutes: '45 min',
  },
  {
    n: '03',
    title: 'Pilot & switch on',
    copy: 'Soft-launch on a hidden page, then drop the widget on your homepage.',
    minutes: '20 min',
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

const GptChatbotWorkflow = () => {
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
            <span style={{ color: NAVY }}>FIG. 06-01</span>
            <span className="h-px w-8 bg-slate-300" />
            <span>AI</span>
          </div>

          <h1
            className="mt-8 max-w-4xl text-4xl leading-[1.05] tracking-tight sm:text-5xl md:text-6xl"
            style={{
              color: NAVY,
                            fontWeight: 500,
            }}
          >
            GPT Chatbot
            <span className="text-slate-400"> · </span>
            <span className="italic">Lead Capture.</span>
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-slate-600 sm:text-xl">
            A scoped GPT assistant that qualifies leads, routes by intent, and books —
            <em className="text-slate-800"> without ever inventing a clinical answer</em>.
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
              From silent inboxes to qualified leads.
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
                The website goes quiet at 5pm.
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
                A scoped assistant answers, every hour.
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
                Ten nodes, guard-railed end-to-end.
              </h2>
            </div>
            <div className="flex items-center gap-2 text-[11px] font-mono text-slate-500">
              <Network size={14} strokeWidth={1.6} />
              <span>n8n · 10 nodes</span>
            </div>
          </div>

          <Divider />

          <div className="mt-14">
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
              Four moves, every lead qualified.
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
                Live before lunch.
              </h2>
              <p className="mt-5 text-base leading-relaxed text-slate-600">
                Three steps, ~75 minutes total. No code. Your GPT key, knowledge base,
                scheduler, and CRM all stay exactly where they are.
              </p>
            </div>

            <ol className="relative md:col-span-7" aria-label="Setup steps">
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
                PHI-free — scoped to public-facing Q&amp;A.
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-slate-600">
                Clinical questions auto-escalate to a human and the bot never reads
                from the chart. Safe to deploy without a BAA.
              </p>
            </div>
            <a
              href="#cta"
              className="inline-flex items-center gap-2 self-start rounded-full border border-slate-300 px-5 py-2.5 text-sm font-semibold transition-colors hover:bg-white sm:self-auto"
              style={{ color: NAVY }}
            >
              See the policy
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
            &ldquo;Qualifies while you sleep.&rdquo;
          </blockquote>

          <p className="mx-auto mt-8 max-w-xl text-base leading-relaxed text-white/70">
            Drop the workflow into your N8N instance this afternoon. We&apos;ll wire up
            the GPT scope, scheduler, and CRM on a free 30-minute call.
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
              <CheckCircle2 size={12} /> PHI-free deploy
            </span>
            <span className="inline-flex items-center gap-2">
              <CheckCircle2 size={12} /> 10-node N8N spec
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

export default GptChatbotWorkflow;
