import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

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
  description: string;
  services: string[];
  metric: { v: string; l: string };
  ctaTo: string;
}

const ROWS: IndustryRow[] = [
  {
    label: 'Dental',
    meta: 'New patient acquisition & recall',
    image: dentalImg,
    description:
      'Patient acquisition for general + specialty dental practices. We engineer recall and reactivation alongside new-patient flow so chairs stay full year-round, not just during back-to-school season.',
    services: [
      'Local SEO + GBP for clinic clusters',
      'Recall + reactivation automation',
      'Treatment-bundle landing pages',
      'Review velocity engine',
      'Insurance + financing intake flows',
    ],
    metric: { v: '+47%', l: 'New patient bookings, 90d' },
    ctaTo: '/industries/clinics',
  },
  {
    label: 'Urgent Care',
    meta: 'Walk-in volume & reputation',
    image: urgentCareImg,
    description:
      'Walk-in clinics live and die on volume. We build the reputation systems, wait-time transparency, and intent-aware paid funnels that keep your locations full all year — not just during flu season.',
    services: [
      'Wait-time + queue transparency pages',
      'Reputation + review velocity engine',
      'Same-day intent paid campaigns',
      'GBP + service-area page network',
      'After-hours intake automation',
    ],
    metric: { v: '+92%', l: 'Same-day bookings, 6mo' },
    ctaTo: '/industries/clinics',
  },
  {
    label: 'MedSpa',
    meta: 'Aesthetic conversions & LTV',
    image: medspaImg,
    description:
      'MedSpas earn their margin on the second and third visit, not the first. We model paid acquisition around lifetime value, then layer the retention sequences and loyalty mechanics that turn one-off bookings into multi-year patient relationships.',
    services: [
      'LTV-modelled paid acquisition',
      'Social-led lead generation',
      'Membership + loyalty programmes',
      'Aftercare + recall automation',
      'Treatment-bundle creative + landing pages',
    ],
    metric: { v: '+62%', l: 'AOV, six months' },
    ctaTo: '/industries/medspas',
  },
  {
    label: 'Freestanding ER',
    meta: 'High-acuity trauma keywords',
    image: freestandingErImg,
    description:
      "Emergency-care acquisition isn't optimised paid search — it's a closed loop of clinical intent, payer-mix routing, and overflow capture from hospital partners. We rebuild that loop end-to-end so every booked visit moves revenue.",
    services: [
      'Trauma intent SEO + GBP',
      'Wait-time landing pages',
      'Insurance verification flows',
      'Geo-fenced display + connected TV',
      'EmergencyMedicalService schema',
    ],
    metric: { v: '+318%', l: 'Booked visits, 90d' },
    ctaTo: '/industries/specialty-emergency',
  },
  {
    label: 'Mental Health',
    meta: 'Compliant, sensitive lead-gen',
    image: mentalHealthImg,
    description:
      'Mental health acquisition that respects intent. Compliant, sensitive lead-gen flows that prioritise the patient relationship over click-rate optimisation — and route prospective patients to the right modality on the first touch.',
    services: [
      'HIPAA-aware paid acquisition',
      'Modality-specific landing pages',
      'Anonymous-friendly inquiry flows',
      'Insurance + sliding-scale intake',
      'Provider-match recommendation engines',
    ],
    metric: { v: '+58%', l: 'Qualified inquiries, 6mo' },
    ctaTo: '/industries/clinics',
  },
  {
    label: 'Primary Care',
    meta: 'Annual visits & insurance match',
    image: primaryCareImg,
    description:
      'Panel growth and payer-mix optimisation. We grow your panel with the patients your panel actually needs — by payer, by zip, by visit type. Volume that lifts revenue, not just utilisation.',
    services: [
      'Panel-growth campaigns',
      'Payer-mix landing pages',
      'Annual wellness funnels',
      'Same-day-visit ads',
      'Care-gap closure flows',
    ],
    metric: { v: '+24%', l: 'Commercial payer mix shift' },
    ctaTo: '/industries/clinics',
  },
  {
    label: 'Chiropractic',
    meta: 'Pain-point & injury leads',
    image: chiropracticImg,
    description:
      'Pain-point and injury-led acquisition. We map the patient journey from the moment back pain hits Google to the first appointment confirmation — and engineer the funnels that close in days, not weeks.',
    services: [
      'Pain + injury intent SEO',
      'Auto-injury claim landing pages',
      'Membership + wellness plan funnels',
      'Same-week appointment flows',
      'Review velocity for trust-driven bookings',
    ],
    metric: { v: '+71%', l: 'New patient bookings, 90d' },
    ctaTo: '/industries/clinics',
  },
  {
    label: 'Plastic Surgery',
    meta: 'High-ticket consult acquisition',
    image: plasticSurgeryImg,
    description:
      'High-ticket consult acquisition with a long consideration window. We engineer the nurture sequences and trust signals that close patients who research for months — without dropping the consult-to-procedure rate.',
    services: [
      'Procedure-specific paid acquisition',
      'Long-form education content',
      'Consultation booking funnels',
      'Financing + payment plan flows',
      'Before/after gallery systems',
    ],
    metric: { v: '+44%', l: 'Consult-to-procedure rate' },
    ctaTo: '/industries/medspas',
  },
  {
    label: 'Ophthalmology',
    meta: 'LASIK & specialty leads',
    image: ophthalmologyImg,
    description:
      "LASIK and specialty leads. We separate elective surgical acquisition from routine eye-care growth so neither cannibalises the other — and route candidates by clinical fit, not just click intent.",
    services: [
      'LASIK candidate scoring + paid acquisition',
      'Specialty referral landing pages',
      'Insurance + self-pay routing',
      'Surgical consultation funnels',
      'Post-procedure recall automation',
    ],
    metric: { v: '+39%', l: 'Qualified LASIK consults' },
    ctaTo: '/industries/specialty-emergency',
  },
  {
    label: 'Dermatology',
    meta: 'Cosmetic + medical hybrid',
    image: dermatologyImg,
    description:
      "Cosmetic and medical dermatology acquisition under one roof. We route patients by intent so cosmetic leads don't displace medical capacity — and your providers see the patient mix they're built for.",
    services: [
      'Cosmetic-vs-medical intent routing',
      'Skin condition landing pages',
      'Aesthetic membership programmes',
      'Mohs + specialty referral flows',
      'Insurance verification automation',
    ],
    metric: { v: '+53%', l: 'Cosmetic procedure bookings' },
    ctaTo: '/industries/clinics',
  },
];

