function SoftSkills({ theme }) {
  const isDark = theme === "dark";

  const softSkills = [
    "Аналітичне мислення",
    "Уважність до деталей",
    "Відповідальність",
    "Самостійне навчання",
    "Організованість",
    "Наполегливість у вирішенні задач",
  ];

  return (
    <section
      className={`rounded-2xl border p-6 shadow-[0_0_24px_rgba(124,108,255,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(124,108,255,0.16)] ${
        isDark
          ? "border-violet-900/70 bg-[#151122]/95"
          : "border-slate-300 bg-white"
      }`}
    >
      <h2 className="mb-5 border-l-4 border-violet-500 pl-3 text-2xl font-semibold text-violet-500">
        Soft Skills
      </h2>

      <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {softSkills.map((skill) => (
          <li
            key={skill}
            className={`rounded-xl border px-4 py-3 text-sm font-medium transition duration-300 hover:-translate-y-1 hover:shadow-[0_0_18px_rgba(124,108,255,0.2)] ${
              isDark
                ? "border-violet-800/60 bg-violet-950/20 text-violet-100/90 hover:border-violet-500"
                : "border-slate-200 bg-slate-50 text-slate-700 hover:border-violet-400"
            }`}
          >
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default SoftSkills;