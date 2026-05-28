# SEO Audit — TheNextGen Healthcare Marketing

**Auditor brief:** Senior SEO strategist + technical SEO auditor + UX/conversion review.
**Audit date:** 2026-05-24.
**Scope:** All ~38 page folders / 50+ indexable routes under `src/pages/`, plus shared head/meta infrastructure, navigation, and footer.
**Philosophy:** People-first content, conversion-focused, technically sound. Not keyword-stuffed. Not text-heavy.

> **How to read this doc.** Section 1 is the executive summary — read first. Section 2 is the site-wide infrastructure work that has to land before per-page meta/keyword work has anywhere to live. Sections 3–9 are the per-page audits, grouped by conversion role. Each per-page entry follows the same template: **Route · Status · Primary keyword · Issues · Recommendations**. The remediation roadmap at the end maps every fix to a wave so we can ship in checkpointed batches.

---

## 1. Executive Summary

### Top 10 findings, ranked by revenue impact

| # | Finding | Impact | Effort | Wave |
|---|---|---|---|---|
| 1 | **`index.html` `<title>` is "next-gen"** — Vite scaffold default. Every route inherits it on first paint. No `<meta description>`, no Open Graph, no canonical, no `og:image`. | Catastrophic — kills CTR from SERP on every page | S | Wave 0 |
| 2 | **No unified head/meta system.** ~8 pages set `document.title` ad-hoc in `useEffect`; ~42 pages have nothing. No `react-helmet-async`, no `next/head`. | Severe — most routes are headless in SERP | M | Wave 0 |
| 3 | **No `sitemap.xml`, no `robots.txt`** in `public/`. | High — slows discovery, no crawl control | S | Wave 0 |
| 4 | **Free Growth Audit is missing from `NAV_PRIMARY` and `NAV_RESOURCES`** — buried in footer. This is the highest-intent low-friction lead magnet on the site. | Severe — direct revenue leak | XS | Wave 0 |
| 5 | **Pricing is in the Resources dropdown** alongside Blog/News, instead of in the primary nav. Pricing buyers do not look under "Resources." | High — conversion friction | XS | Wave 0 |
| 6 | ~~Brand identity mismatch in code (claim).~~ **Correction (Wave 0):** verified by grep — `Privacy.tsx` and `Accessibility.tsx` actually use `SITE.email` (clean). The only real `focusyourfinance.com` reference was 3 hardcoded URLs in `content/website-design/schema.ts` (fixed in Wave 0). | (Resolved) | XS | ✅ Wave 0 |
| 7 | **Home H1 is brand-led, not search-led.** "We Market Healthcare. Relentlessly." has no search intent. Competitors rank for "healthcare marketing agency [city]" with literal H1s. | High — Home page does not rank for its own category | S | Wave A |
| 8 | **Service pages re-use the same generic FAQ framing** ("The eight questions every practice owner asks") — 8 service pages have near-identical FAQ section titles. Real practice owners search for specific questions ("how much do healthcare Google ads cost", "what is HIPAA-aware tracking"). | Medium — wasted FAQ surface; no AEO/AI-Overview citation potential | M | Waves B–C |
| 9 | **No `BreadcrumbList` schema on hub pages** (only on individual service pages). Industries hub, Automation hub, Methodology pages, Case Studies hub, Blog hub, Healthcare News hub all missing. | Medium — losing rich snippet eligibility | S | Wave A |
| 10 | **`/services` hub H1 is "Healthcare Marketing Services"** — the most generic possible. No location, no specificity, no differentiator. This is the page Google sends "healthcare marketing services dallas" / "healthcare marketing agency texas" to. | High — losing high-intent category traffic | S | Wave A |

### What's already strong (do not break)

- Service pages 2–10 have well-structured `Service` + `FAQPage` + `BreadcrumbList` JSON-LD. Pattern to extend, not rebuild.
- Home page has `FAQPage` + `LocalBusiness` schema with real coordinates, hours, sameAs.
- Page architecture is clean: section composition per page, no monoliths (per `REFACTOR_NOTES.md`).
- Internal cross-linking from service spokes back to `/services`, `/contact`, `/pricing`, `/case-studies` is consistent.
- Real local-business signals exist (Texas address, phone, hours) — the foundation for genuinely competitive Local Pack work in DFW healthcare is here.
- Tone of voice is strong on the migrated service pages — clinical, concrete, anti-fluff. Should be the model for every other page.

---

## 2. Site-wide infrastructure (Wave 0 — blocks per-page work)

### 2.1 Head/meta architecture

**Current state.** The site is a Vite + React SPA with `react-router-dom@^6` and no SSR/SSG. `index.html` has a 4-tag head:

```html
<title>next-gen</title>                          ← scaffold default
<meta charset="UTF-8" />
<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
```

That's it. No description, no OG, no canonical, no theme-color, no font preload, no Twitter card.

Ad-hoc `useEffect` `document.title` exists in a handful of files (Legal pages via `LegalPage.tsx`, `CaseStudyDetail`, `BlogPost` via `useDocumentMeta`, `NotFound`, `Sitemap`, `WebsiteDesign`, `IndustryDetail`, `ValueDetail`). Inconsistent — some set title only, some set title + description, `WebsiteDesign` is the only one that also sets OG and canonical.

**Recommendation.**

1. **Install `react-helmet-async`** (`npm i react-helmet-async`). Wrap `App` in `<HelmetProvider>` in `main.tsx`. Helmet-async is the React 18 / SPA-safe choice; works fine on Vite without SSR.
2. **Build a `<Seo />` component** at `src/components/Seo.tsx` that accepts a typed props bag and emits a complete head:
   - `title` (will be suffixed with ` · TheNextGen Healthcare Marketing` unless `noSuffix` is set)
   - `description` (155–160 chars target)
   - `path` (used to compute `canonical = ${SITE.url}${path}`)
   - `image?` (OG image, defaults to `/og-default.jpg`)
   - `type?` ("website" | "article")
   - `noindex?` (boolean, defaults false)
   - `schema?` (one or array of JSON-LD objects)
3. Emit `<title>`, `<meta name="description">`, `<link rel="canonical">`, `<meta property="og:title">`, `<meta property="og:description">`, `<meta property="og:image">`, `<meta property="og:url">`, `<meta property="og:type">`, `<meta name="twitter:card" content="summary_large_image">`, `<meta name="twitter:title">`, `<meta name="twitter:description">`, `<meta name="twitter:image">`, plus any provided JSON-LD blocks.
4. **Fix `index.html`** while we're there. Replace `<title>` with the brand default (`TheNextGen Healthcare Marketing — HIPAA-aware healthcare marketing agency for clinics, medspas & urgent care in Texas`), add a default meta description, OG defaults, theme-color, language, robots default, font preconnects, and a default `og:image` (`/og-default.jpg` — needs to be created, 1200×630).
5. **Migrate the ad-hoc `useEffect` head manipulations** to `<Seo />` (Legal pages, dynamic detail pages, NotFound, Sitemap) so we don't have two patterns running side-by-side.
6. **Delete `useDocumentMeta` hook** (used only by `BlogPost`) — `<Seo />` replaces it cleanly.

### 2.2 Sitemap + robots

**Current state.** No `public/sitemap.xml`. No `public/robots.txt`. No build-time sitemap generator. Crawlers have to discover routes by following links from `/`.

**Recommendation.**

1. Add `public/robots.txt` with `User-agent: *`, `Allow: /`, `Sitemap: https://thenextgenhealth.com/sitemap.xml`. Disallow `/api/` and any preview paths if they get added later.
2. Add a build-time sitemap generator. Two options:
   - **Recommended**: write a small `scripts/build-sitemap.mjs` that reads `src/lib/routes.ts` + the dynamic-slug data files (`caseStudies.data.ts`, `posts.tsx`, `news.data.ts`, `IndustryDetail/data.ts`, `OurWorkDetail/details.data.ts`, `ValueDetail/data.tsx`) and writes `public/sitemap.xml`. Wire it into `package.json` as a `prebuild` step.
   - Plug-in: `vite-plugin-sitemap`. Less control, less work.
3. Set `priority` and `changefreq` heuristics per route group (home 1.0, service spokes 0.9, blog/news 0.7, legal 0.3, etc.).
4. Add `<lastmod>` from `git log -1 --format=%cI` per file or from the `updated` field on blog posts where it exists.

### 2.3 Navigation lead-flow fixes

