import { Fragment } from 'react';

const PARTNERS = [
  'Dallas Metro ER',
  'Houston Urgent',
  'Austin Aesthetic',
  'San Antonio Family',
  'Lakeside Therapy',
  'Irving Dental Group',
  'Plano MedSpa',
];

const PartnersMarquee = () => {
  // Duplicate the partner list so the CSS marquee animation loops seamlessly.
  const loop = [...PARTNERS, ...PARTNERS];

  return (
    <section className="cs-marquee">
      <div className="container-shell">
        <div className="cs-marquee-head">
          <div className="cs-eyebrow">Trusted partners</div>
          <h2>
            We work with <em>healthcare leaders</em>
          </h2>
        </div>
      </div>
      <div className="cs-marquee-strip" aria-hidden="true">
        <div className="cs-marquee-track">
          {loop.map((name, i) => (
            <Fragment key={`${name}-${i}`}>
              <span className="cs-mq-item">{name}</span>
              <span className="cs-mq-dot" />
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersMarquee;
