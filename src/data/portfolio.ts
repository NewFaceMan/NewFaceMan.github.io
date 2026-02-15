export const profile = {
  name: "박상우",
  title: "DFIR & Security Engineer",
  description:
    "디지털 포렌식과 침해사고 대응을 중심으로, Python 기반 보안 도구 개발과 AI를 활용한 분석 자동화를 연구하는 보안 엔지니어입니다.",
  email: "polygun1207@naver.com",
  github: "https://github.com/NewFaceMan",
  linkedin:
    "https://www.linkedin.com/in/%EC%83%81%EC%9A%B0-%EB%B0%95-6b8269300/",
  blog: "https://velog.io/@dipping/posts",
};

export const about = {
  valueProposition:
    "아티팩트 분석 자동화와 데이터 기반 위협 추적으로, 침해사고 대응의 최전선에 서고자 하는 보안 엔지니어입니다.",
  keyStrengths: [
    {
      label: "아티팩트 분석 자동화",
      detail:
        "21종 Windows 아티팩트의 인과관계를 룰 기반으로 자동 연결하는 TRACER 설계 (최우수상)",
    },
    {
      label: "보안 도구 개발",
      detail:
        "Python + AI로 보안 뉴스 수집, CVE 모니터링, DFIR 학습을 자동화하는 봇 2종 개발",
    },
    {
      label: "빠른 기술 습득 + 자동화",
      detail:
        "새로운 기술(Google API, Gemini AI)을 독학으로 익혀 반복 업무 자동화 도구 완성",
    },
  ],
  highlights: [
    "토스뱅크 부트캠프 프로젝트 경진대회 최우수상 수상",
    "TRACER 프로젝트 팀장 - 5인 팀, 기여도 ~35% (주제 선정 + 핵심 룰셋 설계 + 프로젝트 관리)",
    "보안 컨퍼런스 12회+ 참석 (K-DFS, CODEGATE, SANS 등)",
    "정보보안 동아리 KIS 회장 - 학술동아리 경진대회 우수상 수상",
  ],
};

export interface ProjectTroubleshooting {
  issue: string;
  process: string;
  resolution: string;
}

export interface Project {
  id: string;
  category: "DFIR" | "AI Agent";
  title: string;
  subtitle: string;
  period: string;
  role: string;
  teamSize?: string;
  contribution?: string;
  techStack: string[];
  features: string[];
  github?: string;
  demo?: string;
  image?: string;
  award?: string;
  problem: string;
  action: string;
  result: string;
  troubleshooting: ProjectTroubleshooting[];
  jobRelevance: string;
}

