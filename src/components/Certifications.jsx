import { CONTENT } from "../data/content";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Certifications() {
  return (
    <section id="certifications" className="py-[110px]">
      <div className="mx-auto max-w-[1080px] px-6">
        <SectionHeading num="05a.">Certifications</SectionHeading>

        <div className="flex flex-wrap gap-4">
          {CONTENT.certifications.map((c) => (
            <Reveal
              key={c}
              className="flex items-center gap-2.5 rounded-lg border border-border bg-surface px-[18px] py-3.5 text-[0.9rem] text-text-dim"
            >
              <span className="h-2 w-2 flex-shrink-0 rounded-full bg-accent shadow-[0_0_8px_#34d399]" />
              {c}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
