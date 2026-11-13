import type { Metadata } from "next";
import { NominationCard } from "@/components/NominationCard";
import { SectionHeading } from "@/components/SectionHeading";
import { getNominations } from "@/lib/data";

export const metadata: Metadata = {
  title: "Номинации",
};

export const dynamic = "force-static";

export default async function NominationsPage() {
  const nominations = await getNominations();

  return (
    <div className="bg-[#12060b] pt-28">
      <section className="mx-auto max-w-7xl px-4 py-16 md:px-6">
        <SectionHeading
          eyebrow="Bloggers Awards 2026"
          title="Двенадцать номинаций"
          description="Каждая номинация — отдельная страница с описанием, фотографиями и профилями номинантов."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {nominations.map((n) => (
            <NominationCard key={n.id} nomination={n} />
          ))}
        </div>
      </section>
    </div>
  );
}
