import { NextResponse } from "next/server";
import { z } from "zod";
import { addPartnerApplication } from "@/lib/data";

const schema = z.object({
  company: z.string().min(2).max(200),
  contactName: z.string().min(2).max(200),
  phone: z.string().min(5).max(50),
  email: z.string().email().max(200),
  package: z.enum(["general", "official", "other"]),
  comment: z.string().max(2000).optional().default(""),
  website: z.string().optional(),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const parsed = schema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json({ error: "Проверьте заполнение полей" }, { status: 400 });
    }
    if (parsed.data.website) {
      return NextResponse.json({ ok: true });
    }
    const { website: _w, ...data } = parsed.data;
    await addPartnerApplication({
      ...data,
      comment: data.comment || "",
    });
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Серверная ошибка" }, { status: 500 });
  }
}
