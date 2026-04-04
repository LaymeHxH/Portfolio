import photo from "../assets/photo.jpg";

function Header({ theme }) {
  const isDark = theme === "dark";

  return (
    <header
      className={`relative overflow-hidden rounded-2xl border p-6 shadow-[0_0_30px_rgba(124,108,255,0.12)] transition duration-300 hover:shadow-[0_0_45px_rgba(124,108,255,0.22)] ${
        isDark
          ? "border-violet-900/70 bg-[#151122]/95"
          : "border-slate-300 bg-white"
      }`}
    >
      <div className="pointer-events-none absolute -left-16 -top-16 h-40 w-40 rounded-full bg-violet-500/10 blur-3xl"></div>
      <div className="pointer-events-none absolute -right-16 top-0 h-36 w-36 rounded-full bg-fuchsia-500/10 blur-3xl"></div>

      <div className="relative flex flex-col items-center gap-5 md:flex-row md:items-center">
        <img
          src={photo}
          alt="Андрій Ковач"
          className="h-28 w-28 rounded-full border-2 border-violet-500 object-cover shadow-[0_0_22px_rgba(124,108,255,0.4)] transition duration-300 hover:scale-105 hover:shadow-[0_0_34px_rgba(124,108,255,0.65)]"
        />

        <div className="text-center md:text-left">
          <h1
            className={`text-3xl font-bold tracking-wide ${
              isDark ? "text-violet-200" : "text-violet-700"
            }`}
          >
            Андрій Ковач
          </h1>

          <p
            className={`mt-1 inline-block rounded-full border px-3 py-1 text-sm ${
              isDark
                ? "border-violet-500/40 bg-violet-500/10 text-violet-200"
                : "border-violet-300 bg-violet-100 text-violet-700"
            }`}
          >
            Студент
          </p>

          <address
            className={`mt-4 space-y-1 not-italic text-sm md:text-base ${
              isDark ? "text-slate-300" : "text-slate-700"
            }`}
          >
            <p>
              <span className="text-violet-500">Email:</span> andrew@icloud.com
            </p>
            <p>
              <span className="text-violet-500">Телефон:</span> +38 (097) 100-10-03
            </p>
            <p>
              <span className="text-violet-500">Telegram:</span> @Andrew_Kovach
            </p>
            <p>
              <span className="text-violet-500">Місто:</span> Львів, Україна
            </p>
          </address>
        </div>
      </div>
    </header>
  );
}

export default Header;