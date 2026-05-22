import { Link } from 'react-router-dom';
import { ArrowIcon } from '@/components/icons';
import { QUARTERS, QUARTER_ICONS, QUARTER_TONES } from './data';

const Quarters = () => (
  <section className="border-t border-line-faint">
    <div className="container-shell py-[clamp(64px,9vw,128px)]">
      <div className="text-center mb-12 lg:mb-16">
        <div className="text-line font-mono text-[12px] tracking-[0.24em] uppercase">
          What ships, by quarter
        </div>
        <h2 className="mt-4 text-heading text-[clamp(30px,3.4vw,48px)] font-extrabold tracking-[-0.026em] leading-[1.08]">
          The plan, on{' '}
          <span
            className="bg-clip-text text-transparent"
            style={{
              backgroundImage: 'linear-gradient(90deg, #B38B6D 0%, #8FBC8F 50%, #576DB5 100%)',
            }}
          >
            one page
          </span>
          .
        </h2>
        <p className="mt-4 text-muted text-[15px] leading-[1.65] max-w-[58ch] mx-auto">
          Four quarters. One arc — Foundation to Compound. Each stage hands off to the next.
        </p>
      </div>

      <div
        className="relative rounded-[24px] p-6 sm:p-10 lg:p-14"
        style={{
          background: 'linear-gradient(90deg, #DDD9E5 0%, #DDE3DC 50%, #EFE7CD 100%)',
        }}
      >
        {/* Connecting curved line behind the cards (desktop only) */}
        <svg
          className="hidden lg:block absolute left-0 right-0 top-[120px] w-full h-[40px] pointer-events-none"
          viewBox="0 0 1200 40"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M 80 20 C 280 -10, 380 50, 580 20 S 880 -10, 1120 20"
            fill="none"
            stroke="url(#qline)"
            strokeWidth="2"
            strokeDasharray="6 8"
          />
          <defs>
            <linearGradient id="qline" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#5A8F5A" />
              <stop offset="33%" stopColor="#B38B6D" />
              <stop offset="66%" stopColor="#576DB5" />
              <stop offset="100%" stopColor="#2D3748" />
            </linearGradient>
          </defs>
        </svg>

        <div className="relative grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-5">
          {QUARTERS.map((q, i) => {
            const t = QUARTER_TONES[i];
            return (
              <article
                key={q.q}
                className="relative bg-white rounded-[18px] p-6 sm:p-7 flex flex-col gap-4 border border-line-faint shadow-[0_18px_38px_-28px_rgba(45,55,72,0.20)] transition-transform duration-300 hover:-translate-y-1"
              >
                {/* Big numbered badge — sits at the top, overlaps the curve */}
                <div className="flex items-start justify-between">
                  <span
                    className="inline-grid place-items-center w-12 h-12 rounded-full shrink-0"
                    style={{ background: t.soft, color: t.hex }}
                    aria-hidden="true"
                  >
                    <span className="w-6 h-6 block">{QUARTER_ICONS[i]}</span>
                  </span>
                  <span
                    className="inline-grid place-items-center w-12 h-12 rounded-full font-mono text-[15px] font-bold border-2 bg-white"
                    style={{ borderColor: t.hex, color: t.hex }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>

                {/* Quarter + window */}
                <div className="flex items-baseline gap-2">
                  <span
                    className="font-mono text-[13px] font-bold tracking-[0.14em]"
                    style={{ color: t.hex }}
                  >
                    {q.q}
                  </span>
                  <span className="font-mono text-muted text-[11px] tracking-[0.12em]">
                    · {q.months}
                  </span>
                </div>

                {/* Focus title */}
                <h3 className="text-heading text-[22px] font-extrabold tracking-[-0.02em] leading-[1.05]">
                  {q.focus}
                  <span style={{ color: t.hex }}>.</span>
                </h3>

                {/* Ships description */}
                <p className="text-body text-[13.5px] leading-[1.55]">{q.ships}</p>

                {/* Reads-as badge */}
                <span
                  className="mt-auto inline-flex items-center gap-2 self-start px-3 py-1.5 rounded-full text-[10.5px] uppercase tracking-[0.18em] font-bold"
                  style={{ background: t.soft, color: t.hex }}
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full"
                    style={{ background: t.hex }}
                    aria-hidden="true"
                  />
                  {q.read}
                </span>
              </article>
            );
          })}
        </div>
      </div>

      <div className="mt-10 flex justify-center">
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-heading text-white text-[14px] font-semibold tracking-[-0.005em] transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-[0_18px_36px_-20px_rgba(45,55,72,0.45)]"
        >
          Start your plan
          <ArrowIcon />
        </Link>
      </div>
    </div>
  </section>
);

export default Quarters;
