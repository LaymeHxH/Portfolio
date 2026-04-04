function About({ theme }) {
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
        Про себе
      </h2>

      <div className={`space-y-4 text-[15px] leading-8 ${isDark ? "text-violet-100/90" : "text-slate-700"}`}>
        <p>
          Студент Інституту комп’ютерних технологій. Цікавлюся програмуванням, веб-розробкою та роботою з даними. Працюю з Python, MySQL, HTML/CSS — роблю навчальні проєкти та лабораторні, щоб закріплювати практику.
        </p>

        <p>
          Окремо розвиваю навички дизайну: Figma, Photoshop, Illustrator — вмію робити макети, прототипи та візуальні матеріали. Використовую Git у навчальних проєктах і звикаю до командного стилю роботи.
        </p>

        <p>
          Сильні сторони: уважність до деталей, дисципліна та швидке навчання. Хочу розвиватися в IT і поступово нарощувати досвід на реальних задачах.
        </p>
      </div>
    </section>
  );
}

export default About;