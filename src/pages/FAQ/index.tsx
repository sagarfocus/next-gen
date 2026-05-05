import FAQHead from './FAQHead';
import FAQList from './FAQList';
import WhyUs from './WhyUs';

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How long does onboarding take from signed contract to first campaign live?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For most clinics, you go from signed contract to first campaign live in 10–14 business days. Practices with already-running ad accounts often launch in as little as a week.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are you HIPAA-compliant, and do you sign Business Associate Agreements?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. We operate as a HIPAA-aware Business Associate and execute a BAA at the start of every engagement that touches PHI.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does a typical engagement cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Retainers start at $2,500/month for solo practitioners on a single channel and scale up to $15K+/month for multi-location specialty groups. Ad spend is separate and goes directly to platforms with no markup.',
      },
    },
  ],
};

const FAQ = () => {
  return (
    <>
      <FAQHead />
      <FAQList />
      <WhyUs />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }}
      />
    </>
  );
};

export default FAQ;
