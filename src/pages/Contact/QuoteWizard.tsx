import { Fragment, useRef, useState } from 'react';
import type { ReactElement } from 'react';
import { ArrowIcon, ClockIcon } from '@/components/icons';

interface Choice {
  value: string;
  label: string;
  meta: string;
  icon: ReactElement;
}

interface FormData {
  facility: string | null;
  scale: string | null;
  budget: string | null;
  goals: string[];
  name: string;
  email: string;
}

const ICON_BOLT = (
  <svg
    width={20}
    height={20}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.8}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
  </svg>
);
const ICON_CLOCK = <ClockIcon size={20} />;
const ICON_HEART = (
  <svg
    width={20}
    height={20}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.8}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
  </svg>
);
const ICON_GRID = (
  <svg
    width={20}
    height={20}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.8}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="3" y="3" width="7" height="7" rx="1" />
    <rect x="14" y="3" width="7" height="7" rx="1" />
    <rect x="3" y="14" width="7" height="7" rx="1" />
    <rect x="14" y="14" width="7" height="7" rx="1" />
  </svg>
);
const ICON_PIN = (
  <svg
    width={20}
    height={20}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.8}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);
const ICON_DOLLAR = (
  <svg
    width={20}
    height={20}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.8}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="12" y1="1" x2="12" y2="23" />
    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
  </svg>
);
const ICON_PHONE = (
  <svg
    width={20}
    height={20}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.8}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);
const ICON_LOCK = (
  <svg
    width={20}
    height={20}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.8}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
  </svg>
);
const ICON_MAP = (
  <svg
    width={20}
    height={20}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.8}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6" />
    <line x1="8" y1="2" x2="8" y2="18" />
    <line x1="16" y1="6" x2="16" y2="22" />
  </svg>
);
const ICON_STAR = (
  <svg
    width={20}
    height={20}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.8}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polygon points="12 2 15 8.5 22 9.3 17 14.1 18.2 21 12 17.8 5.8 21 7 14.1 2 9.3 9 8.5 12 2" />
  </svg>
);
const ICON_CALENDAR = (
  <svg
    width={20}
    height={20}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.8}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);
const ICON_CHART = (
  <svg
    width={20}
    height={20}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.8}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="12" y1="20" x2="12" y2="10" />
    <line x1="18" y1="20" x2="18" y2="4" />
    <line x1="6" y1="20" x2="6" y2="16" />
  </svg>
);
const ICON_CHECK = (
  <svg
    width={11}
    height={11}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={3.2}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="20 6 9 17 4 12" />
  </svg>
);
const ICON_ARROW_RIGHT = <ArrowIcon size={14} />;
const ICON_ARROW_LEFT = (
  <svg
    width={14}
    height={14}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2.2}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <polyline points="15 18 9 12 15 6" />
  </svg>
);

const FACILITY_CHOICES: Choice[] = [
  {
    value: 'Freestanding ER',
    label: 'Freestanding ER',
    meta: 'High-acuity / trauma',
    icon: ICON_BOLT,
  },
  { value: 'Urgent Care', label: 'Urgent Care', meta: 'Walk-in volume', icon: ICON_CLOCK },
  {
    value: 'Wellness Clinic',
    label: 'Wellness Clinic',
    meta: 'Aesthetic / longevity',
    icon: ICON_HEART,
  },
  {
    value: 'Multi-Specialty',
    label: 'Multi-Specialty',
    meta: 'Combined practice',
    icon: ICON_GRID,
  },
];

const SCALE_CHOICES: Choice[] = [
  { value: '1 Location', label: '1 Location', meta: 'Single-site practice', icon: ICON_PIN },
  { value: '2 - 5 Locations', label: '2 – 5 Locations', meta: 'Small group', icon: ICON_PIN },
  {
    value: '6 - 10 Locations',
    label: '6 – 10 Locations',
    meta: 'Mid-size network',
    icon: ICON_PIN,
  },
  { value: '10+ Locations', label: '10+ Locations', meta: 'Enterprise', icon: ICON_PIN },
];

const BUDGET_CHOICES: Choice[] = [
  { value: 'Under $5,000', label: 'Under $5,000', meta: 'Starter budget', icon: ICON_DOLLAR },
  { value: '$5,000 - $15,000', label: '$5K – $15K', meta: 'Growth phase', icon: ICON_DOLLAR },
  { value: '$15,000 - $50,000', label: '$15K – $50K', meta: 'Scale', icon: ICON_DOLLAR },
  { value: '$50,000+', label: '$50,000+', meta: 'Enterprise', icon: ICON_DOLLAR },
];

