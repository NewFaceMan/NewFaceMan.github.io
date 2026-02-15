import { about } from "@/data/portfolio";

export default function About() {
  return (
    <section id="about" className="py-20 px-4 bg-zinc-50 dark:bg-zinc-800/50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-8 text-center">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-4">
              소개
            </h3>
            <div className="text-zinc-600 dark:text-zinc-300 space-y-4 whitespace-pre-line">
              {about.valueProposition}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-4">
              핵심 역량
            </h3>
            <ul className="space-y-3">
              {about.highlights.map((highlight, index) => (
                <li key={index} className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-blue-600 rounded-full" />
                  <span className="text-zinc-600 dark:text-zinc-300">{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
