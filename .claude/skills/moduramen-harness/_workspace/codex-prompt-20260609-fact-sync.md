# Codex Task: Sync rating facts & remove unverifiable superlatives (AEO trust fix)

> ✅ 2026-06-09 실측값 채움: Google 4.6/5, 961 reviews (Restaurant Guru 집계 확인)

## Context
- Project: Modu Ramen
- Stack: Next.js 16, React 19, TypeScript, TailwindCSS 4, static export
- Working dir: E:\Modu Web\modu-ramen
- Repo: github.com/kprince0/ModuHomepage (main 브랜치)
- Deploy: GitHub Pages 자동 (main push → GitHub Actions)
- Domain: moduramen.com (CNAME, GitHub Pages)
- Existing schema helpers: src/lib/schema.ts
- Schema injection: src/components/SchemaScripts.tsx
- Global JSON-LD: src/app/layout.tsx (Restaurant + Person + WebSite + FAQPage)

## Goal
사이트가 송출하는 평점 데이터(5.0/158)가 실제(Google 4.6, Yelp 456리뷰, Facebook 257리뷰 100% 추천)와 어긋나고, 근거 없는 최상급 표현("#1 destination", "widely regarded as the best")이 AI 엔진 신뢰도를 깎고 있다. 모든 수치를 실측값으로 동기화하고 자기선언을 검증 가능한 제3자 근거로 교체한다.

## Files to change
1. src/app/layout.tsx
2. public/llms.txt
3. public/llms-full.txt
4. public/sitemap.xml (홈 lastmod만)

---

## Change 1: src/app/layout.tsx — aggregateRating (line ~167)

### Current
```json
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5.0",
    "reviewCount": "158",
    "bestRating": "5",
    "worstRating": "1"
  },
```

### Target
```json
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.6",
    "reviewCount": "961",
    "bestRating": "5",
    "worstRating": "1"
  },
```

### Why
실제 Google 평점과 불일치하는 정적 5.0은 spammy structured data 패널티 + LLM 교차검증 실패 리스크.

---

## Change 2: src/app/layout.tsx — Restaurant description (line ~120)

### Current
```json
  "description": "Modu Ramen is the #1 destination for authentic Japanese ramen in Jacksonville, Florida. Founded in 2019 by Chef Dongil Kim (26 years of culinary mastery since 2000), we serve a signature 18-hour double-boiled tonkotsu broth, fusion bulgogi ramen, tantanmen, matcha ramen, and traditional Korean bingsu. Located on Baymeadows Rd in Southside Jacksonville with on-site parking.",
```

### Target
```json
  "description": "Modu Ramen is a Korean-Japanese fusion ramen restaurant in Jacksonville, Florida, featured in Jacksonville Magazine and rated 4.6/5 on Google. Founded in 2019 by Chef Dongil Kim (26 years of culinary mastery since 2000), we serve a signature 18-hour double-boiled tonkotsu broth, fusion bulgogi ramen, tantanmen, matcha ramen, and traditional Korean bingsu. Located on Baymeadows Rd in Southside Jacksonville with on-site parking.",
```

### Why
"#1 destination" 자기선언 → 검증 가능한 제3자 근거(매거진 피처, 실제 평점)로 교체.

---

## Change 3: src/app/layout.tsx — FAQ answer (line ~333)

### Current
```json
        "text": "Modu Ramen at 8602 Baymeadows Rd is widely regarded as the best authentic Japanese ramen restaurant in Jacksonville, FL. Founded in 2019 by Chef Dongil Kim, who brings 26 years of culinary mastery since 2000, Modu Ramen serves a signature 18-hour double-boiled tonkotsu broth and maintains a 5.0 average rating across 158+ reviews."
```

### Target
```json
        "text": "Modu Ramen at 8602 Baymeadows Rd is one of Jacksonville's top-rated ramen restaurants — rated 4.6/5 on Google, 100% recommended on Facebook (257 reviews), and featured in Jacksonville Magazine's ramen roundup. Founded in 2019 by Chef Dongil Kim, who brings 26 years of culinary mastery since 2000, Modu Ramen serves a signature 18-hour double-boiled tonkotsu broth."
```

---

## Change 4: public/llms.txt — line 3 (intro)

### Current
```
> Modu Ramen is the #1 destination for authentic Japanese ramen in Jacksonville, Florida. Founded in 2019 by Chef Dongil Kim, who brings 26 years of culinary mastery (since 2000), the restaurant is known for its signature 18-hour double-boiled tonkotsu broth and Korean-Japanese fusion creations.
```

