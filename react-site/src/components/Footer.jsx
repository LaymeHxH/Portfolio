import { useEffect, useState } from "react";

function Footer({ theme }) {
  const [systemInfo, setSystemInfo] = useState({
    userAgent: "",
    platform: "",
  });

  useEffect(() => {
    const info = {
      userAgent: navigator.userAgent,
      platform: navigator.platform,
    };

    localStorage.setItem("reactSystemInfo", JSON.stringify(info));

    const savedInfo = JSON.parse(localStorage.getItem("reactSystemInfo"));

    if (savedInfo) {
      setSystemInfo(savedInfo);
    }
  }, []);

  const isDark = theme === "dark";

  return (
    <footer
      className={`rounded-2xl border px-6 py-4 text-center text-sm shadow-[0_0_20px_rgba(124,108,255,0.08)] ${
        isDark
          ? "border-violet-900/70 bg-[#151122]/95 text-violet-200/70"
          : "border-slate-300 bg-white text-slate-600"
      }`}
    >
      <p className="mb-3">© 2026 Андрій Ковач</p>

      <div className={`space-y-2 text-left text-sm ${isDark ? "text-violet-100/80" : "text-slate-700"}`}>
        <p>
          <span className="font-semibold text-violet-500">User Agent:</span>{" "}
          {systemInfo.userAgent}
        </p>
        <p>
          <span className="font-semibold text-violet-500">Платформа:</span>{" "}
          {systemInfo.platform}
        </p>
      </div>
    </footer>
  );
}

export default Footer;