export const projects: Project[] = [
  {
    id: "tracer",
    category: "DFIR",
    title: "TRACER",
    subtitle:
      "침해사고 아티팩트 간 인과관계를 자동으로 연결하는 Windows 포렌식 분석 도구",
    period: "2025.12 ~ 2026.02",
    role: "팀장 (Back-end Lead)",
    teamSize: "5인 팀",
    contribution: "~35% (주제 선정, 핵심 룰셋 설계, PM)",
    techStack: [
      "Python",
      "FastAPI",
      "Velociraptor",
      "VQL",
      "Vis.js",
      "Sigma Rule",
      "MITRE ATT&CK",
    ],
    features: [
      "아티팩트 간 인과관계 자동 연결 룰 엔진 설계 및 구현 (시간/속성 기반 매칭)",
      "14개→21개 아티팩트 확장 (BAM, SRUM, AppCompatCache, RDP History, PSReadline 등)",
      "Sigma Rule 기반 탐지 로직 구현 및 MITRE ATT&CK TTP 매핑",
      "LLM 기반 사고 대응 보고서 자동 생성 프롬프트 설계",
      "PM: 프로젝트 주제 선정, 아키텍처 설계, 스프린트 일정 수립, 작업 분배 및 진행 관리",
    ],
    award: "토스뱅크 부트캠프 프로젝트 경진대회 최우수상 (2026.02)",
    problem:
      "실제 침해사고 분석 시 아티팩트 간 연관성을 수동으로 분석하면 시간이 오래 걸리고, 분석가의 경험에 따라 결과가 달라지는 비효율이 존재",
    action:
      "팀장으로서 주제 선정부터 아키텍처 설계, 스프린트 일정 수립 및 작업 분배를 주도. 직접 핵심 룰 엔진을 설계하여 21종 Windows 아티팩트의 인과관계를 자동 연결하고, Sigma Rule 기반 탐지와 MITRE ATT&CK 매핑으로 공격 단계를 분류. 주간 회의 진행 및 이슈 트래킹으로 5인 팀의 개발 진행 관리",
    result:
      "토스뱅크 부트캠프 경진대회 최우수상 수상. 아티팩트 연결 자동화로 수동 대비 분석 시간 단축, 14→21종 아티팩트 커버리지 50% 확장",
    troubleshooting: [
      {
        issue: "아티팩트 간 타임스탬프 형식 불일치로 연결 실패",
        process:
          "각 아티팩트의 시간 형식을 조사한 결과, UTC/로컬/파일시스템 시간 등 5가지 이상의 형식이 혼재. 정규화 레이어를 설계하여 모든 시간을 UTC ISO 8601로 통일",
        resolution:
          "타임스탬프 정규화 모듈 구현으로 아티팩트 간 시간 기반 연결 정확도 확보",
      },
      {
        issue: "룰 엔진 성능 저하 - 아티팩트 조합 폭증",
        process:
          "21종 아티팩트의 모든 조합을 검사하면 O(n²) 복잡도로 대규모 데이터에서 지연 발생. 시간 윈도우 기반 사전 필터링과 아티팩트 타입별 연결 가능 매트릭스를 도입",
        resolution:
          "사전 필터링으로 불필요한 비교를 제거하여 처리 시간 개선",
      },
    ],
    jobRelevance:
      "DFIR 실무의 핵심인 아티팩트 분석/연결을 자동화한 경험으로, 침해사고 대응 시 신속한 분석과 체계적인 보고서 작성 역량 보유",
  },
  {
    id: "security-bot",
    category: "AI Agent",
    title: "Security Bot",
    subtitle: "보안 뉴스 수집부터 CVE 모니터링, DFIR 학습까지 자동화하는 Telegram 봇",
    period: "2026.01",
    role: "개인 프로젝트 (기획/설계/개발 전담)",
    techStack: ["Python", "Telegram API", "Gemini AI", "RSS", "NVD API"],
    features: [
      "보안 뉴스 자동 수집 및 AI 요약 (The Hacker News, BleepingComputer 등 RSS 파싱)",
      "CVE 모니터링 - CVSS 7.0+ 고위험 취약점 자동 알림 (NVD API 연동)",
      "DFIR 퀴즈 엔진 - 6개 분야(포렌식, 악성코드, 네트워크 등) AI 생성 문제",
      "보안 도구 가이드 (Volatility, Wireshark, YARA 사용법 AI 응답)",
    ],
    problem:
      "보안 뉴스, CVE, 학습 자료가 여러 사이트에 분산되어 매일 확인하는 데 시간이 소요되고, 체계적인 DFIR 학습 루틴이 부재",
    action:
      "RSS 피드와 NVD API를 연동하여 보안 정보를 자동 수집하고, Gemini AI로 뉴스 요약과 DFIR 퀴즈를 생성하는 Telegram 봇을 개발. 6개 분야별 맞춤 학습 시스템 구현",
    result:
      "일일 보안 뉴스 확인 시간 절약, CVSS 7.0+ 취약점 실시간 알림으로 위협 대응 속도 향상, 일일 퀴즈로 DFIR 학습 루틴 정착",
    troubleshooting: [
      {
        issue: "RSS 피드 파싱 시 인코딩 오류 및 불완전한 HTML 태그",
        process:
          "일부 RSS 소스에서 비표준 인코딩과 깨진 HTML이 포함된 데이터 수신. feedparser + BeautifulSoup 조합으로 데이터 정제 파이프라인 구성",
        resolution:
          "다단계 정제 로직으로 안정적인 뉴스 파싱 및 AI 요약 파이프라인 확보",
      },
    ],
    jobRelevance:
      "위협 인텔리전스 수집/자동화 역량 및 최신 보안 동향 모니터링 습관 증명. DFIR 분야의 지속적 학습 의지 입증",
  },
  {
    id: "jarvis-bot",
    category: "AI Agent",
    title: "Jarvis Bot",
    subtitle:
      "자연어로 일정을 관리하는 AI 개인 비서 - 새로운 기술 독학 및 자동화 마인드셋",
    period: "2026.01",
    role: "개인 프로젝트 (기획/설계/개발 전담)",
    techStack: ["Python", "Telegram API", "Google Calendar API", "Gemini AI"],
    features: [
      "Gemini AI 기반 자연어 처리로 일정 등록/수정/삭제 자동화",
      "Google Calendar API 연동 - OAuth 2.0 인증 및 실시간 동기화 구현",
      "스마트 알림 시스템 - 아침 브리핑, 일정 전 리마인더 자동 발송",
      "대화형 인터페이스 - 맥락을 이해하는 자연스러운 일정 관리",
    ],
    problem:
      "반복적인 일정 관리 작업(캘린더 앱 실행, 수동 입력)에 시간이 소요되고, 여러 일정 알림을 놓치는 경우 빈번",
    action:
      "처음 접하는 Google Calendar API와 OAuth 2.0을 독학으로 습득하고, Gemini AI로 자연어를 파싱하여 일정을 자동 관리하는 Telegram 봇을 설계/개발",
    result:
      "일정 등록 시간 단축 (자연어 한 줄로 완료), 스마트 알림으로 일정 누락 방지, Google API + AI 연동 기술 스택 습득",
    troubleshooting: [
      {
        issue: "Google OAuth 2.0 토큰 갱신 실패로 봇 중단",
        process:
          "refresh_token 만료 조건과 Google OAuth 정책을 조사. 토큰 갱신 로직에 자동 재인증 플로우를 추가하고, 토큰 상태 모니터링 구현",
        resolution:
          "자동 토큰 갱신 + 실패 시 재인증 알림으로 봇 24/7 안정 운영 확보",
      },
    ],
    jobRelevance:
      "새로운 기술(API, AI)을 빠르게 독학하여 실무 도구로 완성하는 자기주도 학습 역량. 반복 업무 자동화 마인드셋 증명",
  },
];

