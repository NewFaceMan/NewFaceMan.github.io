export const profile = {
  name: "박상우",
  title: "CERT & DFIR Analyst 지망",
  description:
    "공격자의 관점을 이해하고, 빠르고 체계적인 사고 대응과 반복 업무의 자동화를 추구하는 CERT 분석가가 되고자 합니다.",
  email: "polygun1207@naver.com",
  github: "https://github.com/NewFaceMan",
  linkedin:
    "https://www.linkedin.com/in/%EC%83%81%EC%9A%B0-%EB%B0%95-6b8269300/",
  blog: "https://velog.io/@dipping/posts",
};

export const about = {
  narrative:
    "취약한 환경을 직접 구축하고 공격 시나리오를 설계·실행한 뒤 그 흔적을 추적하며, 공격자의 관점에서 방어를 설계하는 분석 습관을 체득했습니다. 기술적으로 \"어떻게 뚫렸는가\"를 분석하는 것을 넘어, \"왜 이 시점에 이 조직이 타깃이 되었는가\"까지 질문하는 분석가로 성장하고 있습니다.",
  valueProposition:
    "공격자의 관점을 이해하고, 빠르고 체계적인 사고 대응과 반복 업무의 자동화를 추구하는 CERT 분석가가 되고자 합니다.",
  keyStrengths: [
    {
      label: "공격자 관점의 위협 분석",
      detail:
        "Lazarus/Kimsuky TTP를 분석하여 APT 공격 시나리오(피싱→C2→유출)를 설계하고, 각 단계별 흔적이 남는 아티팩트를 식별하며 공격-방어 양면의 분석력 체득",
    },
    {
      label: "아티팩트 기반 인과관계 분석 자동화",
      detail:
        "21종 Windows 아티팩트의 경로 정규화, 신뢰도 기반 룰 엔진으로 인과관계를 자동 연결하는 TRACER 핵심 로직 설계 (최우수상)",
    },
    {
      label: "기술적 How + 전략적 Why",
      detail:
        "국가사이버안보 아카데미에서 위협 인텔리전스 관점을 확장, 개별 사고를 넘어 캠페인 단위의 지정학적 맥락까지 분석",
    },
    {
      label: "Python 기반 반복 업무 자동화",
      detail:
        "Python 기반 AI Agent를 설계하여 보안 뉴스 수집, CVE 모니터링, 학습 워크플로우 등 반복 운영 업무를 자동화",
    },
  ],
  highlights: [
    "토스뱅크 부트캠프 프로젝트 경진대회 최우수상 수상",
    "TRACER 프로젝트 팀장 - 5인 팀, 기여도 ~35% (주제 선정 + 핵심 룰셋 설계 + PM)",
    "APT 그룹 침해사고 보고서 79건 분석 및 MITRE ATT&CK 매핑",
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
      "Vue 3",
      "Velociraptor",
      "VQL",
      "Vis.js",
      "Sigma Rule",
      "MITRE ATT&CK",
    ],
    features: [
      "Rule 엔진 설계: YAML 기반 약 95개 연결 규칙(Sysmon 35개 + Non-Sysmon 60개). Sysmon 환경은 ProcessGuid 기반 확정적 인과관계, Non-Sysmon 환경은 신뢰도(h/m/l) 계층 구조 + auto_expand 연쇄 탐색으로 상관관계 연결",
      "21종 아티팩트 연결 기준: ProcessGuid, PID, 파일 경로(=/LIKE), MFT Entry ID, 타임스탬프 순서, LogonId, USN Reason, CommandLine, URL/Domain 등 14종 조건식 기반 매칭",
      "Sigma Rule 탐지 + ATT&CK 매핑: Sigma 룰 매칭 → ATT&CK ID 자동 태깅 → APT 보고서 79건 기반 Jaccard 유사도로 APT 그룹 프로파일링",
      "LLM 보고서 자동 생성: 그래프 데이터 + 탐지 결과 + 타임라인 → LLM(Gemini/Ollama) SSE 스트리밍 → 사건 개요, IOC 목록, ATT&CK 매핑 테이블, 대응 권고사항 출력",
      "PM: 5인 팀 리드, 3번의 주제 폐기 후 방향 재설정, 일일 진행 상황 투명 공유 체계 구축",
    ],
    award: "토스뱅크 부트캠프 프로젝트 경진대회 최우수상 (2026.02)",
    problem:
      "수동 분석 시 분석가 간 편차 발생:\n1. 아티팩트 누락 — Prefetch-MFT 연결을 놓쳐 실행 이력 미탐지\n2. 미탐 — 악성 프로세스의 네트워크 연결을 정상으로 오판\n3. 시간 편차 — 숙련도에 따라 약 2시간~8시간 이상 차이",
    action:
      "[Engineer]\n1. YAML 기반 약 95개 연결 규칙 설계(Sysmon 35개 + Non-Sysmon 60개) → 21종 아티팩트 인과관계 자동 연결\n2. BFS 그래프 빌더에서 6종 인덱스 기반 후보 탐색으로 O(n²) → O(n·k) 복잡도 개선\n3. 21종 아티팩트 경로 정규화 로직 구현 (Device Path, 드라이브 레터, UNC 경로 통합)\n4. Sigma Rule 기반 탐지 + MITRE ATT&CK 매핑으로 Kill Chain 단계 자동 분류\n[PM]\n5. 5인 팀 리드, 3번의 주제 폐기 후 방향 재설정\n6. 일일 진행 상황 투명 공유 체계 구축",
    result:
      "1. 토스뱅크 부트캠프 경진대회 최우수상 수상\n2. 수동 분석 대비 약 70% 시간 단축 추정 (수동 약 8시간 → TRACER 약 2~3분)\n3. 14→21종 아티팩트 확장 → 파일리스 공격의 초기 유입(T1566)~지속성 확보(T1547) Kill Chain 전 단계 커버리지 달성",
    troubleshooting: [
      {
        issue:
          "아티팩트 간 타임스탬프 형식 불일치 및 경로 표기 불일치로 연결 실패",
        process:
          "혼재 형식 발견:\n1. 시간 — ISO 8601, Unix Epoch 초/밀리초, Windows FILETIME, 문자열 등 5가지\n2. 경로 — \\Device\\HarddiskVolume3\\..., C:\\..., \\VOLUME{...}\\..., 대소문자 혼재 등 4가지\n예: Sysmon은 ISO 8601, $MFT는 Windows FILETIME(100나노초 단위), BAM은 Device Path\n→ 정규화 레이어를 설계하여 모든 시간을 UTC datetime, 모든 경로를 소문자+슬래시 통일",
        resolution:
          "1. 타임스탬프 5종 자동 감지·정규화 모듈 구현\n2. 경로 정규화 모듈 구현\n예: \\Device\\HarddiskVolume3\\Windows\\System32\\cmd.exe → c:/windows/system32/cmd.exe",
      },
      {
        issue:
          "룰 엔진 성능 저하 - 아티팩트 전수 비교 O(n²) 복잡도",
        process:
          "1. 전수 비교 시 1,000개 아티팩트 기준 1,000,000번 비교 발생\n2. 아티팩트를 6종 인덱스로 사전 분류: by_type, ProcessGuid, PID, 파일 경로, MFT Entry, EventID\n3. 룰의 source_type/target_type에 해당하는 후보만 탐색하도록 개선",
        resolution:
          "1. 인덱스 기반 후보 필터링으로 비교 횟수 약 20배 감소 (1,000개 기준: 1,000,000번 → 약 50,000번)\n2. 실질적 복잡도 O(n²) → O(n·k) 개선",
      },
    ],
    jobRelevance:
      "DFIR 실무 직접 적용 가능:\n1. 초동 대응 — Velociraptor로 21종 아티팩트 원격 수집·즉시 분석\n2. 타임라인 구성 — 5가지 시간 형식 자동 정규화\n3. IOC 추출 — MISP/VT 연동 자동 식별\n4. 보고서 — LLM 기반 초안 자동 생성\n5. TTP 분석 — ATT&CK 자동 매핑으로 공격 그룹 프로파일링",
  },
  {
    id: "security-bot",
    category: "AI Agent",
    title: "Security Bot",
    subtitle: "보안 뉴스 수집부터 CVE 모니터링, DFIR 학습까지 자동화하는 Telegram 봇",
    period: "2026.01",
    role: "개인 프로젝트 (기획/설계/개발 전담)",
    techStack: ["Python", "Telegram API", "Gemini AI", "RSS", "NVD API", "APScheduler", "async"],
    features: [
      "보안 뉴스 자동 수집 및 AI 요약 (The Hacker News, BleepingComputer 등 RSS 파싱)",
      "CVE 모니터링 — CVSS 7.0+ 고위험 취약점 자동 알림 (NVD API 연동), AI가 3줄 요약/대처 방안/학습 포인트로 자동 구조화",
      "DFIR 퀴즈 엔진 — 6개 분야(포렌식, 악성코드, 네트워크 등) AI 생성 문제",
      "구조: Gemini를 Intent Classifier로 활용한 자연어 ACTION 라우팅 방식",
    ],
    problem:
      "1. 보안 뉴스, CVE, 학습 자료가 여러 사이트에 분산 → 매일 확인하는 데 시간 소요\n2. 체계적인 DFIR 학습 루틴 부재",
    action:
      "1. RSS 피드 + NVD API 연동하여 보안 정보 자동 수집\n2. Gemini AI로 뉴스 요약 + DFIR 퀴즈 생성하는 Telegram 봇 개발\n3. 6개 분야별 맞춤 학습 시스템 구현\n4. NVD CVE 원시 데이터를 AI가 3줄 요약/대처 방안/학습 포인트로 자동 구조화",
    result:
      "1. 6개 소스 수동 확인(~30분) → 오전 9시 자동 브리핑 1건으로 대체\n2. CVSS 9.0+ 긴급 CVE 발생 시 AI 분석 포함 실시간 알림\n3. 6개 분야 37개 문항 기반 일일 DFIR 학습 루틴 정착",
    troubleshooting: [
      {
        issue:
          "Gemini 라이브러리 deprecated 전환 시 타 환경에서 인증 오류 발생",
        process:
          "1. google.generativeai 패키지 지원 종료로 google.genai로 마이그레이션 수행\n2. 개발 PC에서는 정상 동작했으나, 다른 PC에서 invalid_grant: Token has been expired or revoked 오류 발생\n3. API Key 방식인데 OAuth 에러가 발생하는 모순 → SDK가 시스템에 캐시된 Google OAuth 토큰을 API Key보다 우선 참조하는 동작 확인",
        resolution:
          "캐시된 OAuth credential(application_default_credentials.json) 제거로 해결, 환경별 인증 충돌 원인과 해결법을 배포 가이드에 문서화하여 재발 방지",
      },
      {
        issue:
          "Telegram에서 AI 응답 메시지가 깨지거나 전송 실패",
        process:
          "1. Gemini AI 응답에 **굵은글씨**, ## 제목, ``` 코드블록 등 Markdown 문법이 포함\n2. Telegram Bot API의 parse_mode='Markdown' 파서가 불완전한 Markdown을 파싱 실패 → 메시지 전송 에러\n3. Markdown 파서 제거만으로는 해결 불가 — AI가 계속 Markdown을 생성하는 근본 원인 존재",
        resolution:
          "이중 대응: parse_mode 파라미터 제거 + 모든 AI 프롬프트에 \"마크다운 사용 금지, 일반 텍스트로만 작성\" 제약 조건 추가하여 출력 형식 통제",
      },
    ],
    jobRelevance:
      "1. CVE 모니터링 자동화로 취약점 관리 체계 구축 경험\n2. Python으로 반복 수집·알림 업무를 자동화하는 실무 역량 증명",
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
      "Google Calendar 웹/앱에서 일정 등록 시 여러 단계를 거쳐야 하는 비효율",
    action:
      "1. Google Calendar API + OAuth 2.0을 독학하여 연동\n2. Gemini AI로 자연어 → 일정 데이터(제목/날짜/시간) 자동 파싱\n3. Telegram 봇으로 \"내일 3시 면접\" 한 줄 입력만으로 등록 완료",
    result:
      "1. 일정 등록 과정을 자연어 한 줄로 단축\n2. OAuth 2.0 인증 플로우 및 Google API 연동 실무 역량 확보",
    troubleshooting: [],
    jobRelevance: "",
  },
];

