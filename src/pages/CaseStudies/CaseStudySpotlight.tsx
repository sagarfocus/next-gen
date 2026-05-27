import erImg from '@/assets/nextgen-image/Erofwhiterockimg.jpg';
import patientImg from '@/assets/nextgen-image/Patientgrowthimg.png';
import logo from '@/assets/the-nextgen-logo.png';

const ArrowUp = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2.4}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <line x1="12" y1="19" x2="12" y2="5" />
    <polyline points="5 12 12 5 19 12" />
  </svg>
);

const SearchIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.7}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <circle cx="11" cy="11" r="7" />
    <line x1="20" y1="20" x2="16.5" y2="16.5" />
  </svg>
);

const MailIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.7}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <polyline points="3 7 12 13 21 7" />
  </svg>
);

const ScreenIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.7}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <rect x="3" y="4" width="18" height="13" rx="2" />
    <line x1="8" y1="21" x2="16" y2="21" />
    <line x1="12" y1="17" x2="12" y2="21" />
  </svg>
);

const CaseStudySpotlight = () => {
  return (
    <section className="cs-spotlight" aria-labelledby="cs-spotlight-title">
      <div className="container-shell">
        <article className="cssp-card">
          <header className="cssp-head">
            <div className="cssp-head-text">
              <span className="cssp-tag">CASE STUDY</span>
              <h2 id="cs-spotlight-title" className="cssp-title">
                Local SEO and Paid Search Drove Record Patient Acquisition Across Three ER Locations
              </h2>
            </div>
            <div className="cssp-head-logo" aria-hidden="true">
              <img src={logo} alt="" />
            </div>
          </header>

          <div className="cssp-body">
            <div className="cssp-row cssp-row-challenge">
              <div className="cssp-media">
                <img src={erImg} alt="Freestanding emergency room facility" />
              </div>
              <div className="cssp-copy">
                <h3 className="cssp-h">CHALLENGE</h3>
                <p>
                  Dallas Metro ER, a three-location freestanding emergency network, was outranked by
                  large hospital systems in branded search. Patient volume was steady but
                  acquisition cost per visit was rising every quarter, GBP profiles were unverified
                  at two of three locations, and location pages took 6.4s to load on mobile — so
                  they had effectively stopped trusting paid search as a channel.
                </p>
              </div>
            </div>

            <div className="cssp-row cssp-row-solution">
              <h3 className="cssp-h">SOLUTION</h3>
              <div className="cssp-sol-grid">
                <div className="cssp-sol-item">
                  <p>
                    <strong>Audited</strong> the full local search and paid acquisition stack to
                    identify the highest-leverage gaps across all three locations.
                  </p>
                  <p>
                    <strong>Rebuilt</strong> three location landing pages around the high-acuity
                    patient decision moment with sub-1.5s mobile load times.
                  </p>
                </div>
                <div className="cssp-sol-item">
                  <p>
                    <strong>Tightened</strong> the keyword set from 480 broad terms to 64 high-intent
                    search queries that actually drove ER walk-ins.
                  </p>
                  <p>
                    <strong>Tuned</strong> radius bid modifiers to 1.5 / 3 / 5-mile ROAS bands so
                    paid spend chased only profitable geography.
                  </p>
                </div>
                <div className="cssp-sol-item">
                  <p>
                    <strong>Rewrote</strong> the GBP service catalog and Q&amp;A per location so
                    each profile matched the actual demand pattern in its neighborhood.
                  </p>
                  <p>
                    <strong>Trained</strong> the in-house intake team on call-tracking so every
                    booked visit could be attributed back to a specific keyword and page.
                  </p>
                </div>
              </div>
            </div>

            <div className="cssp-row cssp-row-results">
              <div className="cssp-results-copy">
                <h3 className="cssp-h">RESULTS</h3>
                <p>
                  The new channels drove record visit volume for Q3 and Q4, contributing to a
                  network-best six months and the highest ROAS the leadership team had seen on any
                  marketing line item.
                </p>
                <p>
                  After the six-month sprint the network reinvested in expanding both paid search
                  and the local-content engine across two additional service categories.
                </p>
                <ul className="cssp-stats-row">
                  <li>
                    <ArrowUp />
                    <div>
                      <strong>45%</strong>
                      <span>YoY patient visit increase</span>
                    </div>
                  </li>
                  <li>
                    <SearchIcon />
                    <div>
                      <strong>14%</strong>
                      <span>of new visits from paid search</span>
                    </div>
                  </li>
                  <li>
                    <MailIcon />
                    <div>
                      <strong>5%</strong>
                      <span>of new visits from email</span>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="cssp-results-panel">
                <div className="cssp-results-stat">
                  <span className="cssp-arrow">
                    <ArrowUp />
                  </span>
                  <strong>45%</strong>
                  <em>Patient visits (YoY)</em>
                </div>
                <div className="cssp-results-stat">
                  <strong>620%</strong>
                  <em>
                    <ScreenIcon /> 6-month ROAS
                  </em>
                </div>
                <div className="cssp-results-photo">
                  <img src={patientImg} alt="Patient growth dashboard review" />
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default CaseStudySpotlight;
