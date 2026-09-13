import { CONTENT } from "../data/content";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

function PlayIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <circle cx="12" cy="12" r="9.5" />
      <path d="M10 8.5l6 3.5-6 3.5z" fill="currentColor" stroke="none" />
    </svg>
  );
}

export default function MiniProjects() {
  return (
    <section id="mini-projects" className="bg-bg-alt py-[110px]">
      <div className="mx-auto max-w-[1080px] px-6">
        <SectionHeading num="03a.">Mini Projects</SectionHeading>
        <Reveal as="p" className="mb-10 max-w-[620px] text-text-dim">
          Smaller builds and experiments, recorded as I made them.{" "}
          <a
            href={CONTENT.miniProjectsPlaylistUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:underline"
          >
            Watch the full playlist →
          </a>
        </Reveal>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {CONTENT.miniProjects.map((p) => (
            <Reveal key={p.url}>
              <a
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full flex-col justify-between rounded-lg border border-border bg-surface p-5 transition-all hover:-translate-y-1 hover:border-accent-dim hover:bg-surface-hover"
              >
                <div className="mb-3 flex items-start justify-between gap-3">
                  <span className="font-mono text-[0.95rem] font-semibold leading-snug text-text">
                    {p.title}
                  </span>
                  <PlayIcon className="h-5 w-5 flex-shrink-0 text-text-faint transition-colors group-hover:text-accent" />
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded border border-border px-1.5 py-0.5 font-mono text-[0.68rem] text-text-faint"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
