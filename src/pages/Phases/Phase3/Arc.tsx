const Arc = () => (
  <section className="ph3-arc" aria-labelledby="ph3-arc-title">
    <header className="ph3-arc-head">
      <span className="ph3-arc-eyebrow">The 30-day arc</span>
      <h2 id="ph3-arc-title">
        From quiet launch to a curve that bends.
      </h2>
      <p>
        Four milestones, mapped against inquiry volume. Each marker is a
        concrete shift in what the engagement is doing that week.
      </p>
    </header>

    <figure className="ph3-arc-frame">
      <svg
        viewBox="0 0 1200 460"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="A 30-day inquiry-volume curve with four milestone markers at day 1, 14, 21 and 30."
      >
        <defs>
          <linearGradient id="ph3ArcLine" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#576DB5" />
            <stop offset="55%" stopColor="#8FBC8F" />
            <stop offset="100%" stopColor="#B38B6D" />
          </linearGradient>
          <linearGradient id="ph3ArcFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#576DB5" stopOpacity="0.28" />
            <stop offset="100%" stopColor="#576DB5" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* horizontal grid lines */}
        <g stroke="rgba(255,255,255,0.07)" strokeWidth="1">
          <line x1="60" y1="80" x2="1140" y2="80" />
          <line x1="60" y1="160" x2="1140" y2="160" />
          <line x1="60" y1="240" x2="1140" y2="240" />
          <line x1="60" y1="320" x2="1140" y2="320" />
        </g>

        {/* axis */}
        <line
          x1="60"
          y1="360"
          x2="1140"
          y2="360"
          stroke="rgba(255,255,255,0.22)"
          strokeWidth="1.2"
        />

        {/* area under curve */}
        <path
          d="M 80 340 C 280 332, 380 300, 480 250 S 760 130, 900 90 S 1080 60, 1140 50 L 1140 360 L 80 360 Z"
          fill="url(#ph3ArcFill)"
        />

        {/* curve itself */}
        <path
          d="M 80 340 C 280 332, 380 300, 480 250 S 760 130, 900 90 S 1080 60, 1140 50"
          fill="none"
          stroke="url(#ph3ArcLine)"
          strokeWidth="3"
          strokeLinecap="round"
        />

        {/* faint vertical markers */}
        <g stroke="rgba(255,255,255,0.08)" strokeDasharray="3 5" strokeWidth="1">
          <line x1="80" y1="60" x2="80" y2="360" />
          <line x1="480" y1="60" x2="480" y2="360" />
          <line x1="780" y1="60" x2="780" y2="360" />
          <line x1="1140" y1="60" x2="1140" y2="360" />
        </g>

        {/* milestone dots - sit on the curve */}
        <g>
          <circle cx="80" cy="340" r="9" fill="#FFFFFF" />
          <circle cx="80" cy="340" r="5" fill="#576DB5" />
          <circle cx="480" cy="250" r="9" fill="#FFFFFF" />
          <circle cx="480" cy="250" r="5" fill="#8FBC8F" />
          <circle cx="780" cy="160" r="9" fill="#FFFFFF" />
          <circle cx="780" cy="160" r="5" fill="#B38B6D" />
          <circle cx="1140" cy="50" r="11" fill="#FFFFFF" />
          <circle cx="1140" cy="50" r="6" fill="#B38B6D" />
          <circle
            cx="1140"
            cy="50"
            r="16"
            fill="none"
            stroke="#B38B6D"
            strokeOpacity="0.35"
            strokeWidth="1.5"
          />
        </g>

        {/* milestone labels above the curve */}
        <g
          fontFamily="'Plus Jakarta Sans', sans-serif"
          fontWeight="700"
          fill="#FFFFFF"
        >
          <text x="80" y="318" fontSize="11" letterSpacing="3" fill="#B38B6D">
            DAY 01
          </text>
          <text x="80" y="298" fontSize="14">
            Visibility live
          </text>
          <text x="480" y="228" fontSize="11" letterSpacing="3" fill="#B38B6D">
            DAY 14
          </text>
          <text x="480" y="208" fontSize="14">
            Editorial cadence
          </text>
          <text x="780" y="138" fontSize="11" letterSpacing="3" fill="#B38B6D">
            DAY 21
          </text>
          <text x="780" y="118" fontSize="14">
            Creative refresh
          </text>
          <text
            x="1140"
            y="28"
            fontSize="11"
            letterSpacing="3"
            fill="#B38B6D"
            textAnchor="end"
          >
            DAY 30
          </text>
          <text x="1140" y="8" fontSize="14" textAnchor="end">
            Volume bends
          </text>
        </g>

        {/* axis labels */}
        <g
          fontFamily="'Plus Jakarta Sans', sans-serif"
          fontSize="10.5"
          fontWeight="700"
          letterSpacing="2.6"
          fill="rgba(255,255,255,0.55)"
        >
          <text x="60" y="392">DAY 01</text>
          <text x="480" y="392" textAnchor="middle">
            DAY 14
          </text>
          <text x="780" y="392" textAnchor="middle">
            DAY 21
          </text>
          <text x="1140" y="392" textAnchor="end">
            DAY 30
          </text>
        </g>

        {/* y-axis caption */}
        <text
          x="60"
          y="56"
          fontFamily="'Plus Jakarta Sans', sans-serif"
          fontSize="10.5"
          fontWeight="700"
          letterSpacing="3"
          fill="rgba(255,255,255,0.45)"
        >
          INQUIRY VOLUME →
        </text>

        {/* fig caption */}
        <text
          x="1140"
          y="56"
          fontFamily="'Plus Jakarta Sans', sans-serif"
          fontSize="10.5"
          fontWeight="700"
          letterSpacing="3"
          fill="rgba(255,255,255,0.45)"
          textAnchor="end"
        >
          FIG. 03 · PHASE 3 ARC
        </text>
      </svg>
      <figcaption>
        Illustrative. Actual curve depends on baseline volume, vertical
        and seasonality.
      </figcaption>
    </figure>

    <ol className="ph3-arc-legend">
      <li style={{ ['--ph3-marker' as string]: '#576DB5' }}>
        <span className="d">Day 01</span>
        <strong>Visibility goes live</strong>
        <p>
          Search and paid switch on together; the dashboard starts
          logging its first attributed bookings.
        </p>
      </li>
      <li style={{ ['--ph3-marker' as string]: '#8FBC8F' }}>
        <span className="d">Day 14</span>
        <strong>Editorial cadence</strong>
        <p>
          The 90-day calendar is publishing on schedule. Long-tail
          rankings begin to compound.
        </p>
      </li>
      <li style={{ ['--ph3-marker' as string]: '#B38B6D' }}>
        <span className="d">Day 21</span>
        <strong>Creative refresh</strong>
        <p>
          First paid-media cohort replaced with what the data preferred -
          cost-per-booking begins tightening.
        </p>
      </li>
      <li style={{ ['--ph3-marker' as string]: '#B38B6D' }}>
        <span className="d">Day 30</span>
        <strong>Volume bends</strong>
        <p>
          Inquiry curve has bent upward; front-desk workload has shifted
          from cold calls to qualified bookings.
        </p>
      </li>
    </ol>
  </section>
);

export default Arc;
