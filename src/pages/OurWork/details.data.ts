import type { ReactNode } from 'react';
import { createElement } from 'react';
import imgER from '../../assets/freestanding-emergency.png';
import imgUrgent from '../../assets/urgent-care.png';
import imgMedspa from '../../assets/medspa.png';
import imgDental from '../../assets/dental.png';
import imgMental from '../../assets/mental-health.png';
import imgPediatrics from '../../assets/dermatology.png';
import imgChiro from '../../assets/chiropractic.png';
import imgPrimary from '../../assets/primary-care.png';
import imgNetworks from '../../assets/medical-automation.png';
import imgLocalSearch from '../../assets/local-search.png';
import imgBookingWeb from '../../assets/booking-first-website.png';
import imgFrontDeskAutomation from '../../assets/automation-front-desk.png';
import imgFeatER from '../../assets/er.png';
import imgFeatSpaMed from '../../assets/med-spa-banner.png';
import imgFeatDental from '../../assets/dental-detail.png';
import imgPaidMedia from '../../assets/paid-media.png';
import imgPatientIdentities from '../../assets/patient-identities.png';
import imgRecall from '../../assets/recall-plus.png';

export type DetailKind = 'engagement' | 'industry' | 'capability';

export interface DetailFAQ {
  q: string;
  a: string;
}

export interface DetailEntry {
  kind: DetailKind;
  slug: string;
  img: string;
  eyebrow: string;
  title: string;
  blurb: string;
  description: string;
  longBody: string[];
  services: string[];
  serviceLabel: string;
  metric: { v: string; l: string };
  ctaText: string;
  ctaTo: string;
  faqs: DetailFAQ[];
}

const svg = (children: ReactNode) =>
  createElement(
    'svg',
    {
      viewBox: '0 0 24 24',
      fill: 'none',
      stroke: 'currentColor',
      strokeWidth: 1.8,
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      'aria-hidden': true,
    },
    children
  );

export const INDUSTRY_ICONS: Record<string, ReactNode> = {
  'emergency-rooms': svg(createElement('path', { d: 'M22 12h-4l-3 9L9 3l-3 9H2' })),
  'urgent-care': svg([
    createElement('circle', { key: 'c', cx: 12, cy: 12, r: 9 }),
    createElement('path', { key: 'p', d: 'M12 7v10M7 12h10' }),
  ]),
  'medspas-aesthetics': svg(
    createElement('path', {
      d: 'M12 2l2.3 5.3L20 9l-4 4.2L17 20l-5-2.8L7 20l1-6.8L4 9l5.7-1.7L12 2z',
    })
  ),
  'dental-practices': svg(
    createElement('path', {
      d: 'M7 3c-2 0-3 1.5-3 4 0 3 1 5 1.5 8s1 7 2.5 7c1 0 1-3 2-5s1.5-2 2 0 1 5 2 5c1.5 0 2-4 2.5-7s1.5-5 1.5-8c0-2.5-1-4-3-4-1.5 0-2.5 1-3.5 1S8.5 3 7 3z',
    })
  ),
  'mental-health': svg([
    createElement('path', { key: '1', d: 'M9 21V9a3 3 0 0 1 3-3 3 3 0 0 1 3 3v12' }),
    createElement('path', { key: '2', d: 'M5 14a4 4 0 0 1 0-8 4 4 0 0 1 4-4' }),
    createElement('path', { key: '3', d: 'M19 14a4 4 0 0 0 0-8 4 4 0 0 0-4-4' }),
  ]),
  pediatrics: svg([
    createElement('circle', { key: 'c', cx: 12, cy: 8, r: 4 }),
    createElement('path', { key: 'p', d: 'M5 21a7 7 0 0 1 14 0' }),
  ]),
  chiropractic: svg([
    createElement('path', { key: '1', d: 'M12 2v20' }),
    createElement('path', { key: '2', d: 'M8 5h8M7 9h10M6 13h12M7 17h10M8 21h8' }),
  ]),
  'primary-care': svg(createElement('path', { d: 'M3 12h4l3-8 4 16 3-8h4' })),
  'healthcare-networks': svg([
    createElement('circle', { key: 'c1', cx: 12, cy: 12, r: 2.5 }),
    createElement('circle', { key: 'c2', cx: 5, cy: 5, r: 2 }),
    createElement('circle', { key: 'c3', cx: 19, cy: 5, r: 2 }),
    createElement('circle', { key: 'c4', cx: 5, cy: 19, r: 2 }),
    createElement('circle', { key: 'c5', cx: 19, cy: 19, r: 2 }),
    createElement('path', { key: 'p', d: 'M7 6.5l3 4M17 6.5l-3 4M7 17.5l3-4M17 17.5l-3-4' }),
  ]),
};

/* ============================================================
   ENGAGEMENTS - featured case studies on /our-work
   ============================================================ */
