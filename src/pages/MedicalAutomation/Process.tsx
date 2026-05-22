import Section from '@/components/editorial/Section';
import { Reveal } from '@/lib/motion';
import { PROCESS, PROCESS_ICON } from './data';

const Process = () => (
  <Section
    no="05"
    title="How we ship it"
    kicker="Four phases, eight weeks from audit to all six in production."
  >
    <Reveal variant="up">
      <div className="border-t-2 border-heading pt-12">
        <div className="grid md:grid-cols-4 gap-y-12 md:gap-x-6 relative">
          {/* connector line on desktop */}
          <div className="hidden md:block absolute left-[10%] right-[10%] top-[26px] h-px border-t border-dashed border-line-faint pointer-events-none" />

          {PROCESS.map((p) => {
            const Icon = PROCESS_ICON[p.key];
            return (
              <div key={p.k} className="relative bg-bg flex flex-col items-start gap-4 md:px-3">
                <div className="flex items-center gap-4">
                  <div className="h-14 w-14 rounded-full bg-heading text-white flex items-center justify-center shrink-0">
                    <Icon />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-mono text-[12px] text-line tracking-[0.18em]">{p.n}</span>
                    <span className="text-[10px] uppercase tracking-[0.18em] text-muted font-semibold">{p.week}</span>
                  </div>
                </div>
                <h3 className="text-heading text-[24px] font-extrabold tracking-[-0.02em] leading-[1.1]">
                  {p.k}
                  <span className="text-line">.</span>
                </h3>
                <p className="text-body text-[14px] leading-[1.55]">{p.d}</p>
              </div>
            );
          })}
        </div>
      </div>
    </Reveal>
  </Section>
);

export default Process;
