import { Link } from 'react-router-dom';

/**
 * Phase 1 — Swiss layout: Numerical anchor + visual audit modules.
 * Body focuses on SEO-perspective audit dimensions with inline SVG
 * illustrations so each section is self-explanatory.
 */
const Phase1 = () => {
  return (
    <main className="ph1-root">
      <style>{`
        .ph1-root {
          background: #FAFAF8;
          color: #1A1F2C;
          font-family: 'Plus Jakarta Sans', system-ui, sans-serif;
          margin-top: calc(-1 * var(--nav-h, 88px));
          padding: 140px 0 120px;
          min-height: 100vh;
        }
        .ph1-wrap {
          max-width: 1320px;
          margin: 0 auto;
          padding: 0 clamp(20px, 4vw, 48px);
        }
        .ph1-crumb {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          color: #718096;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          transition: color 0.2s;
        }
        .ph1-crumb:hover { color: #2D3748; }
        .ph1-meta-row {
          display: grid;
          grid-template-columns: repeat(12, 1fr);
          gap: 24px;
          align-items: end;
          padding: 14px 0;
          border-bottom: 1px solid #2D3748;
          margin: 28px 0 0;
        }
        .ph1-meta-row span {
          font-size: 10.5px;
          letter-spacing: 0.24em;
          text-transform: uppercase;
          color: #2D3748;
          font-weight: 700;
        }
        .ph1-meta-row span:nth-child(1) { grid-column: 1 / span 3; }
        .ph1-meta-row span:nth-child(2) { grid-column: 4 / span 3; }
        .ph1-meta-row span:nth-child(3) { grid-column: 7 / span 3; color: #B38B6D; }
        .ph1-meta-row span:nth-child(4) { grid-column: 10 / span 3; text-align: right; }

        .ph1-hero {
          display: grid;
          grid-template-columns: 5fr 7fr;
          gap: clamp(40px, 6vw, 96px);
          padding: clamp(56px, 8vw, 120px) 0 clamp(56px, 7vw, 96px);
          border-bottom: 1px solid rgba(45, 55, 72, 0.18);
        }
        .ph1-bignum {
          font-size: clamp(180px, 22vw, 340px);
          font-weight: 800;
          line-height: 0.82;
          letter-spacing: -0.06em;
          color: #2D3748;
          margin: 0;
        }
        .ph1-bignum em {
          font-style: normal;
          color: #B38B6D;
        }
        .ph1-h1 {
          font-size: clamp(44px, 5.6vw, 84px);
          font-weight: 700;
          line-height: 1.0;
          letter-spacing: -0.03em;
          color: #2D3748;
          margin: 0 0 36px;
        }
        .ph1-lede {
          font-size: clamp(17px, 1.4vw, 21px);
          line-height: 1.55;
          color: #4A5568;
          margin: 0 0 28px;
          max-width: 52ch;
        }
        .ph1-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }
        .ph1-tag {
          font-size: 10.5px;
          font-weight: 700;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: #2D3748;
          padding: 8px 12px;
          border: 1px solid rgba(45, 55, 72, 0.25);
          border-radius: 999px;
          background: #fff;
        }

        /* ==== Scorecard preview ==== */
        .ph1-card-block {
          margin-top: clamp(56px, 7vw, 96px);
          display: grid;
          grid-template-columns: 5fr 7fr;
          gap: clamp(40px, 6vw, 96px);
        }
        .ph1-card-text .lbl {
          display: inline-block;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          color: #B38B6D;
          margin-bottom: 18px;
        }
        .ph1-card-text h2 {
          font-size: clamp(28px, 2.6vw, 38px);
          font-weight: 700;
          line-height: 1.15;
          letter-spacing: -0.02em;
          color: #2D3748;
          margin: 0 0 18px;
        }
        .ph1-card-text p {
          font-size: 15.5px;
          line-height: 1.65;
          color: #4A5568;
          margin: 0;
          max-width: 50ch;
        }
        .ph1-mock {
          background: #fff;
          border: 1px solid rgba(45, 55, 72, 0.12);
          border-radius: 14px;
          box-shadow: 0 24px 48px -28px rgba(45,55,72,0.18);
          overflow: hidden;
        }
        .ph1-mock-bar {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 12px 16px;
          border-bottom: 1px solid rgba(45, 55, 72, 0.10);
          background: #FAFAF8;
        }
        .ph1-mock-bar i {
          width: 10px; height: 10px; border-radius: 50%;
          background: #E2E5E9;
          display: inline-block;
        }
        .ph1-mock-bar .name {
          margin-left: auto;
          font-size: 11px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #718096;
          font-weight: 700;
        }
        .ph1-mock-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
        }
        .ph1-mock-row {
          padding: 18px 22px;
          border-bottom: 1px solid rgba(45, 55, 72, 0.08);
          border-right: 1px solid rgba(45, 55, 72, 0.08);
        }
        .ph1-mock-row:nth-child(2n) { border-right: none; }
        .ph1-mock-row .k {
          font-size: 10.5px;
          font-weight: 700;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: #718096;
        }
        .ph1-mock-row .v {
          margin-top: 6px;
          font-size: 22px;
          font-weight: 800;
          color: #2D3748;
          letter-spacing: -0.02em;
        }
        .ph1-mock-row .v em {
          font-style: normal;
          font-size: 12px;
          font-weight: 700;
          margin-left: 6px;
          padding: 3px 7px;
          border-radius: 4px;
        }
        .ph1-mock-row .v em.bad { background: #FEE; color: #B00020; }
        .ph1-mock-row .v em.warn { background: #FEF3C7; color: #92400E; }
        .ph1-mock-row .v em.good { background: #DCFCE7; color: #166534; }
        .ph1-mock-row .bar {
          margin-top: 10px;
          height: 6px;
          background: #F1F2F4;
          border-radius: 999px;
          overflow: hidden;
        }
        .ph1-mock-row .bar > i {
          display: block; height: 100%;
          background: #B38B6D;
        }

        /* ==== Section label ==== */
        .ph1-section-label {
          display: grid;
          grid-template-columns: 5fr 7fr;
          gap: clamp(40px, 6vw, 96px);
          padding: 28px 0 16px;
          margin-top: clamp(56px, 7vw, 96px);
          border-top: 1px solid #2D3748;
        }
        .ph1-section-label span {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          color: #B38B6D;
          grid-column: 1;
        }
        .ph1-section-label h2 {
          grid-column: 2;
          font-size: clamp(26px, 2.4vw, 36px);
          font-weight: 700;
          line-height: 1.15;
          letter-spacing: -0.02em;
          color: #2D3748;
          margin: 0;
        }

        /* ==== Audit dimensions grid ==== */
        .ph1-dims {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 18px;
          margin-top: 32px;
        }
        .ph1-dim {
          padding: 32px 26px 30px;
          background: #fff;
          border: 1px solid rgba(45, 55, 72, 0.12);
          border-radius: 18px;
          display: flex;
          flex-direction: column;
          position: relative;
          overflow: hidden;
          transition:
            transform 0.35s cubic-bezier(0.2, 0.7, 0.2, 1),
            border-color 0.35s ease,
            box-shadow 0.35s ease,
            background 0.35s ease;
        }
        .ph1-dim::before {
          content: "";
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 3px;
          background: #B38B6D;
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.4s cubic-bezier(0.2, 0.7, 0.2, 1);
        }
        .ph1-dim:hover {
          transform: translateY(-6px);
          border-color: rgba(179, 139, 109, 0.45);
          box-shadow: 0 28px 48px -28px rgba(45, 55, 72, 0.25);
        }
        .ph1-dim:hover::before { transform: scaleX(1); }
        .ph1-dim:hover .signals li {
          background: #FBF5EC;
        }
        .ph1-dim .num {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-size: 10.5px;
          font-weight: 700;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          color: #B38B6D;
        }
        .ph1-dim .num::before {
          content: "";
          width: 18px; height: 1px;
          background: #B38B6D;
        }
        .ph1-dim .ill {
          height: 88px;
          margin: 22px 0 18px;
          display: flex;
          align-items: center;
        }
        .ph1-dim h3 {
          font-size: 19px;
          font-weight: 700;
          color: #2D3748;
          letter-spacing: -0.01em;
          margin: 0 0 8px;
          line-height: 1.25;
        }
        .ph1-dim p {
          font-size: 13.8px;
          line-height: 1.6;
          color: #4A5568;
          margin: 0 0 18px;
        }
        .ph1-dim .signals {
          margin-top: auto;
          padding-top: 14px;
          border-top: 1px dashed rgba(45, 55, 72, 0.15);
        }
        .ph1-dim .signals .lbl {
          display: block;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.24em;
          text-transform: uppercase;
          color: #718096;
          margin-bottom: 8px;
        }
        .ph1-dim .signals ul {
          margin: 0;
          padding: 0;
          list-style: none;
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
        }
        .ph1-dim .signals li {
          font-size: 11px;
          font-weight: 600;
          color: #2D3748;
          padding: 5px 9px;
          background: #F1F2F4;
          border-radius: 4px;
        }

        /* ==== Funnel ==== */
        .ph1-funnel-wrap {
          margin-top: clamp(56px, 7vw, 96px);
          padding-top: 28px;
          border-top: 1px solid #2D3748;
        }
        .ph1-funnel-head {
          display: grid;
          grid-template-columns: 5fr 7fr;
          gap: clamp(40px, 6vw, 96px);
          margin-bottom: 32px;
        }
        .ph1-funnel-head .lbl {
          grid-column: 1;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          color: #B38B6D;
        }
        .ph1-funnel-head h2 {
          grid-column: 2;
          font-size: clamp(26px, 2.4vw, 36px);
          font-weight: 700;
          line-height: 1.15;
          letter-spacing: -0.02em;
          color: #2D3748;
          margin: 0 0 12px;
        }
        .ph1-funnel-head p {
          grid-column: 2;
          font-size: 15px;
          line-height: 1.6;
          color: #4A5568;
          margin: 0;
          max-width: 56ch;
        }
        /* Horizontal funnel — one row per stage. Bar width = absolute %
           of starting clicks, so the visual collapse equals the data. */
        .ph1-funnel {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        .ph1-step {
          display: grid;
          grid-template-columns: 56px 140px 1fr auto;
          align-items: center;
          gap: 18px;
          padding: 14px 18px;
          background: #fff;
          border: 1px solid rgba(45, 55, 72, 0.12);
          border-radius: 14px;
          transition:
            transform 0.3s cubic-bezier(0.2, 0.7, 0.2, 1),
            border-color 0.3s ease,
            box-shadow 0.3s ease,
            background 0.3s ease;
        }
        .ph1-step:hover {
          transform: translateX(4px);
          border-color: rgba(45, 55, 72, 0.22);
          box-shadow: 0 18px 32px -22px rgba(45, 55, 72, 0.22);
        }
        .ph1-step.leak {
          background: #FFF8F0;
          border-color: rgba(179, 139, 109, 0.32);
        }
        .ph1-step.leak:hover { border-color: rgba(179, 139, 109, 0.55); }
        .ph1-step .idx {
          font-family: ui-monospace, Menlo, monospace;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.18em;
          color: #B38B6D;
        }
        .ph1-step .stage {
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #2D3748;
        }
        .ph1-step .bar {
          position: relative;
          height: 14px;
          background: rgba(45, 55, 72, 0.06);
          border-radius: 999px;
          overflow: hidden;
        }
        .ph1-step .fill {
          height: 100%;
          background: linear-gradient(90deg, #2D3748, #4A5568);
          border-radius: inherit;
          transition: width 0.6s cubic-bezier(0.2, 0.7, 0.2, 1);
        }
        .ph1-step.leak .fill {
          background: linear-gradient(90deg, #B38B6D, #D4AF7C);
        }
        .ph1-step .num {
          display: flex;
          align-items: baseline;
          gap: 6px;
          min-width: 92px;
          justify-content: flex-end;
        }
        .ph1-step .count {
          font-size: 28px;
          font-weight: 800;
          color: #2D3748;
          line-height: 1;
          letter-spacing: -0.02em;
          font-feature-settings: "tnum" 1;
        }
        .ph1-step.leak .count { color: #B38B6D; }
        .ph1-step .of {
          font-size: 11px;
          font-weight: 700;
          color: #A0AEC0;
          letter-spacing: 0.04em;
        }

        /* Connector showing the drop between two consecutive stages */
        .ph1-drop {
          display: grid;
          grid-template-columns: 56px 140px auto auto 1fr;
          align-items: center;
          gap: 18px;
          padding: 0 18px;
          height: 36px;
          color: #4A5568;
        }
        .ph1-drop .line {
          grid-column: 1 / 3;
          height: 22px;
          margin-left: 10px;
          border-left: 2px dashed rgba(45, 55, 72, 0.22);
        }
        .ph1-drop .d-val {
          font-family: ui-monospace, Menlo, monospace;
          font-size: 12px;
          font-weight: 800;
          color: #B00020;
          letter-spacing: 0.02em;
        }
        .ph1-drop .d-reason {
          font-size: 12px;
          font-weight: 700;
          color: #4A5568;
          letter-spacing: 0.06em;
          text-transform: uppercase;
        }
        .ph1-drop .d-badge {
          justify-self: end;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #B38B6D;
          padding: 4px 10px;
          border-radius: 999px;
          background: #FBF1E2;
          border: 1px solid rgba(179, 139, 109, 0.45);
        }
        .ph1-drop.is-leak .d-val { color: #B38B6D; }
        .ph1-drop.is-leak .line { border-color: rgba(179, 139, 109, 0.55); }

        /* ==== Timeline ==== */
        .ph1-tl {
          margin-top: clamp(72px, 9vw, 112px);
          padding-top: 28px;
          border-top: 1px solid #2D3748;
        }
        .ph1-tl-head {
          display: grid;
          grid-template-columns: 5fr 7fr;
          gap: clamp(40px, 6vw, 96px);
          margin-bottom: 28px;
        }
        .ph1-tl-head .lbl {
          grid-column: 1;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          color: #B38B6D;
        }
        .ph1-tl-head h2 {
          grid-column: 2;
          font-size: clamp(26px, 2.4vw, 36px);
          font-weight: 700;
          line-height: 1.15;
          letter-spacing: -0.02em;
          color: #2D3748;
          margin: 0;
        }
        .ph1-tl-grid {
          position: relative;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          padding-top: 28px;
        }
        .ph1-tl-grid::before {
          content: "";
          position: absolute;
          top: 36px;
          left: 0; right: 0;
          height: 1px;
          background: #2D3748;
        }
        .ph1-tl-cell {
          position: relative;
          padding: 56px 18px 0 0;
        }
        .ph1-tl-cell::before {
          content: "";
          position: absolute;
          top: 28px;
          left: 0;
          width: 16px; height: 16px;
          border-radius: 50%;
          background: #FAFAF8;
          border: 2px solid #2D3748;
        }
        .ph1-tl-cell.active::before { background: #B38B6D; border-color: #B38B6D; }
        .ph1-tl-cell .day {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.24em;
          text-transform: uppercase;
          color: #B38B6D;
          margin-bottom: 6px;
        }
        .ph1-tl-cell .ttl {
          font-size: 17px;
          font-weight: 700;
          color: #2D3748;
          letter-spacing: -0.012em;
          margin-bottom: 8px;
        }
        .ph1-tl-cell .txt {
          font-size: 13px;
          line-height: 1.55;
          color: #4A5568;
          max-width: 28ch;
          margin: 0;
        }

        /* ==== Deliverables ==== */
        .ph1-deliv {
          margin-top: clamp(72px, 9vw, 112px);
          padding: clamp(32px, 4vw, 48px);
          background: #2D3748;
          color: #F1F2F4;
          border-radius: 14px;
        }
        .ph1-deliv-head {
          display: grid;
          grid-template-columns: 5fr 7fr;
          gap: clamp(40px, 6vw, 96px);
          align-items: end;
          margin-bottom: 28px;
          padding-bottom: 22px;
          border-bottom: 1px solid rgba(241,242,244,0.16);
        }
        .ph1-deliv-head .lbl {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          color: #B38B6D;
        }
        .ph1-deliv-head h2 {
          font-size: clamp(24px, 2.2vw, 32px);
          font-weight: 700;
          line-height: 1.2;
          letter-spacing: -0.018em;
          margin: 0;
          color: #fff;
        }
        .ph1-deliv-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }
        .ph1-deliv-item {
          padding: 18px 18px 22px;
          border: 1px solid rgba(241,242,244,0.14);
          border-radius: 8px;
          background: rgba(255,255,255,0.03);
        }
        .ph1-deliv-item .ic {
          width: 36px; height: 36px;
          margin-bottom: 14px;
          color: #B38B6D;
        }
        .ph1-deliv-item h4 {
          font-size: 15px;
          font-weight: 700;
          color: #fff;
          margin: 0 0 6px;
          letter-spacing: -0.01em;
        }
        .ph1-deliv-item p {
          font-size: 12.8px;
          line-height: 1.55;
          color: rgba(241,242,244,0.7);
          margin: 0;
        }

        /* ==== Foot ==== */
        .ph1-foot {
          display: grid;
          grid-template-columns: 5fr 7fr;
          gap: clamp(40px, 6vw, 96px);
          align-items: end;
          margin-top: clamp(56px, 7vw, 96px);
          padding-top: 28px;
          border-top: 1px solid #2D3748;
        }
        .ph1-foot-side {
          font-size: 11px;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          color: #718096;
          font-weight: 700;
        }
        .ph1-next {
          display: inline-flex;
          flex-direction: column;
          gap: 8px;
          padding: 18px 0;
          border-bottom: 1px solid transparent;
          transition: border-color 0.2s;
        }
        .ph1-next:hover { border-color: #B38B6D; }
        .ph1-next-label {
          font-size: 11px;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          color: #B38B6D;
          font-weight: 700;
        }
        .ph1-next-title {
          font-size: clamp(22px, 2vw, 28px);
          font-weight: 700;
          color: #2D3748;
          letter-spacing: -0.018em;
        }

        @media (max-width: 1100px) {
          .ph1-dims { grid-template-columns: repeat(2, 1fr); }
          .ph1-deliv-grid { grid-template-columns: repeat(2, 1fr); }
          .ph1-tl-grid { grid-template-columns: repeat(2, 1fr); }
          .ph1-tl-grid::before { display: none; }
          .ph1-tl-cell { padding-top: 32px; }
          .ph1-tl-cell::before { top: 8px; }
        }
        @media (max-width: 900px) {
          .ph1-hero,
          .ph1-section-label,
          .ph1-foot,
          .ph1-card-block,
          .ph1-funnel-head,
          .ph1-tl-head,
          .ph1-deliv-head { grid-template-columns: 1fr; }
          .ph1-funnel-head h2,
          .ph1-funnel-head p,
          .ph1-tl-head h2,
          .ph1-deliv-head h2 { grid-column: 1; }
          .ph1-meta-row { display: none; }
          .ph1-bignum { font-size: 140px; }
          .ph1-step { grid-template-columns: 48px 100px 1fr auto; gap: 12px; padding: 12px 14px; }
          .ph1-step .num { min-width: 80px; }
          .ph1-step .count { font-size: 24px; }
          .ph1-drop { grid-template-columns: 48px 100px auto auto 1fr; gap: 12px; padding: 0 14px; }
        }
        @media (max-width: 560px) {
          .ph1-dims { grid-template-columns: 1fr; }
          .ph1-deliv-grid { grid-template-columns: 1fr; }
          .ph1-step { grid-template-columns: 42px 1fr auto; }
          .ph1-step .stage { display: none; }
          .ph1-drop { grid-template-columns: 42px auto auto 1fr; }
          .ph1-drop .line { grid-column: 1 / 2; }
        }
      `}</style>

      <div className="ph1-wrap">
        <Link to="/#methodology" className="ph1-crumb">
          <span aria-hidden="true">←</span> Back to Methodology
        </Link>

        <div className="ph1-meta-row">
          <span>Phase</span>
          <span>Discovery &amp; Audit</span>
          <span>Week 01 — 02</span>
          <span>Deliverable: Audit Report</span>
        </div>

        <section className="ph1-hero">
          <div>
            <h2 className="ph1-bignum">
              0<em>1</em>
            </h2>
          </div>
          <div>
            <h1 className="ph1-h1">
              Discovery &amp; <br />
              Technical Audit.
            </h1>
            <p className="ph1-lede">
              A two-week forensic of every search, ad, and front-desk surface
              your clinic owns. We don&rsquo;t guess where patients are leaking
              — we measure it, then we hand you a prioritized scorecard with
              the exact dollar value of each fix.
            </p>
            <div className="ph1-tags">
              <span className="ph1-tag">Technical SEO</span>
              <span className="ph1-tag">Local Search</span>
              <span className="ph1-tag">Paid Media</span>
              <span className="ph1-tag">CRO</span>
              <span className="ph1-tag">Front-desk Ops</span>
            </div>
          </div>
        </section>

        {/* ============ Scorecard mockup ============ */}
        <section className="ph1-card-block">
          <div className="ph1-card-text">
            <span className="lbl">/ 01 — The Output</span>
            <h2>One scorecard. Every dimension scored against the highest-converting competitor in your radius.</h2>
            <p>
              Each surface gets a number, a verdict, and a remediation cost.
              No 80-slide deck — a single page your team can act on within an
              hour of reading it.
            </p>
          </div>

          <div className="ph1-mock" role="img" aria-label="Audit scorecard preview">
            <div className="ph1-mock-bar">
              <i /><i /><i />
              <span className="name">Audit Scorecard — Q.SAMPLE</span>
            </div>
            <div className="ph1-mock-grid">
              <div className="ph1-mock-row">
                <div className="k">Core Web Vitals</div>
                <div className="v">42<em className="bad">Poor</em></div>
                <div className="bar"><i style={{ width: '42%' }} /></div>
              </div>
              <div className="ph1-mock-row">
                <div className="k">Local Pack Rank</div>
                <div className="v">#7<em className="warn">Below fold</em></div>
                <div className="bar"><i style={{ width: '28%' }} /></div>
              </div>
              <div className="ph1-mock-row">
                <div className="k">GBP Completeness</div>
                <div className="v">68<em className="warn">Gap</em></div>
                <div className="bar"><i style={{ width: '68%' }} /></div>
              </div>
              <div className="ph1-mock-row">
                <div className="k">Schema Coverage</div>
                <div className="v">12<em className="bad">Missing</em></div>
                <div className="bar"><i style={{ width: '12%' }} /></div>
              </div>
              <div className="ph1-mock-row">
                <div className="k">Paid CPL — Google</div>
                <div className="v">$184<em className="bad">+38%</em></div>
                <div className="bar"><i style={{ width: '82%' }} /></div>
              </div>
              <div className="ph1-mock-row">
                <div className="k">Call Answer Rate</div>
                <div className="v">61<em className="warn">Leaking</em></div>
                <div className="bar"><i style={{ width: '61%' }} /></div>
              </div>
            </div>
          </div>
        </section>

        {/* ============ Audit dimensions ============ */}
        <div className="ph1-section-label">
          <span>/ 02 — The Audit</span>
          <h2>Six dimensions. Each one a documented source of patient leak — or a documented growth lever.</h2>
        </div>

        <div className="ph1-dims">
          <Dim
            num="01"
            title="Technical SEO &amp; performance"
            text="Core Web Vitals, crawl health, mobile rendering, and the structural fixes Google rewards first."
            signals={['LCP', 'CLS', 'INP', 'Indexation', 'robots.txt']}
            illustration={<TechSeoSvg />}
          />
          <Dim
            num="02"
            title="On-page &amp; schema"
            text="Service-page coverage, title/H1 alignment to intent, and structured data your competitors are quietly winning with."
            signals={['MedicalClinic', 'FAQPage', 'BreadcrumbList', 'Title CTR']}
            illustration={<SchemaSvg />}
          />
          <Dim
            num="03"
            title="Google Business Profile"
            text="Category accuracy, photo cadence, review velocity, and the local-pack gap to the leader in your radius."
            signals={['Category match', 'NAP consistency', 'Review delta', 'Q&A hygiene']}
            illustration={<GbpSvg />}
          />
          <Dim
            num="04"
            title="Paid media efficiency"
            text="Wasted spend, audience drift, creative fatigue, and the CPL gap between your account and benchmark for your service mix."
            signals={['Quality Score', 'Search-term waste', 'Conv. tracking', 'Audience overlap']}
            illustration={<PaidSvg />}
          />
          <Dim
            num="05"
            title="Conversion path"
            text="The friction between &lsquo;clicked the ad&rsquo; and &lsquo;booked the appointment&rsquo; — measured per service line."
            signals={['Form drop-off', 'Page CR%', 'CTA contrast', 'Trust signals']}
            illustration={<CroSvg />}
          />
          <Dim
            num="06"
            title="Front-desk capacity"
            text="Call answer rate, response time, missed-call follow-up, and the percentage of leads lost between &lsquo;ring&rsquo; and &lsquo;booked.&rsquo;"
            signals={['Answer %', 'Avg. response', 'Booking ratio', 'After-hours leak']}
            illustration={<DeskSvg />}
          />
        </div>

        {/* ============ Funnel visualization ============ */}
        <section className="ph1-funnel-wrap">
          <div className="ph1-funnel-head">
            <span className="lbl">/ 03 — The Leak Map</span>
            <h2>The single visualization that gets every audit signed off in one meeting.</h2>
            <p>
              We trace 100 search clicks through every step until they become
              booked patients. The widest drop-off is where your next dollar
              goes — and your scorecard tells you how much it&rsquo;s worth.
            </p>
          </div>
          <div className="ph1-funnel" aria-label="Funnel leakage from 100 clicks to 8 bookings">
            <div className="ph1-step">
              <span className="idx">01</span>
              <span className="stage">Clicks</span>
              <div className="bar">
                <div className="fill" style={{ width: '100%' }} />
              </div>
              <div className="num"><span className="count">100</span><span className="of">/ 100</span></div>
            </div>

            <div className="ph1-drop">
              <span className="line" aria-hidden="true" />
              <span className="d-val">−16</span>
              <span className="d-reason">bounce</span>
            </div>

            <div className="ph1-step">
              <span className="idx">02</span>
              <span className="stage">Landed</span>
              <div className="bar">
                <div className="fill" style={{ width: '84%' }} />
              </div>
              <div className="num"><span className="count">84</span><span className="of">/ 100</span></div>
            </div>

            <div className="ph1-drop is-leak">
              <span className="line" aria-hidden="true" />
              <span className="d-val">−32</span>
              <span className="d-reason">scroll exit</span>
              <span className="d-badge">Biggest leak</span>
            </div>

            <div className="ph1-step leak">
              <span className="idx">03</span>
              <span className="stage">Engaged</span>
              <div className="bar">
                <div className="fill" style={{ width: '52%' }} />
              </div>
              <div className="num"><span className="count">52</span><span className="of">/ 100</span></div>
            </div>

            <div className="ph1-drop">
              <span className="line" aria-hidden="true" />
              <span className="d-val">−33</span>
              <span className="d-reason">form / call</span>
            </div>

            <div className="ph1-step">
              <span className="idx">04</span>
              <span className="stage">Inquired</span>
              <div className="bar">
                <div className="fill" style={{ width: '19%' }} />
              </div>
              <div className="num"><span className="count">19</span><span className="of">/ 100</span></div>
            </div>

            <div className="ph1-drop">
              <span className="line" aria-hidden="true" />
              <span className="d-val">−11</span>
              <span className="d-reason">desk drop</span>
            </div>

            <div className="ph1-step leak">
              <span className="idx">05</span>
              <span className="stage">Booked</span>
              <div className="bar">
                <div className="fill" style={{ width: '8%' }} />
              </div>
              <div className="num"><span className="count">08</span><span className="of">/ 100</span></div>
            </div>
          </div>
        </section>

        {/* ============ Timeline ============ */}
        <section className="ph1-tl">
          <div className="ph1-tl-head">
            <span className="lbl">/ 04 — The Run</span>
            <h2>Two weeks. Four checkpoints. Nothing skipped.</h2>
          </div>
          <div className="ph1-tl-grid">
            <div className="ph1-tl-cell active">
              <div className="day">Day 01 — 03</div>
              <div className="ttl">Access &amp; intake</div>
              <p className="txt">GA4, GSC, GBP, ad accounts, call platform, CRM. Read-only handover, signed in 24h.</p>
            </div>
            <div className="ph1-tl-cell">
              <div className="day">Day 04 — 07</div>
              <div className="ttl">Crawl &amp; baseline</div>
              <p className="txt">Full technical crawl, rank tracking, competitor delta, paid account excavation.</p>
            </div>
            <div className="ph1-tl-cell">
              <div className="day">Day 08 — 11</div>
              <div className="ttl">Funnel mapping</div>
              <p className="txt">Form, call, and desk instrumentation; every step in the journey is timed and counted.</p>
            </div>
            <div className="ph1-tl-cell">
              <div className="day">Day 12 — 14</div>
              <div className="ttl">Scorecard &amp; readout</div>
              <p className="txt">Single-page scorecard, prioritized fix list with dollar values, 60-minute walk-through.</p>
            </div>
          </div>
        </section>

        {/* ============ Deliverables ============ */}
        <section className="ph1-deliv">
          <div className="ph1-deliv-head">
            <span className="lbl">/ 05 — What You Get</span>
            <h2>Four artifacts. Your team owns all of them on day fourteen.</h2>
          </div>
          <div className="ph1-deliv-grid">
            <div className="ph1-deliv-item">
              <IconDoc className="ic" />
              <h4>Scorecard (1 page)</h4>
              <p>Every audit dimension, one number, one verdict, one dollar value to fix.</p>
            </div>
            <div className="ph1-deliv-item">
              <IconFunnel className="ic" />
              <h4>Funnel leakage map</h4>
              <p>100 clicks → 8 bookings, every drop-off measured and named.</p>
            </div>
            <div className="ph1-deliv-item">
              <IconList className="ic" />
              <h4>Prioritized fix list</h4>
              <p>Ranked by impact-per-effort. Top 5 ship in Phase 2; the rest queue.</p>
            </div>
            <div className="ph1-deliv-item">
              <IconChart className="ic" />
              <h4>Competitor delta</h4>
              <p>The exact gap — keyword, rank, and review — to the leader in your radius.</p>
            </div>
          </div>
        </section>

        <div className="ph1-foot">
          <span className="ph1-foot-side">End of Phase 01</span>
          <Link to="/methodology/phase-2" className="ph1-next">
            <span className="ph1-next-label">Next — Phase 02</span>
            <span className="ph1-next-title">
              Strategy &amp; Infrastructure Build →
            </span>
          </Link>
        </div>
      </div>
    </main>
  );
};

