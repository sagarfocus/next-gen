import { Link } from 'react-router-dom';
import healthcareimg1 from '../../assets/healthcareimg1.png';
import healthcareimg2 from '../../assets/healthcareimg2.png';
import healthcareimg3 from '../../assets/healthcareimg3.png';
import healthcareimg4 from '../../assets/healthcareimg4.png';
import healthcareimg5 from '../../assets/healthcareimg5.png';
import healthcareimg6 from '../../assets/healthcareimg6.png';
import healthcareimg7 from '../../assets/healthcareimg7.png';

const WhatIsAutomation = () => {
  return (
    <section className="what-is" aria-labelledby="what-title">
      <div className="container-shell">
        <div className="what-grid">
          <div className="reveal">
            <h2 className="section-title" id="what-title">
              What is Healthcare Automation?
            </h2>
            <p className="what-text">
              Healthcare automation is the deployment of intelligent workflows
              that handle repetitive front-desk, back-office, and
              patient-communication tasks &mdash; directly inside the systems
              your clinic already runs on. No replacement, no migration. Just
              less manual work.
            </p>
            <Link to="/automation/more-info" className="more-info">
              <span className="more-info-icon">
                <svg
                  width={16}
                  height={16}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2.4}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="7" y1="17" x2="17" y2="7" />
                  <polyline points="7 7 17 7 17 17" />
                </svg>
              </span>
              More Info
            </Link>
          </div>

          <div className="reveal d2">
            <div className="what-collage">
              <div className="col-tile tile-a">
                <img src={healthcareimg1} alt="" loading="lazy" />
              </div>
              <div className="col-tile tile-b">
                <img src={healthcareimg2} alt="" loading="lazy" />
              </div>
              <div className="col-tile tile-c">
                <img src={healthcareimg3} alt="" loading="lazy" />
              </div>
              <div className="col-tile tile-d">
                <img src={healthcareimg4} alt="" loading="lazy" />
              </div>
              <div className="col-tile tile-e">
                <img src={healthcareimg5} alt="" loading="lazy" />
              </div>
              <div className="col-tile tile-f">
                <img src={healthcareimg6} alt="" loading="lazy" />
              </div>
              <div className="col-tile tile-g">
                <img src={healthcareimg7} alt="" loading="lazy" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIsAutomation;