| Change | Why | Where |
|---|---|---|
| Add **Free Growth Audit** to `NAV_PRIMARY` as the **rightmost CTA-styled** item (not a text link) | Highest-intent low-friction conversion. Currently footer-only. | `content/navigation.ts` `NAV_PRIMARY`; `Navbar.tsx` to render as button-styled |
| Move **Pricing** from `NAV_RESOURCES` to `NAV_PRIMARY` (between Industries and About) | Pricing buyers don't look under "Resources." | `content/navigation.ts` |
| Promote **Automation** out of `NAV_RESOURCES` and into a **Services dropdown** (or into Services as a mega-menu category) | It is a service line, not a resource | Restructure `NAV_PRIMARY` to support a Services mega-menu — see 2.4 below |
| Add **Methodology** (or **How we work**) as a primary nav item linking to a new `/methodology` overview page that frames Phase 1/2/3 | Currently `/methodology/phase-1` etc. are linkable only from `/about#methodology` — the methodology has no own entry point | New `/methodology` index route + nav link |

### 2.4 Services mega-menu (optional, recommended)

The Services dropdown currently is a single link (`/services`). Visitors who already know they want SEO or Google Ads have to click `/services` and then click again. A mega-menu reduces that to one hover.

Proposed mega-menu structure (3 columns):

- **Acquisition** — SEO, Google Ads, Meta Ads, Google Business Profile, Citation Building, Hyper-Local Content
- **Conversion & retention** — Website Design, Email Campaigns, Reviews & Reputation, Patient Experience, Medical Automation
- **Brand & content** — Branding, Content Marketing, Social Media, Healthcare Content, AEO/Schema
- Footer of mega-menu: "Not sure where to start? Get a Free Growth Audit →"

### 2.5 Schema gaps to close (organization-wide)

Add these JSON-LD objects globally, not just on Home:

| Schema | Where it should live | Currently |
|---|---|---|
| `Organization` (with `founder`, `address`, `contactPoint`, `sameAs`) | Every page, via `<Seo />` default | About page only |
| `LocalBusiness` (subtype: `MedicalBusiness` — more specific than generic `LocalBusiness`) | Home + Contact + Industries hub + every Industry page | Home + Contact only |
| `WebSite` with `SearchAction` | Home only | Missing |
| `BreadcrumbList` | Every page below depth 1 | Service spokes only |
| `FAQPage` | Every page that has a real FAQ section | 8 service spokes + Home |
| `Article` / `BlogPosting` | BlogPost detail (already partial) + Healthcare News detail | BlogPost only |
| `NewsArticle` | Healthcare News detail | NEWS_SCHEMA exists at hub but not per-article |

### 2.6 Brand consistency cleanup

| Issue | Fix |
|---|---|
| ~~`Privacy.tsx` and `Accessibility.tsx` reference `hello@focusyourfinance.com`~~ — **Correction:** verified clean. Both files use `SITE.email` already. The only real `focusyourfinance.com` reference was in `content/website-design/schema.ts` (3 URLs). | ✅ Fixed in Wave 0 |
| `SITE.email = 'hello@thenextgenhealth.com'` — confirm authoritative business email | ✅ Confirmed by user; this is the authoritative brand-facing email |
| `SITE.url = 'https://thenextgenhealth.com'` — confirm production domain | ✅ Confirmed by user as the main production domain |
| Footer newsletter form submits via `mailto:` to subscribe — not a real subscriber list | **User decision:** keep Subscribe section exactly as-is for now; ESP wiring deferred. Do not remove the form. |
| `og:image` does not exist at `public/og-default.jpg` | `<Seo />` gracefully omits `og:image` when no asset exists. When a 1200×630 image is added to `public/og-default.jpg`, change `DEFAULT_IMAGE` in `src/components/Seo.tsx` to enable it. |

### 2.7 Technical SEO miscellany

- **Image alt text audit needed.** Every section file with `<img>` or `<Image>` should have descriptive alt, not just decorative. Many SVG icons currently use `aria-hidden` correctly; the hero mock dashboards on service pages may not.
- **Heading hierarchy**: `/services` hub page has H2 inside H2 ("Service [Questions]." with bracket). Multiple service spokes use H2 sparingly — eyebrows and badge text could be promoted to H2/H3 where they reflect real content sections.
- **Internal `<a href>` vs `<Link to>`**: confirm every nav and CTA uses `<Link>` from react-router. Any plain `<a href>` causes a full page reload, which loses SPA performance and breaks client analytics.
- **Anchor links (`#audit`, `#capabilities`, `#fp-list`)**: present on several pages. Confirm the target elements have matching `id`s and that `ScrollToTop` handles hash-only navigation correctly.
- **404 path leak.** `NotFound` interpolates `{location.pathname}` into the body. Confirm this is HTML-escaped — a crafted URL could otherwise inject markup.

---

## 3. Conversion engines (Home, About, Pricing, Free Audit, Contact, FAQ, Team)

These pages convert. They get the most aggressive attention in Wave A.

### 3.1 Home — `/`

- **Status:** Strong design + schema, weak SEO targeting.
- **Primary keyword:** *healthcare marketing agency* (commercial / category)
- **Secondary keywords:** *HIPAA-compliant marketing*, *Texas healthcare marketing*, *clinic marketing agency*, *medical practice marketing*, *Dallas healthcare SEO*
- **Local-intent keywords:** *healthcare marketing agency Dallas*, *Irving healthcare marketing*, *Texas medspa marketing*

**Current H1:** "We Market Healthcare. Relentlessly."

**Issues.**
- H1 has zero search intent. A first-time visitor or Google bot cannot tell what this is or who it's for from the H1 alone.
- Hero subheadline is good ("SEO, paid ads, branding, content, and websites built for clinics, medspas…") — better than the H1.
- Free Growth Audit is the *primary* hero CTA but the *Navbar* doesn't link to it. Disconnect.
- 5 FAQ items only — Home FAQ should be 6–8 of the most-asked questions across the funnel (already what the FAQ page promises).
- No `Organization` schema on Home (only `LocalBusiness` + `FAQPage`).

**Recommendations — exact changes.**

| Surface | From | To |
|---|---|---|
| H1 | "We Market Healthcare. Relentlessly." | "Healthcare Marketing That Books Real Patients, Not Just Clicks." |
| Eyebrow above H1 | "Healthcare Growth Partner" | "HIPAA-aware healthcare marketing · Texas" |
| Hero subhead | (current is fine) | Keep — extend with: "Trusted by 200+ practices across clinics, medspas, urgent care, and freestanding ERs." |
| `<Seo title>` | (none) | "Healthcare Marketing Agency in Texas — SEO, Google Ads, Automation \| TheNextGen" |
| `<Seo description>` | (none) | "Full-service healthcare marketing for clinics, medspas, urgent care & ERs. HIPAA-aware SEO, paid ads, websites & automation. 200+ Texas practices. Free 5-day growth audit." (158 chars) |
| Add `Organization` schema with `founder`, `foundingDate`, `numberOfEmployees` | (missing) | Add alongside existing `FAQPage` + `LocalBusiness` |
| Add `WebSite` schema with `SearchAction` | (missing) | Add (enables sitelinks search box on branded SERPs) |
| FAQ count | 5 | Extend to 8 — add: "What does a typical healthcare marketing engagement cost?", "Do you work with practices outside Texas?", "What is HIPAA-aware tracking?" |
| Internal links from Home | currently to /free-growth-audit, /our-work, /about, /healthcare-growth-engine | Add link to /pricing from a section ("Engagement plans start at $5K/mo →"), link to /case-studies from Results section, link to /industries from the Industries section card |

**Section flow improvement.** Current order is good. One swap to consider: move `Testimonials` before `FAQ`, after `Results` — social proof should land before doubt-resolution.

---

### 3.2 About — `/about`

- **Status:** Strong content, weak H1, missing internal-link surface for sub-routes.
- **Primary keyword:** *healthcare marketing agency about*, *TheNextGen healthcare* (branded)
- **Secondary keywords:** *HIPAA-compliant marketing agency*, *medical marketing team Texas*

**Current H1:** "The Clinical Growth Operating System."

**Issues.**
- "Clinical Growth Operating System" is brand-coined and beautiful internally — but it is not a search query. The H1 should describe what the company IS, not the proprietary methodology name.
- `ValueDetail` dynamic routes (`/about/value/:slug`) for 3 values exist but not surfaced anywhere obvious from `/about`. They need a "Read more about this principle →" link from each value card on About.
- Sarah Chen / founder info is in `Organization` schema but not visibly featured on About (no Founder section called out).
- About FAQ exists but its questions weren't extractable in the agent pass — verify and align with FAQ page.

