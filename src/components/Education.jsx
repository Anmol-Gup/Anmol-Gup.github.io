import { CONTENT } from "../data/content";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Education() {
  const e = CONTENT.education;

  return (
    <section id="education" className="py-[110px]">
      <div className="mx-auto max-w-[1080px] px-6">
        <SectionHeading num="05.">Education</SectionHeading>

        <Reveal className="max-w-[560px] rounded-xl border border-border bg-surface px-8 py-7">
          <div className="font-mono text-[1.1rem] font-bold text-text">{e.degree}</div>
          <div className="mt-1.5 text-text-dim">{e.institution}</div>
          <div className="mt-3 flex gap-5 font-mono text-[0.85rem] text-accent">
            <span>{e.dates}</span>
            <span>CGPA: {e.cgpa}</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
