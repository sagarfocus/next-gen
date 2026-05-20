const KnowledgeBase = () => {
  return (
    <section className="sl-section sl-kb">
      <div className="container-shell">
        <div className="sl-sec-head">
          <div>
            <div className="sl-sec-num">01 - Knowledge base</div>
            <h2 className="sl-sec-title">
              What &ldquo;local search&rdquo; <em>really</em> is.
            </h2>
          </div>
          <div className="sl-sec-meta">
            Plain English
            <br />3 min read
          </div>
        </div>

        <div className="sl-kb-grid">
          <div className="sl-kb-text">
            <p>
              When someone searches{' '}
              <strong>&ldquo;urgent care near me&rdquo;</strong>, Google shows
              two layers: a Map Pack with three pinned clinics, and a regular
              results list below.
            </p>
            <p>
              Most clinic patients click in the Map Pack. To rank there,
              Google measures three things:{' '}
              <strong>relevance, distance, and prominence.</strong> Our job is
              to engineer all three - without breaking HIPAA.
            </p>
            <p>
              Showing up everywhere else (regular results, condition-specific
              searches, &ldquo;doctor for X&rdquo; queries) compounds on top
              of that foundation.
            </p>
          </div>

          <div className="sl-kb-serp">
            <div className="sl-serp-bar">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
              urgent care near me
            </div>
            <div className="sl-serp-pack">
              <span className="sl-serp-tag">Map Pack</span>
              <div className="sl-serp-map">
                <div className="sl-serp-pin p1" />
                <div className="sl-serp-pin p2" />
                <div className="sl-serp-pin p3" />
              </div>
              <div className="sl-serp-listing">
                <div className="sl-serp-rank you">1</div>
                <div className="sl-serp-listing-text">
                  <div className="sl-serp-listing-name">Your Clinic</div>
                  <div className="sl-serp-listing-meta">
                    ★ 4.9 · 0.4 mi · Open now
                  </div>
                </div>
              </div>
              <div className="sl-serp-listing">
                <div className="sl-serp-rank">2</div>
                <div className="sl-serp-listing-text">
                  <div className="sl-serp-listing-name">Hospital Network</div>
                  <div className="sl-serp-listing-meta">★ 4.2 · 0.8 mi</div>
                </div>
              </div>
              <div className="sl-serp-listing">
                <div className="sl-serp-rank">3</div>
                <div className="sl-serp-listing-text">
                  <div className="sl-serp-listing-name">Big Chain Urgent</div>
                  <div className="sl-serp-listing-meta">★ 4.5 · 1.2 mi</div>
                </div>
              </div>
            </div>
            <div className="sl-serp-organic">
              <div className="sl-serp-organic-row">
                <strong>yourclinic.com › urgent-care</strong>
                <span>
                  Walk-in care · No appointment needed · Open 7 days
                </span>
              </div>
              <div className="sl-serp-organic-row">
                <strong>healthgrades.com › urgent-care</strong>
                <span>Find urgent care clinics in your area</span>
              </div>
            </div>
            <div className="sl-serp-callout">
              Patients click here 64% of the time
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KnowledgeBase;
