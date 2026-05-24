import ContactHero from './ContactHero';
import QuoteWizard from './QuoteWizard';
import ContactInfo from './ContactInfo';
import Seo from '@/components/Seo';
import { buildBreadcrumbList } from '@/lib/schema';

const BREADCRUMB_SCHEMA = buildBreadcrumbList([
  { name: 'Home', path: '/' },
  { name: 'Contact' },
]);

const Contact = () => {
  return (
    <>
      <Seo
        title="Contact TheNextGen — Healthcare Marketing in Irving, Texas"
        description="Tell us about your practice — we respond within 4 business hours with a custom roadmap. Calls, audits and quotes for clinics, medspas, urgent care & ERs."
        path="/contact"
        schema={BREADCRUMB_SCHEMA}
      />

      <ContactHero />
      <QuoteWizard />
      <ContactInfo />
    </>
  );
};

export default Contact;
