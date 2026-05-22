import SectionHeader from './SectionHeader';
import { OUTCOMES } from './data';

const Outcomes = () => (
  <section className="border-t border-line-faint">
    <div className="container-shell py-[clamp(72px,9vw,128px)]">
      <SectionHeader
        no="03"
        eyebrow="Outcomes"
        title={<>What the loop produces.</>}
        kicker="Aggregate read from active engagements running the full programme. Updated quarterly."
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {OUTCOMES.map((o, i) => (
          <article
            key={o.k}
            className="bg-white border border-line-faint rounded-[18px] p-7 flex flex-col gap-4 transition-all duration-300 hover:-translate-y-1 hover:border-line"
          >
            <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-line font-bold">
              0{i + 1}
            </span>
            <div className="text-heading font-extrabold text-[clamp(40px,4.8vw,60px)] leading-[0.95] tracking-[-0.035em] tabular-nums">
              {o.v}
            </div>
            <div className="text-[11px] uppercase tracking-[0.20em] text-muted font-bold">
              {o.k}
            </div>
            <p className="text-body text-[13.5px] leading-[1.6] max-w-[30ch]">{o.d}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Outcomes;
