import Breadcrumb from '../../components/Breadcrumb';
import Section from '../../components/editorial/Section';
import EditorialCTA from '../../components/editorial/EditorialCTA';

const HEAD_META = [
  { label: 'Format',     value: 'Editorial, evidence-led' },
  { label: 'Cadence',    value: '12 pieces / month' },
  { label: 'Review',     value: 'Clinician-vetted' },
  { label: 'Compliance', value: 'HIPAA-aware' },
];

const PILLARS = [
  {
    n: '01',
    h: 'Condition pages',
    d: 'Long-form pillars that map symptoms, decisions and treatment paths. Schema-rich, indexable, and easy to read on a phone in a waiting room.',
    items: ['Schema markup', 'Reading-level 8', 'Internal linking'],
  },
  {
    n: '02',
    h: 'Decision content',
    d: 'Help patients pick between options. Real questions, real answers. Featured-snippet-friendly without sounding like SEO content.',
    items: ['Comparison tables', 'FAQ blocks', 'Decision trees'],
  },
  {
    n: '03',
    h: 'Editorial features',
    d: 'Authority pieces with original framing and clinician quotes. Designed for brand search and citation by Healthline-class publications.',
    items: ['Pull quotes', 'Custom illustration', 'Citation-friendly'],
  },
];

const SAMPLES = [
  { kind: 'PILLAR',  title: 'When emergency care is not an emergency room', read: '11 min',  vertical: 'ER',           pull: 'Cost, wait time, and follow-up - what your insurer will and will not cover.' },
  { kind: 'GUIDE',   title: 'A patient guide to retinol, retinaldehyde and tretinoin',     read: '7 min',  vertical: 'Aesthetic',    pull: 'Three molecules, three protocols. A side-by-side decision matrix.' },
  { kind: 'FEATURE', title: 'The case for booking dental cleanings around payroll',        read: '5 min',  vertical: 'Dental',       pull: 'Timing matters more than reminders. Data from 18 practices.' },
  { kind: 'PILLAR',  title: 'Annual physicals: what to skip, what to insist on',           read: '9 min',  vertical: 'Primary',      pull: 'A practitioner-vetted checklist organised by life stage.' },
  { kind: 'GUIDE',   title: 'First-time therapy: the choreography of an intake',           read: '6 min',  vertical: 'Mental Health',pull: 'What a first session looks like and what gets you ready for it.' },
];

const PROCESS = [
  { k: 'Brief',   d: 'Working session with your clinical lead. Pillar topic, key questions, links to source data.' },
  { k: 'Draft',   d: 'First pass written by a healthcare specialist with reading-level checks and SEO scaffolding.' },
  { k: 'Review',  d: 'Clinician review with redlines. Citations added. Schema attached. Edit cycle is 48 hours.' },
  { k: 'Publish', d: 'Pre-launch QA, indexing checks, internal linking, and a 30-day performance retrospective.' },
];

