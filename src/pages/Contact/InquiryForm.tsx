import { useState } from 'react';
import type { FormEvent } from 'react';
import { useTranslation } from 'react-i18next';
import { ChevronDownIcon } from '@/components/icons';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const InquiryForm = () => {
  const { t } = useTranslation('contact');
  const [first, setFirst] = useState('');
  const [last, setLast] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!first.trim() || !last.trim() || !email.trim() || !message.trim()) {
      alert(t('inquiry.errors.missing'));
      return;
    }
    if (!EMAIL_RE.test(email.trim())) {
      alert(t('inquiry.errors.invalidEmail'));
      return;
    }
    alert(t('inquiry.success'));
    setFirst('');
    setLast('');
    setEmail('');
    setPhone('');
    setMessage('');
  };

  return (
    <form className="ct-form-card iq-form" onSubmit={handleSubmit} noValidate>
      <span className="ct-form-eyebrow">{t('inquiry.eyebrow')}</span>
      <h3 className="ct-form-title">{t('inquiry.title')}</h3>
      <p className="ct-form-text">{t('inquiry.text')}</p>

      <div className="iq-fields">
        <div className="iq-field">
          <label className="iq-label" htmlFor="iq-first">
            {t('inquiry.firstName')}
          </label>
          <input
            className="iq-input"
            id="iq-first"
            type="text"
            placeholder={t('inquiry.firstNamePlaceholder')}
            autoComplete="given-name"
            required
            value={first}
            onChange={(e) => setFirst(e.target.value)}
          />
        </div>
        <div className="iq-field">
          <label className="iq-label" htmlFor="iq-last">
            {t('inquiry.lastName')}
          </label>
          <input
            className="iq-input"
            id="iq-last"
            type="text"
            placeholder={t('inquiry.lastNamePlaceholder')}
            autoComplete="family-name"
            required
            value={last}
            onChange={(e) => setLast(e.target.value)}
          />
        </div>
        <div className="iq-field">
          <label className="iq-label" htmlFor="iq-email">
            {t('inquiry.email')}
          </label>
          <input
            className="iq-input"
            id="iq-email"
            type="email"
            placeholder={t('inquiry.emailPlaceholder')}
            autoComplete="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="iq-field">
          <label className="iq-label" htmlFor="iq-phone">
            {t('inquiry.phone')}
          </label>
          <div className="iq-phone-wrap">
            <button type="button" className="iq-cc" aria-label={t('inquiry.countryCodeAria')}>
              +1
              <ChevronDownIcon size={10} />
            </button>
            <input
              className="iq-input iq-phone-input"
              id="iq-phone"
              type="tel"
              placeholder={t('inquiry.phonePlaceholder')}
              autoComplete="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
        </div>
        <div className="iq-field iq-field-full">
          <label className="iq-label" htmlFor="iq-message">
            {t('inquiry.message')}
          </label>
          <textarea
            className="iq-input iq-textarea"
            id="iq-message"
            placeholder={t('inquiry.messagePlaceholder')}
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
      </div>

      <div className="iq-footer">
        <button type="submit" className="iq-submit">
          {t('inquiry.submit')}
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