/* ============ Sub-components ============ */

interface DimProps {
  num: string;
  title: string;
  text: string;
  signals: string[];
  illustration: React.ReactNode;
}
const Dim = ({ num, title, text, signals, illustration }: DimProps) => (
  <article className="ph1-dim">
    <span className="num">/ {num}</span>
    <div className="ill" aria-hidden="true">{illustration}</div>
    <h3 dangerouslySetInnerHTML={{ __html: title }} />
    <p dangerouslySetInnerHTML={{ __html: text }} />
    <div className="signals">
      <span className="lbl">Signals tracked</span>
      <ul>
        {signals.map((s) => <li key={s}>{s}</li>)}
      </ul>
    </div>
  </article>
);

/* ============ Inline illustration SVGs (Swiss-style geometric) ============ */

const TechSeoSvg = () => (
  <svg viewBox="0 0 160 88" width="100%" height="88" fill="none">
    <rect x="2" y="14" width="156" height="60" rx="6" stroke="#2D3748" strokeWidth="1.4" />
    <line x1="2" y1="28" x2="158" y2="28" stroke="#2D3748" strokeWidth="1" />
    <circle cx="12" cy="21" r="2" fill="#B38B6D" />
    <circle cx="22" cy="21" r="2" fill="#2D3748" opacity="0.3" />
    <circle cx="32" cy="21" r="2" fill="#2D3748" opacity="0.3" />
    <rect x="14" y="38" width="60" height="6" rx="2" fill="#2D3748" opacity="0.85" />
    <rect x="14" y="50" width="92" height="4" rx="2" fill="#2D3748" opacity="0.3" />
    <rect x="14" y="58" width="76" height="4" rx="2" fill="#2D3748" opacity="0.3" />
    <g transform="translate(118,42)">
      <circle r="18" stroke="#B38B6D" strokeWidth="2" fill="none" strokeDasharray="113" strokeDashoffset="40" transform="rotate(-90)" />
      <text textAnchor="middle" dy="4" fontSize="11" fontWeight="800" fill="#2D3748">76</text>
    </g>
  </svg>
);

