import urgentCareImg from '../../assets/nextgen-image/Urgentcareimg.png';
import medspaImg from '../../assets/nextgen-image/Medspas&wellnessimg.png';
import freestandingErImg from '../../assets/nextgen-image/Erimg.png';
import dentalImg from '../../assets/nextgen-image/Dentalimg.png';
import mentalHealthImg from '../../assets/nextgen-image/Mentalhealthimg.png';
import primaryCareImg from '../../assets/nextgen-image/Primarycareimg.png';
import chiropracticImg from '../../assets/nextgen-image/Chiropracticimg.png';
import plasticSurgeryImg from '../../assets/nextgen-image/Plasticsurgeryimg.png';
import ophthalmologyImg from '../../assets/nextgen-image/Opthalmologyimg.png';
import dermatologyImg from '../../assets/nextgen-image/Dermatologyimg.png';

export interface IndustryFAQ {
  q: string;
  a: string;
}

export interface IndustryDetailEntry {
  slug: string;
  label: string;
  meta: string;
  image: string;
  description: string;
  longBody: string[];
  services: string[];
  metric: { v: string; l: string };
  ctaTo: string;
  faqs: IndustryFAQ[];
}

export const INDUSTRY_DETAIL_ENTRIES: IndustryDetailEntry[] = [
  {
    slug: 'dental',
    label: 'Dental',
    meta: 'New patient acquisition & recall',
    image: dentalImg,
    description:
      'Patient acquisition for general + specialty dental practices. We engineer recall and reactivation alongside new-patient flow so chairs stay full year-round, not just during back-to-school season.',
    longBody: [
      'Dental marketing wins on two fronts at once: new-patient acquisition and the dormant-patient base sitting in your PMS. Most practices over-invest in the first and quietly leak the second, then wonder why chair utilisation never holds.',
      'We build for both. Local SEO and GBP tuned per-office so each location ranks on its own catchment without cannibalising the rest. Recall + reactivation automation that brings the lapsed patient back without sending the cadence the patient base resents.',
      'The result is a dental practice that fills the schedule from two sides - and a per-office cost-per-patient that compounds down as the recall engine matures.',
    ],
    services: [
      'Local SEO + GBP for clinic clusters',
      'Recall + reactivation automation',
      'Treatment-bundle landing pages',
      'Review velocity engine',
      'Insurance + financing intake flows',
    ],
    metric: { v: '+47%', l: 'New patient bookings, 90d' },
    ctaTo: '/industries/clinics',
    faqs: [
      {
        q: 'Does this work for a solo office?',
        a: 'Yes - solo offices typically see the fastest payback because the recall layer activates a base that already exists. Networks layer on the brand and per-location SEO work that scales the same engine.',
      },
      {
        q: 'Will the recall feel pushy?',
        a: "It is cadence-aware and respects the patient's prior engagement. Reminders are written like the front desk would, if the front desk had time - not like a marketing template.",
      },
    ],
  },
  {
    slug: 'urgent-care',
    label: 'Urgent Care',
    meta: 'Walk-in volume & reputation',
    image: urgentCareImg,
    description:
      'Walk-in clinics live and die on volume. We build the reputation systems, wait-time transparency, and intent-aware paid funnels that keep your locations full all year - not just during flu season.',
    longBody: [
      "Urgent care is the most volume-sensitive vertical in healthcare marketing. The cost structure assumes a busy clinic, and a quiet week burns the entire month's margin.",
      'We build the systems that hold volume across seasonality. Wait-time transparency pages that win the comparison shop. A review velocity engine that keeps your rating ahead of the chain across town. After-hours paid that captures the 8pm parent before the national landing page does.',
      'The result is a clinic that holds its baseline through flu season and the slow months alike - and a cost per walk-in that drops as the reputation engine compounds.',
    ],
    services: [
      'Wait-time + queue transparency pages',
      'Reputation + review velocity engine',
      'Same-day intent paid campaigns',
      'GBP + service-area page network',
      'After-hours intake automation',
    ],
    metric: { v: '+92%', l: 'Same-day bookings, 6mo' },
    ctaTo: '/industries/clinics',
    faqs: [
      {
        q: 'Can you compete with national chains?',
        a: "Yes - by winning on local detail. ETAs, in-network specifics, parking, after-hours phone. A national landing page can't match it; a properly tuned local presence wins.",
      },
      {
        q: 'How fast until volume moves?',
        a: 'Most urgent-care clients see same-day booking volume shift within the first three weeks, with the lower cost-per-walk-in holding from month two onward.',
      },
    ],
  },
  {
    slug: 'medspa',
    label: 'MedSpa',
    meta: 'Aesthetic conversions & LTV',
    image: medspaImg,
    description:
      'MedSpas earn their margin on the second and third visit, not the first. We model paid acquisition around lifetime value, then layer the retention sequences and loyalty mechanics that turn one-off bookings into multi-year patient relationships.',
    longBody: [
      'Aesthetics is a lifetime-value game disguised as a first-visit market. Practices that build for the discount-driven first visit train the patient base they end up regretting six months later.',
      'We re-price acquisition around LTV. Memberships, treatment bundles, and financing flows replace one-off promo offers as the primary new-patient route. Retention sequences hold the second and third visit - which is where the margin actually lives.',
      'The result is a medspa that compounds across seasons instead of running monthly discount cycles to backfill churn.',
    ],
    services: [
      'LTV-modelled paid acquisition',
      'Social-led lead generation',
      'Membership + loyalty programmes',
      'Aftercare + recall automation',
      'Treatment-bundle creative + landing pages',
    ],
    metric: { v: '+62%', l: 'AOV, six months' },
    ctaTo: '/industries/medspas',
    faqs: [
      {
        q: 'Do we have to drop discount offers entirely?',
        a: 'Discounts move to retention triggers - reactivation, loyalty rewards - rather than first-visit acquisition. The acquisition funnel anchors on financing and bundles instead.',
      },
      {
        q: 'Do you handle social creative?',
        a: 'Yes - we direct shoots, brief edits, and run the iteration loop with platform-policy review on every asset.',
      },
    ],
  },
  {
    slug: 'freestanding-er',
    label: 'Freestanding ER',
    meta: 'High-acuity trauma keywords',
    image: freestandingErImg,
    description:
      "Emergency-care acquisition isn't optimised paid search - it's a closed loop of clinical intent, payer-mix routing, and overflow capture from hospital partners. We rebuild that loop end-to-end so every booked visit moves revenue.",
    longBody: [
      'Freestanding ERs lose money in two ways: paying for impressions that crowd the lobby with non-emergent complaints, and missing the high-acuity searches that map to billable, revenue-positive visits.',
      'We rebuild the acquisition loop around true ED intent. Trauma SEO. Wait-time landing pages. Insurance verification flows that complete before arrival. A GBP profile tuned for the emergent terms.',
      "The result is an ER that fills the slots it has capacity for - including overnight - and stops paying for the traffic it can't bill.",
    ],
    services: [
      'Trauma intent SEO + GBP',
      'Wait-time landing pages',
      'Insurance verification flows',
      'Geo-fenced display + connected TV',
      'EmergencyMedicalService schema',
    ],
    metric: { v: '+318%', l: 'Booked visits, 90d' },
    ctaTo: '/industries/specialty-emergency',
    faqs: [
      {
        q: 'How do you reduce low-acuity traffic?',
        a: 'By targeting clinical-need intent instead of broad emergency-care keywords. Trauma-specific landing pages and a GBP profile tuned for emergent terms self-select the patients you want.',
      },
      {
        q: 'Is the insurance verification HIPAA-safe?',
        a: 'The flow runs under your BAA-covered eligibility tools. We instrument the marketing funnel up to that handoff, not inside it.',
      },
    ],
  },
  {
    slug: 'mental-health',
    label: 'Mental Health',
    meta: 'Compliant, sensitive lead-gen',
    image: mentalHealthImg,
    description:
      'Mental health acquisition that respects intent. Compliant, sensitive lead-gen flows that prioritise the patient relationship over click-rate optimisation - and route prospective patients to the right modality on the first touch.',
    longBody: [
      'Mental health marketing is more about tone than tactics. The patient is anxious, the search is private, and the wrong word at the wrong step sends them back to Google.',
      "We write for the actual person at the actual moment. Modality-specific landing pages. Anonymous-friendly inquiry flows. Insurance and sliding-scale intake that respects the patient's prior research.",
      'The result is a practice that books the right patient on the first touch, without forcing them through a checkout-style funnel that destroys the relationship before it starts.',
    ],
    services: [
      'HIPAA-aware paid acquisition',
      'Modality-specific landing pages',
      'Anonymous-friendly inquiry flows',
      'Insurance + sliding-scale intake',
      'Provider-match recommendation engines',
    ],
    metric: { v: '+58%', l: 'Qualified inquiries, 6mo' },
    ctaTo: '/industries/clinics',
    faqs: [
      {
        q: 'Are crisis-line ads handled differently?',
        a: 'Yes - through an explicit compliance review and only on platforms with documented safety guardrails. They never run on standard engagement optimisation.',
      },
      {
        q: 'How do you protect patient privacy in tracking?',
        a: 'Server-side conversion tracking that strips PHI before any signal leaves your environment. Ad platforms only receive the metadata they need to optimise - never the patient detail.',
      },
    ],
  },
  {
    slug: 'primary-care',
    label: 'Primary Care',
    meta: 'Annual visits & insurance match',
    image: primaryCareImg,
    description:
      'Panel growth and payer-mix optimisation. We grow your panel with the patients your panel actually needs - by payer, by zip, by visit type. Volume that lifts revenue, not just utilisation.',
    longBody: [
      "Primary care marketing is often utilisation marketing - more visits, more visits, more visits - even when the panel doesn't need more volume, it needs better mix.",
      "We model the panel first. Which payers, which zips, which visit types lift revenue per chair-hour. Then we route paid spend and SEO toward the patients that match - and quietly steer the rest to clinics where they're a better fit.",
      'The result is a panel that gets healthier, not just bigger. Annual wellness funnels, same-day-visit ads for capacity gaps, and care-gap closure flows that move the metrics value-based contracts care about.',
    ],
    services: [
      'Panel-growth campaigns',
      'Payer-mix landing pages',
      'Annual wellness funnels',
      'Same-day-visit ads',
      'Care-gap closure flows',
    ],
    metric: { v: '+24%', l: 'Commercial payer mix shift' },
    ctaTo: '/industries/clinics',
    faqs: [
      {
        q: 'Can this work under a value-based contract?',
        a: 'Yes - the campaigns tune to the metrics that matter under the contract: care-gap closure, AWV completion, attribution. Reporting runs against the contract scorecard.',
      },
      {
        q: 'Is payer-mix targeting legal?',
        a: 'Yes - it runs through landing pages and audiences tuned to the zips and demographics that map to the payer mix you need, never through any restricted data.',
      },
    ],
  },
  {
    slug: 'chiropractic',
    label: 'Chiropractic',
    meta: 'Pain-point & injury leads',
    image: chiropracticImg,
    description:
      'Pain-point and injury-led acquisition. We map the patient journey from the moment back pain hits Google to the first appointment confirmation - and engineer the funnels that close in days, not weeks.',
    longBody: [
      'Chiropractic practices win on the first three days of patient consideration. Back pain hits, the search happens, and a decision is made fast. Most practices show up too late, or show up looking generic.',
      'We build for that window. Pain + injury intent SEO. Same-week appointment flows. Auto-injury landing pages for the claim-driven cohort. Review velocity for the trust-driven cohort.',
      'The result is a practice that wins the search the moment it happens - and the membership funnel that holds the patient for the next twelve months.',
    ],
    services: [
      'Pain + injury intent SEO',
      'Auto-injury claim landing pages',
      'Membership + wellness plan funnels',
      'Same-week appointment flows',
      'Review velocity for trust-driven bookings',
    ],
    metric: { v: '+71%', l: 'New patient bookings, 90d' },
    ctaTo: '/industries/clinics',
    faqs: [
      {
        q: 'Do you handle auto-injury leads?',
        a: 'Yes - the claim-driven cohort has its own landing pages, language, and intake flow because it pays differently and needs a different consent layer.',
      },
      {
        q: 'How fast do new patients book?',
        a: 'Most close inside the first 72 hours of search. The funnel is engineered for that window; anything slower is a lost patient.',
      },
    ],
  },
  {
    slug: 'plastic-surgery',
    label: 'Plastic Surgery',
    meta: 'High-ticket consult acquisition',
    image: plasticSurgeryImg,
    description:
      'High-ticket consult acquisition with a long consideration window. We engineer the nurture sequences and trust signals that close patients who research for months - without dropping the consult-to-procedure rate.',
    longBody: [
      'Plastic surgery is the longest consideration window in healthcare. Patients research for months before booking a consult, and most marketing breaks that journey by pushing too hard, too early.',
      'We respect the timeline. Procedure-specific paid acquisition that lands in the right phase. Long-form education content for the research phase. Financing and consultation funnels for the decision phase.',
      'The result is a practice that closes the patients who took six months to decide - without the discount-driven shortcuts that drop the procedure rate.',
    ],
    services: [
      'Procedure-specific paid acquisition',
      'Long-form education content',
      'Consultation booking funnels',
      'Financing + payment plan flows',
      'Before/after gallery systems',
    ],
    metric: { v: '+44%', l: 'Consult-to-procedure rate' },
    ctaTo: '/industries/medspas',
    faqs: [
      {
        q: 'Do you handle before/after photography?',
        a: 'Yes - with explicit patient consent and platform-policy review on every asset. The gallery is a long-term compounding asset; it gets treated that way.',
      },
      {
        q: 'How long are nurture sequences?',
        a: 'They map to the procedure type. A facelift nurture might run 90+ days; a quick injectable consult might run 7. The cadence is calibrated to historical decision timelines.',
      },
    ],
  },
  {
    slug: 'ophthalmology',
    label: 'Ophthalmology',
    meta: 'LASIK & specialty leads',
    image: ophthalmologyImg,
    description:
      'LASIK and specialty leads. We separate elective surgical acquisition from routine eye-care growth so neither cannibalises the other - and route candidates by clinical fit, not just click intent.',
    longBody: [
      'Ophthalmology practices run two businesses at once: routine eye care and elective surgical (LASIK, cataracts, specialty). They have different patient psychologies, different margins, and they cannibalise each other when run on the same funnel.',
      'We split them properly. LASIK candidate scoring routes only the right prospects into the surgical funnel. Specialty referral pages capture the post-cataract and macular-degeneration cohorts. Routine care holds its own SEO and recall layer.',
      'The result is each business growing independently - and a surgical pipeline that closes on clinical fit, not just click intent.',
    ],
    services: [
      'LASIK candidate scoring + paid acquisition',
      'Specialty referral landing pages',
      'Insurance + self-pay routing',
      'Surgical consultation funnels',
      'Post-procedure recall automation',
    ],
    metric: { v: '+39%', l: 'Qualified LASIK consults' },
    ctaTo: '/industries/specialty-emergency',
    faqs: [
      {
        q: 'Does LASIK candidate scoring slow conversion?',
        a: 'It increases conversion by routing unqualified leads to a different funnel. The surgical consult slot is too expensive to fill with non-candidates.',
      },
      {
        q: 'Can routine and surgical share creative?',
        a: 'No - they share brand, never creative. The patient psychology is different enough that one set of creative drags both down.',
      },
    ],
  },
  {
    slug: 'dermatology',
    label: 'Dermatology',
    meta: 'Cosmetic + medical hybrid',
    image: dermatologyImg,
    description:
      "Cosmetic and medical dermatology acquisition under one roof. We route patients by intent so cosmetic leads don't displace medical capacity - and your providers see the patient mix they're built for.",
    longBody: [
      'Dermatology practices that do both cosmetic and medical work face a routing problem: cosmetic queries can drown medical capacity, and medical queries can quietly miss the cosmetic upsell window.',
      'We route patients by intent from the search itself. Cosmetic-vs-medical landing architecture. Mohs and skin-condition referral funnels separate from aesthetic membership programmes.',
      'The result is a practice where the cosmetic margin grows without the medical pipeline drying up - and providers see the patient mix the practice was built around.',
    ],
    services: [
      'Cosmetic-vs-medical intent routing',
      'Skin condition landing pages',
      'Aesthetic membership programmes',
      'Mohs + specialty referral flows',
      'Insurance verification automation',
    ],
    metric: { v: '+53%', l: 'Cosmetic procedure bookings' },
    ctaTo: '/industries/clinics',
    faqs: [
      {
        q: 'How do you separate cosmetic from medical traffic?',
        a: 'At the keyword level first, then through landing pages, then through booking flows. Each layer reinforces the routing so neither pipeline contaminates the other.',
      },
      {
        q: 'Can membership programmes share with the medical side?',
        a: 'No - they run on parallel patient identities. The medical patient may opt into cosmetic over time, but the funnels do not assume it.',
      },
    ],
  },
];

export const findIndustryDetail = (slug: string): IndustryDetailEntry | undefined =>
  INDUSTRY_DETAIL_ENTRIES.find((d) => d.slug === slug);

export const industryDetailHref = (slug: string): string => `/industries/detail/${slug}`;
