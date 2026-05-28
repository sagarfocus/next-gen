# Refactor Notes

A nine-stage cleanup of the codebase: structure, content organization, styles, imports, and formatting — all without changing UI, design, layout, classNames, content, routes, images, animations, forms, filters, or behavior.

Final state: `npm run build` green in ~2.7s, `npx tsc -b` clean.

---

## Stage-by-stage summary

### Stage 1 — Audit
Mapped the codebase: 27 monolithic page files, ~3,000 lines of hardcoded content arrays, ~40 cross-tree relative imports per page, no `@/` alias, no Prettier/EditorConfig, no `src/types/`, mixed colocation of content and types.

### Stage 2 — Path alias scaffold
Added `@/*` → `src/*` mapping in `tsconfig.app.json` and `vite.config.ts`. No file moves, no behavioral changes.

### Stage 3 — Monolithic page splits (3 waves, 26 pages)
Each monolithic `*.tsx` (195–1,494 lines) was decomposed into a folder with one section file per visual block + a colocated `data.ts` (or `data.tsx` when JSX-bearing) + a thin composition-only `index.tsx`.

| Wave | Pages | Range |
|---|---|---|
| A | 11 small | NotFound, OnsiteFieldMarketing, GrowthTeam, IndustryDetail, MoreInfo (Automation), ValueDetail (About), BlogPost, ComplianceProtocol, HyperLocalContent, AeoSchema, CitationBuilding |
| B | 10 medium | OurWorkDetail, CaseStudyDetail, MedicalAutomation, ReviewsReputation, PatientExperience, OurWork, ServiceLevelAgreements, HipaaCompliance, FreeGrowthAudit, GrowthPlan |
| C | 5 large | Automation/Templates, Phase2, Phase1, Phase3, HealthcareGrowthEngine (1,494 → 42-line index) |

Pattern documented at `pages/Home/` (already-split) and `pages/OnsiteFieldMarketing/` (Wave A pilot).

### Stage 4 — Content extraction (4 waves)
Hardcoded data arrays moved out of section components into `src/content/{nav-page}/`. ~3,000 lines relocated across 34 new files. Pages that aren't navigation destinations kept their `data.ts` colocated.

| Wave | Scope |
|---|---|
| A | Audit + extraction map |
| B1 | About (8), Industries (4), Pricing (5), Contact (1), FAQ (2) |
| B2 | Services (8 — includes 12-item ServicesList SVG illustrations) |
| C | Blog `posts.tsx` (493 lines) moved to `content/blog/posts.tsx` + 3 importers updated |
| D | Build + tsc verification |

`pages/About/values.data.tsx` and `pages/Industries/details.data.ts` were also relocated into `content/`.

### Stage 5 — Inline `<style>` extraction
Three Phase pages held large `<style>{`...`}</style>` blocks in `Styles.tsx` files. Extracted CSS body byte-identical into:
- `src/styles/phase1.css` (733 lines)
- `src/styles/phase2.css` (579 lines)
- `src/styles/phase3.css` (668 lines)

Each Phase `index.tsx` now imports the CSS as line 1 and renders no `<Styles />` JSX. The 3 `Styles.tsx` files were deleted only after the import was verified.

