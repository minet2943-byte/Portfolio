function Project({ label, projectItems, title }) {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-24">
      <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div className="max-w-2xl">
          <p className="section-kicker">{label}</p>
          <h2 className="section-title">{title}</h2>
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
  );
}

export default Project;