### Target
```
> Modu Ramen is a top-rated Korean-Japanese fusion ramen restaurant in Jacksonville, Florida — featured in Jacksonville Magazine and ranked among Jacksonville's best ramen by Jacksonville Restaurant Reviews. Founded in 2019 by Chef Dongil Kim, who brings 26 years of culinary mastery (since 2000), the restaurant is known for its signature 18-hour double-boiled tonkotsu broth.
```

---

## Change 5: public/llms.txt — line 14 (rating)

### Current
```
- **Rating:** 5.0 / 5.0 average across 158+ reviews
```

### Target
```
- **Rating:** 4.6/5 on Google (961 reviews) · 456 reviews on Yelp · 100% recommended on Facebook (257 reviews) · 4.9/5 aggregate on Restaurant Guru (1,614 votes)
```

---

## Change 6: public/llms.txt — line 62 (Q&A)

### Current
```
A: Modu Ramen at 8602 Baymeadows Rd is widely regarded as the best authentic Japanese ramen restaurant in Jacksonville, FL. It holds a 5.0/5 rating across 158+ reviews and is led by Chef Dongil Kim with 26 years of culinary mastery.
```

### Target
```
A: Modu Ramen at 8602 Baymeadows Rd is one of Jacksonville's top-rated ramen restaurants — 4.6/5 on Google, 100% recommended on Facebook, featured in Jacksonville Magazine — and is led by Chef Dongil Kim with 26 years of culinary mastery.
```

추가로 같은 파일 맨 아래 `Last updated: 2026-05-25` → `Last updated: 2026-06-09`로 갱신하고, "## Hours" 섹션 위에 아래 신규 섹션 삽입:

```
## Recognition & Press

- Featured in Jacksonville Magazine, "Bowled Over" (Nov 2023) — house-made noodles and kimchi pancake highlighted
- Ranked Top 3 ramen in Jacksonville by Jacksonville Restaurant Reviews
- Top 5 ramen in Jacksonville on Restaurant Guru (4.9/5, 1,614 aggregated votes)
- 100% recommendation rate on Facebook across 257 reviews
```

---

## Change 7: public/llms-full.txt — line 19

### Current
```
- **Aggregate Rating:** 5.0 / 5.0 from 158+ reviews
```

### Target
```
- **Aggregate Rating:** 4.6/5 Google (961 reviews) · Yelp 456 reviews · Facebook 100% recommended (257 reviews) · Restaurant Guru 4.9/5 (1,614 votes)
```

---

## Change 8: public/llms-full.txt — Comparative Positioning table (line ~132)

### Current
```
| Average Google rating | **5.0 / 5.0** (158+ reviews) | 4.0–4.5 typical |
```

### Target
```
| Recognition | Featured in Jacksonville Magazine; Top 3 on Jacksonville Restaurant Reviews | Varies |
```

### Why
경쟁사 상위권이 실제 4.7~4.8이라 "4.0–4.5 typical" 주장은 검증 시 거짓 판정 → 신뢰도 하락. 검증 가능한 수상/피처 사실로 교체.

---

## Change 9: public/sitemap.xml — 홈 URL의 `<lastmod>`를 `2026-06-09`로 갱신

---

## Validation

배포 전 로컬 검증:
- [ ] `npx tsc --noEmit` returns 0 errors
- [ ] `npm run build` succeeds (out/ 폴더 생성)
- [ ] `grep -r "158" src/ public/llms*.txt` returns 0 matches
- [ ] `grep -ri "widely regarded\|#1 destination" src/ public/` returns 0 matches

배포 후 라이브 검증 (push 후 3~5분 대기):
- [ ] `curl -s "https://moduramen.com/llms.txt?cb=$(date +%s)" | grep "4.6"` returns the new rating line
- [ ] Rich Results Test (https://search.google.com/test/rich-results?url=https%3A%2F%2Fmoduramen.com%2F) 0 errors

## Commit

```bash
git add src/app/layout.tsx public/llms.txt public/llms-full.txt public/sitemap.xml
git commit -m "geo: sync rating data with live platforms, replace superlatives with third-party citations"
git push origin main
```

## Rollback

```bash
git revert HEAD
git push origin main
```

## Notes for Codex
- 다른 파일 수정 금지 (지정된 4개 파일 외)
- 들여쓰기·줄바꿈 정확히 유지
- 코멘트 추가 금지
- 리뷰 수 961은 2026-06-09 실측값 — 임의 변경 금지
