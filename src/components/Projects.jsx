import { CONTENT } from "../data/content";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Projects() {
  return (
    <section id="projects" className="py-[110px]">
      <div className="mx-auto max-w-[1080px] px-6">
        <SectionHeading num="03.">Key Projects</SectionHeading>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {CONTENT.projects.map((p) => (
            <Reveal
              key={p.name}
              className="flex flex-col rounded-xl border border-border bg-surface p-7 transition-all hover:-translate-y-1 hover:border-accent-dim hover:bg-surface-hover"
            >
              <div className="font-mono text-[1.15rem] font-bold text-text">{p.name}</div>
              <div className="mb-3 font-mono text-[0.85rem] text-accent">{p.subtitle}</div>
              <p className="mb-4 flex-grow text-[0.95rem] text-text-dim">{p.description}</p>
              <div className="mb-4 flex flex-wrap gap-2">
                {p.stack.map((t) => (
                  <span
                    key={t}
                    className="rounded-md border border-accent-dim bg-accent/[0.08] px-2.5 py-[5px] font-mono text-[0.75rem] text-accent"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="border-t border-border pt-3 text-[0.85rem] text-text-faint">
                <strong className="text-text-dim">Impact:</strong> {p.impact}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
