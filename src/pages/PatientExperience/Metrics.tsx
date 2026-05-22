import Section from '@/components/editorial/Section';
import { CountUp } from '@/lib/motion';
import { METRICS } from './data';

const Metrics = () => (
  <Section
    no="04"
    title="What the work moves"
    kicker="Median results across patient-experience engagements. Bracketed by vertical inside the dashboard."
  >
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-[1px] bg-heading">
      {METRICS.map((m, i) => (
        <div key={m.k} className="bg-bg p-7 flex flex-col gap-3">
          <span className="font-mono text-[11px] text-line tracking-[0.18em]">0{i + 1}.</span>
          <div className="text-heading font-extrabold text-[52px] leading-[0.95] tracking-[-0.035em] tabular-nums">
            <CountUp
              to={m.value}
              prefix={m.prefix}
              suffix={m.suffix}
              decimals={m.decimals ?? 0}
              duration={2}
            />
          </div>
          <div className="text-[10px] uppercase tracking-[0.18em] text-muted font-semibold">{m.k}</div>
          <p className="text-body text-[13px] leading-[1.55] mt-1 max-w-[28ch]">{m.d}</p>
        </div>
      ))}
    </div>
  </Section>
);

export default Metrics;
