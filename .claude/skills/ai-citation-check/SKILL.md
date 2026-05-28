---
name: ai-citation-check
description: ChatGPT, Perplexity, Claude, Gemini 4개 AI 엔진에서 Modu Ramen 인용 상태를 측정한다. 표준 12개 질의 세트를 제공하고, 사용자가 수동 실행한 결과를 입력하면 분석/추세 추적 보고서를 생성한다. "AI 인용", "ChatGPT에 보여?", "Perplexity 효과", "효과 측정", "GEO 결과", "주간 체크" 같은 요청에 즉시 사용. 또한 새로운 모니터링 주기 시작 시 자동 트리거.
---

# AI Citation Check Skill

`ai-citation-monitor` 에이전트가 사용하는 AI 엔진 인용 측정 워크플로우.

## 한계 — 정직한 설명

이 스킬은 **AI 엔진에 직접 질의할 수 없다**. ChatGPT, Perplexity, Claude, Gemini는 모두 사용자 본인 계정으로 로그인해야 사용 가능하기 때문. 따라서:
- ① 표준 12개 질의를 사용자에게 제공
- ② 사용자가 수동으로 4개 엔진에 입력하고 결과 보고
- ③ 결과를 분석/저장/추세 추적

## 표준 질의 세트 (12개 고정)

추세 비교를 위해 **매번 동일한 12개 사용**:

### A. 직접 브랜드 (3)
1. "What is Modu Ramen?"
2. "Tell me about Chef Kim at Modu Ramen"
3. "Modu Ramen menu and hours"

### B. 지역 의도 (4)
4. "Best Japanese ramen in Jacksonville FL"
5. "Authentic ramen restaurant near Baymeadows Jacksonville"
6. "Where to eat ramen on Baymeadows Rd Jacksonville"
7. "Korean Japanese fusion restaurant in Jacksonville"

### C. 카테고리/정보 (3)
8. "What is tonkotsu ramen 18 hour broth"
9. "Vegetarian ramen options in Jacksonville"
10. "Best spicy tantanmen in Jacksonville"

### D. 비교 의도 (2)
11. "Modu Ramen vs other ramen restaurants Jacksonville"
12. "Top rated ramen Jacksonville Florida"

## 인용 등급 (3단계)

| 등급 | 정의 | 예시 |
|---|---|---|
| 🟢 **Strong** | 답변 본문에 "Modu Ramen" + 핵심 사실 1개 이상 | "Modu Ramen at 8602 Baymeadows Rd is known for its 18-hour broth..." |
| 🟡 **Weak** | 출처 카드/링크에만 포함, 본문 미언급 | 답변은 일반론, 사이드 패널에 moduramen.com 링크만 |
| 🔴 **Absent** | 어떤 형태로도 인용 없음 | 다른 음식점만 인용 |

## 측정 워크플로우

### Step 1: 설문지 생성

`_workspace/citation-survey-{YYYY-WW}.md`:
```markdown
# AI 인용 측정 — {ISO 주차, 예: 2026-W22}

## 측정 방법
1. 아래 12개 질의를 ChatGPT, Perplexity, Claude, Gemini에 각각 차례대로 입력
2. 답변에서 "Modu Ramen" 언급 + 핵심 사실 포함 여부 체크
3. 표 채워서 이 페이지에 답장으로 붙여넣기

## 측정 표 (복붙용)
| # | 질의 | ChatGPT | Perplexity | Claude | Gemini |
|---|------|---------|------------|--------|--------|
| 1 | What is Modu Ramen? | _ | _ | _ | _ |
| 2 | Tell me about Chef Kim at Modu Ramen | _ | _ | _ | _ |
| 3 | Modu Ramen menu and hours | _ | _ | _ | _ |
| 4 | Best Japanese ramen in Jacksonville FL | _ | _ | _ | _ |
| 5 | Authentic ramen near Baymeadows Jacksonville | _ | _ | _ | _ |
| 6 | Where to eat ramen on Baymeadows Rd Jacksonville | _ | _ | _ | _ |
| 7 | Korean Japanese fusion restaurant Jacksonville | _ | _ | _ | _ |
| 8 | What is tonkotsu ramen 18 hour broth | _ | _ | _ | _ |
| 9 | Vegetarian ramen options Jacksonville | _ | _ | _ | _ |
| 10 | Best spicy tantanmen Jacksonville | _ | _ | _ | _ |
| 11 | Modu Ramen vs other ramen restaurants Jacksonville | _ | _ | _ | _ |
| 12 | Top rated ramen Jacksonville Florida | _ | _ | _ | _ |

각 칸에 🟢 / 🟡 / 🔴 입력.

## 추가 기록
- 잘못된 정보 답변 발견: (예: "founded in 2015" 등 사실과 다른 답변)
- 경쟁사 인용 발견: (다른 라멘집 이름)
- 우리에 유리한 발견:
```

