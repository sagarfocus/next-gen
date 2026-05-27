import {
  AlertCircle,
  ArrowRight,
  BarChart3,
  Calendar,
  CalendarX,
  CheckCircle2,
  Clock,
  FileText,
  Hourglass,
  Image,
  Layers,
  Megaphone,
  Network,
  Newspaper,
  PenLine,
  Rss,
  Send,
  Shield,
  ShieldCheck,
  Sparkles,
  type LucideIcon,
} from 'lucide-react';

/* ============================================================
   AUTOMATION TEMPLATE · DETAIL PAGE
   Daily AI Social Auto-Poster
   Self-contained — Tailwind + lucide-react only.
   ============================================================ */

const NAVY = '#1A2942';

const STATS: { icon: LucideIcon; value: string; label: string }[] = [
  { icon: Network, value: '9 nodes', label: 'N8N workflow' },
  { icon: Clock, value: '~50 min', label: 'Setup time' },
  { icon: Hourglass, value: '3 hrs', label: 'Creative saved/wk' },
  { icon: Shield, value: 'PHI-free', label: 'No patient data' },
];

const BEFORE: { icon: LucideIcon; text: string }[] = [
  { icon: CalendarX, text: 'Posting cadence drifts whenever the week gets busy.' },
  { icon: Image, text: 'Manual reformatting for every channel, every time.' },
  { icon: AlertCircle, text: 'Off-brand captions slip through under deadline.' },
  { icon: BarChart3, text: 'No clean record of what shipped, or when.' },
];

const AFTER: { icon: LucideIcon; text: string }[] = [
  { icon: Megaphone, text: 'A daily drip across LinkedIn, Instagram, and X.' },
  { icon: PenLine, text: 'Captions on-brand, sourced from your own content.' },
  { icon: ShieldCheck, text: 'Brand voice check before anything publishes.' },
  { icon: FileText, text: 'Every post logged with engagement, in one report.' },
];

const NODES: { n: string; icon: LucideIcon; label: string; copy: string }[] = [
  {
    n: '01',
    icon: Clock,
    label: 'Daily Cron Trigger',
    copy: 'Fires once a day at the time your audience is most active.',
  },
  {
    n: '02',
    icon: Rss,
    label: 'Pull Source Content',
    copy: 'Latest blog post or RSS item is pulled in as the day’s anchor.',
  },
  {
    n: '03',
    icon: PenLine,
    label: 'GPT Generate Caption',
    copy: 'On-brand captions written in your voice, tuned per platform.',
  },
  {
    n: '04',
    icon: Image,
    label: 'Generate / Select Image',
    copy: 'A matching image is generated or selected from your library.',
  },
  {
    n: '05',
    icon: ShieldCheck,
    label: 'Brand Voice Check',
    copy: 'Tone, claims, and banned phrases are screened before publish.',
  },
  {
    n: '06',
    icon: Layers,
    label: 'Format Per Platform',
    copy: 'LinkedIn long-form, IG square, X short — formatted automatically.',
  },
  {
    n: '07',
    icon: Calendar,
    label: 'Check Calendar',
    copy: 'Workflow checks your content calendar to avoid double-posts.',
  },
  {
    n: '08',
    icon: Send,
    label: 'Schedule & Post',
    copy: 'Posts go live, or land scheduled in your social tool of choice.',
  },
  {
    n: '09',
    icon: BarChart3,
    label: 'Log Post & Report',
    copy: 'Every shipment is logged — weekly digest lands in your inbox.',
  },
];

const OUTCOMES: { icon: LucideIcon; label: string; copy: string }[] = [
  {
    icon: Megaphone,
    label: 'Daily multi-channel posts',
    copy: 'LinkedIn, Instagram, and X kept fed without a manual scramble.',
  },
  {
    icon: PenLine,
    label: 'On-brand, every time',
    copy: 'Captions sourced from your own content — no generic filler.',
  },
  {
    icon: Calendar,
    label: 'No calendar clashes',
    copy: 'Workflow respects your existing content plan and campaigns.',
  },
  {
    icon: Newspaper,
    label: 'Reporting baked in',
    copy: 'Weekly digest shows what shipped, where, and how it performed.',
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
    title: 'Connect channels',
    copy: 'Content source, GPT key, social tools, and brand guide — all in.',
    minutes: '25 min',
  },
  {
    n: '03',
    title: 'Pilot & switch on',
    copy: 'Run a 48-hour draft-only pass, then flip publishing live.',
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

const SocialAutoPosterWorkflow = () => {
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
            <span style={{ color: NAVY }}>FIG. 07</span>
            <span className="h-px w-8 bg-slate-300" />
            <span>SOCIAL</span>
          </div>

          <h1
            className="mt-8 max-w-4xl text-4xl leading-[1.05] tracking-tight sm:text-5xl md:text-6xl"
            style={{
              color: NAVY,
                            fontWeight: 500,
            }}
          >
            Daily AI
            <span className="text-slate-400"> · </span>
            <span className="italic">Social Auto-Poster.</span>
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-slate-600 sm:text-xl">
            A daily content drip across LinkedIn, Instagram, and X — sourced from
            your blog, captioned on-brand, <em className="text-slate-800">scheduled around your calendar</em>.
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
              From sporadic posts to a daily drip.
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
                Content cadence runs on willpower.
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
                Content cadence runs on schedule.
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
                Nine nodes — content in, posts out.
              </h2>
            </div>
            <div className="flex items-center gap-2 text-[11px] font-mono text-slate-500">
              <Network size={14} strokeWidth={1.6} />
              <span>n8n · 9 nodes</span>
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
              Four habits, on automatic.
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
                Three steps, ~50 minutes total. No code. Your blog, GPT key,
                social tools, and brand guide stay exactly where they are.
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
                PHI-free — content only, no patient data.
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-slate-600">
                The workflow reads your public blog and ships public posts. No chart,
                no scheduler, no patient identifiers. Safe to deploy without a BAA.
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
            &ldquo;Set once, ship daily.&rdquo;
          </blockquote>

          <p className="mx-auto mt-8 max-w-xl text-base leading-relaxed text-white/70">
            Drop the workflow into your N8N instance this afternoon. We&apos;ll wire up
            your blog, GPT key, and social channels on a free 30-minute call.
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
              <CheckCircle2 size={12} /> 9-node N8N spec
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

export default SocialAutoPosterWorkflow;
