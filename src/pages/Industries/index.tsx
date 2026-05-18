import { useState } from 'react';
import IndustriesHero from './IndustriesHero';
import IndustriesOverview from './IndustriesOverview';
import IndustryDeepDive from './IndustryDeepDive';
import AllIndustries from './AllIndustries';
import IndustriesFAQ from './IndustriesFAQ';
import BookingModal from '../../components/BookingModal';

const LOCAL_BUSINESS_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'TheNextGen Healthcare Marketing',
  image: 'https://thenextgenhealth.com/og-image.jpg',
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

const Industries = () => {
  const [bookingOpen, setBookingOpen] = useState(false);
  const openBooking = () => setBookingOpen(true);
  const closeBooking = () => setBookingOpen(false);

  return (
    <>
      <IndustriesHero onBook={openBooking} />
      <IndustriesOverview />
      <IndustryDeepDive />
      <AllIndustries />
      <IndustriesFAQ onBook={openBooking} />

      <BookingModal open={bookingOpen} onClose={closeBooking} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(LOCAL_BUSINESS_SCHEMA),
        }}
      />
    </>
  );
};

export default Industries;