**Recommendations.**

- H1 → "About TheNextGen — A Healthcare-Only Marketing Operating System."
- Eyebrow → "Built in Texas. Run for clinics, medspas, urgent care & ERs."
- Add explicit `<Link to="/team">` from About's Team teaser → "Meet the team →"
- Add explicit links from About → `/methodology/phase-1`, `/phase-2`, `/phase-3` (currently only an internal anchor `#methodology`).
- Add links from `/about` → `/infrastructure/growth-team`, `/compliance-protocol`, `/service-level-agreements` (currently buried as breadcrumbs).
- Add `Person` schema for Sarah Chen (founder), nested inside the existing `Organization` schema's `founder` property.
- Migrate `/about/value/:slug` routes to use `<Seo />` with `Article` schema.

---

### 3.3 Pricing — `/pricing`

- **Status:** Missing H1, otherwise strong.
- **Primary keyword:** *healthcare marketing pricing*, *medical marketing cost*, *clinic marketing agency pricing*
- **Secondary keywords:** *how much does healthcare seo cost*, *medspa marketing cost*, *healthcare ppc pricing*

**Current H1:** No explicit `<h1>` in `PricingHero.tsx` per audit.

**Issues.**
- A page without an H1 is an SEO own-goal. The eyebrow "Transparent Healthcare Pricing" is doing the H1's job semantically but not structurally.
- Pricing tier names are coined ("Starter Care", "Growth Pro", "Scale Elite") — fine for differentiation, but the descriptions need to include the actual outcomes for searchers.
- No `Product` schema on the tiers, only `Service` schema with `Offer` (which is correct, but the `Offer` objects need `priceCurrency`, `validFrom`, `eligibleRegion`).
- Pricing is locked behind "Custom" for Scale Elite. Search queries about "healthcare marketing scale tier pricing" can't be answered — add a "Starts at $25K/mo" or similar range floor.

**Recommendations.**

- Add H1 to `PricingHero.tsx`: **"Healthcare Marketing Pricing — Transparent Retainers, No Lock-In."**
- Lede paragraph (add): "Three retainer tiers built for clinics, medspas, and multi-location healthcare networks. Month-to-month after a 90-day setup phase. No platform fees, no markups on ad spend, no junior-team handoffs."
- Add comparison-row keyword H3s: "What's included at every tier", "What we never charge for", "When to choose each tier".
- Add an FAQ section if `PricingFAQ` component is light — typical questions: "Do you take a percentage of ad spend?", "What does the 90-day setup phase include?", "Can I cancel mid-engagement?", "What are platform fees and who pays them?", "Do you discount for multi-location networks?"
- Add `BreadcrumbList` schema.
- Internal links: from each tier → `/services` (the spokes that tier includes), → `/case-studies` filtered by tier-appropriate engagements, → `/free-growth-audit` ("Not sure which tier? Start with an audit").

---

### 3.4 Free Growth Audit — `/free-growth-audit`

- **Status:** Excellent design and copy. Underexposed via navigation.
- **Primary keyword:** *free healthcare marketing audit*, *free SEO audit clinic*, *free medical marketing audit*
- **Secondary keywords:** *free healthcare ppc audit*, *free clinic website audit*, *free medspa marketing audit*

**Current H1:** "Find the leak before you raise the budget."

**Issues.**
- Strong copy. Strong design. **The only real issue is that the page is buried** — no primary nav, no resources dropdown. Fixing that in 2.3 unlocks most of this page's value.
- CTA is `Start my audit → /contact`. Better: take the lead capture inline on this page (name, email, practice name, website URL, current monthly ad spend, 1-line "what's broken?") so the audit lead doesn't bounce through `/contact`.
- FAQ schema exists but only via import — confirm the FAQ has 5–7 healthcare-marketing-specific Qs, not generic.

**Recommendations.**

- Embed the 5-field audit-intake form **on the page itself** (in the Closing section), don't bounce to `/contact`.
- Add H2 "What you get in the audit (worth $2,500)" with bullet list pulling the existing Outcomes content.
- Add H2 "Who this audit is for" — explicit qualifiers ("you run a clinic / medspa / urgent care / freestanding ER in Texas", "you spend $3K+/mo on marketing", "you have a website and Google Business Profile").
- Add `Offer` schema with `price: "0"`, `priceCurrency: "USD"`, `availability: "InStock"`.
- Internal links: from the Closing → `/case-studies` (proof), → `/pricing` (next step).
- Cross-link: every service spoke's CTA section should swap from "Request my audit → /contact" to "Get my free growth audit → /free-growth-audit" (currently 5 of 9 spokes link to /contact for the audit CTA — wasted lead flow).

---

### 3.5 Contact — `/contact`

- **Status:** Strong form, weak content depth.
- **Primary keyword:** *contact healthcare marketing agency*, *healthcare marketing consultation*
- **Secondary keywords:** *talk to healthcare marketing specialist*, *book healthcare marketing call*

**Current H1:** "Tell us about your practice. We'll respond in 4 hours."

**Issues.**
- H1 is strong (specific time commitment is a trust signal). Keep.
- No `Contact` page schema. Add `ContactPage` + `Organization` with `contactPoint`.
- Page is form + sidebar only. Add a short "What happens after you send this" section (3 bullets: "We review within 4 business hours", "If we're a fit, we schedule a 30-min discovery call", "You get a 1-page audit preview before the call"). This reduces form-abandonment anxiety.
- HelpCard ROWS includes phone, email, address — those should be `<a href="tel:">`, `<a href="mailto:">`, and a maps `<a>` respectively. Verify implementation.

**Recommendations.**

- Add "What happens next" 3-step section under the form.
- Add small testimonial pull-quote in the sidebar (1 quote, attributed) — "We're not asking strangers, we're asking past clients."
- Add `ContactPoint` schema with `contactType: "Sales"`, `telephone`, `email`, `areaServed: "US-TX"`, `availableLanguage: "en"`.
- Internal links: from sidebar → `/free-growth-audit` ("Not ready to talk? Start with the free audit"), → `/case-studies` ("See what we've shipped"), → `/faq` ("Have questions first?").

---

### 3.6 FAQ — `/faq`

- **Status:** Solid concept, undermined by schema-vs-content gap.
- **Primary keyword:** *healthcare marketing FAQ*, *medical marketing questions*
- **Secondary keywords:** *what is HIPAA marketing*, *healthcare marketing pricing questions*, etc. (the long tail is the real value here)

**Current H1:** "Compliance, pricing, onboarding - answered by the team."

**Issues.**
- Page eyebrow claims "38 questions · 5 sections · Updated monthly" — confirm the rendered list has actually 38 questions.
- `FAQ_SCHEMA` constant hardcodes only **3 questions** while the page displays many more. Critical: the JSON-LD must include EVERY visible FAQ for Google to use them. As-is, only 3 are eligible for rich snippets.
- "Updated monthly" is a promise — add a visible `Last updated: {date}` near H1, generated from the data file.

**Recommendations.**

- Rewrite `FAQ_SCHEMA` to be **derived from the same data array** that `FAQList` renders. Single source of truth — when content changes, schema changes. Pattern:
  ```ts
  const FAQ_SCHEMA = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQ_CATEGORIES.flatMap(c => c.items).map(q => ({
      '@type': 'Question',
      name: q.question,
      acceptedAnswer: { '@type': 'Answer', text: q.answer }
    }))
  };
  ```
- Add a per-section H2 with anchor (so questions can be deep-linked: `/faq#hipaa`, `/faq#pricing`, etc.)
- Add `<Seo>` `description`: "38 healthcare-marketing questions answered — HIPAA, pricing, onboarding, ad spend, attribution, reporting. Updated monthly by the TheNextGen team."

---

### 3.7 Team — `/team`

- **Status:** Strong intro, missing per-person depth.
- **Primary keyword:** *healthcare marketing team*, *medical marketing specialists*
- **Secondary keywords:** *HIPAA marketing experts*, *healthcare SEO specialists Texas*

**Current H1:** "Specialists, not generalists."

**Issues.**
- H1 is excellent.
- Each team member should be its own anchor with H3 + bio + `Person` schema (per-person `Person` JSON-LD enables rich SERP for branded searches "Sarah Chen TheNextGen").
- "9 practitioners" stat — confirm the rendered grid actually shows 9.

