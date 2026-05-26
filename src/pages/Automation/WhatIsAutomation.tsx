import { Link } from 'react-router-dom';
import {
  PLACEHOLDER_IMAGE as healthcareimg1,
  PLACEHOLDER_IMAGE as healthcareimg2,
  PLACEHOLDER_IMAGE as healthcareimg3,
  PLACEHOLDER_IMAGE as healthcareimg4,
  PLACEHOLDER_IMAGE as healthcareimg5,
  PLACEHOLDER_IMAGE as healthcareimg6,
  PLACEHOLDER_IMAGE as healthcareimg7,
} from '@/lib/placeholderImage';

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
              Healthcare automation is the deployment of intelligent workflows that handle
              repetitive front-desk, back-office, and patient-communication tasks - directly inside
              the systems your clinic already runs on. No replacement, no migration. Just less
              manual work.
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
