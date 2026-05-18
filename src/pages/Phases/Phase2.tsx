import { Link } from 'react-router-dom';

/**
 * Phase 2 — Swiss layout #2: modular block grid with light accent cards,
 * hover lifts, integration stack, and parallel-sprint Gantt timeline.
 */
const Phase2 = () => {
  return (
    <main className="ph2-root">
      <style>{`
        .ph2-root {
          background: #F1F2F4;
          color: #1A1F2C;
          font-family: 'Plus Jakarta Sans', system-ui, sans-serif;
          padding: 120px 0 0;
          min-height: 100vh;
        }
        .ph2-wrap {
          max-width: 1320px;
          margin: 0 auto;
          padding: 0 clamp(20px, 4vw, 48px);
        }
        .ph2-crumb {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          color: #718096;
          transition: color 0.2s;
        }
        .ph2-crumb:hover { color: #2D3748; }

        .ph2-hero {
          display: grid;
          grid-template-columns: 90px 1fr;
          gap: 32px;
          margin-top: 40px;
          padding-top: 24px;
          border-top: 3px solid #2D3748;
        }
        .ph2-rail {
          position: relative;
          border-right: 1px solid rgba(45, 55, 72, 0.18);
          padding: 12px 24px 32px 0;
          min-height: 280px;
        }
        .ph2-rail-vert {
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 0.36em;
          text-transform: uppercase;
          color: #B38B6D;
          writing-mode: vertical-rl;
          transform: rotate(180deg);
          position: absolute;
          left: 6px;
          top: 12px;
        }
        .ph2-rail-num {
          font-size: 80px;
          font-weight: 800;
          letter-spacing: -0.04em;
          line-height: 0.9;
          color: #2D3748;
          position: absolute;
          bottom: 24px;
          left: 0;
        }
        .ph2-hero-content {
          display: grid;
          grid-template-columns: repeat(12, 1fr);
          gap: 24px;
        }
        .ph2-eyebrow {
          grid-column: 1 / -1;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.32em;
          text-transform: uppercase;
          color: #718096;
        }
        .ph2-h1 {
          grid-column: 1 / span 8;
          font-size: clamp(40px, 5vw, 72px);
          font-weight: 700;
          line-height: 1.02;
          letter-spacing: -0.025em;
          color: #2D3748;
          margin: 12px 0 0;
        }
        .ph2-h1 em {
          font-style: normal;
          background: linear-gradient(180deg, transparent 64%, rgba(179,139,109,0.35) 64%);
          padding: 0 4px;
        }
        .ph2-lede {
          grid-column: 1 / span 7;
          font-size: clamp(15px, 1.2vw, 17px);
          line-height: 1.65;
          color: #4A5568;
          margin: 24px 0 0;
        }
        .ph2-stat {
          grid-column: 10 / span 3;
          align-self: end;
          padding-top: 12px;
          border-top: 1px solid #2D3748;
        }
        .ph2-stat-big {
          font-size: clamp(40px, 4vw, 56px);
          font-weight: 800;
          letter-spacing: -0.03em;
          color: #2D3748;
          line-height: 1;
        }
        .ph2-stat-cap {
          margin-top: 8px;
          font-size: 11px;
          letter-spacing: 0.24em;
          text-transform: uppercase;
          color: #718096;
          font-weight: 700;
        }

        .ph2-section-bar {
          margin: clamp(64px, 8vw, 112px) 0 0;
          padding: 18px 0;
          border-top: 1px solid #2D3748;
          border-bottom: 1px solid #2D3748;
          display: grid;
          grid-template-columns: 90px 1fr auto;
          gap: 32px;
          align-items: center;
        }
        .ph2-section-bar .lbl {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.32em;
          text-transform: uppercase;
          color: #B38B6D;
        }
        .ph2-section-bar .title {
          font-size: clamp(20px, 1.6vw, 24px);
          font-weight: 700;
          color: #2D3748;
          letter-spacing: -0.015em;
        }
        .ph2-section-bar .meta {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.24em;
          text-transform: uppercase;
          color: #718096;
        }

        .ph2-modules {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          margin: 0;
          padding: 0;
        }
        .ph2-mod {
          --accent: #B38B6D;
          background: #FAFAF8;
          border-right: 1px solid rgba(45, 55, 72, 0.10);
          border-bottom: 1px solid rgba(45, 55, 72, 0.10);
          padding: 36px 28px 40px;
          min-height: 340px;
          display: flex;
          flex-direction: column;
          position: relative;
          overflow: hidden;
          transition:
            transform 0.35s cubic-bezier(0.2, 0.7, 0.2, 1),
            background 0.35s ease,
            box-shadow 0.35s ease;
          cursor: default;
        }
        .ph2-mod:nth-child(4n) { border-right: none; }
        .ph2-mod.accent {
          background: #F4EDE2;
          --accent: #B38B6D;
        }
        .ph2-mod.sage {
          background: #ECF0E8;
          --accent: #5C8A5C;
        }
        .ph2-mod::before {
          content: "";
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 3px;
          background: var(--accent);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.4s cubic-bezier(0.2, 0.7, 0.2, 1);
        }
        .ph2-mod::after {
          content: "→";
          position: absolute;
          right: 24px;
          bottom: 22px;
          font-size: 18px;
          font-weight: 700;
          color: var(--accent);
          opacity: 0;
          transform: translateX(-8px);
          transition: opacity 0.3s ease, transform 0.3s ease;
        }
        .ph2-mod:hover {
          transform: translateY(-6px);
          background: #fff;
          box-shadow: 0 28px 48px -28px rgba(45, 55, 72, 0.25);
        }
        .ph2-mod.accent:hover { background: #FBF5EC; }
        .ph2-mod.sage:hover { background: #F4F8F1; }
        .ph2-mod:hover::before { transform: scaleX(1); }
        .ph2-mod:hover::after { opacity: 1; transform: translateX(0); }

        .ph2-mod-num {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.32em;
          text-transform: uppercase;
          color: var(--accent);
        }
        .ph2-mod-title {
          margin: 20px 0 16px;
          font-size: 20px;
          font-weight: 700;
          line-height: 1.2;
          letter-spacing: -0.012em;
          color: #2D3748;
        }
        .ph2-mod-text {
          font-size: 14px;
          line-height: 1.6;
          color: #4A5568;
          margin: 0;
        }
        .ph2-mod-foot {
          margin-top: auto;
          padding-top: 20px;
          font-size: 10.5px;
          font-weight: 700;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          color: #718096;
        }

        /* ============ Integration stack ============ */
        .ph2-stack {
          margin: clamp(72px, 9vw, 112px) 0 0;
          padding-top: 28px;
          border-top: 1px solid #2D3748;
        }
        .ph2-stack-head {
          display: grid;
          grid-template-columns: 90px 1fr auto;
          gap: 32px;
          padding-bottom: 28px;
          align-items: end;
        }
        .ph2-stack-head .lbl {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.32em;
          text-transform: uppercase;
          color: #B38B6D;
        }
        .ph2-stack-head h2 {
          font-size: clamp(26px, 2.4vw, 36px);
          font-weight: 700;
          line-height: 1.15;
          letter-spacing: -0.02em;
          color: #2D3748;
          margin: 0;
          max-width: 24ch;
        }
        .ph2-stack-head .count {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          color: #718096;
        }
        .ph2-stack-grid {
          display: grid;
          grid-template-columns: 220px 1fr;
          border-top: 1px solid rgba(45, 55, 72, 0.18);
        }
        .ph2-stack-row {
          display: contents;
        }
        .ph2-stack-cat {
          padding: 28px 24px;
          border-bottom: 1px solid rgba(45, 55, 72, 0.10);
          background: #FAFAF8;
        }
        .ph2-stack-cat .n {
          font-size: 10.5px;
          font-weight: 700;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          color: #B38B6D;
          margin-bottom: 8px;
        }
        .ph2-stack-cat .t {
          font-size: 16px;
          font-weight: 700;
          color: #2D3748;
          letter-spacing: -0.01em;
          line-height: 1.25;
          margin-bottom: 6px;
        }
        .ph2-stack-cat .d {
          font-size: 12px;
          color: #4A5568;
          line-height: 1.5;
          margin: 0;
        }
        .ph2-stack-tools {
          padding: 22px 22px 22px;
          border-bottom: 1px solid rgba(45, 55, 72, 0.10);
          background: #fff;
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          align-content: center;
        }
        .ph2-tool {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 10px 16px;
          border: 1px solid rgba(45, 55, 72, 0.14);
          border-radius: 8px;
          background: #FAFAF8;
          font-size: 13px;
          font-weight: 700;
          color: #2D3748;
          letter-spacing: -0.005em;
          transition:
            transform 0.25s ease,
            border-color 0.25s ease,
            background 0.25s ease,
            color 0.25s ease;
          cursor: default;
        }
        .ph2-tool .dot {
          width: 8px; height: 8px;
          border-radius: 50%;
          background: var(--td, #B38B6D);
        }
        .ph2-tool:hover {
          transform: translateY(-3px);
          border-color: var(--td, #B38B6D);
          background: #fff;
        }

        /* ============ Parallel sprint gantt ============ */
        .ph2-gantt {
          margin: clamp(72px, 9vw, 112px) 0 0;
          padding: 28px 0 0;
          border-top: 1px solid #2D3748;
        }
        .ph2-gantt-head {
          display: grid;
          grid-template-columns: 90px 1fr auto;
          gap: 32px;
          padding-bottom: 28px;
          align-items: end;
        }
        .ph2-gantt-head .lbl {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.32em;
          text-transform: uppercase;
          color: #B38B6D;
        }
        .ph2-gantt-head h2 {
          font-size: clamp(26px, 2.4vw, 36px);
          font-weight: 700;
          line-height: 1.15;
          letter-spacing: -0.02em;
          color: #2D3748;
          margin: 0;
          max-width: 24ch;
        }
        .ph2-gantt-head .leg {
          display: flex;
          gap: 16px;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: #2D3748;
        }
        .ph2-gantt-head .leg span {
          display: inline-flex; align-items: center; gap: 8px;
        }
        .ph2-gantt-head .leg i {
          width: 14px; height: 6px; border-radius: 2px;
          display: inline-block;
        }
        .ph2-gantt-head .leg .strategy { background: #B38B6D; }
        .ph2-gantt-head .leg .build { background: #5C8A5C; }

        .ph2-gantt-board {
          background: #fff;
          border: 1px solid rgba(45, 55, 72, 0.12);
          border-radius: 14px;
          padding: 28px clamp(20px, 3vw, 40px) 32px;
          overflow: hidden;
        }
        .ph2-gantt-days {
          display: grid;
          grid-template-columns: 140px repeat(14, 1fr);
          align-items: center;
          gap: 0;
          padding-bottom: 12px;
          border-bottom: 1px solid rgba(45, 55, 72, 0.10);
        }
        .ph2-gantt-days .d-lbl {
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: #718096;
        }
        .ph2-gantt-days .d {
          font-size: 11px;
          font-weight: 700;
          color: #2D3748;
          text-align: center;
          padding: 4px 0;
          border-left: 1px dashed rgba(45, 55, 72, 0.08);
        }
        .ph2-gantt-days .d:first-of-type { border-left-color: transparent; }
        .ph2-gantt-days .d.week-break { border-left-color: rgba(45, 55, 72, 0.25); }

        .ph2-gantt-track {
          display: grid;
          grid-template-columns: 140px 1fr;
          gap: 0;
          padding: 20px 0;
          border-bottom: 1px solid rgba(45, 55, 72, 0.08);
        }
        .ph2-gantt-track:last-child { border-bottom: none; }
        .ph2-gantt-track .track-name {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.24em;
          text-transform: uppercase;
          color: #2D3748;
          padding-top: 4px;
        }
        .ph2-gantt-track .track-name em {
          display: block;
          font-style: normal;
          font-size: 13px;
          font-weight: 700;
          color: #2D3748;
          margin-top: 2px;
          letter-spacing: -0.01em;
          text-transform: none;
        }
        .ph2-gantt-bars {
          position: relative;
          height: auto;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .ph2-gantt-bar {
          position: relative;
          height: 30px;
          display: flex;
          align-items: center;
          padding: 0 12px;
          border-radius: 6px;
          font-size: 12px;
          font-weight: 700;
          color: #fff;
          letter-spacing: -0.005em;
          transition: transform 0.25s ease, filter 0.25s ease;
          cursor: default;
        }
        .ph2-gantt-bar.strategy { background: #B38B6D; }
        .ph2-gantt-bar.build { background: #5C8A5C; }
        .ph2-gantt-bar:hover {
          transform: translateY(-2px);
          filter: brightness(1.05);
        }
        .ph2-gantt-bar .d-meta {
          margin-left: auto;
          font-size: 10.5px;
          opacity: 0.85;
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }

        /* ============ Quote strip ============ */
        .ph2-strip {
          margin: clamp(72px, 9vw, 120px) 0 0;
          background: #F4EDE2;
          color: #2D3748;
          padding: 56px 0;
          border-top: 1px solid rgba(45, 55, 72, 0.10);
        }
        .ph2-strip-wrap {
          max-width: 1320px;
          margin: 0 auto;
          padding: 0 clamp(20px, 4vw, 48px);
          display: grid;
          grid-template-columns: repeat(12, 1fr);
          gap: 24px;
          align-items: center;
        }
        .ph2-strip-lbl {
          grid-column: 1 / span 3;
          font-size: 11px;
          letter-spacing: 0.32em;
          text-transform: uppercase;
          color: #B38B6D;
          font-weight: 700;
        }
        .ph2-strip-q {
          grid-column: 4 / span 6;
          font-size: clamp(22px, 2.2vw, 32px);
          font-weight: 600;
          line-height: 1.35;
          letter-spacing: -0.015em;
          margin: 0;
          color: #2D3748;
        }
        .ph2-strip-next {
          grid-column: 10 / span 3;
          justify-self: end;
          text-align: right;
        }
        .ph2-strip-next .l {
          display: block;
          font-size: 11px;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          color: #B38B6D;
          font-weight: 700;
          margin-bottom: 8px;
        }
        .ph2-strip-next .t {
          font-size: clamp(18px, 1.5vw, 22px);
          font-weight: 700;
          color: #2D3748;
          letter-spacing: -0.015em;
          border-bottom: 1px solid transparent;
          transition: border-color 0.2s, color 0.2s;
        }
        .ph2-strip-next:hover .t { border-color: #B38B6D; color: #B38B6D; }

        /* ============ Responsive ============ */
        @media (max-width: 1100px) {
          .ph2-modules { grid-template-columns: repeat(2, 1fr); }
          .ph2-mod:nth-child(4n) { border-right: 1px solid rgba(45,55,72,0.10); }
          .ph2-mod:nth-child(2n) { border-right: none; }
          .ph2-gantt-days { grid-template-columns: 110px repeat(14, 1fr); }
          .ph2-gantt-days .d { font-size: 9.5px; }
          .ph2-gantt-track { grid-template-columns: 110px 1fr; }
        }
        @media (max-width: 820px) {
          .ph2-hero { grid-template-columns: 1fr; }
          .ph2-rail { border-right: none; border-bottom: 1px solid rgba(45,55,72,0.18); min-height: auto; padding: 0 0 24px; }
          .ph2-rail-vert { position: static; writing-mode: horizontal-tb; transform: none; }
          .ph2-rail-num { position: static; margin-top: 12px; font-size: 64px; }
          .ph2-hero-content { grid-template-columns: 1fr; }
          .ph2-h1, .ph2-lede, .ph2-stat { grid-column: 1; }
          .ph2-modules { grid-template-columns: 1fr; }
          .ph2-mod { border-right: none; }
          .ph2-strip-wrap { grid-template-columns: 1fr; }
          .ph2-strip-lbl, .ph2-strip-q, .ph2-strip-next { grid-column: 1; justify-self: start; text-align: left; }
          .ph2-stack-head, .ph2-gantt-head { grid-template-columns: 1fr; }
          .ph2-stack-grid { grid-template-columns: 1fr; }
          .ph2-stack-cat { border-right: none; border-bottom: 1px solid rgba(45,55,72,0.18); }
          .ph2-stack-tools { padding: 18px; }
          .ph2-gantt-board { padding: 20px; }
          .ph2-gantt-days, .ph2-gantt-track { grid-template-columns: 1fr; }
          .ph2-gantt-days .d { display: none; }
          .ph2-gantt-bar { font-size: 11.5px; }
        }
      `}</style>

      <div className="ph2-wrap">
        <Link to="/#methodology" className="ph2-crumb">
          ← Back to Methodology
        </Link>

        <section className="ph2-hero">
          <div className="ph2-rail">
            <span className="ph2-rail-vert">Phase 02</span>
            <span className="ph2-rail-num">02</span>
          </div>
          <div className="ph2-hero-content">
            <span className="ph2-eyebrow">/ Build — Week 03 — 04</span>
            <h1 className="ph2-h1">
              Strategy &amp; <em>Infrastructure</em>&nbsp;Build.
            </h1>
            <p className="ph2-lede">
              Two parallel tracks. Strategy maps the route — service-specific
              keywords, competitor wedges, and the patient journey for each
              persona. The build track wires the infrastructure underneath so
              every lead becomes a tracked, attributable event.
            </p>
            <div className="ph2-stat">
              <div className="ph2-stat-big">14d</div>
              <div className="ph2-stat-cap">Avg time to ship</div>
            </div>
          </div>
        </section>

        <div className="ph2-section-bar">
          <span className="lbl">/ 02</span>
          <span className="title">Eight modules deployed in parallel.</span>
          <span className="meta">Track A · Strategy &nbsp;/&nbsp; Track B · Build</span>
        </div>

        <div className="ph2-modules">
          <article className="ph2-mod">
            <span className="ph2-mod-num">A · 01</span>
            <h3 className="ph2-mod-title">Service keyword map</h3>
            <p className="ph2-mod-text">
              Demand and difficulty scored per service line, mapped to the
              page that will own it.
            </p>
            <div className="ph2-mod-foot">Strategy</div>
          </article>
          <article className="ph2-mod accent">
            <span className="ph2-mod-num">B · 01</span>
            <h3 className="ph2-mod-title">AI chatbot &amp; intake</h3>
            <p className="ph2-mod-text">
              Conversational triage on the site, with handoff to the front
              desk and a structured record at the end.
            </p>
            <div className="ph2-mod-foot">Build</div>
          </article>
          <article className="ph2-mod">
            <span className="ph2-mod-num">A · 02</span>
            <h3 className="ph2-mod-title">Competitive positioning</h3>
            <p className="ph2-mod-text">
              The single sentence that separates your clinic from every other
              clinic on the SERP — and the proof to back it.
            </p>
            <div className="ph2-mod-foot">Strategy</div>
          </article>
          <article className="ph2-mod sage">
            <span className="ph2-mod-num">B · 02</span>
            <h3 className="ph2-mod-title">Call tracking</h3>
            <p className="ph2-mod-text">
              Dynamic numbers per channel. Every inbound call attributed to
              the campaign that produced it.
            </p>
            <div className="ph2-mod-foot">Build</div>
          </article>

          <article className="ph2-mod">
            <span className="ph2-mod-num">A · 03</span>
            <h3 className="ph2-mod-title">Patient journey</h3>
            <p className="ph2-mod-text">
              Touchpoints from first impression to retained patient — each one
              owned by a specific channel and metric.
            </p>
            <div className="ph2-mod-foot">Strategy</div>
          </article>
          <article className="ph2-mod">
            <span className="ph2-mod-num">B · 03</span>
            <h3 className="ph2-mod-title">Digital intake forms</h3>
            <p className="ph2-mod-text">
              HIPAA-aware forms wired to your EMR / CRM, replacing whatever
              your front-desk team is rekeying today.
            </p>
            <div className="ph2-mod-foot">Build</div>
          </article>
          <article className="ph2-mod sage">
            <span className="ph2-mod-num">A · 04</span>
            <h3 className="ph2-mod-title">Editorial calendar</h3>
            <p className="ph2-mod-text">
              90 days of healthcare content, sequenced to compound on the
              keyword map and the personas.
            </p>
            <div className="ph2-mod-foot">Strategy</div>
          </article>
          <article className="ph2-mod accent">
            <span className="ph2-mod-num">B · 04</span>
            <h3 className="ph2-mod-title">Analytics dashboard</h3>
            <p className="ph2-mod-text">
              A single board: pipeline, cost per booked patient, channel
              attribution. Updated in real time.
            </p>
            <div className="ph2-mod-foot">Build</div>
          </article>
        </div>

        {/* ============ Integration Stack ============ */}
        <section className="ph2-stack" aria-labelledby="ph2-stack-title">
          <div className="ph2-stack-head">
            <span className="lbl">/ 03</span>
            <h2 id="ph2-stack-title">Eleven tools, one source of truth.</h2>
            <span className="count">5 categories · HIPAA-aware</span>
          </div>

          <div className="ph2-stack-grid">
            <div className="ph2-stack-row">
              <div className="ph2-stack-cat">
                <div className="n">/ A</div>
                <div className="t">Analytics &amp; attribution</div>
                <p className="d">The shared truth every other tool reports into.</p>
              </div>
              <div className="ph2-stack-tools">
                <span className="ph2-tool" style={{ ['--td' as never]: '#5C8A5C' } as React.CSSProperties}><i className="dot" />GA4</span>
                <span className="ph2-tool" style={{ ['--td' as never]: '#5C8A5C' } as React.CSSProperties}><i className="dot" />Google Search Console</span>
                <span className="ph2-tool" style={{ ['--td' as never]: '#5C8A5C' } as React.CSSProperties}><i className="dot" />Looker Studio</span>
              </div>
            </div>

            <div className="ph2-stack-row">
              <div className="ph2-stack-cat">
                <div className="n">/ B</div>
                <div className="t">Conversion &amp; tracking</div>
                <p className="d">Every form, call, and click attributed to its source.</p>
              </div>
              <div className="ph2-stack-tools">
                <span className="ph2-tool" style={{ ['--td' as never]: '#B38B6D' } as React.CSSProperties}><i className="dot" />CallRail</span>
                <span className="ph2-tool" style={{ ['--td' as never]: '#B38B6D' } as React.CSSProperties}><i className="dot" />GTM</span>
                <span className="ph2-tool" style={{ ['--td' as never]: '#B38B6D' } as React.CSSProperties}><i className="dot" />Hotjar</span>
              </div>
            </div>

            <div className="ph2-stack-row">
              <div className="ph2-stack-cat">
                <div className="n">/ C</div>
                <div className="t">Patient comms</div>
                <p className="d">AI triage on the site, two-way SMS into the front desk.</p>
              </div>
              <div className="ph2-stack-tools">
                <span className="ph2-tool" style={{ ['--td' as never]: '#576DB5' } as React.CSSProperties}><i className="dot" />Intercom</span>
                <span className="ph2-tool" style={{ ['--td' as never]: '#576DB5' } as React.CSSProperties}><i className="dot" />Twilio</span>
              </div>
            </div>

            <div className="ph2-stack-row">
              <div className="ph2-stack-cat">
                <div className="n">/ D</div>
                <div className="t">CRM &amp; pipeline</div>
                <p className="d">Where every booked patient lands, scored and tracked.</p>
              </div>
              <div className="ph2-stack-tools">
                <span className="ph2-tool" style={{ ['--td' as never]: '#B38B6D' } as React.CSSProperties}><i className="dot" />HubSpot</span>
                <span className="ph2-tool" style={{ ['--td' as never]: '#B38B6D' } as React.CSSProperties}><i className="dot" />Zapier</span>
              </div>
            </div>

            <div className="ph2-stack-row">
              <div className="ph2-stack-cat">
                <div className="n">/ E</div>
                <div className="t">Search &amp; paid surfaces</div>
                <p className="d">The channels the strategy turns on in Phase 03.</p>
              </div>
              <div className="ph2-stack-tools">
                <span className="ph2-tool" style={{ ['--td' as never]: '#5C8A5C' } as React.CSSProperties}><i className="dot" />Google Ads</span>
                <span className="ph2-tool" style={{ ['--td' as never]: '#5C8A5C' } as React.CSSProperties}><i className="dot" />Meta Ads</span>
                <span className="ph2-tool" style={{ ['--td' as never]: '#5C8A5C' } as React.CSSProperties}><i className="dot" />Google Business Profile</span>
              </div>
            </div>
          </div>
        </section>

        {/* ============ Parallel Sprint Gantt ============ */}
        <section className="ph2-gantt" aria-labelledby="ph2-gantt-title">
          <div className="ph2-gantt-head">
            <span className="lbl">/ 04</span>
            <h2 id="ph2-gantt-title">Two tracks. Fourteen days. One shipping day.</h2>
            <div className="leg">
              <span><i className="strategy" />Strategy</span>
              <span><i className="build" />Build</span>
            </div>
          </div>

          <div className="ph2-gantt-board">
            <div className="ph2-gantt-days">
              <span className="d-lbl">Day →</span>
              {Array.from({ length: 14 }).map((_, i) => (
                <span key={i} className={`d${i === 7 ? ' week-break' : ''}`}>
                  {String(i + 1).padStart(2, '0')}
                </span>
              ))}
            </div>

            <div className="ph2-gantt-track">
              <div className="track-name">
                / A
                <em>Strategy</em>
              </div>
              <div className="ph2-gantt-bars">
                <GanttBar kind="strategy" start={1} end={4} label="Keyword &amp; persona map" />
                <GanttBar kind="strategy" start={3} end={8} label="Competitive positioning" />
                <GanttBar kind="strategy" start={6} end={12} label="Patient journey blueprint" />
                <GanttBar kind="strategy" start={9} end={14} label="Editorial calendar (90d)" />
              </div>
            </div>

            <div className="ph2-gantt-track">
              <div className="track-name">
                / B
                <em>Build</em>
              </div>
              <div className="ph2-gantt-bars">
                <GanttBar kind="build" start={2} end={6} label="Tracking &amp; tag setup" />
                <GanttBar kind="build" start={4} end={9} label="Forms &amp; intake (EMR/CRM)" />
                <GanttBar kind="build" start={6} end={11} label="AI chatbot &amp; triage" />
                <GanttBar kind="build" start={10} end={14} label="Live dashboard" />
              </div>
            </div>
          </div>
        </section>
      </div>

      <section className="ph2-strip">
        <div className="ph2-strip-wrap">
          <span className="ph2-strip-lbl">End of Phase 02</span>
          <p className="ph2-strip-q">
            &ldquo;When the strategy and the infrastructure ship in the same
            two weeks, the launch isn&rsquo;t a launch — it&rsquo;s a switch.&rdquo;
          </p>
          <Link to="/methodology/phase-3" className="ph2-strip-next">
            <span className="l">Next — Phase 03</span>
            <span className="t">Launch &amp; Accelerate →</span>
          </Link>
        </div>
      </section>
    </main>
  );
};

/* ============ Gantt bar ============ */
interface GanttBarProps {
  kind: 'strategy' | 'build';
  start: number;
  end: number;
  label: string;
}
const GanttBar = ({ kind, start, end, label }: GanttBarProps) => {
  const pctLeft = ((start - 1) / 14) * 100;
  const pctWidth = ((end - start + 1) / 14) * 100;
  return (
    <div
      className={`ph2-gantt-bar ${kind}`}
      style={{
        marginLeft: `${pctLeft}%`,
        width: `${pctWidth}%`,
      }}
    >
      <span dangerouslySetInnerHTML={{ __html: label }} />
      <span className="d-meta">D{String(start).padStart(2, '0')}–{String(end).padStart(2, '0')}</span>
    </div>
  );
};

export default Phase2;
