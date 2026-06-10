# AEO 경쟁사 · 인용 소스 리서치 — 2026-06-09

> 작성: harness orchestrator (WebSearch/WebFetch 직접 조사)
> 배경: 온사이트 AEO 자산 만점 수준임에도 AI 답변에서 ~5위 / 마지막 언급. 병목은 오프사이트 인용 소스.

---

## 1. AI 엔진이 인용하는 소스 지형 ("best ramen Jacksonville" 질의)

검색 상위 = AI 엔진(ChatGPT/Perplexity/Gemini)이 합성에 쓰는 소스 풀:

| 소스 | 유형 | Modu 포함? | 비고 |
|---|---|---|---|
| Yelp "TOP 10 BEST Ramen in Jacksonville" | 플랫폼 랭킹 | ✅ (456 리뷰, 사진 1,016장) | 직접 fetch는 403, AI는 데이터 제휴로 접근 |
| TripAdvisor "THE BEST Ramen in Jacksonville" | 플랫폼 랭킹 | ⚠️ **리뷰 단 6개** — 사실상 부재 | **최대 약점.** #359/2,126 |
| Restaurant Guru "Top 7 ramen Jacksonville" | 애그리게이터 랭킹 | ✅ **4위** (4.9, 1,614 votes) | 1위 Karai 4.8/2,011 |
| JaxRestaurantReviews "5 Best Ramen Spots In Jax" | 로컬 리스티클 | ✅ **3위** ("great noodles, flavorful broth") | 2019년경 작성, 노후. SNS로 추천 접수 |
| Jacksonville Magazine "Bowled Over" (2023-11) | 로컬 매거진 | ✅ 피처됨 (kimchi pancake, house-made noodles 언급) | 좋은 자산 — 사이트에서 인용 활용 0 |
| Folio Weekly "The Hunt for the Best Ramen" (2023-11) | 로컬 매거진 | ❓ Kyuramen·Domu 중심 | Domu가 "Best Ramen" 수상 이력 |
| Reddit r/jacksonville | UGC | 검색 비노출 (존재감 약함 추정) | Perplexity/ChatGPT 고가중치 소스 — 공백 |
| UberEats/DoorDash 카테고리 페이지 | 배달 플랫폼 | ✅ | 순위 영향 낮음 |

## 2. 경쟁사 footprint (앞서 있는 4곳)

| 경쟁사 | 강점 신호 | 데이터 |
|---|---|---|
| **Karai Ramen Bistro** (Beach Blvd) | Restaurant Guru **1위**, JaxRestaurantReviews **1위** ("Chef Levi, viscometer 정밀도" 스토리 인용됨) | Google 4.7 · RG 4.8/2,011 · Yelp 367리뷰/716사진 |
| **Domu** (Town Center) | **"Voted Best Ramen by Jacksonville Magazine & Folio Weekly"** — 수상 타이틀이 AI 답변에 그대로 인용됨. JaxRR 2위 | Yelp 987리뷰/2,456사진 · RG 4.8/2,670 |
| **Umami Curry & Ramen** | RG 2위 | RG 4.8/1,020 |
| **Kyuramen** (Old Baymeadows) | Folio Weekly가 "거의 유일하게 정통 느낌" 인용 — 같은 Baymeadows 상권 직접 경쟁 | RG 4.5/878 |

## 3. Modu Ramen 현재 footprint

| 플랫폼 | 값 | 평가 |
|---|---|---|
| Google | **4.6/5** | 양호하나 Karai 4.7에 열세 |
| Yelp | **456 리뷰**, 1,016 사진 | 양호 (Domu 987에 열세) |
| TripAdvisor | **6 리뷰**, 4.8, #359/2,126 | 🔴 치명적 공백 |
| Facebook | 257 리뷰, 100% 추천 | 우수 — 활용 안 됨 |
| Restaurant Guru | 4.9/1,614 (집계) — 라멘 카테고리 4위 | 평점 1위인데 인지도·언급량에서 밀림 |
| 언론 | Jacksonville Magazine 2023 피처, JaxRR 3위 | 있는데 **사이트가 인용·과시 안 함** |

### 🔴 자기 데이터 모순 (즉시 수정 필요)
사이트 스키마·llms.txt가 **"5.0/158 리뷰"** 송출 중 — 실제 Google 4.6, Yelp 456. LLM은 교차검증한다:
1. 숫자가 낡아 **실제보다 과소** (158 vs 1,600+ 집계)
2. "5.0 만점" + "#1 destination" + "widely regarded as the best" 자기선언 → **신뢰도 감점** (AI는 제3자 근거 없는 최상급을 광고로 분류)

## 4. 갭 매트릭스 요약

| 인용 소스 | Karai | Domu | Modu | 갭 액션 |
|---|---|---|---|---|
| TripAdvisor 리뷰 볼륨 | ✅ | ✅ | 🔴 6개 | 리뷰 캠페인 (최우선) |
| 매거진 "수상" 타이틀 | — | ✅ Best Ramen | 🔴 | Best of Jax 투표 캠페인 |
| 로컬 리스티클 1위 | ✅ | ✅ | 3~4위 | 신선한 2026 콘텐츠 + 아웃리치 |
| Reddit 언급 | ❓ | ❓ | 🔴 | 진정성 있는 커뮤니티 참여 |
| 셰프 스토리 인용 ("viscometer") | ✅ | — | 🔴 (18시간 브로스가 안 퍼짐) | PR 피치 |
| 사이트 내 제3자 인용 활용 | — | ✅ | 🔴 | "As Featured In" 섹션 |

## 5. 결론 — 5위인 이유 3줄 요약

1. **AI는 우리 사이트가 아니라 제3자 합의를 랭킹 근거로 쓴다.** Domu는 "voted Best" 타이틀, Karai는 리스티클 1위 + 셰프 스토리가 소스 풀에 깔려 있음.
2. **TripAdvisor 6리뷰 + Reddit 공백** = 4대 인용 소스 중 2개에서 사실상 부재.
3. **우리 1차 데이터가 낡고 자기과시형**이라 LLM 신뢰 가점도 못 받는 상태.

→ 대응 계획: `aeo-no1-plan-20260609.md`