export interface SkillRow {
  category: string;
  skill: string;
  experience: string;
  level: "core" | "experience";
}

export const skills: SkillRow[] = [
  {
    category: "Language",
    skill: "Python, YAML",
    experience:
      "아티팩트 파싱, Rule 엔진, 자동화 스크립트 개발 / TRACER 탐지 규칙 정의 및 설계",
    level: "core",
  },
  {
    category: "Framework",
    skill: "MITRE ATT&CK",
    experience:
      "APT 보고서 79건 분석 후 기법 매핑, Jaccard 유사도 기반 APT 그룹 프로파일링",
    level: "core",
  },
  {
    category: "Language",
    skill: "JavaScript, Vue 3",
    experience:
      "TRACER 프론트엔드 개발 (Vis.js 그래프 시각화, Pinia 상태 관리)",
    level: "experience",
  },
  {
    category: "DFIR",
    skill: "Velociraptor (VQL)",
    experience:
      "21종 아티팩트 수집 커스터마이징, Device Path → 드라이브 레터 경로 정규화 로직 구현",
    level: "experience",
  },
  {
    category: "DFIR",
    skill: "FTK Imager, HxD 등",
    experience: "MFT, Prefetch, BAM, USN Journal 등 21종 아티팩트 분석",
    level: "experience",
  },
  {
    category: "Offensive",
    skill: "Metasploit",
    experience:
      "Lazarus/Kimsuky TTP 분석 기반 APT 공격 시나리오 설계 및 단계별 아티팩트 매핑",
    level: "experience",
  },
];

