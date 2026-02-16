# Design Guidelines — PSW DFIR Portfolio

## Tone & Identity

**Premium Dark / Industrial** — 고급스러운 다크 UI 위에 포렌식 분석가의 정체성.
데이터가 주인공이되, 적절한 시각적 풍성함으로 프로페셔널함을 전달한다.
SaaS 랜딩, 마케팅 사이트 패턴은 금지하되, 지나치게 raw/stark하지 않게.

키워드: `premium-dark`, `utilitarian`, `data-first`, `monospace-labels`, `teal-ambient`

### 레퍼런스 분석 (assets/)
- **1.png, 2.png (Anders Antonsen)**: 딥 다크 틸 배경, thin border 카드, 컬러 메타 태그, 은은한 hero glow, 넉넉한 여백, 프로젝트 카드에 이미지 썸네일
- **webp (Joe Ben Taylor)**: 극도로 미니멀, 모노크롬, 대형 텍스트, uppercase 라벨, UI 크롬 제로, 에디토리얼 느낌

### 우리 방향
Anders Antonsen의 premium dark 톤을 기본으로 하되, Joe Ben Taylor의 미니멀 타이포 감각을 섞는다.
"포렌식 분석가의 개인 사이트" 느낌 — 화려하지 않지만 세련되고, 정보가 잘 정돈되어 있는.

---

## Color System

| Token | Hex | Usage |
|-------|-----|-------|
| `bg` | `#0a0f1a` | 페이지 배경 |
| `surface` | `#0e1525` | 카드/패널 배경 |
| `elevated` | `#141c2b` | 강조 영역 배경 |
| `heading` | `#e2e8f0` | 제목, 강조 텍스트 |
| `body` | `#94a3b8` | 본문 텍스트 |
| `muted` | `#546178` | 라벨, 보조 텍스트 |
| `accent` | `#00d4aa` | 포인트 컬러 (CTA, 라벨, 노드) |
| `accent-dim` | `rgba(0,212,170,0.08)` | 악센트 배경 |
| `border` | `#1a2332` | 기본 구분선 |
| `divider` | `rgba(0,212,170,0.15)` | 악센트 구분선 |

### Ambient Glow
히어로/주요 섹션에 배경 글로우 허용:
```css
background: radial-gradient(ellipse at center, rgba(0,212,170,0.03) 0%, transparent 70%);
```
- 은은하게, 눈에 안 띄는 정도 (opacity 0.03~0.05)
- 페이지당 1~2개 이내

### 금지
- 강한 그라데이션 배경
- 네온 글로우 (box-shadow glow 남발)
- 밝은 테마

---

## Typography

| Role | Font | Weight | Size |
|------|------|--------|------|
| 라벨/코드/섹션 헤더 | JetBrains Mono | 400-700 | 10-11px |
| 본문 (한글+영문) | IBM Plex Sans + Pretendard | 300-600 | 14-16px |
| 대형 헤딩 | JetBrains Mono | 700 | 48-80px |

