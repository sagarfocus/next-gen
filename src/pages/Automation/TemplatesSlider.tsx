import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import type { CSSProperties, KeyboardEvent, ReactElement, TouchEvent } from 'react';
import { ArrowIcon, ChevronRightIcon, ClockIcon } from '@/components/icons';

interface Template {
  desc: string;
  tags: string[];
  title: string;
  nodes: string;
  icon: ReactElement;
}

const TEMPLATES: Template[] = [
  {
    desc: 'Auto-collect patient info via webhook, verify insurance, create EHR records, log to Google Sheets, and send confirmation emails plus Slack alerts - all without front-desk involvement.',
    tags: ['Intake', 'Insurance', 'EHR'],
    title: 'Patient Intake Automation',
    nodes: '7 nodes · N8N workflow',
    icon: (
      <svg
        width={22}
        height={22}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="9" y1="13" x2="15" y2="13" />
        <line x1="9" y1="17" x2="15" y2="17" />
      </svg>
    ),
  },
  {
    desc: 'Automated 24-hour and 2-hour SMS plus email reminders via Twilio. Cuts no-show rates by up to 40% with zero staff effort and pulls everything from your existing calendar.',
    tags: ['SMS', 'Reminders', 'No-Shows'],
    title: 'Appointment Reminder & No-Show Recovery',
    nodes: '8 nodes · N8N workflow',
    icon: <ClockIcon size={22} />,
  },
  {
    desc: 'Sentiment-based routing: happy patients receive a Google review request, others get a private feedback form. Reputation management runs itself, no manual triage needed.',
    tags: ['Reviews', 'Reputation', 'Google'],
    title: 'Google Review Collection',
    nodes: '8 nodes · N8N workflow',
    icon: (
      <svg
        width={22}
        height={22}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polygon points="12 2 15 9 22 9 17 14 19 21 12 17 5 21 7 14 2 9 9 9 12 2" />
      </svg>
    ),
  },
  {
    desc: 'Real-time eligibility checks, copay and deductible lookup, automatic pre-auth submission, and Slack alerts to front desk and billing - every patient verified before they walk in.',
    tags: ['Insurance', 'Billing', 'Verification'],
    title: 'Insurance Verification Bot',
    nodes: '9 nodes · N8N workflow',
    icon: (
      <svg
        width={22}
        height={22}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <polyline points="9 12 11 14 15 10" />
      </svg>
    ),
  },
  {
    desc: 'A GPT-powered chatbot qualifies leads, extracts contact info, creates CRM entries, and pings Slack the moment a high-priority patient lands on your site - no human intervention required.',
    tags: ['AI', 'Chatbot', 'Lead Gen'],
    title: 'AI Chatbot Lead Capture',
    nodes: '10 nodes · N8N workflow',
    icon: (
      <svg
        width={22}
        height={22}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        <line x1="9" y1="10" x2="9.01" y2="10" />
        <line x1="15" y1="10" x2="15.01" y2="10" />
      </svg>
    ),
  },
  {
    desc: 'AI-generated captions from your content calendar auto-posted to Facebook and Instagram daily, with team notifications and a reviewable queue. Set it once, ship every day.',
    tags: ['Social Media', 'AI Content', 'Marketing'],
    title: 'Social Media Auto-Poster',
    nodes: '9 nodes · N8N workflow',
    icon: (
      <svg
        width={22}
        height={22}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
      </svg>
    ),
  },
];

const QuoteIcon = () => (
  <svg viewBox="0 0 56 44" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M0 44V26.4C0 19.7 1.5 13.7 4.4 8.5 7.4 3.2 11.7 0 17.4 0v8.4c-3.2 1.4-5.6 3.4-7.2 6.1-1.5 2.7-2.3 5.6-2.3 8.7H17V44H0zm32 0V26.4c0-6.7 1.5-12.7 4.4-17.9C39.4 3.2 43.7 0 49.4 0v8.4c-3.2 1.4-5.6 3.4-7.2 6.1-1.5 2.7-2.3 5.6-2.3 8.7H49V44H32z" />
  </svg>
);

const DownloadIcon = () => (
  <svg
    width={14}
    height={14}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2.2}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" y1="15" x2="12" y2="3" />
  </svg>
);

const visibleForWidth = (w: number) => (w <= 1024 ? 1 : 2);

