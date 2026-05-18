import type { ReactNode } from 'react';

export interface BigNumber {
  num: ReactNode;
  label: string;
  caption: string;
}

interface NumbersProps {
  stats: BigNumber[];
}

const Numbers = ({ stats }: NumbersProps) => {
  return (
    <section className="iv-section iv-numbers" aria-labelledby="iv-num-title">
      <div className="container-shell">
        <header className="iv-section-head">
          <span className="iv-section-num">03</span>
          <h2 id="iv-num-title" className="iv-section-title">
            The numbers we move.
          </h2>
        </header>

        <ol className="iv-num-list" role="list">
          {stats.map((s, i) => (
            <li key={s.label} className="iv-num-row">
              <span className="iv-num-marker">{String(i + 1).padStart(2, '0')}</span>
              <span className="iv-num-big">{s.num}</span>
              <span className="iv-num-meta">
                <span className="iv-num-label">{s.label}</span>
                <span className="iv-num-caption">{s.caption}</span>
              </span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Numbers;
