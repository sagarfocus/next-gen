import Breadcrumb from '@/components/Breadcrumb';
import { HEAD_META } from './data';

const Hero = () => (
  <section className="ph-page-head">
    <div className="container-shell">
      <Breadcrumb current="Reviews & Reputation" />
      <div className="mt-6 grid lg:grid-cols-12 gap-x-12 gap-y-10 items-end">
        <div className="lg:col-span-7">
          <div className="flex items-center gap-3 text-line font-mono text-[12px] tracking-[0.22em] uppercase">
            <span className="inline-block h-[6px] w-[6px] rounded-full bg-accent-soft" />
            Reviews · Reputation · Local Pack
          </div>
          <h1 className="mt-6 text-heading font-extrabold leading-[0.98] tracking-[-0.038em] text-[clamp(44px,6.4vw,86px)]">
            5-star is a<br />
            <span className="text-line">system</span>, not luck.
          </h1>
          <p className="mt-7 text-body text-[17px] leading-[1.65] max-w-[58ch]">
            A reputation engine that collects, sorts and replies — without exposing PHI, without
            burning patient trust, without breaking platform rules. The same loop that lifts Google
            Local Pack ranking on a 90-day curve.
          </p>
        </div>
        <div className="lg:col-span-5">
          <div className="border-t-2 border-heading">
            {HEAD_META.map((row) => (
              <div
                key={row.label}
                className="grid grid-cols-2 py-3 border-b border-line-faint text-[13px]"
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
