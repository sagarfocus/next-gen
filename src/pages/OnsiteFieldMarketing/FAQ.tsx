import { useState } from 'react';

interface QA {
  q: string;
  a: string;
}

export const OFM_FAQ_ITEMS: QA[] = [
  {
    q: 'What is onsite field marketing for a healthcare practice?',
    a: 'It is the in-person side of patient acquisition — booths at community events, referral visits to partner practices, sponsorships, and targeted door-drops in your service area. Done right, every interaction is tracked end-to-end so you can see which channel produced which booked first visit.',
  },
  {
    q: 'How quickly can you launch the first activation?',
    a: 'Eleven days is our standard ramp from signed contract to first booth — territory mapping, booth and collateral build, intake-flow training, and CRM integration all run in parallel. Most clinics see their first attributable leads in week three.',
  },
  {
    q: 'Which metros do you cover?',
    a: 'We staff field crews across Dallas-Fort Worth, Austin, Houston, San Antonio, and surrounding metros. For practices outside that footprint we can run the strategy, collateral, and reporting layer remotely and partner with a vetted local crew on the ground.',
  },
  {
    q: 'How is this different from a vendor sending temp staff to an event?',
    a: 'Temp staff hand out flyers. Our ambassadors are background-checked, trained on your service lines, follow a documented intake script, and capture leads on a tablet that syncs to your CRM the same day. They are also the same crew week over week — so they know your services and your front desk knows them.',
  },
  {
    q: 'Do you handle SEO, Google Ads, and the rest, or only field marketing?',
    a: 'We are a full-service healthcare growth team. SEO, Google Ads, Meta Ads, websites, branding, content, automation, and reviews all live under the same roof. Field marketing is one of the strongest plays we run, and it compounds when the rest of the stack is built right.',
  },
  {
    q: 'How do you track leads from a paper sign-in or a door-drop?',
    a: 'We do not use paper. Every booth runs a tablet with a HIPAA-aware intake form, every print piece carries a unique QR code tied to a tracked landing page, and every drop-off list is reconciled against the CRM the next morning. No paper clipboards, no anonymous walk-ins.',
  },
  {
    q: 'Is the intake HIPAA-compliant?',
    a: 'Yes. Tablet intake stores PHI only through BAA-covered tools, consent is captured before any data is collected, and photo and media releases are signed at the point of capture. The configuration is auditable by your compliance officer in writing.',
  },
  {
    q: 'Can you take over existing sponsorship deals or community programs?',
    a: 'Yes — about half of how we start. We inherit the deal, re-negotiate where needed, audit the asset placement, and rebuild the lead-capture and reporting layer. You keep the relationships; we make them measurable.',
  },
  {
    q: 'What does the field audit actually include?',
    a: 'A free two-week readout: we map your current service area, audit your existing field spend, score the top 10 community and B2B touchpoints in your metro, and deliver a written one-page plan with projected cost per qualified lead. You keep the audit whether you sign with us or not.',
  },
  {
    q: 'Is there a long-term contract?',
    a: 'No. We run a 90-day pilot, then month-to-month indefinitely. Most clinics stay because the dashboard makes the spend defensible — not because the contract forces them to.',
  },
];

const ChevronIcon = ({ open }: { open: boolean }) => (
  <svg
    width={20}
    height={20}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    style={{ transform: open ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform .2s ease' }}
  >
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

const FAQ = () => {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="sl-section ofm-faq-section" id="faq">
      <div className="container-shell">
        <div className="sl-sec-head">
          <div>
            <div className="sl-sec-num">08 - FAQ</div>
            <h2 className="sl-sec-title">
              Questions practice owners <em>actually ask us.</em>
            </h2>
          </div>
          <div className="sl-sec-meta">
            Direct answers
            <br />
            no marketing-speak
          </div>
        </div>

        <ul className="ofm-faq-list">
          {OFM_FAQ_ITEMS.map((it, i) => {
            const isOpen = open === i;
            return (
              <li key={it.q} className={`ofm-faq-item${isOpen ? ' is-open' : ''}`}>
                <button
                  type="button"
                  className="ofm-faq-q"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? null : i)}
                >
                  <span>{it.q}</span>
                  <ChevronIcon open={isOpen} />
                </button>
                {isOpen && <div className="ofm-faq-a">{it.a}</div>}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default FAQ;
