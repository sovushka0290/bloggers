import { NextResponse } from "next/server";
import { getAdminSession } from "@/lib/auth";
import { getNominations, saveNominations } from "@/lib/data";
import type { Nomination } from "@/lib/types";

export async function GET() {
  const role = await getAdminSession();
  if (!role) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  return NextResponse.json(await getNominations());
}

export async function PUT(req: Request) {
  const role = await getAdminSession();
  if (!role) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const body = (await req.json()) as Nomination[];
  if (!Array.isArray(body)) {
    return NextResponse.json({ error: "Invalid payload" }, { status: 400 });
  }
  await saveNominations(body);
  return NextResponse.json({ ok: true });
}
