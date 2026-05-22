import type { ReactNode } from 'react';

/**
 * Home page — FAQ section content.
 *
 * `text` must stay in sync with `a` — it feeds schema.org JSON-LD.
 * Edit both together.
 *
 * The accordion display in `src/pages/Home/FAQ.tsx` reads `a` (ReactNode
 * with `<strong>`, en-dashes, etc.). The FAQ_SCHEMA builder in
 * `src/pages/Home/index.tsx` reads `text` (plain string) to produce a
 * byte-identical JSON-LD blob. ReactNode can't be cleanly serialized to
 * plain text, so the two representations are stored side by side.
 */

export interface HomeFaqItem {
  /** Display question; also feeds the `Question.name` field in JSON-LD. */
  q: string;
  /** Rendered answer for the accordion (may include `<strong>`, JSX entities). */
  a: ReactNode;
  /** Plain-text version of `a` for the schema.org `Answer.text` field. */
  text: string;
  defaultOpen?: boolean;
}

export const HOME_FAQS: readonly HomeFaqItem[] = [
  {
    q: 'How quickly will I see results from your healthcare marketing?',
    a: (
      <>
        Most clients see <strong>tangible movement within 30 days</strong>{' '}
        - improved Google Business Profile visibility, faster page loads,
        and the first paid-media leads. Sustained organic growth from SEO
        typically compounds across months 3&ndash;6 as content, backlinks, and
        on-page work mature.
      </>
    ),
    text:
      'Most clients see tangible movement within 30 days - improved Google Business Profile visibility, faster page loads, and the first paid-media leads. Sustained organic growth from SEO typically compounds across months 3–6 as content, backlinks, and on-page work mature.',
    defaultOpen: true,
  },
  {
    q: 'Are your campaigns and tools HIPAA-aware?',
    a: (
      <>
        Yes. We follow HIPAA-aware practices across tracking, ad targeting,
        intake forms, and reporting - including server-side conversion
        tracking, compliant pixel use, and BAA-ready vendor selection where
        applicable. We are not a covered entity, so we work alongside your
        compliance officer to ensure end-to-end alignment.
      </>
    ),
    text:
      'Yes. We follow HIPAA-aware practices across tracking, ad targeting, intake forms, and reporting - including server-side conversion tracking, compliant pixel use, and BAA-ready vendor selection where applicable. We are not a covered entity, so we work alongside your compliance officer to ensure end-to-end alignment.',
  },
  {
    q: 'What size practices do you typically work with?',
    a: (
      <>
        From <strong>single-location clinics and medspas</strong> to{' '}
        <strong>multi-location healthcare networks</strong>. Our methodology
        scales: smaller practices benefit from the full Clinic Growth OS, while
        larger networks plug us into existing teams to amplify performance and
        reporting.
      </>
    ),
    text:
      'From single-location clinics and medspas to multi-location healthcare networks. Our methodology scales: smaller practices benefit from the full Clinic Growth OS, while larger networks plug us into existing teams to amplify performance and reporting.',
  },
  {
    q: "What's included in your monthly engagement?",
    a: (
      <>
        Strategy, execution, and reporting across SEO, paid media (Google
        &amp; Meta), social, content, automation, and weekly optimization
        - plus a dedicated growth lead and a real-time analytics
        dashboard. Every plan is tailored to your goals; nothing is bolted on.
      </>
    ),
    text:
      'Strategy, execution, and reporting across SEO, paid media (Google & Meta), social, content, automation, and weekly optimization - plus a dedicated growth lead and a real-time analytics dashboard. Every plan is tailored to your goals; nothing is bolted on.',
  },
  {
    q: 'Do I need a long-term contract to work with you?',
    a: (
      <>
        No long lock-ins. We recommend a{' '}
        <strong>minimum 90-day engagement</strong> so the system has time to
        compound, but month-to-month options are available after the initial
        setup phase. Cancel, downgrade, or scale anytime - no hidden fees.
      </>
    ),
    text:
      'No long lock-ins. We recommend a minimum 90-day engagement so the system has time to compound, but month-to-month options are available after the initial setup phase. Cancel, downgrade, or scale anytime - no hidden fees.',
  },
];

export const HOME_FAQ_HEAD = {
  eyebrow: 'Your Questions, Answered',
  // The visible h2 uses a line break + accent span; the section component
  // renders that markup, so the title is split into parts here.
  titleLine1: 'Frequently',
  titleLine2Lead: 'Asked',
  titleLine2Accent: 'Questions',
  intro:
    'Everything you need to know about working with TheNextGen - from compliance and reporting to timelines and engagement length.',
} as const;

export const HOME_FAQ_STILL_CARD = {
  title: 'Still have questions?',
  // `there’s` / `you’d` / `we’ll` use U+2019 (right single quote),
  // preserved from JSX `&rsquo;`.
  para1:
    'We understand every clinic is different. If there’s anything you’d like to clarify about pricing, services, or how we’ll fit into your workflow, our team is here to help.',
  para2:
    'Reach out anytime - we’ll walk you through every detail to make sure you get the most out of our platform.',
  ctaText: 'Book a Demo',
} as const;
