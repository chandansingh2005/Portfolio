import projects from "../data/projects"

function Projects() {
  return (
    <section id="projects" className="bg-[var(--paper)] text-[var(--text-ink)] py-24 border-y border-[var(--line-paper)]">
      <div className="max-w-6xl mx-auto px-6">

        <p className="font-mono text-xl text-[var(--signal-2)] mb-3">Projects</p>
        <h2 className="font-display text-4xl font-semibold mb-14">
          Things I've shipped
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <article
              key={project.id}
              className="bg-[var(--ink)] text-[var(--text-hi)] rounded-2xl overflow-hidden border border-[var(--line)] hover:border-[var(--signal)]/60 transition-colors duration-300"
            >
              {/* editor tab strip */}
              

              <div className="p-7">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="font-display text-2xl font-semibold">{project.title}</h3>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-[var(--signal)] border border-[var(--signal)]/40 rounded-full px-2 py-1">
                    {project.status}
                  </span>
                </div>
                <p className="text-[var(--signal)] text-sm font-mono mb-4">{project.tagline}</p>

                <p className="text-[var(--text-lo)] leading-relaxed mb-5">{project.description}</p>

                <ul className="space-y-1.5 mb-6">
                  {project.highlights.map((h) => (
                    <li key={h} className="text-sm text-[var(--text-lo)] flex gap-2">
                      <span className="text-[var(--signal)]">→</span>{h}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 mb-7">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="font-mono text-xs bg-[var(--ink-3)] text-[var(--text-lo)] px-2.5 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 font-mono text-sm">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center bg-[var(--signal)] text-[var(--ink)] px-4 py-2.5 rounded font-medium hover:bg-[var(--signal-2)] transition-colors"
                  >
                    live demo ↗
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center border border-[var(--line)] px-4 py-2.5 rounded hover:border-[var(--signal)] hover:text-[var(--signal)] transition-colors"
                  >
                    source ↗
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Projects
