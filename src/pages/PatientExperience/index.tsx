import type { JSX } from 'react';
import Breadcrumb from '../../components/Breadcrumb';
import Section from '../../components/editorial/Section';
import EditorialCTA from '../../components/editorial/EditorialCTA';
import { CountUp, Reveal } from '../../lib/motion';

const HEAD_META = [
  { label: 'Scope',   value: 'Pre-visit to follow-up' },
  { label: 'Lens',    value: 'Patient & operations' },
  { label: 'Toolkit', value: 'Map · Audit · Pilot' },
  { label: 'Updated', value: 'May 2026' },
];

type StageKey = 'search' | 'decide' | 'book' | 'visit' | 'followup';

const JOURNEY: {
  n: string;
  key: StageKey;
  stage: string;
  moment: string;
  note: string;
  /** Typical drop-off risk before intervention, 0-100. Drives the small bar inside the node. */
  risk: number;
}[] = [
  { n: '01', key: 'search',   stage: 'Search',    moment: 'Looking for help',     note: 'The patient is at their most uncertain. Reading reviews, comparing addresses, scanning for confidence cues.', risk: 22 },
  { n: '02', key: 'decide',   stage: 'Decide',    moment: 'Choosing a provider',  note: 'Visiting your website, comparing two finalists, often on a phone, often late at night.', risk: 31 },
  { n: '03', key: 'book',     stage: 'Book',      moment: 'Securing a slot',      note: 'Friction here costs more than any other point. Two-tap booking versus a six-field form is a 4× gap.', risk: 38 },
  { n: '04', key: 'visit',    stage: 'Visit',     moment: 'In the building',      note: 'On-site experience folds back into reviews and recall. The website cannot save a difficult front desk.', risk: 12 },
  { n: '05', key: 'followup', stage: 'Follow-up', moment: 'After they leave',     note: 'Empathetic check-in is the highest-leverage retention touchpoint. Wellness > sales.', risk: 18 },
];

const FRICTION = [
  { stage: 'Search',    before: 22, after: 5,  delta: '-17pt' },
  { stage: 'Decide',    before: 31, after: 8,  delta: '-23pt' },
  { stage: 'Book',      before: 38, after: 9,  delta: '-29pt' },
  { stage: 'Visit',     before: 12, after: 3,  delta: '-9pt'  },
  { stage: 'Follow-up', before: 18, after: 6,  delta: '-12pt' },
];

const TOUCHPOINTS: { tag: string; key: StageKey; list: string[] }[] = [
  { tag: 'Discovery', key: 'search',   list: ['Local search visibility', 'Map Pack presence', 'Review surface'] },
  { tag: 'Decision',  key: 'decide',   list: ['Pricing clarity', 'Provider bios', 'Booking pathway'] },
  { tag: 'Booking',   key: 'book',     list: ['Mobile flow', 'Insurance check', 'Confirmation cadence'] },
  { tag: 'Visit',     key: 'visit',    list: ['Pre-visit forms', 'Wait time signals', 'Post-visit recap'] },
  { tag: 'Follow-up', key: 'followup', list: ['Recall reminders', 'Wellness nurtures', 'Review request'] },
];

const METRICS = [
  { value: 8.4,  suffix: '%',  decimals: 1, k: 'Booking CVR',   d: 'Median conversion rate once the booking pathway is redesigned around two-tap.' },
  { value: 62,   prefix: '−', suffix: '%',  k: 'Drop-off',      d: 'Reduction in mid-booking abandonment after pre-visit form streamlining.' },
  { value: 34,   prefix: '+', suffix: '%',  k: 'Repeat visits', d: 'Patient return rate over twelve months after follow-up cadence is installed.' },
  { value: 48,   prefix: '−', suffix: '%',  k: 'No-shows',      d: 'Reduction in no-show rate after structured pre-visit and confirmation flow.' },
];