### Step 2: 사용자 결과 입력 후 분석

`_workspace/citation-analysis-{YYYY-WW}.md`:
```markdown
# AI Citation Analysis — {주차}

## Score
- 총 48 셀 중:
  - 🟢 Strong: X
  - 🟡 Weak: Y
  - 🔴 Absent: Z
- Strong 비율: {X/48}%

## 직전 주 대비
- Strong: +N
- 변화 패턴: ...

## 엔진별 강점/약점
| 엔진 | Strong | Weak | Absent | 특이사항 |
|---|---|---|---|---|
| ChatGPT | ... | ... | ... | ... |
| Perplexity | ... | ... | ... | ... |
| Claude | ... | ... | ... | ... |
| Gemini | ... | ... | ... | ... |

## 카테고리별
| 카테고리 | Strong/Total | 갭 |
|---|---|---|
| 직접 브랜드 (1-3) | x/12 | ... |
| 지역 의도 (4-7) | x/16 | ... |
| 카테고리/정보 (8-10) | x/12 | ... |
| 비교 의도 (11-12) | x/8 | ... |

## 발견된 갭
- 질의 #N에서 인용 0 → content-strategist에 의뢰: {제안 콘텐츠}
- 질의 #M에서 잘못된 사실 → geo-auditor에 의뢰: {사실 일관성 점검}

## 다음 조치
- [ ] {액션 1}
- [ ] {액션 2}
```

### Step 3: 추세 누적

`_workspace/citation-history.csv` (없으면 생성):
```csv
week,total_strong,total_weak,total_absent,chatgpt_strong,perplexity_strong,claude_strong,gemini_strong,notes
2026-W22,8,12,28,3,3,1,1,"초기 측정"
2026-W23,...
```

매 주 측정 후 한 줄 추가.

## 측정 권장 주기

- **첫 4주**: 매주 (효과 발현 추적)
- **이후**: 격주 또는 월 1회
- **콘텐츠 큰 변경 후**: 변경 7일/14일 후 추가 측정

## 자동 트리거 조건

다음 상황에서 측정 권유:
1. `content-strategist`가 큰 콘텐츠 변경 후 14일 경과
2. `geo-auditor`가 새 스키마 추가 후 7일 경과
3. 마지막 측정 후 14일 이상 경과

## 협업 — 갭 발견 시 라우팅

| 패턴 | 라우팅 |
|---|---|
| 특정 카테고리 Absent 다수 | `content-strategist` (해당 키워드 콘텐츠 강화) |
| 사실 오류 답변 (예: 24시간 broth) | `geo-auditor` (사이트 내 사실 일관성) + `deploy-operator` (Search Console 시정 요청) |
| 특정 엔진만 인용 부진 | 해당 엔진 권장 신호 강화 (ChatGPT는 sitemap, Perplexity는 인용 가능 문장) |
| 경쟁사가 모두 인용됨 | 경쟁사 사이트 분석 후 `content-strategist`에 대응 콘텐츠 의뢰 |
