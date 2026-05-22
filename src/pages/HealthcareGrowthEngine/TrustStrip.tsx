import { TRUST_BADGES } from './data';

/* ---------- TRUST STRIP ---------- */
const TrustStrip = () => (
  <section className="border-t border-line-faint bg-bg-alt">
    <div className="container-shell py-8 sm:py-10">
      <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
        <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted whitespace-nowrap">
          Operating partner to
        </span>
        <span className="h-px flex-1 bg-line-faint min-w-[40px]" />
        <ul className="flex flex-wrap items-center gap-x-6 gap-y-3">
          {TRUST_BADGES.map((b) => (
            <li
              key={b}
              className="inline-flex items-center gap-2 text-heading text-[13px] font-semibold tracking-[-0.005em]"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" className="text-accent-soft" aria-hidden="true">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              {b}
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

export default TrustStrip;
