import Section from '@/components/editorial/Section';
import { Reveal } from '@/lib/motion';
import { COVERAGE, COVERAGE_ICON } from './data';

const Coverage = () => {
  const max = 14;
  return (
    <Section
      no="02"
      title="Hours given back, weekly"
      kicker="Median across single-location clinics. Reinvested in patient time."
    >
      <Reveal variant="up">
        <div className="border-t-2 border-heading pt-8 space-y-7">
          {COVERAGE.map((c) => {
            const Icon = COVERAGE_ICON[c.key];
            const widthPct = (c.high / max) * 100;
            const lowPct = (c.low / max) * 100;
            return (
              <div key={c.area} className="grid grid-cols-[auto_minmax(0,1fr)_auto] gap-x-5 items-center">
                {/* Left: icon + area name */}
                <div className="flex items-center gap-4 min-w-[150px]">
                  <span className="h-10 w-10 rounded-full border border-line-faint flex items-center justify-center text-heading">
                    <Icon />
                  </span>
                  <div className="flex flex-col">
                    <span className="text-heading font-bold text-[16px] tracking-[-0.01em]">{c.area}</span>
                    <span className="text-muted text-[11px] uppercase tracking-[0.16em] font-semibold">{c.one}</span>
                  </div>
                </div>

                {/* Middle: bar */}
                <div className="relative h-[14px] bg-line-faint/60 rounded-full overflow-hidden">
                  {/* low marker — lighter */}
                  <div
                    className="absolute inset-y-0 left-0 bg-line-soft"
                    style={{ width: `${lowPct}%` }}
                  />
                  {/* high — solid heading color */}
                  <div
                    className="absolute inset-y-0 left-0 bg-heading rounded-full"
                    style={{ width: `${widthPct}%`, mixBlendMode: 'normal' }}
                  >
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 h-3 w-3 rounded-full bg-cta border-2 border-bg" />
                  </div>
                </div>

                {/* Right: hours range */}
                <div className="text-heading font-extrabold text-[20px] tabular-nums tracking-[-0.018em] min-w-[110px] text-right">
                  {c.low}–{c.high}
                  <span className="text-muted text-[12px] font-medium ml-1">hrs/wk</span>
                </div>
              </div>
            );
          })}
        </div>
      </Reveal>
    </Section>
  );
};

export default Coverage;
