import { useRef, useState } from "react"
import emailjs from "@emailjs/browser"

function Contact() {
  const form = useRef()
  const [status, setStatus] = useState("idle") // idle | sending | sent | error

  const sendEmail = (e) => {
    e.preventDefault()
    setStatus("sending")

    emailjs
      .sendForm(
        "service_abc123",       // TODO: replace with your EmailJS service ID
        "template_pv6pvwh",     // TODO: replace with your EmailJS template ID
        form.current,
        "Vpk0Z74i3PrtFZgI4"     // TODO: replace with your EmailJS public key
      )
      .then(
        () => {
          setStatus("sent")
          form.current.reset()
        },
        (error) => {
          setStatus("error")
          console.log(error.text)
        }
      )
  }

  return (
    <section id="contact" className="bg-[var(--ink)] text-[var(--text-hi)] py-24">
      <div className="max-w-3xl mx-auto px-6">

        <p className="font-mono text-xl text-[var(--signal)] mb-3 text-center">Contact</p>
        <h2 className="font-display text-4xl font-semibold mb-3 text-center">
          Let's build something
        </h2>
        <p className="text-[var(--text-lo)] text-center mb-12 max-w-lg mx-auto">
          Open to internships, junior full-stack roles, and freelance MERN work.
          Drop a message and I'll reply within a day or two.
        </p>

        <form ref={form} onSubmit={sendEmail} className="space-y-5 font-mono text-sm">
          <div>
            <label className="block text-[var(--text-lo-2)] mb-2">name</label>
            <input
              type="text"
              name="user_name"
              placeholder="your name"
              required
              className="w-full bg-[var(--ink-2)] border border-[var(--line)] p-4 rounded-lg focus:outline-none focus:border-[var(--signal)] transition-colors"
            />
          </div>

          <div>
            <label className="block text-[var(--text-lo-2)] mb-2">email</label>
            <input
              type="email"
              name="user_email"
              placeholder="you@example.com"
              required
              className="w-full bg-[var(--ink-2)] border border-[var(--line)] p-4 rounded-lg focus:outline-none focus:border-[var(--signal)] transition-colors"
            />
          </div>

          <div>
            <label className="block text-[var(--text-lo-2)] mb-2">message</label>
            <textarea
              name="message"
              rows="5"
              placeholder="what are you looking to build?"
              required
              className="w-full bg-[var(--ink-2)] border border-[var(--line)] p-4 rounded-lg focus:outline-none focus:border-[var(--signal)] transition-colors resize-none"
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={status === "sending"}
            className="w-full bg-[var(--signal)] text-[var(--ink)] px-8 py-3.5 rounded-lg font-medium hover:bg-[var(--signal-2)] transition-colors disabled:opacity-60"
          >
            {status === "sending" ? "sending..." : "send message"}
          </button>

          {status === "sent" && (
            <p className="text-center text-[#57AB5A]">message sent — thanks, I'll be in touch.</p>
          )}
          {status === "error" && (
            <p className="text-center text-[#E7625F]">something went wrong — email me directly instead.</p>
          )}
        </form>

      </div>
    </section>
  )
}

export default Contact
