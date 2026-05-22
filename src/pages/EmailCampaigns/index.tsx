import Hero from './Hero';
import WhatWeDo from '../../components/service/WhatWeDo';
import HowItWorks from '../../components/service/HowItWorks';
import Results from '../../components/service/Results';
import ServiceCTA from '../../components/service/ServiceCTA';
import ServiceFAQ from '../../components/service/ServiceFAQ';
import ServiceScenario from '../../components/service/ServiceScenario';
import RelatedServices from '../../components/service/RelatedServices';
import type { DoCard } from '../../components/service/WhatWeDo';
import type { HowStep } from '../../components/service/HowItWorks';
import type { ResultStat } from '../../components/service/Results';
import type { ServiceFAQItem } from '../../components/service/ServiceFAQ';
import type { TimelineRow } from '../../components/service/ServiceScenario';
import type { RelatedServiceLink } from '../../components/service/RelatedServices';

import { ChartIcon, FileIcon, LinkIcon, NetworkIcon, PinIcon, StarIcon } from '../../components/icons';

const DO_CARDS: DoCard[] = [
  { name: 'Automation Flows', desc: 'Onboarding, recall, win-back, post-visit - sequenced and live in your CRM.', icon: <PinIcon /> },
  { name: 'Campaign Design', desc: 'Mobile-first, brand-aligned, accessible templates that convert on every device.', icon: <LinkIcon /> },
  { name: 'Segmentation', desc: 'Behavior, demographics, treatment history - every email matches the patient.', icon: <FileIcon /> },
  { name: 'Conversion Tracking', desc: 'Booking attribution from email to chair, end-to-end.', icon: <NetworkIcon /> },
  { name: 'HIPAA Compliance', desc: 'BAA-covered tooling, PHI minimization, encrypted delivery.', icon: <StarIcon /> },
  { name: 'Live Reporting', desc: 'Open, click, booking, and revenue tracked per campaign.', icon: <ChartIcon /> },
];

const STEPS: HowStep[] = [
  { num: '01', name: 'Audit', desc: 'List health, deliverability, current sends.' },
  { num: '02', name: 'Strategy', desc: 'Flow map, segments, and trigger logic locked.' },
  { num: '03', name: 'Execution', desc: 'Templates designed, flows built, tracking live.' },
  { num: '04', name: 'Optimization', desc: 'Subject A/B tests, send-time tuning, monthly retro.' },
];

const STATS: ResultStat[] = [
  {
    num: (
      <>
        68<em>%</em>
      </>
    ),
    label: 'Avg open rate',
  },
  {
    num: (
      <>
        24<em>%</em>
      </>
    ),
    label: 'Click rate',
  },
  {
    num: (
      <>
        47<em>+</em>
      </>
    ),
    label: 'Bookings / month',
  },
  {
    num: (
      <>
        12<em>h</em>
      </>
    ),
    label: 'Saved per week',
  },
];

const SERVICE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Healthcare Email Drip Campaigns',
  provider: {
    '@type': 'Organization',
    name: 'TheNextGen Healthcare Marketing',
  },
  serviceType: 'Email Marketing Automation',
};

const TIMELINE: TimelineRow[] = [
  {
    marker: 'Week 1',
    label: 'Audit, segment, warm',
    detail: 'We map every contact list, prune inactives, set up BAA-covered sending, and warm new IPs so the first send lands in the inbox.',
  },
  {
    marker: 'Week 2',
    label: 'Welcome + post-visit live',
    detail: 'The two highest-leverage sequences ship first - they target the moments of strongest patient intent, where open and reply rates concentrate.',
  },
  {
    marker: 'Week 3',
    label: 'Re-engagement + referral',
    detail: 'Win-back drip targeting dormant patients, plus a referral-ask drip that compounds quietly without prompts from staff.',
  },
  {
    marker: 'Week 6',
    label: 'Attribution closes the loop',
    detail: 'Every send tied to booked revenue in the dashboard. We start pruning low-performers and doubling sends on what actually moves the calendar.',
  },
];

const FAQS: ServiceFAQItem[] = [
  {
    q: 'Are healthcare email drips actually HIPAA-compliant?',
    a: 'They can be - when the platform signs a BAA, when PHI is never carried in the message body, and when consent is captured the right way. We build every drip on that footing and document the trail so an audit reads cleanly.',
  },
  {
    q: 'What kind of open and click rates should we expect?',
    a: 'Lifecycle drips (new patient, post-visit, re-engagement) outperform promotional sends because the moment of intent is right. We grade every campaign against the right cohort - not a generic industry average - and share the benchmark band in the kickoff audit.',
  },
  {
    q: 'How is this different from our EHR’s built-in messaging?',
    a: 'EHR messaging is transactional - reminders and confirmations. Drip campaigns are relationship layers built on top: education, reactivation, win-back, referral. They run in parallel without duplicating sends.',
  },
  {
    q: 'How long does it take to launch?',
    a: 'A four-sequence starter set ships in three weeks: welcome, post-visit, re-engagement, referral. We deepen the library quarterly once we see what actually pulls bookings.',
  },
  {
    q: 'What happens to deliverability when we scale?',
    a: 'We warm sending IPs, segment by engagement, and prune inactive contacts every 90 days. Deliverability is treated as an active KPI - not a passive metric - so growth never silently degrades inbox placement.',
  },
];

const RELATED: RelatedServiceLink[] = [
  {
    to: '/services/google-ads',
    name: 'Google Ads',
    blurb: 'Convert the patients who clicked the ad but didn’t book the first time.',
    tag: 'Pair with',
  },
  {
    to: '/reviews-reputation',
    name: 'Reviews & Reputation',
    blurb: 'Trigger a review request the day after a positive post-visit reply.',
    tag: 'Pair with',
  },
  {
    to: '/services/analytics-reporting',
    name: 'Analytics & Reporting',
    blurb: 'Tie every send to attributed revenue, not just clicks.',
    tag: 'Pair with',
  },
];

const EmailCampaigns = () => {
  return (
    <>
      <Hero />
      <WhatWeDo cards={DO_CARDS} />
      <HowItWorks steps={STEPS} />
      <Results stats={STATS} />
      <ServiceScenario
        variant="timeline"
        eyebrow="The first six weeks"
        title="Four sequences, sequenced for compounding."
        intro="We never launch a drip library all at once. The order below is what ships first because the first cohorts feed every later cohort’s data."
        timeline={TIMELINE}
      />
      <ServiceFAQ
        items={FAQS}
        serviceName="Healthcare Email Drip Campaigns"
        title="Compliance, deliverability, and what to expect."
      />
      <RelatedServices items={RELATED} />
      <ServiceCTA
        variant="editorial"
        eyebrow="Drip-engine walkthrough"
        title="Map every patient touchpoint in one session."
        description="We sit with you for 30 minutes, look at your current sequences, and identify which drips you can ship first to move bookings without rebuilding the stack."
        primaryTo="/free-growth-audit"
        primaryLabel="Book the walkthrough"
        secondaryTo="/services/email-drip-campaigns#audit"
        secondaryLabel="What's covered"
        bullets={[
          'BAA + deliverability check on every tool you use today.',
          'Three drip-sequence picks ranked by realistic time-to-revenue.',
          'Free of charge - even if we never sign an engagement.',
        ]}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_SCHEMA) }}
      />
    </>
  );
};

export default EmailCampaigns;