export const certifications = [
  { name: "정보처리기사", status: "필기 합격 · 실기 4월 예정" },
  { name: "디지털 포렌식 전문가 2급", status: "필기 합격 · 실기 6/13 예정" },
  { name: "네트워크 관리사 2급", status: "필기 합격" },
  { name: "정보보안기사", status: "필기 합격 · 실기 7~8월 예정" },
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
  message: "",
};

export const profileDetail = {
  education: "강남대학교 ICT융합공학부 소프트웨어전공 학사 예정 (2026.08)",
  military: "공군 병장 만기전역 (2021.06.14 ~ 2023.03.13)",
  activities: [
    "강남대학교 정보보안 동아리 KIS 회장 (학술동아리 경진대회 우수상)",
    "HDF LAB 활동 (2025.06 ~)",
  ],
};


export const ctf = [
  { name: "2024 디지털 포렌식 챌린지", note: "본선 진출" },
  { name: "2024 사이버보안 AI 빅데이터 챌린지", note: "참가" },
  { name: "CTFd 연습 (CTFlearn, CyberDefenders)", note: "상시" },
];

export interface SecurityExperienceItem {
  id: string;
  category: string;
  title: string;
  description: string;
  tools: string[];
  outcome: string;
}

export const securityExperience: SecurityExperienceItem[] = [
  {
    id: "apt-analysis",
    category: "Threat Intelligence",
    title: "APT 보고서 79건 분석 및 MITRE ATT&CK 매핑",
    description:
      "토스뱅크 부트캠프에서 APT 그룹별 침해사고 보고서 79건을 분석하고, 공격 기법을 MITRE ATT&CK 프레임워크에 매핑. 그룹별 TTP 패턴을 정리하여 TRACER의 Jaccard 유사도 기반 APT 프로파일링 데이터로 활용",
    tools: ["MITRE ATT&CK", "Threat Report"],
    outcome:
      "공격 기법별 탐지 포인트 도출, 보안 장비 탐지 규칙 설계 시 활용 가능한 위협 분석 관점 확보",
  },
  {
    id: "attack-simulation",
    category: "Attack Simulation",
    title: "APT-Style 공격 시나리오 설계 및 아티팩트 매핑",
    description:
      "토스뱅크 부트캠프에서 Lazarus/Kimsuky TTP를 분석하여 APT 공격 시나리오를 설계. 피싱(급여명세서 위장) → 프로세스 마스커레이딩(svchost.exe) → Telegram C2(HTTPS 방화벽 우회) → 데이터 유출 순서로 Kill Chain을 구성하고, 각 단계별 흔적이 남는 Windows 아티팩트를 식별",
    tools: ["MITRE ATT&CK", "Python", "Telegram API"],
    outcome:
      "각 Kill Chain 단계별 증거 수집 포인트 식별 — Sysmon EID 1(프로세스 생성), Prefetch(실행 흔적), $MFT(파일 생성), DNS 쿼리 로그 등",
  },
  {
    id: "sigma-rule",
    category: "Threat Detection",
    title: "SigmaHQ 룰 연동 탐지 엔진 구현",
    description:
      "TRACER 프로젝트에서 SigmaHQ 오픈소스 룰셋을 연동하여 탐지 엔진을 구현. EventID 기반 인덱싱 → modifier 매칭(contains/endswith/startswith) → condition 평가(1 of/all of/and/or/not) 파이프라인으로 악성 행위 자동 탐지",
    tools: ["SigmaHQ", "YAML", "MITRE ATT&CK", "Python"],
    outcome:
      "오픈소스 탐지 룰을 파싱·실행하는 엔진 구현 경험 확보",
  },
  {
    id: "cve-monitoring",
    category: "Vulnerability Monitoring",
    title: "CVE 모니터링 자동화 시스템 구축",
    description:
      "NVD API를 연동하여 CVSS 7.0 이상 고위험 취약점을 실시간 모니터링하고, AI 요약과 함께 Telegram으로 자동 알림하는 시스템을 Security Bot에 구현",
    tools: ["NVD API", "Python", "Gemini AI", "Telegram API"],
    outcome:
      "고위험 CVE 실시간 인지 체계 구축, 보안 장비 패치·정책 반영 판단에 활용 가능한 모니터링 체계 확보",
  },
];

