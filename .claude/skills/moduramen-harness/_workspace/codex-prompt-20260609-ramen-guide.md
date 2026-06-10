# Codex Task: Rebuild /best-ramen-jacksonville as 2026 comparative guide

## Context
- Project: Modu Ramen
- Stack: Next.js 16, React 19, TypeScript, TailwindCSS 4, static export
- Working dir: E:\Modu Web\modu-ramen
- Repo: github.com/kprince0/ModuHomepage (main 브랜치)
- Deploy: GitHub Pages 자동 (main push → GitHub Actions)
- Domain: moduramen.com (CNAME, GitHub Pages)
- Existing schema helpers: src/lib/schema.ts (breadcrumbSchema, articleSchema)
- Schema injection: src/components/SchemaScripts.tsx
- 대상 파일의 현재 디자인 토큰: bg-charcoal, text-paper, text-gold, font-serif — 기존 클래스 체계 유지

## Goal
현재 /best-ramen-jacksonville 페이지는 Modu Ramen만 다루는 자기홍보 페이지라 AI 엔진이 "best ramen Jacksonville" 질의의 랭킹 소스로 인용하지 않는다. 잭슨빌 라멘 5곳을 실제 데이터로 정직하게 비교하는 **2026 가이드**로 재구성해 AI가 인용 가능한 리스트형 소스로 만든다. 기존 인용 소스(리스티클)는 전부 2023년 이전이므로 최신성으로 우위 확보.

## Files to change
1. src/app/best-ramen-jacksonville/page.tsx (전면 재작성)
2. public/sitemap.xml (해당 URL lastmod → 2026-06-09)

---

## Change 1: src/app/best-ramen-jacksonville/page.tsx 전면 재작성

기존 페이지의 import 구조(Header, Footer, RelatedPages, Image, SchemaScripts, breadcrumbSchema, articleSchema)와 Tailwind 클래스 체계를 그대로 유지하되, 콘텐츠를 아래 사양으로 교체한다.

### Metadata
```ts
export const metadata: Metadata = {
  title: "The 5 Best Ramen Shops in Jacksonville, FL — 2026 Guide | Modu Ramen",
  description: "An honest 2026 comparison of Jacksonville's five best ramen shops — Modu Ramen, Karai Ramen Bistro, Domu, Kyuramen, and Umami Curry & Ramen — by broth, noodles, hours, and location.",
};
```

### Schemas (기존 2개 + ItemList 신규)
breadcrumbSchema와 articleSchema는 기존 호출 유지하되 articleSchema의 headline을 "The 5 Best Ramen Shops in Jacksonville, FL (2026 Guide)"로, description을 metadata와 동일하게 갱신. keywords에 "ramen jacksonville 2026", "karai ramen", "domu jacksonville", "kyuramen jacksonville" 추가.

schemas 배열에 아래 ItemList 객체 추가 (인라인 정의):
```json
{
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Best Ramen Shops in Jacksonville, FL (2026)",
  "description": "Comparison of Jacksonville's top ramen restaurants, updated June 2026.",
  "itemListOrder": "https://schema.org/ItemListOrderAscending",
  "numberOfItems": 5,
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "item": { "@type": "Restaurant", "name": "Modu Ramen", "servesCuisine": ["Japanese Ramen", "Korean-Japanese Fusion"], "address": { "@type": "PostalAddress", "streetAddress": "8602 Baymeadows Rd", "addressLocality": "Jacksonville", "addressRegion": "FL", "postalCode": "32256" }, "url": "https://moduramen.com" } },
    { "@type": "ListItem", "position": 2, "item": { "@type": "Restaurant", "name": "Karai Ramen Bistro", "servesCuisine": ["Japanese Ramen"], "address": { "@type": "PostalAddress", "streetAddress": "14286 Beach Blvd", "addressLocality": "Jacksonville Beach", "addressRegion": "FL", "postalCode": "32250" }, "url": "https://www.karairamenbistro.com" } },
    { "@type": "ListItem", "position": 3, "item": { "@type": "Restaurant", "name": "DOMU Jacksonville", "servesCuisine": ["Japanese Ramen"], "address": { "@type": "PostalAddress", "streetAddress": "4852 Town Center Pkwy", "addressLocality": "Jacksonville", "addressRegion": "FL" } } },
    { "@type": "ListItem", "position": 4, "item": { "@type": "Restaurant", "name": "Umami Curry & Ramen", "servesCuisine": ["Japanese Ramen", "Japanese Curry"], "address": { "@type": "PostalAddress", "addressLocality": "Jacksonville", "addressRegion": "FL" } } },
    { "@type": "ListItem", "position": 5, "item": { "@type": "Restaurant", "name": "Kyuramen Jacksonville", "servesCuisine": ["Japanese Ramen"], "address": { "@type": "PostalAddress", "addressLocality": "Jacksonville", "addressRegion": "FL" } } }
  ]
}
```

