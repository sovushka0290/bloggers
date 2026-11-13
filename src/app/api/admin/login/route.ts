import { NextResponse } from "next/server";
import {
  checkCredentials,
  createSessionToken,
  sessionCookieName,
} from "@/lib/auth";

export async function POST(req: Request) {
  const body = await req.json().catch(() => null);
  if (!body?.login || !body?.password) {
    return NextResponse.json({ error: "Введите логин и пароль" }, { status: 400 });
  }
  const role = checkCredentials(String(body.login), String(body.password));
  if (!role) {
    return NextResponse.json({ error: "Неверный логин или пароль" }, { status: 401 });
  }
  const res = NextResponse.json({ ok: true, role });
  res.cookies.set(sessionCookieName(), createSessionToken(role), {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 12,
  });
  return res;
}
