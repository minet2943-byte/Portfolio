export const copy = {
  en: {
   
    role: "React and Java Developer",
    nav: {
      home: "Home",
      skills: "Skills",
      projects: "Projects",
      certificates: "Certificates",
      about: "About",
      contact: "Contact",
    },
    ctaPrimary: "View Projects",
    ctaSecondary: "Contact Me",
    projectsLabel: "Selected Work",
    certificatesLabel: "Credentials",
    skillsTitle: "Skills I use to build practical web apps",
    projectsTitle: "Projects that show both frontend and backend foundation",
    certificatesTitle: "Certificates that support my developer path",
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
    role: "អ្នកអភិវឌ្ឍន៍ React និង Java",
    nav: {
      home: "ទំព័រដើម",
      skills: "ជំនាញ",
      projects: "គម្រោង",
      certificates: "Certificates",
      about: "អំពីខ្ញុំ",
      contact: "ទំនាក់ទំនង",
    },
    ctaPrimary: "មើលគម្រោង",
    ctaSecondary: "ទាក់ទងខ្ញុំ",
    projectsLabel: "គម្រោងសំខាន់ៗ",
    certificatesLabel: "Certificates",
    skillsTitle: "ជំនាញដែលខ្ញុំប្រើសម្រាប់បង្កើត web apps",
    projectsTitle: "គម្រោងដែលបង្ហាញពីមូលដ្ឋាន frontend និង backend",
    certificatesTitle: "Certificates that support my developer path",
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

export const certificates = {
  en: [
    {
      title: "React Front-End Development",
      issuer: "Online Learning",
      image: "https://i.pinimg.com/736x/99/ae/83/99ae8324c99a3101e670383bd2d7d517.jpg",
      year: "2026",
      status: "Completed",
      focus: "Components, hooks, state, responsive UI",
    },
    {
      title: "Java Programming Foundation",
      issuer: "University Coursework",
      image: "https://i.pinimg.com/736x/bd/6a/fc/bd6afccec721e72fb04ceef504929828.jpg",
      year: "2025",
      status: "Completed",
      focus: "OOP, collections, control flow, problem solving",
    },
    {
      title: "Web Design Essentials",
      issuer: "Self-Study",
      image: "https://i.pinimg.com/736x/f3/31/52/f33152ad476953e12e41d6d1b527a74f.jpg",
      year: "2025",
      status: "Completed",
      focus: "HTML, CSS, Tailwind CSS, layout systems",
    },
    {
      title: "Database and MySQL Basics",
      issuer: "Practice Projects",
      image: "https://i.pinimg.com/736x/c8/77/a0/c877a035cb98919e5876539cec86a542.jpg",
      year: "2025",
      status: "In Progress",
      focus: "Schema design, CRUD, queries, relationships",
    },
  ],
  km: [
    {
      title: "React Front-End Development",
      issuer: "Online Learning",
      image: "/images/cert-1.png",
      year: "2026",
      status: "Completed",
      focus: "Components, hooks, state, responsive UI",
    },
    {
      title: "Java Programming Foundation",
      issuer: "University Coursework",
      image: "/images/cert-2.png",
      year: "2025",
      status: "Completed",
      focus: "OOP, collections, control flow, problem solving",
    },
    {
      title: "Web Design Essentials",
      issuer: "Self-Study",
      image: "/images/cert-3.png",
      year: "2025",
      status: "Completed",
      focus: "HTML, CSS, Tailwind CSS, layout systems",
    },
    {
      title: "Database and MySQL Basics",
      issuer: "Practice Projects",
      image: "/images/cert-4.png",
      year: "2025",
      status: "In Progress",
      focus: "Schema design, CRUD, queries, relationships",
    },
  ],
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
          { name: "Bootstrap", level: 80 },
          { name: "Tailwind CSS", level: 90 },
          { name: "JavaScript", level: 85 },
          { name: "React.js", level: 80 },
        ],
      },
      {
        id: "backend",
        title: "Back-End",
        icon: "{ }",
        items: ["Java", "Spring Boot", "REST API", "MySQL", "PostgreSQL"],
        barsTitle: "Back-End",
        bars: [
          { name: "Java", level: 90 },
          { name: "Spring Boot", level: 88 },
          { name: "REST API", level: 86 },
          { name: "MySQL", level: 90 },
          { name: "PostgreSQL", level: 80 },
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
          { name: "React.js", level: 85 },
        ],
      },
      {
        id: "backend",
        title: "ផ្នែកខាងក្រោយ",
        icon: "{ }",
        items: ["Java", "Spring Boot", "REST API", "PostgreSQL", "MySQL"],
        barsTitle: "ផ្នែកខាងក្រោយ",
        bars: [
          { name: "Java", level: 90 },
          { name: "Spring Boot", level: 88 },
          { name: "REST API", level: 86 },
          { name: "MySQL", level: 82 },
          { name: "PostgreSQL", level: 80 },
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
      description:
        "គេហទំព័រផ្ទាល់ខ្លួនដែលមាន navigation រលូន, responsive sections និងការបង្ហាញជំនាញបានច្បាស់។",
    },
    {
      name: "Student Management API",
      type: "Spring Boot",
      description:
        "សេវា backend សម្រាប់គ្រប់គ្រងទិន្នន័យសិស្ស ជាមួយ CRUD endpoints, validation និង MySQL។",
    },
    {
      name: "Admin Dashboard",
      type: "Full Stack",
      description:
        "គំនិត dashboard ដែលភ្ជាប់ frontend components ជាមួយ backend services សម្រាប់មើល records និង activity។",
    },
  ],
};
