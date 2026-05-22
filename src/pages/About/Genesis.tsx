import { PRINCIPLES } from '@/content/about/principles';

const Genesis = () => {
  return (
    <section className="ab-genesis" aria-labelledby="ab-gen-title">
      <div className="container-shell">
        <div className="ab-gen-grid">
          <div className="ab-gen-visual" aria-hidden="true">
            <div className="ab-gen-frame">
              <div className="ab-gen-svg">
                <svg viewBox="0 0 240 240" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient id="genLine" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="#576DB5" stopOpacity=".7" />
                      <stop offset="100%" stopColor="#8FBC8F" stopOpacity=".7" />
                    </linearGradient>
                  </defs>

                  <circle
                    cx="60"
                    cy="120"
                    r="34"
                    fill="rgba(87,109,181,.10)"
                    stroke="#576DB5"
                    strokeWidth="1.5"
                  />
                  <rect x="48" y="111" width="24" height="3" rx="1" fill="#576DB5" />
                  <rect x="48" y="118" width="18" height="3" rx="1" fill="#576DB5" opacity=".7" />
                  <rect x="48" y="125" width="22" height="3" rx="1" fill="#576DB5" opacity=".5" />

                  <circle
                    cx="180"
                    cy="120"
                    r="34"
                    fill="rgba(143,188,143,.14)"
                    stroke="#8FBC8F"
                    strokeWidth="1.5"
                  />
                  <rect
                    x="166"
                    y="108"
                    width="28"
                    height="20"
                    rx="2"
                    fill="none"
                    stroke="#8FBC8F"
                    strokeWidth="1.4"
                  />
                  <line x1="166" y1="115" x2="194" y2="115" stroke="#8FBC8F" strokeWidth="1.2" />
                  <circle cx="170" cy="111" r="1.2" fill="#8FBC8F" />

                  <line
                    x1="94"
                    y1="120"
                    x2="146"
                    y2="120"
                    stroke="url(#genLine)"
                    strokeWidth="1.5"
                    strokeDasharray="3 4"
                    opacity=".7"
                  />

                  <circle
                    cx="120"
                    cy="120"
                    r="22"
                    fill="rgba(255,255,255,.92)"
                    stroke="#B38B6D"
                    strokeWidth="1.8"
                  />
                  <circle cx="120" cy="120" r="6" fill="#B38B6D" />

                  <text
                    x="60"
                    y="76"
                    textAnchor="middle"
                    fontFamily="Plus Jakarta Sans, sans-serif"
                    fontSize="9"
                    fontWeight="700"
                    letterSpacing="2"
                    fill="#576DB5"
                  >
                    MARKETING
                  </text>
                  <text
                    x="180"
                    y="178"
                    textAnchor="middle"
                    fontFamily="Plus Jakarta Sans, sans-serif"
                    fontSize="9"
                    fontWeight="700"
                    letterSpacing="2"
                    fill="#8FBC8F"
                  >
                    OPERATIONS
                  </text>
                  <text
                    x="120"
                    y="166"
                    textAnchor="middle"
                    fontFamily="Plus Jakarta Sans, sans-serif"
                    fontSize="8"
                    fontWeight="700"
                    letterSpacing="2.5"
                    fill="#B38B6D"
                  >
                    BRIDGE
                  </text>

                  <circle cx="20" cy="60" r="3" fill="#8FBC8F" opacity=".7" />
                  <circle cx="220" cy="60" r="3" fill="#576DB5" opacity=".7" />
                  <circle cx="20" cy="200" r="3" fill="#B38B6D" opacity=".7" />
                  <circle cx="220" cy="200" r="3" fill="#B38B6D" opacity=".7" />
                  <circle cx="120" cy="30" r="3" fill="#8FBC8F" opacity=".7" />
                  <circle cx="120" cy="210" r="3" fill="#576DB5" opacity=".7" />
                </svg>
              </div>

              <div className="ab-gen-card gc1">
                <span className="ab-gen-card-ico" aria-hidden="true">
                  <svg
                    width={18}
                    height={18}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.8}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                  </svg>
                </span>
                <div className="ab-gen-card-text">
                  <strong>+10K Inquiries</strong>
                  <small>Generated &amp; routed</small>
                </div>
              </div>

              <div className="ab-gen-card gc2">
                <span className="ab-gen-card-ico" aria-hidden="true">
                  <svg
                    width={18}
                    height={18}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.8}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </span>
                <div className="ab-gen-card-text">
                  <strong>Front-Desk Ready</strong>
                  <small>No staff overload</small>
                </div>
              </div>
            </div>
          </div>

          <div className="ab-gen-text">
            <span className="ab-gen-eyebrow">Why We Exist</span>
            <h2 id="ab-gen-title" className="ab-gen-h2">
              Transcending the vendor relationship.
            </h2>
            <p>
              Traditional agencies were <strong>actively harming high-volume clinics</strong>.
              Driving thousands of inquiries to Freestanding ERs and Urgent Cares while
              inadvertently crushing the front desk. Marketing was &ldquo;working,&rdquo; but the
              clinic was failing to process the volume.
            </p>
            <p>
              So we became <strong>operational integrators</strong>. We don&rsquo;t just run Google
              Ads - we build the AI chatbots that answer them. We don&rsquo;t just do Local SEO - we
              build the digital intake forms that process the patients who find you.
            </p>

            <div className="ab-gen-principles">
              {PRINCIPLES.map((p) => (
                <div key={p.title} className="ab-gen-principle">
                  <div className="ab-gen-principle-head">
                    <span className="ab-gen-principle-ico" aria-hidden="true">
                      {p.icon}
                    </span>
                    <h3 className="ab-gen-principle-title">{p.title}</h3>
                  </div>
                  <p className="ab-gen-principle-text">{p.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Genesis;
