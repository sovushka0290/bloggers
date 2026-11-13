import type { Metadata } from "next";
import Link from "next/link";
import { getSiteConfig } from "@/lib/data";

export const metadata: Metadata = {
  title: "Организаторы премии — DAS Media & Influencer Club",
  description: "Организаторы национальной премии Bloggers Awards Kazakhstan 2026.",
};

export const dynamic = "force-static";

export default async function OrganizersPage() {
  const site = await getSiteConfig();

  return (
    <div className="velvet-bg pt-28 pb-20">
      <section className="mx-auto max-w-7xl px-4 md:px-6">
        
        {/* Header */}
        <div className="mb-14 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-gold">
            Команда проекта
          </p>
          <h1 className="font-display mt-3 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-champagne">
            ОРГАНИЗАТОРЫ ПРЕМИИ
          </h1>
          <div className="mx-auto mt-4 h-0.5 w-24 bg-gradient-to-r from-transparent via-gold to-transparent" />
        </div>

        {/* 1. Organizers Companies Cards */}
        <div className="grid gap-8 lg:grid-cols-2">
          
          {/* DAS MEDIA */}
          <article className="rounded-2xl border border-gold/45 bg-gradient-to-br from-[#3b0816] via-[#24050d] to-[#160207] p-8 md:p-10 shadow-2xl">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-[0.14em] text-champagne">
                DAS MEDIA
              </h2>
              <span className="rounded-full border border-gold/70 bg-gold/15 px-4 py-1 text-xs font-bold uppercase tracking-[0.18em] text-gold-light">
                7 ЛЕТ НА РЫНКЕ
              </span>
            </div>

            <p className="mt-5 text-base font-semibold text-gold-light leading-snug">
              Маркетинговое, influencer marketing и digital-агентство полного цикла.
            </p>

            <div className="mt-4 rounded-xl border border-gold/20 bg-black/30 p-4 text-xs sm:text-sm text-champagne/80 leading-relaxed">
              <p className="font-semibold text-champagne">Ключевые направления:</p>
              <p className="mt-1">
                SMM · PR · Инфлюенсер-маркетинг · Продакшн под ключ · Контент · Мероприятия · Подкасты · Собственная фотостудия DAS Photostudio
              </p>
            </div>

            <p className="mt-5 text-sm leading-relaxed text-champagne/70">
              DAS Media успешно реализует масштабные рекламные кампании для казахстанских и международных брендов, продвигает лидеров мнений и создает вирусный контент, формирующий тренды рынка.
            </p>

            <div className="mt-8 pt-4 border-t border-gold/20 flex items-center justify-between">
              <a
                href={site.instagram.das}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-gold hover:text-gold-light"
              >
                Instagram: @das_mediakz →
              </a>
            </div>
          </article>

          {/* INFLUENCER CLUB */}
          <article className="rounded-2xl border border-gold/45 bg-gradient-to-br from-[#3b0816] via-[#24050d] to-[#160207] p-8 md:p-10 shadow-2xl">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-[0.14em] text-champagne">
                INFLUENCER CLUB
              </h2>
              <span className="rounded-full border border-gold/70 bg-gold/15 px-4 py-1 text-xs font-bold uppercase tracking-[0.18em] text-gold-light">
                3 ГОДА РАЗВИТИЯ
              </span>
            </div>

            <p className="mt-5 text-base font-semibold text-gold-light leading-snug">
              Сообщество для блогеров, инфлюенсеров и предпринимателей.
            </p>

            <div className="mt-4 rounded-xl border border-gold/20 bg-black/30 p-4 text-xs sm:text-sm text-champagne/80 leading-relaxed">
              <p className="font-semibold text-champagne">Деятельность клуба:</p>
              <p className="mt-1">
                Обучение · Нетворкинг · Встречи с экспертами · Развитие личного бренда · Фотосессии · Сотрудничество с брендами
              </p>
            </div>

            <p className="mt-5 text-sm leading-relaxed text-champagne/70">
              Influencer Club объединяет авторов контента и предпринимателей для синергии, взаимного роста и создания качественных коллабораций.
            </p>

            <div className="mt-8 pt-4 border-t border-gold/20 flex items-center justify-between">
              <a
                href={site.instagram.club}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-gold hover:text-gold-light"
              >
                Instagram: @influencer.kz →
              </a>
            </div>
          </article>

        </div>

        {/* 2. Key People (Author & Co-organizer) */}
        <div className="mt-16">
          <h2 className="font-display text-2xl sm:text-3xl text-center text-champagne uppercase tracking-[0.18em] mb-10">
            Ключевые лица проекта
          </h2>

          <div className="grid gap-8 md:grid-cols-2">
            
            {/* Duisenbaeva Akmaral */}
            <div className="rounded-2xl border border-gold/40 bg-[#f4ebe1] p-6 sm:p-8 text-ink shadow-2xl flex flex-col sm:flex-row gap-6 items-center">
              <div className="relative aspect-[3/4] w-40 shrink-0 overflow-hidden rounded-xl border border-gold shadow-md bg-[#2a050f]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/author-akmaral.jpg"
                  alt="Дуйсембаева Акмарал Серікқызы"
                  className="h-full w-full object-cover object-top"
                />
              </div>
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-[#8b1028]">
                  Автор проекта
                </p>
                <h3 className="font-display mt-1 text-2xl font-bold text-[#4d0b1a]">
                  ДУЙСЕНБАЕВА АКМАРАЛ СЕРІКҚЫЗЫ
                </h3>
                <ul className="mt-3 space-y-1.5 text-xs text-[#2a1b1e]">
                  <li>✓ Основатель DAS Media & Influencer Club</li>
                  <li>✓ Блогер-миллионник, мама четверых детей</li>
                  <li>✓ Член правления Ассоциации деловых женщин Казахстана</li>
                </ul>
                <div className="mt-4">
                  <Link href="/avtor" className="text-xs font-bold uppercase tracking-wider text-[#8b1028] hover:underline">
                    Подробнее об авторе →
                  </Link>
                </div>
              </div>
            </div>

            {/* Manepova Altynai */}
            <div className="rounded-2xl border border-gold/40 bg-[#f4ebe1] p-6 sm:p-8 text-ink shadow-2xl flex flex-col sm:flex-row gap-6 items-center">
              <div className="relative aspect-[3/4] w-40 shrink-0 overflow-hidden rounded-xl border border-gold shadow-md bg-[#2a050f]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/coorganizer-altynai.jpg"
                  alt="Манепова Алтынай"
                  className="h-full w-full object-cover object-top"
                />
              </div>
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-[#8b1028]">
                  Со-организатор проекта
                </p>
                <h3 className="font-display mt-1 text-2xl font-bold text-[#4d0b1a]">
                  МАНЕПОВА АЛТЫНАЙ
                </h3>
                <p className="text-xs text-[#8b6a2e] font-medium">(Моне Алтынай)</p>
                <ul className="mt-3 space-y-1.5 text-xs text-[#2a1b1e]">
                  <li>✓ Директор департамента Influence Marketing в DAS Media</li>
                  <li>✓ Блогер · Маркетолог</li>
                  <li>✓ Эксперт по развитию личного бренда</li>
                </ul>
              </div>
            </div>

          </div>
        </div>

      </section>
    </div>
  );
}
