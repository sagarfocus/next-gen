import { Link } from 'react-router-dom';
import Breadcrumb from '../../components/Breadcrumb';

const FACTS = [
  { label: 'Schema types implemented', value: '12' },
  { label: 'AI Overview eligibility',  value: '88%' },
  { label: 'Validation pass rate',     value: '100%' },
];

const WHY = [
  { h: 'Search is becoming an answer engine', d: 'Generative results now resolve a third of branded health queries before the user ever sees the blue links. The practice cited inside the answer wins; the rest disappear.' },
  { h: 'Schema is the underwriting layer',    d: 'AI engines need structured assertions about who you are, what you do, and where. Without that, the model defaults to whichever competitor stated it more clearly.' },
  { h: 'Editorial structure outranks copy',   d: 'Question-led headings, source-backed claims, and clean entity markup outperform unstructured prose on every conversational query we have benchmarked.' },
];

const COVERAGE = [
  { group: 'Entity',     types: 'Organization · MedicalClinic · Physician · LocalBusiness',  note: 'Who you are, where you are, and how you are related to other entities in the practice.' },
  { group: 'Content',    types: 'MedicalCondition · MedicalProcedure · FAQPage · Article',   note: 'What you are saying about clinical topics. The substrate AI engines extract answers from.' },
  { group: 'Operations', types: 'OpeningHours · AcceptedInsurance · AreaServed · Review',    note: 'Practical signals that determine whether you appear in time-sensitive or insurance-led queries.' },
];

const READINESS = [
  { k: 'Validated', d: 'Every page passes Rich Results test with zero errors and zero warnings on entity-level properties.' },
  { k: 'Answerable',d: 'Every service page leads with a phrased patient question and answers it above the fold in three sentences or fewer.' },
  { k: 'Sourced',   d: 'Editorial pieces include linkable, attributable sources. AI engines prefer practices that show their work.' },
];

const Section = ({ no, title, kicker, children }: { no: string; title: string; kicker?: string; children: React.ReactNode }) => (
  <section className="border-t border-line-faint">
    <div className="container-shell py-[clamp(64px,9vw,128px)]">
      <div className="grid lg:grid-cols-12 gap-x-16 gap-y-10">
        <div className="lg:col-span-4">
          <div className="flex items-baseline gap-3">
            <span className="text-line font-mono text-[12px] tracking-[0.2em]">{no}</span>
            <span className="h-px w-12 bg-line" />
          </div>
          <h2 className="mt-5 text-heading text-[clamp(24px,2.2vw,34px)] font-bold tracking-[-0.022em] leading-[1.15]">{title}</h2>
          {kicker && <p className="mt-4 text-muted text-[15px] leading-[1.6] max-w-[38ch]">{kicker}</p>}
        </div>
        <div className="lg:col-span-8">{children}</div>
      </div>
    </div>
  </section>
);

