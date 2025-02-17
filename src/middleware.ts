import { NextRequest, NextResponse } from "next/server";
import { getDataAuthUser } from "@/api-service/dataAuthUser";

export async function middleware(request: NextRequest) {
  if (request.cookies.has("accessToken")) {
    const user = await getDataAuthUser();
    return NextResponse.redirect(new URL(`/users/${user.id}`, request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/",
};
