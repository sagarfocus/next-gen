import SectionHead from './SectionHead';

export interface HowStep {
  num: string;
  name: string;
  desc: string;
}

interface HowItWorksProps {
  steps: HowStep[];
}

const HowItWorks = ({ steps }: HowItWorksProps) => {
  return (
    <section className="sv-section sv-how" id="how">
      <div className="container-shell">
        <SectionHead
          num="02 — How it works"
          title={
            <>
              Four phases. <em>Sixty days.</em>
            </>
          }
          meta={
            <>
              Same shape
              <br />
              every engagement
            </>
          }
        />
        <div className="sv-how-track">
          <div className="sv-how-grid">
            {steps.map((s) => (
              <div key={s.num} className="sv-how-step">
                <div className="sv-how-dot">{s.num}</div>
                <h3 className="sv-how-name">{s.name}</h3>
                <p className="sv-how-desc">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
