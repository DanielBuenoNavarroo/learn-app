import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { auth } from "./auth";

export async function proxy(req: NextRequest) {
  const session = await auth();
  const isAuthenticated = !!session;
  const { pathname } = req.nextUrl;

  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/static") ||
    pathname === "/favicon.ico"
  ) {
    return NextResponse.next();
  }

  if (!isAuthenticated && pathname !== "/sign-in" && pathname !== "/sign-up") {
    return NextResponse.redirect(new URL("/sign-in", req.url));
  }

  if (isAuthenticated && req.nextUrl.pathname === "/sign-in") {
    return NextResponse.redirect(new URL("/", req.url));
  }

  return NextResponse.next();
}
