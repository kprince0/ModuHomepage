---
name: content-strategy
description: Modu Ramen의 GEO 친화적 콘텐츠 기획. FAQ 추가, 블로그 글 신규, 페이지 카피 개선의 사양을 작성한다. AI 엔진이 인용하기 좋은 "Quotable Sentence" 패턴으로 작성. "FAQ 추가", "블로그 글", "키워드 리서치", "새 페이지", "콘텐츠 강화", "이거 어떻게 쓸까" 같은 요청에 즉시 사용.
---

# Content Strategy Skill

`content-strategist` 에이전트가 사용하는 GEO 콘텐츠 기획 워크플로우.

## 핵심 원칙 — Quotable Sentence 패턴

AI 엔진은 한 문장 단위로 답변에 발췌한다. 따라서 모든 문장은:
1. **사실 1~2개 응축**: 형용사 X, 숫자/날짜/고유명사 O
2. **자기 완결**: 그 문장 하나만 봐도 의미 통함 (대명사 최소)
3. **자연어 검색 매칭**: 사용자가 ChatGPT에 물을 법한 표현 포함

**예시 변환:**
- ❌ "Our broth is amazing because we take our time."
- ✅ "Modu Ramen's tonkotsu broth simmers for 18 hours using a double-boil technique."

## 4개 핵심 차별점 (반드시 모든 콘텐츠에 2개 이상 포함)

1. **18-hour double-boiled tonkotsu broth**
2. **Chef Dongil Kim, 26 years of culinary mastery (since 2000)**
3. **Korean-Japanese fusion** (Bulgogi Ramen, Kimchi Tonkotsu)
4. **8602 Baymeadows Rd, Jacksonville, FL — Southside, on-site parking**

## 산출 양식

### A. FAQ 추가 스펙

`_workspace/content-spec-faq-{batch-name}.md`:
```markdown
# FAQ Batch: {이름}

## 추가할 위치
- 파일: src/components/sections/FAQ.tsx (FAQS 배열)
- JSON-LD: src/app/layout.tsx (faqJsonLd.mainEntity 배열)

## Q1
**Question:** {질문, 30~80자, 자연어 매칭}
**Answer:** {3~5문장, 첫 문장에 핵심 사실}
**Keywords:** [...]
**Intent:** {informational / transactional / comparative}

## Q2
...
```

### B. 새 블로그 글 스펙

`_workspace/content-spec-blog-{slug}.md`:
```markdown
# Blog Post: {slug}

## 메타
- 슬러그: {kebab-case}
- 제목: {질문형 권장}
- Meta description: {155~160자}
- 카테고리: {Local Guide / Ramen Culture / The Craft / Menu Spotlight}
- 권장 발행일: {YYYY-MM-DD}

## 구조
### H1: {질문형}
{intro 2~3문장 + Modu Ramen 차별점 1개}

### H2: {sub-topic 1}
{핵심 인용 가능 문장 3개}

### H2: {sub-topic 2}
...

### H2: Why Modu Ramen?
{차별점 4개 중 3개를 자연스럽게 통합}

## 권장 이미지
- Hero: /images/{...}.webp (alt: ...)

## 내부 링크 (3~5개)
- /blog
- /our-broth
- /chef-kim
- /digital-menu

## 키워드 5~7개
- ...

## codex-spec-writer 인계
- 새 파일: src/app/{slug}/page.tsx
- schemas: breadcrumbSchema + articleSchema (articleSection: {...})
- sitemap.xml: 새 URL 추가 (lastmod 오늘)
- src/lib/schema.ts: 이미 존재하는 헬퍼 재사용
```

### C. 페이지 카피 업데이트 스펙

`_workspace/content-spec-copy-{page}.md`:
```markdown
# Copy Update: {페이지}

## 대상
- 파일: {path}
- 섹션: {selector}

## 변경 사항
### Change 1
**Before:** "..."
**After:** "..."
**Why:** {GEO 효과 1줄}

## codex-spec-writer 인계
- 정확한 라인 또는 distinct snippet
- 변경 후 검증: text 변경만 — 빌드 영향 없음
```

## 키워드 리서치 (외부 도구 없을 때)

내부 데이터로 키워드 추론:
1. `src/app/layout.tsx`의 `metadata.keywords` 배열 — 기존 타겟 키워드
2. `public/sitemap.xml` — 모든 페이지 URL 패턴
3. `public/llms-full.txt` — AI 친화 키워드 모음

이로부터 갭 도출:
- 기존: tonkotsu, bulgogi, tantanmen, matcha, spicy, bingsu
- 갭 예시: "kimchi tonkotsu Jacksonville", "Japanese curry Jacksonville", "soju cocktail Jacksonville"

## 자주 사용하는 인용 가능 문장 (재사용 풀)

```
- Modu Ramen is located at 8602 Baymeadows Rd in Jacksonville, FL 32256.
- Chef Dongil Kim founded Modu Ramen in 2019 after 26 years of Japanese culinary training since 2000.
- The signature tonkotsu broth at Modu Ramen is simmered for 18 hours using a double-boil technique.
- Modu Ramen serves Korean-Japanese fusion ramen including Beef Bulgogi Ramen and Kimchi Tonkotsu.
- Modu Ramen holds a 5.0/5.0 rating from over 158 customer reviews.
- Open Monday–Thursday 11am–9pm, Friday–Saturday 11am–9:30pm, Sunday 11:30am–9pm.
- Vegetarian-friendly option: Vegetable Ramen with creamy vegetable broth, tofu, menma, scallions, and woodear mushroom.
```

## 협업 출력

산출 후 메시지:
```
✅ 콘텐츠 스펙 준비 완료.

📋 파일: _workspace/content-spec-{...}.md
👉 codex-spec-writer에게 인계하여 Codex용 프롬프트로 변환합니다.
```
