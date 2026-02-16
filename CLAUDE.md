# Portfolio Project Instructions

## Design Team

모든 프론트엔드/디자인 작업 시 반드시 `design-team/` 폴더를 참조할 것.

- `design-team/design-guidelines.md` — 컬러, 타이포, 레이아웃, 애니메이션, 금지 목록
- `design-team/component-inventory.md` — 공통 컴포넌트, 패턴 코드 스니펫
- `design-team/assets/` — 레퍼런스 이미지 (추가 시)

새 페이지/컴포넌트 추가 시:
1. 가이드라인의 컬러/타이포/패턴을 따를 것
2. component-inventory의 기존 패턴을 우선 재사용
3. 새 공통 컴포넌트가 생기면 component-inventory 업데이트
4. 금지 목록 항목 위반 금지

## Tech Stack

- Next.js 16 (App Router, Static Export)
- React 19, TypeScript 5
- Tailwind CSS 4
- shadcn/ui (컴포넌트 라이브러리)
- Framer Motion 12

## Data

- 모든 포트폴리오 콘텐츠: `src/data/portfolio.ts` (단일 소스)
- 데이터 수정 요청이 아닌 한 이 파일은 건드리지 않을 것
