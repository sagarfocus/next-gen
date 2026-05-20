import { useState } from 'react';
import type { FormEvent } from 'react';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const InquiryForm = () => {
  const [first, setFirst] = useState('');
  const [last, setLast] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!first.trim() || !last.trim() || !email.trim() || !message.trim()) {
      alert('Please fill in first name, last name, email, and message.');
      return;
    }
    if (!EMAIL_RE.test(email.trim())) {
      alert('Please enter a valid email.');
      return;
    }
    alert('Message sent! We will respond within 4 hours.');
    setFirst('');
    setLast('');
    setEmail('');
    setPhone('');
    setMessage('');
  };

  return (
    <form className="ct-form-card iq-form" onSubmit={handleSubmit} noValidate>
      <span className="ct-form-eyebrow">General Inquiry</span>
      <h3 className="ct-form-title">Send us a message</h3>
      <p className="ct-form-text">
        Have a question, a complaint, or need help choosing the right service
        for your practice? Feel free to contact us - we typically reply in
        under 4 hours.
      </p>

      <div className="iq-fields">
        <div className="iq-field">
          <label className="iq-label" htmlFor="iq-first">
            First Name
          </label>
          <input
            className="iq-input"
            id="iq-first"
            type="text"
            placeholder="Enter your first name"
            autoComplete="given-name"
            required
            value={first}
            onChange={(e) => setFirst(e.target.value)}
          />
        </div>
        <div className="iq-field">
          <label className="iq-label" htmlFor="iq-last">
            Last Name
          </label>
          <input
            className="iq-input"
            id="iq-last"
            type="text"
            placeholder="Enter your last name"
            autoComplete="family-name"
            required
            value={last}
            onChange={(e) => setLast(e.target.value)}
          />
        </div>
        <div className="iq-field">
          <label className="iq-label" htmlFor="iq-email">
            Email
          </label>
          <input
            className="iq-input"
            id="iq-email"
            type="email"
            placeholder="Enter your email"
            autoComplete="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="iq-field">
          <label className="iq-label" htmlFor="iq-phone">
            Contact Details
          </label>
          <div className="iq-phone-wrap">
            <button type="button" className="iq-cc" aria-label="Country code">
              +1
              <svg
                width={10}
                height={10}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2.2}
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>
            <input
              className="iq-input iq-phone-input"
              id="iq-phone"
              type="tel"
              placeholder="Enter your contact number"
              autoComplete="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
        </div>
        <div className="iq-field iq-field-full">
          <label className="iq-label" htmlFor="iq-message">
            Message
          </label>
          <textarea
            className="iq-input iq-textarea"
            id="iq-message"
            placeholder="Enter your message"
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
      </div>

      <div className="iq-footer">
        <button type="submit" className="iq-submit">
          Send a Message
          <span className="ico" aria-hidden="true">
            <svg
              width={14}
              height={14}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2.4}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="22" y1="2" x2="11" y2="13" />
              <polygon points="22 2 15 22 11 13 2 9 22 2" />
            </svg>
          </span>
        </button>
      </div>
    </form>
  );
};

export default InquiryForm;