export const ENGAGEMENT_DETAILS: DetailEntry[] = [
  {
    kind: 'engagement',
    slug: 'suncrest-freestanding-er',
    img: imgFeatER,
    eyebrow: 'Engagement · Emergency Room',
    title: 'SunCrest Freestanding ER',
    blurb: 'Filled overnight slots without paying for non-emergent traffic.',
    description:
      'A 24/7 freestanding ER bleeding overnight capacity to non-emergent traffic and chasing impressions across broken ad accounts. We rebuilt the funnel around true ED intent - chest pain, trauma, kid-with-a-fever - and routed paid spend to the patients who actually convert on revenue.',
    longBody: [
      'When SunCrest came to us, the practice was paying premium CPMs to fill overnight slots with low-acuity walk-ins. The funnel was inverted: nights with the highest capacity were the cheapest spend, but the campaigns chased daytime impressions where the room was already full.',
      'Our team rebuilt the acquisition stack around the ED-intent moments that map to billable, revenue-positive visits. We mapped the wait-time UX, rebuilt the GBP profile around trauma and emergent search terms, and replaced the broad-match keyword bleed with a tightly scoped portfolio of clinical-need landing pages each with insurance verification baked in.',
      'Within ninety days the practice booked 318% more emergency visits, the overnight occupancy rate climbed past target for the first time since opening, and the cost per booked visit dropped to a third of the previous quarter.',
    ],
    services: [
      'Trauma intent SEO + GBP rebuild',
      'Wait-time + insurance landing pages',
      'Geo-fenced display + connected TV',
      'EmergencyMedicalService schema',
      'Insurance verification automation',
    ],
    serviceLabel: 'What we delivered',
    metric: { v: '+318%', l: 'Booked visits, 90d' },
    ctaText: 'Talk to us about Emergency Room',
    ctaTo: '/contact',
    faqs: [
      {
        q: 'How long until we saw lift?',
        a: 'The first measurable shift in booked overnight visits hit at the 30-day mark, with the +318% peak realised at day 90 once the GBP velocity, schema, and insurance pages had fully indexed.',
      },
      {
        q: 'Did paid spend go up?',
        a: 'Total spend dropped while booked visits climbed. The campaigns moved from broad CPM-chasing to intent-matched search and geo-fenced display so each dollar mapped to a billable encounter.',
      },
      {
        q: 'Can this replicate at multi-location ER networks?',
        a: "Yes - the same playbook scales by location with templated landing pages, per-site GBP, and centralised insurance-verification automation that respects the network's shared BAA.",
      },
    ],
  },
  {
    kind: 'engagement',
    slug: 'vitalspa-aesthetics',
    img: imgFeatSpaMed,
    eyebrow: 'Engagement · Medspa',
    title: 'VitalSpa Aesthetics',
    blurb: 'Re-priced the launch funnel around lifetime value, not first visit.',
    description:
      'A multi-treatment medspa scaling past founder-led growth. We re-priced the entire launch funnel around lifetime value instead of first-visit revenue, then layered loyalty + financing flows that compound - instead of discount cycles that train the wrong behaviour.',
    longBody: [
      'VitalSpa had outgrown its founder-led acquisition. Most ads ran first-visit discount offers and built a patient base trained to chase the next promo. AOV stagnated. Churn was hidden by topline growth.',
      'We rebuilt the funnel around the lifetime value of the highest-margin treatments and routed acquisition spend toward audiences with real reorder behaviour. Loyalty + financing-aware landing flows replaced discount offers as the primary new-patient route.',
      'Over six months the average order value lifted by 62%, the membership programme moved from a side product to the dominant booking channel, and the practice rebuilt its forecast on retention metrics instead of acquisition volume.',
    ],
    services: [
      'LTV-modelled paid acquisition',
      'Membership + loyalty programme',
      'Financing-aware landing flows',
      'Treatment-bundle ad creative',
      'Aftercare + recall automation',
    ],
    serviceLabel: 'What we delivered',
    metric: { v: '+62%', l: 'AOV, six months' },
    ctaText: 'Talk to us about Medspa',
    ctaTo: '/contact',
    faqs: [
      {
        q: 'Did discount offers go away entirely?',
        a: 'Discounts moved to retention triggers - reactivation, loyalty rewards - instead of acquisition. The first-visit funnel was rebuilt around financing and treatment bundles that anchor higher LTV from day one.',
      },
      {
        q: 'How is LTV modelled?',
        a: 'We score each treatment by margin, reorder window, and add-on attach rate, then route paid spend toward audiences that historically convert on the highest-LTV combinations.',
      },
      {
        q: 'Is this dependent on the practice having an existing CRM?',
        a: "Not strictly. We onboard CRM data when it exists and build the segments fresh when it doesn't - the segmentation matters more than the legacy data.",
      },
    ],
  },
  {
    kind: 'engagement',
    slug: 'northlake-dental',
    img: imgFeatDental,
    eyebrow: 'Engagement · Dental Network',
    title: 'NorthLake Dental',
    blurb: 'Unified seven locations under one search + brand operating system.',
    description:
      'Seven dental locations operating as seven brands. We unified them under one search + brand operating system, then engineered cross-location attribution so each clinic could see its own pipeline without drowning in the others’ noise.',
    longBody: [
      'NorthLake had grown by acquisition. Seven offices, seven websites, seven Google profiles, seven sets of pricing pages with no shared brand voice. Local rankings cannibalised each other and reporting was a monthly archaeology project.',
      "We unified the seven offices under one brand operating system with shared templates, shared schema, and a per-location GBP strategy that pushed each clinic on the local terms it deserved - without overlapping the neighbouring office's territory.",
      'A single attribution layer replaced the patchwork of GA properties and let each office see its own pipeline cleanly. Cost per new patient dropped by 48% in eight months, and the leadership team finally had one dashboard that mapped paid spend to chair-time across the network.',
    ],
    services: [
      'Network-wide brand system',
      'Per-location SEO + GBP',
      'Cross-location attribution',
      'Centralised paid media',
      'Patient-routing automation',
    ],
    serviceLabel: 'What we delivered',
    metric: { v: '−48%', l: 'Cost per patient' },
    ctaText: 'Talk to us about Dental Network',
    ctaTo: '/contact',
    faqs: [
      {
        q: 'Did locations lose their individual identity?',
        a: 'No - each location keeps its name, photography, and local team voice. The brand system is the spine: typography, colour, page architecture, schema, and the operating cadence. The local layer stays local.',
      },
      {
        q: 'How does cross-location attribution work?',
        a: "A unified data layer with server-side tagging that respects HIPAA boundaries, then per-location attribution windows tuned to that office's actual booking lead time.",
      },
      {
        q: 'How long to roll out across all sites?',
        a: 'NorthLake hit full unification in fourteen weeks. The brand spine was live in three; the per-location SEO + GBP work staggered office-by-office through weeks four to twelve.',
      },
    ],
  },
];

