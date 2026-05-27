import { useState } from 'react';
import type { FormEvent } from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowIcon } from '@/components/icons';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const NewsletterCard = () => {
  const { t } = useTranslation('contact');
  const [email, setEmail] = useState('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!EMAIL_RE.test(email.trim())) {
      alert(t('newsletter.invalidEmail'));
      return;
    }
    alert(t('newsletter.success'));
    setEmail('');
  };

  return (
    <aside className="ct-newsletter" aria-labelledby="news-title">
      <span className="ct-form-eyebrow">{t('newsletter.eyebrow')}</span>
      <h3 id="news-title" className="ct-form-title">
        {t('newsletter.title')}
      </h3>
      <p className="ct-form-text">{t('newsletter.text')}</p>

      <form className="ct-news-form" onSubmit={handleSubmit} noValidate>
        <input
          type="email"
          className="ct-news-input"
          placeholder={t('newsletter.placeholder')}
          autoComplete="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit" className="ct-news-btn">
          {t('newsletter.submit')}
          <ArrowIcon size={14} />
        </button>
      </form>
    </aside>
  );
};

export default NewsletterCard;