**Recommendations.**

- Add `Person` schema for each team member (name, jobTitle, image, sameAs LinkedIn).
- Convert team grid card titles to `<h3>`s so heading hierarchy is preserved.
- Add a "What each role owns" sentence under each bio — connects roles to client outcomes ("Marcus owns paid media — every ad dollar across Google, Meta, and YouTube").
- Internal link from `JoinUs` section → `/contact?subject=careers` or dedicated careers page (consider if this gets traffic).
- `<Seo>` description: "Meet the 9 specialists who run your healthcare marketing — SEO, paid media, content, design, code, compliance. Healthcare-only. Texas-based. In-house, no freelancers."

---

## 4. Service spokes (12 pages — Wave B target)

The 9 main service pages (SEO, Google Ads, GBP, Analytics, Email, Branding, Website Design, Social, Content) follow a near-identical pattern: Hero → TrustBar → Capabilities/Optimization/Platforms → DataShowcase → ProcessPhases → Comparison → LearningHub → SubServices → FAQ → CTA. Plus `MetaAds` and `ReviewsReputation` use the editorial pattern.

Common issues across all spokes:

- **`<Seo />` not present.** Title and description need to be set per spoke.
- **Generic FAQ section title.** "The eight questions every practice owner asks." is identical across 8 spokes. Rewrite to be page-specific ("The eight questions clinic owners ask about SEO", "Eight questions urgent care operators ask about Google Ads", etc.).
- **Hero CTA goes to `#audit` or `#capabilities` anchor**, then the secondary "Request my audit / Book my audit" goes to `/contact`. The free audit should go to `/free-growth-audit`, not `/contact` (see 3.4).
- **No `MedicalBusiness` subtype.** Service schema is generic `Service` — fine, but the offered `Service` could nest under a `provider` that is a `MedicalBusiness` to strengthen E-E-A-T for healthcare specifically.

### 4.1 `/services` (Services hub)

- **Primary keyword:** *healthcare marketing services*, *medical marketing services Texas*, *healthcare marketing agency services*
- **Secondary keywords:** *what does a healthcare marketing agency do*, *full-service medical marketing*
- **Current H1:** "Healthcare Marketing Services" — generic.
- **Issues:** No schema (only individual spokes have schema). FAQ has 7 items but no `FAQPage` schema. Section title "Service [Questions]." has bracket — looks templating-leaked.
- **Recommendations:**
  - H1 → "Healthcare Marketing Services Built for Clinics, MedSpas, Urgent Care & ERs."
  - Eyebrow → "Texas-based · HIPAA-aware · One operating system, nine services."
  - Add `Service` umbrella schema with `serviceType: "Healthcare Marketing"`, with `hasOfferCatalog` listing all 9 sub-services (Service items pointing at each spoke URL).
  - Add `FAQPage` schema for the 7 FAQ items.
  - Fix "Service [Questions]." → "Healthcare Marketing Services — Most-Asked Questions."
  - Internal links: from each service card → /case-studies (already), → industry-specific outcomes ("See how this works for medspas →").

### 4.2 `/services/seo`

- **Primary keyword:** *healthcare SEO*, *medical SEO services*, *healthcare SEO agency*
- **Secondary keywords:** *local SEO for clinics*, *HIPAA-compliant SEO*, *medspa SEO*, *urgent care SEO*, *AEO healthcare*, *EEAT for healthcare*
- **Current H1:** "The complete SEO platform your practice plugs into." ✓ keep
- **Issues:** Strong page. FAQ section title still generic. CTA mismatch (audit goes to `/contact` not `/free-growth-audit`).
- **Recommendations:** Rewrite FAQ section title → "Healthcare SEO — eight questions practice owners ask before signing." Swap CTA `/contact` → `/free-growth-audit`. Add `<Seo>` title "Healthcare SEO Services — HIPAA-Aware, AEO-Ready, E-E-A-T Compliant \| TheNextGen", description "Complete healthcare SEO — technical, on-page, local, content, AEO. Built for clinics, surgical groups, hospital networks. HIPAA-aware. Free 12-page audit." Add link → `/citation-building`, `/hyper-local-content`, `/aeo-schema` from the SubServices section (these specialty pages are SEO sub-disciplines but currently disconnected).

### 4.3 `/services/google-ads`

- **Primary keyword:** *healthcare Google Ads*, *medical PPC*, *clinic PPC management*
- **Secondary keywords:** *HIPAA-compliant Google Ads*, *medspa Google Ads*, *urgent care PPC*, *healthcare performance max*, *LSA healthcare*
- **Issues:** Same FAQ-generic + CTA-mismatch issues.
- **Recommendations:** H1 keep. FAQ title → "Healthcare Google Ads — eight questions every practice owner asks before launch." `<Seo>` title "Healthcare Google Ads Management — HIPAA-Aware PPC for Clinics \| TheNextGen". Internal link → `/meta-ads` ("Need Meta Ads too? See our Meta program →"), → `/services/analytics-reporting` ("See how we attribute every ad dollar →").

### 4.4 `/services/google-business-profile`

- **Primary keyword:** *Google Business Profile management healthcare*, *healthcare local pack*, *clinic GBP optimization*
- **Secondary keywords:** *multi-location GBP*, *medical Google Maps ranking*, *healthcare local SEO*, *clinic GBP audit*
- **Recommendations:** FAQ title → "Multi-location healthcare GBP — eight questions before you sign." `<Seo>` title "Google Business Profile for Healthcare — Multi-Location Local Pack Domination \| TheNextGen". Internal link → `/citation-building` (NAP consistency is the prerequisite), → `/reviews-reputation` (review velocity drives Local Pack ranking).

### 4.5 `/services/analytics-reporting`

- **Primary keyword:** *healthcare marketing analytics*, *medical marketing dashboard*, *HIPAA-compliant analytics*
- **Secondary keywords:** *healthcare attribution*, *PHI-free analytics*, *BAA-covered marketing analytics*, *GA4 healthcare*
- **Recommendations:** FAQ title → "Healthcare marketing analytics — eight questions every operator asks." `<Seo>` title "HIPAA-Aware Marketing Analytics & Dashboards for Healthcare \| TheNextGen". Internal link → `/hipaa-compliance` ("How we keep analytics PHI-free →"), → `/services/google-ads` ("Same dashboard reports your Google Ads →").

### 4.6 `/services/email-drip-campaigns`

- **Primary keyword:** *healthcare email marketing*, *clinic email campaigns*, *HIPAA-compliant email*
- **Secondary keywords:** *patient recall emails*, *medspa email marketing*, *BAA-covered ESP*, *patient lifecycle email*
- **Recommendations:** FAQ title → "Healthcare email & patient lifecycle drips — eight questions before you launch." `<Seo>` title "HIPAA-Compliant Healthcare Email Marketing — Recall, Welcome, Win-Back Flows \| TheNextGen". Internal link → `/patient-experience` ("Email is one channel — see the full journey →"), → `/reviews-reputation` ("Lifecycle email = review velocity →").

### 4.7 `/services/brand-identity-design`

- **Primary keyword:** *healthcare branding*, *medical brand identity*, *clinic branding agency*
- **Secondary keywords:** *medspa branding*, *medical practice rebrand*, *hospital brand identity*, *healthcare logo design*
- **Recommendations:** FAQ title → "Healthcare rebrands — eight questions every multi-location operator asks before kickoff." `<Seo>` title "Healthcare Brand Identity & Design — Multi-Location Rebrand Specialists \| TheNextGen". Internal link → `/services/website-design-dev` ("Brand is the input, the website is the output →"), → `/case-studies` filtered to rebrand stories.

### 4.8 `/services/website-design-dev`

- **Primary keyword:** *healthcare website design*, *medical website development*, *clinic website design*
- **Secondary keywords:** *HIPAA-compliant website*, *medspa website*, *WCAG healthcare*, *Core Web Vitals healthcare*
- **Status:** Has an existing useEffect that sets title + meta + OG + canonical. **Migrate this to `<Seo />` first** so it stops being a snowflake.
- **Recommendations:** Title already good ("Healthcare Website Design & Development \| TheNextGen") — match for other spokes' title pattern. Keep WCAG 2.2 AA + sub-2s LCP claims prominent — they are differentiated. Internal link → `/services/seo` (technical SEO is the design output), → `/aeo-schema`.