/* ============================================================
   INDUSTRIES - 9 verticals served
   ============================================================ */
export const INDUSTRY_DETAILS: DetailEntry[] = [
  {
    kind: 'industry',
    slug: 'emergency-rooms',
    img: imgER,
    eyebrow: 'Industry · Emergency Rooms',
    title: 'Emergency Rooms',
    blurb: 'Freestanding & hospital-attached.',
    description:
      'We rebuild your emergency-care funnel around true ED intent - chest-pain, trauma, kid-with-a-fever - and bend paid spend away from non-emergent traffic that crowds rooms but never converts on revenue.',
    longBody: [
      'Emergency rooms are uniquely hard to market because the highest-revenue patients are also the ones least likely to comparison shop. The funnel has to win the moment of decision: a chest-pain symptom search, a trauma referral, a parent who needs to know if the ER is in-network at 11pm.',
      'We build that funnel around clinical-need intent, not vanity volume. The campaigns route to wait-time pages with real ETAs, insurance-verification flows that complete before the patient arrives, and a GBP profile tuned for the trauma and emergent terms that map to billable, revenue-positive visits.',
      'The result is an ER that fills the slots it has capacity for - including overnight - and stops paying for the impressions that crowd the lobby with non-emergent complaints.',
    ],
    services: [
      'Trauma intent SEO',
      'Wait-time landing pages',
      'Insurance verification flows',
      'Geo-fenced display + connected TV',
      'EmergencyMedicalService schema',
    ],
    serviceLabel: 'What we ship',
    metric: { v: '+318%', l: 'Booked emergency visits, 90 days' },
    ctaText: 'Talk to us about Emergency Rooms',
    ctaTo: '/contact',
    faqs: [
      {
        q: 'Do you work with freestanding and hospital-attached ERs?',
        a: 'Both. The funnel mechanics are similar, but the brand + reporting layer differs - hospital-attached requires deeper integration with system-level marketing and HCAHPS reporting.',
      },
      {
        q: 'Can you reduce low-acuity traffic?',
        a: 'Yes - by changing the intent the campaigns target. Trauma-specific keywords and wait-time landing pages self-select the patients you want and quietly steer the rest to urgent-care alternatives.',
      },
      {
        q: 'Is the insurance verification HIPAA-safe?',
        a: 'The flow runs under your BAA-covered tools (typically eligibility checks via your clearinghouse or EHR partner). We instrument the marketing funnel up to that handoff, not inside it.',
      },
    ],
  },
  {
    kind: 'industry',
    slug: 'urgent-care',
    img: imgUrgent,
    eyebrow: 'Industry · Urgent Care',
    title: 'Urgent Care',
    blurb: 'Walk-in volume, fast turnaround.',
    description:
      'Walk-in volume that pays back the same week. We re-engineer your local presence so the parent searching at 8pm chooses you, not the national chain across town.',
    longBody: [
      'Urgent care is won and lost in the moment a parent or worker decides between "go in tonight" and "wait it out." That moment is almost always a Map Pack search, a same-day-appointment query, or a quick scan of reviews from a phone.',
      'We tune the local presence for that exact moment. Same-day appointment funnels, after-hours paid search, insurance-by-location pages that answer the in-network question before the call, and a review engine that keeps your rating ahead of the national chain across town.',
      'The system is designed for fast payback - most of our urgent-care clients see cost per walk-in drop within the first three weeks and hold the lower number through seasonality.',
    ],
    services: [
      'Same-day appointment funnels',
      'Google Business Profile optimisation',
      'Insurance-by-location pages',
      'After-hours paid search',
      'Patient review automation',
    ],
    serviceLabel: 'What we ship',
    metric: { v: '−42%', l: 'Cost per walk-in, 6 months' },
    ctaText: 'Talk to us about Urgent Care',
    ctaTo: '/contact',
    faqs: [
      {
        q: 'How do you handle multi-location urgent care?',
        a: 'Templated per-location pages, per-location GBP, and a single brand spine. We push each clinic on its own catchment without letting them compete with each other on the same search.',
      },
      {
        q: 'What about competing with national chains?',
        a: "Local detail wins. Insurance specifics, ETAs, hyper-local reviews, and the kind of operational detail (parking, after-hours phone) that a national landing page can't replicate.",
      },
    ],
  },
  {
    kind: 'industry',
    slug: 'medspas-aesthetics',
    img: imgMedspa,
    eyebrow: 'Industry · Medspas & Aesthetics',
    title: 'Medspas & Aesthetics',
    blurb: 'Injectables, lasers, lifetime value.',
    description:
      "Re-price the launch funnel around lifetime value, not first visit. We build full-funnel ecosystems for injectables, lasers, and body - the kind that survive seasonality and don't collapse when Groupon disappears.",
    longBody: [
      'Aesthetics is a lifetime-value game disguised as a first-visit market. Practices that build for the discount-driven first visit train the patient base they end up regretting six months later.',
      'We build the launch funnel around the treatments and bundles that anchor higher LTV from day one, then layer loyalty + membership + financing flows that protect against the seasonality every medspa knows too well.',
      'The work is part acquisition, part product strategy - and the strongest medspas in our portfolio look more like subscription businesses than visit-by-visit clinics.',
    ],
    services: [
      'Treatment-specific landing pages',
      'Before/after gallery SEO',
      'Loyalty + membership automation',
      'Instagram + TikTok ad creative',
      'Patient retention sequences',
    ],
    serviceLabel: 'What we ship',
    metric: { v: '+62%', l: 'Average order value, 6 months' },
    ctaText: 'Talk to us about Medspas',
    ctaTo: '/contact',
    faqs: [
      {
        q: 'Do you produce ad creative?',
        a: 'Yes - we direct shoots, brief edits, and run the iteration loop. Before/after content is handled with explicit patient consent and platform-policy review on every asset.',
      },
      {
        q: 'How do you compete on price-sensitive treatments?',
        a: "We don't. We re-anchor the funnel on bundles and memberships where price is a secondary concern, then let the high-margin treatments do the heavy lifting on LTV.",
      },
    ],
  },
  {
    kind: 'industry',
    slug: 'dental-practices',
    img: imgDental,
    eyebrow: 'Industry · Dental Practices',
    title: 'Dental Practices',
    blurb: 'Solo to DSO-level networks.',
    description:
      "Solo office to DSO - one search and brand operating system. We unify locations under one marketing engine, then push each office's local rankings independently so they never cannibalise each other.",
    longBody: [
      'Dental marketing breaks at scale. A solo practice grows into three offices, then ten, and the cannibalisation starts: same brand, same content, same GBP signals - competing for the same searches in overlapping catchments.',
      'We solve that with a brand operating system. One spine, templated per-location pages, schema that tells Google each office is independent, and a paid layer that respects catchment boundaries.',
      "The result is a dental network that ranks for every office's local terms without letting them collide, and a per-office cost-per-patient that drops as the centralised work compounds.",
    ],
    services: [
      'Multi-location SEO',
      'Insurance-accepted pages per office',
      'New-patient nurture flows',
      'Service-area schema',
      'Treatment-coordinator call scripts',
    ],
    serviceLabel: 'What we ship',
    metric: { v: '−48%', l: 'Cost per new patient' },
    ctaText: 'Talk to us about Dental',
    ctaTo: '/contact',
    faqs: [
      {
        q: 'Is this only for DSOs?',
        a: 'No - the same playbook works for solo offices. The difference is which pieces are layered first: solo offices focus on review velocity and high-intent local, while networks focus on the brand spine and cross-location attribution.',
      },
      {
        q: 'How do you handle insurance pages?',
        a: 'Per-office, per-insurance pages with verified accepted-plans data and clear in-network language. Schema marks them as offers so search engines can surface the right office for the right plan.',
      },
    ],
  },
  {
    kind: 'industry',
    slug: 'mental-health',
    img: imgMental,
    eyebrow: 'Industry · Mental Health',
    title: 'Mental Health',
    blurb: 'Empathetic recall + insurance flow.',
    description:
      'Make the front door feel safe and the back office actually work. From search to scheduled session in under 24 hours - without the cold-CRM email tone that pushes anxious patients straight back to Google.',
    longBody: [
      'Mental health marketing is more about tone than tactics. The patient is anxious, the search is private, and the wrong word at the wrong step sends them back to Google.',
      'We write for the actual person at the actual moment - the search, the landing page, the intake form, the appointment confirmation. Specialty-matched copy. No checkout-style language. No automation that feels like a debt-collection sequence.',
      'On the operational side we connect the front door to the back office: telehealth booking, insurance verification, therapist matching - all within the 24-hour window where intent is highest and decay is fastest.',
    ],
    services: [
      'Specialty-matched landing pages',
      'Telehealth booking funnels',
      'Therapist directory SEO',
      'Insurance verification automation',
      'Crisis-line ad compliance review',
    ],
    serviceLabel: 'What we ship',
    metric: { v: '4.6×', l: 'Booked sessions per ad spend' },
    ctaText: 'Talk to us about Mental Health',
    ctaTo: '/contact',
    faqs: [
      {
        q: 'Are crisis-line ads handled differently?',
        a: 'Yes - they go through an explicit compliance review for platform policy and clinical guidance. We do not run them on engagement-optimisation; only on the platforms and audiences with documented safety guardrails.',
      },
      {
        q: 'How do you handle stigma in copy?',
        a: 'By writing as if a single anxious person is reading - not a market segment. Plain language, no clinical jargon as a barrier, and a tone that respects the search the patient just made.',
      },
    ],
  },
  {
    kind: 'industry',
    slug: 'pediatrics',
    img: imgPediatrics,
    eyebrow: 'Industry · Pediatrics',
    title: 'Pediatrics',
    blurb: 'Parent-first comms, well-visit ladders.',
    description:
      "Write to the parent's actual questions, schedule for their actual life, and remind without the guilt. We tune every touch - search, ad copy, intake, recall - to the way overwhelmed parents actually behave at 9pm on a Sunday.",
    longBody: [
      'Pediatric marketing is parent marketing. The decision-maker is tired, time-poor, and skeptical of medical sales copy. They are searching at 9pm on a Sunday and they want one thing: clarity.',
      'We build for that parent. Vaccine schedule pages that answer the actual question without burying it under disclaimers. Well-visit reminder sequences that respect family pace. Sick-visit funnels that surface same-day availability instead of a phone tree.',
      'The result is a practice that ranks for the searches parents actually make, books the visits they actually need, and retains the family across well-visit ladders without the guilt-driven nudges the patient base resents.',
    ],
    services: [
      'Well-visit reminder sequences',
      'Vaccine page SEO',
      'School-form automation',
      'Parent education content',
      'Sick-visit same-day funnels',
    ],
    serviceLabel: 'What we ship',
    metric: { v: '+71%', l: 'Well-visit attachment, 12 months' },
    ctaText: 'Talk to us about Pediatrics',
    ctaTo: '/contact',
    faqs: [
      {
        q: 'How do you handle vaccine content?',
        a: "Strictly clinical, sourced from CDC and AAP guidance, written to answer the parent's actual question. We do not editorialise and we do not run engagement-optimisation campaigns on vaccine pages.",
      },
      {
        q: 'Can recall sequences feel less pushy?',
        a: "Yes - cadence is set by visit type, age, and the family's historical engagement. The default is empathetic not aggressive; reminders, not nudges.",
      },
    ],
  },
  {
    kind: 'industry',
    slug: 'chiropractic',
    img: imgChiro,
    eyebrow: 'Industry · Chiropractic',
    title: 'Chiropractic',
    blurb: 'Decompression, wellness, retention.',
    description:
      'Front door for the first visit, funnel for the next ten, and the brand that earns referrals year after year. We replace one-off promo offers with a retention system that compounds.',
    longBody: [
      'Chiropractic practices win on retention, not on the first visit. The market is dense, the prices are visible, and the patient base is built one referral at a time.',
      'We replace the discount-driven first-visit funnel with a brand and membership system that earns the next ten visits. Condition-specific SEO for the searches that map to real treatment plans. Decompression and wellness ads that anchor higher LTV. A testimonial engine that feeds the social proof referrals need.',
      'The result is a practice that compounds year-over-year instead of running monthly promo cycles that train the wrong patient base.',
    ],
    services: [
      'Condition-specific SEO',
      'Decompression therapy ads',
      'Membership funnel design',
      'Patient testimonial video',
      'Local sports + corporate partnerships',
    ],
    serviceLabel: 'What we ship',
    metric: { v: '+158%', l: 'Membership conversions' },
    ctaText: 'Talk to us about Chiropractic',
    ctaTo: '/contact',
    faqs: [
      {
        q: 'Do you produce testimonial video?',
        a: 'Yes - we direct shoots in-clinic, handle consent and HIPAA, and edit for platform-specific delivery. The testimonial library compounds: the same patient story powers the homepage, ads, and email.',
      },
      {
        q: 'Are membership plans hard to launch?',
        a: 'The plan design is straightforward; the marketing layer is the unlock. We design the offer, the page, and the upgrade path so the membership becomes the default new-patient route, not an upsell.',
      },
    ],
  },
  {
    kind: 'industry',
    slug: 'primary-care',
    img: imgPrimary,
    eyebrow: 'Industry · Primary Care',
    title: 'Primary Care',
    blurb: 'Panel growth + payer mix optimisation.',
    description:
      'Grow your panel with the patients your panel actually needs - by payer, by zip, by visit type. Volume that lifts revenue, not just utilisation.',
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
    serviceLabel: 'What we ship',
    metric: { v: '+24%', l: 'Commercial payer mix shift' },
    ctaText: 'Talk to us about Primary Care',
    ctaTo: '/contact',
    faqs: [
      {
        q: 'Can this work under a value-based contract?',
        a: "Yes - we tune the campaigns to the metrics that matter under the contract (care-gap closure, AWV completion, attribution) and report against the contract's scorecard.",
      },
      {
        q: 'How do you handle payer-mix targeting?',
        a: "Through landing pages and audiences tuned to the zip codes and demographics that historically map to the payer mix the practice needs - never through any data the practice can't legally use.",
      },
    ],
  },
  {
    kind: 'industry',
    slug: 'healthcare-networks',
    img: imgNetworks,
    eyebrow: 'Industry · Healthcare Networks',
    title: 'Healthcare Networks',
    blurb: 'Multi-location brand operating systems.',
    description:
      'The system that lets 7, 70, or 700 locations rank, convert, and report - without seven, seventy, or seven hundred marketing teams. One brand, one tech spine, one weekly dashboard.',
    longBody: [
      "Networks break in marketing the same way they break in operations: at the seams between locations. The brand drifts. The data fragments. The local teams improvise. The leadership team is left with a stack of dashboards that don't reconcile.",
      'We build the operating system that holds it together. One brand spine. One templated page architecture. One attribution layer. One weekly dashboard that maps spend to chair-time across every site.',
      "Each location keeps its local voice and its local team. The system handles everything that doesn't need to be reinvented per site - which turns out to be most of it.",
    ],
    services: [
      'Centralised brand system',
      'Location-page templates at scale',
      'Cross-location performance reporting',
      'Service-line launch playbooks',
      'Post-acquisition integration runbooks',
    ],
    serviceLabel: 'What we ship',
    metric: { v: '7 → 17', l: 'Locations unified in 14 months' },
    ctaText: 'Talk to us about Healthcare Networks',
    ctaTo: '/contact',
    faqs: [
      {
        q: 'How long to integrate a newly acquired location?',
        a: 'The runbook is built for a six-week integration: brand alignment in week 1-2, page + GBP migration in week 3-4, attribution + reporting in week 5-6. Most acquisitions hit full integration inside two months.',
      },
      {
        q: 'How is reporting handled across locations?',
        a: 'A single attribution layer (server-side tagged, HIPAA-respecting) feeds one weekly dashboard. Each location sees its own pipeline; leadership sees the network roll-up.',
      },
    ],
  },
];

