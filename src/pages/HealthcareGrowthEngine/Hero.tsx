import { Link } from 'react-router-dom';
import Breadcrumb from '@/components/Breadcrumb';
import { ArrowIcon } from '@/components/icons';
import imgHero from '../../assets/futuristic-healthcare.png';
import { HEAD_META, HERO_PULSE } from './data';

/* ---------- HERO ---------- */
const Hero = () => (
  <section className="ph-page-head">
    <div className="container-shell">
      <Breadcrumb current="Healthcare Growth Engine" />

      <div className="mt-8 grid lg:grid-cols-12 gap-x-12 gap-y-12 items-start">
        {/* Left — headline + dual CTA */}
        <div className="lg:col-span-7">
          <div className="flex items-center gap-3 text-line font-mono text-[12px] tracking-[0.22em] uppercase">
            <span className="inline-block h-[6px] w-[6px] rounded-full bg-accent-soft animate-pulse" />
            Growth Engine · 2026 Edition
          </div>

          <h1 className="mt-6 text-heading font-extrabold leading-[0.96] tracking-[-0.04em] text-[clamp(44px,6.8vw,92px)]">
            Patient growth,
            <br />
            <span className="relative inline-block">
              <span className="text-line">engineered</span>
              <span
                className="absolute -bottom-1 left-0 right-0 h-[3px] bg-line/30"
                aria-hidden="true"
              />
            </span>
            .
          </h1>

          <p className="mt-7 text-body text-[17px] leading-[1.65] max-w-[58ch]">
            One integrated system across SEO, paid media, and automation — instrumented end-to-end,
            reviewed weekly, tuned for the economics of a clinic. Built for operators who want a
            number, not a deck.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Link to="/free-growth-audit" className="btn-primary">
              Request the free audit
              <ArrowIcon />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-[10px] border border-line-faint text-heading text-sm font-semibold hover:border-line hover:-translate-y-px transition"
            >
              See the channels
            </Link>
            <span className="text-muted text-[13px]">
              From <strong className="text-heading font-semibold">$2,500/mo</strong> · No 12-month
              lock-in
            </span>
          </div>

          {/* Pulse strip — live KPI snapshot */}
          <div className="mt-10 grid grid-cols-3 gap-px bg-line-faint border border-line-faint rounded-[14px] overflow-hidden">
            {HERO_PULSE.map((p) => (
              <div key={p.k} className="bg-bg px-5 py-4 flex flex-col gap-1">
                <span className="text-[11px] uppercase tracking-[0.18em] font-semibold text-muted">
                  {p.k}
                </span>
                <span className="flex items-baseline gap-2">
                  <span className="text-heading text-[clamp(22px,2.2vw,30px)] font-extrabold tracking-[-0.02em]">
                    {p.v}
                  </span>
                  <span
                    className={`text-[11px] font-bold uppercase tracking-[0.12em] ${
                      p.dir === 'up' ? 'text-[#2F855A]' : 'text-line'
                    }`}
                  >
                    {p.dir === 'up' ? '▲' : '▼'} yoy
                  </span>
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right — visual + meta */}
        <div className="lg:col-span-5">
          <div className="relative aspect-[5/6] rounded-[20px] overflow-hidden border border-line-faint bg-bg-soft">
            <img
              src={imgHero}
              alt="Healthcare growth dashboard"
              loading="eager"
              decoding="async"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-heading/85 via-heading/40 to-transparent">
              <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-white/70 mb-2">
                Live dashboard · sample
              </div>
              <div className="text-white text-[15px] font-semibold leading-snug max-w-[28ch]">
                Every booked visit traced back to the surface that produced it.
              </div>
            </div>
            <span className="absolute top-4 left-4 inline-flex items-center gap-2 px-2.5 py-1.5 rounded-md bg-white/95 backdrop-blur font-mono text-[11px] tracking-[0.18em] text-heading font-bold">
              <span className="h-1.5 w-1.5 rounded-full bg-accent-soft" />
              LIVE
            </span>
          </div>

          {/* Meta rail */}
          <div className="mt-6 border-t-2 border-heading">
            {HEAD_META.map((row) => (
              <div
                key={row.label}
                className="grid grid-cols-[1fr_1.4fr] py-2.5 border-b border-line-faint text-[13.5px]"
              >
                <span className="text-muted font-medium">{row.label}</span>
                <span className="text-heading font-semibold text-right">{row.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
