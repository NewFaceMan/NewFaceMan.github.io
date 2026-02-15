import { projects } from "@/data/portfolio";

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-4 text-center">
          Projects
        </h2>
        <p className="text-zinc-600 dark:text-zinc-400 text-center mb-12 max-w-2xl mx-auto">
          직접 기획하고 개발한 프로젝트들입니다. 각 프로젝트를 통해 문제 해결 능력과 기술 역량을 키웠습니다.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <article
              key={project.id}
              className="bg-white dark:bg-zinc-800 rounded-xl border border-zinc-200 dark:border-zinc-700 overflow-hidden hover:shadow-lg transition-shadow"
            >
              {project.image && (
                <div className="aspect-video bg-zinc-100 dark:bg-zinc-700">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}

              <div className="p-6">
                <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-2">
                  {project.title}
                </h3>

                <p className="text-zinc-600 dark:text-zinc-300 mb-4">
                  {project.subtitle}
                </p>

                {project.award && (
                  <div className="mb-4 px-3 py-2 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg">
                    <span className="text-sm font-medium text-yellow-800 dark:text-yellow-300">
                      {project.award}
                    </span>
                  </div>
                )}

                <div className="mb-4">
                  <h4 className="text-sm font-medium text-zinc-500 dark:text-zinc-400 mb-2">
                    주요 기능
                  </h4>
                  <ul className="text-sm text-zinc-600 dark:text-zinc-300 space-y-1">
                    {project.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs font-medium bg-zinc-100 dark:bg-zinc-700 text-zinc-700 dark:text-zinc-300 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-medium"
                    >
                      GitHub →
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-medium"
                    >
                      Live Demo →
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
