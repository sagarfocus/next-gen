import { useEffect, useMemo, useRef, useState } from 'react';
import type { ChangeEvent, ReactNode } from 'react';

interface FAQItem {
  num: string;
  q: string;
  a: ReactNode;
}

interface FAQCategory {
  id: string;
  num: string;
  title: string;
  navLabel: string;
  items: FAQItem[];
}

const CATEGORIES: FAQCategory[] = [
  {
    id: 'cat-01',
    num: '01',
    title: 'Getting Started',
    navLabel: 'Getting Started',
    items: [
      {
        num: '01.01',
        q: 'How long does onboarding take from signed contract to first campaign live?',
        a: (
          <>
            <p>
              For most clinics, you&rsquo;ll go from signed contract to first
              campaign live in <strong>10&ndash;14 business days</strong>. Week
              one is discovery (audit + interviews), week two is asset
              production and account setup, and we usually launch the first
              campaign by day 12.
            </p>
            <p>
              Practices with already-running ad accounts and a healthy GBP
              often get there faster &mdash; sometimes in as little as a week.
            </p>
          </>
        ),
      },
      {
        num: '01.02',
        q: 'What do you need from me before we kick off?',
        a: (
          <>
            <p>
              We&rsquo;ll send a structured onboarding questionnaire. The
              essentials we need from your side:
            </p>
            <ul>
              <li>
                Admin access to Google Business Profile, Google Ads, Meta Ads,
                and your website CMS
              </li>
              <li>
                One stakeholder for our weekly 30-minute check-in (clinical or
                operational lead)
              </li>
              <li>Brand assets &mdash; logo, colors, fonts &mdash; even if rough</li>
              <li>Last 12 months of performance data, where available</li>
            </ul>
          </>
        ),
      },
      {
        num: '01.03',
        q: 'Do you offer a free consultation before signing?',
        a: (
          <p>
            Yes. Every prospective partner gets a free{' '}
            <strong>30-minute strategy call</strong> plus a high-level audit
            of your current funnel. You&rsquo;ll walk away with three concrete
            recommendations whether you sign with us or not.
          </p>
        ),
      },
      {
        num: '01.04',
        q: 'Which states and regions do you serve?',
        a: (
          <p>
            We work with healthcare practices across all 50 US states. Our
            deepest local-SEO experience is in Texas, Florida, California, New
            York, Illinois, and Arizona, but our playbook adapts to any local
            market.
          </p>
        ),
      },
    ],
  },
  {
    id: 'cat-02',
    num: '02',
    title: 'Pricing & Engagement',
    navLabel: 'Pricing & Engagement',
    items: [
      {
        num: '02.01',
        q: 'How much does a typical engagement cost?',
        a: (
          <>
            <p>
              Our retainers start at <strong>$2,500/month</strong> for solo
              practitioners on a single channel and scale up to{' '}
              <strong>$15K+/month</strong> for multi-location specialty groups
              running full-stack programs.
            </p>
            <p>
              Ad spend is separate and goes directly to the platforms. We
              never mark it up.
            </p>
          </>
        ),
      },
      {
        num: '02.02',
        q: 'Are contracts month-to-month or fixed term?',
        a: (
          <p>
            The standard agreement is a{' '}
            <strong>3-month minimum commitment</strong> followed by a rolling
            month-to-month cadence with 30-day notice on either side. SEO-only
            retainers default to 6 months because the channel needs that
            runway to show real signal.
          </p>
        ),
      },
      {
        num: '02.03',
        q: "What's included in the base retainer?",
        a: (
          <>
            <p>
              Strategy, execution, and reporting on the channels in your
              scope. That includes:
            </p>
            <ul>
              <li>Weekly 30-minute partner check-in</li>
              <li>Monthly performance report with attribution</li>
              <li>Live dashboard access (24/7)</li>
              <li>Creative production within agreed asset volume</li>
              <li>Up to two automation templates from our N8N library</li>
            </ul>
          </>
        ),
      },
      {
        num: '02.04',
        q: 'Are there setup or onboarding fees?',
        a: (
          <p>
            For standard retainers, no. We absorb onboarding into the first
            month. Larger custom builds &mdash; full website rebuilds,
            multi-location SEO migrations &mdash; carry a separate scoped fee
            disclosed upfront.
          </p>
        ),
      },
    ],
  },
  {
    id: 'cat-03',
    num: '03',
    title: 'Services & Capabilities',
    navLabel: 'Services',
    items: [
      {
        num: '03.01',
        q: 'Which services do you provide in-house versus outsourced?',
        a: (
          <>
            <p>
              Everything is handled in-house: SEO, paid media, social,
              content, branding, web design, email automation, and analytics.
              We do not white-label other agencies.
            </p>
            <p>
              The only exception is video production, where we partner with
              two vetted local studios.
            </p>
          </>
        ),
      },
      {
        num: '03.02',
        q: 'Do you handle creative and design too?',
        a: (
          <p>
            Yes. Every retainer includes design hours scaled to your channel
            mix &mdash; landing pages, ad creative, social graphics, email
            templates. We can also take on full brand identity, website
            redesigns, and print collateral as scoped projects.
          </p>
        ),
      },
      {
        num: '03.03',
        q: 'Can your automations integrate with my existing EHR?',
        a: (
          <>
            <p>
              If your EHR exposes a documented API or webhook layer &mdash;
              Athena, Epic via API, eClinicalWorks, DrChrono, AdvancedMD,
              NextGen, Kareo &mdash; yes. For systems without API access, we
              use form bridges and structured CSV imports as the fallback.
            </p>
            <p>
              Tell us which EHR you run on the discovery call and we&rsquo;ll
              confirm the exact integration path before signing.
            </p>
          </>
        ),
      },
    ],
  },
  {
    id: 'cat-04',
    num: '04',
    title: 'Compliance & Privacy',
    navLabel: 'Compliance & Privacy',
    items: [
      {
        num: '04.01',
        q: 'Are you HIPAA-compliant, and do you sign Business Associate Agreements?',
        a: (
          <p>
            Yes. We operate as a HIPAA-aware Business Associate and execute a{' '}
            <strong>BAA</strong> at the start of every engagement that touches
            PHI. All staff complete annual HIPAA training, and access controls
            are role-based with audit logging.
          </p>
        ),
      },
      {
        num: '04.02',
        q: 'How do you handle protected health information (PHI)?',
        a: (
          <>
            <p>
              We minimize PHI exposure by default. Marketing systems are kept
              in non-PHI environments wherever possible. When PHI must flow
              &mdash; appointment confirmations, intake forms, recall
              messaging &mdash; it travels through encrypted channels into
              BAA-covered tools (Twilio Healthcare, HIPAA-aware Mailchimp, AWS
              HIPAA-eligible services).
            </p>
            <p>
              Our internal access is least-privilege. Only the team members
              directly working on your account see anything, and access is
              revoked the day a teammate rolls off.
            </p>
          </>
        ),
      },
      {
        num: '04.03',
        q: 'What happens to my data if we end the engagement?',
        a: (
          <p>
            You own everything. On exit we hand over the full asset library
            &mdash; accounts, creative files, dashboards, automation JSONs,
            content drafts &mdash; and purge our copies within 30 days unless
            you ask us to retain them. The BAA continues to govern any
            residual PHI.
          </p>
        ),
      },
    ],
  },
  {
    id: 'cat-05',
    num: '05',
    title: 'Reporting & Results',
    navLabel: 'Reporting & Results',
    items: [
      {
        num: '05.01',
        q: 'How often will I see reporting?',
        a: (
          <p>
            Three layers: <strong>live dashboards</strong> available 24/7, a{' '}
            <strong>weekly Loom video</strong> walking you through the moves
            we made and what they did, and a{' '}
            <strong>monthly written report</strong> covering attribution,
            ROAS, and the next 30-day plan.
          </p>
        ),
      },
      {
        num: '05.02',
        q: 'Which KPIs do you track by default?',
        a: (
          <p>
            For most clinics: cost-per-acquisition (CPA), patient lifetime
            value (LTV), booked appointments by source, no-show rate, return
            on ad spend (ROAS), and organic traffic by intent cluster. We
            tailor the dashboard to your clinical specialties and revenue
            model in week one.
          </p>
        ),
      },
      {
        num: '05.03',
        q: "What if results don't show up after a few months?",
        a: (
          <p>
            We define success milestones together in week one and review them
            every 30 days. If we miss two consecutive months on a critical
            milestone, we run a structured root-cause review at our cost
            &mdash; and either reset the plan, restructure the retainer, or
            end the engagement cleanly. We don&rsquo;t keep partners on a
            contract that isn&rsquo;t working.
          </p>
        ),
      },
    ],
  },
];

const SearchIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
);

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

const FAQList = () => {
  const [query, setQuery] = useState('');
  const [openKey, setOpenKey] = useState<string | null>('cat-01:01.01');
  const [activeCat, setActiveCat] = useState('cat-01');
  const catRefs = useRef<Record<string, HTMLDivElement | null>>({});

  const trimmed = query.trim().toLowerCase();

  const filtered = useMemo(() => {
    if (!trimmed) {
      return CATEGORIES.map((c) => ({ ...c, matches: c.items }));
    }
    return CATEGORIES.map((c) => ({
      ...c,
      matches: c.items.filter((i) => {
        const text = `${i.num} ${i.q}`.toLowerCase();
        return text.includes(trimmed);
      }),
    }));
  }, [trimmed]);

  const totalMatches = filtered.reduce((sum, c) => sum + c.matches.length, 0);
  const isEmpty = trimmed !== '' && totalMatches === 0;

  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.pageYOffset + 160;
      let active = CATEGORIES[0].id;
      for (const c of CATEGORIES) {
        const el = catRefs.current[c.id];
        if (el && el.offsetTop <= scrollY) active = c.id;
      }
      setActiveCat(active);
    };
    let t: ReturnType<typeof setTimeout>;
    const handler = () => {
      clearTimeout(t);
      t = setTimeout(onScroll, 50);
    };
    window.addEventListener('scroll', handler);
    onScroll();
    return () => {
      clearTimeout(t);
      window.removeEventListener('scroll', handler);
    };
  }, []);

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const clearSearch = () => {
    setQuery('');
  };

  const toggleItem = (catId: string, num: string) => {
    const key = `${catId}:${num}`;
    setOpenKey((prev) => (prev === key ? null : key));
  };

  const jumpTo = (id: string) => {
    const el = catRefs.current[id];
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.pageYOffset - 100;
    window.scrollTo({ top, behavior: 'smooth' });
  };

  return (
    <section className="fp-section">
      <div className="container-shell">
        <div className="fp-search">
          <SearchIcon />
          <input
            type="search"
            placeholder="Search questions — try 'HIPAA', 'pricing', 'EHR'…"
            value={query}
            onChange={handleSearch}
          />
          {trimmed && (
            <button type="button" className="fp-search-clear" onClick={clearSearch}>
              Clear
            </button>
          )}
        </div>

        <div className="fp-grid">
          <aside className="fp-nav">
            <h4 className="fp-nav-h">Sections</h4>
            <ul className="fp-nav-list">
              {CATEGORIES.map((c) => (
                <li key={c.id}>
                  <button
                    type="button"
                    className={`fp-nav-link${activeCat === c.id ? ' is-active' : ''}`}
                    onClick={() => jumpTo(c.id)}
                  >
                    <span>{c.navLabel}</span>
                    <span className="fp-nav-num">{c.num}</span>
                  </button>
                </li>
              ))}
            </ul>
          </aside>

          <div className="fp-content">
            {filtered.map((cat) => {
              if (trimmed && cat.matches.length === 0) return null;
              return (
                <div
                  key={cat.id}
                  className="fp-cat"
                  id={cat.id}
                  ref={(el) => {
                    catRefs.current[cat.id] = el;
                  }}
                >
                  <div className="fp-cat-head">
                    <span className="fp-cat-num">{cat.num}</span>
                    <h2 className="fp-cat-title">{cat.title}</h2>
                    <span className="fp-cat-count">
                      {cat.items.length} Q&apos;s
                    </span>
                  </div>

                  {cat.matches.map((item) => {
                    const key = `${cat.id}:${item.num}`;
                    const isOpen = openKey === key;
                    return (
                      <div
                        key={item.num}
                        className={`fp-item${isOpen ? ' is-open' : ''}`}
                      >
                        <button
                          type="button"
                          className="fp-q"
                          onClick={() => toggleItem(cat.id, item.num)}
                          aria-expanded={isOpen}
                        >
                          <span className="fp-q-num">{item.num}</span>
                          <span className="fp-q-text">{item.q}</span>
                          <span className="fp-q-icon" aria-hidden="true">
                            <PlusIcon />
                          </span>
                        </button>
                        <div className="fp-a">
                          <div className="fp-a-inner">{item.a}</div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              );
            })}

            {isEmpty && (
              <div className="fp-empty is-visible">
                <strong>No matches.</strong>
                Try a broader keyword, or{' '}
                <a href="/contact">talk to us directly &rarr;</a>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQList;
