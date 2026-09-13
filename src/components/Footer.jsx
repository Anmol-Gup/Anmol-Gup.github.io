import { CONTENT } from "../data/content";

export default function Footer() {
  return (
    <footer className="border-t border-border py-7">
      <div className="mx-auto flex max-w-[1080px] flex-wrap justify-between gap-2 px-6 font-mono text-[0.8rem] text-text-faint">
        <p>Built by {CONTENT.meta.name} — designed &amp; coded from scratch.</p>
        <p>&copy; {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
}
