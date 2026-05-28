# CLAUDE.md — Modu Ramen

이 파일은 새 Claude Code 세션이 시작될 때 자동 로딩됩니다.

---

## 하네스: Modu Ramen GEO/SEO 운영

**목표:** moduramen.com의 GEO/SEO 자산을 운영·검증·확장한다. AI 엔진(ChatGPT/Perplexity/Claude/Gemini) 인용 최대화 + Google Local Pack 상위 노출.

**트리거:** Modu Ramen / GEO / SEO / 스키마 / 콘텐츠 / 배포 / AI 인용 / 사이트맵 관련 작업 요청 시 `moduramen-harness` 스킬을 사용하라. 단순 안부 인사 또는 프로젝트 무관 질문은 직접 응답.

**핵심 운영 규칙:**
- 🚫 **코드 직접 작성 금지** — 모든 코드 변경은 `codex-spec-writer` 에이전트가 Codex용 프롬프트를 만들고, 사용자가 Codex에 복붙 실행
- ✅ 리서치/분석/검증/오케스트레이션은 Claude 서브에이전트로 처리
- ✅ 모든 Agent 호출에 `model: "opus"` 명시

**팀 구성:**
- `harness-lead` (오케스트레이터)
- `geo-auditor` (GEO 검증)
- `content-strategist` (콘텐츠 기획)
- `codex-spec-writer` (코드 변경 진입점)
- `deploy-operator` (배포 인프라)
- `ai-citation-monitor` (AI 인용 측정)

**변경 이력:**
| 날짜 | 변경 내용 | 대상 | 사유 |
|------|----------|------|------|
| 2026-05-27 | 초기 하네스 구성 | 전체 (5 agents + 6 skills) | 사용자 워크플로우 선호 반영 — Codex 위임 + Claude 분석 |

---

## 프로젝트 컨텍스트 (Quick Reference)

- **Stack:** Next.js 16 · React 19 · TypeScript · TailwindCSS 4 · static export
- **Deploy:** GitHub Pages 자동 (main push → Actions)
- **Repo:** github.com/kprince0/ModuHomepage
- **Domain:** moduramen.com (CNAME, HTTPS 강제, 인증서 만료 2026-08-04)
- **Working dir:** `E:\Modu Web\modu-ramen`

## GEO 자산 (2026-05-26 배포 완료)

- 4개 JSON-LD 스키마: Restaurant + Person(Chef Kim) + WebSite + FAQPage (`src/app/layout.tsx`)
- 15개 sub-page: BlogPosting/AboutPage/CollectionPage + BreadcrumbList (헬퍼: `src/lib/schema.ts`)
- AI 채널: `public/llms.txt` + `public/llms-full.txt`
- 18개 AI 크롤러 명시 Allow: `public/robots.txt`
- 사이트맵: 16 URLs + 이미지 사이트맵 (`public/sitemap.xml`)
- Search Console: URL 접두어 속성 인증 완료, 사이트맵 제출 완료

## 알려진 주의사항

- **GitHub Actions 60일 비활성화 정책**: schedule cron 제거로 회피 완료 (2026-05-27)
- **Fastly 캐시 (10분 max-age)**: 배포 후 즉시 반영 안 보일 수 있음 — `?v={timestamp}` 또는 강제 새로고침
- **FAQ Rich Result deprecated (2023)**: 스키마는 유지 (LLM 활용), Google SERP에는 안 보일 수 있음 — 정상
