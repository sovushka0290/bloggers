import Link from "next/link";
import type { Nomination } from "@/lib/types";

function NominationIcon({ slug }: { slug: string }) {
  const s = "h-7 w-7 text-gold stroke-[1.4]";
  switch (slug) {
    case "moms":
      // Heart outline
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={s}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
          />
        </svg>
      );
    case "lifestyle":
      // Lotus flower outline
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={s}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4c1.5 2.5 1.5 5.5 0 8-1.5-2.5-1.5-5.5 0-8z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 12c2.5-1.2 5.5-1 7.5 1.5-2.5 1.5-5.5 0.5-7.5-1.5z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 12c-2.5-1.2-5.5-1-7.5 1.5 2.5 1.5 5.5 0.5 7.5-1.5z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 12c3.5 0 7 2 7 5-3.5 1-7-1-7-5z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 12c-3.5 0-7 2-7 5 3.5 1 7-1 7-5z"
          />
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18c3 2 9 2 12 0" />
        </svg>
      );
    case "sports":
      // Dumbbell outline
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={s}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 8v8M18 8v8M4 10v4M20 10v4M6 12h12" />
          <rect x="2" y="9" width="2" height="6" rx="1" />
          <rect x="5" y="7" width="2" height="10" rx="1" />
          <rect x="17" y="7" width="2" height="10" rx="1" />
          <rect x="20" y="9" width="2" height="6" rx="1" />
        </svg>
      );
    case "fashion":
      // Elegant dress outline
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={s}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 3l3 2 3-2v4c-1 1-1 2 0 4l3 9H6l3-9c1-2 1-3 0-4V3z"
          />
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 11h6" />
        </svg>
      );
    case "beauty":
      // Lipstick / Cosmetics outline
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={s}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 10V4.5l3-2 3 2V10" />
          <rect x="7" y="10" width="10" height="11" rx="1.5" />
          <line x1="7" y1="14" x2="17" y2="14" />
        </svg>
      );
    case "business":
      // Briefcase / Business outline
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={s}>
          <rect x="3" y="7" width="18" height="13" rx="2" strokeLinecap="round" strokeLinejoin="round" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V5a2 2 0 012-2h4a2 2 0 012 2v2" />
          <line x1="3" y1="12" x2="21" y2="12" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M11 12v2h2v-2" />
        </svg>
      );
    case "expert":
      // Star outline
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={s}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
          />
        </svg>
      );
    case "travel":
      // Airplane outline
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={s}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 12l-7-8h-3l3 8-7 2-2-1.5H3l1.5 3.5L3 19.5h2l2-1.5 7 2-3 8h3l7-8z"
          />
        </svg>
      );
    case "food":
      // Cloche / Food dish outline
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={s}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 5V3M4 17h16M5 17c0-5 3.1-9 7-9s7 4 7 9" />
          <line x1="2" y1="20" x2="22" y2="20" strokeLinecap="round" />
        </svg>
      );
    case "education":
      // Graduation cap
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={s}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3L1 9l11 6 9-4.91V17M21 10.5v6" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 12.5v4.5c0 2 3 3.5 6 3.5s6-1.5 6-3.5v-4.5" />
        </svg>
      );
    case "humor":
      // Smiley outline
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={s}>
          <circle cx="12" cy="12" r="9" />
          <path strokeLinecap="round" d="M8 14s1.5 2.5 4 2.5 4-2.5 4-2.5" />
          <circle cx="9" cy="9.5" r="1" fill="currentColor" />
          <circle cx="15" cy="9.5" r="1" fill="currentColor" />
        </svg>
      );
    case "models":
      // Photo Camera outline
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={s}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6.82 7H4a2 2 0 00-2 2v10a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2h-2.82l-1.59-2.28A2 2 0 0014.24 3H9.76a2 2 0 00-1.65.72L6.82 7z"
          />
          <circle cx="12" cy="13" r="4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={s}>
          <circle cx="12" cy="12" r="9" />
        </svg>
      );
  }
}

export function NominationCard({ nomination }: { nomination: Nomination }) {
  return (
    <Link
      href={`/nominacii/${nomination.slug}`}
      className="group relative flex flex-col items-center justify-center rounded-xl border border-[#c09a55]/45 bg-gradient-to-b from-[#2e0712]/95 via-[#1e040b]/95 to-[#130207]/95 px-3 py-5 text-center transition-all duration-300 hover:-translate-y-1 hover:border-gold hover:shadow-[0_0_24px_rgba(192,154,85,0.35)]"
    >
      <div className="mb-2.5 flex h-10 w-10 items-center justify-center rounded-full bg-gold/10 transition group-hover:scale-110 group-hover:bg-gold/20">
        <NominationIcon slug={nomination.slug} />
      </div>
      <h3 className="font-display text-base font-semibold tracking-[0.14em] text-champagne uppercase group-hover:text-gold-light md:text-lg">
        {nomination.title}
      </h3>
      <p className="mt-1 text-xs tracking-wider text-champagne/70 group-hover:text-champagne">
        {nomination.subtitle}
      </p>
    </Link>
  );
}
