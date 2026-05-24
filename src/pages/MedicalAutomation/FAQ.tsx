import { useState } from 'react';

interface QA {
  q: string;
  a: string;
}

export const MAU_FAQ_ITEMS: QA[] = [
  {
    q: 'What is medical automation, in one sentence?',
    a: 'Software that runs the repetitive work between your booking system, EHR, phone tree, and marketing tools — so your staff stops copy-pasting between tabs and starts answering patients again.',
  },
  {
    q: 'How fast can you get a workflow live?',
    a: 'One workflow live in two weeks from kickoff. All six in eight weeks. We start with the highest-yield flow for your clinic — usually intake or the reminder ladder — so the build pays for itself before phase two starts.',
  },
  {
    q: 'Is this HIPAA-compliant?',
    a: 'Yes. The entire stack — workflow engine, AI layer, SMS, email — is BAA-covered. PHI is redacted before it touches any LLM. Audit logs are reviewed quarterly. We share the architecture in writing for your compliance officer to sign off on.',
  },
  {
    q: 'Which EHRs do you connect to?',
    a: 'Athena, Epic, eClinicalWorks, Kareo, NextGen, AdvancedMD, Practice Fusion, DrChrono, and most modern EHRs that expose HL7 or FHIR. For custom or older systems we build vendor-specific connectors. You keep your EHR — we never replace it.',
  },
  {
    q: 'Will AI make decisions about patient care?',
    a: 'No. Every clinical decision keeps a human in the loop. AI is used for routing, summarisation, and message drafting — never to diagnose, never to deny coverage, never to override a clinician. The boundaries are documented per workflow.',
  },
  {
    q: 'What if our last vendor got us into a bad spot with PHI?',
    a: 'We&rsquo;ve handled it. We audit the existing data path, write the remediation plan, rotate any leaked credentials, and rebuild affected flows on the BAA-covered stack. Most clinics are fully remediated inside six weeks.',
  },
  {
    q: 'Do you handle SEO, Google Ads, and the rest, or only automation?',
    a: 'Full service. SEO, Google Ads, Meta Ads, websites, branding, content, reviews, and field marketing all live under the same roof. Automation is one of the strongest plays we run, and it compounds when the rest of the stack is built right.',
  },
  {
    q: 'How much does it cost?',
    a: 'Pilot builds start at $4,500 for the first workflow live, with the full six-workflow stack typically landing between $14,000 and $32,000 depending on EHR complexity. Ongoing operations run a flat monthly retainer — no per-message markup, no surprise invoices.',
  },
  {
    q: 'What happens if we want to leave?',
    a: 'You get a full export of every workflow definition, every audit log, and the documentation for every integration. The workflow engine (N8N) is open-source, so the next team can pick up where we left off on day one. Contracts are month-to-month after the pilot.',
  },
  {
    q: 'Who actually runs our automation?',
    a: 'A named automation lead with healthcare-specific build experience, backed by a tracking engineer and a compliance reviewer. No offshore, no white-label, no junior rotation. You meet your lead on the first call before you sign anything.',
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
    <section className="sl-section mau-faq-section" id="faq">
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

        <ul className="mau-faq-list">
          {MAU_FAQ_ITEMS.map((it, i) => {
            const isOpen = open === i;
            return (
              <li key={it.q} className={`mau-faq-item${isOpen ? ' is-open' : ''}`}>
                <button
                  type="button"
                  className="mau-faq-q"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? null : i)}
                >
                  <span>{it.q}</span>
                  <ChevronIcon open={isOpen} />
                </button>
                {isOpen && <div className="mau-faq-a">{it.a}</div>}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default FAQ;
