function Home({ isKhmer, profileImage, role, ctaPrimary, ctaSecondary, location }) {
  return (
    <section
      id="home"
      className="mx-auto grid min-h-[calc(100vh-81px)] max-w-6xl items-center gap-14 px-6 py-16 lg:grid-cols-[1.1fr_0.9fr]"
    >
      <div className="max-w-2xl">
        <p className="section-kicker">{isKhmer ? "Portfolio" : "Portfolio"}</p>
        <h1 className="text-3xl font-extrabold leading-tight">
          {isKhmer
            ? "សួស្តី ខ្ញុំជា Seum Sokneth។ ខ្ញុំបង្កើត modern web experiences ដោយប្រើ React និង Spring Boot។"
            : "Hi, I'm Seum Sokneth. I build modern web experiences with React and Spring Boot."}
        </h1>
        <p className="mt-6 max-w-xl text-base leading-8 text-(--muted)">
          {isKhmer
            ? "ខ្ញុំចូលចិត្តសាងសង់ UI ស្អាតៗ និង backend services ដែលមានរចនាសម្ព័ន្ធច្បាស់លាស់ សម្រាប់ projects ដែលអាចប្រើការពិតបាន។"
            : "I enjoy building polished interfaces and structured backend services for projects that solve real problems."}
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a href="#projects" className="button-primary">
            {ctaPrimary}
          </a>
          <a href="#contact" className="button-secondary">
            {ctaSecondary}
          </a>
        </div>

        <div className="mt-10 flex flex-wrap gap-8 text-sm text-(--muted)">
          <div>
            <p className="font-semibold text-(--text)">01+</p>
            <p>{isKhmer ? "ឆ្នាំនៃការអនុវត្ត" : "Years practicing"}</p>
          </div>
          <div>
            <p className="font-semibold text-(--text)">React + Java</p>
            <p>{role}</p>
          </div>
          <div>
            <p className="font-semibold text-(--text)">Remote</p>
            <p>{location}</p>
          </div>
        </div>
      </div>

      <div className="relative flex justify-center lg:justify-end">
        <div className="absolute inset-x-8 inset-y-8 rounded-4xl bg-(--accent)/20 blur-3xl" />
        <div className="relative overflow-hidden rounded-4xl border border-white/10 bg-white/5 p-3 shadow-2xl shadow-black/20">
          <img
            src={profileImage}
            alt="Seum Sokneth portrait"
            className="h-80 w-60 rounded-3xl object-cover sm:h-95 sm:w-70"
          />
        </div>
      </div>
    </section>
  );
}

export default Home;
