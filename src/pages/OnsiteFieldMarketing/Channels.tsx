import Section from '../../components/editorial/Section';
import { FIELD_CHANNELS } from './data';

const Channels = () => (
  <Section
    no="01"
    title="The four field channels"
    kicker="Each channel runs as its own program with its own metrics, but they share the same lead pipeline."
  >
    <div className="border-t-2 border-heading">
      {FIELD_CHANNELS.map((c) => (
        <article
          key={c.n}
          className="grid lg:grid-cols-12 gap-x-10 gap-y-3 py-7 border-b border-line-faint items-baseline"
        >
          <div className="lg:col-span-1 font-mono text-line text-[14px] tracking-[0.18em]">
            {c.n}
          </div>
          <div className="lg:col-span-4">
            <h3 className="text-heading text-[24px] font-extrabold tracking-[-0.022em] leading-[1.05]">
              {c.name}
              <span className="text-line">.</span>
            </h3>
            <div className="mt-2 text-[12px] uppercase tracking-[0.16em] text-muted font-semibold">
              {c.summary}
            </div>
          </div>
          <div className="lg:col-span-7">
            <p className="text-body text-[16px] leading-[1.65]">{c.desc}</p>
          </div>
        </article>
      ))}
    </div>
  </Section>
);

export default Channels;
