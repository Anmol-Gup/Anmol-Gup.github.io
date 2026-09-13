import { CONTENT } from "../data/content";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function MiniProjects() {
  return (
    <section id="mini-projects" className="bg-bg-alt py-[110px]">
      <div className="mx-auto max-w-[1080px] px-6">
        <SectionHeading num="03a.">Mini Projects</SectionHeading>
        <Reveal as="p" className="mb-8 max-w-[620px] text-text-dim">
          Smaller builds and experiments, recorded as I made them.
        </Reveal>

        <Reveal>
          <a
            href={CONTENT.miniProjectsPlaylistUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-md border border-accent px-[26px] py-[13px] font-mono text-[0.9rem] font-medium text-accent transition-all hover:-translate-y-px hover:bg-accent/10"
          >
            View More Projects
          </a>
        </Reveal>
      </div>
    </section>
  );
}