const AllIndustries = () => {
  const [modalIdx, setModalIdx] = useState<number | null>(null);
  const modalRow = modalIdx !== null ? ROWS[modalIdx] : null;

  useEffect(() => {
    if (modalIdx === null) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setModalIdx(null);
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', onKey);
    };
  }, [modalIdx]);

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
          {ROWS.map((row, i) => (
            <button
              key={row.label}
              type="button"
              className="all-ind-row"
              aria-haspopup="dialog"
              aria-label={`View details for ${row.label}`}
              onClick={() => setModalIdx(i)}
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
            </button>
          ))}
        </div>
      </div>

      {modalRow !== null && modalIdx !== null && (
        <div
          className="ow-ind-modal"
          role="dialog"
          aria-modal="true"
          aria-labelledby="all-ind-modal-title"
          onClick={() => setModalIdx(null)}
        >
          <div className="ow-ind-modal-card" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="ow-ind-modal-close"
              onClick={() => setModalIdx(null)}
              aria-label="Close details"
            >
              <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="6" y1="6" x2="18" y2="18" />
                <line x1="6" y1="18" x2="18" y2="6" />
              </svg>
            </button>

            <div className="ow-ind-modal-art" aria-hidden="true">
              <img src={modalRow.image} alt="" />
              <div className="ow-ind-modal-art-shade" />
              <span className="ow-ind-modal-num">
                {String(modalIdx + 1).padStart(2, '0')} / {String(ROWS.length).padStart(2, '0')}
              </span>
            </div>

            <div className="ow-ind-modal-body">
              <span className="ow-ind-modal-tag">Industry · Healthcare</span>
              <h2 id="all-ind-modal-title" className="ow-ind-modal-title">{modalRow.label}</h2>
              <p className="ow-ind-modal-blurb">{modalRow.meta}</p>
              <p className="ow-ind-modal-desc">{modalRow.description}</p>

              <div className="ow-ind-modal-services">
                <span className="ow-ind-modal-subtag">What we ship</span>
                <ul>
                  {modalRow.services.map((s) => (
                    <li key={s}>
                      <svg width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      {s}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="ow-ind-modal-foot">
                <div className="ow-ind-modal-metric">
                  <strong>{modalRow.metric.v}</strong>
                  <span>{modalRow.metric.l}</span>
                </div>
                <Link to={modalRow.ctaTo} className="ow-ind-modal-cta">
                  Talk to us about {modalRow.label}
                  <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default AllIndustries;
