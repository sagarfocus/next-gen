import type { ReactElement } from 'react';
import SectionHead from './SectionHead';

export interface DoCard {
  name: string;
  desc: string;
  icon: ReactElement;
}

interface WhatWeDoProps {
  cards: DoCard[];
}

const WhatWeDo = ({ cards }: WhatWeDoProps) => {
  return (
    <section className="sv-section sv-do">
      <div className="container-shell">
        <SectionHead
          num="01 — What we do"
          title={
            <>
              Six ways we <em>move the needle.</em>
            </>
          }
          meta={
            <>
              Every retainer
              <br />
              covers all six
            </>
          }
        />
        <div className="sv-do-grid">
          {cards.map((c) => (
            <div key={c.name} className="sv-do-card">
              <span className="sv-do-icon">{c.icon}</span>
              <h3 className="sv-do-name">{c.name}</h3>
              <p className="sv-do-desc">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