const Hero = () => (
  <section className="ph-page-head">
    <div className="container-shell">
      <Breadcrumb current="AEO & Schema" />
      <div className="mt-8 grid lg:grid-cols-12 gap-x-16 gap-y-12 items-end">
        <div className="lg:col-span-8">
          <div className="text-line font-mono text-[12px] tracking-[0.24em] uppercase">
            Local SEO · Answer Engine Optimization
          </div>
          <h1 className="mt-7 text-heading font-extrabold leading-[1.02] tracking-[-0.036em] text-[clamp(40px,5.4vw,72px)] max-w-[18ch]">
            Be the practice the engines cite.
          </h1>
          <p className="mt-8 text-body text-[18px] leading-[1.65] max-w-[58ch]">
            Schema markup and editorial structure built for AI Overviews, voice search,
            and the next generation of conversational query surfaces. A working
            programme — not a one-time SEO retrofit.
          </p>
        </div>
        <div className="lg:col-span-4">
          <div className="border-t-2 border-heading pt-6">
            {FACTS.map((f) => (
              <div key={f.label} className="py-4 border-b border-line-faint flex items-baseline justify-between">
                <span className="text-muted text-[13px] font-medium">{f.label}</span>
                <span className="text-heading text-[20px] font-bold tabular-nums tracking-[-0.01em]">{f.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Why = () => (
  <Section no="01" title="Why AEO is the SEO frontier" kicker="Three structural shifts that reward practices investing in answer engine optimisation now.">
    <div className="space-y-10">
      {WHY.map((w, i) => (
        <div key={w.h} className="grid grid-cols-[44px_1fr] gap-x-6">
          <span className="text-line font-mono text-[14px] tracking-[0.16em] pt-1">0{i + 1}</span>
          <div>
            <h3 className="text-heading text-[20px] font-bold tracking-[-0.015em]">{w.h}</h3>
            <p className="mt-3 text-body text-[15.5px] leading-[1.65] max-w-[64ch]">{w.d}</p>
          </div>
        </div>
      ))}
    </div>
  </Section>
);

const Coverage = () => (
  <Section no="02" title="Schema coverage" kicker="Three groups, twelve schema types. Every page on the site is mapped to at least one.">
    <div>
      <div className="grid grid-cols-[160px_1.4fr_2fr] gap-x-8 px-1 py-4 border-b-2 border-heading text-[11px] uppercase tracking-[0.2em] font-bold text-muted">
        <span>Group</span>
        <span>Types</span>
        <span>What it signals</span>
      </div>
      {COVERAGE.map((c) => (
        <div key={c.group} className="grid grid-cols-[160px_1.4fr_2fr] gap-x-8 px-1 py-5 items-baseline border-b border-line-faint">
          <span className="text-heading font-semibold text-[16px]">{c.group}</span>
          <span className="text-body text-[13.5px] leading-[1.55] font-medium">{c.types}</span>
          <span className="text-body text-[14px] leading-[1.6]">{c.note}</span>
        </div>
      ))}
    </div>
  </Section>
);

const Readiness = () => (
  <Section no="03" title="The readiness criteria" kicker="Three checks the AI search layer rewards. We do not ship a page that misses any of them.">
    <ol className="grid sm:grid-cols-3 gap-x-10 gap-y-8">
      {READINESS.map((r, i) => (
        <li key={r.k} className="border-t-2 border-heading pt-6">
          <div className="font-mono text-line text-[12px] tracking-[0.2em]">0{i + 1}</div>
          <h4 className="mt-4 text-heading text-[24px] font-bold tracking-[-0.018em] leading-none">{r.k}</h4>
          <p className="mt-4 text-body text-[14.5px] leading-[1.65]">{r.d}</p>
        </li>
      ))}
    </ol>
  </Section>
);

const Closing = () => (
  <Section no="04" title="Begin with a schema audit" kicker="A two-week, fixed-fee diagnostic. Linted, scored, ranked by recoverable visibility.">
    <div className="bg-heading text-white p-10 sm:p-14">
      <h3 className="text-[clamp(28px,3.4vw,44px)] font-extrabold leading-[1.08] tracking-[-0.024em] max-w-[26ch]">
        Become the answer the engine quotes, not the link it skips.
      </h3>
      <p className="mt-6 text-white/75 text-[16px] leading-[1.65] max-w-[60ch]">
        The audit returns a per-page schema register, a coverage map of missing entity
        relationships, and a ranked queue of pages to rewrite for AI Overview eligibility.
      </p>
      <div className="mt-10 flex flex-wrap items-center gap-6">
        <Link to="/contact" className="btn-primary">Request the audit</Link>
        <Link to="/services/seo-local-search" className="text-white/80 text-[14px] font-medium underline-offset-4 hover:underline">
          View the SEO programme
        </Link>
      </div>
    </div>
  </Section>
);

const AeoSchema = () => (
  <>
    <Hero />
    <Why />
    <Coverage />
    <Readiness />
    <Closing />
  </>
);

export default AeoSchema;
