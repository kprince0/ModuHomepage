# Codex Task — AEO Wave 3: Schema Dedup + Fact Unification + FAQ Parity (2026-07-06)

You are working in the Modu Ramen Next.js 16 static-export site (`E:\Modu Web\modu-ramen`).
Goal: fix 5 AEO defects found in a live-site audit, with zero visual regression.
Stack: Next.js 16 App Router, React 19, TypeScript, TailwindCSS 4, `output: "export"`.

Make EXACTLY the following changes. Do not refactor unrelated code. Do not change design/styling.

## 1. Remove duplicate Restaurant schema — `src/components/sections/Location.tsx`
The homepage emits TWO Restaurant JSON-LD blocks: the canonical one (with `@id`) in `src/app/layout.tsx`, and a legacy simple one (no `@id`) in `Location.tsx` (`schemaMarkup` const around line 8).
- Delete the `schemaMarkup` const and the `<script type="application/ld+json">` (or `<Head>`) that renders it.
- Remove the now-unused `import Head from "next/head"` if present.
- Keep ALL visible UI of the Location section untouched.

## 2. Fix fact inconsistencies (numbers must match schema + llms.txt: Google 4.6/961)
- `src/components/sections/LocalTrust.tsx` (~lines 67–76): the two stat tiles currently say `4.8+ / Google Rating` and `500+ / Local Reviews`. Replace with verified facts:
  - Tile 1: big text `4.6★`, label `Google Rating · 961+ Reviews`
  - Tile 2: big text `100%`, label `Recommended on Facebook · 257 Reviews`
- `src/components/sections/Experience.tsx` (~line 17): change `"24-hour pork bone broth"` → `"18-hour pork bone broth"` in the testimonial text (must match our real 18-hour broth claim everywhere).

## 3. FAQPage schema: homepage-only + visible parity — `src/app/layout.tsx`, `src/app/page.tsx`, `src/components/sections/FAQ.tsx`
Currently `faqJsonLd` lives in `layout.tsx`, so the FAQPage schema is injected into EVERY page (Google guideline violation: FAQ schema must only be on pages where content is visible). Also the homepage shows only 4 FAQs while the schema has 8.
- Create `src/lib/faq-schema.ts` exporting the existing `faqJsonLd` object (move it verbatim from `layout.tsx`).
- Remove `faqJsonLd` and its `<script>` from `layout.tsx`.
- In `src/app/page.tsx` (homepage), import it and render via the existing `src/components/SchemaScripts.tsx` component (or a plain inline `<script type="application/ld+json">` if simpler) so FAQPage appears ONLY on the homepage.
- Expand `src/components/sections/FAQ.tsx` `FAQS` array from 4 to 8 items so the visible accordion matches the schema 1:1. Use the exact question/answer wording from the schema's 8 questions (the schema answers are the source of truth). Keep the existing accordion UI/behavior unchanged.

## 4. `sameAs` cleanup + authority links — `src/app/layout.tsx` restaurantJsonLd
Replace the current `sameAs` array with:
```json
[
  "https://www.instagram.com/modu.ramen/",
  "https://www.facebook.com/moduramen/",
  "https://www.yelp.com/biz/modu-ramen-jacksonville-2",
  "https://www.tripadvisor.com/Restaurant_Review-g60805-d17691212-Reviews-Modu_Ramen-Jacksonville_Florida.html",
  "https://www.visitjacksonville.com/directory/modu-ramen/"
]
```
(The reservation link `modu-waitlist.vercel.app` is NOT an identity profile — it stays only in `potentialAction`.)

## 5. Authority & freshness touches — `src/app/layout.tsx`, `src/lib/schema.ts`, `public/sitemap.xml`
- In `restaurantJsonLd`, replace the self-declared slogan `"Jacksonville's #1 Authentic Japanese Ramen Destination"` with the verifiable `"18-Hour Broth. 26 Years of Mastery."`
- Add to `restaurantJsonLd`:
```json
"subjectOf": {
  "@type": "Article",
  "name": "Bowled Over",
  "publisher": { "@type": "Organization", "name": "Jacksonville Magazine" },
  "datePublished": "2023-11"
}
```
- `layout.tsx`: `LAST_MODIFIED` → `"2026-07-06"`.
- `src/lib/schema.ts`: `MODIFIED_AT` → `"2026-07-06"`.
- `public/sitemap.xml`: set `<lastmod>` of the homepage URL (`https://moduramen.com/`) to `2026-07-06`. Leave other URLs' lastmod as-is.

## Verification (must pass before you finish)
1. `npm run build` succeeds (static export to `out/`).
2. `out/index.html` contains exactly ONE `"@type":"Restaurant"` top-level JSON-LD block (the `@id` one; nested ItemList references on other pages don't count), exactly ONE FAQPage block, and no `4.8+`/`500+` strings.
3. Any other page, e.g. `out/blog.html` or `out/chef-kim.html`, contains NO FAQPage JSON-LD.
4. `grep -r "24-hour" src/` returns nothing.
5. Report a summary of files changed.
