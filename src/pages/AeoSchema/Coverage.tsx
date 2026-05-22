import SectionHeader from './SectionHeader';
import { COLORS, GROUPS } from './data';

const Coverage = () => (
  <section className="border-t" style={{ borderColor: 'rgba(26, 36, 56, 0.08)', background: COLORS.paper }}>
    <div className="container-shell py-[clamp(72px,9vw,128px)]">
      <SectionHeader
        no="02"
        eyebrow="Schema coverage"
        title={<>Three groups. Twelve types. Every page mapped.</>}
        kicker="Each group of schema does a different job. We deploy at least one type from every group on every public page."
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
        {GROUPS.map((g) => (
          <article key={g.group} className="relative bg-white rounded-[22px] border overflow-hidden flex flex-col" style={{ borderColor: 'rgba(26, 36, 56, 0.10)' }}>
            {/* Tone-coloured top strip */}
            <span className="block h-1.5" style={{ background: g.tone.hex }} aria-hidden="true" />

            <div className="p-8 flex flex-col gap-5 flex-1">
              <div className="flex items-baseline justify-between">
                <span className="font-mono text-[12px] tracking-[0.18em] font-bold" style={{ color: g.tone.hex }}>{g.num}</span>
                <span className="font-mono text-[11px] tracking-[0.14em] uppercase font-bold" style={{ color: COLORS.muted }}>{g.tag}</span>
              </div>

              <h3 className="text-[28px] font-extrabold tracking-[-0.022em] leading-none" style={{ color: COLORS.navy }}>
                {g.group}
                <span style={{ color: g.tone.hex }}>.</span>
              </h3>

              <p className="text-[14px] leading-[1.6]" style={{ color: COLORS.body }}>{g.description}</p>

              {/* Schema types as code-style chips */}
              <div className="mt-2 pt-5 border-t" style={{ borderColor: 'rgba(26, 36, 56, 0.08)' }}>
                <div className="font-mono text-[10.5px] tracking-[0.2em] uppercase font-bold mb-3" style={{ color: COLORS.muted }}>@type</div>
                <div className="flex flex-wrap gap-2">
                  {g.types.map((t) => (
                    <span key={t} className="inline-flex items-center px-2.5 py-1 rounded-md font-mono text-[12px] font-semibold" style={{ background: g.tone.soft, color: g.tone.hex }}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Coverage;
