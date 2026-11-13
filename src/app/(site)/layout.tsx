import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { getSiteConfig } from "@/lib/data";

export default async function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const site = await getSiteConfig();

  return (
    <>
      <Header />
      <main className="flex-1">{children}</main>
      <Footer site={site} />
    </>
  );
}
