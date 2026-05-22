import Section from '../../components/editorial/Section';
import { TOUCHPOINTS, STAGE_ICON } from './data';

const Touchpoints = () => (
  <Section
    no="03"
    title="Surface-by-surface touchpoints"
    kicker="Each stage has three working surfaces. We audit, prioritise, and pilot one at a time."
  >
    <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-[1px] bg-line-faint border border-line-faint">
      {TOUCHPOINTS.map((t, i) => {
        const Icon = STAGE_ICON[t.key];
        return (
          <div key={t.tag} className="bg-bg p-6 flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[11px] text-line tracking-[0.18em]">0{i + 1}.</span>
              <span className="h-8 w-8 rounded-full border border-line-faint flex items-center justify-center text-line">
                <Icon />
              </span>
            </div>
            <h4 className="text-heading text-[18px] font-bold tracking-[-0.015em]">{t.tag}</h4>
            <ul className="space-y-2 text-[13px] text-body mt-auto">
              {t.list.map((l) => (
                <li key={l} className="flex gap-2 items-baseline">
                  <span className="text-line">-</span>
                  <span>{l}</span>
                </li>
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  </Section>
);

export default Touchpoints;
