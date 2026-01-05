"use server";

import bcrypt from "bcrypt";

export async function hashPassword(pass: string) {
  const saltRounds = 10;
  const hashed = await bcrypt.hash(pass, saltRounds);
  return hashed;
}

export async function verifyPassword(pass: string, hashedPass: string) {
  return await bcrypt.compare(pass, hashedPass);
}
