import { CONTENT } from "../data/content";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function About() {
  return (
    <section id="about" className="py-[110px]">
      <div className="mx-auto max-w-[1080px] px-6">
        <SectionHeading num="01.">About Me</SectionHeading>
        <Reveal>
          {CONTENT.about.map((p) => (
            <p key={p} className="mb-[18px] max-w-[680px] text-[1.05rem] text-text-dim">
              {p}
            </p>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
