import { useState } from 'react';
import type { FormEvent } from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowIcon } from '@/components/icons';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const BlogNewsletter = () => {
  const { t } = useTranslation('blog');
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
    <section className="bl-news" id="bl-news" aria-labelledby="bl-news-title">
      <div className="container-shell">
        <div className="bl-news-card">
          <div className="bl-news-grid">
            <div>
              <span className="bl-news-eyebrow">{t('newsletter.eyebrow')}</span>
              <h2 id="bl-news-title" className="bl-news-h2">
                {t('newsletter.title')}
              </h2>
              <p className="bl-news-text">{t('newsletter.text')}</p>
            </div>

            <form className="bl-news-form" onSubmit={handleSubmit} noValidate>
              <input
                type="email"
                placeholder={t('newsletter.placeholder')}
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button type="submit">
                {t('newsletter.submit')}
                <ArrowIcon size={14} />
              </button>
              <p className="bl-news-disclaimer">{t('newsletter.disclaimer')}</p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogNewsletter;
