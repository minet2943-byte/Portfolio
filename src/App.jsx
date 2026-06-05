import { useEffect, useState } from "react";
import profileImage from "./assets/image.png";
import Home from "./pages/Home";
import About from "./pages/About";
import Skill from "./pages/Skill";
import Project from "./pages/Project";
import Contact from "./pages/Contact";

import { copy, projects, skills } from "./data/portfolioData";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isKhmer, setIsKhmer] = useState(false);
  const [activeSkillGroup, setActiveSkillGroup] = useState("frontend");
  const [theme, setTheme] = useState(() => {
    if (typeof window === "undefined") {
      return "dark";
    }

    const storedTheme = window.localStorage.getItem("portfolio-theme");
    if (storedTheme === "light" || storedTheme === "dark") {
      return storedTheme;
    }

    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  });

  const t = isKhmer ? copy.km : copy.en;
  const skillItems = isKhmer ? skills.km : skills.en;
  const projectItems = isKhmer ? projects.km : projects.en;
  const isDark = theme === "dark";
  const selectedSkillGroup =
    skillItems.groups.find((group) => group.id === activeSkillGroup) ?? skillItems.groups[0];

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  return (
    <div className="min-h-screen bg-(--surface) text-(--text)">
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute -left-32 -top-24 h-72 w-72 rounded-full bg-(--accent)/20 blur-3xl" />
        <div className="absolute -right-24 top-40 h-80 w-80 rounded-full bg-(--accent-strong)/15 blur-3xl" />
        <div className="absolute bottom-0 left-1/4 h-64 w-64 rounded-full bg-(--glow-soft) blur-3xl" />
      </div>

      <header className="sticky top-0 z-50 border-b border-(--line) bg-(--surface-header) backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#home" className="text-xl font-semibold tracking-[0.24em] uppercase">
            {t.brand}
          </a>

          <nav className="hidden items-center gap-8 text-sm text-(--muted) md:flex">
            <a href="#home" className="transition hover:text-(--text)">
              {t.nav.home}
            </a>
            <a href="#skills" className="transition hover:text-(--text)">
              {t.nav.skills}
            </a>
            <a href="#projects" className="transition hover:text-(--text)">
              {t.nav.projects}
            </a>
            <a href="#about" className="transition hover:text-(--text)">
              {t.nav.about}
            </a>
            <a href="#contact" className="transition hover:text-(--text)">
              {t.nav.contact}
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setTheme((current) => (current === "dark" ? "light" : "dark"))}
              className="rounded-full border border-(--line) px-4 py-2 text-xs font-medium tracking-[0.2em] uppercase transition hover:border-(--accent) hover:text-(--accent)"
            >
              {isDark ? "Light" : "Dark"}
            </button>
            <button
              type="button"
              onClick={() => setIsKhmer((current) => !current)}
              className="rounded-full border border-(--line) px-4 py-2 text-xs font-medium tracking-[0.2em] uppercase transition hover:border-(--accent) hover:text-(--accent)"
            >
              {isKhmer ? "EN" : "KH"}
            </button>
            <button
              type="button"
              onClick={() => setMenuOpen((current) => !current)}
              className="rounded-full border border-(--line) px-3 py-2 text-sm md:hidden"
              aria-label="Toggle navigation"
            >
              Menu
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="border-t border-(--line) px-6 py-4 md:hidden">
            <div className="flex flex-col gap-3 text-sm text-(--muted)">
              <a href="#home" onClick={() => setMenuOpen(false)}>
                {t.nav.home}
              </a>
              <a href="#skills" onClick={() => setMenuOpen(false)}>
                {t.nav.skills}
              </a>
              <a href="#projects" onClick={() => setMenuOpen(false)}>
                {t.nav.projects}
              </a>
              <a href="#about" onClick={() => setMenuOpen(false)}>
                {t.nav.about}
              </a>
              <a href="#contact" onClick={() => setMenuOpen(false)}>
                {t.nav.contact}
              </a>
            </div>
          </div>
        )}
      </header>

      <main>
        <Home
          isKhmer={isKhmer}
          profileImage={profileImage}
          role={t.role}
          ctaPrimary={t.ctaPrimary}
          ctaSecondary={t.ctaSecondary}
          location={t.location}
        />

        <Skill
          activeSkillGroup={activeSkillGroup}
          selectedSkillGroup={selectedSkillGroup}
          setActiveSkillGroup={setActiveSkillGroup}
          skillItems={skillItems}
          title={t.skillsTitle}
          label={t.nav.skills}
        />

        <Project label={t.projectsLabel} projectItems={projectItems} title={t.projectsTitle} />

        <About isKhmer={isKhmer} />

        <Contact
          contactText={t.contactText}
          emailLabel={t.email}
          focus={t.focus}
          focusText={t.focusText}
          label={t.nav.contact}
          title={t.contactTitle}
        />
      </main>

      <footer className="border-t border-(--line) px-6 py-8 text-center text-sm text-(--muted)">
        {t.footer}
      </footer>
    </div>
  );
}

export default App;

