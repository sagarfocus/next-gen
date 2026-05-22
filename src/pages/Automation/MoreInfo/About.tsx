import { Link } from 'react-router-dom';
import builtForClinic from '../../../assets/built-for-clinic.png';
import { ArrowIcon, CheckIcon } from '../../../components/icons';
import { CHECKLIST } from './data';

const About = () => (
  <section className="amih-about" aria-labelledby="amih-about-title">
    <div className="container-shell">
      <div className="amih-about-grid">
        <div className="amih-about-media" aria-hidden="true">
          <div className="amih-about-frame">
            <span className="amih-frame-cap" />
            <span className="amih-frame-block amih-frame-block--a" />
            <span className="amih-frame-block amih-frame-block--b" />
            <span className="amih-frame-block amih-frame-block--c" />
            <img
              src={builtForClinic}
              alt=""
              className="amih-frame-img"
              loading="lazy"
            />
            <div className="amih-frame-tag">
              <span>Live workflow</span>
              <strong>Patient intake</strong>
            </div>
          </div>
        </div>

        <div className="amih-about-copy">
          <span className="amih-section-label">/ 02 &nbsp; What you get</span>
          <h2 id="amih-about-title" className="amih-h2">
            Built for clinics that move fast - without breaking what works.
          </h2>
          <p className="amih-about-lede">
            Every automation we ship sits on top of your existing PM, EHR,
            and calendar - never in place of them. Same data of record,
            same vendors, far less manual work.
          </p>
          <ul className="amih-check-list">
            {CHECKLIST.map((item) => (
              <li key={item}>
                <span className="amih-check-icon" aria-hidden="true">
                  <CheckIcon size={14} strokeWidth={2.6} />
                </span>
                {item}
              </li>
            ))}
          </ul>
          <Link to="/automation" className="amih-btn amih-btn-ghost">
            Back to the template library <ArrowIcon size={14} strokeWidth={2.2} />
          </Link>
        </div>
      </div>
    </div>
  </section>
);

export default About;
