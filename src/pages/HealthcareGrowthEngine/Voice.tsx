import imgTestimonial from '../../assets/team-thumbs/Dr-Thompson.png';

/* ---------- VOICE / TESTIMONIAL ---------- */
const Voice = () => (
  <section className="border-t border-line-faint bg-bg">
    <div className="container-shell py-[clamp(64px,8.5vw,120px)]">
      <div className="grid lg:grid-cols-12 gap-x-12 gap-y-10 items-center">
        <div className="lg:col-span-5">
          <figure className="relative rounded-[20px] overflow-hidden border border-line-faint aspect-[4/5] bg-bg-soft">
            <img
              src={imgTestimonial}
              alt="Clinic operator"
              loading="lazy"
              decoding="async"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <figcaption className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-heading/85 to-transparent text-white">
              <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-white/70 mb-1">
                Multi-location · Texas
              </div>
              <div className="text-[15px] font-semibold">Dr. Steven H. Thompson, MD</div>
            </figcaption>
          </figure>
        </div>
        <div className="lg:col-span-7">
          <div className="flex items-baseline gap-3 mb-6">
            <span className="text-line font-mono text-[13px] tracking-[0.18em]">07</span>
            <span className="h-px flex-1 bg-line-soft" />
            <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted">
              Operator voice
            </span>
          </div>
          <svg
            width="40"
            height="32"
            viewBox="0 0 40 32"
            fill="none"
            className="text-line/30 mb-4"
            aria-hidden="true"
          >
            <path
              d="M0 32V18.667C0 8.358 7.611 0 17 0v8c-4.418 0-8 4.776-8 10.667H17V32H0Zm23 0V18.667C23 8.358 30.611 0 40 0v8c-4.418 0-8 4.776-8 10.667H40V32H23Z"
              fill="currentColor"
            />
          </svg>
          <blockquote className="text-heading text-[clamp(22px,2.6vw,34px)] font-bold leading-[1.25] tracking-[-0.02em]">
            We had four agencies in five years. The engine replaced all of them with one number on a
            Monday dashboard. Six months in we&apos;re booking{' '}
            <span className="text-line">61 % more</span> first visits for the same monthly budget.
          </blockquote>
          <div className="mt-8 grid grid-cols-3 gap-px bg-line-faint border border-line-faint rounded-[14px] overflow-hidden max-w-[480px]">
            {[
              { v: '+61%', l: 'first visits' },
              { v: '−42%', l: 'cost / visit' },
              { v: '5.2×', l: 'recall ROI' },
            ].map((m) => (
              <div key={m.l} className="bg-bg px-4 py-3 flex flex-col gap-0.5">
                <span className="text-heading text-[20px] font-extrabold tracking-[-0.02em]">
                  {m.v}
                </span>
                <span className="text-muted text-[10.5px] uppercase tracking-[0.18em] font-semibold">
                  {m.l}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Voice;
