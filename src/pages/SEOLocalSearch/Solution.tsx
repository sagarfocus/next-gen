import { CheckIcon } from '@/components/icons';
interface SolutionItem {
  num: string;
  name: string;
  desc: string;
  delivers: string[];
}

const SOLUTIONS: SolutionItem[] = [
  {
    num: '01',
    name: 'Service-line keyword maps',
    desc: 'Mapped per location, per provider, per insurance accepted. Targeting matches the queries real patients actually type.',
    delivers: ['Intent-tiered', 'Per-location', 'Per-provider'],
  },
  {
    num: '02',
    name: 'Local Pack ownership',
    desc: 'GBP fully built, citations consistent across 50+ directories, review flow live. Top-3 within 90 days for primary services.',
    delivers: ['GBP rebuild', 'Citation cleanup', 'Review loop'],
  },
  {
    num: '03',
    name: 'HIPAA-aware analytics',
    desc: 'Server-side conversions, aggregated reporting, audit-ready event configs. Insight without exposure.',
    delivers: ['Server-side', 'BAA tooling', 'Aggregate only'],
  },
  {
    num: '04',
    name: 'AI-citation content',
    desc: 'Pillar pages with FAQ schema, condition deep-dives, structured data tuned for AI Overview eligibility.',
    delivers: ['FAQ schema', 'Condition pillars', 'AI Overview ready'],
  },
];


const Solution = () => {
  return (
    <section className="sl-section sl-solution" id="solution">
      <div className="container-shell">
        <div className="sl-sec-head">
          <div>
            <div className="sl-sec-num">04 - The solution</div>
            <h2 className="sl-sec-title">
              What an SEO programme should <em>actually deliver.</em>
            </h2>
          </div>
          <div className="sl-sec-meta">
            Outcomes owned
            <br />
            end to end
          </div>
        </div>

        <div className="sl-sol-grid">
          {SOLUTIONS.map((s) => (
            <article key={s.num} className="sl-sol-card">
              <div className="sl-sol-num">{s.num}</div>
              <h3 className="sl-sol-name">{s.name}</h3>
              <p className="sl-sol-desc">{s.desc}</p>
              <ul className="sl-sol-delivers">
                {s.delivers.map((d) => (
                  <li key={d}>
                    <span className="sl-sol-tick" aria-hidden="true">
                      <CheckIcon />
                    </span>
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solution;
