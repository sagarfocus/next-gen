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

const SERVICE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Healthcare Email Drip Campaigns',
  serviceType: 'Email Marketing Automation',
  category: ['Welcome', 'Post-visit', 'Recall', 'Win-back', 'Referral', 'Newsletter'],
  provider: {
    '@type': 'Organization',
    name: 'TheNextGen Healthcare Marketing',
    url: 'https://thenextgen.example.com',
  },
  areaServed: { '@type': 'Country', name: 'United States' },
  audience: { '@type': 'Audience', audienceType: 'Healthcare practices, clinics, hospital networks' },
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

const BREADCRUMB_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: '/' },
    { '@type': 'ListItem', position: 2, name: 'Services', item: '/services' },
    { '@type': 'ListItem', position: 3, name: 'Email Drip Campaigns', item: '/services/email-drip-campaigns' },
  ],
};

const EmailCampaigns = () => {
  return (
    <>
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

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }} />
    </>
  );
};

export default EmailCampaigns;
