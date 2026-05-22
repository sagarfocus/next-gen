import InquiryForm from './InquiryForm';
import NewsletterCard from './NewsletterCard';
import HelpCard from './HelpCard';

const ContactInfo = () => {
  return (
    <section className="ct-info" aria-labelledby="ct-info-title">
      <div className="container-shell">
        <div className="ct-info-head">
          <span className="ct-info-eyebrow">Other Ways to Reach Us</span>
          <h2 id="ct-info-title" className="ct-info-h2">
            Prefer email or a quick message?
          </h2>
          <p className="ct-info-sub">
            Send us a general inquiry, subscribe for healthcare marketing insights, or reach our
            team directly through the channels below.
          </p>
        </div>

        <div className="ct-info-grid">
          <InquiryForm />

          <div className="ct-right-stack">
            <NewsletterCard />
            <HelpCard />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
