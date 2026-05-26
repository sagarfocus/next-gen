import medspaImg from '@/assets/nextgen-image/Medspas&wellnessimg.png';
import urgentImg from '@/assets/nextgen-image/Urgentcareimg.png';
import dentalImg from '@/assets/nextgen-image/Dentalimg.png';
import mentalImg from '@/assets/nextgen-image/Mentalhealthimg.png';
import dermImg from '@/assets/nextgen-image/Dermatologyimg.png';
import plasticImg from '@/assets/nextgen-image/Plasticsurgeryimg.png';
import primaryImg from '@/assets/nextgen-image/Primarycareimg.png';
import erImg from '@/assets/nextgen-image/Erimg.png';

interface Audience {
  img: string;
  type: string;
  pain: string;
  win: string;
}

const AUDIENCES: Audience[] = [
  {
    img: dentalImg,
    type: 'Dental practices',
    pain: 'Hygiene chairs underbooked',
    win: 'Recall + new-patient flow built in 60 days',
  },
  {
    img: medspaImg,
    type: 'Med spa & aesthetics',
    pain: 'Paid ads burning cash on the wrong audience',
    win: 'CAC cut, package upsell mapped',
  },
  {
    img: urgentImg,
    type: 'Urgent care',
    pain: 'Local pack missing for "near me" searches',
    win: 'GBP rebuild + service-area pages ranked top 3',
  },
  {
    img: primaryImg,
    type: 'Primary care',
    pain: 'New-patient pipeline reliant on word of mouth',
    win: 'Insurance-aware funnel + booking automation',
  },
  {
    img: mentalImg,
    type: 'Mental health',
    pain: 'High click cost, low completion',
    win: 'Intake-friction map + form rewrite',
  },
  {
    img: dermImg,
    type: 'Dermatology',
    pain: 'Cosmetic and medical funnels collide',
    win: 'Split service journeys, separate landing pages',
  },
  {
    img: plasticImg,
    type: 'Plastic surgery',
    pain: 'High-ticket leads ghost after the form',
    win: 'Consult-to-book sequence + recovery proof',
  },
  {
    img: erImg,
    type: 'Specialty & ER',
    pain: 'Brand awareness without intent',
    win: 'Geo-targeted demand capture playbook',
  },
];

const WhoFor = () => (
  <section className="fga-whofor" aria-labelledby="fga-whofor-title">
    <div className="container-shell">
      <header className="fga-section-head">
        <span className="fga-section-tag">Built for</span>
        <h2 id="fga-whofor-title" className="fga-section-h2">
          Eight practice types. One audit framework.
        </h2>
        <p className="fga-section-lede">
          The audit isn&rsquo;t a generic SaaS template. Every recommendation is benchmarked against
          real healthcare practices in your category &mdash; not e-commerce, not B2B SaaS.
        </p>
      </header>

      <div className="fga-whofor-grid">
        {AUDIENCES.map((a) => (
          <article key={a.type} className="fga-whofor-card">
            <div className="fga-whofor-img">
              <img src={a.img} alt={`${a.type} healthcare practice marketing audit example`} loading="lazy" />
              <span className="fga-whofor-overlay" aria-hidden="true" />
            </div>
            <div className="fga-whofor-body">
              <h3 className="fga-whofor-type">{a.type}</h3>
              <div className="fga-whofor-meta">
                <div className="fga-whofor-line">
                  <span className="fga-whofor-tag fga-whofor-tag-pain">Common pain</span>
                  <span>{a.pain}</span>
                </div>
                <div className="fga-whofor-line">
                  <span className="fga-whofor-tag fga-whofor-tag-win">What the audit unlocks</span>
                  <span>{a.win}</span>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default WhoFor;
