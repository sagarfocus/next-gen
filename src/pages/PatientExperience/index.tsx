import { Link } from 'react-router-dom';
import Breadcrumb from '../../components/Breadcrumb';

const HEAD_META = [
  { label: 'Scope',     value: 'Pre-visit to follow-up' },
  { label: 'Lens',      value: 'Patient & operations' },
  { label: 'Toolkit',   value: 'Map · Audit · Pilot' },
  { label: 'Updated',   value: 'May 2026' },
];

const JOURNEY = [
  { n: '01', stage: 'Search',    moment: 'Looking for help',         note: 'The patient is at their most uncertain. Reading reviews, comparing addresses, scanning for confidence cues.' },
  { n: '02', stage: 'Decide',    moment: 'Choosing a provider',      note: 'Visiting your website, comparing two finalists, often on a phone, often late at night.' },
  { n: '03', stage: 'Book',      moment: 'Securing a slot',          note: 'Friction here costs more than any other point. Two-tap booking versus a six-field form is a 4× gap.' },
  { n: '04', stage: 'Visit',     moment: 'In the building',          note: 'On-site experience folds back into reviews and recall. The website cannot save a difficult front desk.' },
  { n: '05', stage: 'Follow-up', moment: 'After they leave',         note: 'Empathetic check-in is the highest-leverage retention touchpoint. Wellness > sales.' },
];

const TOUCHPOINTS = [
  { tag: 'Discovery', list: ['Local search visibility', 'Map Pack presence', 'Review surface'] },
  { tag: 'Decision',  list: ['Pricing clarity', 'Provider bios', 'Booking pathway'] },
  { tag: 'Booking',   list: ['Mobile flow', 'Insurance check', 'Confirmation cadence'] },
  { tag: 'Visit',     list: ['Pre-visit forms', 'Wait time signals', 'Post-visit recap'] },
  { tag: 'Follow-up', list: ['Recall reminders', 'Wellness nurtures', 'Review request'] },
];

const METRICS = [
  { v: '8.4%',  k: 'Booking CVR',     d: 'Median conversion rate once the booking pathway is redesigned around two-tap.' },
  { v: '−62%',  k: 'Drop-off',        d: 'Reduction in mid-booking abandonment after pre-visit form streamlining.' },
  { v: '+34%',  k: 'Repeat visits',   d: 'Patient return rate over twelve months after follow-up cadence is installed.' },
  { v: '−48%',  k: 'No-shows',        d: 'Reduction in no-show rate after structured pre-visit and confirmation flow.' },
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
      <Breadcrumb current="Patient Experience" />
      <div className="mt-6 grid lg:grid-cols-12 gap-x-12 gap-y-10 items-end">
        <div className="lg:col-span-8">
          <div className="flex items-center gap-3 text-line font-mono text-[12px] tracking-[0.22em] uppercase">
            <span className="inline-block h-[6px] w-[6px] rounded-full bg-accent-soft" />
            UX · Journey · Operations
          </div>
          <h1 className="mt-6 text-heading font-extrabold leading-[0.98] tracking-[-0.038em] text-[clamp(44px,6.4vw,86px)]">
            The patient journey,<br/>
            <span className="text-line italic">designed</span>.
          </h1>
          <p className="mt-7 text-body text-[17px] leading-[1.65] max-w-[58ch]">
            Patient experience is not a brand exercise. It is a working operating system that
            stretches from a 2 a.m. Google search to a follow-up text a week after a visit.
            Map it. Audit it. Pilot the fix.
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

const Journey = () => (
  <Section no="01" title="The five-stage journey" kicker="Sequential stages, sequential trust. A failure at any stage compounds the cost of acquiring the next.">
    <div className="border-t-2 border-heading">
      {JOURNEY.map((j) => (
        <div key={j.n} className="grid lg:grid-cols-12 gap-x-10 gap-y-3 py-7 border-b border-line-faint items-baseline">
          <div className="lg:col-span-1 font-mono text-line text-[14px] tracking-[0.18em]">{j.n}</div>
          <div className="lg:col-span-3">
            <h3 className="text-heading text-[26px] font-extrabold tracking-[-0.022em] leading-none">{j.stage}<span className="text-line">.</span></h3>
            <div className="mt-2 text-[12px] uppercase tracking-[0.16em] text-muted font-semibold">{j.moment}</div>
          </div>
          <div className="lg:col-span-8">
            <p className="text-body text-[16px] leading-[1.65]">{j.note}</p>
          </div>
        </div>
      ))}
    </div>
  </Section>
);

const Touchpoints = () => (
  <Section no="02" title="Surface-by-surface touchpoints" kicker="Each stage has three working surfaces. We audit, prioritise, and pilot one at a time.">
    <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-[1px] bg-line-faint border border-line-faint">
      {TOUCHPOINTS.map((t, i) => (
        <div key={t.tag} className="bg-bg p-6 flex flex-col gap-4">
          <div className="flex items-baseline justify-between">
            <span className="font-mono text-[11px] text-line tracking-[0.18em]">0{i + 1}.</span>
            <span className="text-[9px] uppercase tracking-[0.18em] text-muted font-semibold">Stage</span>
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
      ))}
    </div>
  </Section>
);

const Metrics = () => (
  <Section no="03" title="What the work moves" kicker="Median results across patient-experience engagements. Bracketed by vertical inside the dashboard.">
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-[1px] bg-heading">
      {METRICS.map((m, i) => (
        <div key={m.k} className="bg-bg p-7 flex flex-col gap-3">
          <span className="font-mono text-[11px] text-line tracking-[0.18em]">0{i + 1}.</span>
          <div className="text-heading font-extrabold text-[52px] leading-[0.95] tracking-[-0.035em] tabular-nums">{m.v}</div>
          <div className="text-[10px] uppercase tracking-[0.18em] text-muted font-semibold">{m.k}</div>
          <p className="text-body text-[13px] leading-[1.55] mt-1 max-w-[28ch]">{m.d}</p>
        </div>
      ))}
    </div>
  </Section>
);

const Closing = () => (
  <Section no="04" title="Map your patient journey" kicker="Two-week working session that delivers a journey map and a ranked pilot list.">
    <div className="bg-heading text-white p-10 sm:p-14 relative overflow-hidden">
      <div className="absolute left-0 bottom-0 w-full h-[5px] bg-gradient-to-r from-accent-soft via-line to-cta" />
      <div className="font-mono text-[12px] tracking-[0.22em] text-line uppercase">Working Session</div>
      <h3 className="mt-5 text-[clamp(32px,4vw,52px)] font-extrabold leading-[1.02] tracking-[-0.028em] max-w-[20ch]">
        Treat your patient like the audience you would never lose.
      </h3>
      <p className="mt-6 text-white/75 text-[16px] leading-[1.6] max-w-[58ch]">
        Map the journey, audit the surfaces, pilot the single highest-friction step. Two weeks
        of work, one map, one ranked list. We do not pitch beyond that without a signed pilot.
      </p>
      <div className="mt-10 flex flex-wrap items-center gap-5">
        <Link to="/contact" className="btn-primary">Book the session →</Link>
        <Link to="/case-studies" className="text-white/85 text-[14px] font-medium underline-offset-4 hover:underline">
          See journey case studies
        </Link>
      </div>
    </div>
  </Section>
);

const PatientExperience = () => (
  <>
    <Hero />
    <Journey />
    <Touchpoints />
    <Metrics />
    <Closing />
  </>
);

export default PatientExperience;
