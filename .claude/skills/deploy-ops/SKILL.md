---
name: deploy-ops
description: Modu Ramen 배포 운영. GitHub Actions 워크플로우 상태 확인/활성화, 빌드 트리거, 라이브 응답 검증, Fastly 캐시 진단, 사이트맵 헬스, GitHub Pages 설정 확인. "배포 상태", "빌드 됐어?", "사이트맵", "Search Console", "워크플로우", "캐시", "라이브 확인" 같은 요청에 즉시 사용.
---

# Deploy Ops Skill

`deploy-operator` 에이전트가 사용하는 배포 운영 워크플로우.

## 운영 명령어 카탈로그

### 1. 워크플로우 상태 확인
```bash
gh workflow view deploy.yml --json state --jq '.state'
# 예상: "active". "disabled_inactivity"면 즉시 enable
```

### 2. 비활성화 복구 (60일 정책)
```bash
gh workflow enable deploy.yml
gh workflow run deploy.yml --ref main
sleep 8
gh run list --limit 2
```

### 3. 최근 빌드 이력
```bash
gh run list --workflow=deploy.yml --limit 5
gh run list --event push --limit 3
```

### 4. 빌드 실패 로그
```bash
gh run view <run-id> --log-failed | head -100
```

### 5. 수동 빌드 트리거
```bash
gh workflow run deploy.yml --ref main
```

### 6. 라이브 응답 검증
```bash
TS=$(date +%s)
for path in "/" "/sitemap.xml" "/llms.txt" "/llms-full.txt" "/robots.txt"; do
  echo "=== $path ==="
  curl -sI "https://moduramen.com${path}?cb=$TS" | grep -E "HTTP|Last-Modified|Content-Length|X-Cache"
done
```

### 7. GitHub Pages 설정
```bash
gh api repos/kprince0/ModuHomepage/pages
# 확인: build_type=workflow, cname=moduramen.com, https_enforced=true
```

### 8. 사이트맵 헬스
```bash
# URL 개수
curl -s "https://moduramen.com/sitemap.xml?cb=$(date +%s)" | grep -c "<loc>"
# 예상: 16 (홈 + 15 sub-pages)

# kprince0.github.io URL 누출 검사
curl -s "https://moduramen.com/sitemap.xml?cb=$(date +%s)" | grep -c "kprince0.github.io"
# 예상: 0
```

## 표준 운영 절차

### SOP 1: "배포 됐어?" 진단
1. 워크플로우 상태 (#1) → active 확인
2. 최근 빌드 이력 (#3) → 최신 commit hash가 success인지
3. 라이브 응답 (#6) → Last-Modified가 commit 시각 이후인지

3 모두 OK면 "배포 완료". 하나라도 fail이면 원인별 SOP로.

### SOP 2: "왜 사이트가 옛 버전이야" 진단
1. 워크플로우 상태 확인 (#1)
   - `disabled_inactivity` → SOP 3 (복구)
2. 최근 빌드 (#3) — push가 실제로 트리거되었나
   - 트리거 안 됨 → 워크플로우가 disable이었거나 권한 문제
3. 빌드 자체 실패? (#3에서 failed 확인 후 #4 로그)
4. 빌드 성공인데 캐시 문제?
   - `X-Cache: HIT` 헤더 → Fastly 캐시 (10분 max-age)
   - 사용자에게 `?v={timestamp}` URL 또는 강제 새로고침 안내

### SOP 3: 워크플로우 60일 비활성화 복구
1. `gh workflow enable deploy.yml`
2. `gh workflow run deploy.yml --ref main` (수동 트리거)
3. 8초 대기 후 `gh run list --limit 2` 확인 (in_progress)
4. 사용자에게: "활성화 + 빌드 트리거 완료. 약 3분 후 라이브 반영"
5. 옵션: schedule cron 제거 권고 (재발 방지) → codex-spec-writer로 위임

### SOP 4: 사이트맵 갱신 확인
1. 사이트맵 URL 개수 (#8) — 16 인지
2. kprince0.github.io 누출 검사 (#8) — 0 인지
3. `<lastmod>` 최신 날짜인지 (curl로 확인)

이슈 발견 → `codex-spec-writer`에게 sitemap 수정 의뢰

### SOP 5: Search Console 사이트맵 제출 (수동 가이드)
사용자에게 안내:
```
1. https://search.google.com/search-console 접속
2. 속성 [moduramen.com] 선택
3. 좌측 메뉴 "색인 생성" → "사이트맵"
4. 입력: sitemap.xml
5. 제출 → 발견된 URL: 16 확인
```

## 출력 형식

`_workspace/deploy-report-{YYYYMMDD-HHmm}.md`:
```markdown
# Deploy Report — {timestamp}

## 워크플로우 상태
- state: {active/disabled_inactivity}
- 최근 5개 run: {표}

## 라이브 검증
| URL | HTTP | Last-Modified | X-Cache | 비고 |
|---|---|---|---|---|
| / | 200 | ... | HIT/MISS | ... |
| /sitemap.xml | 200 | ... | ... | 16 URLs ✅ |
...

## 시스템 헬스
- GitHub Pages CNAME: moduramen.com ✅
- HTTPS 강제: ✅
- 인증서 만료: 2026-08-04

## 발견된 이슈
- ...

## 자동 처리한 액션
- ...

## 사용자 액션 필요
- [ ] ...
```

## 알려진 패턴 (재발 시 즉시 적용)

| 증상 | 원인 | SOP |
|---|---|---|
| push 후 빌드 안 돔 | disabled_inactivity | SOP 3 |
| 빌드 성공인데 사이트 옛 버전 | Fastly 캐시 | 10분 대기 또는 cache-bust URL |
| kprince0.github.io URL이 sitemap에 보임 | 옛 sitemap 잔존 | codex-spec-writer로 갱신 |
| Search Console 도메인 인증 실패 | DNS TXT 없음 | URL 접두어 방식 안내 |
| 빌드 실패 - secrets | GOOGLE_PLACES_API_KEY | secret 재설정 안내 |