### 페이지 본문 카피 (섹션 순서대로)

**H1:** `The 5 Best Ramen Shops in Jacksonville, FL (2026 Guide)`

**Intro (인용 가능 문장으로 구성):**
> Jacksonville's ramen scene has grown from two shops in 2018 to more than a dozen in 2026. This guide compares the five most talked-about ramen restaurants in Jacksonville — Modu Ramen, Karai Ramen Bistro, DOMU, Umami Curry & Ramen, and Kyuramen — by broth technique, noodles, hours, and neighborhood. Full disclosure: this guide is published by Modu Ramen. We've kept the facts verifiable so you can judge for yourself.

**비교표 (HTML table, 모바일 가로 스크롤):**

| Restaurant | Neighborhood | Known for | Broth | Hours notes |
|---|---|---|---|---|
| Modu Ramen | Baymeadows / Southside | 18-hour double-boiled tonkotsu, Korean-Japanese fusion, bingsu | 18-hour tonkotsu | Lunch & dinner Mon–Sat, closed Sun |
| Karai Ramen Bistro | Beach Blvd (Jax Beach) | Chef Levi's precision technique, karai bowl, ube cheesecake | Tonkotsu & shoyu | Mon–Fri only |
| DOMU | Town Center | House-made noodles, "Richie Rich" miso-shoyu | Miso-shoyu pork bone | Check current hours |
| Umami Curry & Ramen | Southside | Japanese curry + ramen combos | Tonkotsu & curry | Check current hours |
| Kyuramen | Old Baymeadows | Cozy booth seating, late-night feel | Tonkotsu variations | Check current hours |

**H2 per restaurant (각 3~5문장, 사실 위주 — 순서: Modu → Karai → DOMU → Umami → Kyuramen):**