### 4.9 `/services/social-media-marketing`

- **Primary keyword:** *healthcare social media marketing*, *medical social media agency*, *clinic social media management*
- **Secondary keywords:** *medspa Instagram marketing*, *plastic surgery social media*, *HIPAA social media*, *clinical social content*
- **Recommendations:** FAQ title → "Healthcare social media — eight questions clinic owners ask before posting." `<Seo>` title "Healthcare Social Media Marketing — Instagram, Reels, TikTok for Clinics \| TheNextGen". Internal link → `/services/content-copywriting` (social is content amplification), → `/meta-ads` (organic + paid).

### 4.10 `/services/content-copywriting`

- **Primary keyword:** *healthcare content marketing*, *medical content writing*, *clinician-reviewed content*
- **Secondary keywords:** *E-E-A-T healthcare content*, *medical SEO content*, *patient education content*, *AEO content*
- **Recommendations:** FAQ title → "Healthcare content marketing — eight questions before you commission a quarter." `<Seo>` title "Healthcare Content Marketing — Clinician-Reviewed, E-E-A-T Compliant Articles \| TheNextGen". Internal link → `/services/seo` (content fuels SEO), → `/aeo-schema` (content + schema = AI Overview eligibility), → `/healthcare-content` (the editorial studio).

### 4.11 `/meta-ads`

- **Status:** Editorial template, weaker schema than other ad pages. Should mirror `/services/google-ads`.
- **Primary keyword:** *Meta Ads for healthcare*, *Facebook Ads healthcare*, *Instagram Ads medical*, *healthcare Meta marketing*
- **Issues:** No `Service` schema, no `FAQPage` schema, no BreadcrumbList. Hero is great editorially. Page lives at `/meta-ads` but logically belongs under `/services/meta-ads` (mirror Google Ads at `/services/google-ads`).
- **Recommendations:**
  - **Move route to `/services/meta-ads`** (add a redirect from `/meta-ads`).
  - Add `Service` + `FAQPage` + `BreadcrumbList` schema matching the other service spokes.
  - Add an FAQ section (6–8 Qs): "Are Meta Ads HIPAA-compliant?", "What's the difference between Meta Ads and Google Ads for clinics?", "Do you set up the Conversions API?", "Will iOS privacy changes affect my ROAS?", "Do we need before/after photos? Are those compliant?", "Minimum monthly spend?"
  - `<Seo>` title "Meta Ads for Healthcare — HIPAA-Aware Facebook & Instagram Ads \| TheNextGen".
  - Internal link → `/services/google-ads` (cross-channel partner), → `/industries/medspas` (the highest Meta-ROAS vertical).

### 4.12 `/reviews-reputation`

- **Status:** Editorial template, also belongs as a service spoke.
- **Primary keyword:** *healthcare reputation management*, *patient reviews management*, *clinic review automation*
- **Secondary keywords:** *HIPAA review responses*, *Google reviews healthcare*, *medspa review management*, *clinic reputation*
- **Recommendations:**
  - **Move route to `/services/reviews-reputation`** (with redirect from current).
  - Add `Service` + `FAQPage` + `BreadcrumbList`.
  - Add 8-Q FAQ: "Is responding to reviews HIPAA-compliant?", "Can I delete bad reviews?", "How do you collect reviews without violating platform rules?", "Do reviews actually move Local Pack ranking?", "What about HIPAA in the review request itself?", "Multi-location review aggregation?", "Negative review response timeline?", "Pricing?"
  - `<Seo>` title "Healthcare Reputation Management & Patient Reviews — HIPAA-Safe \| TheNextGen".
  - Internal link → `/services/google-business-profile` (reviews live on GBP), → `/patient-experience` (review = end of patient journey).

---

## 5. Industry pages (5 pages — Wave C target)

### 5.1 `/industries` (Industries hub)

- **Primary keyword:** *healthcare marketing by specialty*, *industry-specific medical marketing*
- **Secondary keywords:** *medspa marketing agency*, *urgent care marketing*, *freestanding ER marketing*, *clinic marketing by specialty*
- **Current H1:** "Healthcare marketing tailored to your specialty." ✓ keep
- **Issues:** Only `LocalBusiness` schema — missing `ItemList` schema for the 3 verticals + 10 industries.
- **Recommendations:** Add `ItemList` schema listing each industry-detail URL. Add `BreadcrumbList`. Internal link from each industry card → its detail page (already there) AND → its case-study filter (`/case-studies?vertical=clinics` if filter param supported, else top 1–2 most relevant case studies linked individually).

### 5.2 `/industries/clinics`

- **Primary keyword:** *clinic marketing agency*, *primary care marketing*, *multi-location clinic marketing*
- **Secondary keywords:** *family practice marketing*, *cardiology marketing*, *pediatrics marketing*, *dental practice marketing*, *specialty clinic SEO*
- **Current H1:** "Patient flow for clinics, engineered." ✓ keep
- **Recommendations:** Strengthen the H2 "How clinic owners size up a multi-location engagement." with explicit specialty-tagging in the body. Add `MedicalBusiness` schema (subtype, not generic `LocalBusiness`). `<Seo>` title "Clinic Marketing Agency — Multi-Location Healthcare Practice Growth \| TheNextGen". Internal link → `/industries/detail/family-practice` etc., → `/case-studies/primary-care-seo-roi`, → `/services/google-business-profile` (multi-location bread and butter).

### 5.3 `/industries/medspas`

- **Primary keyword:** *medspa marketing agency*, *aesthetic marketing*, *medical spa marketing*
- **Secondary keywords:** *injectables marketing*, *plastic surgery marketing*, *aesthetic Instagram marketing*, *medspa SEO*
- **Current H1:** "Aesthetic patients, on demand." ✓ keep
- **Recommendations:** `<Seo>` title "MedSpa & Aesthetic Marketing Agency — Patient Acquisition System \| TheNextGen". Add `MedicalBusiness` subtype schema. Internal link → `/services/social-media-marketing` (medspas live on social), → `/services/meta-ads` (highest Meta-ROAS vertical), → `/case-studies/cosmetic-surgery-lead-growth`.

### 5.4 `/industries/specialty-emergency`

- **Primary keyword:** *freestanding ER marketing*, *urgent care marketing*, *emergency room marketing*
- **Secondary keywords:** *FSED marketing*, *high-acuity patient acquisition*, *EmergencyMedicalService SEO*, *urgent care SEO*
- **Current H1:** "High-acuity acquisition for specialty care." ✓ keep
- **Recommendations:** Add `EmergencyService` schema (mentioned in FAQ — implement it). `<Seo>` title "Freestanding ER & Urgent Care Marketing — High-Acuity Patient Acquisition \| TheNextGen". Internal link → `/hipaa-compliance` (urgent operator audience hyper-sensitive to compliance), → `/case-studies/er-network-patient-growth`, → `/aeo-schema` (wait-time pages need schema).

### 5.5 `/industries/detail/:slug` (10 dynamic slugs)

- **Status:** Each slug already has `serviceSchema` + `faqSchema`. Good.
- **Issues:** `document.title` is set in useEffect but no meta description, no OG, no canonical. Migrate to `<Seo />`.
- **Recommendations:** Per slug, set:
  - `<Seo title={`${entry.label} Marketing — Patient Acquisition for ${entry.label} Practices`}>`
  - `description` derived from `entry.description` (truncated to 158 chars)
  - `canonical` = `${SITE.url}/industries/detail/${slug}`
  - `BreadcrumbList` schema (Home → Industries → {entry.label})
- Per-slug recommended target keywords:
  - `dental` → "dental practice marketing", "dentist SEO", "dental Google ads"
  - `urgent-care` → "urgent care marketing", "urgent care SEO", "walk-in clinic marketing"
  - `medspa` → "medspa marketing", "medical spa Instagram marketing", "medspa lead generation"
  - `freestanding-er` → "freestanding ER marketing", "FSED patient acquisition", "ER marketing agency"
  - `mental-health` → "mental health marketing", "therapy practice marketing", "behavioral health marketing"
  - `primary-care` → "primary care marketing", "family practice SEO", "internal medicine marketing"
  - `chiropractic` → "chiropractic marketing", "chiropractor SEO", "DC marketing agency"
  - `plastic-surgery` → "plastic surgery marketing", "cosmetic surgery lead generation", "aesthetic surgeon marketing"
  - `ophthalmology` → "ophthalmology marketing", "eye care practice marketing", "LASIK marketing"
  - `dermatology` → "dermatology marketing", "derm practice SEO", "cosmetic dermatology marketing"