export interface Skill {
  category: string;
  items: {
    name: string;
    level: "beginner" | "intermediate" | "advanced" | "expert";
    description?: string;
  }[];
}

export const skills: Skill[] = [
  {
    category: "Digital Forensics",
    items: [
      {
        name: "Windows Forensics",
        level: "advanced",
        description: "아티팩트 분석, TRACER 도구 개발",
      },
      {
        name: "Memory Forensics",
        level: "intermediate",
        description: "Volatility 활용 메모리 분석",
      },
      {
        name: "Linux Forensics",
        level: "intermediate",
        description: "리눅스 아티팩트 분석",
      },
      {
        name: "Malware Analysis",
        level: "intermediate",
        description: "악성코드 정적/동적 분석",
      },
    ],
  },
  {
    category: "Security Tools",
    items: [
      {
        name: "Volatility",
        level: "intermediate",
        description: "메모리 포렌식 분석 도구",
      },
      {
        name: "Wireshark",
        level: "intermediate",
        description: "네트워크 패킷 분석",
      },
      {
        name: "YARA",
        level: "intermediate",
        description: "악성코드 시그니처 탐지 규칙",
      },
    ],
  },
  {
    category: "Programming",
    items: [
      {
        name: "Python",
        level: "advanced",
        description: "보안 도구 개발, 자동화, API 연동",
      },
      { name: "C", level: "intermediate", description: "시스템 프로그래밍" },
      { name: "SQL", level: "intermediate", description: "데이터베이스 쿼리" },
      {
        name: "PowerShell",
        level: "intermediate",
        description: "윈도우 스크립팅",
      },
    ],
  },
  {
    category: "Infrastructure",
    items: [
      { name: "Linux", level: "intermediate", description: "서버 운영 및 관리" },
      { name: "Docker", level: "beginner", description: "컨테이너 기초" },
      {
        name: "Network",
        level: "intermediate",
        description: "네트워크 보안 분석",
      },
    ],
  },
];

export const certifications = [
  { name: "정보처리기사", status: "필기 합격" },
  { name: "디지털 포렌식 전문가 2급", status: "필기 합격" },
  { name: "네트워크 관리사 2급", status: "필기 합격" },
  { name: "정보보안기사", status: "필기 합격" },
];

export const education = [
  {
    institution: "토스뱅크 사이버보안 엔지니어 부트캠프(공격&방어 기술)",
    organizer: "멀티캠퍼스 / Toss Bank",
    period: "2025.09 ~ 2026.02",
    note: "수료, 최우수상",
  },
  {
    institution: "2025 국가 사이버 안보 아카데미",
    organizer: "한국사이버안보학회",
    period: "2025.07 ~ 2025.08",
    note: "수료",
  },
  {
    institution: "2025 청년 갭이어 프로그램",
    organizer: "경기도청년미래재단",
    period: "2025.06 ~ 2025.11",
    note: "수료",
  },
  {
    institution: "K-Shield 주니어 기초과정 2차",
    organizer: "KISA",
    period: "2025.02 ~ 2025.03",
    note: "수료",
  },
  {
    institution: "KISA 사이버 포렌식 보안솔루션 교육",
    organizer: "한국인터넷진흥원",
    period: "2024",
    note: "수료",
  },
];

