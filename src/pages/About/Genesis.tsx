import { PRINCIPLES } from '@/content/about/principles';
import vendorImg from '@/assets/nextgen-image/Vendorimg.png';

const Genesis = () => {
  return (
    <section className="ab-genesis" aria-labelledby="ab-gen-title">
      <div className="container-shell">
        <div className="ab-gen-grid">
          <div className="ab-gen-visual" aria-hidden="true">
            <div className="ab-gen-frame">
              <div className="ab-gen-svg">
                <img src={vendorImg} alt="" loading="lazy" decoding="async" />
              </div>
            </div>
          </div>

          <div className="ab-gen-text">
            <span className="ab-gen-eyebrow">Why We Exist</span>
            <h2 id="ab-gen-title" className="ab-gen-h2">
              Transcending the vendor relationship.
            </h2>
            <p>
              Traditional agencies were <strong>actively harming high-volume clinics</strong>.
              Driving thousands of inquiries to Freestanding ERs and Urgent Cares while
              inadvertently crushing the front desk. Marketing was &ldquo;working,&rdquo; but the
              clinic was failing to process the volume.
            </p>
            <p>
              So we became <strong>operational integrators</strong>. We don&rsquo;t just run Google
              Ads - we build the AI chatbots that answer them. We don&rsquo;t just do Local SEO - we
              build the digital intake forms that process the patients who find you.
            </p>

            <div className="ab-gen-principles">
              {PRINCIPLES.map((p) => (
                <div key={p.title} className="ab-gen-principle">
                  <div className="ab-gen-principle-head">
                    <span className="ab-gen-principle-ico" aria-hidden="true">
                      {p.icon}
                    </span>
                    <h3 className="ab-gen-principle-title">{p.title}</h3>
                  </div>
                  <p className="ab-gen-principle-text">{p.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Genesis;
