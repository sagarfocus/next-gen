import { Link } from 'react-router-dom';
import { ArrowIcon } from '@/components/icons';
import imgClosing from '../../assets/nextgen-image/Clinicalimg1.png';

/* ---------- CLOSING ---------- */
const Closing = () => (
  <section className="border-t border-line-faint bg-bg">
    <div className="container-shell py-[clamp(64px,8.5vw,120px)]">
      {/* Bigger header on top */}
      <div className="grid lg:grid-cols-12 gap-x-12 gap-y-6 mb-12 lg:mb-16">
        <div className="lg:col-span-7">
          <div className="flex items-baseline gap-3 mb-5">
            <span className="text-line font-mono text-[13px] tracking-[0.18em]">09</span>
            <span className="h-px flex-1 bg-line-soft" />
          </div>
          <h2 className="text-heading font-extrabold tracking-[-0.03em] leading-[1.04] text-[clamp(40px,5vw,72px)]">
            Start with the audit.
          </h2>
        </div>
        <div className="lg:col-span-5 lg:pt-16">
          <p className="text-body text-[clamp(16px,1.35vw,19px)] leading-[1.55] max-w-[44ch]">
            Two-week forensic of every search, ad, and front-desk surface your clinic owns. Yours to
            keep.
          </p>
        </div>
      </div>

      {/* Audit panel — pastel gradient background */}
      <article
        className="rounded-[20px] overflow-hidden border border-line-faint grid md:grid-cols-[1.2fr_1fr] text-heading"
        style={{
          background:
            'linear-gradient(90deg, #DBD4EC 0%, #C6D7EF 22%, #B9DDDB 48%, #CBE5BE 74%, #E8E1A8 100%)',
        }}
      >
        <div className="p-10 sm:p-14 relative flex flex-col">
          <div className="font-mono text-[11.5px] tracking-[0.22em] text-heading/65 font-semibold mb-6">
            AUDIT · 14 DAYS · CONFIDENTIAL · FREE
          </div>
          <h3 className="text-heading text-[clamp(28px,3.4vw,48px)] font-extrabold leading-[1.04] tracking-[-0.028em] max-w-[18ch]">
            See the engine on your own funnel.
          </h3>
          <p className="mt-5 text-heading/80 text-[15.5px] leading-[1.6] max-w-[50ch]">
            We hand you a one-page scorecard, a funnel leak map, and a prioritised fix list with
            dollar values. Yours to keep — take it to any agency or run it yourself.
          </p>
          <ul className="mt-7 grid sm:grid-cols-2 gap-x-6 gap-y-2 max-w-[40ch]">
            {[
              '9-surface scorecard',
              'Funnel leak map',
              'Dollar-priced fixes',
              'No signup, no card',
            ].map((b) => (
              <li
                key={b}
                className="flex items-center gap-2 text-heading/85 text-[14px] font-medium"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-heading"
                  aria-hidden="true"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                {b}
              </li>
            ))}
          </ul>
          <div className="mt-9 flex flex-wrap items-center gap-5">
            <Link to="/free-growth-audit" className="btn-primary">
              Request the audit
              <ArrowIcon />
            </Link>
            <Link
              to="/contact"
              className="text-heading/85 text-[14px] font-semibold underline-offset-4 hover:underline"
            >
              Talk to a growth lead →
            </Link>
          </div>
        </div>
        <div className="relative min-h-[260px] md:min-h-[460px] overflow-hidden">
          <img
            src={imgClosing}
            alt=""
            loading="lazy"
            decoding="async"
            className="absolute inset-0 w-full h-full object-cover opacity-95"
          />
        </div>
      </article>
    </div>
  </section>
);

export default Closing;
