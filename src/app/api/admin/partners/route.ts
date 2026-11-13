import { NextResponse } from "next/server";
import { getAdminSession } from "@/lib/auth";
import { getPartners, savePartners } from "@/lib/data";
import type { Partner } from "@/lib/types";

export async function GET() {
  const role = await getAdminSession();
  if (!role) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  return NextResponse.json(await getPartners());
}

export async function PUT(req: Request) {
  const role = await getAdminSession();
  if (!role) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const body = (await req.json()) as Partner[];
  if (!Array.isArray(body)) {
    return NextResponse.json({ error: "Invalid payload" }, { status: 400 });
  }
  await savePartners(body);
  return NextResponse.json({ ok: true });
}
