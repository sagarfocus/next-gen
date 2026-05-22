import { ArrowIcon } from '@/components/icons';
import { buildWalkthroughMailto } from './data';

const CTA = () => (
  <section className="amih-cta" aria-labelledby="amih-cta-title">
    <div className="container-shell">
      <div className="amih-cta-frame">
        <div className="amih-cta-copy">
          <span className="amih-cta-eyebrow">Get in touch</span>
          <h2 id="amih-cta-title" className="amih-cta-h2">
            Schedule a free 30-minute automation walkthrough.
          </h2>
          <p className="amih-cta-text">
            Bring your top three manual tasks. We&rsquo;ll show you which
            template fits, what it ships with, and how fast it can be
            live in your stack.
          </p>
          <ul className="amih-cta-list">
            <li>No deck, no pitch - just a working session.</li>
            <li>Includes a one-page summary you can share internally.</li>
            <li>Free, even if you decide not to work with us.</li>
          </ul>
        </div>

        <form
          className="amih-cta-form"
          onSubmit={(e) => {
            e.preventDefault();
            window.location.href = buildWalkthroughMailto(e.currentTarget);
          }}
          aria-label="Walkthrough request"
        >
          <div className="amih-row">
            <label className="amih-field">
              <span>Name</span>
              <input type="text" name="name" autoComplete="name" />
            </label>
            <label className="amih-field">
              <span>Email</span>
              <input type="email" name="email" autoComplete="email" />
            </label>
          </div>
          <div className="amih-row">
            <label className="amih-field">
              <span>Clinic</span>
              <input type="text" name="clinic" />
            </label>
            <label className="amih-field">
              <span>Top manual task</span>
              <input type="text" name="task" />
            </label>
          </div>
          <label className="amih-field">
            <span>What would you automate first?</span>
            <textarea name="message" rows={3} />
          </label>
          <button type="submit" className="amih-btn amih-btn-primary">
            Request walkthrough <ArrowIcon size={14} strokeWidth={2.2} />
          </button>
        </form>
      </div>
    </div>
  </section>
);

export default CTA;
