function Skills({ theme }) {
  const isDark = theme === "dark";

  return (
    <section
      className={`rounded-2xl border p-6 shadow-[0_0_24px_rgba(124,108,255,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(124,108,255,0.16)] ${
        isDark
          ? "border-violet-900/70 bg-[#151122]/95"
          : "border-slate-300 bg-white"
      }`}
    >
      <h2 className="mb-5 border-l-4 border-violet-500 pl-3 text-2xl font-semibold text-violet-500">
        Навички
      </h2>

      <div className="grid gap-4 md:grid-cols-2">
        <div
          className={`rounded-xl border p-4 ${
            isDark
              ? "border-violet-800/60 bg-violet-950/20"
              : "border-slate-200 bg-slate-50"
          }`}
        >
          <h3 className="mb-3 text-lg font-semibold text-violet-500">
            Програмування
          </h3>
          <ul
            className={`list-inside list-disc space-y-2 marker:text-violet-400 ${
              isDark ? "text-violet-100/90" : "text-slate-700"
            }`}
          >
            <li>Python</li>
            <li>Java (мінімальний рівень)</li>
          </ul>
        </div>

        <div
          className={`rounded-xl border p-4 ${
            isDark
              ? "border-violet-800/60 bg-violet-950/20"
              : "border-slate-200 bg-slate-50"
          }`}
        >
          <h3 className="mb-3 text-lg font-semibold text-violet-500">
            Веб-технології
          </h3>
          <ul
            className={`list-inside list-disc space-y-2 marker:text-violet-400 ${
              isDark ? "text-violet-100/90" : "text-slate-700"
            }`}
          >
            <li>HTML / CSS</li>
          </ul>
        </div>

        <div
          className={`rounded-xl border p-4 ${
            isDark
              ? "border-violet-800/60 bg-violet-950/20"
              : "border-slate-200 bg-slate-50"
          }`}
        >
          <h3 className="mb-3 text-lg font-semibold text-violet-500">
            Бази даних
          </h3>
          <ul
            className={`list-inside list-disc space-y-2 marker:text-violet-400 ${
              isDark ? "text-violet-100/90" : "text-slate-700"
            }`}
          >
            <li>MySQL</li>
          </ul>
        </div>

        <div
          className={`rounded-xl border p-4 ${
            isDark
              ? "border-violet-800/60 bg-violet-950/20"
              : "border-slate-200 bg-slate-50"
          }`}
        >
          <h3 className="mb-3 text-lg font-semibold text-violet-500">
            Дизайн та прототипування
          </h3>
          <ul
            className={`list-inside list-disc space-y-2 marker:text-violet-400 ${
              isDark ? "text-violet-100/90" : "text-slate-700"
            }`}
          >
            <li>Figma</li>
            <li>Adobe Photoshop</li>
            <li>Adobe Illustrator</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Skills;