import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { NomineeCard } from "@/components/NomineeCard";
import { getNominationBySlug, getNominations } from "@/lib/data";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  const list = await getNominations();
  return list.map((n) => ({ slug: n.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const nomination = await getNominationBySlug(slug);
  if (!nomination) return { title: "Номинация" };
  return {
    title: `${nomination.code} ${nomination.title} — ${nomination.subtitle}`,
    description: nomination.description,
  };
}

export default async function NominationDetailPage({ params }: Props) {
  const { slug } = await params;
  const nomination = await getNominationBySlug(slug);
  if (!nomination) {
    notFound();
    return null;
  }

  const nominees = [...nomination.nominees].sort((a, b) => a.order - b.order);

  return (
    <div className="velvet-bg paper-texture pt-28">
      <section className="mx-auto max-w-7xl px-4 py-16 md:px-6">
        <Link href="/nominacii" className="text-sm text-gold hover:text-gold-light">
          ← Все номинации
        </Link>
        <p className="mt-6 text-xs tracking-[0.3em] text-gold/80">{nomination.code}</p>
        <h1 className="font-display mt-3 text-4xl gold-text md:text-6xl">
          {nomination.title}
        </h1>
        <p className="mt-2 text-lg text-champagne/70">{nomination.subtitle}</p>
        <div className="mt-5 h-px w-28 bg-gradient-to-r from-gold to-transparent" />
        <p className="mt-6 max-w-3xl text-base leading-relaxed text-champagne/75 md:text-lg">
          {nomination.description}
        </p>

        <div className="mt-14">
          <h2 className="font-display text-2xl text-gold-light md:text-3xl">Номинанты</h2>
          {nominees.length === 0 ? (
            <p className="mt-6 text-champagne/55">
              Состав номинантов скоро появится. Список управляется через административную панель.
            </p>
          ) : (
            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {nominees.map((nominee) => (
                <NomineeCard key={nominee.id} nominee={nominee} />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
