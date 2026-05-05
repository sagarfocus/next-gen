import { useState } from 'react';
import type { FormEvent } from 'react';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const NewsletterStrip = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!EMAIL_RE.test(email.trim())) {
      alert('Please enter a valid email.');
      return;
    }
    alert('Subscribed! Issue №048 ships Friday.');
    setEmail('');
  };

  return (
    <section className="news-strip">
      <div className="container-shell">
        <div className="ns-grid">
          <div>
            <div className="ns-eyebrow">The Weekly Brief</div>
            <h2 className="ns-title">
              One healthcare-marketing email each Friday. No filler.
            </h2>
            <p className="ns-desc">
              Every Friday morning we send the five stories your peers in
              private practice are actually reading &mdash; plus one new
              automation template, free.
            </p>
          </div>
          <form className="ns-form" onSubmit={handleSubmit} noValidate>
            <div className="ns-input-wrap">
              <input
                className="ns-input"
                type="email"
                placeholder="your@clinic.com"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button className="ns-submit" type="submit">
                Subscribe
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2.4}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </button>
            </div>
            <p className="ns-fine">
              Issue №048 ships Friday. Unsubscribe in one click. No tracking
              pixels.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default NewsletterStrip;
