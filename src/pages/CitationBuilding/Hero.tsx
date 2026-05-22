import Breadcrumb from '@/components/Breadcrumb';
import heroImg from '../../assets/local-search.png';
import { COLORS, STATS } from './data';

const Hero = () => (
  <section className="ph-page-head">
    <div className="container-shell">
      <Breadcrumb current="Citation Building" />
      <div className="mt-8 grid lg:grid-cols-12 gap-x-12 gap-y-12 items-end">
        <div className="lg:col-span-7">
          <div className="inline-flex items-center gap-3 px-3 py-1.5 rounded-full" style={{ background: COLORS.mint, color: COLORS.navy }}>
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: COLORS.sage }} />
            <span className="font-mono text-[11.5px] tracking-[0.22em] uppercase font-bold">Local SEO · Authority Signals</span>
          </div>
          <h1 className="mt-7 font-extrabold leading-[1.00] tracking-[-0.036em] text-[clamp(40px,5.8vw,76px)] max-w-[14ch]" style={{ color: COLORS.navy }}>
            One{' '}
            <span className="bg-clip-text text-transparent" style={{ backgroundImage: `linear-gradient(90deg, ${COLORS.sage}, ${COLORS.tan})` }}>
              signature
            </span>
            . Every directory that ranks.
          </h1>
          <p className="mt-7 text-[18px] leading-[1.65] max-w-[56ch]" style={{ color: COLORS.body }}>
            A citation programme that consolidates your name, address and phone into a
            single authoritative record — then keeps it that way across the directories
            search engines actually weight.
          </p>
        </div>
        <div className="lg:col-span-5">
          <div className="relative rounded-[28px] overflow-hidden border aspect-[5/4] shadow-[0_28px_60px_-32px_rgba(45,55,72,0.32)]" style={{ borderColor: 'rgba(26, 36, 56, 0.10)' }}>
            <img src={heroImg} alt="" className="absolute inset-0 w-full h-full object-cover" loading="eager" decoding="async" />
            <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(180deg, rgba(26, 36, 56, 0) 50%, rgba(26, 36, 56, 0.50) 100%)' }} />
            <div className="absolute bottom-5 left-5 right-5">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full backdrop-blur-md" style={{ background: 'rgba(255, 255, 255, 0.20)', border: '1px solid rgba(255, 255, 255, 0.30)' }}>
                <span className="w-1.5 h-1.5 rounded-full bg-white" />
                <span className="font-mono text-[11px] tracking-[0.18em] uppercase text-white font-bold">Live · 47 directories</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div className="mt-12 lg:mt-16 grid sm:grid-cols-3 gap-[1px] rounded-[18px] overflow-hidden border" style={{ borderColor: 'rgba(26, 36, 56, 0.10)', background: 'rgba(26, 36, 56, 0.08)' }}>
        {STATS.map((s) => (
          <div key={s.l} className="bg-white p-6 sm:p-8 flex flex-col gap-2">
            <span className="font-extrabold text-[clamp(28px,3vw,40px)] leading-[1] tracking-[-0.024em]" style={{ color: COLORS.navy }}>{s.v}</span>
            <span className="text-[12px] uppercase tracking-[0.18em] font-bold" style={{ color: COLORS.muted }}>{s.l}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Hero;
