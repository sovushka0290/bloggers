export type Nominee = {
  id: string;
  name: string;
  instagram: string;
  bio: string;
  photo: string;
  order: number;
  isWinner?: boolean;
};

export type Nomination = {
  id: string;
  order: number;
  code: string;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  nominees: Nominee[];
};

export type PartnerApplication = {
  id: string;
  company: string;
  contactName: string;
  phone: string;
  email: string;
  package: "general" | "official" | "other";
  comment: string;
  createdAt: string;
  status: "new" | "in_progress" | "done";
};

export type ParticipantApplication = {
  id: string;
  fullName: string;
  instagram: string;
  phone: string;
  format: string;
  comment: string;
  createdAt: string;
  status: "new" | "in_progress" | "done";
};

export type Partner = {
  id: string;
  name: string;
  logo: string;
  description: string;
  url?: string;
  tier: "general" | "official" | "media" | "other";
  order: number;
};

export type GalleryItem = {
  id: string;
  title: string;
  image: string;
  category: "announce" | "organizers" | "prep" | "nominees" | "partners" | "redcarpet" | "winners" | "video" | "other";
  year: number;
  order: number;
};

export type SiteConfig = {
  year: number;
  eventDate: string;
  eventDateLabel: string;
  city: string;
  style: string;
  tagline: string;
  participationFee: number;
  instagram: {
    author: string;
    das: string;
    club: string;
    official: string;
  };
  whatsapp: string;
  phone: string;
  email: string;
};

export type AdminRole = "admin" | "content";
