import '../../styles/emailcampaigns.css';
import Hero from './Hero';
import TrustBar from './TrustBar';
import FlowTypes from './FlowTypes';
import HowDeliverabilityWorks from './HowDeliverabilityWorks';
import DataShowcase from './DataShowcase';
import EmailAnatomy from './EmailAnatomy';
import Process from './Process';
import CommonMistakes from './CommonMistakes';
import Glossary from './Glossary';
import Comparison from './Comparison';
import LearningHub from './LearningHub';
import SubServices from './SubServices';
import FAQ, { EM_FAQ_ITEMS } from './FAQ';
import CTA from './CTA';
import Seo from '@/components/Seo';
import { buildBreadcrumbList } from '@/lib/schema';
import { SITE } from '@/content/site';

const SERVICE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Healthcare Email & Patient Drip Campaigns',
  serviceType: 'Email Marketing Automation',
  category: ['Welcome', 'Post-visit', 'Recall', 'Win-back', 'Referral', 'Newsletter'],
  provider: { '@id': `${SITE.url}#organization` },
  areaServed: { '@type': 'Country', name: 'United States' },
  audience: {
    '@type': 'Audience',
    audienceType: 'Healthcare practices, clinics, hospital networks',
  },
};

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: EM_FAQ_ITEMS.map((it) => ({
    '@type': 'Question',
    name: it.q,
    acceptedAnswer: { '@type': 'Answer', text: it.a },
  })),
};

const BREADCRUMB_SCHEMA = buildBreadcrumbList([
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'Email Drip Campaigns' },
]);

const EmailCampaigns = () => {
  return (
    <>
      <Seo
        title="Healthcare Email Marketing & Patient Drip Campaigns"
        description="Welcome, post-visit, recall, win-back, referral, and newsletter flows on BAA-covered ESPs — segmented by treatment history, attributed to booked revenue."
        path="/services/email-drip-campaigns"
        schema={[SERVICE_SCHEMA, FAQ_SCHEMA, BREADCRUMB_SCHEMA]}
      />

      <Hero />
      <TrustBar />
      <FlowTypes />
      <HowDeliverabilityWorks />
      <DataShowcase />
      <EmailAnatomy />
      <Process />
      <CommonMistakes />
      <Glossary />
      <Comparison />
      <LearningHub />
      <SubServices />
      <FAQ />
      <CTA />
    </>
  );
};

export default EmailCampaigns;
