import portrait from "../components/Chandan.jpg"

function About() {
  return (
    <section id="about" className="bg-[var(--paper)] text-[var(--text-ink)] py-24 border-y border-[var(--line-paper)]">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-[0.8fr_1.2fr] gap-14 items-center">

        <div className="flex justify-center md:justify-start">
          <img
            src={portrait}
            alt="Chandan Singh"
            className="w-56 md:w-64 rounded-2xl border border-[var(--line-paper)] shadow-[6px_6px_0_var(--signal)]"
          />
        </div>

        <div>
          <p className="font-mono text-xl text-[var(--signal-2)] mb-3"> About</p>
          <h2 className="font-display text-4xl font-semibold mb-6">
            How I got here
          </h2>

          <p className="text-[var(--text-ink-muted)] leading-relaxed mb-5">
            I'm a B.Tech Computer Science student who learned full-stack
            development by shipping things end to end — not just following
            tutorials. Both projects on this page went from an empty repo to
            a deployed URL, with real bugs (broken PDF uploads, runaway API
            costs) solved along the way.
          </p>

          <p className="text-[var(--text-ink-muted)] leading-relaxed mb-8">
            I work across the MERN stack: React and Tailwind on the front
            end, Node/Express and MongoDB on the back end, JWT for auth, and
            Google Gemini when AI adds real value instead of just being a
            feature to list. Right now I'm sharpening DSA and system design
            for internships and placements.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 font-mono text-sm">
            {[
              ["2", "shipped projects"],
              ["MERN", "primary stack"],
              ["Gemini", "AI integration"],
              ["B.Tech", "CSE, in progress"],
            ].map(([value, label]) => (
              <div key={label} className="border-l-2 border-[var(--signal)] pl-3">
                <div className="text-[var(--text-ink)] font-semibold">{value}</div>
                <div className="text-[var(--text-ink-muted)] text-xs mt-1">{label}</div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

export default About
