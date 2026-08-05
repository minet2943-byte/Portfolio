function Certificate({ certificateItems, label, title }) {
  return (
    <section id="certificates" className="mx-auto max-w-6xl px-4 py-5">
      <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div className="max-w-2xl">
          <p className="section-kicker">{label}</p>
          <h2 className="section-title">{title}</h2>
        </div>
        <p className="max-w-md text-sm leading-7 text-(--muted)">
          A focused collection of learning milestones across frontend, backend,
          and database practice.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {certificateItems.map((certificate, index) => (
          <article key={certificate.title} className="certificate-card">
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-start gap-4">
                <div className="certificate-mark" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.24em] text-(--accent)">
                    {certificate.issuer}
                  </p>
                  <h3 className="mt-1 text-sm md:text-xl font-extrabold leading-tight">
                    {certificate.title}
                  </h3>
                </div>
              </div>

              <span className="certificate-status">{certificate.status}</span>
            </div>

            <div className="mt-6 grid gap-6 md:grid-cols-2 items-start">
              <div>
                {certificate.image && (
                  <img
                    src={certificate.image}
                    alt={`${certificate.title} certificate`}
                    className="w-full md:w-72 mt-8 h-auto rounded-lg object-cover shadow-sm"
                  />
                )}
              </div>

              <div className="flex flex-col justify-between">
                <div>
                  <hr className="border-t border-[var(--line)] my-4" />

                  <div className="certificate-meta">
                    <div className="flex items-center gap-3 text-sm text-(--muted)">
                      <span className="font-semibold">Year Completed</span>
                      <span className="text-(--accent) font-extrabold">
                        {certificate.year}
                      </span>
                    </div>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-3">
                    <span className="inline-flex items-center gap-2 bg-[rgba(255,255,255,0.03)] px-4 py-2 rounded-full text-sm font-semibold text-(--muted)">
                      <svg
                        width="10"
                        height="10"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden
                      >
                        <path
                          d="M3 12h18"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      Key Topics
                    </span>
                    {certificate.focus.split(/,\s*/).map((tag) => (
                      <span
                        key={tag}
                        className="inline-block bg-[rgba(255,255,255,0.02)] px-2 py-2 rounded-full text-sm text-(--muted)"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Certificate;
