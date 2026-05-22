import Breadcrumb from '../../components/Breadcrumb';

const Hero = () => (
  <section className="ph-page-head">
    <div className="container-shell">
      <Breadcrumb current="Growth Plan" />
      <div className="mt-8 grid lg:grid-cols-12 gap-x-16 gap-y-8 items-end">
        <div className="lg:col-span-7">
          <div className="text-line font-mono text-[12px] tracking-[0.24em] uppercase">
            The 12-Month Healthcare Growth Plan
          </div>
          <h1 className="mt-7 text-heading font-extrabold leading-[1.02] tracking-[-0.036em] text-[clamp(40px,5.6vw,76px)] max-w-[18ch]">
            One chart.{' '}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  'linear-gradient(90deg, #B38B6D 0%, #8FBC8F 50%, #576DB5 100%)',
              }}
            >
              Twelve months
            </span>
            . No surprises.
          </h1>
        </div>
        <div className="lg:col-span-5">
          <p className="text-body text-[17px] leading-[1.7] max-w-[52ch]">
            A growth plan you can read at a glance. Four phases, twelve months, a single
            trajectory benchmarked against your starting line - engineered for healthcare
            practices and underwritten by SEO, paid, and lifecycle channels working together.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
