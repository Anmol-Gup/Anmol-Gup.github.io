import { CONTENT } from "../data/content";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Skills() {
  return (
    <section id="skills" className="bg-bg-alt py-[110px]">
      <div className="mx-auto max-w-[1080px] px-6">
        <SectionHeading num="04.">Technical Skills</SectionHeading>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-7">
          {Object.entries(CONTENT.skills).map(([category, items]) => (
            <Reveal key={category}>
              <div className="mb-3.5 font-mono text-[0.9rem] uppercase tracking-wide text-accent">
                {category}
              </div>
              <div className="flex flex-wrap gap-2">
                {items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-border bg-surface px-3.5 py-[7px] text-[0.85rem] text-text-dim transition-colors hover:border-accent hover:text-accent"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