const PROCESS = [
  { n: '01', key: 'map'   as const, k: 'Map',    cycle: 'Week 1',     d: 'Working session with your clinical and front-desk leads. We rebuild the journey from a real patient\'s perspective and surface every friction point.' },
  { n: '02', key: 'audit' as const, k: 'Audit',  cycle: 'Week 1–2',   d: 'A forensic audit of each surface: SERPs, GBP, site, booking flow, intake forms, no-show cadence, review loop. Findings ranked by friction impact.' },
  { n: '03', key: 'pilot' as const, k: 'Pilot',  cycle: 'Week 3–6',   d: 'A single highest-leverage fix shipped end-to-end. Pre/post metrics on the same dashboard the practice uses every day.' },
];

/* ---------------- ICONS ---------------- */

const ICON_PROPS = {
  width: 22, height: 22, viewBox: '0 0 24 24', fill: 'none',
  stroke: 'currentColor', strokeWidth: 1.6,
  strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const,
};

const SearchIcon = () => (
  <svg {...ICON_PROPS}><circle cx="11" cy="11" r="6" /><path d="m20 20-4.3-4.3" /></svg>
);
const DecideIcon = () => (
  <svg {...ICON_PROPS}><path d="M12 3v18" /><path d="M5 8h14" /><path d="m5 8-2 6a4 4 0 0 0 8 0Z" /><path d="m19 8-2 6a4 4 0 0 0 8 0Z" /></svg>
);
const BookIcon = () => (
  <svg {...ICON_PROPS}><rect x="3" y="5" width="18" height="16" rx="2" /><path d="M3 10h18" /><path d="M8 3v4" /><path d="M16 3v4" /><circle cx="12" cy="15" r="1.5" /></svg>
);
const VisitIcon = () => (
  <svg {...ICON_PROPS}><path d="M4 21V8l8-5 8 5v13" /><path d="M9 21v-7h6v7" /><path d="M4 21h16" /></svg>
);
const FollowupIcon = () => (
  <svg {...ICON_PROPS}><path d="M21 12a8 8 0 0 1-11.6 7.1L4 21l1.9-5.4A8 8 0 1 1 21 12Z" /><circle cx="9" cy="12" r="0.8" /><circle cx="12" cy="12" r="0.8" /><circle cx="15" cy="12" r="0.8" /></svg>
);
const MapIcon = () => (
  <svg {...ICON_PROPS}><path d="M9 4v16M15 8v12" /><path d="m3 6 6-2 6 2 6-2v14l-6 2-6-2-6 2Z" /></svg>
);
const AuditIcon = () => (
  <svg {...ICON_PROPS}><rect x="5" y="4" width="14" height="17" rx="2" /><path d="M9 4v3h6V4" /><path d="m9 13 2 2 4-4" /></svg>
);
const PilotIcon = () => (
  <svg {...ICON_PROPS}><path d="M4 21V4l13 6.5L4 17" /><path d="M11 13v8" /></svg>
);

const STAGE_ICON: Record<StageKey, () => JSX.Element> = {
  search: SearchIcon,
  decide: DecideIcon,
  book: BookIcon,
  visit: VisitIcon,
  followup: FollowupIcon,
};

const PROCESS_ICON: Record<'map' | 'audit' | 'pilot', () => JSX.Element> = {
  map: MapIcon,
  audit: AuditIcon,
  pilot: PilotIcon,
};

/* ---------------- HERO ---------------- */

