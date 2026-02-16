# Design Guidelines — PSW DFIR Portfolio

## Tone & Identity

**Clean Corporate Light** — AhnLab EDR 레퍼런스 기반의 밝고 깔끔한 기업형 UI.
정보가 주인공이되, 프로페셔널하고 신뢰감 있는 톤을 유지한다.

키워드: `clean-light`, `corporate-blue`, `data-first`, `sans-serif`, `blue-ambient`

### 우리 방향
밝은 배경 위에 블루 악센트로 포인트를 주는 기업형 포트폴리오.
"보안 분석가의 이력서" — 깔끔하고 정돈된 정보 전달, 은은한 블루 분위기.

---

## Color System

| Token | Value | Usage |
|-------|-------|-------|
| `bg` | `#ffffff` | 카드/패널 배경 |
| `surface` | `#f7f9fc` | 카드/패널 배경 (대체) |
| `elevated` | `#eef2f7` | 강조 영역, 탭 바 배경 |
| `heading` | `#1a1f36` | 제목, 강조 텍스트 |
| `body` | `#4a5568` | 본문 텍스트 |
| `muted` | `#8896ab` | 라벨, 보조 텍스트 |
| `accent` | `#2563eb` | 포인트 컬러 (CTA, 라벨, 노드) |
| `accent-dim` | `rgba(37,99,235,0.06)` | 악센트 배경 |
| `accent-border` | `rgba(37,99,235,0.15)` | 악센트 보더 |
| `border` | `#e5e9f0` | 기본 구분선 |
| `success` | `#059669` | 긍정/결과 |
| `warning` | `#d97706` | 주의/트러블슈팅 |
| `danger` | `#dc2626` | 문제/에러 |

### Background System
페이지 배경은 **3 레이어 구조** (모두 fixed, pointer-events-none, z-0):

1. **블루 그라데이션**: `linear-gradient(135deg, #f0f4ff, #ffffff, #f0f7ff, #e8f0fe)` — 전체 배경 톤
2. **도트 그리드**: `radial-gradient(rgba(37,99,235,0.03) 1px, transparent 1px)`, 28px 간격, opacity 0.4
3. **플로팅 오브**: 블루 radial-gradient 원형 3개, blur 90~120px, opacity 0.15~0.20, 20~25초 주기 CSS 애니메이션

**섹션 배경은 투명** — 배경 레이어가 비치도록 `<section>`에 bg 클래스 사용 금지.
카드/패널만 `bg-bg` 또는 `bg-surface`로 불투명 배경 사용.

---

## Typography

| Role | Font | Weight | Size |
|------|------|--------|------|
| 모든 텍스트 | IBM Plex Sans + Pretendard | 300-700 | 10-16px |
| 대형 헤딩 | IBM Plex Sans + Pretendard | 700 | 48-80px |

**규칙**:
- **font-sans 통일** — font-mono 사용 금지
- 섹션 번호: `text-xs font-sans text-accent tracking-wider`
- 라벨 (PROBLEM/ACTION/RESULT 등): `text-[11px] font-medium tracking-wide uppercase`
- 뱃지/태그: `text-[11px] font-semibold`
- 본문: `text-body text-sm leading-relaxed`
- 이모지 사용 금지

---

## Layout Patterns

### 여백
- 섹션 간: `py-24` (96px)
- 최대 폭: `max-w-6xl` (일반), `max-w-4xl` (읽기 중심)
- 넉넉한 여백 유지

### 섹션 구조
```
{번호(01~05)}     ← text-xs, accent color
{영문 제목}       ← text-3xl font-bold
{콘텐츠}
```

### 카드/컨테이너
- 배경: `bg-bg` 또는 `bg-surface`
- 보더: `border border-border`
- border-radius: `rounded-xl` (12px)
- shadow: `shadow-sm`
- hover: `hover:shadow-md hover:border-[#cbd5e1] transition-all duration-200`

### 타임라인
- 좌측 세로선: `w-[2px] bg-border`
- 일반 노드: `w-3 h-3 rounded-full bg-accent`
- 강조 노드: `w-4 h-4 bg-accent ring-4 ring-accent-dim border-2 border-white shadow-sm`
- 콘텐츠: `pl-10`

### PAR (Problem-Action-Result)
| Label | Color |
|-------|-------|
| PROBLEM | `text-danger` |
| ACTION | `text-accent` |
| RESULT | `text-success` |

---

## Components

### 버튼
- Primary: `bg-accent text-white hover:bg-[#3b82f6] rounded-lg shadow-sm px-6 py-3 text-sm font-semibold`
- Secondary: `border border-border text-body hover:border-accent hover:text-accent rounded-lg px-6 py-3 text-sm font-semibold`

### 뱃지/태그
`text-[11px] font-semibold px-2.5 py-0.5 rounded-md bg-accent-dim text-accent border border-accent-border`

### 테크 스택 태그
`text-[11px] px-2.5 py-1 rounded-md bg-elevated text-body`

### 스킬 레벨 인디케이터
4-dot 시스템:
- 채움: `bg-accent`, 빈칸: `bg-border`, 크기: `w-2 h-2 rounded-full`

### 네비게이션 바
`fixed top-0 w-full z-50 bg-bg/80 backdrop-blur-md border-b border-border`

---

## Animation

### 페이지 로드 (Hero)
- FadeIn: `opacity 0→1`, `translateY 16→0`
- delay 0.15s 간격 stagger
- duration: 0.6s

### 스크롤 트리거
- ScrollReveal: `useInView` 기반
- StaggerContainer + StaggerItem: 자식 순차 등장
- duration: 0.5-0.6s

### 배경 애니메이션
- 플로팅 오브: CSS `@keyframes` translate만 사용
- 20~25초 주기, ease-in-out
- scale/bounce/rotate 금지

### Hover
- 카드: `hover:shadow-md hover:border-[#cbd5e1]`
- 링크: `hover:text-accent`
- 버튼: Primary는 밝아짐, Secondary는 accent 보더로 변경
- transition: `duration-200`

---

## 금지 목록

- [ ] 이모지 아이콘
- [ ] font-mono / JetBrains Mono (코드 블록 제외)
- [ ] 다크 테마 / 다크 배경
- [ ] 네온 글로우 효과
- [ ] 바운스/스케일/회전 애니메이션
- [ ] 프로그레스 바
- [ ] SaaS 히어로 패턴
- [ ] Inter, Roboto, Space Grotesk 폰트
- [ ] 3D 효과, glassmorphism, neumorphism
- [ ] 섹션 레벨 불투명 배경 (카드/패널만 허용)
- [ ] 터미널 윈도우 크롬 (트래픽 라이트)
