import { CONTENT } from "../data/content";
import Reveal from "./Reveal";
import SocialLinks from "./SocialLinks";

const GLYPHS = [
  { text: "const", className: "top-[18%] left-[8%] text-[2.4rem]", delay: "0s" },
  { text: "{ }", className: "top-[65%] left-[12%] text-[3rem]", delay: "2s" },
  { text: "=>", className: "top-[30%] right-[10%] text-[3.4rem]", delay: "4s" },
  { text: "/api", className: "top-[72%] right-[16%] text-[2rem]", delay: "1s" },
  { text: "[ ]", className: "top-[12%] right-[30%] text-[2.2rem]", delay: "3s" },
];

export default function Hero() {
  const phone = CONTENT.meta.phone.replace(/\s/g, "");

  return (
    <section id="hero" className="relative flex min-h-screen items-center overflow-hidden">
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="grid-overlay absolute inset-0" />
        {GLYPHS.map((g) => (
          <span
            key={g.text}
            style={{ animationDelay: g.delay }}
            className={`absolute animate-float font-mono font-semibold text-accent opacity-[0.12] ${g.className}`}
          >
            {g.text}
          </span>
        ))}
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1080px] px-6 pt-20">
        <Reveal as="p" className="mb-3 font-mono text-base text-accent">
          Hi, my name is
        </Reveal>

        <Reveal
          as="h1"
          className="font-mono text-[clamp(2.4rem,7vw,4.5rem)] font-extrabold leading-[1.1] tracking-tight text-text"
        >
          {CONTENT.meta.name}
        </Reveal>

        <Reveal as="h2" className="mt-2 font-mono text-[clamp(1.1rem,3vw,1.6rem)] font-semibold text-text-dim">
          {CONTENT.meta.title}
        </Reveal>

        <Reveal as="p" className="mt-6 max-w-[560px] text-[1.05rem] text-text-dim">
          {CONTENT.meta.tagline}
        </Reveal>

        <Reveal className="mt-5 flex flex-wrap gap-5 font-mono text-[0.85rem] text-text-faint">
          <a href={`mailto:${CONTENT.meta.email}`} className="transition-colors hover:text-accent">
            {CONTENT.meta.email}
          </a>
          <a href={`tel:${phone}`} className="transition-colors hover:text-accent">
            {CONTENT.meta.phone}
          </a>
          <span>{CONTENT.meta.location}</span>
        </Reveal>

        <Reveal className="mt-9 flex flex-wrap gap-4">
          <a
            href="#projects"
            className="rounded-md bg-accent px-[26px] py-[13px] font-mono text-[0.9rem] font-medium text-[#05130d] transition-all hover:-translate-y-px hover:bg-[#4fe0ac] hover:shadow-glow"
          >
            View Projects
          </a>
          <a
            href={CONTENT.meta.resumeFile}
            download
            className="rounded-md border border-accent px-[26px] py-[13px] font-mono text-[0.9rem] font-medium text-accent transition-all hover:-translate-y-px hover:bg-accent/10"
          >
            Download Resume
          </a>
        </Reveal>

        <Reveal>
          <SocialLinks className="mt-10" />
        </Reveal>
      </div>

      <a
        href="#about"
        aria-label="Scroll down"
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
      >
        <span className="scroll-cue-dot relative block h-9 w-[22px] rounded-xl border-2 border-text-faint" />
      </a>
    </section>
  );
}
