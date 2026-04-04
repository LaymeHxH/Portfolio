import { useEffect, useState } from "react";

function ContactForm({ theme }) {
  const [isOpen, setIsOpen] = useState(false);
  const isDark = theme === "dark";

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 60000);

    return () => clearTimeout(timer);
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
      <div
        className={`w-[400px] rounded-2xl border p-6 shadow-2xl ${
          isDark
            ? "border-violet-800 bg-[#151122] text-violet-100"
            : "border-slate-300 bg-white text-slate-800"
        }`}
      >
        <div className="mb-3 flex justify-end">
          <button
            onClick={() => setIsOpen(false)}
            className="text-xl"
          >
            ✖
          </button>
        </div>

        <h2 className="mb-4 text-xl font-semibold text-violet-500">
          Зворотний зв’язок
        </h2>

        <form
          action="https://formspree.io/f/mlgoplrb"
          method="POST"
          className="space-y-3"
        >
          <input
            type="text"
            name="name"
            placeholder="Ім’я"
            required
            className={`w-full rounded-lg border p-2 outline-none ${
              isDark
                ? "border-violet-700 bg-[#1f1933] text-violet-100"
                : "border-slate-300 bg-slate-50 text-slate-800"
            }`}
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            className={`w-full rounded-lg border p-2 outline-none ${
              isDark
                ? "border-violet-700 bg-[#1f1933] text-violet-100"
                : "border-slate-300 bg-slate-50 text-slate-800"
            }`}
          />

          <input
            type="tel"
            name="phone"
            placeholder="Телефон"
            required
            className={`w-full rounded-lg border p-2 outline-none ${
              isDark
                ? "border-violet-700 bg-[#1f1933] text-violet-100"
                : "border-slate-300 bg-slate-50 text-slate-800"
            }`}
          />

          <textarea
            name="message"
            placeholder="Повідомлення"
            required
            className={`w-full rounded-lg border p-2 outline-none ${
              isDark
                ? "border-violet-700 bg-[#1f1933] text-violet-100"
                : "border-slate-300 bg-slate-50 text-slate-800"
            }`}
          ></textarea>

          <button
            type="submit"
            className="w-full rounded-lg bg-violet-600 py-2 text-white transition hover:bg-violet-700"
          >
            Відправити
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;