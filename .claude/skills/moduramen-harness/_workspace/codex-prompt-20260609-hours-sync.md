# Codex Task: Fix incorrect opening hours sitewide (schema + visible + llms)

> 확정 영업시간 (오너 확인, 2026-06-09): 월–목 11:00–15:00 / 17:00–21:00 · 금–토 11:00–15:00 / 17:00–21:30 · **일요일 휴무**
> 현재 사이트는 "연중무휴, 브레이크 없음"이라는 잘못된 시간을 송출 중 (스키마·Footer·llms 파일). Location.tsx의 화면 텍스트만 이미 정확함.

## Context
- Project: Modu Ramen
- Stack: Next.js 16, React 19, TypeScript, TailwindCSS 4, static export
- Working dir: E:\Modu Web\modu-ramen
- Global JSON-LD: src/app/layout.tsx

## Goal
사이트가 송출하는 영업시간(스키마 3곳, 화면 1곳, AI 채널 2곳)을 실제 영업시간으로 동기화한다. 잘못된 시간은 AI 답변 오안내 + 교차검증 신뢰도 하락 요인.

## Files to change
1. src/app/layout.tsx (3곳)
2. src/components/sections/Location.tsx (스키마만 — 화면 텍스트는 이미 정확)
3. src/components/ui/Footer.tsx
4. public/llms.txt
5. public/llms-full.txt

---

## Change 1: src/app/layout.tsx — openingHoursSpecification (line ~147)

### Current
```json
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday"],
      "opens": "11:00",
      "closes": "21:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Friday", "Saturday"],
      "opens": "11:00",
      "closes": "21:30"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Sunday",
      "opens": "11:30",
      "closes": "21:00"
    }
  ],
```

### Target
```json
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday"],
      "opens": "11:00",
      "closes": "15:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday"],
      "opens": "17:00",
      "closes": "21:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Friday", "Saturday"],
      "opens": "11:00",
      "closes": "15:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Friday", "Saturday"],
      "opens": "17:00",
      "closes": "21:30"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Sunday",
      "opens": "00:00",
      "closes": "00:00"
    }
  ],
```

### Why
schema.org 분할 영업(브레이크타임)은 동일 요일에 OpeningHoursSpecification 2개로 표현. Sunday opens=closes="00:00"은 Google 권장 "휴무일" 표기.

---

## Change 2: src/app/layout.tsx — metadata description (line ~19)

### Current
```ts
  description: "Modu Ramen serves the best authentic Japanese ramen in Jacksonville, FL. Chef Kim's 26-year mastery delivers an 18-hour slow-cooked tonkotsu broth on Baymeadows Rd. Open daily 11am.",
```

### Target
```ts
  description: "Modu Ramen serves authentic Japanese ramen in Jacksonville, FL. Chef Kim's 26-year mastery delivers an 18-hour slow-cooked tonkotsu broth on Baymeadows Rd. Lunch & dinner Mon-Sat.",
```

---

## Change 3: src/app/layout.tsx — FAQ hours answer (line ~381)

### Current
```json
        "text": "Modu Ramen is open Monday through Thursday 11:00 AM–9:00 PM, Friday and Saturday 11:00 AM–9:30 PM, and Sunday 11:30 AM–9:00 PM."
```

### Target
```json
        "text": "Modu Ramen is open Monday through Thursday 11:00 AM–3:00 PM and 5:00 PM–9:00 PM, Friday and Saturday 11:00 AM–3:00 PM and 5:00 PM–9:30 PM, and is closed on Sundays."
```

---

## Change 4: src/components/sections/Location.tsx — 임베디드 스키마 (line ~28)

### Current
```json
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday"],
        "opens": "11:00",
        "closes": "21:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Friday", "Saturday"],
        "opens": "11:00",
        "closes": "21:30"
      }
    ],
```

### Target
Change 1의 Target과 동일한 5블록 배열 (들여쓰기만 이 파일 기준 4칸 더 깊게 유지).

### Why
같은 사이트에서 페이지마다 다른 시간 송출 금지 — 라인 75–77의 화면 텍스트(이미 정확)와 일치시킴.

