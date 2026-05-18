import type { ReactNode } from 'react';
import SectionHead from './SectionHead';

export interface ResultStat {
  num: ReactNode;
  label: string;
}

interface ResultsProps {
  stats: ResultStat[];
}

const Results = ({ stats }: ResultsProps) => {
  return (
    <section className="sv-section sv-results">
      <div className="container-shell">
        <SectionHead
          num="03 — Results"
          title={
            <>
              Real numbers, <em>real practices.</em>
            </>
          }
          meta={
            <>
              Audited
              <br />
              aggregate
            </>
          }
        />
        <div className="sv-res-grid">
          {stats.map((s) => (
            <div key={s.label} className="sv-res-item">
              <div className="sv-res-num">{s.num}</div>
              <div className="sv-res-lbl">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Results;
