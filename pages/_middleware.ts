import { NextRequest, NextResponse } from "next/server";
import { authPages } from "../constants/constants";

export default function middleware(req: NextRequest): NextResponse | null {
  const { pathname, origin } = req.nextUrl;
  if (authPages.find((p) => p === req.nextUrl.pathname)) {
    const token = req.cookies.TRAX_ACCESS_TOKEN;

    if (!token) {
      return NextResponse.rewrite(`${origin}/signin`);
    }
  }
}
