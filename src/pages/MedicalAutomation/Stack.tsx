import Section from '@/components/editorial/Section';
import { STACK, STACK_ICON } from './data';

const Stack = () => (
  <Section
    no="03"
    title="The stack we ship on"
    kicker="No black boxes. Auditable, exportable, BAA-covered end to end."
  >
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-[1px] bg-line-faint border border-line-faint">
      {STACK.map((s, i) => {
        const Icon = STACK_ICON[s.key];
        return (
          <div key={s.tag} className="bg-bg p-7 flex flex-col gap-5">
            <div className="flex items-center justify-between">
              <span className="h-9 w-9 rounded-full bg-bg-soft flex items-center justify-center text-heading">
                <Icon />
              </span>
              <span className="font-mono text-[11px] text-line tracking-[0.18em]">0{i + 1}</span>
            </div>
            <h4 className="text-heading text-[18px] font-bold tracking-[-0.015em]">{s.tag}</h4>
            <ul className="space-y-1.5 text-[12.5px] text-body mt-auto">
              {s.tools.map((l) => (
                <li key={l} className="flex gap-2 items-baseline">
                  <span className="text-line">•</span>
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

export default Stack;
