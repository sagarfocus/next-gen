import type { ReactNode } from 'react';

export interface FAQItem {
  q: string;
  a: ReactNode;
  defaultOpen?: boolean;
}

export const FAQS: FAQItem[] = [
  {
    q: 'Do you specialize in specific healthcare verticals or work across all of them?',
    a: (
      <>
        We focus exclusively on <strong>healthcare and wellness</strong> -
        from Freestanding ERs and Urgent Care to MedSpas, Dental, Mental Health,
        Chiropractic, Plastic Surgery, Ophthalmology, and Dermatology. Each
        vertical gets its own tailored playbook because patient psychology,
        acquisition cost, and compliance rules differ dramatically across
        specialties.
      </>
    ),
    defaultOpen: true,
  },
  {
    q: 'How does your strategy change between an Emergency Room and a MedSpa?',
    a: (
      <>
        ERs require <strong>24/7 high-acuity visibility</strong>, trauma-intent
        keyword capture, and competitor overflow strategy. MedSpas live on{' '}
        <strong>aesthetic-led social, Meta campaigns, and LTV-driven email
        nurturing</strong>. We don&rsquo;t reuse templates - ER ad copy
        speaks to urgency and trust; MedSpa creative speaks to outcomes,
        aspiration, and financing options.
      </>
    ),
  },
  {
    q: 'Can you handle multi-specialty practices or location networks?',
    a: (
      <>
        Yes. Multi-location and multi-specialty groups are one of our strengths.
        We build <strong>per-service-line landing pages</strong>, location-level
        GBP optimization, and unified reporting that rolls up by region or
        specialty - so your CMO sees the whole picture and each clinic
        gets credit for its own lift.
      </>
    ),
  },
  {
    q: 'How long until I see results for my specific industry?',
    a: (
      <>
        High-intent verticals (Urgent Care, ER, Dental emergencies) typically
        show paid-media leads within <strong>2&ndash;3 weeks</strong>. Elective
        verticals (MedSpa, Plastic Surgery, LASIK) need 30&ndash;60 days to
        warm up retargeting audiences. Organic + Local SEO compounds across{' '}
        <strong>months 3&ndash;6</strong> for every vertical.
      </>
    ),
  },
  {
    q: 'How do you handle compliance across different industries?',
    a: (
      <>
        Every vertical has different exposure - Mental Health is HIPAA
        plus state telehealth rules, MedSpas balance FDA cosmetic claim limits,
        ERs work with EMTALA-adjacent messaging. We use{' '}
        <strong>server-side tracking, BAA-ready vendors, and pre-approved
        creative libraries</strong> tailored to each specialty&rsquo;s
        regulatory landscape.
      </>
    ),
  },
];
