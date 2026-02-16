# Component Inventory

현재 사용 중인 공통 컴포넌트와 패턴 목록.
새 페이지/섹션 추가 시 이 목록의 컴포넌트를 우선 재사용할 것.

---

## Motion Components (`src/components/motion/`)

| Component | Usage | Props |
|-----------|-------|-------|
| `FadeIn` | 페이지 로드 시 순차 등장 (Hero) | `delay`, `duration` |
| `ScrollReveal` | 스크롤 시 등장 | `delay`, `direction`, `once` |
| `StaggerContainer` | 자식 순차 등장 래퍼 | `staggerInterval`, `once` |
| `StaggerItem` | StaggerContainer 내부 아이템 | - |
| `AnimatedCollapse` | 접기/펼치기 | `isOpen` |
| `CountUp` | 숫자 카운트업 | `value`, `suffix`, `prefix` |

---

## Section Components (`src/components/`)

| Component | Section | Key Pattern |
|-----------|---------|-------------|
| `CyberNav` | 네비게이션 | 고정 상단바, backdrop-blur, 모바일 햄버거 |
| `CyberHero` | 히어로 | staggered FadeIn, 태그 뱃지 |
| `CyberAbout` | 소개 | 번호 매긴 리스트, 프로필 카드, 자격증 카드 |
| `CyberSkills` | 스킬 | 4-dot 레벨 시스템, 4열 그리드 |
| `CyberProjects` | 프로젝트 | 타임라인, 탭 필터, PAR 패턴 |
| `CyberEducation` | 교육 | 타임라인 |
| `CyberContact` | 연락처 | 아이콘 카드 그리드 |
| `CyberFooter` | 푸터 | 다크 배경, 링크 |
| `TracerDetail` | TRACER 상세 | 아키텍처 플로우, YouTube 임베드, 결과 통계 |

---

## Background Layer (`src/app/page.tsx`)

페이지 배경 3 레이어 (모두 fixed, z-0, pointer-events-none):

```tsx
{/* 1. Blue gradient */}
<div className="fixed inset-0 pointer-events-none z-0"
  style={{ background: 'linear-gradient(135deg, #f0f4ff 0%, #ffffff 40%, #f0f7ff 70%, #e8f0fe 100%)' }}
/>

{/* 2. Dot grid */}
<div className="fixed inset-0 dot-grid pointer-events-none z-0 opacity-40" />

{/* 3. Floating orbs */}
<div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
  {/* 3개의 radial-gradient 원형, blur 90~120px, opacity 0.15~0.20 */}
</div>
```

---

## Recurring Patterns

### 섹션 헤더
```tsx
<p className="text-xs text-accent tracking-wider mb-2">01</p>
<h2 className="text-3xl font-bold text-heading mb-8">Section Title</h2>
```

### 라벨 (PAR 등)
```tsx
<span className="text-[11px] text-accent shrink-0 w-[70px] mt-0.5 tracking-wide font-medium">
  ACTION
</span>
```

### 카드
```tsx
<div className="bg-bg rounded-xl border border-border p-6 shadow-sm hover:shadow-md hover:border-[#cbd5e1] transition-all duration-200">
  {/* content */}
</div>
```

### 타임라인 노드
```tsx
<div className="relative pl-10">
  <div className="absolute left-0 top-[6px] w-3 h-3 rounded-full bg-accent" />
  {/* content */}
</div>
```

### 강조 타임라인 노드
```tsx
<div className="absolute left-0 top-[6px] w-4 h-4 rounded-full bg-accent ring-4 ring-accent-dim border-2 border-white shadow-sm" />
```

### 뱃지
```tsx
<span className="text-[11px] px-2.5 py-0.5 rounded-md bg-accent-dim text-accent border border-accent-border font-semibold">
  {text}
</span>
```

### 버튼 (Primary)
```tsx
<a className="text-sm font-semibold px-6 py-3 rounded-lg bg-accent text-white hover:bg-[#3b82f6] shadow-sm transition-all duration-200">
  {label}
</a>
```

### 버튼 (Secondary)
```tsx
<a className="text-sm font-semibold px-6 py-3 rounded-lg border border-border text-body hover:border-accent hover:text-accent transition-all duration-200">
  {label}
</a>
```

### 불릿 리스트
```tsx
<li className="flex items-start gap-2">
  <span className="text-accent mt-1">&#8226;</span>
  <span>{text}</span>
</li>
```

### 연락처 카드
```tsx
<a className="flex items-center gap-4 bg-bg rounded-xl border border-border p-5 shadow-sm hover:shadow-md hover:border-[#cbd5e1] transition-all duration-200 group">
  <div className="w-10 h-10 rounded-lg bg-accent-dim text-accent flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-colors">
    {icon}
  </div>
  <div>
    <div className="text-xs text-muted font-medium">{label}</div>
    <div className="text-sm text-heading group-hover:text-accent">{value}</div>
  </div>
</a>
```
