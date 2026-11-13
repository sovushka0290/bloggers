import type { Metadata } from "next";
import Link from "next/link";
import { getSiteConfig } from "@/lib/data";

export const metadata: Metadata = {
  title: "Автор проекта — Дуйсембаева Акмарал Серікқызы",
  description: "Автор и создатель национальной премии Bloggers Awards Kazakhstan.",
};

export default async function AuthorPage() {
  const site = await getSiteConfig();

  return (
    <div className="bg-[#f4ebe1] pt-28 pb-20 text-ink">
      <section className="mx-auto max-w-7xl px-4 md:px-6">
        
        <div className="rounded-2xl border border-gold/40 bg-white/80 p-8 md:p-12 shadow-2xl backdrop-blur-sm">
          <div className="grid gap-10 lg:grid-cols-12 items-center">
            
            {/* Photo */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative aspect-[3/4] w-full max-w-sm overflow-hidden rounded-2xl border border-gold shadow-xl bg-[#2a050f]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/author-akmaral.jpg"
                  alt="Дуйсембаева Акмарал Серікқызы"
                  className="h-full w-full object-cover object-top"
                />
              </div>
            </div>

            {/* Info */}
            <div className="lg:col-span-7">
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#8b1028]">
                Автор проекта
              </p>
              <h1 className="font-display mt-2 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#4d0b1a] leading-tight">
                ДУЙСЕНБАЕВА<br />
                АКМАРАЛ СЕРІКҚЫЗЫ
              </h1>
              <div className="mt-4 h-0.5 w-24 bg-gold" />

              <div className="mt-6 space-y-4">
                <ul className="space-y-3 text-sm md:text-base text-[#2a1b1e]">
                  {[
                    "Автор проекта Bloggers Awards Kazakhstan",
                    "Основатель агентства DAS Media (7 лет на рынке)",
                    "Основатель сообщества Influencer Club (3 года развития)",
                    "Блогер-миллионник",
                    "Мама четверых детей",
                    "Член правления Ассоциации деловых женщин Казахстана",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#d4af37]/20 text-[#8b6a2e] font-bold text-xs">
                        ✓
                      </span>
                      <span className="font-medium">{item}</span>
                    </li>
                  ))}
                </ul>

                <p className="pt-4 text-sm md:text-base leading-relaxed text-[#2a1b1e]/85">
                  Акмарал Дуйсембаева — ведущий казахстанский предприниматель, создатель медиа-проектов и инфлюенсер с миллионной аудиторией. Премия <strong>Bloggers Awards Kazakhstan</strong> создана с целью объединить профессиональное комьюнити, задать высокие стандарты ответственности блогеров перед обществом и открыть новые горизонты для партнёрства между креаторами и бизнесом.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-4 pt-4 border-t border-[#4d0b1a]/15">
                <a
                  href={site.instagram.author}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-md bg-gradient-to-r from-[#d4af37] via-[#eed8a1] to-[#c29c3d] px-6 py-2.5 text-xs font-bold uppercase tracking-[0.18em] text-[#1a050c] shadow-md hover:brightness-110"
                >
                  Instagram автора
                </a>
                <Link
                  href="/organizatory"
                  className="rounded-md border border-[#4d0b1a]/40 px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-[#4d0b1a] hover:bg-[#4d0b1a]/10"
                >
                  Организаторы премии
                </Link>
              </div>

            </div>

          </div>
        </div>

      </section>
    </div>
  );
}
