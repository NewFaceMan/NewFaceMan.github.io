import { skills } from "@/data/portfolio";

const levelColors = {
  beginner: "bg-zinc-200 dark:bg-zinc-600",
  intermediate: "bg-blue-200 dark:bg-blue-800",
  advanced: "bg-blue-400 dark:bg-blue-600",
  expert: "bg-blue-600 dark:bg-blue-500",
};

const levelLabels = {
  beginner: "입문",
  intermediate: "중급",
  advanced: "고급",
  expert: "전문가",
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4 bg-zinc-50 dark:bg-zinc-800/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-4 text-center">
          Skills
        </h2>
        <p className="text-zinc-600 dark:text-zinc-400 text-center mb-12 max-w-2xl mx-auto">
          프로젝트에서 사용한 기술 스택입니다. 각 기술에 대한 실제 경험을 기반으로 작성했습니다.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((category) => (
            <div
              key={category.category}
              className="bg-white dark:bg-zinc-800 rounded-xl p-6 border border-zinc-200 dark:border-zinc-700"
            >
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-4">
                {category.category}
              </h3>

              <div className="space-y-4">
                {category.items.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-medium text-zinc-900 dark:text-white">
                        {skill.name}
                      </span>
                      <span className={`text-xs px-2 py-0.5 rounded ${levelColors[skill.level]} text-zinc-800 dark:text-zinc-100`}>
                        {levelLabels[skill.level]}
                      </span>
                    </div>
                    {skill.description && (
                      <p className="text-sm text-zinc-500 dark:text-zinc-400">
                        {skill.description}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
