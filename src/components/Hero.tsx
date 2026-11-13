"use client";

import Image from "next/image";
import Link from "next/link";
import type { SiteConfig } from "@/lib/types";

export function Hero({ site }: { site: SiteConfig }) {
  return (
    <section className="relative min-h-[92svh] overflow-hidden velvet-bg pt-24 pb-12 md:pt-28 md:pb-16 flex items-center">
      {/* Subtle curtains and lighting overlay */}
      <div className="velvet-curtains" aria-hidden />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_70%_35%,rgba(192,154,85,0.22),transparent_55%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(139,16,40,0.4),transparent_50%)]" />

      <div className="relative mx-auto w-full max-w-7xl px-4 md:px-6">
        <div className="grid items-center gap-8 lg:grid-cols-12 lg:gap-8">
          
          {/* Left: Met Gala couture photo */}
          <div className="relative lg:col-span-5 flex justify-center order-2 lg:order-1">
            <div className="relative w-full max-w-md lg:max-w-none">
              {/* Soft gold halo glow */}
              <div className="absolute -inset-2 rounded-2xl bg-gradient-to-t from-gold/30 via-crimson/20 to-transparent blur-xl opacity-70" />
              
              <div className="relative overflow-hidden rounded-2xl border border-gold/40 shadow-2xl shadow-black/80 bg-gradient-to-b from-[#2a050f] to-[#120206]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/hero-akmaral.jpg"
                  alt="Дуйсембаева Акмарал — Bloggers Awards Kazakhstan Met Gala"
                  className="h-auto w-full object-cover object-top select-none transition duration-700 hover:scale-[1.02]"
                />
                
                {/* Met Gala photo badge overlay at bottom */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#120206] via-[#120206]/80 to-transparent p-4 pt-10 text-center">
                  <p className="text-[11px] uppercase tracking-[0.26em] text-gold-light font-semibold">
                    Дуйсембаева Акмарал Серікқызы
                  </p>
                  <p className="text-[10px] tracking-[0.16em] text-champagne/70 mt-0.5">
                    Автор проекта · Стиль Met Gala
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Golden Trophy & Typography */}
          <div className="lg:col-span-7 flex flex-col items-center text-center lg:items-center order-1 lg:order-2">
            
            {/* Statuette Trophy Icon */}
            <div className="relative mb-3 h-28 w-20 md:h-36 md:w-24 drop-shadow-[0_10px_25px_rgba(232,213,168,0.35)]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/gold-trophy.png"
                alt="Статуэтка Bloggers Awards"
                className="h-full w-full object-contain"
              />
            </div>

            {/* Main Title */}
            <div className="space-y-1">
              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-[0.12em] text-[#f5ebd7] leading-[1.05] drop-shadow-md">
                BLOGGERS
                <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-[0.14em]">
                  AWARDS
                </span>
              </h1>
              <p className="font-display text-xs sm:text-sm md:text-base tracking-[0.38em] text-[#d4af37] font-semibold uppercase pt-1">
                K A Z A K H S T A N
              </p>
              <p className="font-display text-4xl sm:text-5xl md:text-6xl font-light tracking-[0.2em] gold-text pt-1">
                {site.year}
              </p>
            </div>

            {/* Subtitle */}
            <p className="mt-5 max-w-lg text-xs sm:text-sm md:text-base uppercase tracking-[0.18em] text-champagne/90 font-medium leading-relaxed">
              Национальная премия
              <span className="block">блогеров, инфлюенсеров</span>
              <span className="block">и креаторов Казахстана</span>
            </p>

            {/* Style Badge */}
            <div className="mt-5 flex items-center gap-3">
              <span className="h-px w-8 sm:w-12 bg-gradient-to-r from-transparent to-gold/70" />
              <p className="text-[11px] sm:text-xs uppercase tracking-[0.28em] text-[#e8d5a8] font-semibold">
                Стиль премии — MET GALA
              </p>
              <span className="h-px w-8 sm:w-12 bg-gradient-to-l from-transparent to-gold/70" />
            </div>

            {/* Date & Location */}
            <div className="mt-4 flex items-center justify-center gap-4 text-xs sm:text-sm tracking-[0.18em] text-champagne/95 font-medium">
              <span className="inline-flex items-center gap-1.5 text-gold">
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                {site.eventDateLabel.toUpperCase()}
              </span>
              <span className="text-gold/60">|</span>
              <span className="inline-flex items-center gap-1.5 text-gold">
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {site.city.toUpperCase()}
              </span>
            </div>

            {/* Buttons */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/nominacii"
                className="rounded-md bg-gradient-to-r from-[#d4af37] via-[#eed8a1] to-[#c29c3d] px-8 py-3 text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-[#1a050c] shadow-lg shadow-gold/20 transition-all duration-300 hover:brightness-110 hover:shadow-gold/40 hover:-translate-y-0.5"
              >
                Номинации
              </Link>
              <Link
                href="/partnery#zayavka"
                className="rounded-md border border-gold/70 bg-black/40 px-8 py-3 text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-gold-light backdrop-blur-sm transition-all duration-300 hover:bg-gold/20 hover:border-gold hover:text-white hover:-translate-y-0.5"
              >
                Стать партнёром
              </Link>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
