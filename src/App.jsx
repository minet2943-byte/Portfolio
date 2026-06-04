import { useEffect, useState } from "react";
import profileImage from "./assets/image.png";
import Home from "./pages/Home";
import About from "./pages/About";

const copy = {
  en: {
    brand: "Sokneth",
    role: "React and Java Developer",
    nav: {
      home: "Home",
      skills: "Skills",
      projects: "Projects",
      about: "About",
      contact: "Contact",
    },
    ctaPrimary: "View Projects",
    ctaSecondary: "Contact Me",
    projectsLabel: "Selected Work",
    skillsTitle: "Skills I use to build practical web apps",
    projectsTitle: "Projects that show both frontend and backend foundation",
    contactTitle: "Let's build something useful",
    contactText:
      "Open to freelance work, internships, and junior developer roles focused on React, Spring Boot, and product development.",
    location: "Based in Cambodia, available remotely",
    email: "Email",
    focus: "Focus",
    focusText: "React UI, REST API, Java backend",
    footer: "Portfolio for Seum Sokneth",
  },
  km: {
    brand: "Sokneth",
    role: "អ្នកអភិវឌ្ឍន៍ React និង Java",
    nav: {
      home: "ទំព័រដើម",
      skills: "ជំនាញ",
      projects: "គម្រោង",
      about: "អំពីខ្ញុំ",
      contact: "ទំនាក់ទំនង",
    },
    ctaPrimary: "មើលគម្រោង",
    ctaSecondary: "ទាក់ទងខ្ញុំ",
    projectsLabel: "គម្រោងសំខាន់ៗ",
    skillsTitle: "ជំនាញដែលខ្ញុំប្រើសម្រាប់បង្កើត web apps",
    projectsTitle: "គម្រោងដែលបង្ហាញពីមូលដ្ឋាន frontend និង backend",
    contactTitle: "តោះបង្កើតអ្វីមួយដែលមានប្រយោជន៍",
    contactText:
      "បើកទទួលការងារ freelance, internship និង junior developer roles ដែលផ្តោតលើ React, Spring Boot និង product development។",
    location: "ស្ថិតនៅកម្ពុជា និងអាចធ្វើការពីចម្ងាយ",
    email: "អ៊ីមែល",
    focus: "ជំនាញផ្តោត",
    focusText: "React UI, REST API, Java backend",
    footer: "ផតថលីយ៉ូរបស់ Seum Sokneth",
  },
};

