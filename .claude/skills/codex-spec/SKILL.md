---
name: codex-spec
description: 코드 변경이 필요할 때 사용자가 Codex에 그대로 복붙할 수 있는 정확한 프롬프트를 생성한다. 파일 경로, before/after diff, 검증 기준, 커밋 메시지, 롤백 경로까지 포함된 자기-완결적 스펙. "코드 수정", "파일 변경", "리팩토링", "Codex로", "고쳐줘", "추가해줘"(코드 변경 수반) 같은 요청에 즉시 사용. 이 프로젝트의 모든 코드 변경의 유일한 진입점.
---

# Codex Spec Skill

`codex-spec-writer` 에이전트가 사용하는 Codex용 프롬프트 작성 워크플로우.

## 절대 원칙

1. **이 스킬은 코드를 직접 작성하지 않는다.** Codex가 실행할 스펙만 생성.
2. **Codex는 이 프로젝트를 모른다고 가정**: 파일 경로, 현재 코드, 검증 기준 모두 명시.
3. **하나의 스펙 = 하나의 논리적 변경 단위**: 여러 무관한 변경은 분리.

## 프로젝트 컨텍스트 (모든 스펙의 헤더에 포함)

```
- Project: Modu Ramen
- Stack: Next.js 16, React 19, TypeScript, TailwindCSS 4, static export
- Working dir: E:\Modu Web\modu-ramen
- Repo: github.com/kprince0/ModuHomepage (main 브랜치)
- Deploy: GitHub Pages 자동 (main push → GitHub Actions)
- Domain: moduramen.com (CNAME, GitHub Pages)
- Existing schema helpers: src/lib/schema.ts (breadcrumbSchema, articleSchema, webPageSchema, imageObjectSchema)
- Schema injection: src/components/SchemaScripts.tsx
- Global JSON-LD: src/app/layout.tsx (Restaurant + Person + WebSite + FAQPage)
```

## 표준 스펙 구조

```markdown
# Codex Task: {간결한 제목, ≤60자}

## Context
{위 프로젝트 컨텍스트 헤더 통째로 복사}

## Goal
{1~2문장으로 이 변경의 목적}

## Files to change
1. {path1}
2. {path2}
(N개 파일)

---

## Change 1: {파일 경로}

### Current
```{lang}
{현재 코드 - 정확한 인용, 들여쓰기 포함}
```

### Target
```{lang}
{변경 후 코드 - 정확한 형태, 들여쓰기 포함}
```

### Why
{이 변경의 이유 1~2문장}

---

## Change 2: ...

(반복)

---

## Validation

배포 전 로컬 검증:
- [ ] `npx tsc --noEmit` returns 0 errors
- [ ] `npm run build` succeeds (out/ 폴더 생성)

배포 후 라이브 검증 (push 후 3~5분 대기):
- [ ] `curl -sI "https://moduramen.com/{path}?cb=$(date +%s)"` returns HTTP 200
- [ ] {스키마 변경 시} Rich Results Test에서 0 errors
- [ ] {sitemap 변경 시} `curl -s https://moduramen.com/sitemap.xml | grep -c "<loc>"` returns expected count

## Commit

```bash
git add {staged-files-only}
git commit -m "{type}: {summary}"
git push origin main
```

Commit type 가이드:
- `feat:` 새 기능 (페이지, FAQ 추가 등)
- `fix:` 버그 수정
- `seo:` 또는 `geo:` GEO/SEO 자산 (스키마, 사이트맵, llms.txt)
- `ci:` 배포 관련 (deploy.yml 등)
- `chore:` 메타 (리팩토링, 정리)

## Rollback

문제 발생 시:
```bash
git revert HEAD
git push origin main
```

## Notes for Codex

- 다른 파일 수정 금지 (지정된 Files to change 외)
- 들여쓰기·줄바꿈 정확히 유지 (Prettier 적용)
- 코멘트 추가 금지 (사용자 선호: 자명한 코드)
- TypeScript 타입 명시적 작성 (any 금지)
- React Server Component 우선 (use client는 꼭 필요할 때만)
```

## 일반적인 변경 패턴 — 빠른 템플릿

### 패턴 A: 새 FAQ 항목 추가

```
Files:
1. src/components/sections/FAQ.tsx
2. src/app/layout.tsx
3. public/sitemap.xml (lastmod만 갱신)

Change 1 (FAQ.tsx):
- FAQS 배열 끝에 새 객체 추가

Change 2 (layout.tsx):
- faqJsonLd.mainEntity 배열 끝에 동일 Q/A를 Question 스키마 형식으로 추가

Change 3 (sitemap.xml):
- 홈 URL의 <lastmod>를 오늘 날짜로 갱신
```

### 패턴 B: 새 블로그 글 페이지

```
Files:
1. src/app/{slug}/page.tsx (신규)
2. src/app/blog/page.tsx (POSTS 배열에 항목 추가)
3. public/sitemap.xml (새 URL 추가)

Change 1 (페이지 생성):
- src/lib/schema.ts의 breadcrumbSchema + articleSchema 사용
- src/components/SchemaScripts 사용
- 메타데이터 (title, description) 포함

Change 2: blog/page.tsx의 POSTS 배열에 BlogPost 객체 추가

Change 3: sitemap.xml에 새 <url> 블록 추가
```

### 패턴 C: 메뉴 항목 추가 (digital-menu)

```
Files:
1. src/app/digital-menu/page.tsx (menuData 배열)
2. src/app/layout.tsx (restaurantJsonLd.hasMenu.hasMenuSection)
```

## 출력 형식 — 사용자에게 보내는 메시지

```markdown
✅ Codex 프롬프트 준비 완료.

📋 파일: `_workspace/codex-prompt-{YYYYMMDD-HHmm}-{slug}.md`

## 👉 다음 액션
1. 위 파일 내용을 통째로 복사
2. Codex 창에 붙여넣기
3. Codex가 작업 완료 후 알려주세요
4. → 자동으로 `deploy-operator`가 빌드 트리거 + `geo-auditor`가 라이브 검증

## 예상 소요 시간
- Codex 실행: ~2분
- 빌드/배포: ~3분
- 검증: ~2분
- **총: 약 7분**
```
