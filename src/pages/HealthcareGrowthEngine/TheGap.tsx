import { Section } from './helpers';
import { GAP_ROWS } from './data';

/* ---------- THE GAP (comparison) ---------- */
const TheGap = () => (
  <Section
    no="01"
    title="Why standard agency models fail clinics"
    kicker="Most clinic marketing budgets fund the wrong workflow. The engine rewires the workflow before it spends a dollar."
  >
    <div className="grid md:grid-cols-2 gap-px bg-line-faint border border-line-faint rounded-[16px] overflow-hidden">
      {/* Standard column */}
      <div className="bg-bg-soft p-7 sm:p-9">
        <div className="flex items-center gap-2 mb-6">
          <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted">A</span>
          <h3 className="text-muted text-[18px] font-bold tracking-[-0.015em]">Standard agency</h3>
        </div>
        <ul className="space-y-4">
          {GAP_ROWS.map((r) => (
            <li key={r.topic} className="flex gap-4 items-start">
              <span className="shrink-0 w-20 text-[11px] uppercase tracking-[0.18em] text-muted font-bold pt-1">
                {r.topic}
              </span>
              <span className="text-muted text-[14.5px] leading-[1.55] line-through decoration-line-faint decoration-2">
                {r.agency}
              </span>
            </li>
          ))}
        </ul>
      </div>
      {/* Engine column */}
      <div className="bg-bg p-7 sm:p-9 relative">
        <span className="absolute top-7 right-7 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-heading text-white font-mono text-[10px] tracking-[0.2em] uppercase font-bold">
          <span className="h-1.5 w-1.5 rounded-full bg-accent-soft" />
          Engine
        </span>
        <div className="flex items-center gap-2 mb-6">
          <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-line">B</span>
          <h3 className="text-heading text-[18px] font-bold tracking-[-0.015em]">Growth Engine</h3>
        </div>
        <ul className="space-y-4">
          {GAP_ROWS.map((r) => (
            <li key={r.topic} className="flex gap-4 items-start">
              <span className="shrink-0 w-20 text-[11px] uppercase tracking-[0.18em] text-line font-bold pt-1">
                {r.topic}
              </span>
              <span className="text-heading text-[14.5px] leading-[1.55] font-medium">
                {r.engine}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </Section>
);

export default TheGap;
