import portrait from "../components/Chandan.jpg"

function Hero() {
  return (
    <section id="home" className="bg-[var(--ink)] text-[var(--text-hi)] min-h-screen flex items-center relative overflow-hidden">

      {/* faint grid backdrop */}
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(var(--text-hi) 1px, transparent 1px), linear-gradient(90deg, var(--text-hi) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />

      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-[1.2fr_0.8fr] gap-14 items-center relative">

        <div>
         

          <h1 className="font-display text-5xl md:text-6xl font-semibold leading-[1.05] mb-6">
            Chandan Singh builds
            <br />
            <span className="text-[var(--signal)]">full-stack, AI-integrated</span>
            <br />
            web apps.
          </h1>

          <p className="text-[var(--text-lo)] text-lg leading-relaxed mb-9 max-w-xl">
            B.Tech Computer Science student and MERN stack developer. I ship
            React front-ends on top of Node/Express APIs, and wire in Gemini-powered
            AI features when they genuinely make a product better.
          </p>

          <div className="flex gap-4 flex-wrap font-mono text-sm">
            <a
              href="#projects"
              className="bg-[var(--signal)] text-[var(--ink)] px-6 py-3 rounded font-medium hover:bg-[var(--signal-2)] transition-colors"
            >
              view projects
            </a>
            <a
              href="#contact"
              className="border border-[var(--line)] px-6 py-3 rounded hover:border-[var(--signal)] hover:text-[var(--signal)] transition-colors"
            >
              get in touch
            </a>
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <div className="relative">
            <div className="absolute -inset-3 border border-[var(--signal)]/40 rounded-2xl -z-10" />
            <img
              src={portrait}
              alt="Chandan Singh, portrait"
              className="w-64 h-64 md:w-72 md:h-72 object-cover rounded-2xl border border-[var(--line)] grayscale hover:grayscale-0 transition duration-500"
            />
            <div className="absolute -bottom-4 -left-4 bg-[var(--ink-2)] border border-[var(--line)] rounded-lg px-4 py-2 font-mono text-xs text-[var(--text-lo)]">
              stack: <span className="text-[var(--signal)]">MERN + Gemini</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Hero