const GOAL_CHOICES: Choice[] = [
  {
    value: 'Increase Call Volume',
    label: 'Increase Call Volume',
    meta: 'More patient inquiries',
    icon: ICON_PHONE,
  },
  {
    value: 'Reduce Front-Desk Load',
    label: 'Reduce Front-Desk Load',
    meta: 'AI intake automation',
    icon: ICON_LOCK,
  },
  {
    value: 'Improve Map Rankings',
    label: 'Improve Map Rankings',
    meta: 'Local pack visibility',
    icon: ICON_MAP,
  },
  {
    value: 'Automate Reviews',
    label: 'Automate Reviews',
    meta: 'Reputation management',
    icon: ICON_STAR,
  },
  {
    value: 'Implement AI Scheduling',
    label: 'AI Scheduling',
    meta: 'Automated booking',
    icon: ICON_CALENDAR,
  },
  {
    value: 'Lower Cost Per Acquisition',
    label: 'Lower Cost Per Acquisition',
    meta: 'Better ROI on spend',
    icon: ICON_CHART,
  },
];

const STEP_LABELS = ['Facility', 'Scale', 'Budget', 'Goals', 'Contact'];
const TOTAL_STEPS = 5;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const ChoiceButton = ({
  choice,
  selected,
  onClick,
}: {
  choice: Choice;
  selected: boolean;
  onClick: () => void;
}) => (
  <button type="button" className={`ct-choice${selected ? ' is-selected' : ''}`} onClick={onClick}>
    <span className="ct-choice-ico" aria-hidden="true">
      {choice.icon}
    </span>
    <span className="ct-choice-body">
      <span className="ct-choice-label">{choice.label}</span>
      <span className="ct-choice-meta">{choice.meta}</span>
    </span>
    <span className="ct-choice-check" aria-hidden="true">
      {ICON_CHECK}
    </span>
  </button>
);

