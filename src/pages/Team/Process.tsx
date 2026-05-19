import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import imgDiscovery from '../../assets/analytics and report.png';
import imgRoadmap from '../../assets/strategy planning.png';
import imgBuild from '../../assets/websitedesign.png';
import imgLaunch from '../../assets/paidmedia.png';
import imgCompound from '../../assets/recall+.png';

interface Step {
  num: string;
  phase: string;
  when: string;
  title: string;
  desc: string;
  img: string;
}

const STEPS: Step[] = [
  {
    num: '01',
    phase: 'Discovery',
    when: 'Week 01',
    title: 'Audit the funnel end-to-end.',
    desc: 'Read-only access to GA4, GSC, GBP, the ad accounts, the call platform, and the CRM. We map what is actually happening before we propose a single change.',
    img: imgDiscovery,
  },
  {
    num: '02',
    phase: 'Roadmap',
    when: 'Week 02',
    title: 'Lock the 90-day plan.',
    desc: 'A single page that names the three things that will move revenue this quarter, the team shipping each, and the metric each one will be judged against.',
    img: imgRoadmap,
  },
  {
    num: '03',
    phase: 'Build',
    when: 'Weeks 03 – 06',
    title: 'Ship the systems.',
    desc: 'Tracking rebuilt server-side. Pages, schema, ad creative, automations, and the dashboard go in. One craftsperson per discipline — no juniors, no handoffs.',
    img: imgBuild,
  },
  {
    num: '04',
    phase: 'Launch',
    when: 'Week 07',
    title: 'Go live and calibrate.',
    desc: 'Spend turns on in measured tiers. We hold daily standups for the first two weeks, then a single weekly Loom + live dashboard from there on out.',
    img: imgLaunch,
  },
  {
    num: '05',
    phase: 'Compound',
    when: 'Month 03+',
    title: 'Compound what works.',
    desc: 'Quarterly re-forecasts. Channel mix tilts toward what is paying back. The retainer adapts — every line item earns its place on the next quarter\'s plan.',
    img: imgCompound,
  },
];

const Process = () => {
  return (
    <section className="tm-section tm-process">
      <div className="container-shell">
        <div className="tm-marker">
          <span className="tm-marker-num">04</span>
          <span>Our Process</span>
          <span className="tm-marker-line" />
          <span className="tm-marker-meta">Signing → Shipping</span>
        </div>

        <header className="tm-pc-head">
          <h2 className="tm-pc-h2">
            From handshake <em>to first lift,</em>
            <br />
            in five stages.
          </h2>
          <p className="tm-pc-lede">
            Five stages, week by week.
          </p>
        </header>

        <Swiper
          className="tm-pc-swiper"
          modules={[Navigation, Autoplay]}
          navigation
          loop
          autoplay={{
            delay: 5000,
            pauseOnMouseEnter: true,
            disableOnInteraction: false,
          }}
          slidesPerView={1}
          spaceBetween={16}
          aria-label="Engagement process, five stages"
        >
          {STEPS.map((s) => (
            <SwiperSlide key={s.num} className="tm-pc-slide">
              <div
                className="tm-pc-slide-img"
                style={{ backgroundImage: `url(${s.img})` }}
                aria-hidden="true"
              />
              <div className="tm-pc-slide-shade" aria-hidden="true" />
              <div className="tm-pc-slide-content">
                <span className="tm-pc-slide-phase">
                  <span className="tm-pc-slide-dot" aria-hidden="true" />
                  {s.phase} · {s.when}
                </span>
                <h3 className="tm-pc-slide-title">{s.title}</h3>
                <p className="tm-pc-slide-desc">{s.desc}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Process;
