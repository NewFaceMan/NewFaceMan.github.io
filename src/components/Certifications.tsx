import { certifications, education } from "@/data/portfolio";

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-4 text-center">
          Certifications & Education
        </h2>
        <p className="text-zinc-600 dark:text-zinc-400 text-center mb-12 max-w-2xl mx-auto">
          보안 전문성을 위해 이수한 교육과 취득한 자격증입니다.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {/* 자격증 */}
          <div className="bg-white dark:bg-zinc-800 rounded-xl p-6 border border-zinc-200 dark:border-zinc-700">
            <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-6 flex items-center gap-2">
              <span className="w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center text-blue-600 dark:text-blue-400 text-sm">
                C
              </span>
              자격증
            </h3>

            <div className="space-y-4">
              {certifications.map((cert) => (
                <div
                  key={cert.name}
                  className="flex items-center justify-between p-3 bg-zinc-50 dark:bg-zinc-700/50 rounded-lg"
                >
                  <span className="font-medium text-zinc-900 dark:text-white">
                    {cert.name}
                  </span>
                  <span className="text-xs px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full">
                    {cert.status}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* 교육 이수 */}
          <div className="bg-white dark:bg-zinc-800 rounded-xl p-6 border border-zinc-200 dark:border-zinc-700">
            <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-6 flex items-center gap-2">
              <span className="w-8 h-8 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center text-green-600 dark:text-green-400 text-sm">
                E
              </span>
              교육 이수
            </h3>

            <div className="space-y-4">
              {education.map((edu) => (
                <div
                  key={edu.institution}
                  className="p-3 bg-zinc-50 dark:bg-zinc-700/50 rounded-lg"
                >
                  <div className="flex items-start justify-between gap-2">
                    <span className="font-medium text-zinc-900 dark:text-white text-sm">
                      {edu.institution}
                    </span>
                    {edu.note.includes("최우수상") && (
                      <span className="shrink-0 text-xs px-2 py-1 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300 rounded-full">
                        최우수상
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-xs text-zinc-500 dark:text-zinc-400">
                      {edu.period}
                    </span>
                    {edu.organizer && (
                      <>
                        <span className="text-xs text-zinc-400">·</span>
                        <span className="text-xs text-zinc-500 dark:text-zinc-400">
                          {edu.organizer}
                        </span>
                      </>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
