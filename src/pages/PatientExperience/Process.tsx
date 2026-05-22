import Section from '../../components/editorial/Section';
import { Reveal } from '../../lib/motion';
import { PROCESS, PROCESS_ICON } from './data';

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

export default Process;