const SchemaSvg = () => (
  <svg viewBox="0 0 160 88" width="100%" height="88" fill="none">
    <g stroke="#2D3748" strokeWidth="1.4">
      <rect x="56" y="6" width="48" height="22" rx="3" fill="#fff" />
      <rect x="6" y="56" width="44" height="22" rx="3" fill="#fff" />
      <rect x="58" y="56" width="44" height="22" rx="3" fill="#FFF8F0" />
      <rect x="110" y="56" width="44" height="22" rx="3" fill="#fff" />
      <line x1="80" y1="28" x2="28" y2="56" />
      <line x1="80" y1="28" x2="80" y2="56" />
      <line x1="80" y1="28" x2="132" y2="56" />
    </g>
    <text x="80" y="20" textAnchor="middle" fontSize="9" fontWeight="700" fill="#2D3748">@MedicalClinic</text>
    <text x="28" y="70" textAnchor="middle" fontSize="9" fontWeight="700" fill="#2D3748">FAQ</text>
    <text x="80" y="70" textAnchor="middle" fontSize="9" fontWeight="700" fill="#B38B6D">Service</text>
    <text x="132" y="70" textAnchor="middle" fontSize="9" fontWeight="700" fill="#2D3748">Review</text>
  </svg>
);

const GbpSvg = () => (
  <svg viewBox="0 0 160 88" width="100%" height="88" fill="none">
    <rect x="2" y="2" width="156" height="84" rx="6" stroke="#2D3748" strokeWidth="1.4" fill="#fff" />
    <circle cx="22" cy="22" r="10" fill="#B38B6D" />
    <path d="M22 16 L22 22 L26 24" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" />
    <rect x="40" y="14" width="80" height="6" rx="2" fill="#2D3748" />
    <rect x="40" y="24" width="60" height="4" rx="2" fill="#2D3748" opacity="0.4" />
    <g transform="translate(40,40)">
      {[0, 1, 2, 3, 4].map((i) => (
        <path
          key={i}
          d="M0 8 L2.5 3 L8 2.4 L4 -1.2 L5 -6 L0 -3 L-5 -6 L-4 -1.2 L-8 2.4 L-2.5 3 Z"
          fill={i < 4 ? '#B38B6D' : '#E2E5E9'}
          transform={`translate(${i * 16},0)`}
        />
      ))}
    </g>
    <rect x="40" y="60" width="108" height="4" rx="2" fill="#2D3748" opacity="0.3" />
    <rect x="40" y="68" width="86" height="4" rx="2" fill="#2D3748" opacity="0.3" />
  </svg>
);

