import Section from '@/components/editorial/Section';
import { Reveal } from '@/lib/motion';
import { WORKFLOWS, WORKFLOW_ICON } from './data';

const Workflows = () => (
  <Section
    no="01"
    title="Six workflows, always running"
    kicker="Each workflow is a contract: a known trigger, a known outcome, zero staff in the loop."
  >
    <div className="grid sm:grid-cols-2 gap-4 lg:gap-5">
      {WORKFLOWS.map((w, i) => {
        const Icon = WORKFLOW_ICON[w.key];
        return (
          <Reveal key={w.key} variant="up" delay={i * 60}>
            <article className="group relative bg-bg border border-line-faint rounded-2xl p-7 lg:p-8 overflow-hidden h-full flex flex-col transition-all duration-300 hover:border-heading hover:shadow-[0_18px_40px_-24px_rgba(15,23,42,0.18)] hover:-translate-y-[2px]">
              {/* large faded number watermark */}
              <span
                aria-hidden="true"
                className="absolute -right-2 -top-6 text-[160px] font-extrabold leading-none tracking-[-0.05em] text-line-faint/30 select-none pointer-events-none"
              >
                {w.n}
              </span>

              {/* accent stripe along the top */}
              <span
                aria-hidden="true"
                className="absolute left-0 top-0 h-[3px] w-16 bg-gradient-to-r from-accent-soft to-cta rounded-tl-2xl"
              />

              {/* Top row: spec pill */}
              <div className="relative flex items-center justify-between z-10">
                <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted font-semibold">
                  Workflow / {w.n}
                </span>
                <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-line border border-line-faint rounded-full px-3 py-1 bg-bg/80 backdrop-blur-sm">
                  {w.meta}
                </span>
              </div>

              {/* Visual hero: icon with soft gradient blob backdrop */}
              <div className="relative mt-8 mb-6 z-10">
                <div
                  aria-hidden="true"
                  className="absolute -inset-3 rounded-full bg-gradient-to-br from-accent-soft/20 via-line-soft/40 to-transparent blur-xl"
                />
                <div className="relative h-16 w-16 rounded-2xl bg-heading text-white flex items-center justify-center shadow-[0_8px_22px_-10px_rgba(15,23,42,0.6)] transition-transform duration-300 group-hover:scale-[1.04] group-hover:rotate-[-3deg]">
                  <Icon />
                </div>
              </div>

              {/* Workflow name */}
              <h3 className="relative text-heading text-[28px] lg:text-[30px] font-extrabold leading-[1.05] tracking-[-0.025em] z-10">
                {w.name}
                <span className="text-cta">.</span>
              </h3>

              {/* Trigger → Outcome mini flow */}
              <div className="relative mt-auto pt-8 z-10">
                <div className="grid grid-cols-[auto_1fr] gap-x-3 gap-y-2 items-center">
                  <span className="text-[9px] uppercase tracking-[0.22em] text-muted font-bold">From</span>
                  <span className="text-body text-[14.5px] font-medium leading-tight">{w.trigger}</span>

                  {/* vertical connector */}
                  <span aria-hidden="true" className="row-span-1 flex justify-center">
                    <span className="block h-3 w-px border-l border-dashed border-line" />
                  </span>
                  <span aria-hidden="true" />

                  <span className="text-[9px] uppercase tracking-[0.22em] text-cta font-bold">To</span>
                  <span className="text-heading text-[14.5px] font-semibold leading-tight">{w.outcome}</span>
                </div>
              </div>
            </article>
          </Reveal>
        );
      })}
    </div>
  </Section>
);

export default Workflows;
