import { CONTENT } from "../data/content";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Experience() {
  return (
    <section id="experience" className="bg-bg-alt py-[110px]">
      <div className="mx-auto max-w-[1080px] px-6">
        <SectionHeading num="02.">Experience</SectionHeading>

        <div className="relative max-w-[680px] pl-8">
          <div className="absolute bottom-1.5 left-1.5 top-1.5 w-0.5 bg-border" />
          {CONTENT.experience.map((e, i) => (
            <Reveal
              key={e.company}
              className={`relative ${i === CONTENT.experience.length - 1 ? "" : "pb-10"}`}
            >
              <span className="absolute -left-8 top-1 h-3.5 w-3.5 rounded-full border-2 border-accent bg-bg" />
              <div className="font-mono text-[1.1rem] font-semibold text-text">
                {e.title} · <span className="font-medium text-accent">{e.company}</span>
              </div>
              <div className="mt-1 font-mono text-[0.9rem] text-text-faint">
                {e.location} — {e.dates}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