const PaidSvg = () => (
  <svg viewBox="0 0 160 88" width="100%" height="88" fill="none">
    <line x1="6" y1="78" x2="154" y2="78" stroke="#2D3748" strokeWidth="1" />
    <line x1="10" y1="6" x2="10" y2="82" stroke="#2D3748" strokeWidth="1" />
    {[
      { x: 22, h: 32 }, { x: 38, h: 48 }, { x: 54, h: 28 }, { x: 70, h: 56 },
      { x: 86, h: 38 }, { x: 102, h: 24 }, { x: 118, h: 60 }, { x: 134, h: 18 },
    ].map((b, i) => (
      <rect key={i} x={b.x} y={78 - b.h} width="10" height={b.h}
            fill={b.h > 50 ? '#B38B6D' : '#2D3748'} opacity={b.h > 50 ? 1 : 0.85} />
    ))}
    <text x="148" y="20" textAnchor="end" fontSize="9" fontWeight="700" fill="#B38B6D">$184 CPL</text>
  </svg>
);

const CroSvg = () => (
  <svg viewBox="0 0 160 88" width="100%" height="88" fill="none">
    <g stroke="#2D3748" strokeWidth="1.4" fill="#fff">
      <polygon points="6,12 154,12 134,30 26,30" />
      <polygon points="26,32 134,32 118,52 42,52" />
      <polygon points="42,54 118,54 106,72 54,72" fill="#FFF8F0" stroke="#B38B6D" />
    </g>
    <text x="80" y="24" textAnchor="middle" fontSize="9" fontWeight="700" fill="#2D3748">100 clicks</text>
    <text x="80" y="45" textAnchor="middle" fontSize="9" fontWeight="700" fill="#2D3748">52 engaged</text>
    <text x="80" y="66" textAnchor="middle" fontSize="9" fontWeight="700" fill="#B38B6D">8 booked</text>
  </svg>
);

