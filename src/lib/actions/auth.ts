"use server";

import { auth, signIn, signOut } from "@/auth";
import { db } from "@/db/drizzle";
import { users } from "@/db/schema";
import { AuthCredentials } from "@/types";
import { hash } from "bcrypt";
import { eq } from "drizzle-orm";

export const signInWithCredentials = async ({
  email,
  password,
}: Pick<AuthCredentials, "email" | "password">) => {
  try {
    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (result?.error) {
      return { success: false, error: result.error };
    }

    return { success: true };
  } catch (e) {
    console.log("SignIn error", e);
    return { success: false, error: "SignIn error" };
  }
};

export const signUp = async ({ email, name, password }: AuthCredentials) => {
  if (!name || !email || !password) {
    return { success: false, error: "Missing fields" };
  }

  const existingUser = await db
    .select()
    .from(users)
    .where(eq(users.email, email))
    .limit(1);

  if (existingUser.length > 0) {
    return { success: false, error: "User already exists" };
  }

  const hashP = await hash(password, 10);

  try {
    await db.insert(users).values({
      name,
      email,
      password: hashP,
    });

    await signInWithCredentials({ email, password });

    return { success: true };
  } catch (e) {
    console.log(e);
    return { success: false, error: "SignUp error" };
  }
};

export const signOutWithRedirect = async () => {
  await signOut({ redirectTo: "/sign-in" });
};

export const getSession = async () => {
  try {
    const session = await auth();

    if (!session?.user?.id) {
      throw new Error("Not authenticated");
    }

    return session;
  } catch (e) {
    console.error("Error while checking session:", e);
    return false;
  }
}