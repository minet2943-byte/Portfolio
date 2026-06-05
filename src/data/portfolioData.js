export const copy = {
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

export const skills = {
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

export const projects = {
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

