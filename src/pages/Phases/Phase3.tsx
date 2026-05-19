import { Link } from 'react-router-dom';

/**
 * Phase 3 — Swiss layout #3: Editorial spread with display headline
 * Oversized type, ruled timeline, drop-cap intro, big stats.
 */
const Phase3 = () => {
  return (
    <main className="ph3-root">
      <style>{`
        .ph3-root {
          background: #FAFAF8;
          color: #1A1F2C;
          font-family: 'Plus Jakarta Sans', system-ui, sans-serif;
          margin-top: calc(-1 * var(--nav-h, 88px));
          padding: 120px 0 120px;
          min-height: 100vh;
        }
        .ph3-wrap {
          max-width: 1320px;
          margin: 0 auto;
          padding: 0 clamp(20px, 4vw, 48px);
        }
        .ph3-crumb {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          color: #718096;
        }
        .ph3-crumb:hover { color: #2D3748; }

        .ph3-masthead {
          margin-top: 40px;
          padding: 22px 0;
          border-top: 1px solid #2D3748;
          border-bottom: 1px solid #2D3748;
          display: grid;
          grid-template-columns: repeat(12, 1fr);
          gap: 24px;
          align-items: baseline;
        }
        .ph3-masthead .a { grid-column: 1 / span 2; font-size: 11px; font-weight: 700; letter-spacing: 0.32em; text-transform: uppercase; color: #B38B6D; }
        .ph3-masthead .b { grid-column: 3 / span 5; font-size: 11px; font-weight: 700; letter-spacing: 0.24em; text-transform: uppercase; color: #2D3748; }
        .ph3-masthead .c { grid-column: 8 / span 3; font-size: 11px; font-weight: 700; letter-spacing: 0.24em; text-transform: uppercase; color: #718096; }
        .ph3-masthead .d { grid-column: 11 / span 2; text-align: right; font-size: 11px; font-weight: 700; letter-spacing: 0.24em; text-transform: uppercase; color: #718096; }

        .ph3-display {
          margin: clamp(28px, 4vw, 56px) 0 clamp(24px, 3vw, 40px);
          font-size: clamp(32px, 4.4vw, 60px);
          font-weight: 800;
          line-height: 1.05;
          letter-spacing: -0.025em;
          color: #2D3748;
          max-width: 22ch;
        }
        .ph3-display em {
          font-style: normal;
          color: #576DB5;
        }

        .ph3-body {
          display: grid;
          grid-template-columns: repeat(12, 1fr);
          gap: 32px;
          align-items: start;
        }
        .ph3-body-aside {
          grid-column: 1 / span 3;
          position: sticky;
          top: 120px;
          padding-right: 16px;
        }
        .ph3-body-aside .pair {
          display: flex;
          flex-direction: column;
          gap: 4px;
          padding: 18px 0;
          border-bottom: 1px solid rgba(45,55,72,0.18);
        }
        .ph3-body-aside .pair:first-child { padding-top: 0; }
        .ph3-body-aside .k {
          font-size: 10.5px;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          color: #718096;
          font-weight: 700;
        }
        .ph3-body-aside .v {
          font-size: 16px;
          font-weight: 700;
          color: #2D3748;
          letter-spacing: -0.01em;
        }

        .ph3-body-main {
          grid-column: 5 / span 8;
          column-count: 2;
          column-gap: 48px;
          column-rule: 1px solid rgba(45,55,72,0.12);
          font-size: 16px;
          line-height: 1.7;
          color: #2D3748;
        }
        .ph3-body-main p {
          margin: 0 0 18px;
          break-inside: avoid;
        }
        .ph3-body-main p:first-of-type::first-letter {
          float: left;
          font-size: 78px;
          line-height: 0.85;
          font-weight: 800;
          padding: 6px 12px 0 0;
          color: #B38B6D;
          letter-spacing: -0.03em;
        }

        /* === 30-day arc visualisation === */
        .ph3-arc {
          margin: clamp(72px, 9vw, 128px) 0 0;
          padding-top: clamp(32px, 4vw, 56px);
          border-top: 2px solid #2D3748;
        }
        .ph3-arc-head {
          display: grid;
          grid-template-columns: 5fr 7fr;
          gap: clamp(40px, 5vw, 80px);
          margin-bottom: clamp(32px, 4vw, 48px);
          align-items: end;
        }
        .ph3-arc-head .ph3-arc-eyebrow {
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 0.26em;
          text-transform: uppercase;
          color: #B38B6D;
          margin-bottom: 12px;
          display: block;
        }
        .ph3-arc-head h2 {
          grid-column: 1;
          font-size: clamp(28px, 2.8vw, 40px);
          font-weight: 700;
          line-height: 1.1;
          letter-spacing: -0.025em;
          color: #2D3748;
          margin: 0;
        }
        .ph3-arc-head p {
          grid-column: 2;
          font-size: 15px;
          line-height: 1.6;
          color: #4A5568;
          margin: 0;
        }
        .ph3-arc-frame {
          margin: 0;
          background: linear-gradient(135deg, #1B2030 0%, #2D3748 60%, #161A22 100%);
          border-radius: 22px;
          padding: clamp(20px, 2.4vw, 32px);
          overflow: hidden;
          position: relative;
        }
        .ph3-arc-frame::before {
          content: "";
          position: absolute;
          inset: 0 0 auto 0;
          height: 3px;
          background: linear-gradient(90deg, #576DB5, #8FBC8F, #B38B6D);
        }
        .ph3-arc-frame svg {
          display: block;
          width: 100%;
          height: auto;
        }
        .ph3-arc-frame figcaption {
          margin-top: 14px;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.45);
          text-align: right;
        }
        .ph3-arc-legend {
          list-style: none;
          margin: clamp(24px, 3vw, 40px) 0 0;
          padding: 0;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: clamp(14px, 1.6vw, 20px);
        }
        .ph3-arc-legend li {
          position: relative;
          background: #FFFFFF;
          border: 1px solid rgba(45, 55, 72, 0.12);
          border-radius: 16px;
          padding: 22px 22px 24px;
          display: flex;
          flex-direction: column;
          gap: 8px;
          transition: border-color 0.25s ease, transform 0.25s ease, box-shadow 0.25s ease;
        }
        .ph3-arc-legend li::before {
          content: "";
          position: absolute;
          left: 22px;
          top: 22px;
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: var(--ph3-marker, #576DB5);
          box-shadow: 0 0 0 3px color-mix(in srgb, var(--ph3-marker, #576DB5) 22%, transparent);
        }
        .ph3-arc-legend li:hover {
          border-color: rgba(45, 55, 72, 0.30);
          transform: translateY(-4px);
          box-shadow: 0 20px 40px -26px rgba(26, 36, 56, 0.26);
        }
        .ph3-arc-legend li .d {
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: var(--ph3-marker, #576DB5);
          padding-left: 22px;
        }
        .ph3-arc-legend li strong {
          font-size: 16px;
          font-weight: 700;
          color: #1A2438;
          letter-spacing: -0.01em;
          line-height: 1.25;
        }
        .ph3-arc-legend li p {
          font-size: 13px;
          line-height: 1.55;
          color: #4A5568;
          margin: 0;
        }
        @media (max-width: 1080px) {
          .ph3-arc-legend { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 540px) {
          .ph3-arc-head { grid-template-columns: 1fr; gap: 16px; align-items: start; }
          .ph3-arc-head p { grid-column: 1; }
          .ph3-arc-legend { grid-template-columns: 1fr; }
        }

        .ph3-stats {
          margin: clamp(72px, 9vw, 128px) 0 0;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          border-top: 2px solid #2D3748;
        }
        .ph3-stat {
          padding: 36px 28px 32px;
          border-right: 1px solid rgba(45, 55, 72, 0.18);
          background: #FAFAF8;
        }
        .ph3-stat:last-child { border-right: none; }
        .ph3-stat .num {
          font-size: clamp(56px, 6vw, 88px);
          font-weight: 800;
          letter-spacing: -0.045em;
          line-height: 0.9;
          color: #2D3748;
        }
        .ph3-stat .num em {
          font-style: normal;
          color: #B38B6D;
          font-size: 0.55em;
          vertical-align: top;
          margin-left: 4px;
          letter-spacing: 0;
        }
        .ph3-stat .lbl {
          margin-top: 14px;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.24em;
          text-transform: uppercase;
          color: #718096;
        }

        .ph3-timeline {
          margin: clamp(72px, 9vw, 128px) 0 0;
        }
        .ph3-timeline h2 {
          font-size: clamp(28px, 2.8vw, 40px);
          font-weight: 700;
          line-height: 1.1;
          letter-spacing: -0.025em;
          color: #2D3748;
          margin: 0 0 36px;
          max-width: 18ch;
        }
        /* Horizontal stepper with connector line + numbered nodes */
        .ph3-tline {
          position: relative;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 0;
          padding-top: 56px;
        }
        .ph3-tline::before {
          content: "";
          position: absolute;
          top: 27px;
          left: calc(100% / 8);
          right: calc(100% / 8);
          height: 2px;
          background: linear-gradient(90deg,
            #B38B6D 0%,
            #B38B6D 100%);
          opacity: 0.25;
          z-index: 0;
        }
        .ph3-tcell {
          position: relative;
          padding: 0 18px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }
        .ph3-tcell .node {
          position: absolute;
          top: -56px;
          left: calc(50% - 28px);
          width: 56px;
          height: 56px;
          border-radius: 50%;
          background: #FAFAF8;
          border: 2px solid #B38B6D;
          display: grid;
          place-items: center;
          color: #B38B6D;
          z-index: 1;
          transition: background 0.3s, color 0.3s, border-color 0.3s;
        }
        .ph3-tcell .node svg { width: 22px; height: 22px; }
        .ph3-tcell .node .step {
          position: absolute;
          top: -10px;
          right: -10px;
          width: 22px;
          height: 22px;
          border-radius: 50%;
          background: #2D3748;
          color: #FAFAF8;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 0;
          display: grid;
          place-items: center;
        }
        .ph3-tcell:hover .node {
          background: #B38B6D;
          color: #FAFAF8;
          border-color: #B38B6D;
        }
        .ph3-tcell .d {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.26em;
          text-transform: uppercase;
          color: #B38B6D;
          margin-bottom: 8px;
          text-align: center;
          align-self: center;
        }
        .ph3-tcell .t {
          font-size: 18px;
          font-weight: 700;
          color: #2D3748;
          letter-spacing: -0.01em;
          line-height: 1.25;
          margin-bottom: 10px;
          text-align: center;
          align-self: center;
        }
        .ph3-tcell .x {
          font-size: 13px;
          line-height: 1.55;
          color: #4A5568;
          margin: 0;
          text-align: center;
        }

        /* === Channel mix — 4-column live-channel grid === */
        .ph3-channels {
          margin: clamp(72px, 9vw, 128px) 0 0;
        }
        .ph3-channels h2 {
          font-size: clamp(28px, 2.8vw, 40px);
          font-weight: 700;
          line-height: 1.1;
          letter-spacing: -0.025em;
          color: #2D3748;
          margin: 0 0 8px;
          max-width: 22ch;
        }
        .ph3-channels .lede {
          font-size: 15px;
          line-height: 1.55;
          color: #4A5568;
          max-width: 56ch;
          margin: 0 0 32px;
        }
        .ph3-cgrid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: clamp(14px, 1.6vw, 20px);
        }
        .ph3-ccell {
          background: #FFFFFF;
          border: 1px solid rgba(45, 55, 72, 0.12);
          border-radius: 16px;
          padding: 26px 24px 28px;
          position: relative;
          overflow: hidden;
          transition: border-color 0.25s ease, transform 0.25s ease, box-shadow 0.25s ease;
        }
        .ph3-ccell::before {
          content: "";
          position: absolute;
          inset: 0 0 auto 0;
          height: 3px;
          background: linear-gradient(90deg, #576DB5, #8FBC8F, #B38B6D);
          opacity: 0;
          transition: opacity 0.25s ease;
        }
        .ph3-ccell:hover {
          border-color: rgba(45, 55, 72, 0.30);
          transform: translateY(-4px);
          box-shadow: 0 22px 44px -28px rgba(26, 36, 56, 0.28);
        }
        .ph3-ccell:hover::before { opacity: 1; }
        @media (max-width: 1080px) {
          .ph3-cgrid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 560px) {
          .ph3-cgrid { grid-template-columns: 1fr; }
        }
        .ph3-ccell .badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 10.5px;
          font-weight: 700;
          letter-spacing: 0.26em;
          text-transform: uppercase;
          color: #B38B6D;
          margin-bottom: 18px;
        }
        .ph3-ccell .badge::before {
          content: "";
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #8FBC8F;
          box-shadow: 0 0 0 3px rgba(143, 188, 143, 0.18);
        }
        .ph3-ccell .name {
          font-size: 19px;
          font-weight: 800;
          color: #2D3748;
          letter-spacing: -0.015em;
          margin-bottom: 10px;
        }
        .ph3-ccell .desc {
          font-size: 13.5px;
          line-height: 1.55;
          color: #4A5568;
          margin: 0 0 18px;
        }
        .ph3-ccell .metric {
          padding-top: 16px;
          border-top: 1px dashed rgba(45, 55, 72, 0.18);
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: #576DB5;
        }

        /* === Day-30 hand-off deliverables — visual card grid === */
        .ph3-handoff {
          margin: clamp(72px, 9vw, 128px) 0 0;
          padding-top: clamp(32px, 4vw, 56px);
          border-top: 2px solid #2D3748;
        }
        .ph3-handoff .head {
          display: grid;
          grid-template-columns: 5fr 7fr;
          gap: clamp(40px, 5vw, 80px);
          margin-bottom: clamp(40px, 5vw, 56px);
          align-items: end;
        }
        .ph3-handoff .head h2 {
          font-size: clamp(28px, 2.8vw, 40px);
          font-weight: 700;
          line-height: 1.1;
          letter-spacing: -0.025em;
          color: #2D3748;
          margin: 0;
        }
        .ph3-handoff .head p {
          font-size: 15px;
          line-height: 1.6;
          color: #4A5568;
          margin: 0;
        }
        .ph3-handoff ul {
          list-style: none;
          margin: 0;
          padding: 0;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: clamp(14px, 1.6vw, 20px);
          background: transparent;
          border: 0;
        }
        .ph3-handoff li {
          position: relative;
          display: flex;
          flex-direction: column;
          gap: 14px;
          padding: 26px 24px 28px;
          background: #FFFFFF;
          border: 1px solid rgba(45, 55, 72, 0.12);
          border-radius: 16px;
          overflow: hidden;
          transition:
            border-color 0.25s ease,
            transform 0.25s ease,
            box-shadow 0.25s ease,
            background 0.25s ease;
        }
        .ph3-handoff li::before {
          content: "";
          position: absolute;
          inset: 0 0 auto 0;
          height: 3px;
          background: linear-gradient(90deg, #576DB5, #8FBC8F, #B38B6D);
          opacity: 0;
          transition: opacity 0.25s ease;
        }
        .ph3-handoff li:hover {
          border-color: rgba(45, 55, 72, 0.30);
          transform: translateY(-4px);
          box-shadow: 0 22px 44px -28px rgba(26, 36, 56, 0.28);
        }
        .ph3-handoff li:hover::before { opacity: 1; }
        .ph3-handoff li .badge {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .ph3-handoff li .icon {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          background: rgba(87, 109, 181, 0.10);
          color: #576DB5;
          display: grid;
          place-items: center;
          transition: background 0.25s ease, color 0.25s ease, transform 0.25s ease;
        }
        .ph3-handoff li:hover .icon {
          background: #576DB5;
          color: #FFFFFF;
          transform: scale(1.06);
        }
        .ph3-handoff li .icon svg { width: 22px; height: 22px; }
        .ph3-handoff li .ix {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.24em;
          color: #B38B6D;
        }
        .ph3-handoff li strong {
          font-size: 17px;
          font-weight: 700;
          color: #2D3748;
          letter-spacing: -0.012em;
          line-height: 1.25;
        }
        .ph3-handoff li .desc {
          font-size: 13px;
          line-height: 1.55;
          color: #4A5568;
          margin: 0;
        }
        .ph3-handoff li .tag {
          margin-top: auto;
          padding-top: 14px;
          border-top: 1px dashed rgba(45, 55, 72, 0.18);
          font-size: 10.5px;
          font-weight: 700;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #8FBC8F;
          display: inline-flex;
          align-items: center;
          gap: 8px;
        }
        .ph3-handoff li .tag::before {
          content: "";
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #8FBC8F;
        }

        .ph3-end {
          margin: clamp(72px, 9vw, 120px) 0 0;
          padding: 32px 0;
          border-top: 2px solid #2D3748;
          display: grid;
          grid-template-columns: repeat(12, 1fr);
          gap: 24px;
          align-items: end;
        }
        .ph3-end .a {
          grid-column: 1 / span 5;
          font-size: clamp(22px, 2vw, 30px);
          font-weight: 700;
          letter-spacing: -0.018em;
          color: #2D3748;
        }
        .ph3-end .b {
          grid-column: 9 / span 4;
          justify-self: end;
          text-align: right;
        }
        .ph3-end .b .l {
          display: block;
          font-size: 11px;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          color: #718096;
          margin-bottom: 8px;
          font-weight: 700;
        }
        .ph3-end .b .t {
          font-size: clamp(18px, 1.6vw, 22px);
          font-weight: 700;
          color: #B38B6D;
          letter-spacing: -0.015em;
          border-bottom: 1px solid transparent;
          transition: border-color 0.2s;
        }
        .ph3-end .b:hover .t { border-color: #B38B6D; }

        @media (max-width: 1024px) {
          .ph3-body-main { column-count: 1; }
        }
        @media (max-width: 900px) {
          .ph3-body { grid-template-columns: 1fr; }
          .ph3-body-aside { position: static; grid-column: 1; padding-right: 0; }
          .ph3-body-main { grid-column: 1; }
          .ph3-stats { grid-template-columns: repeat(2, 1fr); }
          .ph3-stat:nth-child(2n) { border-right: none; }
          .ph3-stat { border-bottom: 1px solid rgba(45,55,72,0.18); }
          .ph3-tline { grid-template-columns: 1fr 1fr; gap: 32px 0; padding-top: 0; }
          .ph3-tline::before { display: none; }
          .ph3-tcell { padding: 56px 18px 18px; }
          .ph3-handoff .head { grid-template-columns: 1fr; gap: 16px; align-items: start; }
          .ph3-handoff ul { grid-template-columns: 1fr 1fr; }
          .ph3-end { grid-template-columns: 1fr; }
          .ph3-end .a, .ph3-end .b { grid-column: 1; justify-self: start; text-align: left; }
        }
        @media (max-width: 640px) {
          .ph3-tline { grid-template-columns: 1fr; }
          .ph3-handoff ul { grid-template-columns: 1fr; }
        }
      `}</style>

      <div className="ph3-wrap">
        <Link to="/#methodology" className="ph3-crumb">
          ← Back to Methodology
        </Link>

        <header className="ph3-masthead">
          <span className="a">/ 03</span>
          <span className="b">Phase Three — Launch &amp; Accelerate</span>
          <span className="c">Day 01 — Day 30</span>
          <span className="d">Live Ops</span>
        </header>

        <h1 className="ph3-display">
          Thirty days <em>from</em> kickoff <em>to</em> compounding pipeline.
        </h1>

        <section className="ph3-body">
          <aside className="ph3-body-aside" aria-label="Run sheet">
            <div className="pair">
              <span className="k">Duration</span>
              <span className="v">Day 1 — Day 30</span>
            </div>
            <div className="pair">
              <span className="k">Surface</span>
              <span className="v">Google · Meta · Owned</span>
            </div>
            <div className="pair">
              <span className="k">Cadence</span>
              <span className="v">Weekly optimization</span>
            </div>
            <div className="pair">
              <span className="k">Signal</span>
              <span className="v">Booked-patient cost</span>
            </div>
          </aside>

          <div className="ph3-body-main">
            <p>
              The launch is the quietest moment of the whole engagement.
              Strategy is set. Infrastructure is wired. Tracking is live. What
              changes is the volume — search visibility flips on, paid media
              moves into the highest-converting service lines, and your front
              desk starts taking calls that came from a known channel.
            </p>
            <p>
              From day one, every booked patient has an attribution path.
              Every campaign has a cost-per-booking. Every week, we move budget
              away from the channels that aren&rsquo;t producing and toward
              the ones that are.
            </p>
            <p>
              By day fourteen, the editorial calendar is publishing on
              schedule. By day twenty-one, the first cohort of paid media
              creative has been replaced with what the data preferred. By day
              thirty, the inquiry volume curve has bent — and the front-desk
              workload has shifted from cold calls to qualified bookings.
            </p>
            <p>
              The deliverable at the end of Phase 3 isn&rsquo;t a deck. It is
              a working system, owned by your clinic, with a documented
              playbook for every channel that&rsquo;s producing patients.
            </p>
          </div>
        </section>

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

              {/* milestone dots — sit on the curve */}
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
                First paid-media cohort replaced with what the data preferred —
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

        <section className="ph3-stats" aria-label="Outcomes at day 30">
          <div className="ph3-stat">
            <div className="num">30<em>d</em></div>
            <div className="lbl">Launch window</div>
          </div>
          <div className="ph3-stat">
            <div className="num">04</div>
            <div className="lbl">Live channels</div>
          </div>
          <div className="ph3-stat">
            <div className="num">100<em>%</em></div>
            <div className="lbl">Calls attributed</div>
          </div>
          <div className="ph3-stat">
            <div className="num">01</div>
            <div className="lbl">Source-of-truth dashboard</div>
          </div>
        </section>

        <section className="ph3-timeline" aria-labelledby="ph3-timeline-title">
          <h2 id="ph3-timeline-title">A run sheet, not a roadmap.</h2>
          <div className="ph3-tline">
            <div className="ph3-tcell">
              <div className="node" aria-hidden="true">
                <span className="step">01</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M13 2 L4 14 H12 L11 22 L20 10 H12 Z" />
                </svg>
              </div>
              <div className="d">Day 01 — 07</div>
              <div className="t">Switch on.</div>
              <p className="x">
                Search optimizations push live, paid media spends turn on with
                attribution baked in, dashboards begin filling.
              </p>
            </div>
            <div className="ph3-tcell">
              <div className="node" aria-hidden="true">
                <span className="step">02</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 3v18h18" />
                  <path d="M7 14l4-4 4 3 5-6" />
                </svg>
              </div>
              <div className="d">Day 08 — 14</div>
              <div className="t">First read.</div>
              <p className="x">
                Channel-level baselines locked. First creative rotation.
                Editorial calendar begins publishing on cadence.
              </p>
            </div>
            <div className="ph3-tcell">
              <div className="node" aria-hidden="true">
                <span className="step">03</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
                  <polyline points="16 7 22 7 22 13" />
                </svg>
              </div>
              <div className="d">Day 15 — 21</div>
              <div className="t">Bend the curve.</div>
              <p className="x">
                Budget reallocation toward the highest cost-per-booking
                channels. Front desk reports a different mix of inbound.
              </p>
            </div>
            <div className="ph3-tcell">
              <div className="node" aria-hidden="true">
                <span className="step">04</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                  <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                  <line x1="12" y1="22.08" x2="12" y2="12" />
                </svg>
              </div>
              <div className="d">Day 22 — 30</div>
              <div className="t">Hand-off.</div>
              <p className="x">
                Documented playbook delivered. Dashboard becomes the weekly
                operating cadence. Phase 4 — Scale — begins.
              </p>
            </div>
          </div>
        </section>

        <section className="ph3-channels" aria-labelledby="ph3-channels-title">
          <h2 id="ph3-channels-title">The channel mix that turns on at launch.</h2>
          <p className="lede">
            Four channels go live on day one. Each one is wired to the same
            attribution dashboard, so every booked patient maps back to the
            source that earned them.
          </p>
          <div className="ph3-cgrid">
            <div className="ph3-ccell">
              <div className="badge">Live · Search</div>
              <div className="name">Google Organic &amp; Local</div>
              <p className="desc">
                SEO push, Google Business Profile optimization, and review
                velocity working together to own the local pack.
              </p>
              <div className="metric">Tracked: Calls &amp; directions</div>
            </div>
            <div className="ph3-ccell">
              <div className="badge">Live · Paid</div>
              <div className="name">Google &amp; Meta Ads</div>
              <p className="desc">
                High-intent search plus geo-targeted social, each with its own
                cost-per-booking ceiling that we defend week over week.
              </p>
              <div className="metric">Tracked: Cost / booked patient</div>
            </div>
            <div className="ph3-ccell">
              <div className="badge">Live · Owned</div>
              <div className="name">Email &amp; Lifecycle</div>
              <p className="desc">
                Re-engagement sequences for past patients and new-lead drips
                with appointment reminders that recover no-shows.
              </p>
              <div className="metric">Tracked: Reactivation rate</div>
            </div>
            <div className="ph3-ccell">
              <div className="badge">Live · Site</div>
              <div className="name">Editorial &amp; Landing</div>
              <p className="desc">
                Service-line pages and weekly editorial keep your site the
                authoritative answer for the questions your patients ask.
              </p>
              <div className="metric">Tracked: Conversion rate</div>
            </div>
          </div>
        </section>

        <section className="ph3-handoff" aria-labelledby="ph3-handoff-title">
          <div className="head">
            <h2 id="ph3-handoff-title">What you receive on day 30.</h2>
            <p>
              A working system you own &mdash; not slides, not a deck. Each
              deliverable below ships before Phase 4 begins.
            </p>
          </div>
          <ul>
            <li>
              <div className="badge">
                <span className="icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                    <line x1="3" y1="9" x2="21" y2="9" />
                    <line x1="9" y1="21" x2="9" y2="9" />
                  </svg>
                </span>
                <span className="ix">/ 01</span>
              </div>
              <strong>Operating dashboard</strong>
              <p className="desc">
                Live source-of-truth with channel-level cost-per-booking,
                call attribution, and weekly trend lines.
              </p>
              <span className="tag">Included</span>
            </li>
            <li>
              <div className="badge">
                <span className="icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                  </svg>
                </span>
                <span className="ix">/ 02</span>
              </div>
              <strong>Channel playbook</strong>
              <p className="desc">
                Documented setup, audiences, creative angles, and budget
                rationale for every channel that&rsquo;s producing.
              </p>
              <span className="tag">Included</span>
            </li>
            <li>
              <div className="badge">
                <span className="icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="4" width="18" height="18" rx="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                </span>
                <span className="ix">/ 03</span>
              </div>
              <strong>Editorial calendar</strong>
              <p className="desc">
                Ninety-day publishing schedule with topics, briefs, and the
                SEO targets each piece is built to win.
              </p>
              <span className="tag">Included</span>
            </li>
            <li>
              <div className="badge">
                <span className="icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 14v-3a9 9 0 0 1 18 0v3" />
                    <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3z" />
                    <path d="M3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
                  </svg>
                </span>
                <span className="ix">/ 04</span>
              </div>
              <strong>Front-desk script kit</strong>
              <p className="desc">
                Call-handling scripts, intake forms, and qualifying
                questions tuned to the new inbound mix.
              </p>
              <span className="tag">Included</span>
            </li>
            <li>
              <div className="badge">
                <span className="icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                </span>
                <span className="ix">/ 05</span>
              </div>
              <strong>Weekly review cadence</strong>
              <p className="desc">
                Recurring 30-minute review with agenda, KPI thresholds, and
                decision tree your team will run on going forward.
              </p>
              <span className="tag">Included</span>
            </li>
            <li>
              <div className="badge">
                <span className="icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 11H5a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7a2 2 0 0 0-2-2h-4" />
                    <polyline points="12 11 12 3" />
                    <polyline points="9 6 12 3 15 6" />
                  </svg>
                </span>
                <span className="ix">/ 06</span>
              </div>
              <strong>Ongoing Phase 4 plan</strong>
              <p className="desc">
                Scale-phase budget, channel mix, and quarterly milestones
                aligned to your booked-patient growth target.
              </p>
              <span className="tag">Included</span>
            </li>
          </ul>
        </section>

        <footer className="ph3-end">
          <div className="a">
            Phase 03 ends with a working system, not a slide deck.
          </div>
          <Link to="/contact" className="b">
            <span className="l">Ready to begin?</span>
            <span className="t">Book a discovery call →</span>
          </Link>
        </footer>
      </div>
    </main>
  );
};

export default Phase3;
