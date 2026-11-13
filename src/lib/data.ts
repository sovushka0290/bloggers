import { promises as fs } from "fs";
import path from "path";
import type {
  GalleryItem,
  Nomination,
  Partner,
  PartnerApplication,
  ParticipantApplication,
  SiteConfig,
} from "./types";

const dataDir = path.join(process.cwd(), "data");

async function readJson<T>(file: string, fallback: T): Promise<T> {
  try {
    const raw = await fs.readFile(path.join(dataDir, file), "utf8");
    return JSON.parse(raw) as T;
  } catch {
    return fallback;
  }
}

async function writeJson<T>(file: string, data: T): Promise<void> {
  await fs.mkdir(dataDir, { recursive: true });
  await fs.writeFile(
    path.join(dataDir, file),
    JSON.stringify(data, null, 2),
    "utf8",
  );
}

export async function getSiteConfig(): Promise<SiteConfig> {
  return readJson<SiteConfig>("site.json", {
    year: 2026,
    eventDate: "2026-12-08",
    eventDateLabel: "8 декабря 2026",
    city: "Астана",
    style: "Met Gala",
    tagline: "Лидеры мнений. Сила влияния. Признание.",
    participationFee: 200000,
    instagram: {
      author: "https://instagram.com/akmaral_duisembaeva",
      das: "https://instagram.com/das_mediakz",
      club: "https://instagram.com/influencer.kz",
      official: "",
    },
    whatsapp: "",
    phone: "",
    email: "partners@bloggersawards.kz",
  });
}

export async function getNominations(): Promise<Nomination[]> {
  const list = await readJson<Nomination[]>("nominations.json", []);
  return [...list].sort((a, b) => a.order - b.order);
}

export async function getNominationBySlug(
  slug: string,
): Promise<Nomination | undefined> {
  const list = await getNominations();
  return list.find((n) => n.slug === slug);
}

export async function saveNominations(list: Nomination[]): Promise<void> {
  await writeJson("nominations.json", list);
}

export async function getPartners(): Promise<Partner[]> {
  const list = await readJson<Partner[]>("partners.json", []);
  return [...list].sort((a, b) => a.order - b.order);
}

export async function savePartners(list: Partner[]): Promise<void> {
  await writeJson("partners.json", list);
}

export async function getGallery(): Promise<GalleryItem[]> {
  const list = await readJson<GalleryItem[]>("gallery.json", []);
  return [...list].sort((a, b) => a.order - b.order);
}

export async function saveGallery(list: GalleryItem[]): Promise<void> {
  await writeJson("gallery.json", list);
}

type ApplicationsStore = {
  partners: PartnerApplication[];
  participants: ParticipantApplication[];
};

export async function getApplications(): Promise<ApplicationsStore> {
  return readJson<ApplicationsStore>("applications.json", {
    partners: [],
    participants: [],
  });
}

export async function addPartnerApplication(
  app: Omit<PartnerApplication, "id" | "createdAt" | "status">,
): Promise<void> {
  const store = await getApplications();
  store.partners.unshift({
    ...app,
    id: crypto.randomUUID(),
    createdAt: new Date().toISOString(),
    status: "new",
  });
  await writeJson("applications.json", store);
}

export async function addParticipantApplication(
  app: Omit<ParticipantApplication, "id" | "createdAt" | "status">,
): Promise<void> {
  const store = await getApplications();
  store.participants.unshift({
    ...app,
    id: crypto.randomUUID(),
    createdAt: new Date().toISOString(),
    status: "new",
  });
  await writeJson("applications.json", store);
}

export function formatTenge(amount: number): string {
  return new Intl.NumberFormat("ru-KZ").format(amount) + " ₸";
}
