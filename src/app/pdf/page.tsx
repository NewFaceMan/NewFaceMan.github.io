import {
  profile,
  about,
  projects,
  skills,
  certifications,
  education,
  profileDetail,
  conferences,
  ctf,
} from "@/data/portfolio";

export default function PdfPage() {
  const tracer = projects.find((p) => p.id === "tracer")!;
  const otherProjects = projects.filter((p) => p.id !== "tracer");

  return (
    <div className="mx-auto max-w-[210mm] text-[11px] leading-[1.5] text-gray-900">
      {/* ==================== Page 1: Profile & Overview ==================== */}
      <section className="pdf-page">
        {/* Header */}
        <header className="mb-4 border-b-2 border-gray-800 pb-3">
          <h1 className="text-[28px] font-bold tracking-tight">
            {profile.name}
          </h1>
          <p className="mt-0.5 text-[14px] font-medium text-gray-600">
            {profile.title}
          </p>
          <div className="mt-2 flex flex-wrap gap-x-4 gap-y-0.5 text-[10px] text-gray-500">
            <span>{profile.email}</span>
            <a href={profile.github} className="underline">
              GitHub
            </a>
            <a href={profile.linkedin} className="underline">
              LinkedIn
            </a>
            <a href={profile.blog} className="underline">
              Blog
            </a>
          </div>
        </header>

        {/* Value Proposition */}
        <div className="pdf-no-break mb-4">
          <h2 className="mb-1.5 text-[13px] font-bold text-gray-800 uppercase tracking-wide border-b border-gray-300 pb-0.5">
            About
          </h2>
          <p className="text-[11px] font-semibold text-gray-800 mb-2">
            {about.valueProposition}
          </p>
          <div className="space-y-1">
            {about.keyStrengths.map((s, i) => (
              <div key={i} className="text-[10.5px] text-gray-700">
                <span className="font-semibold text-gray-800">{s.label}</span>
                {" — "}
                {s.detail}
              </div>
            ))}
          </div>
        </div>

        {/* Highlights */}
        <div className="pdf-no-break mb-4">
          <h2 className="mb-1.5 text-[13px] font-bold text-gray-800 uppercase tracking-wide border-b border-gray-300 pb-0.5">
            핵심 역량
          </h2>
          <ul className="list-disc pl-4 space-y-0.5 text-[10.5px] text-gray-700">
            {about.highlights.map((h, i) => (
              <li key={i}>{h}</li>
            ))}
          </ul>
        </div>

        {/* Two-column: Education/Career + Certifications */}
        <div className="grid grid-cols-2 gap-6">
          {/* Left: Profile Detail */}
          <div className="pdf-no-break">
            <h2 className="mb-1.5 text-[13px] font-bold text-gray-800 uppercase tracking-wide border-b border-gray-300 pb-0.5">
              학력 / 경력
            </h2>
            <ul className="space-y-1 text-[10.5px] text-gray-700">
              <li>
                <span className="font-semibold">
                  {profileDetail.university}
                </span>
                <br />
                <span className="text-gray-500">
                  {profileDetail.universityPeriod}
                </span>
              </li>
              <li>
                <span className="font-semibold">{profileDetail.military}</span>
                <br />
                <span className="text-gray-500">
                  {profileDetail.militaryPeriod}
                </span>
              </li>
              {profileDetail.activities.map((a, i) => (
                <li key={i}>{a}</li>
              ))}
            </ul>
          </div>

          {/* Right: Certifications */}
          <div className="pdf-no-break">
            <h2 className="mb-1.5 text-[13px] font-bold text-gray-800 uppercase tracking-wide border-b border-gray-300 pb-0.5">
              자격증
            </h2>
            <ul className="space-y-0.5 text-[10.5px] text-gray-700">
              {certifications.map((c, i) => (
                <li key={i}>
                  <span className="font-semibold">{c.name}</span>{" "}
                  <span className="text-gray-500">({c.status})</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ==================== Page 2: TRACER (Solo) ==================== */}
      <section className="pdf-page">
        <h2 className="mb-3 text-[16px] font-bold text-gray-800 uppercase tracking-wide border-b-2 border-gray-800 pb-1">
          Projects
        </h2>

        <div className="pdf-no-break mb-2">
          <div className="flex items-baseline gap-2">
            <span className="text-[11px] text-amber-600 font-bold">★</span>
            <h3 className="text-[14px] font-bold text-gray-900">
              {tracer.title}
            </h3>
            <span className="text-[10px] font-semibold text-amber-600">
              ({tracer.award})
            </span>
          </div>
          <p className="text-[10px] text-gray-500 mt-0.5">
            {tracer.subtitle}
          </p>

          {/* Metadata */}
          <div className="flex flex-wrap gap-x-3 text-[9px] text-gray-500 mt-1 mb-2">
            <span>{tracer.period}</span>
            <span>|</span>
            <span>{tracer.role}</span>
            {tracer.teamSize && (
              <>
                <span>|</span>
                <span>{tracer.teamSize}</span>
              </>
            )}
            {tracer.contribution && (
              <>
                <span>|</span>
                <span>기여도 {tracer.contribution}</span>
              </>
            )}
          </div>

          {/* P/A/R */}
          <div className="space-y-1.5 text-[10.5px] text-gray-700 mb-2">
            <div>
              <span className="font-bold text-red-600 text-[9px] uppercase mr-1">
                Problem:
              </span>
              {tracer.problem}
            </div>
            <div>
              <span className="font-bold text-blue-600 text-[9px] uppercase mr-1">
                Action:
              </span>
              {tracer.action}
            </div>
            <div>
              <span className="font-bold text-green-600 text-[9px] uppercase mr-1">
                Result:
              </span>
              {tracer.result}
            </div>
          </div>

          {/* Features */}
          <ul className="list-disc pl-4 space-y-0.5 text-[10.5px] text-gray-700 mb-2">
            {tracer.features.map((f, i) => (
              <li key={i}>{f}</li>
            ))}
          </ul>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-1 mb-2">
            {tracer.techStack.map((tech) => (
              <span
                key={tech}
                className="rounded bg-gray-100 px-1.5 py-0.5 text-[9px] font-medium text-gray-600 border border-gray-200"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Troubleshooting (condensed: issue + resolution only) */}
          {tracer.troubleshooting.length > 0 && (
            <div className="mb-2">
              <h4 className="text-[10px] font-bold text-gray-800 mb-1">
                Troubleshooting
              </h4>
              {tracer.troubleshooting.map((ts, i) => (
                <div
                  key={i}
                  className="text-[10px] text-gray-700 mb-1 pl-2 border-l-2 border-gray-300"
                >
                  <span className="font-semibold text-red-600">문제:</span>{" "}
                  {ts.issue}
                  <br />
                  <span className="font-semibold text-green-600">해결:</span>{" "}
                  {ts.resolution}
                </div>
              ))}
            </div>
          )}

          {/* Job Relevance */}
          <div className="text-[10px] text-gray-500 italic">
            DFIR 연관성: {tracer.jobRelevance}
          </div>
        </div>
      </section>

      {/* ==================== Page 3: Security Bot + Jarvis Bot ==================== */}
      <section className="pdf-page">
        <h2 className="mb-3 text-[16px] font-bold text-gray-800 uppercase tracking-wide border-b-2 border-gray-800 pb-1">
          Projects (cont.)
        </h2>

        {otherProjects.map((project) => (
          <div key={project.id} className="pdf-no-break mb-5">
            <div className="flex items-baseline gap-2">
              <h3 className="text-[14px] font-bold text-gray-900">
                {project.title}
              </h3>
            </div>
            <p className="text-[10px] text-gray-500 mt-0.5">
              {project.subtitle}
            </p>

            {/* Metadata */}
            <div className="flex flex-wrap gap-x-3 text-[9px] text-gray-500 mt-1 mb-2">
              <span>{project.period}</span>
              <span>|</span>
              <span>{project.role}</span>
              {project.teamSize && (
                <>
                  <span>|</span>
                  <span>{project.teamSize}</span>
                </>
              )}
              {project.contribution && (
                <>
                  <span>|</span>
                  <span>기여도 {project.contribution}</span>
                </>
              )}
            </div>

            {/* P/A/R */}
            <div className="space-y-1.5 text-[10.5px] text-gray-700 mb-2">
              <div>
                <span className="font-bold text-red-600 text-[9px] uppercase mr-1">
                  Problem:
                </span>
                {project.problem}
              </div>
              <div>
                <span className="font-bold text-blue-600 text-[9px] uppercase mr-1">
                  Action:
                </span>
                {project.action}
              </div>
              <div>
                <span className="font-bold text-green-600 text-[9px] uppercase mr-1">
                  Result:
                </span>
                {project.result}
              </div>
            </div>

            {/* Features */}
            <ul className="list-disc pl-4 space-y-0.5 text-[10.5px] text-gray-700 mb-2">
              {project.features.map((f, i) => (
                <li key={i}>{f}</li>
              ))}
            </ul>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-1 mb-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="rounded bg-gray-100 px-1.5 py-0.5 text-[9px] font-medium text-gray-600 border border-gray-200"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Troubleshooting (condensed) */}
            {project.troubleshooting.length > 0 && (
              <div className="mb-2">
                <h4 className="text-[10px] font-bold text-gray-800 mb-1">
                  Troubleshooting
                </h4>
                {project.troubleshooting.map((ts, i) => (
                  <div
                    key={i}
                    className="text-[10px] text-gray-700 mb-1 pl-2 border-l-2 border-gray-300"
                  >
                    <span className="font-semibold text-red-600">문제:</span>{" "}
                    {ts.issue}
                    <br />
                    <span className="font-semibold text-green-600">
                      해결:
                    </span>{" "}
                    {ts.resolution}
                  </div>
                ))}
              </div>
            )}

            {/* Job Relevance */}
            <div className="text-[10px] text-gray-500 italic">
              DFIR 연관성: {project.jobRelevance}
            </div>

            {project.github && (
              <p className="mt-1 text-[9px] text-gray-400">
                {project.github}
              </p>
            )}
          </div>
        ))}
      </section>

      {/* ==================== Page 4: Skills & Activities ==================== */}
      <section className="pdf-page">
        {/* Skills */}
        <div className="pdf-no-break mb-4">
          <h2 className="mb-2 text-[16px] font-bold text-gray-800 uppercase tracking-wide border-b-2 border-gray-800 pb-1">
            Skills
          </h2>
          <div className="grid grid-cols-3 gap-x-4 gap-y-3">
            {skills.map((skillGroup) => (
              <div key={skillGroup.category}>
                <h3 className="text-[11px] font-bold text-gray-800 mb-1">
                  {skillGroup.category}
                </h3>
                <ul className="space-y-0.5">
                  {skillGroup.items.map((item) => (
                    <li
                      key={item.name}
                      className="text-[10px] text-gray-700 flex items-baseline gap-1"
                    >
                      <span className="font-medium">{item.name}</span>
                      <span className="text-[9px] text-gray-400">
                        ({item.level})
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="pdf-no-break mb-4">
          <h2 className="mb-2 text-[13px] font-bold text-gray-800 uppercase tracking-wide border-b border-gray-300 pb-0.5">
            교육 이수
          </h2>
          <table className="w-full text-[10px]">
            <thead>
              <tr className="text-left text-gray-500 border-b border-gray-200">
                <th className="pb-1 font-medium">교육명</th>
                <th className="pb-1 font-medium">주관</th>
                <th className="pb-1 font-medium">기간</th>
                <th className="pb-1 font-medium">비고</th>
              </tr>
            </thead>
            <tbody>
              {education.map((edu, i) => (
                <tr
                  key={i}
                  className="border-b border-gray-100 text-gray-700"
                >
                  <td className="py-1 pr-2 font-medium">{edu.institution}</td>
                  <td className="py-1 pr-2">{edu.organizer}</td>
                  <td className="py-1 pr-2 whitespace-nowrap">{edu.period}</td>
                  <td className="py-1">{edu.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Two-column: Conferences + CTF */}
        <div className="grid grid-cols-2 gap-6">
          {/* Conferences */}
          <div className="pdf-no-break">
            <h2 className="mb-1.5 text-[13px] font-bold text-gray-800 uppercase tracking-wide border-b border-gray-300 pb-0.5">
              컨퍼런스 참석 (12회+)
            </h2>
            <ul className="space-y-0.5 text-[10px] text-gray-700">
              {conferences.map((c, i) => (
                <li key={i} className="flex justify-between">
                  <span>{c.name}</span>
                  <span className="text-gray-400">
                    {c.count > 1 ? `${c.count}회` : ""}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* CTF */}
          <div className="pdf-no-break">
            <h2 className="mb-1.5 text-[13px] font-bold text-gray-800 uppercase tracking-wide border-b border-gray-300 pb-0.5">
              CTF / 챌린지
            </h2>
            <ul className="space-y-0.5 text-[10px] text-gray-700">
              {ctf.map((c, i) => (
                <li key={i}>
                  <span className="font-medium">{c.name}</span>{" "}
                  <span className="text-gray-500">- {c.note}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
