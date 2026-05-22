import { useInView, CountUp } from './helpers';
import { OUTCOMES } from './data';

/* ---------- OUTCOMES — animated counters ---------- */
const Outcomes = () => {
  const [gridRef, inView] = useInView<HTMLDivElement>(0.25);

  return (
    <section className="border-t border-line-faint bg-bg">
      <div className="container-shell py-[clamp(64px,8.5vw,120px)]">
        {/* Editorial hero header */}
        <div className="flex items-center gap-3 text-line font-mono text-[11px] tracking-[0.22em] uppercase mb-7">
          <span className="h-1.5 w-1.5 rounded-full bg-accent-soft" />
          Outcomes · 05
        </div>
        <div className="grid lg:grid-cols-12 gap-x-12 gap-y-6 items-end mb-12 lg:mb-16">
          <h2 className="lg:col-span-7 text-heading font-extrabold leading-[0.96] tracking-[-0.038em] text-[clamp(36px,5.4vw,74px)]">
            What the engine
            <br />
            actually produces.
          </h2>
          <p className="lg:col-span-4 lg:col-start-9 text-body text-[15.5px] leading-[1.65] max-w-[44ch]">
            Aggregate outcomes across practices currently running on the engine — updated quarterly
            with anonymised, weighted data from active clients.
          </p>
        </div>

        {/* Counter grid */}
        <div ref={gridRef} className="grid sm:grid-cols-2 md:grid-cols-4 gap-5 lg:gap-6">
          {OUTCOMES.map((o, i) => (
            <article
              key={o.l}
              className="bg-bg border border-line-faint rounded-[18px] p-7 sm:p-8 flex flex-col gap-4 transition-all duration-300 hover:border-line hover:-translate-y-0.5"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-[12px] uppercase tracking-[0.22em] text-line font-bold">
                  {o.sub}
                </span>
                <span className="font-mono text-[10.5px] text-muted tracking-[0.18em] font-semibold">
                  0{i + 1}
                </span>
              </div>
              <span className="text-heading text-[clamp(48px,5.2vw,80px)] font-extrabold leading-[0.92] tracking-[-0.038em]">
                <CountUp value={o.num} prefix={o.prefix} suffix={o.suffix} trigger={inView} />
              </span>
              <span className="text-heading text-[16px] leading-[1.35] font-semibold tracking-[-0.008em]">
                {o.l}
              </span>
              <div className="mt-auto pt-4 border-t border-line-faint">
                <span className="text-muted text-[13.5px] leading-[1.5]">{o.vs}</span>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-10 text-body text-[15px] leading-[1.65] max-w-[68ch]">
          Sample weighted across single-location, multi-location, and FSER clients running ≥ 6
          months on the engine. Individual results vary by category and geography.
        </p>
      </div>
    </section>
  );
};

export default Outcomes;
