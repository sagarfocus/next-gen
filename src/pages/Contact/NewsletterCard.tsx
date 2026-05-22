import { useState } from 'react';
import type { FormEvent } from 'react';
import { ArrowIcon } from '@/components/icons';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const NewsletterCard = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!EMAIL_RE.test(email.trim())) {
      alert('Please enter a valid email.');
      return;
    }
    alert('Subscribed! Check your inbox for the next issue.');
    setEmail('');
  };

  return (
    <aside className="ct-newsletter" aria-labelledby="news-title">
      <span className="ct-form-eyebrow">Our Newsletter</span>
      <h3 id="news-title" className="ct-form-title">
        Healthcare growth, weekly.
      </h3>
      <p className="ct-form-text">
        Field-tested patient acquisition tactics, HIPAA updates, and case studies from 200+ Texas
        practices - delivered every Tuesday morning. No fluff, no spam.
      </p>

      <form className="ct-news-form" onSubmit={handleSubmit} noValidate>
        <input
          type="email"
          className="ct-news-input"
          placeholder="Enter your work email"
          autoComplete="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit" className="ct-news-btn">
          Subscribe
          <ArrowIcon size={14} />
        </button>
      </form>
    </aside>
  );
};

export default NewsletterCard;
