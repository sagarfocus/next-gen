import dentalImg from '../../assets/dental.png';
import urgentCareImg from "../../assets/urgentcare'.png";
import medspaImg from '../../assets/medddsspa.png';
import freestandingErImg from '../../assets/freestanding er.png';
import mentalHealthImg from '../../assets/mental health.png';
import primaryCareImg from "../../assets/primary care'.png";
import chiropracticImg from '../../assets/chiropratic.png';
import plasticSurgeryImg from '../../assets/plasticsurgery.png';
import ophthalmologyImg from '../../assets/opthalmology.png';
import dermatologyImg from '../../assets/dermatology.png';

interface IndustryRow {
  label: string;
  meta: string;
  image: string;
}

const ROWS: IndustryRow[] = [
  { label: 'Dental',           meta: 'New patient acquisition & recall',     image: dentalImg },
  { label: 'Urgent Care',      meta: 'Walk-in volume & reputation',          image: urgentCareImg },
  { label: 'MedSpa',           meta: 'Aesthetic conversions & LTV',          image: medspaImg },
  { label: 'Freestanding ER',  meta: 'High-acuity trauma keywords',          image: freestandingErImg },
  { label: 'Mental Health',    meta: 'Compliant, sensitive lead-gen',        image: mentalHealthImg },
  { label: 'Primary Care',     meta: 'Annual visits & insurance match',      image: primaryCareImg },
  { label: 'Chiropractic',     meta: 'Pain-point & injury leads',            image: chiropracticImg },
  { label: 'Plastic Surgery',  meta: 'High-ticket consult acquisition',      image: plasticSurgeryImg },
  { label: 'Ophthalmology',    meta: 'LASIK & specialty leads',              image: ophthalmologyImg },
  { label: 'Dermatology',      meta: 'Cosmetic + medical hybrid',            image: dermatologyImg },
];

const AllIndustries = () => {
  return (
    <section className="all-ind" id="all-industries" aria-labelledby="all-ind-title">
      <div className="container-shell">
        <div className="all-ind-head">
          <span className="all-ind-eyebrow">All Industries</span>
          <h2 id="all-ind-title" className="all-ind-h2">
            Explore All Industries We Serve.
          </h2>
          <p className="all-ind-sub">
            Deep-dive into our tailored marketing strategies for each healthcare
            specialty &mdash; from urgent care to plastic surgery.
          </p>
          <div className="all-ind-count">
            <span className="num">10 Specialties</span>
            <span className="bar" />
            <span>Tailored Playbooks</span>
          </div>
        </div>

        <div className="all-ind-list">
          {ROWS.map((row) => (
            <article
              key={row.label}
              className="all-ind-row"
            >
              <div className="all-ind-img">
                <img
                  src={row.image}
                  alt={row.label}
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="all-ind-body">
                <div className="all-ind-text">
                  <span className="label">{row.label}</span>
                  <span className="meta">{row.meta}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllIndustries;
