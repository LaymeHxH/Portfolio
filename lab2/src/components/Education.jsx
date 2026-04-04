function Education({ theme }) {
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
        Освіта
      </h2>

      <div
        className={`rounded-xl border p-4 ${
          isDark
            ? "border-violet-800/60 bg-violet-950/20 text-violet-100/90"
            : "border-slate-200 bg-slate-50 text-slate-700"
        }`}
      >
        <p className="mb-2">
          <span className="font-semibold text-violet-500">Навчальний заклад:</span>{" "}
          НУ Львівська політехніка
        </p>
        <p className="mb-2">
          <span className="font-semibold text-violet-500">Спеціальність:</span>{" "}
          F5 Кібербезпека
        </p>
        <p>
          <span className="font-semibold text-violet-500">Курс:</span> 3
        </p>
      </div>
    </section>
  );
}

export default Education;