export const contact = {
  email: "polygun1207@naver.com",
  message:
    "프로젝트, CTF 팀 등 보안 관련 문의는 언제든 환영합니다!",
};

export const profileDetail = {
  university: "강남대학교 소프트웨어응용학부 4학년",
  universityPeriod: "2020.03 ~ 2026.08 (졸업예정)",
  military: "공군 병장 만기전역",
  militaryPeriod: "2021.04 ~ 2023.01",
  activities: [
    "강남대학교 정보보안 동아리 KIS 회장 (학술동아리 경진대회 우수상)",
    "HDF LAB 활동",
  ],
};

export const conferences = [
  { name: "K-DFS (디지털 포렌식 학회)", count: 2 },
  { name: "CODEGATE", count: 2 },
  { name: "SANS Korea Summit", count: 1 },
  { name: "사이버안보 컨퍼런스 (CONCERT)", count: 1 },
  { name: "KRnet", count: 1 },
  { name: "KISA 사이버보안 컨퍼런스", count: 1 },
  { name: "디지털 포렌식 챌린지 발표회", count: 1 },
  { name: "금융정보보호 컨퍼런스 (FISCON)", count: 1 },
  { name: "세계보안엑스포 (SECON)", count: 1 },
  { name: "국가 사이버안보 아카데미 컨퍼런스", count: 1 },
];

export const ctf = [
  { name: "2024 디지털 포렌식 챌린지", note: "본선 진출" },
  { name: "2024 사이버보안 AI 빅데이터 챌린지", note: "참가" },
  { name: "CTFd 연습 (CTFlearn, CyberDefenders)", note: "상시" },
];

export const tracerDetail = {
  background:
    "토스뱅크 사이버보안 엔지니어 부트캠프 최종 프로젝트로, 실제 침해사고 분석 시 아티팩트 간 연관성을 수동으로 분석하는 비효율을 해결하기 위해 개발했습니다. Velociraptor로 수집한 Windows 아티팩트를 자동 파싱하고, 아티팩트 간 인과관계를 룰 기반으로 연결하여 타임라인과 관계 그래프를 시각화합니다.",
  role: "팀장 (Back-end Lead, 5인 팀, 기여도 ~35%)",
  contributions: [
    "프로젝트 주제 선정 및 전체 아키텍처 설계",
    "스프린트 일정 수립, 작업 분배 및 주간 회의 주도",
    "아티팩트 연결 룰 설계 및 구현 (14→21개 아티팩트)",
    "Sigma Rule 기반 탐지 로직 구현 + MITRE ATT&CK TTP 매핑",
    "이슈 트래킹 및 팀원 코드 리뷰를 통한 품질 관리",
    "LLM 기반 자동 보고서 프롬프트 설계",
  ],
  architecture: [
    { name: "Velociraptor", label: "Agent Collector" },
    { name: "VQL Collection", label: "Data Gathering" },
    { name: "FastAPI Parser", label: "Core Engine" },
    { name: "Rule Engine", label: "Threat Detection" },
    { name: "Vis.js Graph", label: "Visualization" },
  ],
  detailFeatures: [
    {
      title: "아티팩트 인과관계 분석",
      icon: "🔬",
      description:
        "21종 Windows 아티팩트의 시간/속성 기반 인과관계 자동 추출 및 신뢰도 레벨(High/Medium/Low) 제시",
    },
    {
      title: "위협 인텔리전스 연동",
      icon: "🛡️",
      description:
        "MISP, VirusTotal API 연동으로 Hash/IP 기반 IOC 자동 조회 및 위험도 평가",
    },
    {
      title: "MITRE ATT&CK 시각화",
      icon: "📡",
      description:
        "탐지된 악성 행위를 MITRE ATT&CK 매트릭스의 TTP에 자동 매핑하여 공격 단계별 분류",
    },
    {
      title: "LLM 보고서 생성",
      icon: "✨",
      description:
        "분석된 기술 데이터를 LLM에 전달하여 전문가 수준의 사고 대응 보고서 초안 자동 생성",
    },
  ],
  results: [
    { icon: "🏆", label: "Award", value: "최우수상 수상" },
    { icon: "📊", label: "Scope", value: "21개 아티팩트" },
    { icon: "⚡", label: "Efficiency", value: "분석 자동화" },
  ],
};
