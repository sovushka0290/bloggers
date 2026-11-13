import type { Metadata } from "next";
import { SectionHeading } from "@/components/SectionHeading";
import { getGallery, getSiteConfig } from "@/lib/data";

export const metadata: Metadata = {
  title: "Галерея",
};

const labels: Record<string, string> = {
  announce: "Анонсы",
  organizers: "Организаторы",
  prep: "Подготовка",
  nominees: "Номинанты",
  partners: "Партнёры",
  redcarpet: "Красная дорожка",
  winners: "Победители",
  video: "Видео",
  other: "Медиа",
};

export default async function GalleryPage() {
  const [gallery, site] = await Promise.all([getGallery(), getSiteConfig()]);
  const items = gallery.filter((g) => g.year === site.year);

  return (
    <div className="bg-[#12060b] pt-28">
      <section className="mx-auto max-w-7xl px-4 py-16 md:px-6">
        <SectionHeading
          eyebrow={`Архив ${site.year}`}
          title="Галерея и медиа"
          description="До мероприятия — анонсы и подготовка. После — красная дорожка, победители, видео и итоговый фильм."
        />

        {items.length === 0 ? (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {["announce", "organizers", "prep", "nominees", "partners", "redcarpet"].map(
              (cat) => (
                <div
                  key={cat}
                  className="gold-frame flex aspect-[4/3] items-end bg-gradient-to-br from-wine/40 to-ink p-5"
                >
                  <div>
                    <p className="text-xs tracking-[0.2em] text-gold/70">СКОРО</p>
                    <p className="font-display mt-1 text-xl text-champagne">{labels[cat]}</p>
                  </div>
                </div>
              ),
            )}
          </div>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((item) => (
              <figure key={item.id} className="gold-frame overflow-hidden bg-wine/30">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={item.image} alt={item.title} className="aspect-[4/3] w-full object-cover" />
                <figcaption className="p-4">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-gold/70">
                    {labels[item.category] || item.category}
                  </p>
                  <p className="mt-1 font-display text-lg text-champagne">{item.title}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
