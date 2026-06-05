const educationItems = [
  {
    school: "Royal University of Phnom Penh",
    degree: "Bachelor of Science in ITE",
    period: "2025 -> Present",
    location: "Phnom Penh, Cambodia",
    status: "Active",
  },
  {
    school: "Bonrany Honsen Memot High School",
    degree: "High School",
    period: "2024 -> Graduated",
    location: "Memot, Tboung Khmum, Cambodia",
    status: "Done",
  },
];

function About({ isKhmer }) {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-24">
      <div className="about-showcase">
        <div className="space-y-6">
          <div>
            <p className="section-kicker">{isKhmer ? "អំពីខ្ញុំ" : "About Me"}</p>
            <h2 className="section-title">
              {isKhmer
                ? "ខ្ញុំចូលចិត្តបង្កើត software ដែលស្អាត សាមញ្ញ និងងាយថែទាំ។"
                : "I care about software that feels clean, simple, and maintainable."}
            </h2>
          </div>

          <div className="about-text-card panel space-y-6 text-base leading-8 text-(--muted)">
            <p>
              {isKhmer
                ? "ខ្ញុំផ្តោតលើ React សម្រាប់ frontend និង Java Spring Boot សម្រាប់ backend។ ខ្ញុំចូលចិត្តរៀបចំ code ឱ្យអានងាយ និងបង្កើត interfaces ដែលសម្របខ្លួនបានល្អលើ mobile និង desktop។"
                : "My focus is React on the frontend and Java Spring Boot on the backend. I like organizing code clearly and building interfaces that adapt well on mobile and desktop."}
            </p>
            <p>
              {isKhmer
                ? "គោលដៅរបស់ខ្ញុំគឺបន្តរីកចម្រើនជាអ្នកអភិវឌ្ឍ full-stack ដោយធ្វើ projects ពិត, ធ្វើការជាក្រុម និងដោះស្រាយបញ្ហាដោយរចនាសម្ព័ន្ធល្អ។"
                : "My goal is to keep growing into a strong full-stack developer by shipping real projects, working in teams, and solving problems with solid structure."}
            </p>
          </div>

          <div className="space-y-5">
            {educationItems.map((item) => (
              <article key={item.school} className="education-card">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="education-title">{item.school}</h3>
                    <p className="education-degree">{item.degree}</p>
                  </div>
                  <span className="education-status">
                    <span aria-hidden="true" />
                    {item.status}
                  </span>
                </div>
                <div className="education-meta">
                  <span>{item.period}</span>
                  <span>{item.location}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
