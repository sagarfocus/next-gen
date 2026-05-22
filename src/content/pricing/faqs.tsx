import type { ReactNode } from 'react';

export interface FAQItem {
  q: string;
  a: ReactNode;
  defaultOpen?: boolean;
}

export const FAQS: FAQItem[] = [
  {
    q: 'What is actually included in the monthly retainer?',
    a: (
      <>
        Every tier covers the full growth stack we&rsquo;re running on your
        behalf -{' '}
        <strong>
          strategy, local SEO, Google Business Profile management, paid media
          management on Google &amp; Meta, content production, server-side
          conversion tracking, monthly reporting, and a dedicated point of
          contact
        </strong>
        . Higher tiers add advanced AI call handling, multi-location
        orchestration, and 24/7 monitoring. Ad spend, custom software builds,
        and one-off website rebuilds are scoped separately.
      </>
    ),
    defaultOpen: true,
  },
  {
    q: 'Is ad spend included in the retainer, or do I pay Google & Meta separately?',
    a: (
      <>
        <strong>Ad spend is separate.</strong> The retainer covers our team
        time - strategy, creative, campaign builds, optimisation,
        tracking, and reporting. Ad budget is billed directly to your card by
        Google and Meta so you keep full ownership of the accounts, the audit
        trail, and the historical data. Typical starting ad budgets run{' '}
        <strong>$3K&ndash;$15K/month</strong> depending on tier, market, and
        service lines, and we&rsquo;ll recommend a number that&rsquo;s
        defensible against your patient-LTV math.
      </>
    ),
  },
  {
    q: 'What is the minimum contract length and can I cancel?',
    a: (
      <>
        We ask for a <strong>90-day initial commitment</strong> - SEO,
        review velocity, and audience-warming work need at least that to
        compound and prove out. After day 90 you&rsquo;re on a{' '}
        <strong>30-day rolling agreement</strong>, cancel anytime with written
        notice. We hand back full ownership of ad accounts, GBP, website, and
        every asset we built. No clawbacks, no &ldquo;agency lock&rdquo;
        contracts.
      </>
    ),
  },
  {
    q: 'How is Scale Elite priced - what makes it “custom”?',
    a: (
      <>
        Scale Elite is for <strong>multi-location groups, DSOs, and
        healthcare networks</strong> where the marketing engine has to coordinate
        across sites, payer mixes, and service lines. Pricing is scoped to
        location count, ad-spend tier, and whether the engagement includes{' '}
        <strong>custom software, EHR integrations, AI triage builds, or
        multi-state compliance work</strong>. Most Scale Elite retainers land
        between <strong>$18K and $45K/month</strong>; we share an exact number
        after a 60-minute scoping call.
      </>
    ),
  },
  {
    q: 'When should I expect to see ROI, and what does payback look like?',
    a: (
      <>
        Local Pack and GBP wins typically show in{' '}
        <strong>30&ndash;60 days</strong>. Paid media bridges the gap from
        week one so booked appointments start moving immediately. Most clients
        cross retainer break-even on net-new patient revenue between{' '}
        <strong>month 2 and month 4</strong>; SEO and content compound through
        month 6+. We model the LTV-to-spend math during onboarding and put a{' '}
        <strong>specific revenue target on every quarter</strong> - if
        we miss the target two quarters in a row, the next quarter is on us.
      </>
    ),
  },
];
