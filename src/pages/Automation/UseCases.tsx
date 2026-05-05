import { useState } from 'react';
import type { ReactNode } from 'react';

interface UseCase {
  id: string;
  num: string;
  title: ReactNode;
  shortTitle: string;
  body: {
    tag: string;
    h: string;
    p: string;
    bullets: string[];
  };
}

const USE_CASES: UseCase[] = [
  {
    id: '1',
    num: '/01',
    title: (
      <>
        Zero-Touch
        <br />
        Patient Intake
      </>
    ),
    shortTitle: 'Zero-Touch Patient Intake',
    body: {
      tag: 'USE CASE #01:',
      h: 'Zero-Touch Patient Intake',
      p: 'A new patient submits their information online. N8N automatically verifies their insurance coverage, creates a record in your EHR, logs everything to a tracking spreadsheet, and sends a welcome email — all in under 3 seconds. Your front desk never has to touch it.',
      bullets: [
        'Webhook captures patient form data',
        'Insurance eligibility checked in real-time',
        'EHR record created automatically',
        'Confirmation email + Slack notification sent',
      ],
    },
  },
  {
    id: '2',
    num: '/02',
    title: (
      <>
        Intelligent
        <br />
        Review Collection
      </>
    ),
    shortTitle: 'Intelligent Review Collection',
    body: {
      tag: 'USE CASE #02:',
      h: 'Intelligent Review Collection',
      p: "After a visit, the system waits 2 hours then analyzes the patient's satisfaction. Happy patients (4–5 stars) receive a Google review request via SMS and email. Below-threshold patients are routed to a private feedback form, protecting your online reputation.",
      bullets: [
        'Post-visit trigger with smart delay',
        'Sentiment analysis routes patients appropriately',
        'Happy patients → Google review link',
        'Concerns → private feedback form (never public)',
      ],
    },
  },
  {
    id: '3',
    num: '/03',
    title: (
      <>
        AI-Powered
        <br />
        Lead Capture
      </>
    ),
    shortTitle: 'AI-Powered Lead Capture',
    body: {
      tag: 'USE CASE #03:',
      h: 'AI-Powered Lead Capture',
      p: 'A GPT-4 powered chatbot on your website qualifies every visitor. It collects contact info, identifies service interest and urgency, creates CRM entries, and sends urgent Slack alerts for high-priority patients — all without human intervention.',
      bullets: [
        'GPT-4 powered with healthcare guardrails',
        'Extracts name, phone, email, service interest',
        'High-urgency leads → instant Slack alert',
        'Automatic CRM entry + follow-up email',
      ],
    },
  },
];

const PlusIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="12" y1="5" x2="12" y2="19" />
    <line x1="5" y1="12" x2="19" y2="12" />
  </svg>
);

const UseCases = () => {
  const [activeId, setActiveId] = useState('1');
  const [swapping, setSwapping] = useState(false);

  const active = USE_CASES.find((c) => c.id === activeId) ?? USE_CASES[0];

  const handleSelect = (id: string) => {
    if (id === activeId) return;
    setSwapping(true);
    window.setTimeout(() => {
      setActiveId(id);
      setSwapping(false);
    }, 220);
  };

  return (
    <section className="usecases" aria-labelledby="uc-title">
      <div className="container-shell">
        <div className="uc-head reveal">
          <div className="uc-eyebrow">Use cases</div>
          <h2 id="uc-title">
            Real automations
            <br />
            running in production
          </h2>
          <p className="uc-sub">
            Three workflows our partner clinics rely on every day. Click any
            case to see what runs under the hood.
          </p>
        </div>

        <div className="uc-grid">
          <div className="uc-visual" aria-hidden="true">
            <div className="uc-circles">
              <span className="uc-ring uc-r1" />
              <span className="uc-ring uc-r2" />
              <span className="uc-ring uc-r3" />
              <span className="uc-ring uc-r4" />
              <span className="uc-ring uc-r5" />
              <div className={`uc-orb${swapping ? ' is-swap' : ''}`}>
                <span className="uc-orb-num">{active.num}</span>
                <span className="uc-orb-title">{active.title}</span>
              </div>
            </div>
          </div>

          <div className="uc-list" role="tablist">
            {USE_CASES.map((uc) => {
              const isOpen = uc.id === activeId;
              return (
                <button
                  key={uc.id}
                  className={`uc-row${isOpen ? ' is-open' : ''}`}
                  role="tab"
                  aria-selected={isOpen}
                  aria-controls={`uc-${uc.id}`}
                  onClick={() => handleSelect(uc.id)}
                  type="button"
                >
                  <div className="uc-row-head">
                    <span className="uc-row-title">{uc.shortTitle}</span>
                    <span className="uc-row-icon" aria-hidden="true">
                      <PlusIcon />
                    </span>
                  </div>
                  <div className="uc-row-body" id={`uc-${uc.id}`}>
                    <div className="uc-row-tag">{uc.body.tag}</div>
                    <div className="uc-row-h">{uc.body.h}</div>
                    <p className="uc-row-p">{uc.body.p}</p>
                    <ul className="uc-row-list">
                      {uc.body.bullets.map((b) => (
                        <li key={b}>{b}</li>
                      ))}
                    </ul>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCases;
