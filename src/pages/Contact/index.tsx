import ContactHero from './ContactHero';
import QuoteWizard from './QuoteWizard';
import ContactInfo from './ContactInfo';

const LOCAL_BUSINESS_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'TheNextGen Healthcare Marketing',
  telephone: '+1-972-848-1153',
  email: 'hello@thenextgenhealth.com',
  url: 'https://thenextgenhealth.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '3001 Skyway Circle N',
    addressLocality: 'Irving',
    addressRegion: 'TX',
    postalCode: '75038',
    addressCountry: 'US',
  },
  sameAs: [
    'https://instagram.com/thenextgenhealth',
    'https://facebook.com/thenextgenhealth',
    'https://linkedin.com/company/thenextgenhealth',
  ],
};

const Contact = () => {
  return (
    <>
      <ContactHero />
      <QuoteWizard />
      <ContactInfo />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(LOCAL_BUSINESS_SCHEMA),
        }}
      />
    </>
  );
};

export default Contact;
