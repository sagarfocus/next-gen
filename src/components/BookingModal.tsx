import { useEffect, useMemo, useState } from 'react';

interface BookingModalProps {
  open: boolean;
  onClose: () => void;
}

const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
const SAMPLE_TIMES = [
  '9:00 AM',
  '10:00 AM',
  '11:30 AM',
  '1:00 PM',
  '2:30 PM',
  '4:00 PM',
];

const startOfDay = (d: Date) => {
  const x = new Date(d);
  x.setHours(0, 0, 0, 0);
  return x;
};

const BookingModal = ({ open, onClose }: BookingModalProps) => {
  const today = useMemo(() => startOfDay(new Date()), []);
  const [view, setView] = useState(
    () => new Date(today.getFullYear(), today.getMonth(), 1),
  );
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [confirmed, setConfirmed] = useState(false);

  useEffect(() => {
    if (!open) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      document.removeEventListener('keydown', onKey);
    };
  }, [open, onClose]);

  // Reset confirmed state when modal reopens.
  useEffect(() => {
    if (!open) {
      setConfirmed(false);
      setSelectedDate(null);
      setSelectedTime(null);
    }
  }, [open]);

  const isAtCurrentMonth =
    view.getFullYear() === today.getFullYear() &&
    view.getMonth() === today.getMonth();

  const firstDay = new Date(view.getFullYear(), view.getMonth(), 1).getDay();
  const daysInMonth = new Date(
    view.getFullYear(),
    view.getMonth() + 1,
    0,
  ).getDate();

  const handleSelectDate = (date: Date) => {
    setSelectedDate(date);
    setSelectedTime(null);
  };

  const handleConfirm = () => {
    if (!selectedDate || !selectedTime) return;
    setConfirmed(true);
  };

  const formattedDate = selectedDate
    ? selectedDate.toLocaleDateString('en-US', {
        weekday: 'long',
        month: 'long',
        day: 'numeric',
        year: 'numeric',
      })
    : '';

  const confirmLabel = selectedDate
    ? selectedTime
      ? `Confirm: ${selectedDate.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })} at ${selectedTime}`
      : 'Pick a time'
    : 'Select a date & time';

  return (
    <div
      className={`modal-backdrop${open ? ' is-open' : ''}`}
      id="bookingModal"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modalTitle"
      aria-hidden={!open}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="modal" role="document">
        <button
          type="button"
          className="modal-close"
          onClick={onClose}
          aria-label="Close booking"
        >
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
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        <aside className="modal-info">
          <span className="modal-eyebrow">
            {confirmed ? 'Hold confirmed' : 'Free 30-min Call'}
          </span>
          <h3 id="modalTitle" className="modal-title">
            {confirmed
              ? 'You’re on the calendar.'
              : 'Book a free consultation with a healthcare growth specialist.'}
          </h3>
          <p className="modal-text">
            {confirmed ? (
              <>
                We&rsquo;ve reserved <strong>{formattedDate}</strong> at{' '}
                <strong>{selectedTime}</strong>. A confirmation email with the
                call link will arrive within the next business hour.
              </>
            ) : (
              <>
                We&rsquo;ll review your current funnel, identify quick-win
                opportunities, and outline a custom growth roadmap for your
                practice.
              </>
            )}
          </p>
          <ul className="modal-list">
            {(confirmed
              ? [
                  'Calendar invite + agenda within 1 business hour',
                  'A 1-page audit preview the morning of the call',
                  'No prep needed - bring your top 2 questions',
                ]
              : [
                  'Personalized funnel audit',
                  'Custom 90-day growth roadmap',
                  'HIPAA-compliant, no commitment',
                ]
            ).map((item) => (
              <li key={item}>
                <span className="check" aria-hidden="true">
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
                </span>
                {item}
              </li>
            ))}
          </ul>
          <div className="modal-foot">
            {confirmed
              ? 'Need to reschedule? Reply to the confirmation email.'
              : 'All times shown in your local timezone'}
          </div>
        </aside>

        <div className="modal-cal">
          {confirmed ? (
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 20,
                padding: '12px 4px',
                minHeight: 380,
              }}
              aria-live="polite"
            >
              <div
                style={{
                  display: 'inline-flex',
                  alignSelf: 'flex-start',
                  alignItems: 'center',
                  gap: 8,
                  padding: '5px 12px',
                  borderRadius: 999,
                  background: 'rgba(143,188,143,0.18)',
                  color: '#2D5A3D',
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: '0.16em',
                  textTransform: 'uppercase',
                }}
              >
                <span
                  style={{
                    display: 'inline-flex',
                    width: 18,
                    height: 18,
                    borderRadius: 999,
                    background: '#2D5A3D',
                    color: '#fff',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                  aria-hidden="true"
                >
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
                </span>
                Confirmed
              </div>
              <div>
                <div
                  style={{
                    fontSize: 12,
                    fontWeight: 700,
                    letterSpacing: '0.18em',
                    textTransform: 'uppercase',
                    color: '#718096',
                    marginBottom: 6,
                  }}
                >
                  Your call
                </div>
                <div
                  style={{
                    fontSize: 'clamp(20px, 2.4vw, 28px)',
                    fontWeight: 700,
                    color: '#1A2438',
                    lineHeight: 1.2,
                    letterSpacing: '-0.01em',
                  }}
                >
                  {formattedDate}
                </div>
                <div
                  style={{
                    fontSize: 16,
                    color: '#576DB5',
                    fontWeight: 600,
                    marginTop: 4,
                  }}
                >
                  {selectedTime}
                </div>
              </div>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
                  gap: 12,
                  padding: '16px 0',
                  borderTop: '1px solid rgba(45,55,72,0.08)',
                  borderBottom: '1px solid rgba(45,55,72,0.08)',
                }}
              >
                <div>
                  <div
                    style={{
                      fontSize: 11,
                      fontWeight: 700,
                      letterSpacing: '0.18em',
                      textTransform: 'uppercase',
                      color: '#718096',
                      marginBottom: 4,
                    }}
                  >
                    Format
                  </div>
                  <div style={{ fontSize: 14, fontWeight: 600, color: '#2D3748' }}>
                    Video call · 30 min
                  </div>
                </div>
                <div>
                  <div
                    style={{
                      fontSize: 11,
                      fontWeight: 700,
                      letterSpacing: '0.18em',
                      textTransform: 'uppercase',
                      color: '#718096',
                      marginBottom: 4,
                    }}
                  >
                    Specialist
                  </div>
                  <div style={{ fontSize: 14, fontWeight: 600, color: '#2D3748' }}>
                    Assigned by vertical
                  </div>
                </div>
              </div>
              <button
                type="button"
                className="cal-confirm"
                onClick={onClose}
              >
                <span>Close</span>
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
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </span>
              </button>
            </div>
          ) : (
            <>
          <div className="cal-head">
            <span className="cal-month">
              {MONTHS[view.getMonth()]} {view.getFullYear()}
            </span>
            <div className="cal-nav">
              <button
                type="button"
                onClick={() =>
                  setView(
                    new Date(view.getFullYear(), view.getMonth() - 1, 1),
                  )
                }
                disabled={isAtCurrentMonth}
                aria-label="Previous month"
              >
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
                  <polyline points="15 18 9 12 15 6" />
                </svg>
              </button>
              <button
                type="button"
                onClick={() =>
                  setView(
                    new Date(view.getFullYear(), view.getMonth() + 1, 1),
                  )
                }
                aria-label="Next month"
              >
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
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </button>
            </div>
          </div>

          <div className="cal-weekdays">
            <span>Sun</span>
            <span>Mon</span>
            <span>Tue</span>
            <span>Wed</span>
            <span>Thu</span>
            <span>Fri</span>
            <span>Sat</span>
          </div>

          <div className="cal-grid" role="grid" aria-label="Available dates">
            {Array.from({ length: firstDay }).map((_, i) => (
              <button
                key={`blank-${i}`}
                className="cal-day is-empty"
                disabled
                tabIndex={-1}
                aria-hidden="true"
              />
            ))}
            {Array.from({ length: daysInMonth }, (_, i) => i + 1).map((d) => {
              const date = new Date(view.getFullYear(), view.getMonth(), d);
              const isPast = date < today;
              const dayOfWeek = date.getDay();
              const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;
              const isToday = date.getTime() === today.getTime();
              const isSelected =
                selectedDate?.getTime() === date.getTime();
              const disabled = isPast || isWeekend;

              const cls = [
                'cal-day',
                isPast && 'is-past',
                !isPast && isWeekend && 'is-disabled',
                isToday && 'is-today',
                isSelected && 'is-selected',
              ]
                .filter(Boolean)
                .join(' ');

              return (
                <button
                  key={d}
                  type="button"
                  className={cls}
                  disabled={disabled}
                  onClick={() => handleSelectDate(date)}
                >
                  {d}
                </button>
              );
            })}
          </div>

          <div className="cal-times" aria-label="Available time slots">
            {selectedDate ? (
              SAMPLE_TIMES.map((t) => (
                <button
                  key={t}
                  type="button"
                  className={`cal-time${selectedTime === t ? ' is-selected' : ''}`}
                  onClick={() => setSelectedTime(t)}
                >
                  {t}
                </button>
              ))
            ) : (
              <div className="cal-times-empty">
                Pick a date to see available times
              </div>
            )}
          </div>

          <button
            type="button"
            className="cal-confirm"
            disabled={!selectedDate || !selectedTime}
            onClick={handleConfirm}
          >
            <span>{confirmLabel}</span>
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
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </span>
          </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
