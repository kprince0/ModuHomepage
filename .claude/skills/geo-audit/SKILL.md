---
name: geo-audit
description: moduramen.com의 GEO/SEO 자산 검증을 수행한다. JSON-LD 4종(Restaurant/Person/WebSite/FAQPage) 구조 정합성, Schema.org 유효성, Rich Results 적격성, 라이브 배포 반영 여부, GitHub Actions 헬스를 점검한다. "GEO 점검", "스키마 확인", "별점 나오나", "Rich Results 검증", "사이트 점검", "확인해줘" 같은 요청에 즉시 사용.
---

# GEO Audit Skill

`geo-auditor` 에이전트가 사용하는 GEO 자산 검증 워크플로우.

## 검증 4-Tier

### Tier 1: 라이브 배포 검증 (필수)
```bash
TS=$(date +%s)
curl -sI "https://moduramen.com/?cb=$TS" | grep -E "HTTP|Last-Modified|X-Cache"
curl -sI "https://moduramen.com/sitemap.xml?cb=$TS" | grep -E "HTTP|Last-Modified|Content-Length"
curl -sI "https://moduramen.com/llms.txt?cb=$TS" | grep -E "HTTP|Last-Modified"
curl -sI "https://moduramen.com/robots.txt?cb=$TS" | grep -E "HTTP"

# JSON-LD 존재 확인
curl -s "https://moduramen.com/?cb=$TS" | grep -o 'application/ld+json' | wc -l
# 예상: 4 (Restaurant, Person, WebSite, FAQPage)
```

기준:
- 4개 URL 모두 HTTP 200
- Last-Modified가 최근 push 이후
- JSON-LD 4종 존재
- llms.txt Content-Length ≥ 5000

### Tier 2: 구조 정합성 (코드 검사)
```bash
cd "E:\Modu Web\modu-ramen"
# layout.tsx에 4개 JSON-LD 변수 존재 확인
grep -c "restaurantJsonLd\|chefKimJsonLd\|websiteJsonLd\|faqJsonLd" src/app/layout.tsx
# 예상: 4 이상 (변수 정의 + 사용 각각)

# 모든 sub-page에 SchemaScripts import 확인
grep -l "SchemaScripts" src/app/*/page.tsx | wc -l
# 예상: 15 (15개 하위 페이지)

# @id 그래프 연결 검증
grep -E '"@id":\s*"https://moduramen.com/#' src/app/layout.tsx | sort -u
# 예상: #restaurant, #chef-kim, #website, #faq 모두 존재

grep -E 'worksFor|employee|founder' src/app/layout.tsx
# 예상: Person.worksFor → #restaurant, Restaurant.employee/founder → #chef-kim
```

### Tier 3: Google 적격성 (외부 API)
- Rich Results Test URL 생성하여 사용자에게 제공:
  ```
  https://search.google.com/test/rich-results?url=https%3A%2F%2Fmoduramen.com%2F
  https://search.google.com/test/rich-results?url=https%3A%2F%2Fmoduramen.com%2Fwhat-is-tonkotsu-ramen
  https://search.google.com/test/rich-results?url=https%3A%2F%2Fmoduramen.com%2Fchef-kim
  ```
- 사용자에게 결과 (valid items / errors / warnings) 입력 요청

### Tier 4: 시스템 헬스
```bash
gh workflow view deploy.yml --json state --jq '.state'
# 예상: "active"

gh run list --workflow=deploy.yml --limit 3
# 최근 빌드 success 여부 확인

# 사이트맵 URL 개수 vs 페이지 수
curl -s https://moduramen.com/sitemap.xml | grep -c "<loc>"
# 예상: 16

ls src/app/*/page.tsx | wc -l
# 예상: 15 (홈 제외)
```

## 출력 형식

`_workspace/geo-audit-{YYYYMMDD-HHmm}.md` 파일:

```markdown
# GEO Audit Report — {timestamp}

## 요약
- 통과: X/Y tier
- 위험: {요약}

## Tier 1 — 라이브 배포
| URL | HTTP | Last-Modified | 비고 |
|---|---|---|---|
| / | 200 | ... | JSON-LD 4개 ✅ |
| /sitemap.xml | 200 | ... | 16 URLs ✅ |
| /llms.txt | 200 | ... | 5783 bytes ✅ |
| /robots.txt | 200 | ... | 18 AI bots ✅ |

## Tier 2 — 구조 정합성
- [ ] JSON-LD 4종 변수 정의: X/4
- [ ] SchemaScripts 적용 페이지: X/15
- [ ] @id 양방향 연결: X/4

## Tier 3 — Google 적격성
- 사용자 액션 필요: 위 3개 Rich Results URL 확인 후 결과 보고

## Tier 4 — 시스템 헬스
- 워크플로우 state: {active/disabled_inactivity}
- 최근 빌드: {success/failed}
- 사이트맵 일관성: {OK/Mismatch}

## 발견된 이슈
| 심각도 | 항목 | 권장 액션 | 담당 에이전트 |
|---|---|---|---|
| ... | ... | ... | ... |
```

## 자주 발견되는 이슈 패턴

| 증상 | 원인 | 권장 액션 |
|---|---|---|
| sitemap에 kprince0.github.io URL | 옛 빌드 잔존 | codex-spec-writer로 sitemap 갱신 |
| workflow state=disabled_inactivity | 60일 비활동 | deploy-operator가 즉시 enable |
| Rich Results "0 valid items" | FAQ deprecated 정책 | 정상 (LLM은 여전히 활용) |
| JSON-LD 개수 < 4 | 빌드 실패 또는 SSR 문제 | codex-spec-writer로 layout.tsx 점검 |
| Last-Modified가 24시간 이상 전 | 캐시 또는 미배포 | deploy-operator로 빌드 트리거 |

## 인용 (지식 참조)

상세 검증 기준은 `.claude/agents/geo-auditor.md`의 "검증 체크리스트" 섹션 참조.
