const groups = [
  {
    label: "frontend",
    items: ["React.js", "React Router", "Tailwind CSS", "JavaScript (ES6+)", "Axios"],
  },
  {
    label: "backend",
    items: ["Node.js", "Express.js", "REST APIs", "JWT Auth", "Multer"],
  },
  {
    label: "data & storage",
    items: ["MongoDB", "Mongoose", "Cloudinary"],
  },
  {
    label: "ai & tooling",
    items: ["Google Gemini API", "Git & GitHub", "Vercel / Render", "Postman"],
  },
]

function Skills() {
  return (
    <section id="skills" className="bg-[var(--ink)] text-[var(--text-hi)] py-24">
      <div className="max-w-6xl mx-auto px-6">

        <p className="font-mono text-xl text-[var(--signal)] mb-3"> Skills</p>
        <h2 className="font-display text-4xl font-semibold mb-14">
          What I build with
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10">
          {groups.map((group) => (
            <div key={group.label}>
              <h3 className="font-mono text-xs uppercase tracking-widest text-[var(--text-lo-2)] mb-4 pb-2 border-b border-[var(--line)]">
                {group.label}
              </h3>
              <ul className="space-y-2.5">
                {group.items.map((item) => (
                  <li key={item} className="text-[var(--text-lo)] text-sm flex items-center gap-2">
                    <span className="text-[var(--signal)]">▹</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Skills
