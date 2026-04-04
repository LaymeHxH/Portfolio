import { useEffect, useState } from "react";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import SoftSkills from "./components/SoftSkills";
import Education from "./components/Education";
import Footer from "./components/Footer";
import Reviews from "./components/Reviews";
import Form from "./components/Form";

function App() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const now = new Date();
    const hours = now.getHours();

    if (hours >= 7 && hours < 21) {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  }, []);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  return (
    <div
      className={`min-h-screen overflow-hidden transition-colors duration-300 ${
        theme === "dark"
          ? "bg-[#05040a] text-violet-50"
          : "bg-[#f4f4fb] text-slate-900"
      }`}
    >
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute left-[-120px] top-[-120px] h-72 w-72 rounded-full bg-violet-600/10 blur-3xl"></div>
        <div className="absolute right-[-100px] top-[180px] h-80 w-80 rounded-full bg-fuchsia-600/10 blur-3xl"></div>
        <div className="absolute bottom-[-120px] left-1/3 h-72 w-72 rounded-full bg-indigo-600/10 blur-3xl"></div>
      </div>

      <div className="relative mx-auto max-w-5xl px-4 py-8 md:px-6">
        <div className="mb-5 flex justify-end">
          <button
            onClick={toggleTheme}
            className="rounded-xl border border-violet-500/40 bg-violet-500/10 px-4 py-2 text-sm font-medium text-black-200 transition duration-300 hover:bg-violet-500/20"
          >
            {theme === "dark" ? "Світла тема" : "Темна тема"}
          </button>
        </div>

        <div className="space-y-5">
          <Header theme={theme} />
          <About theme={theme} />
          <Skills theme={theme} />
          <SoftSkills theme={theme} />
          <Education theme={theme} />
          <Reviews theme={theme} />
          <Footer theme={theme} />
          <Form theme={theme} />
        </div>
      </div>
    </div>
  );
}

export default App;