const TemplatesSlider = () => {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(() =>
    typeof window === 'undefined' ? 2 : visibleForWidth(window.innerWidth)
  );
  const trackRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLElement>(null);
  const touchStartX = useRef<number | null>(null);

  const total = TEMPLATES.length;
  const maxIndex = Math.max(0, total - visible);

  useEffect(() => {
    let resizeT: number | undefined;
    const onResize = () => {
      if (resizeT) window.clearTimeout(resizeT);
      resizeT = window.setTimeout(() => {
        const v = visibleForWidth(window.innerWidth);
        setVisible(v);
        setIndex((i) => Math.min(i, Math.max(0, total - v)));
      }, 120);
    };
    window.addEventListener('resize', onResize, { passive: true });
    return () => {
      window.removeEventListener('resize', onResize);
      if (resizeT) window.clearTimeout(resizeT);
    };
  }, [total]);

  useLayoutEffect(() => {
    const track = trackRef.current;
    const card = cardRef.current;
    if (!track || !card) return;
    const cw = card.getBoundingClientRect().width;
    const gapStr = getComputedStyle(track).columnGap || getComputedStyle(track).gap;
    const gap = parseInt(gapStr, 10) || 64;
    track.style.transform = `translateX(-${index * (cw + gap)}px)`;
  }, [index, visible]);

  const go = useCallback(
    (delta: number) => {
      setIndex((i) => Math.max(0, Math.min(maxIndex, i + delta)));
    },
    [maxIndex]
  );

  const onKey = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'ArrowLeft') go(-1);
    if (e.key === 'ArrowRight') go(1);
  };

  const onTouchStart = (e: TouchEvent<HTMLDivElement>) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: TouchEvent<HTMLDivElement>) => {
    if (touchStartX.current == null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    touchStartX.current = null;
    if (Math.abs(dx) > 40) go(dx < 0 ? 1 : -1);
  };

  const minFill = (visible / total) * 100;
  const span = 100 - minFill;
  const ratio = maxIndex === 0 ? 1 : index / maxIndex;
  const fillWidth = `${minFill + span * ratio}%`;

  return (
    <section className="templates" id="templates" aria-labelledby="tpl-title">
      <div className="container-shell">
        <div className="templates-head">
          <div className="reveal">
            <span className="free-pill">
              <span className="check">
                <svg
                  width={8}
                  height={8}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={3.5}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </span>
              100% Free - No Signup Required
            </span>
            <h2 className="section-title" id="tpl-title">
              Plug-and-Play N8N Templates
            </h2>
          </div>
          <p className="right reveal d2">
            Download ready-to-import JSON workflow files. Each template is a complete automation -
            just connect your credentials and activate.
          </p>
        </div>

        <div
          className="slider-wrap reveal d3"
          tabIndex={0}
          onKeyDown={onKey}
          aria-roledescription="carousel"
        >
          <div className="slider-track-wrap" onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
            <div className="slider-track" ref={trackRef}>
              {TEMPLATES.map((tpl, i) => (
                <article key={tpl.title} ref={i === 0 ? cardRef : undefined} className="tpl-card">
                  <div className="tpl-quote" aria-hidden="true">
                    <QuoteIcon />
                  </div>
                  <p className="tpl-desc">{tpl.desc}</p>
                  <div className="tpl-tags">
                    {tpl.tags.map((tag) => (
                      <span key={tag} className="tpl-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="tpl-author">
                    <div className="tpl-icon">{tpl.icon}</div>
                    <div className="tpl-author-meta">
                      <h3 className="tpl-title">{tpl.title}</h3>
                      <span className="tpl-nodes">{tpl.nodes}</span>
                    </div>
                  </div>
                  <a href="#" className="tpl-dl">
                    Download JSON Template
                    <DownloadIcon />
                  </a>
                </article>
              ))}
            </div>
          </div>

          <div className="slider-controls">
            <div className="slider-progress" aria-hidden="true">
              <div className="slider-fill" style={{ width: fillWidth } as CSSProperties} />
            </div>
            <div className="slider-btns">
              <button
                type="button"
                className="slider-btn slider-prev"
                onClick={() => go(-1)}
                disabled={index <= 0}
                aria-label="Previous templates"
              >
                <svg
                  width={16}
                  height={16}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2.2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="15 18 9 12 15 6" />
                </svg>
              </button>
              <button
                type="button"
                className="slider-btn slider-next"
                onClick={() => go(1)}
                disabled={index >= maxIndex}
                aria-label="Next templates"
              >
                <ChevronRightIcon size={16} />
              </button>
            </div>
          </div>
        </div>

        <div className="templates-foot reveal d4">
          <p>Need a custom workflow for your specific EHR or practice?</p>
          <a href="/contact" className="au-btn au-btn-primary">
            Request Custom Template
            <ArrowIcon size={13} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default TemplatesSlider;
