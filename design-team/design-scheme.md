# Design Scheme — AhnLab-inspired DFIR Portfolio

> 안랩 EDR 제품 페이지의 look & feel을 참고한 디자인 스킴.
> "보안 업계 실무자의 포트폴리오"다운 깔끔함과 신뢰감.

---

## 1. Tone & Direction

**기업 보안 솔루션 사이트의 신뢰감** + **개인 포트폴리오의 인간미**

- 깔끔하고 밝은 배경
- 쿨톤 블루 악센트 (보안 업계 표준 컬러)
- 넉넉한 여백, 명확한 정보 계층
- 모노스페이스는 라벨/코드에만 절제해서 사용
- 섹션별 배경색 교차로 시각적 구분

안랩이 주는 느낌: "이 회사에 내 보안을 맡겨도 되겠다"
우리가 줄 느낌: "이 사람에게 침해사고 대응을 맡겨도 되겠다"

---

## 2. Color Palette

### Primary Backgrounds
| Token | Value | Usage |
|-------|-------|-------|
| `bg` | `#ffffff` | 기본 배경 (흰색) |
| `surface` | `#f7f9fc` | 교차 섹션 배경 (극미세 블루 틴트) |
| `elevated` | `#eef2f7` | 강조 영역, 배지 배경 |

### Text
| Token | Value | Usage |
|-------|-------|-------|
| `heading` | `#1a1f36` | 제목 (다크 네이비, 순수 검정 아님) |
| `body` | `#4a5568` | 본문 |
| `muted` | `#8896ab` | 라벨, 보조 텍스트, 날짜 |

### Accent
| Token | Value | Usage |
|-------|-------|-------|
| `accent` | `#2563eb` | 주 악센트 (블루-600, CTA/링크/강조) |
| `accent-light` | `#3b82f6` | hover, 밝은 변형 |
| `accent-dim` | `rgba(37, 99, 235, 0.06)` | 악센트 배경 틴트 |
| `accent-border` | `rgba(37, 99, 235, 0.15)` | 악센트 보더 |

### Semantic
| Token | Value | Usage |
|-------|-------|-------|
| `success` | `#059669` | RESULT, 합격, 수료 |
| `warning` | `#d97706` | Troubleshooting |
| `danger` | `#dc2626` | PROBLEM |
| `info` | `#2563eb` | ACTION, 링크 |

### Border
| Token | Value | Usage |
|-------|-------|-------|
| `border` | `#e5e9f0` | 기본 구분선, 카드 보더 |
| `border-hover` | `#cbd5e1` | hover 시 보더 |

---

## 3. Typography

### Font Stack
- **제목/라벨**: `"IBM Plex Sans", "Pretendard Variable", sans-serif` (weight 600-700)
- **본문**: `"IBM Plex Sans", "Pretendard Variable", sans-serif` (weight 400)
- **코드/기술 라벨**: `"JetBrains Mono", monospace` (weight 400-500)

### Hierarchy
| Element | Font | Size | Weight | Color |
|---------|------|------|--------|-------|
| 히어로 이름 | Sans | 48-72px | 700 | heading |
| 히어로 직함 | Sans | 18-20px | 500 | accent |
| 섹션 제목 | Sans | 28-32px | 700 | heading |
| 서브 헤딩 | Sans | 18-20px | 600 | heading |
| 본문 | Sans | 15-16px | 400 | body |
| 라벨 | Mono | 11-12px | 500 | muted |
| 태그 | Mono | 11px | 500 | accent |

### 규칙
- 안랩처럼 **sans-serif 중심**. 모노스페이스는 기술 라벨/태그/코드에만.
- 섹션 제목은 한글로 자연스럽게. "SEC.01" 넘버링은 유지하되 서브 라벨로.
- letter-spacing은 라벨에만 적용 (본문에는 기본값)

---

## 4. Layout

### 섹션 배경 교차 패턴 (안랩 스타일)
```
Nav         → 흰색 (고정, backdrop-blur)
Hero        → 흰색
About       → surface (#f7f9fc)
Skills      → 흰색
Projects    → surface (#f7f9fc)
Education   → 흰색
Contact     → surface (#f7f9fc)
Footer      → heading (#1a1f36) 다크 배경
```
이렇게 흰색/그레이를 교차하면 섹션 경계가 자연스럽게 구분됨.