const Hero = () => (
  <section className="ph-page-head">
    <div className="container-shell">
      <Breadcrumb current="Healthcare Content" />
      <div className="mt-6 grid lg:grid-cols-12 gap-x-12 gap-y-10 items-end">
        <div className="lg:col-span-8">
          <div className="flex items-center gap-3 text-line font-mono text-[12px] tracking-[0.22em] uppercase">
            <span className="inline-block h-[6px] w-[6px] rounded-full bg-accent-soft" />
            Editorial & Content Studio
          </div>
          <h1 className="mt-6 text-heading font-extrabold leading-[0.98] tracking-[-0.038em] text-[clamp(44px,6.4vw,86px)]">
            Content that<br/>
            reads like <span className="text-line italic">care</span>.
          </h1>
          <p className="mt-7 text-body text-[17px] leading-[1.65] max-w-[58ch]">
            Editorial-grade content for healthcare practices. Every piece is clinician-reviewed,
            evidence-led and designed to outperform the hospital-network monoliths your practice
            competes with for ranking and trust.
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

const Pillars = () => (
  <Section no="01" title="Three pillars of editorial" kicker="Every retained content engagement is built on these three programmes, weighted to your vertical.">
    <div className="grid sm:grid-cols-3 gap-[1px] bg-line-faint border border-line-faint">
      {PILLARS.map((p) => (
        <div key={p.n} className="bg-bg p-7 sm:p-8 flex flex-col gap-6">
          <div className="flex items-baseline justify-between">
            <span className="font-mono text-[12px] text-line tracking-[0.18em]">{p.n}</span>
            <span className="text-[10px] uppercase tracking-[0.18em] text-muted font-semibold">Pillar</span>
          </div>
          <h3 className="text-heading text-[26px] font-extrabold leading-[1.05] tracking-[-0.02em]">{p.h}</h3>
          <p className="text-body text-[14px] leading-[1.6]">{p.d}</p>
          <ul className="mt-auto pt-5 border-t border-line-faint flex flex-wrap gap-x-3 gap-y-1.5">
            {p.items.map((i) => (
              <li key={i} className="text-[12px] text-muted">- {i}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </Section>
);

const Samples = () => (
  <Section no="02" title="Recent in the editorial calendar" kicker="A working sample. Each piece is built around a specific patient decision moment.">
    <div className="space-y-[1px] bg-line-faint border border-line-faint">
      {SAMPLES.map((s, i) => (
        <article key={s.title} className="bg-bg p-7 sm:p-8 grid lg:grid-cols-12 gap-x-8 gap-y-4 items-baseline hover:bg-white transition cursor-pointer">
          <div className="lg:col-span-1 font-mono text-[12px] text-muted tracking-[0.16em]">{String(i + 1).padStart(2, '0')}.</div>
          <div className="lg:col-span-2 flex flex-col gap-1">
            <span className="text-[10px] uppercase tracking-[0.2em] text-line font-bold">{s.kind}</span>
            <span className="text-[12px] text-muted">{s.vertical}</span>
          </div>
          <div className="lg:col-span-7">
            <h3 className="text-heading text-[clamp(20px,1.6vw,26px)] font-bold tracking-[-0.015em] leading-[1.25]">{s.title}</h3>
            <p className="mt-3 text-body text-[14px] leading-[1.55] italic">&ldquo;{s.pull}&rdquo;</p>
          </div>
          <div className="lg:col-span-2 lg:text-right text-muted text-[12px] tabular-nums">{s.read} read</div>
        </article>
      ))}
    </div>
  </Section>
);

const Process = () => (
  <Section no="03" title="Production discipline" kicker="A four-stage workflow that protects clinician time and never sends a piece live without review.">
    <ol className="grid sm:grid-cols-2 gap-x-12 gap-y-10">
      {PROCESS.map((p, i) => (
        <li key={p.k} className="relative pl-10">
          <span className="absolute left-0 top-1 font-mono text-line text-[13px] tracking-[0.16em]">0{i + 1}</span>
          <h4 className="text-heading text-[22px] font-bold tracking-[-0.015em]">{p.k}.</h4>
          <p className="mt-3 text-body text-[15px] leading-[1.6]">{p.d}</p>
        </li>
      ))}
    </ol>
  </Section>
);

const Closing = () => (
  <Section no="04" title="Start with the editorial brief" kicker="A working session, a content audit, and a 6-month editorial map. Fixed-fee.">
    <EditorialCTA
      eyebrow="The Brief"
      title="We do not pitch content. We build it."
      description="Before any content goes live, we run a working session with your clinical lead and return a 6-month editorial map. If we are not the right fit, you keep the map."
      primaryHref="/contact"
      primaryLabel="Book the brief →"
      secondaryHref="/case-studies"
      secondaryLabel="See content case studies"
    />
  </Section>
);

const HealthcareContent = () => (
  <>
    <Hero />
    <Pillars />
    <Samples />
    <Process />
    <Closing />
  </>
);

export default HealthcareContent;
