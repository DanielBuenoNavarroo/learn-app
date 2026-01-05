import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const isAuthenticated = true;

  if (!isAuthenticated && req.nextUrl.pathname !== "/sign-in") {
    return NextResponse.redirect(new URL("/sign-in", req.url));
  }

  if (isAuthenticated && req.nextUrl.pathname === "/sign-in") {
    return NextResponse.redirect(new URL("/", req.url));
  }

  return NextResponse.next();
}
