import type { Metadata } from "next";
import Link from "next/link";
import { NomineeCard } from "@/components/NomineeCard";
import { SectionHeading } from "@/components/SectionHeading";
import { getNominations } from "@/lib/data";

export const metadata: Metadata = {
  title: "Номинанты",
};

export const dynamic = "force-static";

export default async function NomineesPage() {
  const nominations = await getNominations();
  const all = nominations.flatMap((n) =>
    n.nominees.map((nominee) => ({ ...nominee, nomination: n.title })),
  );

  return (
    <div className="bg-[#12060b] pt-28">
      <section className="mx-auto max-w-7xl px-4 py-16 md:px-6">
        <SectionHeading
          eyebrow="2026"
          title="Номинанты премии"
          description="Общий список номинантов по всем категориям. Перейдите в номинацию, чтобы увидеть детальную карточку."
        />

        {all.length === 0 ? (
          <div className="gold-frame mx-auto max-w-2xl bg-wine/30 p-10 text-center">
            <p className="text-champagne/70">
              Номинанты будут опубликованы после наполнения. Добавляйте их в админ-панели по каждой
              номинации.
            </p>
            <Link href="/nominacii" className="gold-btn mt-6">
              Смотреть номинации
            </Link>
          </div>
        ) : (
          <div className="space-y-14">
            {nominations.map((n) =>
              n.nominees.length ? (
                <div key={n.id}>
                  <div className="mb-6 flex items-end justify-between gap-4">
                    <h2 className="font-display text-2xl text-gold-light">
                      {n.code} {n.title}
                    </h2>
                    <Link href={`/nominacii/${n.slug}`} className="text-sm text-gold">
                      Открыть →
                    </Link>
                  </div>
                  <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {[...n.nominees]
                      .sort((a, b) => a.order - b.order)
                      .map((nominee) => (
                        <NomineeCard key={nominee.id} nominee={nominee} />
                      ))}
                  </div>
                </div>
              ) : null,
            )}
          </div>
        )}
      </section>
    </div>
  );
}
