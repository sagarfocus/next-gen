import Section from '@/components/editorial/Section';
import { Reveal } from '@/lib/motion';
import { FRICTION } from './data';

const FrictionMap = () => {
  // Scale the longest bar (38) so the largest fills ~90% of the track width
  const max = 40;
  return (
    <Section
      no="02"
      title="Where patients leak"
      kicker="Aggregate drop-off across single-location clinic engagements. Same stages, before and after the work."
    >
      <Reveal variant="up">
        <div className="border-t-2 border-heading pt-10">
          <div className="grid sm:grid-cols-[1fr_auto_1fr] gap-x-6 gap-y-3 items-baseline">
            <div className="text-[10px] uppercase tracking-[0.2em] text-muted font-semibold">
              Without the work
            </div>
            <div className="hidden sm:block" />
            <div className="text-[10px] uppercase tracking-[0.2em] text-muted font-semibold sm:text-right">
              After the pilot
            </div>

            {FRICTION.map((f) => (
              <div key={f.stage} className="contents">
                {/* before bar (right-anchored) */}
                <div className="flex items-center gap-3 justify-end">
                  <span className="text-body text-[13px] tabular-nums w-9 text-right">{f.before}%</span>
                  <div className="h-[10px] bg-line-faint rounded-l-full overflow-hidden w-full max-w-[260px]">
                    <div
                      className="h-full bg-cta/80 ml-auto rounded-l-full"
                      style={{ width: `${(f.before / max) * 100}%`, marginLeft: 'auto' }}
                    />
                  </div>
                </div>

                {/* stage label center */}
                <div className="text-center text-heading font-bold text-[13px] tracking-[-0.01em] uppercase whitespace-nowrap px-2">
                  {f.stage}
                </div>

                {/* after bar (left-anchored) + delta */}
                <div className="flex items-center gap-3">
                  <div className="h-[10px] bg-line-faint rounded-r-full overflow-hidden w-full max-w-[260px]">
                    <div
                      className="h-full bg-accent-soft rounded-r-full"
                      style={{ width: `${(f.after / max) * 100}%` }}
                    />
                  </div>
                  <span className="text-body text-[13px] tabular-nums w-9">{f.after}%</span>
                  <span className="text-[11px] uppercase tracking-[0.16em] text-line font-semibold tabular-nums">
                    {f.delta}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-6 text-[12px] text-muted">
            <div className="flex items-center gap-2">
              <span className="inline-block h-3 w-3 rounded-sm bg-cta/80" />
              <span>Typical drop-off, no PX programme</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="inline-block h-3 w-3 rounded-sm bg-accent-soft" />
              <span>Drop-off after the highest-leverage fix</span>
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  );
};

export default FrictionMap;
