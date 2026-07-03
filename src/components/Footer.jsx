function Footer() {
  return (
    <footer className="bg-[var(--ink)] text-[var(--text-hi)] py-10 border-t border-[var(--line)]">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">

        <p className="font-mono text-sm text-[var(--text-lo-2)]">
          © 2026 Chandan Singh — built with React &amp; Tailwind
        </p>

        <div className="flex gap-6 font-mono text-sm text-[var(--text-lo)]">
          <a
            href="https://github.com/chandansingh2005"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[var(--signal)] transition-colors"
            target="_black"
          >
            github
          </a>
          <a
            href="mailto:chandansinghadx123456@example.com"
            className="hover:text-[var(--signal)] transition-colors"
            target="_black"
          >
            email
          </a>
          <a
            href="https://www.linkedin.com/in/chandan-singh-224a01337/"
            className="hover:text-[var(--signal)] transition-colors"
            target="_black"
           >
            linkedin
          </a>
        </div>

      </div>
    </footer>
  )
}

export default Footer