---

## Change 5: src/components/ui/Footer.tsx — 화면 표시 시간 (line ~33)

### Current
```jsx
              <li className="flex justify-between border-b border-paper/10 pb-2">
                <span>Mon - Thu</span>
                <span>11:00 AM - 9:00 PM</span>
              </li>
              <li className="flex justify-between border-b border-paper/10 pb-2">
                <span>Fri - Sat</span>
                <span>11:00 AM - 9:30 PM</span>
              </li>
              <li className="flex justify-between border-b border-paper/10 pb-2">
                <span>Sunday</span>
                <span>11:30 AM - 9:00 PM</span>
              </li>
```

### Target
```jsx
              <li className="flex justify-between border-b border-paper/10 pb-2">
                <span>Mon - Thu</span>
                <span>11 AM - 3 PM, 5 - 9 PM</span>
              </li>
              <li className="flex justify-between border-b border-paper/10 pb-2">
                <span>Fri - Sat</span>
                <span>11 AM - 3 PM, 5 - 9:30 PM</span>
              </li>
              <li className="flex justify-between border-b border-paper/10 pb-2">
                <span>Sunday</span>
                <span>Closed</span>
              </li>
```

---

## Change 6: public/llms.txt — Hours 섹션

### Current
```
- Monday – Thursday: 11:00 AM – 9:00 PM
- Friday – Saturday: 11:00 AM – 9:30 PM
- Sunday: 11:30 AM – 9:00 PM
```

### Target
```
- Monday – Thursday: 11:00 AM – 3:00 PM, 5:00 PM – 9:00 PM
- Friday – Saturday: 11:00 AM – 3:00 PM, 5:00 PM – 9:30 PM
- Sunday: Closed
```

---

## Change 7: public/llms-full.txt — Hours 테이블

### Current
```
| Monday | 11:00 AM | 9:00 PM |
| Tuesday | 11:00 AM | 9:00 PM |
| Wednesday | 11:00 AM | 9:00 PM |
| Thursday | 11:00 AM | 9:00 PM |
| Friday | 11:00 AM | 9:30 PM |
| Saturday | 11:00 AM | 9:30 PM |
| Sunday | 11:30 AM | 9:00 PM |
```

### Target (헤더 행은 그대로 두고 데이터 행만 교체; 컬럼 구조가 Open/Close 2컬럼이면 아래처럼 lunch/dinner 병기)
```
| Monday | 11:00 AM – 3:00 PM | 5:00 PM – 9:00 PM |
| Tuesday | 11:00 AM – 3:00 PM | 5:00 PM – 9:00 PM |
| Wednesday | 11:00 AM – 3:00 PM | 5:00 PM – 9:00 PM |
| Thursday | 11:00 AM – 3:00 PM | 5:00 PM – 9:00 PM |
| Friday | 11:00 AM – 3:00 PM | 5:00 PM – 9:30 PM |
| Saturday | 11:00 AM – 3:00 PM | 5:00 PM – 9:30 PM |
| Sunday | Closed | Closed |
```
테이블 헤더가 "| Day | Open | Close |"라면 "| Day | Lunch | Dinner |"로 변경.

추가: 두 llms 파일 내에 "open seven days" / "daily" 류 표현이 더 있으면 모두 제거/수정 (grep -i "daily\|seven days" 확인).

---

## Validation

- [ ] `npx tsc --noEmit` returns 0 errors
- [ ] `grep -rn "21:00" src/ | grep -v "17:00"` → openingHours 블록 외 잔존 확인 (FAQ 텍스트 제외)
- [ ] `grep -rin "9:00 PM" src/components/ui/Footer.tsx` returns 0 matches
- [ ] `grep -in "Sunday: 11:30" public/llms.txt` returns 0 matches

## Notes for Codex
- git 명령 실행 금지 (커밋은 오케스트레이터가 처리)
- npm run build 실행 금지
- 다른 파일 수정 금지
- Location.tsx 라인 75–77의 화면 텍스트는 이미 정확함 — 건드리지 말 것
