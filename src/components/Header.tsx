"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { mainNav } from "@/lib/nav";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? "bg-[#180309]/95 backdrop-blur-md border-b border-gold/25 shadow-lg"
          : "bg-gradient-to-b from-black/80 via-black/40 to-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 md:px-6">
        
        {/* Logo matching the PDF: Gold Trophy + Text */}
        <Link href="/" className="relative z-10 shrink-0 flex items-center gap-2.5 group">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/gold-trophy.png"
            alt="Bloggers Awards Kazakhstan"
            className="h-8 md:h-10 w-auto object-contain drop-shadow transition group-hover:scale-105"
          />
          <div className="flex flex-col">
            <span className="font-display text-sm md:text-base font-bold tracking-[0.14em] text-champagne leading-none group-hover:text-gold-light">
              BLOGGERS AWARDS
            </span>
            <span className="text-[9px] md:text-[10px] tracking-[0.32em] text-gold uppercase mt-0.5">
              KAZAKHSTAN
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-1 lg:flex xl:gap-2">
          {mainNav.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`px-3 py-1.5 text-xs font-semibold tracking-[0.14em] transition-colors uppercase ${
                  active
                    ? "text-gold-light border-b border-gold"
                    : "text-champagne/80 hover:text-gold"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* CTA Button */}
        <div className="flex items-center gap-3">
          <Link
            href="/partnery#zayavka"
            className="rounded border border-gold/80 bg-transparent px-3.5 py-1.5 text-xs font-semibold tracking-[0.16em] uppercase text-gold transition duration-300 hover:bg-gold hover:text-ink md:px-4 md:py-2"
          >
            Стать партнёром
          </Link>

          {/* Mobile hamburger button */}
          <button
            type="button"
            aria-label="Меню"
            className="lg:hidden inline-flex h-9 w-9 items-center justify-center rounded border border-gold/40 text-gold"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">Меню</span>
            <div className="space-y-1.5">
              <span className={`block h-0.5 w-5 bg-gold transition ${open ? "translate-y-[8px] rotate-45" : ""}`} />
              <span className={`block h-0.5 w-5 bg-gold transition ${open ? "opacity-0" : ""}`} />
              <span className={`block h-0.5 w-5 bg-gold transition ${open ? "-translate-y-[8px] -rotate-45" : ""}`} />
            </div>
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      {open && (
        <div className="lg:hidden border-t border-gold/20 bg-[#19030a] px-4 py-4 shadow-xl">
          <nav className="flex flex-col gap-1">
            {mainNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="border-b border-white/5 py-2.5 text-xs font-semibold uppercase tracking-[0.16em] text-champagne/90 hover:text-gold"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/uchastie"
              className="py-2.5 text-xs font-semibold uppercase tracking-[0.16em] text-gold"
            >
              Участие в премии
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
