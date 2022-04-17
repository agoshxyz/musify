import { NextRequest, NextResponse } from "next/server";

const signedinPages = ["/", "/playlist", "/library", "/favorites"];

export default function middleware(req: NextRequest): NextResponse | null {
  const { pathname, origin } = req.nextUrl;
  if (signedinPages.find((p) => p === req.nextUrl.pathname)) {
    const token = req.cookies.TRAX_ACCESS_TOKEN;

    if (!token) {
      return NextResponse.rewrite(`${origin}/signin`);
    }
  }
}