const Hero = () => (
  <section className="ph-page-head">
    <div className="container-shell">
      <Breadcrumb current="Patient Experience" />
      <div className="mt-6 grid lg:grid-cols-12 gap-x-12 gap-y-10 items-end">
        <div className="lg:col-span-8">
          <div className="flex items-center gap-3 text-line font-mono text-[12px] tracking-[0.22em] uppercase">
            <span className="inline-block h-[6px] w-[6px] rounded-full bg-accent-soft" />
            UX · Journey · Operations
          </div>
          <h1 className="mt-6 text-heading font-extrabold leading-[0.98] tracking-[-0.038em] text-[clamp(44px,6.4vw,86px)]">
            The patient journey,<br />
            <span className="text-line italic">designed</span>.
          </h1>
          <p className="mt-7 text-body text-[17px] leading-[1.65] max-w-[58ch]">
            Patient experience is not a brand exercise. It is a working operating system that
            stretches from a 2 a.m. Google search to a follow-up text a week after a visit.
            Map it. Audit it. Pilot the fix.
          </p>

          {/* Inline 5-stage primer — gives the visual story before they scroll */}
          <div className="mt-10 flex items-center gap-2 sm:gap-4 max-w-[560px]" aria-hidden="true">
            {JOURNEY.map((j, i) => {
              const Icon = STAGE_ICON[j.key];
              return (
                <div key={j.key} className="flex items-center flex-1 last:flex-initial">
                  <div className="flex flex-col items-center gap-2 group">
                    <div className="h-9 w-9 rounded-full border border-line-faint bg-bg flex items-center justify-center text-line transition-colors group-hover:border-heading group-hover:text-heading">
                      <Icon />
                    </div>
                    <span className="hidden sm:block text-[10px] uppercase tracking-[0.18em] text-muted font-semibold">
                      {j.stage}
                    </span>
                  </div>
                  {i < JOURNEY.length - 1 && (
                    <span className="flex-1 h-px bg-line-faint mx-2 sm:mx-3" />
                  )}
                </div>
              );
            })}
          </div>
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

/* ---------------- 01 · VISUAL JOURNEY ---------------- */

const Journey = () => (
  <Section
    no="01"
    title="The five-stage journey"
    kicker="Sequential stages, sequential trust. A failure at any stage compounds the cost of acquiring the next."
  >
    {/* Desktop / tablet: horizontal connected diagram */}
    <div className="hidden md:block">
      <Reveal variant="up">
        <div className="relative border-t-2 border-heading pt-12 pb-6">
          {/* dotted connector line behind the stops */}
          <div className="absolute left-0 right-0 top-[88px] h-px border-t border-dashed border-line-faint pointer-events-none" />
          <ol className="relative grid grid-cols-5 gap-4">
            {JOURNEY.map((j) => {
              const Icon = STAGE_ICON[j.key];
              return (
                <li key={j.key} className="flex flex-col items-center text-center group">
                  <span className="font-mono text-[12px] text-muted tracking-[0.18em]">{j.n}</span>
                  <div className="mt-3 h-14 w-14 rounded-full bg-bg border-2 border-heading flex items-center justify-center text-heading transition-transform group-hover:scale-105">
                    <Icon />
                  </div>
                  <h3 className="mt-5 text-heading text-[22px] font-extrabold tracking-[-0.018em] leading-[1.1]">
                    {j.stage}
                  </h3>
                  <div className="mt-1.5 text-[11px] uppercase tracking-[0.16em] text-muted font-semibold">
                    {j.moment}
                  </div>
                  {/* risk indicator */}
                  <div className="mt-4 w-full max-w-[140px]">
                    <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.16em] text-muted font-semibold">
                      <span>Drop-off risk</span>
                      <span className="text-heading tabular-nums">{j.risk}%</span>
                    </div>
                    <div className="mt-1.5 h-[3px] bg-line-faint rounded-full overflow-hidden">
                      <div
                        className="h-full bg-cta"
                        style={{ width: `${j.risk * 2.4}%` }}
                      />
                    </div>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </Reveal>

      {/* descriptions below — same order, indexed visually */}
      <div className="mt-10 grid grid-cols-5 gap-4">
        {JOURNEY.map((j) => (
          <p key={j.key} className="text-body text-[13px] leading-[1.55]">
            {j.note}
          </p>
        ))}
      </div>
    </div>

    {/* Mobile: vertical stack with connector */}
    <div className="md:hidden border-t-2 border-heading">
      {JOURNEY.map((j, i) => {
        const Icon = STAGE_ICON[j.key];
        return (
          <div key={j.key} className="relative py-6 border-b border-line-faint">
            {i < JOURNEY.length - 1 && (
              <span className="absolute left-[27px] top-[60px] bottom-0 w-px border-l border-dashed border-line-faint" />
            )}
            <div className="flex items-start gap-4">
              <div className="h-14 w-14 rounded-full bg-bg border-2 border-heading flex items-center justify-center text-heading shrink-0">
                <Icon />
              </div>
              <div className="flex-1">
                <div className="flex items-baseline gap-3">
                  <span className="font-mono text-[12px] text-muted tracking-[0.18em]">{j.n}</span>
                  <h3 className="text-heading text-[22px] font-extrabold tracking-[-0.018em] leading-none">
                    {j.stage}
                  </h3>
                </div>
                <div className="mt-1.5 text-[11px] uppercase tracking-[0.16em] text-muted font-semibold">
                  {j.moment}
                </div>
                <p className="mt-3 text-body text-[14.5px] leading-[1.55]">{j.note}</p>
                <div className="mt-4">
                  <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.16em] text-muted font-semibold">
                    <span>Drop-off risk</span>
                    <span className="text-heading tabular-nums">{j.risk}%</span>
                  </div>
                  <div className="mt-1.5 h-[3px] bg-line-faint rounded-full overflow-hidden">
                    <div className="h-full bg-cta" style={{ width: `${j.risk * 2.4}%` }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  </Section>
);

/* ---------------- 02 · NEW: FRICTION MAP ---------------- */

const FrictionMap = () => {
  // Scale the longest bar (38) so the largest fills ~90% of the track width
  const max = 40;
  return (
    <Section
      no="02"
      title="Where patients leak"
      kicker="Aggregate drop-off across single-location clinic engagements. Same stages, before and after the work."
    >
      <Reveal variant="up">
        <div className="border-t-2 border-heading pt-10">
          <div className="grid sm:grid-cols-[1fr_auto_1fr] gap-x-6 gap-y-3 items-baseline">
            <div className="text-[10px] uppercase tracking-[0.2em] text-muted font-semibold">
              Without the work
            </div>
            <div className="hidden sm:block" />
            <div className="text-[10px] uppercase tracking-[0.2em] text-muted font-semibold sm:text-right">
              After the pilot
            </div>

            {FRICTION.map((f) => (
              <div key={f.stage} className="contents">
                {/* before bar (right-anchored) */}
                <div className="flex items-center gap-3 justify-end">
                  <span className="text-body text-[13px] tabular-nums w-9 text-right">{f.before}%</span>
                  <div className="h-[10px] bg-line-faint rounded-l-full overflow-hidden w-full max-w-[260px]">
                    <div
                      className="h-full bg-cta/80 ml-auto rounded-l-full"
                      style={{ width: `${(f.before / max) * 100}%`, marginLeft: 'auto' }}
                    />
                  </div>
                </div>

                {/* stage label center */}
                <div className="text-center text-heading font-bold text-[13px] tracking-[-0.01em] uppercase whitespace-nowrap px-2">
                  {f.stage}
                </div>

                {/* after bar (left-anchored) + delta */}
                <div className="flex items-center gap-3">
                  <div className="h-[10px] bg-line-faint rounded-r-full overflow-hidden w-full max-w-[260px]">
                    <div
                      className="h-full bg-accent-soft rounded-r-full"
                      style={{ width: `${(f.after / max) * 100}%` }}
                    />
                  </div>
                  <span className="text-body text-[13px] tabular-nums w-9">{f.after}%</span>
                  <span className="text-[11px] uppercase tracking-[0.16em] text-line font-semibold tabular-nums">
                    {f.delta}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-6 text-[12px] text-muted">
            <div className="flex items-center gap-2">
              <span className="inline-block h-3 w-3 rounded-sm bg-cta/80" />
              <span>Typical drop-off, no PX programme</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="inline-block h-3 w-3 rounded-sm bg-accent-soft" />
              <span>Drop-off after the highest-leverage fix</span>
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  );
};

/* ---------------- 03 · TOUCHPOINTS ---------------- */

const Touchpoints = () => (
  <Section
    no="03"
    title="Surface-by-surface touchpoints"
    kicker="Each stage has three working surfaces. We audit, prioritise, and pilot one at a time."
  >
    <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-[1px] bg-line-faint border border-line-faint">
      {TOUCHPOINTS.map((t, i) => {
        const Icon = STAGE_ICON[t.key];
        return (
          <div key={t.tag} className="bg-bg p-6 flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[11px] text-line tracking-[0.18em]">0{i + 1}.</span>
              <span className="h-8 w-8 rounded-full border border-line-faint flex items-center justify-center text-line">
                <Icon />
              </span>
            </div>
            <h4 className="text-heading text-[18px] font-bold tracking-[-0.015em]">{t.tag}</h4>
            <ul className="space-y-2 text-[13px] text-body mt-auto">
              {t.list.map((l) => (
                <li key={l} className="flex gap-2 items-baseline">
                  <span className="text-line">-</span>
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

/* ---------------- 04 · METRICS ---------------- */

const Metrics = () => (
  <Section
    no="04"
    title="What the work moves"
    kicker="Median results across patient-experience engagements. Bracketed by vertical inside the dashboard."
  >
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-[1px] bg-heading">
      {METRICS.map((m, i) => (
        <div key={m.k} className="bg-bg p-7 flex flex-col gap-3">
          <span className="font-mono text-[11px] text-line tracking-[0.18em]">0{i + 1}.</span>
          <div className="text-heading font-extrabold text-[52px] leading-[0.95] tracking-[-0.035em] tabular-nums">
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

/* ---------------- 05 · NEW: PROCESS ---------------- */

const Process = () => (
  <Section
    no="05"
    title="How the work runs"
    kicker="A six-week working block. One map, one audit, one pilot — shipped, measured, owned."
  >
    <Reveal variant="up">
      <div className="border-t-2 border-heading pt-10">
        <div className="grid md:grid-cols-3 gap-x-8 gap-y-12 relative">
          {/* connector line on desktop */}
          <div className="hidden md:block absolute left-[8%] right-[8%] top-[26px] h-px border-t border-dashed border-line-faint pointer-events-none" />

          {PROCESS.map((p) => {
            const Icon = PROCESS_ICON[p.key];
            return (
              <div key={p.k} className="relative bg-bg flex flex-col gap-4">
                <div className="flex items-center gap-4">
                  <div className="relative h-14 w-14 rounded-full bg-heading text-white flex items-center justify-center shrink-0">
                    <Icon />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-mono text-[12px] text-line tracking-[0.18em]">{p.n}</span>
                    <span className="text-[10px] uppercase tracking-[0.18em] text-muted font-semibold">{p.cycle}</span>
                  </div>
                </div>
                <h3 className="text-heading text-[26px] font-extrabold tracking-[-0.02em] leading-[1.1]">
                  {p.k}
                  <span className="text-line">.</span>
                </h3>
                <p className="text-body text-[14.5px] leading-[1.6]">{p.d}</p>
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
    title="Map your patient journey"
    kicker="Two-week working session that delivers a journey map and a ranked pilot list."
  >
    <EditorialCTA
      eyebrow="Working Session"
      title="Treat your patient like the audience you would never lose."
      description="Map the journey, audit the surfaces, pilot the single highest-friction step. Two weeks of work, one map, one ranked list. We do not pitch beyond that without a signed pilot."
      primaryHref="/contact"
      primaryLabel="Book the session →"
      secondaryHref="/case-studies"
      secondaryLabel="See journey case studies"
    />
  </Section>
);

const PatientExperience = () => (
  <>
    <Hero />
    <Journey />
    <FrictionMap />
    <Touchpoints />
    <Metrics />
    <Process />
    <Closing />
  </>
);

export default PatientExperience;
