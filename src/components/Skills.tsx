import { skills } from "@/data/portfolio";

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4 bg-zinc-50 dark:bg-zinc-800/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-4 text-center">
          Skills
        </h2>
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left text-xs text-zinc-500 uppercase">
              <th className="pb-2 pr-4">구분</th>
              <th className="pb-2 pr-4">Skill</th>
              <th className="pb-2">기능구현 및 활용경험</th>
            </tr>
          </thead>
          <tbody>
            {skills.map((row, i) => (
              <tr key={i} className="border-t border-zinc-200 dark:border-zinc-700">
                <td className="py-2 pr-4 font-semibold text-zinc-800 dark:text-white">{row.category}</td>
                <td className="py-2 pr-4 font-medium text-zinc-700 dark:text-zinc-300">{row.skill}</td>
                <td className="py-2 text-zinc-600 dark:text-zinc-400">{row.experience}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
