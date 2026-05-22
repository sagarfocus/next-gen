import Section from '@/components/editorial/Section';
import { METRICS } from './data';

const Metrics = () => (
  <Section
    no="03"
    title="What the program moves"
    kicker="Median across DFW healthcare clients, 2025. Pulled from the same dashboard your team logs into daily."
  >
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-[1px] bg-heading">
      {METRICS.map((m, i) => (
        <div key={m.k} className="bg-bg p-7 flex flex-col gap-3">
          <span className="font-mono text-[11px] text-line tracking-[0.18em]">0{i + 1}.</span>
          <div className="text-heading font-extrabold text-[clamp(36px,4.2vw,52px)] leading-[0.95] tracking-[-0.035em] tabular-nums">
            {m.v}
          </div>
          <div className="text-[10px] uppercase tracking-[0.18em] text-muted font-semibold">
            {m.k}
          </div>
          <p className="text-body text-[13px] leading-[1.55] mt-1 max-w-[28ch]">{m.d}</p>
        </div>
      ))}
    </div>
  </Section>
);

export default Metrics;