const QuoteWizard = () => {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [data, setData] = useState<FormData>({
    facility: null,
    scale: null,
    budget: null,
    goals: [],
    name: '',
    email: '',
  });
  const sectionRef = useRef<HTMLDivElement>(null);

  const setSingle = (key: 'facility' | 'scale' | 'budget') => (value: string) => {
    setData((d) => ({ ...d, [key]: value }));
  };
  const toggleGoal = (value: string) => {
    setData((d) => ({
      ...d,
      goals: d.goals.includes(value) ? d.goals.filter((g) => g !== value) : [...d.goals, value],
    }));
  };

  const isValid =
    (step === 1 && data.facility !== null) ||
    (step === 2 && data.scale !== null) ||
    (step === 3 && data.budget !== null) ||
    (step === 4 && data.goals.length > 0) ||
    (step === 5 && data.name.trim().length > 1 && EMAIL_RE.test(data.email.trim()));

  const handleNext = () => {
    if (!isValid) return;
    if (step < TOTAL_STEPS) {
      setStep(step + 1);
      if (sectionRef.current) {
        const top = sectionRef.current.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    } else {
      setSubmitted(true);
      // Production hook: submit `data` to backend here.
    }
  };
  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const counter = String(step).padStart(2, '0');
  const nextLabel = step === TOTAL_STEPS ? 'Submit Quote Request' : 'Continue';

  return (
    <section ref={sectionRef} className="ct-quote" aria-labelledby="quote-title">
      <div className="container-shell">
        <div className="ct-quote-card reveal d3">
          <div className="ct-progress" aria-label="Quote progress">
            {STEP_LABELS.map((label, i) => {
              const stepNum = i + 1;
              const cls = [
                'ct-progress-step',
                stepNum === step && 'is-active',
                stepNum < step && 'is-done',
              ]
                .filter(Boolean)
                .join(' ');
              return (
                <Fragment key={label}>
                  <div className={cls}>
                    <span className="num">{stepNum}</span>
                    <span>{label}</span>
                  </div>
                  {stepNum < TOTAL_STEPS && <span className="ct-progress-bar" />}
                </Fragment>
              );
            })}
          </div>

          {/* STEP 1: Facility */}
          <div className={`ct-step${step === 1 ? ' is-active' : ''}`}>
            <span className="ct-step-tag">Step 01 - Facility Type</span>
            <h2 id="quote-title" className="ct-step-title">
              Which type of facility do you operate?
            </h2>
            <p className="ct-step-sub">
              Each specialty has its own patient psychology and acquisition dynamics. We&rsquo;ll
              match you with the right playbook.
            </p>
            <div className="ct-choices cols-4" role="radiogroup">
              {FACILITY_CHOICES.map((c) => (
                <ChoiceButton
                  key={c.value}
                  choice={c}
                  selected={data.facility === c.value}
                  onClick={() => setSingle('facility')(c.value)}
                />
              ))}
            </div>
          </div>

          {/* STEP 2: Scale */}
          <div className={`ct-step${step === 2 ? ' is-active' : ''}`}>
            <span className="ct-step-tag">Step 02 - Scale Metrics</span>
            <h2 className="ct-step-title">How many physical locations do you operate?</h2>
            <p className="ct-step-sub">
              Scale changes everything - from local SEO strategy to multi-location reputation
              systems.
            </p>
            <div className="ct-choices cols-4" role="radiogroup">
              {SCALE_CHOICES.map((c) => (
                <ChoiceButton
                  key={c.value}
                  choice={c}
                  selected={data.scale === c.value}
                  onClick={() => setSingle('scale')(c.value)}
                />
              ))}
            </div>
          </div>

          {/* STEP 3: Budget */}
          <div className={`ct-step${step === 3 ? ' is-active' : ''}`}>
            <span className="ct-step-tag">Step 03 - Financial Qualifier</span>
            <h2 className="ct-step-title">Current or projected monthly ad spend?</h2>
            <p className="ct-step-sub">
              This helps us scope the right channel mix and forecast realistic patient acquisition
              velocity for your practice.
            </p>
            <div className="ct-choices cols-4" role="radiogroup">
              {BUDGET_CHOICES.map((c) => (
                <ChoiceButton
                  key={c.value}
                  choice={c}
                  selected={data.budget === c.value}
                  onClick={() => setSingle('budget')(c.value)}
                />
              ))}
            </div>
          </div>

          {/* STEP 4: Goals */}
          <div className={`ct-step${step === 4 ? ' is-active' : ''}`}>
            <span className="ct-step-tag">Step 04 - Primary Objectives</span>
            <h2 className="ct-step-title">What are your main growth objectives?</h2>
            <p className="ct-step-sub">
              Select all that apply - we&rsquo;ll prioritize the right tactics in your custom
              roadmap.
            </p>
            <div className="ct-choices cols-3" role="group">
              {GOAL_CHOICES.map((c) => (
                <ChoiceButton
                  key={c.value}
                  choice={c}
                  selected={data.goals.includes(c.value)}
                  onClick={() => toggleGoal(c.value)}
                />
              ))}
            </div>
          </div>

          {/* STEP 5: Contact */}
          <div className={`ct-step${step === 5 ? ' is-active' : ''}`}>
            <span className="ct-step-tag">Step 05 - Your Contact</span>
            <h2 className="ct-step-title">Where should we send your custom roadmap?</h2>
            <p className="ct-step-sub">
              We&rsquo;ll send your tailored growth plan and pricing within 4 business hours -
              straight to your inbox.
            </p>
            <div className="ct-fields">
              <div className="ct-field">
                <label className="ct-label" htmlFor="ct-name">
                  Full Name <span className="req">*</span>
                </label>
                <input
                  className="ct-input"
                  id="ct-name"
                  type="text"
                  placeholder="Dr. Jane Smith"
                  autoComplete="name"
                  value={data.name}
                  onChange={(e) => setData((d) => ({ ...d, name: e.target.value }))}
                />
              </div>
              <div className="ct-field">
                <label className="ct-label" htmlFor="ct-email">
                  Work Email <span className="req">*</span>
                </label>
                <input
                  className="ct-input"
                  id="ct-email"
                  type="email"
                  placeholder="jane@yourpractice.com"
                  autoComplete="email"
                  value={data.email}
                  onChange={(e) => setData((d) => ({ ...d, email: e.target.value }))}
                />
              </div>
            </div>
          </div>

          {/* Success state */}
          <div className={`ct-success${submitted ? ' is-shown' : ''}`}>
            <div className="ct-success-ico" aria-hidden="true">
              <svg
                width={40}
                height={40}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2.4}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <h3>Your roadmap is on the way.</h3>
            <p>
              We&rsquo;ve received your details and will respond within 4 business hours with a
              custom marketing plan tailored to your practice.
            </p>
          </div>

          {/* Action footer */}
          {!submitted && (
            <div className="ct-actions">
              <span className="ct-step-counter">
                <strong>{counter}</strong> / 05 Steps
              </span>
              <div className="ct-actions-buttons">
                <button
                  type="button"
                  className="ct-back"
                  disabled={step === 1}
                  onClick={handleBack}
                >
                  {ICON_ARROW_LEFT}
                  Back
                </button>
                <button type="button" className="ct-next" disabled={!isValid} onClick={handleNext}>
                  <span>{nextLabel}</span>
                  <span className="ico" aria-hidden="true">
                    {ICON_ARROW_RIGHT}
                  </span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default QuoteWizard;
