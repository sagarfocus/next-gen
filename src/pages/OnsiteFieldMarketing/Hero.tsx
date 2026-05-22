import Breadcrumb from '@/components/Breadcrumb';
import { HEAD_META } from './data';

const Hero = () => (
  <section className="ph-page-head">
    <div className="container-shell">
      <Breadcrumb current="Onsite Field Marketing" />
      <div className="mt-6 grid lg:grid-cols-12 gap-x-12 gap-y-10 items-end">
        <div className="lg:col-span-8">
          <div className="flex items-center gap-3 text-line font-mono text-[12px] tracking-[0.22em] uppercase">
            <span className="inline-block h-[6px] w-[6px] rounded-full bg-accent-soft" />
            Field Ops · Community · B2B
          </div>
          <h1 className="mt-6 text-heading font-extrabold leading-[0.98] tracking-[-0.038em] text-[clamp(44px,6.4vw,86px)]">
            On-the-ground marketing,
            <br />
            <span className="text-line italic">measurably</span>.
          </h1>
          <p className="mt-7 text-body text-[17px] leading-[1.65] max-w-[58ch]">
            Healthcare grows where doors open in person. We run the booth, walk the territory, and
            book the referral lunch - then attribute every lead back to first-visit revenue in your
            dashboard. Field marketing, accountable to the same numbers as paid media.
          </p>
        </div>
        <div className="lg:col-span-4">
          <div className="border-t-2 border-heading">
            {HEAD_META.map((row) => (
              <div
                key={row.label}
                className="grid grid-cols-2 py-3 border-b border-line-faint text-[14px]"
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
