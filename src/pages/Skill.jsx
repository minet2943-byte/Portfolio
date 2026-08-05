function Skill({
  activeSkillGroup,
  label,
  selectedSkillGroup,
  setActiveSkillGroup,
  skillItems,
  title,
}) {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-4 py-15">
      <div className="mb-10 max-w-2xl">
        <p className="section-kicker">{label}</p>
        <h2 className="section-title">{title}</h2>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {skillItems.groups.map((item) => (
          <button
            key={item.id}
            type="button"
            className={`skill-category-card text-left ${activeSkillGroup === item.id ? "is-active" : ""}`}
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

        <div className="space-y-4 p-4 sm:p-4">
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
  );
}

export default Skill;