---

## 6. Specialty / feature pages (Wave C target, continued)

These are pages that aren't service spokes but rank for specific high-intent queries.

### 6.1 `/medical-automation`

- **Primary keyword:** *healthcare automation*, *medical practice automation*, *clinic automation*, *HIPAA-compliant automation*
- **Secondary keywords:** *patient intake automation*, *EHR automation*, *clinic AI workflows*, *N8N healthcare*, *HL7 FHIR automation*
- **Current H1:** "Healthcare automation, that the clinic actually runs on" ✓ keep
- **Issues:** No FAQ section (this is a high-question topic). Page has SERVICE_SCHEMA but no FAQPage.
- **Recommendations:** Add 6-Q FAQ: "Is healthcare automation HIPAA-compliant?", "What EHRs do you integrate with?", "What is HL7/FHIR and why does it matter?", "How long to launch a workflow?", "Do we replace our front-desk team?", "What if our EHR has no API?". `<Seo>` title "Healthcare Automation — HIPAA-Aware N8N + EHR Workflows for Clinics \| TheNextGen". Internal link → `/automation/templates` (the free library), → `/services/analytics-reporting` (dashboards), → `/hipaa-compliance`.

### 6.2 `/onsite-field-marketing`

- **Primary keyword:** *healthcare field marketing*, *medical referral marketing*, *clinic community outreach*
- **Secondary keywords:** *physician referral marketing*, *B2B healthcare marketing*, *medical event marketing*
- **Recommendations:** Add FAQ (5–6 Qs). Add SERVICE_SCHEMA + FAQ_SCHEMA + BreadcrumbList. `<Seo>` title "Healthcare Field Marketing — Booth, Territory & B2B Referral Programs \| TheNextGen". Internal link → `/case-studies` (proof), → `/services/analytics-reporting` (attribution to dashboard).

### 6.3 `/patient-experience`

- **Primary keyword:** *patient experience design*, *patient journey mapping*, *healthcare UX*
- **Secondary keywords:** *patient journey optimization*, *clinic patient flow*, *medical practice operations*, *patient acquisition funnel*
- **Issues:** No schema at all. Strong content. Likely a page that captures a lot of long-tail.
- **Recommendations:** Add `Service` schema + `BreadcrumbList`. Add FAQ section (6 Qs): "What's the difference between patient experience and patient satisfaction?", "How do you measure patient experience?", "Do you redesign our intake forms?", "Is this a one-time engagement or ongoing?", "How does this connect to marketing ROI?", "Where does the friction map come from?". `<Seo>` title "Patient Experience & Journey Design for Healthcare Practices \| TheNextGen". Internal link → `/services/email-drip-campaigns` (lifecycle email is journey ops), → `/reviews-reputation` (end of journey).

### 6.4 `/citation-building`

- **Primary keyword:** *healthcare citation building*, *medical NAP consistency*, *clinic local citations*
- **Secondary keywords:** *healthcare directory submission*, *medical practice citations*, *local pack citations*
- **Recommendations:** Add FAQ (5 Qs). Add `Service` + `FAQPage` + `BreadcrumbList` schema. `<Seo>` title "Healthcare Citation Building — NAP Consistency for Local Pack Ranking \| TheNextGen". Internal link → `/services/google-business-profile` (prerequisite), → `/services/seo` (parent service).

### 6.5 `/hyper-local-content`

- **Primary keyword:** *hyper-local content*, *programmatic local landing pages*, *neighborhood SEO*
- **Secondary keywords:** *city pages SEO*, *suburb landing pages*, *healthcare local content*, *catchment area pages*
- **Status:** Has SCHEMA already. Strong design.
- **Recommendations:** Add FAQ (5 Qs): "How is this different from spam doorway pages?", "How many pages can we generate?", "Are AI-generated location pages safe?", "What if my catchment overlaps another clinic's?", "Do these pages cannibalize my main service page?". Add `FAQPage` schema. `<Seo>` title "Hyper-Local Content — Programmatic Neighborhood Landing Pages for Healthcare \| TheNextGen". Internal link → `/services/seo`, → `/citation-building`.

### 6.6 `/aeo-schema`

- **Primary keyword:** *answer engine optimization*, *AEO healthcare*, *schema markup healthcare*
- **Secondary keywords:** *AI Overview optimization*, *healthcare schema markup*, *MedicalClinic schema*, *voice search healthcare*
- **Status:** Strong page, no schema (ironic — page about schema with no schema).
- **Recommendations:** **Add comprehensive JSON-LD on this page itself** (eat your own dog food). Add FAQ (6 Qs): "What is AEO and how is it different from SEO?", "Will AI Overviews replace clicks?", "What schema types matter for healthcare?", "How do I qualify for AI citation?", "Is schema enough or do I need editorial structure too?", "Pricing?". `<Seo>` title "AEO & Schema Markup for Healthcare — Get Cited in AI Overviews \| TheNextGen". Internal link → `/services/seo`, → `/services/content-copywriting`, → `/hyper-local-content`.

### 6.7 `/hipaa-compliance`

- **Primary keyword:** *HIPAA-compliant marketing*, *HIPAA marketing agency*, *BAA marketing*
- **Secondary keywords:** *HIPAA Google Ads*, *HIPAA email marketing*, *PHI-free analytics*, *healthcare marketing compliance*
- **Status:** Strong, has SCHEMA. No FAQ.
- **Recommendations:** Add FAQ (8 Qs — this page is a high-intent compliance research page): "What does HIPAA-aware mean vs HIPAA-compliant?", "Do you sign BAAs?", "How do you handle tracking pixels?", "What about Google Ads conversion tracking?", "Can patient reviews violate HIPAA?", "What about CRM/EHR integration?", "Do you provide compliance documentation for our security team?", "What if our compliance officer requires X?". Add `FAQPage` schema. `<Seo>` title "HIPAA-Compliant Healthcare Marketing — BAA-Covered Stack \| TheNextGen". Internal link → `/services/analytics-reporting` (PHI-free analytics in practice), → `/services/email-drip-campaigns` (BAA ESPs), → `/services/google-ads` (HIPAA-aware tracking).

### 6.8 `/healthcare-content` (editorial studio)

- **Primary keyword:** *healthcare content studio*, *clinician-reviewed content*, *medical editorial agency*
- **Secondary keywords:** *evidence-based health content*, *medical writing services*, *patient education content*
- **Issues:** This page overlaps significantly with `/services/content-copywriting`. Distinguish or merge.
- **Recommendations (decision required from user):**
  - **Option A — Merge** `/healthcare-content` into `/services/content-copywriting` (redirect, content folds in).
  - **Option B — Reposition** `/healthcare-content` as "Our editorial studio" (operational/team page) and link to it from `/services/content-copywriting`. Add `MedicalScholarlyArticle` schema for sample content. `<Seo>` title "TheNextGen Editorial Studio — Clinician-Reviewed Healthcare Content".
- **Recommendation:** Option B preserves both pages and gives them distinct intents. Flag for user decision.

### 6.9 `/growth-plan`

- **Primary keyword:** *healthcare growth plan*, *12-month medical marketing plan*, *clinic growth strategy*
- **Secondary keywords:** *healthcare marketing roadmap*, *clinic acquisition strategy*, *medical practice growth*
- **Current H1:** "One chart. Twelve months. No surprises." ✓ keep
- **Issues:** No schema. No FAQ. Strong visual/conceptual page that needs an SEO scaffold.
- **Recommendations:** Add `Service` schema + `BreadcrumbList`. Add FAQ (5 Qs): "Is the plan customized to my practice?", "What if results aren't on the curve in month 3?", "Can I see a sample plan?", "Do I need to commit to the full 12 months?", "What's the pricing structure?". `<Seo>` title "The 12-Month Healthcare Growth Plan — One Chart, Four Phases \| TheNextGen". Add prominent CTA → `/free-growth-audit` (this page is conceptual; the audit is the conversion). Internal link → `/methodology/phase-1`, `/phase-2`, `/phase-3`.

---

## 7. Methodology stack (Wave D target)

### 7.1 `/methodology/phase-1`, `/phase-2`, `/phase-3`

- **Primary keywords:**
  - Phase 1 → *healthcare marketing audit*, *clinic technical audit*, *medical practice marketing audit*
  - Phase 2 → *healthcare marketing strategy*, *clinic marketing infrastructure*, *medical practice marketing build*
  - Phase 3 → *healthcare marketing launch*, *clinic marketing acceleration*, *30-day marketing kickoff*