No other `<style>{...}</style>` blocks existed in the codebase (the original audit's "35–40" figure had conflated `<style>` blocks with React `style={{...}}` attributes).

### Stage 6 — Shared-pattern consolidation (skipped after audit)
Audit found no clean consolidation wins. Existing `components/{editorial, service, industry, icons}/` already cover the worth-sharing patterns. The remaining duplication (5 page-prefixed FAQs, 5 page-prefixed CTAs) lives on files in active migration and would require `prefix` props that increase complexity rather than reduce it. Marked complete with zero changes.

### Stage 7 — Import cleanup
- **Wave A:** audit identified ~310 cross-tree relative imports across ~168 files.
- **Wave B:** batched `sed` converted ~210 files to use `@/components/...`, `@/lib/motion`, `@/content/...`. Excluded the 6 active-migration page folders + `content/website-design/`.
- **Wave C:** no unused imports found — TypeScript's `noUnusedLocals: true` enforces this at build time.

### Stage 8 — Shared types extraction (skipped after audit)
Audit found 6 candidate types, all domain-scoped (used within one feature, not cross-cutting). Extracting them would split type from data and helper functions that currently live in one file. Marked complete with zero changes.

### Stage 9 — Format standardization
- **Wave A:** audited current state — already mostly consistent (single quotes, 2-space indent, LF endings). No Prettier or EditorConfig present.
- **Wave B:** installed Prettier 3.8.3 as devDependency, added `.prettierrc`, `.editorconfig`, `.prettierignore`, then ran `npx prettier --write src/**/*.{ts,tsx}` — formatted **356 files** with pure whitespace/quote/trailing-comma/line-wrap normalization.

---

## What was cleaned

- 26 monolithic page files → folder-per-page with section composition
- ~3,000 lines of inline content data → `src/content/{section}/` files
- ~1,980 lines of inline `<style>` JSX → `src/styles/phase{1,2,3}.css`
- ~210 cross-tree relative imports → `@/` alias
- 356 files normalized by Prettier
- Build time: unchanged (~2.7s)
- Type checking: still strict (`noUnusedLocals`, `noUnusedParameters`, `strict: true`)

---

## What was intentionally skipped

| Stage | What | Why |
|---|---|---|
| 6 | Shared FAQ / CTA / Hero / Card consolidation | Existing shared components already absorb worth-sharing patterns. Remaining duplication would force `prefix`-style props onto pages in active migration, increasing complexity rather than reducing it. |
| 8 | Move types into `src/types/` | All 6 candidate types are domain-scoped; splitting type from colocated data/helpers adds indirection without a clear win. |
| All | Touching `Blog/ArticleGrid.tsx` and `Blog/BlogHero.tsx` DRY violation | Duplicate blog metadata across these and `posts.tsx`. Fixing requires business-logic change (which list is canonical for "featured" / "latest"). Out of scope per "no business logic changes" rule. |
| All | Inline `style={{...}}` attribute consolidation | Different from `<style>{...}</style>` — these are React inline element styles. Replacing them with CSS classes would require designing the CSS, which is a design change. |
| All | Logic refactor in `BookingModal.tsx`, `Navbar.tsx`, `Footer.tsx` | ESLint reports `react-hooks/set-state-in-effect` and `no-irregular-whitespace` warnings. These are pre-existing logic issues, not formatting or structural. Out of stage scope. |

---

## Active migration folders excluded from this refactor

These were intentionally untouched in every stage because the user was actively migrating them in parallel (separate page-CSS file pattern using namespaced class prefixes like `.seo-*`, `.ga-*`, etc.):

- `src/pages/EmailCampaigns/`
- `src/pages/WebsiteDesign/`
- `src/pages/SEO/`
- `src/pages/GoogleAds/`
- `src/pages/SocialMedia/`
- `src/pages/ContentMarketing/`
- `src/content/website-design/`

These are listed in `.prettierignore` so future format runs won't touch them either. Imports inside these folders still use relative paths (not converted to `@/` alias in Stage 7).

---

## EmailCampaigns CSS import — status

**Status: RESOLVED.**

During Stage 5, `pages/EmailCampaigns/index.tsx` had `import '../../styles/emailcampaigns.css';` at line 1 but the CSS file did not yet exist, causing build failure. The import was temporarily commented out:
```ts
// import '../../styles/emailcampaigns.css';
```

The user subsequently created `src/styles/emailcampaigns.css` (~33 KB), and the import was uncommented. The page now renders with full styling. No further action needed.

---

## ContentMarketing pending — status

**Status: RESOLVED.**

Same situation as EmailCampaigns: the import was added before the CSS file existed, so it was temporarily commented out during Stage 5. After the user created `src/styles/contentmarketing.css` (~34 KB), the import was uncommented. The page now renders with full styling. No further action needed.

---

## WebsiteDesign pending — status

**Status: STILL IN-FLIGHT (user-managed).**

`pages/WebsiteDesign/` is being migrated to a page-prefixed CSS file system (matching the SEO/GoogleAds/SocialMedia/EmailCampaigns/ContentMarketing pattern). Companion content is being written into `src/content/website-design/`:

```
content/website-design/
  cases.ts
  care-plans.ts
  comparison.ts
  compliance.ts
  do-cards.tsx
  faqs.tsx
  industries.ts
  packages.ts
  related.ts
  schema.ts
```

Notes for completion (not done as part of this refactor):
- Page's `index.tsx` currently imports `{ useEffect } from 'react'` at line 1 (no CSS import yet).
- When ready, add `import '../../styles/websitedesign.css';` as line 1 (consistent with other prefix migrations).
- Both `pages/WebsiteDesign/` and `content/website-design/` are in `.prettierignore`, so Prettier will not touch them until you remove those entries.

Other pages with similar in-flight CSS migrations (added by the user during this refactor):
- `pages/Analytics/index.tsx` → `styles/analytics.css` ✅ imported, building
- `pages/Branding/index.tsx` → `styles/branding.css` ✅ imported, building
- `pages/GoogleBusinessProfile/index.tsx` → `styles/googlebusinessprofile.css` ✅ imported, building

---

## Commands that passed (final state)

```bash
npm run build
# ✓ built in 2.72s

npx tsc -b
# (no output, exit 0)

npx prettier --check src/**/*.{ts,tsx}
# (passes — codebase is now in normal form)
```

ESLint runs but reports pre-existing logic warnings (`react-hooks/set-state-in-effect` in BookingModal and Navbar, `no-irregular-whitespace` in Footer). These are out of refactor scope.

---

## Manual QA checklist

Before considering the refactor verified, walk through these pages in a running `npm run dev`:

### Top-priority golden paths
- [ ] `/` Home — Hero animations, parallax pills, scroll reveal on sections, testimonials carousel scroll loop
- [ ] `/about` About — Hero orbit visual, Genesis principles, ServicesSpectrum pillars, AboutFAQ accordion
- [ ] `/services` Services — Hero orbit pills + capability marquee, FeaturePair SVG art, Pillars panes, ServicesList 12-card grid, ServicesFAQ accordion
- [ ] `/industries` Industries — IndustriesHero, IndustryDeepDive blocks, IndustriesFAQ
- [ ] `/industries/detail/:slug` (e.g. `/industries/detail/dental`) IndustryDetail — Hero, Body sections, FAQ, Related grid
- [ ] `/pricing` Pricing — 3-tier comparison cards, full comparison table, AutomationROI stats, PricingFAQ native `<details>`
- [ ] `/contact` Contact — HelpCard rows + socials, QuoteWizard form steps, InquiryForm submit flow
- [ ] `/faq` FAQ — 38-question accordion with search filter and scroll-spy category nav
- [ ] `/blog` Blog hub + `/blog/:slug` BlogPost detail page

### High-risk Stage 3 splits — visual regression check
- [ ] `/methodology/phase-1`, `/phase-2`, `/phase-3` — Custom layouts with extracted CSS in `styles/phase{1,2,3}.css`. Check audit-module visuals, Gantt timeline, drop-cap intro, all `<style>`-driven layouts.
- [ ] `/healthcare-growth-engine` HealthcareGrowthEngine (1,494-line split) — Hero pulse, gap table, channels, HowItRuns auto-advance interval, Stack pointer-drag carousel, Outcomes CountUp, Faq accordion. **Carousel + CountUp + accordion behaviors are the highest-risk.**
- [ ] `/automation/templates` Automation/Templates (763-line split) — Filter state lifted to index; verify category filter works, template cards render, schema display.
- [ ] `/free-growth-audit` FreeGrowthAudit (581-line split) — Stats rail, Compare, Bento, Timeline, Pact, Outcomes.
- [ ] `/growth-plan` GrowthPlan (619-line split) — Vertical chart, phases, quarters, commitments.
- [ ] `/our-work` OurWork (483-line split) — Stats, Capabilities, Industries (had internal scroll-driven section refs), Featured.
- [ ] `/our-work/:kind/:slug` OurWorkDetail (411-line split) — Hero, Body, FAQ, Related, Closing for dynamic case studies.
- [ ] `/case-studies` + `/case-studies/:slug` CaseStudies — Hero, Playbook, Impact, Closing for dynamic case studies.

### Detail-route dynamic pages
- [ ] `/about/value/:slug` (e.g. `/about/value/transparency`) — ValueDetail Hero, Body, DetailNarrative, FAQ, Related, Closing.
- [ ] `/blog/:slug` — BlogPost Hero, NotFoundBlock for invalid slug.

### Active-migration pages (untouched by this refactor — verify they still work as the user expects)
- [ ] `/services/seo` SEO — pages/SEO + styles/seo.css
- [ ] `/services/google-ads` GoogleAds — pages/GoogleAds + styles/googleads.css
- [ ] `/services/social-media-marketing` SocialMedia — pages/SocialMedia + styles/socialmedia.css
- [ ] `/services/email-drip-campaigns` EmailCampaigns — pages/EmailCampaigns + styles/emailcampaigns.css
- [ ] `/services/content-copywriting` ContentMarketing — pages/ContentMarketing + styles/contentmarketing.css
- [ ] `/services/website-design-dev` WebsiteDesign — **in-flight migration, may show partial styling**
- [ ] `/services/analytics-reporting` Analytics — pages/Analytics + styles/analytics.css (user-added)
- [ ] `/services/brand-identity-design` Branding — pages/Branding + styles/branding.css (user-added)
- [ ] `/services/google-business-profile` GoogleBusinessProfile — pages/GoogleBusinessProfile + styles/googlebusinessprofile.css (user-added)

### Cross-cutting
- [ ] Navbar — desktop dropdowns + mobile drawer toggle
- [ ] Footer — link columns, social icons, newsletter form
- [ ] Page transitions on every route change
- [ ] Smooth-scroll behavior (Lenis)
- [ ] BookingModal open/close flow
- [ ] 404 — visit `/this-route-does-not-exist` → NotFound page hero + RecoveryGrid

### Browser checks
- [ ] Desktop layout (≥1280px)
- [ ] Tablet (768–1024px)
- [ ] Mobile (≤640px)
- [ ] Reduced-motion preference (Chrome DevTools → Rendering → "prefers-reduced-motion: reduce") — confirm animations downgrade gracefully

### Final visual diff
- [ ] Side-by-side spot-check a pre-refactor screenshot of Home, About, Services, Pricing, and the riskiest splits (HGE, Phase 3, Templates) against current state. If pre-refactor screenshots don't exist, the dev-server rendering is the source of truth.

---

## How to keep the codebase clean going forward

- **New pages**: follow the `pages/Home/` pattern — folder with `index.tsx` composition + section files + colocated `data.ts`.
- **New shared content**: add to `src/content/{section}/`. Reserve for nav-tier pages.
- **New CSS**: continue the page-prefix pattern (`.foo-*` selectors in `src/styles/foo.css` imported as line 1 of `pages/Foo/index.tsx`).
- **Imports**: prefer `@/` for cross-tree, relative for same-folder/same-page.
- **Formatting**: run `npx prettier --write <file>` before committing.
- **Types**: keep colocated with data unless there's a genuine cross-feature need.
