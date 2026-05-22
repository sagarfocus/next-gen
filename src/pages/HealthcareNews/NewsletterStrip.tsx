import { useState } from 'react';
import type { FormEvent } from 'react';
import { ArrowIcon } from '@/components/icons';

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
              private practice are actually reading - plus one new
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
                <ArrowIcon />
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
