import { NextResponse } from "next/server";
import { z } from "zod";
import { addParticipantApplication } from "@/lib/data";

const schema = z.object({
  fullName: z.string().min(2).max(200),
  instagram: z.string().min(2).max(200),
  phone: z.string().min(5).max(50),
  format: z.string().min(2).max(100),
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
    await addParticipantApplication({
      ...data,
      comment: data.comment || "",
    });
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Серверная ошибка" }, { status: 500 });
  }
}
