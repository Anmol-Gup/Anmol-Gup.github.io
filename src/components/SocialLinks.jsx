import { CONTENT } from "../data/content";
import { SOCIAL_ICONS } from "../icons/Icons";

export default function SocialLinks({ className = "" }) {
  return (
    <div className={`flex gap-[18px] ${className}`}>
      {CONTENT.socials.map((s) => {
        const Icon = SOCIAL_ICONS[s.icon];
        return (
          <a
            key={s.name}
            href={s.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={s.name}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-border text-text-dim transition-all hover:-translate-y-1 hover:border-accent hover:text-accent"
          >
            <Icon className="h-[18px] w-[18px]" />
          </a>
        );
      })}
    </div>
  );
}
