import type { ReactNode } from 'react';

export interface FAQItem {
  q: string;
  a: ReactNode;
  defaultOpen?: boolean;
}

export const FAQS: FAQItem[] = [
  {
    q: 'Are you actually HIPAA-compliant, or just claiming it?',
    a: (
      <>
        We sign <strong>Business Associate Agreements (BAAs)</strong> with every
        client. Our infrastructure runs on BAA-ready hosting, encrypted forms,
        and audited data routing. Our Head of Compliance personally reviews
        every funnel before launch - we have a 98% HIPAA audit pass rate.
      </>
    ),
    defaultOpen: true,
  },
  {
    q: 'Do you only work with healthcare practices?',
    a: (
      <>
        <strong>100% healthcare.</strong> We turn down e-commerce, real estate,
        and general SaaS clients. Specialization is what lets us go deep on
        patient acquisition models, regulatory edges, and clinical workflow
        integration that generalists can&rsquo;t match.
      </>
    ),
  },
  {
    q: 'What kind of practices do you typically work with?',
    a: (
      <>
        Freestanding ERs, urgent care, MedSpas, dental, primary care, mental
        health, chiropractic, plastic surgery, ophthalmology, and dermatology
        - mostly Texas-based. We&rsquo;ve served{' '}
        <strong>200+ practices</strong> ranging from single-location clinics to
        multi-site groups.
      </>
    ),
  },
  {
    q: 'How fast do you typically deliver results?',
    a: (
      <>
        Paid channels usually drive measurable patient leads within{' '}
        <strong>14&ndash;30 days</strong> of launch. Local SEO is a 90&ndash;180
        day curve depending on your starting position. Our average client sees a{' '}
        <strong>3&times; ROI lift within 90 days</strong> - though
        high-acuity verticals (FSEDs, urgent care) often move faster.
      </>
    ),
  },
  {
    q: 'Do you replace or work alongside our internal team?',
    a: (
      <>
        Either model works. Most clients use us as their{' '}
        <strong>full marketing department</strong> (no internal hires needed).
        Larger groups embed us alongside a marketing director for execution
        muscle. We&rsquo;re flexible - what matters is the patient
        acquisition outcome.
      </>
    ),
  },
];
