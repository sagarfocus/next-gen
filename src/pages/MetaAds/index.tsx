import Breadcrumb from '../../components/Breadcrumb';
import Section from '../../components/editorial/Section';
import EditorialCTA from '../../components/editorial/EditorialCTA';

const HEAD_META = [
  { label: 'Platforms',  value: 'IG · FB · WhatsApp' },
  { label: 'Build',      value: 'Conversions API' },
  { label: 'Compliance', value: 'Healthcare-aware' },
  { label: 'Reporting',  value: 'Live dashboard' },
];

const STACK = [
  { tag: 'Discovery',  k: 'Reels & Stories', d: 'Vertical-native creative shot for the feed - not repurposed.' },
  { tag: 'Consider',   k: 'Lead Forms',      d: 'Pre-qualifying questions, instant CRM handoff, no manual export.' },
  { tag: 'Convert',    k: 'Conversions API', d: 'Server-side events keep tracking accurate after iOS signal loss.' },
  { tag: 'Retain',     k: 'WhatsApp Click-to-Chat', d: 'Recovery flow for the 70%+ of leads who never finish a form.' },
];

const TACTICS = [
  { n: '01', h: 'Audience layering',        d: 'Layered geo + interest + custom audience stacks built per service line.' },
  { n: '02', h: 'Vertical creative kits',   d: 'Editorial-grade creative scripts and edits, recorded in-clinic or remote.' },
  { n: '03', h: 'Pre-qualifying lead forms',d: 'Three-question filter that reduces tire-kickers without killing volume.' },
  { n: '04', h: 'Booking pixel + CAPI',     d: 'Server-side conversions with deduped event IDs - what iOS hid, we surface.' },
  { n: '05', h: 'Compliant before/after',   d: 'Aesthetic creative frameworks that survive Meta review and brand guidelines.' },
  { n: '06', h: 'Retention nudges',         d: 'Win-back, recall, and reactivation audiences. Lookalikes from booked patients.' },
];

const RESULTS = [
  { k: 'CPL',      v: '−42%',  desc: 'Median cost-per-lead reduction across the active book.' },
  { k: 'CVR',      v: '8.4%',  desc: 'Booking conversion on landed traffic for retained clinics.' },
  { k: 'ROAS',     v: '4.6×',  desc: 'Tracked return on Meta spend in aesthetic and dental verticals.' },
  { k: 'Quality',  v: '+62%',  desc: 'Improvement in lead-to-booked rate after pre-qualifying filters.' },
];

const Hero = () => (
  <section className="ph-page-head">
    <div className="container-shell">
      <Breadcrumb current="Meta Ads" />
      <div className="mt-6 grid lg:grid-cols-12 gap-x-12 gap-y-10 items-end">
        <div className="lg:col-span-8">
          <div className="flex items-center gap-3 text-line font-mono text-[12px] tracking-[0.22em] uppercase">
            <span className="inline-block h-[6px] w-[6px] rounded-full bg-accent-soft" />
            Meta · Facebook · Instagram · WhatsApp
          </div>
          <h1 className="mt-6 text-heading font-extrabold leading-[0.98] tracking-[-0.038em] text-[clamp(44px,6.4vw,86px)]">
            Meta Ads,<br/>
            <span className="text-line">calibrated</span> for care.
          </h1>
          <p className="mt-7 text-body text-[17px] leading-[1.65] max-w-[58ch]">
            A Meta Ads programme that respects healthcare compliance, survives iOS signal loss,
            and books real patients. Not impressions. Not reach. Not lead-form spam. Bookings,
            attributed end-to-end.
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

const Stack = () => (
  <Section no="01" title="The funnel, end to end" kicker="A four-layer stack across the Meta family. Each layer has a single, measurable job.">
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-[1px] bg-cta">
      {STACK.map((s, i) => (
        <div key={s.k} className="bg-bg p-7 sm:p-8 flex flex-col gap-5 relative">
          <div className="flex items-center justify-between">
            <span className="font-mono text-[11px] text-cta tracking-[0.18em] font-semibold">0{i + 1}.</span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-line font-bold">{s.tag}</span>
          </div>
          <h3 className="text-heading text-[24px] font-extrabold leading-[1.1] tracking-[-0.02em]">{s.k}</h3>
          <p className="text-body text-[14px] leading-[1.6] mt-auto">{s.d}</p>
        </div>
      ))}
    </div>
  </Section>
);

const Tactics = () => (
  <Section no="02" title="Tactics on the bench" kicker="Six moves we ship from week one. Layered by service line, not by template.">
    <ol className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12">
      {TACTICS.map((t) => (
        <li key={t.n} className="border-t-2 border-heading pt-5">
          <div className="flex items-baseline justify-between">
            <span className="font-mono text-line text-[13px] tracking-[0.18em]">{t.n}</span>
            <span className="text-[10px] uppercase tracking-[0.18em] text-muted font-semibold">Tactic</span>
          </div>
          <h4 className="mt-4 text-heading text-[20px] font-bold tracking-[-0.015em] leading-[1.2]">{t.h}</h4>
          <p className="mt-3 text-body text-[14.5px] leading-[1.6]">{t.d}</p>
        </li>
      ))}
    </ol>
  </Section>
);

const Results = () => (
  <Section no="03" title="What the dashboard reads" kicker="A snapshot from the live aggregate. Pulled monthly from connected ad accounts.">
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-[1px] bg-heading">
      {RESULTS.map((r, i) => (
        <div key={r.k} className="bg-bg p-7 flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <span className="font-mono text-[11px] text-line tracking-[0.18em]">0{i + 1}.</span>
            <span className="text-[10px] uppercase tracking-[0.18em] text-muted font-semibold">{r.k}</span>
          </div>
          <div className="text-heading font-extrabold text-[56px] leading-[0.95] tracking-[-0.035em] tabular-nums">{r.v}</div>
          <p className="text-body text-[13.5px] leading-[1.55] mt-1">{r.desc}</p>
        </div>
      ))}
    </div>
    <p className="mt-6 text-muted text-[13px] leading-[1.6] max-w-[64ch]">
      Compliance note: Meta restricts targeting on certain health categories. Our creative and
      audience frameworks are built against the current policy. We do not promise prohibited targeting.
    </p>
  </Section>
);

const Closing = () => (
  <Section no="04" title="Audit your Meta account" kicker="A two-week fixed-fee audit with a no-pitch readout. Whatever the verdict, you keep the audit.">
    <EditorialCTA
      eyebrow="Meta · CAPI · 2026"
      title="We audit before we sell."
      description="Plug us in for two weeks. We deliver a forensic look at your spend, creative, audiences, and event quality. We will tell you if the answer is keep it in house."
      primaryHref="/contact"
      primaryLabel="Start the audit →"
      secondaryHref="/case-studies"
      secondaryLabel="See Meta case studies"
    />
  </Section>
);

const MetaAds = () => (
  <>
    <Hero />
    <Stack />
    <Tactics />
    <Results />
    <Closing />
  </>
);

export default MetaAds;
