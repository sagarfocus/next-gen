import Section from '@/components/editorial/Section';
import { DELIVERABLES } from './data';

const Deliverables = () => (
  <Section
    no="02"
    title="What's in every engagement"
    kicker="Four working surfaces, all owned by your dedicated field lead - never tossed between vendors."
  >
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-[1px] bg-line-faint border border-line-faint">
      {DELIVERABLES.map((d, i) => (
        <div key={d.tag} className="bg-bg p-6 flex flex-col gap-4">
          <div className="flex items-baseline justify-between">
            <span className="font-mono text-[11px] text-line tracking-[0.18em]">0{i + 1}.</span>
            <span className="text-[9px] uppercase tracking-[0.18em] text-muted font-semibold">
              Surface
            </span>
          </div>
          <h4 className="text-heading text-[18px] font-bold tracking-[-0.015em]">{d.tag}</h4>
          <ul className="space-y-2 text-[13px] text-body mt-auto">
            {d.list.map((l) => (
              <li key={l} className="flex gap-2 items-baseline">
                <span className="text-line">-</span>
                <span>{l}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </Section>
);

export default Deliverables;