const skills = {
  en: {
    groups: [
      {
        id: "frontend",
        title: "Front-End",
        icon: "</>",
        items: ["React", "JavaScript", "Tailwind CSS", "Bootstrap"],
        barsTitle: "Front-End",
        bars: [
          { name: "HTML5", level: 95 },
          { name: "CSS3", level: 85 },
          { name: "Bootstrap", level: 75 },
          { name: "Tailwind CSS", level: 90 },
          { name: "JavaScript", level: 85 },
          { name: "JQuery (AJAX)", level: 70 },
          { name: "React.js", level: 80 },
        ],
      },
      {
        id: "backend",
        title: "Back-End",
        icon: "{ }",
        items: ["Java", "Spring Boot", "REST API", "MySQL"],
        barsTitle: "Back-End",
        bars: [
          { name: "Java", level: 90 },
          { name: "Spring Boot", level: 88 },
          { name: "REST API", level: 86 },
          { name: "MySQL", level: 90},
        ],
      },
      {
        id: "programming",
        title: "Programming",
        icon: "://",
        items: ["C", "C++", "Java", "JavaScript", "OOP"],
        barsTitle: "Programming",
        bars: [
          { name: "C", level: 76 },
          { name: "C++", level: 74 },
          { name: "Java", level: 90 },
          { name: "JavaScript", level: 85 },
          { name: "OOP", level: 86 },
        ],
      },
      {
        id: "tools",
        title: "Tools",
        icon: "[~]",
        items: ["Git", "GitHub", "VS Code", "Figma"],
        barsTitle: "Tools",
        bars: [
          { name: "Git", level: 85 },
          { name: "GitHub", level: 84 },
          { name: "VS Code", level: 90 },
          { name: "Figma", level: 85 },
        ],
      },
    ],
  },
  km: {
    groups: [
      {
        id: "frontend",
        title: "ផ្នែកខាងមុខ",
        icon: "</>",
        items: ["React", "JavaScript", "Tailwind CSS", "Bootstrap"],
        barsTitle: "ផ្នែកខាងមុខ",
        bars: [
          { name: "HTML5", level: 95 },
          { name: "CSS3", level: 90 },
          { name: "Bootstrap", level: 90 },
          { name: "Tailwind CSS", level: 90 },
          { name: "JavaScript", level: 85 },
          { name: "JQuery (AJAX)", level: 85 },
          { name: "React.js", level: 85 },
        ],
      },
      {
        id: "backend",
        title: "ផ្នែកខាងក្រោយ",
        icon: "{ }",
        items: ["Java", "Spring Boot", "REST API", "MySQL"],
        barsTitle: "ផ្នែកខាងក្រោយ",
        bars: [
          { name: "Java", level: 90 },
          { name: "Spring Boot", level: 88 },
          { name: "REST API", level: 86 },
          { name: "MySQL", level: 82 },
        ],
      },
      {
        id: "programming",
        title: "ភាសាកម្មវិធី",
        icon: "://",
        items: ["C", "C++", "Java", "JavaScript", "OOP"],
        barsTitle: "ភាសាកម្មវិធី",
        bars: [
          { name: "C", level: 76 },
          { name: "C++", level: 74 },
          { name: "Java", level: 88 },
          { name: "JavaScript", level: 85 },
          { name: "OOP", level: 86 },
        ],
      },
      {
        id: "tools",
        title: "ឧបករណ៍",
        icon: "[~]",
        items: ["Git", "GitHub", "VS Code", "Figma"],
        barsTitle: "ឧបករណ៍",
        bars: [
          { name: "Git", level: 85 },
          { name: "GitHub", level: 84 },
          { name: "VS Code", level: 92 },
          { name: "Figma", level: 85 },
        ],
      },
    ],
  },
};

