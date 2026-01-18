"use server";

import bcrypt from "bcrypt";
import { headers } from "next/headers";

export async function hashPassword(pass: string) {
  const saltRounds = 10;
  const hashed = await bcrypt.hash(pass, saltRounds);
  return hashed;
}

export async function verifyPassword(pass: string, hashedPass: string) {
  return await bcrypt.compare(pass, hashedPass);
}

export async function getServerPathname() {
  const h = await headers();
  const host = h.get("host");
  const proto = h.get("x-forwarded-proto") ?? "http";

  const fullUrl = `${proto}://${host}${h.get("x-invoke-path") ?? ""}`;
  const pathname = new URL(fullUrl).pathname;

  return pathname
}