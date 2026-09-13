import Reveal from "./Reveal";

export default function SectionHeading({ num, children }) {
  return (
    <Reveal
      as="h2"
      className="mb-12 flex items-baseline gap-2.5 font-mono text-[clamp(1.6rem,4vw,2.1rem)] font-bold"
    >
      <span className="text-[1.1rem] text-accent">{num}</span>
      {children}
    </Reveal>
  );
}