- **Issues:** No schema, no `<Seo />`. Beautiful editorial pages with no SEO discoverability. Only entry point is `/about#methodology` — no clean URL from primary nav.
- **Recommendations:**
  - Add `Article` schema (each phase IS an article describing methodology).
  - Add `BreadcrumbList` (Home → Methodology → Phase N).
  - **Create a `/methodology` index page** that summarizes all 3 phases with cards linking out. Add it to primary nav (see 2.3 #4).
  - `<Seo>` titles:
    - Phase 1: "Healthcare Marketing Audit — Discovery & Technical Audit (Weeks 1–2) \| TheNextGen"
    - Phase 2: "Healthcare Marketing Strategy & Build — Weeks 3–4 \| TheNextGen"
    - Phase 3: "Healthcare Marketing Launch — Day 1–30 to Compounding Pipeline \| TheNextGen"
  - Each phase page should have a "← Previous phase / Next phase →" pair at the bottom for serial navigation.
  - Internal link from Phase 3 → `/case-studies` (proof the methodology ships), → `/pricing`, → `/free-growth-audit`.

### 7.2 `/healthcare-growth-engine`

- **Primary keyword:** *healthcare growth engine*, *integrated healthcare marketing system*, *clinic marketing operating system*
- **Secondary keywords:** *healthcare marketing stack*, *clinic acquisition stack*, *integrated medical marketing*
- **Current H1:** "Patient growth, engineered." ✓ keep
- **Issues:** Strong page. Has SCHEMA. Needs `<Seo />` integration.
- **Recommendations:** `<Seo>` title "The Healthcare Growth Engine — Integrated SEO + Paid + Automation \| TheNextGen". Description: "One operating system across SEO, paid media, and automation. Built for clinics. Instrumented end-to-end, reviewed weekly. From $2,500/mo." Internal link → `/pricing`, → `/services` (the channels), → `/case-studies`.

### 7.3 `/automation` (hub)

- **Primary keyword:** *healthcare automation library*, *clinic automation templates*, *free healthcare automation*
- **Secondary keywords:** *patient intake automation*, *N8N healthcare workflows*, *clinic AI automation*
- **Issues:** No schema. No FAQ. "Schedule a call" CTA opens BookingModal — confirm the modal is wired and analytics-tagged.
- **Recommendations:** Add `Service` + `SoftwareApplication` (for the templates) + `BreadcrumbList` schema. Add FAQ (6 Qs). `<Seo>` title "Free Healthcare Automation Templates — Patient Intake, Reminders, Reviews \| TheNextGen". Internal link → `/automation/templates` (already), → `/automation/more-info`, → `/medical-automation` (the paid-service variant).

### 7.4 `/automation/more-info`

- **Status:** "Playbook" educational page. Strong concept.
- **Issues:** No schema. No FAQ. URL slug `/more-info` is generic — rename to something descriptive.
- **Recommendations:** **Rename URL to `/automation/playbook`** (more descriptive, better for click-throughs). Add `Article` schema. `<Seo>` title "Healthcare Automation Playbook — Practitioner's Guide to HIPAA-Safe Workflows \| TheNextGen". Internal link → `/automation/templates`, → `/hipaa-compliance`, → `/medical-automation`.

### 7.5 `/automation/templates`

- **Status:** Has TEMPLATES_SCHEMA already.
- **Primary keyword:** *free healthcare automation templates*, *N8N healthcare templates*, *clinic workflow templates*
- **Recommendations:** Confirm `SoftwareApplication` or `CreativeWork` schema is used per template. Add `BreadcrumbList`. `<Seo>` title "Free Healthcare Automation Library — Six N8N Workflows, HIPAA-Safe \| TheNextGen". Internal link → `/automation/playbook` (after rename), → `/medical-automation`.

### 7.6 `/infrastructure/growth-team`, `/compliance-protocol`, `/service-level-agreements`

- **Primary keywords:**
  - Growth Team → *embedded healthcare marketing team*, *in-house healthcare marketing*, *no-freelancer healthcare agency*
  - Compliance Protocol → *HIPAA-compliant marketing infrastructure*, *BAA-covered marketing stack*, *healthcare marketing security*
  - SLA → *healthcare marketing SLA*, *marketing agency response time*, *clinic marketing service guarantees*
- **Status:** All have SCHEMA. Need `<Seo />` integration.
- **Recommendations:** Each gets a `<Seo />` with descriptive title + description. These pages are sold to procurement / legal / security teams — title should signal that ("Documentation Pack", "BAA-Covered", "SLA").

---

## 8. Proof & content (Wave E target)

### 8.1 `/case-studies`

- **Primary keyword:** *healthcare marketing case studies*, *clinic marketing results*, *medical marketing case studies*
- **Secondary keywords:** *urgent care case study*, *medspa marketing case study*, *primary care SEO case study*
- **Current H1:** "Case Studies & Growth Stories." — weak. Add specificity.
- **Issues:** No `<Seo />`. No `BreadcrumbList`. No `ItemList` schema for the case studies grid.
- **Recommendations:**
  - H1 → "Healthcare Marketing Case Studies — Real Results from 47 Practices."
  - Add `ItemList` schema linking each case study.
  - Add `BreadcrumbList`.
  - `<Seo>` title "Healthcare Marketing Case Studies — Real Clinic & MedSpa Results \| TheNextGen".
  - Filter UI (vertical, service, result type) — already partially present, ensure URLs are filterable (`?vertical=clinics`) for shareable filtered states.
  - Internal link → `/our-work` (sibling proof page), → `/free-growth-audit`.

### 8.2 `/case-studies/:slug` (6 slugs)

- **Status:** Each has `buildSchema` + `buildBreadcrumbSchema`. Each sets `document.title` + `meta description`. **Migrate to `<Seo />`** for consistency + OG support.
- **Recommendations:** Per slug, ensure title is keyword-rich (vertical + outcome): e.g., `er-network-patient-growth` → "Freestanding ER Marketing Case Study — 45% Patient Visit Lift in 6 Months". Add `Article` (`articleSection: "Case Study"`) + `Organization` (client mention if shareable) + `BreadcrumbList`. Internal link → "← All case studies", → related service spoke ("How we did it: SEO →"), → `/free-growth-audit`.

### 8.3 `/our-work`

- **Primary keyword:** *healthcare marketing portfolio*, *medical marketing work*, *clinic marketing case studies*
- **Status:** Has `COLLECTION_SCHEMA`. Strong page.
- **Issues:** Overlap with `/case-studies`. Both are portfolio-style pages.
- **Recommendation:** Differentiate clearly. **`/case-studies` = full narrative + numbers + methodology** (long-form). **`/our-work` = visual portfolio + capabilities + industries** (browse-style). Update H1s + descriptions to reinforce: `/our-work` H1 keep "Six years. Two hundred practices. One playbook." `<Seo>` title "Our Healthcare Marketing Work — Selected Projects 2019–2026 \| TheNextGen".

### 8.4 `/our-work/:kind/:slug`

- **Status:** Dynamic template with 20+ entries (capabilities, engagements, industries).
- **Recommendation:** Each entry needs unique `<Seo />`. For `kind=engagement`, use `CreativeWork` or `CaseStudy`-style `Article` schema; for `kind=capability` and `kind=industry`, use `WebPage` schema. Migrate ad-hoc head manipulation to `<Seo />`.

### 8.5 `/blog`

- **Primary keyword:** *healthcare marketing blog*, *medical marketing blog*, *clinic marketing tips*
- **Current H1:** "Healthcare marketing, written by practitioners." ✓ keep
- **Status:** Has `BLOG_SCHEMA`. Strong page.
- **Issues:** "Subscribe" form is `mailto:` — see 2.6.
- **Recommendations:** Add `BreadcrumbList`. `<Seo>` title "Healthcare Marketing Blog — Practitioner-Written Tactics \| TheNextGen". Per-category filter should produce shareable URLs (`/blog?category=local-seo`). Internal link from each article card → article + related case studies.

### 8.6 `/blog/:slug` (9+ posts)

- **Status:** Each uses `useDocumentMeta` hook + `buildBlogPostSchema` + `buildBreadcrumbSchema`. Pattern is solid; migrate to `<Seo />`.
- **Recommendations:** Per post, ensure:
  - `Article` (`@type: 'BlogPosting'`) with `headline`, `image`, `datePublished`, `dateModified`, `author` (Person), `publisher` (Organization).
  - Reading-time + author byline visible on the page.
  - "Last updated" date displayed if `dateModified` ≠ `datePublished` (signals freshness).
  - Related posts section at end (3 cards).
  - Internal link → relevant service spoke ("Need help executing this? →").

### 8.7 `/healthcare-news`

- **Primary keyword:** *healthcare news weekly brief*, *medical industry updates*, *HIPAA news*
- **Current H1:** "Healthcare News & Insights." OK.
- **Issues:** "Most Popular" ranking — need data source or remove. Auto-scrolling marquee can hurt CLS — verify CWV.
- **Recommendations:** Add `BreadcrumbList`. `<Seo>` title "Healthcare News & HIPAA Industry Updates — Weekly Brief \| TheNextGen". Confirm `NewsMediaOrganization` schema if positioning as a news source (or stick with `Blog`/`CollectionPage`).

### 8.8 `/healthcare-news/:slug` (15+ articles)

- **Status:** Uses `buildNewsSchema` pattern. Per-slug schema present.
- **Recommendations:** Each article needs `NewsArticle` (not generic `Article`) schema for Google News eligibility. Migrate `document.title` to `<Seo />`. Add `dateModified`, `author` (real Person, not just byline string), `publisher` (Organization). Add internal cross-link → related blog post or case study.

---

## 9. Utility (Wave E target, lightweight)

### 9.1 Legal pages (`/privacy`, `/terms`, `/accessibility`)

- **Status:** Built on `LegalPage` component that sets title + meta description + canonical via `useEffect`. **Good pattern; migrate to `<Seo />`.**
- **Issues:**
  - ~~Email mismatch — Privacy and Accessibility reference `hello@focusyourfinance.com`.~~ **(Correction: both files already use `SITE.email` cleanly. False finding.)**
  - Should be `noindex: false` (let them index, they're trust signals) but `priority: 0.3` in sitemap.
  - No schema needed.
- **Recommendations:** Replace `useEffect` head manipulation in `LegalPage.tsx` with `<Seo />`.

### 9.2 `/sitemap` (HTML sitemap)

- **Status:** Comprehensive, 73 links across 9 columns. Good page.
- **Issues:** This is the *HTML* sitemap (user-facing). Add `public/sitemap.xml` for crawlers separately (see 2.2).
- **Recommendations:** Add `<Seo>` (currently just sets `document.title`). Add `BreadcrumbList`. Verify every route in `routes.ts` is in the GROUPS array (no broken routes drift).

### 9.3 `/` not-found (`*`)

- **Status:** Sets title via `useEffect`. Strong UX (recovery grid + free audit CTA).
- **Issues:** Should be `noindex: true` (404 pages should not be indexed). Confirm pathname interpolation is HTML-escaped (see 2.7).
- **Recommendations:** Add `<Seo noindex>` to the page. Add a `text-search` input wired to internal search (or to Google site-search) if search is supported. Migrate `useEffect` to `<Seo />`.

---

## 10. Remediation roadmap

Mapped to the same waves that are already in the todo list. Each wave ships as one batch with build/lint verification before the next starts.

### Wave 0 — Infrastructure (no per-page edits)

- Install `react-helmet-async`; wrap `App` in `<HelmetProvider>`.
- Create `src/components/Seo.tsx` (typed component, see 2.1).
- Fix `index.html` head defaults.
- Create `public/og-default.jpg` (1200×630 brand image).
- Create `public/robots.txt`.
- Create `scripts/build-sitemap.mjs` + wire to `prebuild`.
- ~~Update `content/navigation.ts` + `Navbar.tsx` for nav lead-flow fixes.~~ **Deferred by user — nav stays untouched in Wave 0; revisit in a later wave.**
- ~~Fix email constant references in `Privacy.tsx` + `Accessibility.tsx`.~~ **Not needed — those files were already clean. The actual fix landed in `content/website-design/schema.ts` (3 URLs).**
- Decision points (all resolved):
  - ✅ Business email confirmed: `hello@thenextgenhealth.com`.
  - ✅ Domain confirmed: `https://thenextgenhealth.com`.
  - Mega-menu vs simple dropdown (see 2.4) — deferred to a later wave with the nav lead-flow work.
  - ✅ Newsletter signup — user explicitly kept Subscribe section as-is; no ESP wiring in Wave 0.

### Wave A — Highest-conversion pages

- `/` (Home), `/services` (hub), `/industries` (hub), `/free-growth-audit`, `/pricing`, `/contact`, `/about`, `/faq`, `/team`.
- Each gets `<Seo />`, H1/eyebrow/meta description rewrites, missing schema (Organization, WebSite, BreadcrumbList, MedicalBusiness where applicable), internal link additions per the per-page sections above.

### Wave B — Service spokes

- `/services/seo`, `/google-ads`, `/google-business-profile`, `/analytics-reporting`, `/email-drip-campaigns`, `/brand-identity-design`, `/website-design-dev`, `/social-media-marketing`, `/content-copywriting`.
- Plus `/meta-ads` (move to `/services/meta-ads` + redirect) and `/reviews-reputation` (move to `/services/reviews-reputation` + redirect).
- Common edits: `<Seo />`, FAQ section title rewrites (replace generic with page-specific), CTA swap (`/contact` → `/free-growth-audit` for audit-flavored CTAs), specialty cross-links.

### Wave C — Industry + specialty pages

- `/industries/clinics`, `/medspas`, `/specialty-emergency`, `/industries/detail/:slug` (10 slugs).
- `/medical-automation`, `/onsite-field-marketing`, `/patient-experience`, `/citation-building`, `/hyper-local-content`, `/aeo-schema`, `/hipaa-compliance`, `/healthcare-content`, `/growth-plan`.
- Common edits: `<Seo />`, missing FAQ sections + FAQPage schema, MedicalBusiness/EmergencyService subtypes, internal cross-links between siblings.

### Wave D — Methodology + infrastructure stack

- New `/methodology` index page.
- `/methodology/phase-1`, `/phase-2`, `/phase-3` — Article schema + cross-phase nav.
- `/healthcare-growth-engine`.
- `/automation` (hub), `/automation/playbook` (renamed), `/automation/templates`.
- `/infrastructure/growth-team`, `/compliance-protocol`, `/service-level-agreements`.

### Wave E — Proof + content + utility

- `/case-studies` + `/case-studies/:slug` (6 slugs) — migrate to `<Seo />`, Article schema upgrades.
- `/our-work` + `/our-work/:kind/:slug` (20+ slugs) — migrate to `<Seo />`.
- `/blog` + `/blog/:slug` (9+ posts) — migrate `useDocumentMeta` to `<Seo />`.
- `/healthcare-news` + `/healthcare-news/:slug` (15+ articles) — migrate to `<Seo />`, NewsArticle schema.
- Legal pages — migrate `LegalPage.tsx` to `<Seo />`.
- `/sitemap`, `NotFound` — migrate to `<Seo />` (NotFound with `noindex`).

---

## 11. Items requiring user decision

1. ✅ **Business email** — confirmed `hello@thenextgenhealth.com` is the authoritative brand-facing email.
2. ✅ **Production domain** — confirmed `https://thenextgenhealth.com`.
3. ✅ **Newsletter wiring** — user explicitly kept Subscribe section exactly as-is; ESP wiring deferred indefinitely. Form continues to use `mailto:`.
4. **Mega-menu vs simple dropdown** for Services (see 2.4) — deferred with the nav lead-flow work.
5. **`/healthcare-content` vs `/services/content-copywriting`** — merge or differentiate (see 6.8).
6. **Pricing transparency** — disclose Scale Elite floor ("Starts at $25K/mo") or keep "Custom"? Transparency aids ranking + qualification.
7. **Phone in nav** — currently footer-only. For an urgent-care/ER target audience, a click-to-call button in primary nav lifts mobile conversion materially. Confirm appetite.
8. **Move `/meta-ads` and `/reviews-reputation` under `/services/`** — produces 301 redirects from current URLs. Confirm OK (improves nav consistency + crawl).
9. **Rename `/automation/more-info` to `/automation/playbook`** — 301 redirect. Confirm OK.

---

## End of audit

Next step: review this document, then approve Wave 0 to begin. Wave 0 unblocks every subsequent wave because it builds the `<Seo />` component every per-page edit will use.
