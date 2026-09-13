import { useState } from "react";

const LINKS = [
  { num: "01.", label: "About", href: "#about" },
  { num: "02.", label: "Experience", href: "#experience" },
  { num: "03.", label: "Projects", href: "#projects" },
  { num: "04.", label: "Skills", href: "#skills" },
  { num: "05.", label: "Education", href: "#education" },
  { num: "06.", label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-bg/75 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1080px] items-center justify-between px-6 py-4">
        <a href="#hero" className="font-mono text-[1.1rem] font-bold tracking-tight text-text">
          surya<span className="text-accent">.</span>dev
        </a>

        <button
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="z-[101] flex flex-col gap-[5px] p-1 md:hidden"
        >
          <span
            className={`h-[2px] w-[22px] rounded bg-text transition-all ${
              open ? "translate-y-[7px] rotate-45" : ""
            }`}
          />
          <span className={`h-[2px] w-[22px] rounded bg-text transition-all ${open ? "opacity-0" : ""}`} />
          <span
            className={`h-[2px] w-[22px] rounded bg-text transition-all ${
              open ? "-translate-y-[7px] -rotate-45" : ""
            }`}
          />
        </button>

        <ul
          className={`fixed top-0 right-0 z-[100] flex h-screen w-[240px] flex-col items-start justify-center gap-6 border-l border-border bg-bg-alt p-10 transition-transform duration-300 md:static md:h-auto md:w-auto md:flex-row md:items-center md:gap-7 md:border-none md:bg-transparent md:p-0 md:transition-none ${
            open ? "translate-x-0" : "translate-x-full md:translate-x-0"
          }`}
        >
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="font-mono text-[0.85rem] text-text-dim transition-colors hover:text-accent"
              >
                <span className="mr-1 text-[0.75rem] text-accent">{link.num}</span>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
