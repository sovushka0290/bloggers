import type { Nominee } from "@/lib/types";

export function NomineeCard({ nominee }: { nominee: Nominee }) {
  return (
    <article className="gold-frame relative overflow-hidden bg-burgundy/80">
      <div className="aspect-[3/4] bg-gradient-to-b from-wine to-[#2a0610]">
        {nominee.photo ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={nominee.photo}
            alt={nominee.name}
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="flex h-full items-end p-5">
            <div className="h-2/3 w-full rounded-t-full bg-gradient-to-t from-black/40 to-champagne/10" />
          </div>
        )}
      </div>
      <div className="space-y-2 p-4">
        {nominee.isWinner && (
          <span className="inline-block rounded-sm bg-gold px-2 py-0.5 text-[10px] font-semibold tracking-[0.15em] text-ink">
            WINNER 2026
          </span>
        )}
        <h3 className="font-display text-xl text-champagne">{nominee.name}</h3>
        {nominee.instagram && (
          <a
            href={
              nominee.instagram.startsWith("http")
                ? nominee.instagram
                : `https://instagram.com/${nominee.instagram.replace("@", "")}`
            }
            target="_blank"
            rel="noreferrer"
            className="text-sm text-gold hover:text-gold-light"
          >
            {nominee.instagram.startsWith("@")
              ? nominee.instagram
              : `@${nominee.instagram.replace(/^.*\//, "")}`}
          </a>
        )}
        {nominee.bio && (
          <p className="text-sm leading-relaxed text-champagne/65">{nominee.bio}</p>
        )}
      </div>
    </article>
  );
}