/* ============================================================
   CAPABILITIES - 6 service disciplines
   ============================================================ */
export const CAPABILITY_DETAILS: DetailEntry[] = [
  {
    kind: 'capability',
    slug: 'local-search-systems',
    img: imgLocalSearch,
    eyebrow: 'Capability · Discovery',
    title: 'Local search systems that own the Map Pack.',
    blurb:
      'Schema, GBP optimisation, geo-targeted content, and a review engine that compounds month over month.',
    description:
      'Healthcare buyers start with high-intent searches in their zip code. We engineer the systems that put your practice in the Local Pack on the searches that matter - emergency-care, same-day appointments, specialty visits - and keep you there as competitors churn around you.',
    longBody: [
      'Local search is the front door for almost every healthcare practice. Eighty percent of high-intent visits start with a zip-code-bound query, and the Map Pack is the only result most patients see.',
      "We build the system that wins that surface: schema that gives Google the structured signals it needs, GBP profiles that update on the cadence the algorithm rewards, service-area pages that match the patient's exact search, and a review engine that builds compounding velocity month-over-month.",
      'The result is a practice that holds the Map Pack on the searches that matter even as competitors throw budget at the same terms - because the system compounds, and the budget does not.',
    ],
    services: [
      'Local schema + GBP optimisation',
      'Service-area page architecture',
      'Review-velocity engine',
      'Geo-targeted content briefs',
      'Citations + NAP cleanup',
    ],
    serviceLabel: 'What we ship',
    metric: { v: '+187%', l: 'Local Pack impressions, 90d' },
    ctaText: 'Talk to us about Local Search',
    ctaTo: '/contact',
    faqs: [
      {
        q: 'How long until we see Map Pack movement?',
        a: 'Initial GBP optimisation often moves rankings within 14 days. Sustained Map Pack ownership requires 60-90 days of schema, citations, and review velocity compounding.',
      },
      {
        q: 'Do you handle citation cleanup?',
        a: 'Yes - we audit NAP consistency across the top 50 healthcare citation sources and run the cleanup as part of the engagement.',
      },
    ],
  },
  {
    kind: 'capability',
    slug: 'paid-media',
    img: imgPaidMedia,
    eyebrow: 'Capability · Acquisition',
    title: 'Paid media that pays back in week one.',
    blurb: 'Google + Meta + LinkedIn with server-side tracking and HIPAA-aware audiences.',
    description:
      'Paid spend that compounds, not leaks. HIPAA-aware audience design, server-side conversion tracking, and budget routed toward patients with real lifetime value - not the cheapest first click.',
    longBody: [
      "Most healthcare paid media leaks. The conversion event is misdefined, the audience is built on signals the practice can't legally use, and the optimisation chases the cheapest click instead of the most valuable patient.",
      'We rebuild that. HIPAA-aware audience design that respects what can and cannot be sent to ad platforms. Server-side conversion tracking that captures the events that actually matter. Landing-flow experiments that move the booking number, not the form-fill number.',
      'The result is paid spend that pays back the same week it lands - and a CAC that drops as the optimisation compounds.',
    ],
    services: [
      'Google + Meta + LinkedIn campaigns',
      'Server-side conversion tracking',
      'HIPAA-aware audience design',
      'Landing-flow experiments',
      'Weekly CAC + LTV reporting',
    ],
    serviceLabel: 'What we ship',
    metric: { v: '4.1×', l: 'Median ROAS across clients' },
    ctaText: 'Talk to us about Paid Media',
    ctaTo: '/contact',
    faqs: [
      {
        q: 'Is server-side tracking HIPAA-safe?',
        a: "When configured correctly, yes - and that's most of the value we add. The implementation strips PHI before any signal leaves your environment, and the events fired to ad platforms carry only the metadata the platform needs to optimise.",
      },
      {
        q: 'How do you handle restricted ad categories?',
        a: 'We pre-clear creative on platform policy and run an internal compliance pass before any campaign goes live. Restricted categories (mental health, substance use, oncology) get extra review.',
      },
    ],
  },
  {
    kind: 'capability',
    slug: 'brand-identity',
    img: imgPatientIdentities,
    eyebrow: 'Capability · Brand',
    title: 'Identities patients trust on sight.',
    blurb:
      'Marks, voice, and motion built to age well across signage, screen, and surgical theatre.',
    description:
      'A brand system designed for the moment a patient is choosing between you and the practice down the street. Marks, voice, and motion that read as competent and current across every surface - signage, screen, surgical theatre.',
    longBody: [
      'Healthcare brand is operational, not decorative. A patient deciding between two practices is making a competence judgment in seconds, and the brand surface they see is the data they use.',
      'We build that surface to age well. Marks that work in monochrome at parking-lot scale. Voice that reads as warm without slipping into casual. Motion that signals current and considered without chasing trends that will look dated by the next rebrand.',
      'The result is an identity that holds across every surface a patient might encounter - wayfinding, scrub colour, intake form, post-visit text - without needing a brand police to enforce it.',
    ],
    services: [
      'Visual identity systems',
      'Patient-facing voice + tone',
      'Photography + motion direction',
      'Wayfinding + collateral',
      'Brand guidelines + ops manual',
    ],
    serviceLabel: 'What we ship',
    metric: { v: '7+', l: 'Identities shipped at network scale' },
    ctaText: 'Talk to us about Brand',
    ctaTo: '/contact',
    faqs: [
      {
        q: 'How long does a brand engagement take?',
        a: 'Identity systems run 8-12 weeks for a single practice and 12-20 weeks for a multi-location network. The operating manual ships as the final deliverable so the brand survives without us.',
      },
      {
        q: 'Do you handle signage and wayfinding?',
        a: 'Yes - we direct the design and coordinate with your fabricator. We do not install, but we own the spec.',
      },
    ],
  },
  {
    kind: 'capability',
    slug: 'web-design',
    img: imgBookingWeb,
    eyebrow: 'Capability · Web',
    title: 'Booking-first websites that convert.',
    blurb:
      'Speed, schema, accessibility - and a booking pathway with measured drop-off at every step.',
    description:
      'Sites engineered around the booking pathway. Speed, schema, accessibility - and a drop-off map at every step so we know exactly where conversion leaks happen and which fix moves the number.',
    longBody: [
      'Most healthcare websites are brochures with a booking button bolted on. The booking step is the last priority in the design, the slowest part of the experience, and the most fragile when an update lands.',
      'We invert that. The booking pathway is the spine of the site. The information architecture serves it. The performance budget protects it. The instrumentation maps every drop-off so we know exactly which step is leaking and which fix will move the number.',
      'The result is a site that earns its conversion rate the way operations earns its margin - by knowing where every loss is, and fixing the biggest one first.',
    ],
    services: [
      'Booking-first information architecture',
      'Core Web Vitals + accessibility',
      'HIPAA-respecting analytics',
      'Funnel drop-off instrumentation',
      'CMS your team can actually use',
    ],
    serviceLabel: 'What we ship',
    metric: { v: '+38%', l: 'Booking completion lift' },
    ctaText: 'Talk to us about Web',
    ctaTo: '/contact',
    faqs: [
      {
        q: 'What CMS do you build on?',
        a: 'We default to headless setups your team can actually edit. The specific stack depends on the practice - we are not religious about a platform, we are religious about the booking pathway.',
      },
      {
        q: 'Is accessibility a separate engagement?',
        a: 'No - WCAG 2.2 AA conformance is the baseline on every site we build. We do not ship sites that fail the audit.',
      },
    ],
  },
  {
    kind: 'capability',
    slug: 'lifecycle-engagement',
    img: imgRecall,
    eyebrow: 'Capability · Lifecycle',
    title: 'Recall + nurture that earns trust.',
    blurb: 'Empathetic recall flows that move return rates without ever feeling like advertising.',
    description:
      'Patient lifecycle communication that respects intent. Empathetic recall flows that move return rates and reactivate dormant patients without ever feeling transactional, templated, or manipulative.',
    longBody: [
      "Lifecycle is where most practices leak the most patients - not because the recall doesn't fire, but because it fires the wrong way. The email reads like a marketing template, the SMS arrives at the wrong time, the cadence escalates when the patient stops responding.",
      "We write recall the way the front desk would, if the front desk had time. Empathetic. Cadence-aware. Permission-based. Reactivation that respects the patient's reasons for going quiet, not a sequence that escalates until they unsubscribe.",
      'The result is a return rate that lifts without the patient base resenting the practice for the lift.',
    ],
    services: [
      'Recall email + SMS cadences',
      'Reactivation campaigns',
      'Permission-based review asks',
      'Care-gap nurture flows',
      'NPS + satisfaction loops',
    ],
    serviceLabel: 'What we ship',
    metric: { v: '+24%', l: 'Annual patient return rate' },
    ctaText: 'Talk to us about Lifecycle',
    ctaTo: '/contact',
    faqs: [
      {
        q: 'Does this require a separate CRM?',
        a: 'It works best on top of your existing patient communication tools - we configure the cadences inside the systems your team already uses, rather than introducing a new one.',
      },
      {
        q: 'Are review asks compliant?',
        a: 'Yes - all review asks run permission-based and respect platform policy. We never bulk-send and we never offer incentives.',
      },
    ],
  },
  {
    kind: 'capability',
    slug: 'automation',
    img: imgFrontDeskAutomation,
    eyebrow: 'Capability · Operations',
    title: 'Automations the front desk actually runs on.',
    blurb: 'EHR-connected, BAA-covered workflows: intake, reminders, eligibility, AI triage.',
    description:
      'EHR-connected, BAA-covered workflows that take busywork off the front desk so staff can spend time on patients, not on phones. Intake, reminders, eligibility, AI triage - running where your team already works.',
    longBody: [
      "The front desk is where most healthcare practices lose hours to busywork. Intake forms re-keyed. Insurance verified by phone. Reminders sent manually. The automation that should exist either doesn't, or runs in a tool nobody trusts.",
      'We build the automation the desk actually uses. EHR-connected where it matters. BAA-covered everywhere it touches PHI. Triage that escalates the right cases without burying the rest.',
      'The result is a front desk that spends its hours where they belong - on patients - and a no-show rate that drops because the system handles the parts the team kept forgetting to.',
    ],
    services: [
      'Intake + scheduling automation',
      'Insurance verification flows',
      'Appointment reminders + recall',
      'AI-assisted triage routing',
      'EHR-to-CRM data bridges',
    ],
    serviceLabel: 'What we ship',
    metric: { v: '−42%', l: 'No-show rate, networked clinics' },
    ctaText: 'Talk to us about Automation',
    ctaTo: '/contact',
    faqs: [
      {
        q: 'Does this require us to switch EHRs?',
        a: 'No - we integrate with the EHR you have. The bridge is built between your EHR and the marketing/CRM layer, not as a replacement for clinical systems.',
      },
      {
        q: 'How is AI triage governed?',
        a: 'AI triage routes, it does not diagnose. Every escalation surfaces to a human; every conversation is logged; every model used is BAA-covered.',
      },
    ],
  },
];

export const ALL_DETAILS: DetailEntry[] = [
  ...ENGAGEMENT_DETAILS,
  ...INDUSTRY_DETAILS,
  ...CAPABILITY_DETAILS,
];

export const findDetail = (kind: DetailKind, slug: string): DetailEntry | undefined =>
  ALL_DETAILS.find((d) => d.kind === kind && d.slug === slug);

export const detailHref = (kind: DetailKind, slug: string): string => `/our-work/${kind}/${slug}`;