export const tracerDetail = {
  background:
    "토스뱅크 사이버보안 엔지니어 부트캠프 최종 프로젝트로, 실제 침해사고 분석 시 아티팩트 간 연관성을 수동으로 분석하는 비효율을 해결하기 위해 개발했습니다. Velociraptor로 수집한 Windows 아티팩트를 자동 파싱하고, 아티팩트 간 인과관계를 룰 기반으로 연결하여 타임라인과 관계 그래프를 시각화합니다.",
  role: "팀장 (Back-end Lead, 5인 팀, 기여도 ~35%)",
  contributions: [
    "[Engineer] Rule 엔진 설계: YAML 기반 약 95개 규칙(Sysmon 35개 + Non-Sysmon 60개), 신뢰도(h/m/l) 계층 + auto_expand 연쇄 탐색",
    "[Engineer] BFS 그래프 빌더: 6종 인덱스 기반 후보 탐색으로 O(n²) → O(n·k) 복잡도 개선",
    "[Engineer] 21종 아티팩트 경로 정규화 로직 구현 (Device Path, 드라이브 레터, UNC 경로 통합)",
    "[Engineer] Sigma/MISP/VirusTotal 탐지 엔진 통합 + MITRE ATT&CK TTP 매핑",
    "[Engineer] LLM 기반 사고 대응 보고서 자동 생성 프롬프트 설계",
    "[PM] 5인 팀 리드, 3번의 주제 폐기 후 방향 재설정",
    "[PM] 스프린트 일정 수립, 작업 분배, 일일 진행 상황 투명 공유 체계 구축",
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
        "YAML 기반 약 95개 규칙(Sysmon 35개 + Non-Sysmon 60개)을 파싱하여 21종 아티팩트 간 관계를 평가. Sysmon 환경은 ProcessGuid 기반 확정적 인과관계를, Non-Sysmon 환경은 파일 경로·시간 조건 기반 상관관계를 연결. 각 규칙에 신뢰도(h/m/l)를 부여하고 auto_expand로 핵심 매칭 시 관련 룰 자동 연쇄 탐색",
    },
    {
      title: "위협 인텔리전스 연동",
      icon: "🛡️",
      description:
        "MISP, VirusTotal API 연동으로 Hash/IP 기반 IOC 자동 조회 및 위험도 평가. STIX 2.1 형식으로 IOC 공유 가능",
    },
    {
      title: "MITRE ATT&CK 매핑",
      icon: "📡",
      description:
        "Sigma 룰 매칭 → 탐지된 기법에 ATT&CK ID 자동 태깅. APT 보고서 79건 분석 데이터 기반 Jaccard 유사도로 APT 그룹 프로파일링. Kill Chain 14단계 커버리지 시각적 표시",
    },
    {
      title: "LLM 보고서 자동 생성",
      icon: "✨",
      description:
        "그래프 노드/엣지 데이터, Sigma/MISP/VT 탐지 결과, 타임라인, ATT&CK 매핑 결과를 LLM(Gemini/Ollama)에 전달. SSE 스트리밍으로 사건 개요, 공격 타임라인, IOC 목록, 대응 권고사항을 실시간 출력하여 HTML/PDF 보고서 자동 생성",
    },
  ],
  results: [
    { icon: "🏆", label: "Award", value: "최우수상 수상" },
    { icon: "📊", label: "Scope", value: "21종 아티팩트" },
    { icon: "⚡", label: "Efficiency", value: "분석 시간 ~70% 단축" },
  ],
};
