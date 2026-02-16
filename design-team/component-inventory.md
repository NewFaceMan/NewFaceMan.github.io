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
| `TerminalTyping` | 미사용 (레거시) | - |

---

## Section Components (`src/components/`)

| Component | Section | Key Pattern |
|-----------|---------|-------------|
| `CyberNav` | 네비게이션 | 고정 상단바, 모바일 햄버거 |
| `CyberHero` | 히어로 | staggered FadeIn, 데이터 리드아웃 |
| `CyberAbout` | 소개 | 번호 매긴 리스트, 라벨-값 테이블 |
| `CyberSkills` | 스킬 | 4-dot 레벨 시스템, 4열 그리드 |
| `CyberProjects` | 프로젝트 | 타임라인, 탭 필터, PAR 패턴 |
| `CyberEducation` | 교육 | 타임라인 |
| `CyberContact` | 연락처 | 라벨-값 쌍 |
| `CyberFooter` | 푸터 | 약어 링크 (GH, LI, BG) |
| `TracerDetail` | TRACER 상세 | 아키텍처 플로우, YouTube 임베드 |

---

## Recurring Patterns

### 섹션 헤더
```tsx
<div className="font-mono text-[11px] text-muted tracking-[0.3em] uppercase mb-12">
  SEC.{N} &mdash; {SECTION_NAME}
</div>
```

### 서브 라벨
```tsx
<div className="font-mono text-[11px] text-accent tracking-[0.2em] uppercase mb-5">
  {LABEL_TEXT}
</div>
```

### 타임라인 노드
```tsx
<div className="relative pl-10">
  <div className="absolute left-0 top-[5px] w-[15px] h-[15px] rounded-full border-2 border-accent/60 bg-bg" />
  {/* content */}
</div>
```

### 뱃지
```tsx
<span className="font-mono text-[10px] tracking-[0.15em] uppercase px-2 py-0.5 border border-accent/40 text-accent">
  {text}
</span>
```

### 버튼 (Primary)
```tsx
<a className="font-mono text-xs tracking-[0.15em] uppercase px-6 py-3 border border-accent text-accent hover:bg-accent hover:text-bg transition-all duration-200">
  {label}
</a>
```

### 불릿 리스트
```tsx
<li className="flex items-start gap-2">
  <span className="text-accent text-[10px] mt-1.5">&#9656;</span>
  <span>{text}</span>
</li>
```
