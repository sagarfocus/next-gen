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
            <a href="#what-more" className="more-info">
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
            </a>
          </div>

          <div className="reveal d2">
            <div className="what-collage">
              <div className="col-tile tile-a">
                <svg
                  width="60%"
                  viewBox="0 0 60 60"
                  fill="none"
                  stroke="#576DB5"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <rect x="8" y="14" width="44" height="32" rx="4" />
                  <path d="M8 22h44" />
                  <circle cx="14" cy="18" r="1.2" fill="#576DB5" />
                  <path d="M16 32h12M16 38h20" />
                </svg>
              </div>
              <div className="col-tile tile-b">
                <svg width="80%" viewBox="0 0 220 110" fill="none" aria-hidden="true">
                  <rect x="10" y="10" width="200" height="90" rx="10" fill="#fff" stroke="#B38B6D" strokeOpacity=".25" />
                  <rect x="22" y="22" width="60" height="8" rx="4" fill="#576DB5" opacity=".25" />
                  <rect x="22" y="38" width="176" height="6" rx="3" fill="#B38B6D" opacity=".18" />
                  <rect x="22" y="50" width="120" height="6" rx="3" fill="#B38B6D" opacity=".18" />
                  <rect x="22" y="68" width="80" height="20" rx="6" fill="#576DB5" />
                  <text
                    x="62"
                    y="82"
                    textAnchor="middle"
                    fill="#fff"
                    fontFamily="Plus Jakarta Sans"
                    fontSize="9"
                    fontWeight="700"
                  >
                    Submit
                  </text>
                  <circle cx="190" cy="32" r="6" fill="#8FBC8F" />
                  <path
                    d="M186 32l3 3 6-6"
                    stroke="#fff"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="col-tile tile-c">
                <svg
                  width="55%"
                  viewBox="0 0 60 60"
                  fill="none"
                  stroke="#8FBC8F"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M30 8a22 22 0 0 1 22 22 22 22 0 0 1-22 22 22 22 0 0 1-22-22 22 22 0 0 1 22-22z" />
                  <polyline points="20,30 28,38 42,22" />
                </svg>
              </div>
              <div className="col-tile tile-d">
                <div className="tile-d-title">Patient Touchpoints</div>
                <div className="tile-d-illust">
                  <svg
                    width="100%"
                    height="100%"
                    viewBox="0 0 200 90"
                    preserveAspectRatio="xMidYMid meet"
                    fill="none"
                    aria-hidden="true"
                  >
                    <rect x="20" y="22" width="140" height="46" rx="8" fill="none" stroke="#576DB5" strokeWidth="2" />
                    <rect x="160" y="34" width="8" height="22" rx="2" fill="#576DB5" />
                    <rect x="26" y="28" width="100" height="34" rx="4" fill="url(#tileGrad)" opacity=".85" />
                    <defs>
                      <linearGradient id="tileGrad" x1="0" y1="0" x2="1" y2="0">
                        <stop offset="0%" stopColor="#576DB5" />
                        <stop offset="100%" stopColor="#8FBC8F" />
                      </linearGradient>
                    </defs>
                    <text
                      x="76"
                      y="50"
                      textAnchor="middle"
                      fill="#fff"
                      fontFamily="Plus Jakarta Sans"
                      fontSize="11"
                      fontWeight="800"
                    >
                      72%
                    </text>
                  </svg>
                </div>
                <div className="tile-d-foot">are still manual without automation</div>
              </div>
              <div className="col-tile tile-e">
                <svg
                  width="60%"
                  viewBox="0 0 60 60"
                  fill="none"
                  stroke="#B38B6D"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <circle cx="30" cy="30" r="20" />
                  <polyline points="30,18 30,30 38,34" />
                </svg>
              </div>
              <div className="col-tile tile-f">
                <svg
                  width="55%"
                  viewBox="0 0 60 60"
                  fill="none"
                  stroke="#576DB5"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M22 14h16v8a8 8 0 0 1-16 0v-8z" />
                  <path d="M38 22a8 8 0 0 0 8 0M22 22a8 8 0 0 1-8 0" />
                  <path d="M30 30v8" />
                  <path d="M22 46h16" />
                </svg>
              </div>
              <div className="col-tile tile-g">
                <svg width="85%" viewBox="0 0 240 90" fill="none" aria-hidden="true">
                  <rect x="10" y="14" width="120" height="20" rx="10" fill="#fff" stroke="#B38B6D" strokeOpacity=".3" />
                  <text
                    x="20"
                    y="28"
                    fill="#2D3748"
                    fontFamily="Plus Jakarta Sans"
                    fontSize="9"
                    fontWeight="600"
                  >
                    Hi, I&apos;d like to book an appointment
                  </text>
                  <rect x="110" y="44" width="120" height="20" rx="10" fill="#576DB5" />
                  <text
                    x="120"
                    y="58"
                    fill="#fff"
                    fontFamily="Plus Jakarta Sans"
                    fontSize="9"
                    fontWeight="600"
                  >
                    What service do you need?
                  </text>
                  <rect x="10" y="68" width="80" height="14" rx="7" fill="#fff" stroke="#B38B6D" strokeOpacity=".3" />
                  <text
                    x="20"
                    y="78"
                    fill="#2D3748"
                    fontFamily="Plus Jakarta Sans"
                    fontSize="8"
                    fontWeight="600"
                  >
                    Cleaning
                  </text>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIsAutomation;
