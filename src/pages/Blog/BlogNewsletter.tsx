import { useState } from 'react';
import type { FormEvent } from 'react';
import { ArrowIcon } from '@/components/icons';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const BlogNewsletter = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!EMAIL_RE.test(email.trim())) {
      alert('Please enter a valid email.');
      return;
    }
    alert('Subscribed! Look for the next issue Tuesday morning.');
    setEmail('');
  };

  return (
    <section className="bl-news" id="bl-news" aria-labelledby="bl-news-title">
      <div className="container-shell">
        <div className="bl-news-card">
          <div className="bl-news-grid">
            <div>
              <span className="bl-news-eyebrow">Subscribe</span>
              <h2 id="bl-news-title" className="bl-news-h2">
                Get healthcare growth tactics in your inbox.
              </h2>
              <p className="bl-news-text">
                One field-tested patient acquisition tactic, HIPAA update, or
                case study every Tuesday morning. Read by 4,000+ practice
                managers across Texas. No fluff, no spam.
              </p>
            </div>

            <form className="bl-news-form" onSubmit={handleSubmit} noValidate>
              <input
                type="email"
                placeholder="Enter your work email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button type="submit">
                Subscribe
                <ArrowIcon size={14} />
              </button>
              <p className="bl-news-disclaimer">
                Unsubscribe anytime. We never share email addresses.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogNewsletter;
