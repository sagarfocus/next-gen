import ContactHero from './ContactHero';
import QuoteWizard from './QuoteWizard';
import ContactInfo from './ContactInfo';
import { SITE } from '@/content/site';

const LOCAL_BUSINESS_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: SITE.legalName,
  telephone: SITE.phone.intl,
  email: SITE.email,
  url: SITE.url,
  address: {
    '@type': 'PostalAddress',
    streetAddress: SITE.address.street,
    addressLocality: SITE.address.city,
    addressRegion: SITE.address.region,
    postalCode: SITE.address.postalCode,
    addressCountry: SITE.address.country,
  },
  sameAs: [SITE.social.instagram, SITE.social.facebook, SITE.social.linkedin],
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
