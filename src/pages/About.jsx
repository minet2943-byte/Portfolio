function About({ isKhmer }) {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-24">
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="section-kicker">{isKhmer ? "អំពីខ្ញុំ" : "About Me"}</p>
          <h2 className="section-title">
            {isKhmer
              ? "ខ្ញុំចូលចិត្តបង្កើត software ដែលស្អាត សាមញ្ញ និងងាយថែទាំ។"
              : "I care about software that feels clean, simple, and maintainable."}
          </h2>
        </div>

        <div className="panel space-y-6 text-base leading-8 text-(--muted)">
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
      </div>
    </section>
  );
}

export default About;
