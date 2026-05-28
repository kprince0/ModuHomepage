---
name: moduramen-harness
description: Modu Ramen 웹사이트(moduramen.com) 작업 시 모든 요청의 메인 진입점. GEO 점검, 콘텐츠 추가, 코드 변경, 배포 운영, AI 인용 모니터링 등 어떤 요청이든 이 스킬이 적합한 전문 에이전트로 라우팅한다. 사용자가 "GEO 확인", "FAQ 추가", "블로그 글", "배포 상태", "AI에서 보이는지", "스키마", "사이트맵", "Codex로 작업", "수정해줘", "추가해줘", "다시 점검", "재실행", "업데이트" 같은 표현을 쓰면 즉시 이 스킬을 사용하라. 단순 안부 인사나 프로젝트 무관 질문은 제외.
---

# Modu Ramen Harness Orchestrator

5명의 전문 에이전트를 조율하여 moduramen.com의 GEO/SEO/콘텐츠/배포/모니터링 작업을 처리한다. **사용자 선호: 코드는 Codex 위임, 분석은 Claude.**

## Phase 0: 컨텍스트 확인

워크플로우 시작 시:

1. `_workspace/` 폴더 존재 여부 확인:
   - 미존재 → 초기 실행
   - 존재 → 가장 최근 산출물 확인 (`ls -t .claude/skills/moduramen-harness/_workspace/ | head -5`)
2. 사용자 요청이 "이전 결과 기반 수정"인지 "새 작업"인지 판별
3. 부분 재실행 요청(예: "어제 audit 다시")이면 해당 에이전트만 재호출

## Phase 1: 요청 분류

다음 라우팅 매트릭스에 따라 단일/팀 모드 결정:

| 요청 패턴 | 모드 | 에이전트 |
|---|---|---|
| "GEO 점검", "스키마 확인", "Rich Results", "별점 나와?" | 단일 (서브) | `geo-auditor` |
| "FAQ 추가", "블로그 글", "키워드", "새 페이지" | 파이프라인 (팀) | content-strategist → codex-spec-writer → geo-auditor |
| "코드 수정", "리팩토링", "파일 변경" | 단일 (서브) | `codex-spec-writer` |
| "배포해줘", "빌드 상태", "사이트맵 갱신" | 단일 (서브) | `deploy-operator` |
| "ChatGPT에서 보여?", "AI 인용", "효과 측정" | 단일 (서브) | `ai-citation-monitor` |
| 복합 ("새 메뉴 추가 후 검증") | 팀 (TeamCreate) | 관련 에이전트 3~5명 |

## Phase 2: 실행

### 단일 모드 (서브 에이전트)
```
Agent(
  description: "{작업 한 줄}",
  subagent_type: "general-purpose",
  model: "opus",
  prompt: """
    역할: .claude/agents/{name}.md 의 정의를 따른다.
    
    {구체 작업 지시}
    
    산출물: _workspace/{name}-{slug}.md 에 저장.
    
    완료 후 다음을 반환:
    - 핵심 결과 요약 (3~5줄)
    - 산출물 파일 경로
    - 사용자 액션 필요 항목 (있다면)
  """
)
```

### 팀 모드 (TeamCreate)
복합 작업의 경우:
1. `TeamCreate` — 관련 에이전트들로 팀 생성
2. `TaskCreate` — 의존성 명시한 작업 큐
3. 팀원들이 `SendMessage`로 자체 조율
4. 진행 모니터링 후 결과 종합

## Phase 3: 종합 보고

사용자에게 다음 형식으로 보고:
```
## 처리 요약
- 호출한 에이전트: {...}
- 핵심 결과: {3~5줄}

## 사용자 액션 필요
- [ ] {액션 1}
- [ ] {액션 2}

## 산출물 위치
- _workspace/{...}
```

## Phase 4: 피드백 수집

작업 완료 후 사용자에게 묻기:
- "결과 만족하시나요? 개선할 부분 있으면 알려주세요."

피드백 없으면 종료. 피드백 있으면 → Phase 1로 돌아가 부분 재실행.

## 핵심 규칙

1. **코드 직접 작성 금지** — 모든 코드 변경은 `codex-spec-writer` 경유
2. **모든 Agent 호출에 `model: "opus"` 명시**
3. **산출물은 `_workspace/`에 저장** — 후속 작업 컨텍스트로 재활용
4. **사용자 톤**: 결과/효과 중심, 기술 디테일 최소화

## 테스트 시나리오

**정상 흐름:**
- 사용자: "FAQ 5개 더 추가하자"
- 라우팅: 파이프라인 팀 (content-strategist → codex-spec-writer → 사용자 Codex 실행 → deploy-operator → geo-auditor)
- 산출: `_workspace/content-spec-faq-batch1.md` + `_workspace/codex-prompt-faq-batch1.md` + 배포 검증 리포트

**에러 흐름:**
- 사용자: "deploy.yml 직접 고쳐줘"
- 액션: 거절 + codex-spec-writer로 자동 라우팅 + 사용자 선호 명시 ("코드는 Codex 위임 설정")

## 참고

- 에이전트 정의: `.claude/agents/*.md`
- 후속 작업 키워드: "다시", "재실행", "업데이트", "이전 결과 기반", "수정", "보완", "추가"
