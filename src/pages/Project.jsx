import useReveal from "../hooks/useReveal";

function Project({ label, projectItems, title }) {
  const [sectionRef, isRevealed] = useReveal();

  return (
    <section
      id="projects"
      ref={sectionRef}
      className={`reveal-section mx-auto max-w-6xl px-6 py-24 ${isRevealed ? "is-revealed" : ""}`}
    >
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
            <h3 className="mb-3 text-xl font-semibold">{project.name}</h3>
            <p className="text-sm leading-7 text-(--muted)">
              {project.description}
            </p>
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex items-center text-sm font-semibold text-(--accent) transition hover:text-(--text)"
              >
                View project <span aria-hidden="true">-&gt;</span>
              </a>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}

export default Project;
