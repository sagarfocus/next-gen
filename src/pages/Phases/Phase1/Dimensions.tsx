import { TechSeoSvg, SchemaSvg, GbpSvg, PaidSvg, CroSvg, DeskSvg } from './helpers';

interface DimProps {
  num: string;
  title: string;
  text: string;
  signals: string[];
  illustration: React.ReactNode;
}
const Dim = ({ num, title, text, signals, illustration }: DimProps) => (
  <article className="ph1-dim">
    <span className="num">/ {num}</span>
    <div className="ill" aria-hidden="true">
      {illustration}
    </div>
    <h3 dangerouslySetInnerHTML={{ __html: title }} />
    <p dangerouslySetInnerHTML={{ __html: text }} />
    <div className="signals">
      <span className="lbl">Signals tracked</span>
      <ul>
        {signals.map((s) => (
          <li key={s}>{s}</li>
        ))}
      </ul>
    </div>
  </article>
);

const Dimensions = () => (
  <>
    <div className="ph1-section-label">
      <span>/ 02 - The Audit</span>
      <h2>
        Six dimensions. Each one a documented source of patient leak - or a documented growth lever.
      </h2>
    </div>

    <div className="ph1-dims">
      <Dim
        num="01"
        title="Technical SEO &amp; performance"
        text="Core Web Vitals, crawl health, mobile rendering, and the structural fixes Google rewards first."
        signals={['LCP', 'CLS', 'INP', 'Indexation', 'robots.txt']}
        illustration={<TechSeoSvg />}
      />
      <Dim
        num="02"
        title="On-page &amp; schema"
        text="Service-page coverage, title/H1 alignment to intent, and structured data your competitors are quietly winning with."
        signals={['MedicalClinic', 'FAQPage', 'BreadcrumbList', 'Title CTR']}
        illustration={<SchemaSvg />}
      />
      <Dim
        num="03"
        title="Google Business Profile"
        text="Category accuracy, photo cadence, review velocity, and the local-pack gap to the leader in your radius."
        signals={['Category match', 'NAP consistency', 'Review delta', 'Q&A hygiene']}
        illustration={<GbpSvg />}
      />
      <Dim
        num="04"
        title="Paid media efficiency"
        text="Wasted spend, audience drift, creative fatigue, and the CPL gap between your account and benchmark for your service mix."
        signals={['Quality Score', 'Search-term waste', 'Conv. tracking', 'Audience overlap']}
        illustration={<PaidSvg />}
      />
      <Dim
        num="05"
        title="Conversion path"
        text="The friction between &lsquo;clicked the ad&rsquo; and &lsquo;booked the appointment&rsquo; - measured per service line."
        signals={['Form drop-off', 'Page CR%', 'CTA contrast', 'Trust signals']}
        illustration={<CroSvg />}
      />
      <Dim
        num="06"
        title="Front-desk capacity"
        text="Call answer rate, response time, missed-call follow-up, and the percentage of leads lost between &lsquo;ring&rsquo; and &lsquo;booked.&rsquo;"
        signals={['Answer %', 'Avg. response', 'Booking ratio', 'After-hours leak']}
        illustration={<DeskSvg />}
      />
    </div>
  </>
);

export default Dimensions;
