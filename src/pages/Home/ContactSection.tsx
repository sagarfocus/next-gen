import { ArrowIcon } from '@/components/icons';
import { SITE } from '@/content/site';

const MAP_EMBED_URL =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3350.9323492505287!2d-96.98322979999999!3d32.8735093!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864e82728572860b%3A0xd7e7c0a9ee1d6a04!2s3001%20Skyway%20Cir%20N%2C%20Irving%2C%20TX%2075038%2C%20USA!5e0!3m2!1sen!2snp!4v1777236289640!5m2!1sen!2snp';

const MAPS_DIR_URL =
  'https://www.google.com/maps/dir/?api=1&destination=3001+Skyway+Cir+N+Irving+TX+75038';

const ContactSection = () => {
  return (
    <section className="contact-section" id="contact" aria-labelledby="contact-title">
      <div className="container-shell">
        <div className="contact-head">
          <span className="contact-eyebrow">Visit Us</span>
          <h2 id="contact-title" className="contact-h2">
            Find us in Irving, Texas.
          </h2>
          <p className="contact-sub">
            Stop by the office or reach our team anytime - we&rsquo;re happy to walk you through the
            Clinic Growth&nbsp;OS in person or over a call.
          </p>
        </div>

        <div className="contact-grid">
          {/* LEFT - Map */}
          <div className="contact-map">
            <span className="map-chip">Office Location</span>
            <iframe
              src={MAP_EMBED_URL}
              width={600}
              height={450}
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`${SITE.name} - ${SITE.address.street}, ${SITE.address.city}, ${SITE.address.region} ${SITE.address.postalCode}`}
            />
          </div>

          {/* RIGHT - Info card */}
          <div className="contact-info">
            <div className="ci-head">
              <span className="ci-eyebrow">Headquarters</span>
              <h3 className="ci-h2">Irving, TX</h3>
            </div>

            <article className="ci-card" aria-labelledby="hq-name">
              <header className="ci-card-head">
                <h4 id="hq-name" className="ci-name">
                  TheNextGen HQ
                </h4>
                <a
                  href={SITE.address.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ci-pin"
                  aria-label="Open location in Google Maps"
                >
                  <ArrowIcon size={14} strokeWidth={1.8} />
                </a>
              </header>

              <div className="ci-rows">
                <a href={`tel:${SITE.phone.tel}`} className="ci-row">
                  <span className="ci-letter" aria-hidden="true">
                    P
                  </span>
                  <span className="ci-text">{SITE.phone.display}</span>
                </a>
                <a href={`mailto:${SITE.email}`} className="ci-row">
                  <span className="ci-letter" aria-hidden="true">
                    E
                  </span>
                  <span className="ci-text">{SITE.email}</span>
                </a>
                <a
                  href={SITE.address.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ci-row"
                >
                  <span className="ci-letter" aria-hidden="true">
                    A
                  </span>
                  <span className="ci-text">
                    {SITE.address.street}
                    <br />
                    {`${SITE.address.city}, ${SITE.address.region} ${SITE.address.postalCode}`}
                    <br />
                    United States
                  </span>
                </a>
                <div className="ci-row" style={{ cursor: 'default' }}>
                  <span className="ci-letter" aria-hidden="true">
                    H
                  </span>
                  <span className="ci-text" style={{ textDecoration: 'none', color: '#4A5568' }}>
                    Mon&ndash;Fri, 9:00am&ndash;6:00pm CT
                  </span>
                </div>
              </div>
            </article>

            <a
              href={MAPS_DIR_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Get Directions
              <ArrowIcon size={14} strokeWidth={2} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
