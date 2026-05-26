import storyBannerImg from '../../assets/nextgen-image/Ourstoryimg.png';
import story1 from '../../assets/nextgen-image/Hippacomplianceimg.png';
import story2 from '../../assets/nextgen-image/Complianceimg.png';
import story3 from '../../assets/nextgen-image/Clinicalimg1.png';
import story4 from '../../assets/nextgen-image/Patientverificationimg.png';
import story5 from '../../assets/nextgen-image/Helathcareimg.png';
import story6 from '../../assets/nextgen-image/Medicalautomationimg.png';

const Story = () => (
  <section className="hcp-story">
    <div className="hcp-story-banner">
      <img src={storyBannerImg} alt="" loading="lazy" decoding="async" />
      <div className="hcp-story-banner-overlay" aria-hidden="true">
        <span className="hcp-story-banner-eyebrow">Our Story</span>
        <h2 className="hcp-story-banner-title">
          Built around clinics. <em>Audited like a hospital.</em>
        </h2>
      </div>
    </div>

    <div className="gt-shell">
      {/* Intro paragraph + collage */}
      <div className="hcp-story-grid">
        <div className="hcp-story-intro">
          <span className="gtx-eyebrow">
            <span className="gtx-eyebrow-dot" aria-hidden="true" />
            Who We Are
          </span>
          <p className="hcp-story-lede">
            At Focus, we are passionate about marketing systems that respect patient privacy and
            protect practices from regulatory risk - engineered for trust, accessibility, and
            compliance from day one.
          </p>
          <p className="hcp-story-sub">
            Built and audited by a senior team that has spent the last decade inside healthcare.
            Every protocol on this page is the same one we hand to your legal counsel before
            signing.
          </p>
        </div>

        <div className="hcp-story-collage" aria-hidden="true">
          <div className="hcp-story-tile tile-1">
            <img src={story1} alt="" loading="lazy" decoding="async" />
          </div>
          <div className="hcp-story-tile tile-2">
            <img src={story2} alt="" loading="lazy" decoding="async" />
          </div>
          <div className="hcp-story-tile tile-3">
            <img src={story3} alt="" loading="lazy" decoding="async" />
          </div>
          <div className="hcp-story-tile tile-4">
            <img src={story4} alt="" loading="lazy" decoding="async" />
          </div>
          <div className="hcp-story-tile tile-5">
            <img src={story5} alt="" loading="lazy" decoding="async" />
          </div>
          <div className="hcp-story-tile tile-6">
            <img src={story6} alt="" loading="lazy" decoding="async" />
          </div>
        </div>
      </div>

      {/* What We Offer block */}
      <div className="hcp-story-offer">
        <div className="hcp-story-offer-left">
          <span className="hcp-story-offer-eyebrow">The Calling</span>
          <h3 className="hcp-story-offer-title">
            What We <em>Offer</em>
          </h3>
        </div>
        <div className="hcp-story-offer-right">
          <p className="hcp-story-offer-lede">
            We specialise in transforming visions into reality. Explore our portfolio of HIPAA-aware
            growth systems for clinics, medspas, and wellness practices - crafted with precision and
            audited every quarter.
          </p>
          <p className="hcp-story-offer-body">
            Every campaign, form, and analytics call is engineered to maintain the security of your
            patient data while still moving the numbers that matter. Assurance that personal
            information is collected and used only with the patient's explicit consent - and that
            the practice never has to second-guess whether a marketing decision will hold up under
            regulator review.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default Story;