### 최대 폭
- 콘텐츠: `max-w-6xl` (1152px)
- 읽기 중심: `max-w-4xl` (896px)
- 좌우 패딩: `px-6` (24px)

### 여백
- 섹션 간: `py-24` (96px)
- 블록 간: `gap-12` ~ `gap-16`
- 카드 내부: `p-6` ~ `p-8`

### 카드
- 배경: `#ffffff` (surface 위) 또는 `#f7f9fc` (흰 배경 위)
- 보더: `border border-border`
- 라운딩: `rounded-xl` (12px)
- 그림자: `shadow-sm` (0 1px 2px rgba(0,0,0,0.05))
- hover: `hover:shadow-md hover:border-border-hover transition`

---

## 5. Components

### 네비게이션
- 흰 배경 + backdrop-blur
- 로고: sans-serif bold, heading color
- 링크: body color, hover시 accent
- 고정 상단

### 버튼
- Primary: `bg-accent text-white rounded-lg px-6 py-3 hover:bg-accent-light shadow-sm`
- Secondary: `border border-border text-body rounded-lg px-6 py-3 hover:border-accent hover:text-accent`
- Ghost: `text-accent hover:bg-accent-dim rounded-lg px-4 py-2`

### 태그/뱃지
- 기술 스택: `bg-elevated text-body rounded-md px-3 py-1 text-sm font-mono`
- 수상: `bg-accent-dim text-accent border border-accent-border rounded-md px-3 py-1 font-semibold`
- 카테고리: `bg-accent text-white rounded-full px-3 py-0.5 text-xs`

### 타임라인 (프로젝트/교육)
- 세로선: `border-l-2 border-border` (안랩의 깔끔한 선 스타일)
- 노드: `w-3 h-3 rounded-full bg-accent border-2 border-white shadow-sm`
- 강조 노드: `w-4 h-4 bg-accent ring-4 ring-accent-dim`

### 스킬 표시
- 4-dot 시스템 유지하되 색상 변경
- 채움: `bg-accent`, 빈칸: `bg-border`

### PAR (Problem-Action-Result)
- 카드 내부에 배치
- 라벨: `danger` / `info` / `success` 시맨틱 컬러
- 아이콘이나 컬러 도트로 시각적 구분

---

## 6. Animation

### 원칙
안랩처럼 절제된 모션. 화려한 효과 없이 자연스러운 등장.

- **페이지 로드**: Hero 요소 staggered fade-in (delay 0.15s 간격)
- **스크롤**: 부드러운 fade-up (translateY: 20px → 0, duration 0.5s)
- **hover**: color/shadow transition (duration 200ms)
- **확장/축소**: height auto animate (duration 300ms)

### 금지
- 바운스, 스프링
- 큰 translateY (40px 이상)
- 스케일 효과
- 패럴랙스

---

## 7. Background

### 도트 그리드
유지하되 더 미세하게:
```css
background-image: radial-gradient(rgba(37, 99, 235, 0.03) 1px, transparent 1px);
background-size: 28px 28px;
```
opacity 50% 이하로. 안 보일 듯 말 듯.

### 히어로 글로우
극미세 블루 워시:
```css
background: radial-gradient(ellipse at 70% 50%, rgba(37, 99, 235, 0.03) 0%, transparent 60%);
```

---

## 8. Footer

안랩처럼 다크 배경 푸터:
- 배경: `#1a1f36` (heading 컬러)
- 텍스트: `#94a3b8` (밝은 회색)
- 링크 hover: `#ffffff`
- 소셜 아이콘: SVG, 회색 → 흰색 hover

---

## 9. 금지 목록

- [ ] 이모지 아이콘
- [ ] 네온 글로우 / 강한 box-shadow
- [ ] 그라데이션 텍스트
- [ ] 터미널 윈도우 크롬
- [ ] 과도한 모노스페이스 (라벨/태그만 허용)
- [ ] 지나치게 raw/stark한 느낌
- [ ] SaaS 히어로 패턴 (중앙 CTA + 부제)
- [ ] 보라색 그라데이션
- [ ] glassmorphism, neumorphism
- [ ] Inter, Roboto 폰트