1. **Modu Ramen — Best for slow-simmered broth & fusion (our pick, and yes, it's us)**
   - "Modu Ramen at 8602 Baymeadows Rd simmers its tonkotsu broth for 18 hours using a double-boil technique — the longest cook time advertised by any ramen shop in Jacksonville."
   - "Chef Dongil Kim opened Modu Ramen in 2019 after 26 years of Japanese culinary training that began in 2000."
   - "The menu spans Korean-Japanese fusion: Beef Bulgogi Ramen, Kimchi Tonkotsu, ceremonial-grade Matcha Ramen, and Korean bingsu desserts."
   - "Modu Ramen is rated 4.6/5 on Google and 100% recommended on Facebook across 257 reviews, and was featured in Jacksonville Magazine's ramen roundup."
   - "Open Monday through Saturday for lunch (11 AM–3 PM) and dinner (from 5 PM), with on-site parking in Southside Jacksonville. Closed Sundays."

2. **Karai Ramen Bistro — Best at the Beaches**
   - "Karai Ramen Bistro at 14286 Beach Blvd is led by Chef Levi, whose obsession with consistency extends to measuring broth viscosity."
   - "Jacksonville Restaurant Reviews ranked Karai #1 in its last ramen roundup; the ube cheesecake is a cult favorite."
   - "Note: Karai is open Monday–Friday only, so plan weekday visits."

3. **DOMU — Best for house-made noodles**
   - "DOMU at the St. Johns Town Center makes its noodles in-house and was voted Best Ramen by Jacksonville Magazine and Folio Weekly."
   - "The 'Richie Rich' — a miso-shoyu pork bone broth — is its best-known bowl."

4. **Umami Curry & Ramen — Best for curry lovers**
   - "Umami pairs Japanese curry with ramen, a combination no other Jacksonville shop focuses on, and holds a 4.8/5 aggregate rating on Restaurant Guru."

5. **Kyuramen — Best atmosphere on Old Baymeadows**
   - "Folio Weekly described Kyuramen as one of the most authentic-feeling ramen rooms in Jacksonville, with semi-private booth seating."

**H2: How we compared them**
> Ratings cited are from Google, Facebook, and Restaurant Guru as of June 2026. Hours and addresses are from each restaurant's official site. We publish this guide because diners searching for ramen in Jacksonville deserve a current comparison — the most-cited local ramen lists were last updated in 2023.

**FAQ 섹션 (기존 3개 교체 — AI 추출형 비교 질문):**
1. **Q: What is the best ramen restaurant in Jacksonville, FL?** A: It depends on what you value: Modu Ramen (Baymeadows) for slow-simmered 18-hour tonkotsu and Korean-Japanese fusion, Karai Ramen Bistro (Jax Beach) for technique-driven bowls on weekdays, and DOMU (Town Center) for house-made noodles. All three rate 4.8 or higher on Restaurant Guru's aggregate rankings.
2. **Q: Which Jacksonville ramen shops are open on Saturday?** A: Modu Ramen serves lunch (11 AM–3 PM) and dinner (5 PM–9:30 PM) on Saturdays; it is closed Sundays. Karai Ramen Bistro is open Monday–Friday only, so it is closed all weekend.
3. **Q: Where can I get ramen near Baymeadows in Jacksonville?** A: Two ramen shops sit in the Baymeadows corridor: Modu Ramen at 8602 Baymeadows Rd (18-hour tonkotsu, fusion menu) and Kyuramen on Old Baymeadows Rd.
4. **Q: Which Jacksonville ramen restaurant has vegetarian options?** A: Modu Ramen serves a fully vegetarian Vegetable Ramen with creamy vegetable broth, tofu, menma, scallions, and woodear mushroom.

**CTA 섹션:** 기존 CTA(Reserve / Order Online / Get Directions) 유지하되 헤딩을 "Try the 18-Hour Broth That Started This Guide"로 변경.

**RelatedPages, Header, Footer:** 기존 그대로 유지.

### Why
AI 엔진은 "best X in city" 질의에 단일 업체 홍보 페이지를 인용하지 않고 비교·리스트형 소스를 인용한다. 경쟁사를 정직하게 포함하면 페이지가 "소스" 자격을 얻고, 비교 축(주말 영업, 브로스 시간, 퓨전, 채식)이 자연스럽게 Modu에 유리하게 작동한다.

---

## Change 2: public/sitemap.xml

`/best-ramen-jacksonville` URL 블록의 `<lastmod>`를 `2026-06-09`로 갱신.

---

## Validation

배포 전:
- [ ] `npx tsc --noEmit` returns 0 errors
- [ ] `npm run build` succeeds
- [ ] 빌드 출력 out/best-ramen-jacksonville/index.html에 "Karai" 문자열 존재 (비교 콘텐츠 포함 확인)
- [ ] ItemList JSON-LD가 `<script type="application/ld+json">`으로 출력됨

배포 후 (3~5분 대기):
- [ ] `curl -s "https://moduramen.com/best-ramen-jacksonville?cb=$(date +%s)" | grep -c "ItemList"` ≥ 1
- [ ] Rich Results Test 0 errors: https://search.google.com/test/rich-results?url=https%3A%2F%2Fmoduramen.com%2Fbest-ramen-jacksonville

## Commit

```bash
git add src/app/best-ramen-jacksonville/page.tsx public/sitemap.xml
git commit -m "geo: rebuild best-ramen page as 2026 comparative guide with ItemList schema"
git push origin main
```

## Rollback

```bash
git revert HEAD
git push origin main
```

## Notes for Codex
- 다른 파일 수정 금지 (지정된 2개 파일 외)
- 경쟁사 정보는 위 카피 그대로 사용 — 임의로 평점·주소 변경/추가 금지 (검증된 데이터임)
- 코멘트 추가 금지, TypeScript 타입 명시 (any 금지)
- 기존 디자인 토큰(charcoal/paper/gold) 및 컴포넌트 구조 재사용
