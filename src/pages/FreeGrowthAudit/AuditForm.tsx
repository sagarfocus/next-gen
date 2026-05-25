import { useState, type FormEvent } from 'react';
import { ArrowIcon, CheckIcon } from '@/components/icons';

interface AuditFormProps {
  variant?: 'hero' | 'closing';
  /** id used by aria-labelledby — pass the heading's id */
  labelledBy?: string;
}

const PRACTICE_TYPES = [
  'Dental',
  'Med Spa / Aesthetics',
  'Urgent Care',
  'Primary Care',
  'Mental Health',
  'Dermatology',
  'Plastic Surgery',
  'Specialty / ER',
  'Other healthcare',
];

const AuditForm = ({ variant = 'hero', labelledBy }: AuditFormProps) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [website, setWebsite] = useState('');
  const [practice, setPractice] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);

    if (!name.trim() || !email.trim() || !website.trim() || !practice) {
      setError('Please fill every field — name, email, website, and practice type.');
      return;
    }
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setError('That email does not look quite right. Could you double-check?');
      return;
    }

    const body = encodeURIComponent(
      `Free Growth Audit request%0D%0A%0D%0A` +
        `Name: ${name}%0D%0A` +
        `Email: ${email}%0D%0A` +
        `Website: ${website}%0D%0A` +
        `Practice type: ${practice}`,
    );
    window.location.href = `mailto:hello@thenextgenhealth.com?subject=Free%20Growth%20Audit%20Request&body=${body}`;
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className={`fga-form fga-form-${variant} fga-form-success`} role="status" aria-live="polite">
        <div className="fga-form-success-icon" aria-hidden="true">
          <CheckIcon size={28} />
        </div>
        <h3 className="fga-form-success-h">Your audit is on the way.</h3>
        <p className="fga-form-success-p">
          We&rsquo;ll confirm by email within one business hour and ship the report in five business
          days. No card, no upsell.
        </p>
      </div>
    );
  }

  return (
    <form
      className={`fga-form fga-form-${variant}`}
      onSubmit={handleSubmit}
      aria-labelledby={labelledBy}
      noValidate
    >
      <div className="fga-form-row">
        <label className="fga-form-field">
          <span className="fga-form-label">Your name</span>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Dr. Jane Smith"
            autoComplete="name"
            required
          />
        </label>
        <label className="fga-form-field">
          <span className="fga-form-label">Work email</span>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="jane@yourpractice.com"
            autoComplete="email"
            required
          />
        </label>
      </div>
      <div className="fga-form-row">
        <label className="fga-form-field">
          <span className="fga-form-label">Practice website</span>
          <input
            type="text"
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
            placeholder="yourpractice.com"
            autoComplete="url"
            required
          />
        </label>
        <label className="fga-form-field">
          <span className="fga-form-label">Practice type</span>
          <select value={practice} onChange={(e) => setPractice(e.target.value)} required>
            <option value="" disabled>
              Choose one
            </option>
            {PRACTICE_TYPES.map((p) => (
              <option key={p} value={p}>
                {p}
              </option>
            ))}
          </select>
        </label>
      </div>
      {error && (
        <p className="fga-form-error" role="alert">
          {error}
        </p>
      )}
      <button type="submit" className="fga-form-submit">
        Start my free audit
        <ArrowIcon size={16} />
      </button>
      <p className="fga-form-fine">
        <span className="fga-form-fine-dot" aria-hidden="true" />
        5-day delivery · No credit card · HIPAA-aware · Your data stays yours
      </p>
    </form>
  );
};

export default AuditForm;