const DeskSvg = () => (
  <svg viewBox="0 0 160 88" width="100%" height="88" fill="none">
    <rect x="14" y="22" width="48" height="56" rx="6" stroke="#2D3748" strokeWidth="1.4" fill="#fff" />
    <rect x="22" y="32" width="32" height="4" rx="2" fill="#2D3748" />
    <rect x="22" y="40" width="24" height="4" rx="2" fill="#2D3748" opacity="0.4" />
    <circle cx="38" cy="62" r="10" fill="#B38B6D" />
    <path d="M34 60 c0 -2 2 -3 4 -3 s4 1 4 3 c0 1 -1 2 -2 3 v2 m-4 0 v-2 c-1 -1 -2 -2 -2 -3" stroke="#fff" strokeWidth="1.4" fill="none" strokeLinecap="round" />
    <g transform="translate(86,30)">
      <line x1="0" y1="0" x2="60" y2="0" stroke="#2D3748" opacity="0.3" />
      <line x1="0" y1="12" x2="60" y2="12" stroke="#2D3748" opacity="0.3" />
      <line x1="0" y1="24" x2="60" y2="24" stroke="#2D3748" opacity="0.3" />
      <line x1="0" y1="36" x2="60" y2="36" stroke="#2D3748" opacity="0.3" />
      <rect x="0" y="-4" width="38" height="6" fill="#B38B6D" />
      <rect x="0" y="8" width="22" height="6" fill="#2D3748" />
      <rect x="0" y="20" width="48" height="6" fill="#2D3748" opacity="0.5" />
      <rect x="0" y="32" width="14" height="6" fill="#2D3748" />
      <text x="0" y="-8" fontSize="8" fontWeight="700" fill="#718096">CALL LOG</text>
    </g>
  </svg>
);

/* ============ Deliverable icons ============ */
const IconDoc = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="8" y1="13" x2="16" y2="13" />
    <line x1="8" y1="17" x2="14" y2="17" />
  </svg>
);
const IconFunnel = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="3 4 21 4 14 12 14 20 10 18 10 12" />
  </svg>
);
const IconList = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <line x1="9" y1="6" x2="20" y2="6" />
    <line x1="9" y1="12" x2="20" y2="12" />
    <line x1="9" y1="18" x2="20" y2="18" />
    <circle cx="4" cy="6" r="1.5" />
    <circle cx="4" cy="12" r="1.5" />
    <circle cx="4" cy="18" r="1.5" />
  </svg>
);
const IconChart = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <line x1="4" y1="20" x2="20" y2="20" />
    <rect x="6" y="12" width="3" height="8" />
    <rect x="11" y="7" width="3" height="13" />
    <rect x="16" y="14" width="3" height="6" />
  </svg>
);

export default Phase1;
