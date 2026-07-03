import { useEffect, useState } from "react"

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
]

function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <nav
      className={`sticky top-0 z-50 border-b transition-colors duration-300 ${
        scrolled ? "bg-[var(--ink)]/95 backdrop-blur border-[var(--line)]" : "bg-[var(--ink)] border-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#home" className="font-mono text-m text-[var(--signal)] tracking-tight">
  Chandan
        </a>

        <ul className="hidden md:flex items-center gap-8 font-mono text-sm text-[var(--text-lo)]">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="hover:text-[var(--text-hi)] transition-colors">
                <span className="text-[var(--signal)]"></span>{l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <a
            href="/resume.pdf"
            download
            className="hidden sm:inline-block font-mono text-sm px-4 py-2 rounded border border-[var(--signal)] text-[var(--signal)] hover:bg-[var(--signal)] hover:text-[var(--ink)] transition-colors"
          >
            resume.pdf ↓
          </a>

          <button
            aria-label="Toggle menu"
            aria-expanded={open}
            className="md:hidden text-[var(--text-hi)] font-mono text-sm border border-[var(--line)] rounded px-3 py-2"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? "close" : "menu"}
          </button>
        </div>
      </div>

      {open && (
        <ul className="md:hidden flex flex-col gap-1 px-6 pb-5 font-mono text-sm text-[var(--text-lo)]">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block py-2 hover:text-[var(--text-hi)] transition-colors"
              >
                <span className="text-[var(--signal)]"></span>{l.label}
              </a>
            </li>
          ))}
          <li>
            <a href="/resume.pdf" download className="block py-2 text-[var(--signal)]">
              resume.pdf ↓
            </a>
          </li>
        </ul>
      )}
    </nav>
  )
}

export default Navbar
