import { Link } from 'react-router-dom';
import Breadcrumb from '../../components/Breadcrumb';

const FACTS = [
  { label: 'Texas metros covered', value: '6' },
  { label: 'Active geo pages',     value: '380+' },
  { label: 'Median ranking lift',  value: '14 pos.' },
];

const WHY = [
  { h: 'Patients search local',  d: 'High-intent healthcare queries are local by nature. A practice ranking for "urgent care" in a metro means nothing if it does not also rank for the neighbourhood three blocks from the building.' },
  { h: 'Hospitals own the wide net', d: 'A boutique practice will not outrank a hospital network for broad service terms. The win is in the long-tail municipality terms hospitals do not bother to write content for.' },
  { h: 'AI engines reward specificity', d: 'Conversational search now favours specific, neighbourhood-grounded answers. Generic city-level pages are quietly being filtered out of AI Overviews.' },
];

const COVERAGE = [
  { metro: 'Dallas',     pages: 42, signal: 'Highest concentration of FSED demand. Densest review volume.' },
  { metro: 'Houston',    pages: 51, signal: 'Multi-site urgent care competition. Long-tail wins outweigh aggregate.' },
  { metro: 'Austin',     pages: 38, signal: 'Aesthetic and concierge categories. Higher LTV per visit.' },
  { metro: 'San Antonio',pages: 34, signal: 'Primary care and Medicare advantage cohorts.' },
  { metro: 'Fort Worth', pages: 29, signal: 'Suburban family medicine. Recall and continuity drive value.' },
  { metro: 'El Paso',    pages: 22, signal: 'Bilingual content opportunity. Lower competition on Spanish terms.' },
];

const ANATOMY = [
  { k: 'Hero',     d: 'Neighbourhood name written the way a resident speaks it. Driving distance from a landmark people actually use.' },
  { k: 'Services', d: 'A service mix specific to that catchment. The downtown clinic is not the suburbs clinic — its page should not be either.' },
  { k: 'Proof',    d: 'Reviews from patients in that ZIP, photos of the building locals recognise, the names of partner pharmacies nearby.' },
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
      <Breadcrumb current="Hyper-Local Content" />
      <div className="mt-8 grid lg:grid-cols-12 gap-x-16 gap-y-12 items-end">
        <div className="lg:col-span-8">
          <div className="text-line font-mono text-[12px] tracking-[0.24em] uppercase">
            Local SEO · Geo-Targeted Pages
          </div>
          <h1 className="mt-7 text-heading font-extrabold leading-[1.02] tracking-[-0.036em] text-[clamp(40px,5.4vw,72px)] max-w-[16ch]">
            A page for every neighbourhood you serve.
          </h1>
          <p className="mt-8 text-body text-[18px] leading-[1.65] max-w-[58ch]">
            Programmatic landing pages — one per municipality, suburb, or catchment your
            practice draws from. Each is unique, indexable, and built to win the
            long-tail searches the hospital networks ignore.
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
  <Section no="01" title="Why geographic pages matter" kicker="The case for treating every catchment as its own market — and writing for it that way.">
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
  <Section no="02" title="Where we are operating" kicker="Six Texas metros, ranked by active geo-page volume. Coverage extends to surrounding municipalities and suburbs.">
    <div>
      <div className="grid grid-cols-[1fr_120px_2fr] gap-x-8 px-1 py-4 border-b-2 border-heading text-[11px] uppercase tracking-[0.2em] font-bold text-muted">
        <span>Metro</span>
        <span className="text-right">Pages</span>
        <span>Operating signal</span>
      </div>
      {COVERAGE.map((c) => (
        <div key={c.metro} className="grid grid-cols-[1fr_120px_2fr] gap-x-8 px-1 py-5 items-baseline border-b border-line-faint">
          <span className="text-heading font-semibold text-[17px]">{c.metro}</span>
          <span className="text-right text-heading text-[22px] font-bold tabular-nums tracking-[-0.015em]">{c.pages}</span>
          <span className="text-body text-[14px] leading-[1.55]">{c.signal}</span>
        </div>
      ))}
    </div>
  </Section>
);

const Anatomy = () => (
  <Section no="03" title="Anatomy of a hyper-local page" kicker="Three blocks. None is a copy of anything else on the site.">
    <ol className="grid sm:grid-cols-3 gap-x-10 gap-y-8">
      {ANATOMY.map((a, i) => (
        <li key={a.k} className="border-t-2 border-heading pt-6">
          <div className="font-mono text-line text-[12px] tracking-[0.2em]">0{i + 1}</div>
          <h4 className="mt-4 text-heading text-[24px] font-bold tracking-[-0.018em] leading-none">{a.k}</h4>
          <p className="mt-4 text-body text-[14.5px] leading-[1.65]">{a.d}</p>
        </li>
      ))}
    </ol>
  </Section>
);

const Closing = () => (
  <Section no="04" title="Begin with a catchment audit" kicker="A two-week deliverable that returns a ranked build list and the keyword cluster behind it.">
    <div className="bg-heading text-white p-10 sm:p-14">
      <h3 className="text-[clamp(28px,3.4vw,44px)] font-extrabold leading-[1.08] tracking-[-0.024em] max-w-[24ch]">
        Find the neighbourhoods you are invisible in.
      </h3>
      <p className="mt-6 text-white/75 text-[16px] leading-[1.65] max-w-[60ch]">
        The audit identifies the municipalities your practice already draws from but does not
        rank for, scored against expected query volume. Use it to commission a build — or
        keep the findings as a working SEO roadmap.
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

const HyperLocalContent = () => (
  <>
    <Hero />
    <Why />
    <Coverage />
    <Anatomy />
    <Closing />
  </>
);

export default HyperLocalContent;