const projects = {
  en: [
    {
      name: "Portfolio Website",
      type: "React UI",
      description:
        "A personal brand site with smooth navigation, responsive sections, and a clean presentation of skills and work.",
    },
    {
      name: "Student Management API",
      type: "Spring Boot",
      description:
        "A backend service for managing student data with CRUD endpoints, validation, and MySQL persistence.",
    },
    {
      name: "Admin Dashboard",
      type: "Full Stack",
      description:
        "A dashboard concept connecting frontend components to backend services for monitoring records and activity.",
    },
  ],
  km: [
    {
      name: "Portfolio Website",
      type: "React UI",
      description: "គេហទំព័រផ្ទាល់ខ្លួនដែលមាន navigation រលូន, responsive sections និងការបង្ហាញជំនាញបានច្បាស់។",
    },
    {
      name: "Student Management API",
      type: "Spring Boot",
      description: "សេវា backend សម្រាប់គ្រប់គ្រងទិន្នន័យសិស្ស ជាមួយ CRUD endpoints, validation និង MySQL។",
    },
    {
      name: "Admin Dashboard",
      type: "Full Stack",
      description: "គំនិត dashboard ដែលភ្ជាប់ frontend components ជាមួយ backend services សម្រាប់មើល records និង activity។",
    },
  ],
};

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

        <section id="skills" className="mx-auto max-w-5xl px-6 py-20">
          <div className="mb-10 max-w-2xl">
            <p className="section-kicker">{t.nav.skills}</p>
            <h2 className="section-title">{t.skillsTitle}</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {skillItems.groups.map((item) => (
              <button
                key={item.id}
                type="button"
                className={`skill-category-card text-left ${selectedSkillGroup.id === item.id ? "is-active" : ""}`}
                onClick={() => setActiveSkillGroup(item.id)}
              >
                <div className="skill-category-icon" aria-hidden="true">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-extrabold">{item.title}</h3>
                <div className="mt-5 flex flex-wrap gap-3">
                  {item.items.map((entry) => (
                    <span key={entry} className="skill-chip">
                      {entry}
                    </span>
                  ))}
                </div>
              </button>
            ))}
          </div>

          <div className="skills-meter-panel mt-8">
            <div className="skills-meter-header">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                <h3 className="text-2xl font-extrabold">{selectedSkillGroup.barsTitle}</h3>
                <div className="skill-scale" aria-label="Skill percentage scale">
                  <span>0%</span>
                  <span>25%</span>
                  <span>50%</span>
                  <span>75%</span>
                  <span>100%</span>
                </div>
              </div>
            </div>

            <div className="space-y-8 p-6 sm:p-8">
              {selectedSkillGroup.bars.map((item) => (
                <div key={item.name}>
                  <div className="mb-3 flex items-center justify-between gap-4">
                    <span className="text-xl font-extrabold">{item.name}</span>
                    <span className="text-xl font-medium text-(--text)/90">{item.level}%</span>
                  </div>
                  <div className="skill-progress-track">
                    <span className="skill-progress-fill" style={{ width: `${item.level}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="mx-auto max-w-6xl px-6 py-24">
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="section-kicker">{t.projectsLabel}</p>
              <h2 className="section-title">{t.projectsTitle}</h2>
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {projectItems.map((project, index) => (
              <article key={project.name} className="project-card">
                <div className="mb-10 flex items-start justify-between">
                  <span className="text-xs uppercase tracking-[0.24em] text-(--accent)">
                    {project.type}
                  </span>
                  <span className="text-sm text-(--muted)">0{index + 1}</span>
                </div>
                <h3 className="mb-3 text-3xl font-semibold">{project.name}</h3>
                <p className="text-sm leading-7 text-(--muted)">{project.description}</p>
              </article>
            ))}
          </div>
        </section>

        <About isKhmer={isKhmer} />

        <section id="contact" className="mx-auto max-w-6xl px-6 py-24">
          <div className="contact-panel">
            <div className="max-w-2xl">
              <p className="section-kicker">{t.nav.contact}</p>
              <h2 className="section-title">{t.contactTitle}</h2>
              <p className="mt-4 text-base leading-8 text-(--muted)">{t.contactText}</p>
            </div>

            <div className="grid gap-4 text-sm text-(--muted) sm:grid-cols-2">
              <a className="contact-link" href="mailto:sokneth.dev@example.com">
                <span className="font-medium text-(--text)">{t.email}</span>
                <span>sokneth.dev@example.com</span>
              </a>
              <a className="contact-link" href="https://github.com/" target="_blank" rel="noreferrer">
                <span className="font-medium text-(--text)">GitHub</span>
                <span>github.com</span>
              </a>
              <a className="contact-link" href="https://linkedin.com/" target="_blank" rel="noreferrer">
                <span className="font-medium text-(--text)">LinkedIn</span>
                <span>linkedin.com</span>
              </a>
              <a className="contact-link" href="https://facebook.com/" target="_blank" rel="noreferrer">
                <span className="font-medium text-(--text)">Facebook</span>
                <span>facebook.com</span>
              </a>
              <a className="contact-link" href="https://t.me/" target="_blank" rel="noreferrer">
                <span className="font-medium text-(--text)">Telegram</span>
                <span>t.me</span>
              </a>
              <div className="contact-link">
                <span className="font-medium text-(--text)">{t.focus}</span>
                <span>{t.focusText}</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-(--line) px-6 py-8 text-center text-sm text-(--muted)">
        {t.footer}
      </footer>
    </div>
  );
}

export default App;