**규칙**:
- 섹션 라벨: `font-mono text-[11px] text-muted tracking-[0.3em] uppercase`
- 서브 라벨: `font-mono text-[11px] text-accent tracking-[0.2em] uppercase`
- 본문: `text-body text-sm leading-relaxed`
- 이모지 사용 금지. 텍스트 심볼(&#9656;, &rarr;) 또는 SVG 아이콘만 허용

---

## Layout Patterns

### 여백
- 섹션 간: `py-24` (96px)
- 섹션 내 블록 간: `mt-14` (56px)
- 아이템 간: `space-y-4` ~ `space-y-8`
- 최대 폭: `max-w-6xl` (일반), `max-w-4xl` (읽기 중심)
- **레퍼런스처럼 넉넉하게. 빽빽하면 안 됨.**

### 섹션 구조
```
SEC.{번호} — {영문 섹션명}     ← 모노스페이스, uppercase, tracking 넓게

{콘텐츠}
```

### 카드/컨테이너
레퍼런스에 맞춰 thin border 카드 허용:
- 배경: `bg-surface`
- 보더: `border border-border`
- border-radius: `rounded-lg` (8px) — 카드/패널에만 허용
- hover: `hover:border-accent/30 transition-colors`
- box-shadow 금지 (border로 구분)
- **모든 요소가 카드일 필요 없음** — 필요한 곳에만 사용

### 타임라인
프로젝트, 교육 등 시간순 데이터에 사용:
- 좌측 세로선: `w-px bg-border`
- 노드: `w-[15px] h-[15px] rounded-full border-2 border-accent`
- 강조 노드: `bg-accent shadow-[0_0_10px_rgba(0,212,170,0.4)]`
- 콘텐츠: `pl-10` (노드 오른쪽)

### 데이터 표시
라벨-값 쌍:
```
LABEL    value text here
```
`font-mono text-muted w-16~20 shrink-0` → `text-body`

### PAR (Problem-Action-Result)
```
PROBLEM   text...
ACTION    text...
RESULT    text...
```
색상: PROBLEM=`text-red-400/70`, ACTION=`text-blue-400/70`, RESULT=`text-emerald-400/70`

### 메타데이터 컬러 태그 (레퍼런스 참고)
기간, 카테고리 등에 작은 컬러 태그 사용 가능:
- `font-mono text-[10px] px-2 py-0.5 rounded bg-accent/10 text-accent`
- 보조 컬러: `bg-blue-500/10 text-blue-400`, `bg-amber-500/10 text-amber-400`

---

## Components

### 버튼
- Primary: `border border-accent text-accent hover:bg-accent hover:text-bg rounded-sm`
- Secondary: `border border-border text-muted hover:border-accent hover:text-accent rounded-sm`
- 공통: `font-mono text-xs tracking-[0.15em] uppercase px-6 py-3`
- border-radius: `rounded-sm` (2px) — 버튼에만 미세하게 허용

### 태그/뱃지
`font-mono text-[10px] tracking-[0.15em] uppercase px-2 py-0.5 border border-accent/40 text-accent`

### 테크 스택 태그
`font-mono text-[11px] px-2 py-0.5 border border-border text-muted rounded-sm`

### 스킬 레벨 인디케이터
4개 도트 시스템:
- ●●●● Expert (EXP)
- ●●●○ Advanced (ADV)
- ●●○○ Intermediate (INT)
- ●○○○ Beginner (BGN)
- 채움: `bg-accent`, 빈칸: `bg-border`, 크기: `w-1.5 h-1.5 rounded-full`

### 구분선
- 섹션 간: `border-t border-border`
- 악센트 선: `border-l-2 border-accent` (인용/강조)
- 서브 구분: `border-b border-border/60`

---

## Animation

### 페이지 로드 (Hero만)
- FadeIn 컴포넌트: `opacity: 0 → 1`, `translateY: 16px → 0`
- delay를 0.2s~0.3s 간격으로 증가시켜 stagger 효과
- duration: 0.8s, ease: easeOut

### 스크롤 트리거 (나머지 섹션)
- ScrollReveal: `useInView` 기반, margin: -80px
- StaggerContainer + StaggerItem: 자식 요소 순차 등장
- 기본 방향: 아래→위 (y: 40 → 0)
- duration: 0.5-0.6s

### Hover
- 카드: `hover:border-accent/30` (보더 색상만 변경)
- 링크: `hover:text-accent` (색상만 변경)
- 버튼: `hover:bg-accent hover:text-bg` (배경 채움)
- transition: `duration-200` (빠르게)

### 금지
- 바운스 애니메이션
- 스케일/줌 hover 효과
- 회전 애니메이션
- 과도한 transform

---

## Background

도트 그리드 패턴 (고정):
```css
background-image: radial-gradient(rgba(0,212,170,0.08) 1px, transparent 1px);
background-size: 24px 24px;
```
- 페이지 전체에 `fixed`, `opacity-50`, `pointer-events-none`, `z-0`
- 콘텐츠는 `relative z-10`

---

## 금지 목록 (AI Slop 방지)

- [ ] 이모지 아이콘
- [ ] 터미널 윈도우 크롬 (🔴🟡🟢 트래픽 라이트)
- [ ] 강한 그라데이션 배경/텍스트
- [ ] box-shadow / drop-shadow (타임라인 노드 glow만 예외)
- [ ] 네온 글로우 효과
- [ ] 프로그레스 바
- [ ] SaaS 히어로 패턴 (중앙 CTA + 서브텍스트)
- [ ] 라이트 모드
- [ ] Inter, Roboto, Space Grotesk 폰트
- [ ] 보라색/파란색 그라데이션
- [ ] "Get Started", "Learn More" 류 CTA 문구
- [ ] 3D 효과, glassmorphism, neumorphism
- [ ] 과도한 rounded corners (카드 `rounded-lg`, 버튼 `rounded-sm`만 허용)
