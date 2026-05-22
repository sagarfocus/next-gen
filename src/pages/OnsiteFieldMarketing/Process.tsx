import Section from '@/components/editorial/Section';
import { PROCESS } from './data';

const Process = () => (
  <Section
    no="04"
    title="How the program runs"
    kicker="Four phases, ninety days to a self-sustaining field motion."
  >
    <div className="border-t-2 border-heading">
      {PROCESS.map((s, i) => (
        <div
          key={s.k}
          className="grid lg:grid-cols-12 gap-x-10 gap-y-2 py-6 border-b border-line-faint items-baseline"
        >
          <div className="lg:col-span-1 font-mono text-line text-[13px] tracking-[0.18em]">
            0{i + 1}.
          </div>
          <div className="lg:col-span-3 text-heading font-bold text-[20px] tracking-[-0.018em]">
            {s.k}
          </div>
          <div className="lg:col-span-8">
            <p className="text-body text-[15.5px] leading-[1.65]">{s.d}</p>
          </div>
        </div>
      ))}
    </div>
  </Section>
);

export default Process;
