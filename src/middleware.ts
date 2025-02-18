// import { NextRequest, NextResponse } from "next/server";
import { NextRequest } from "next/server";

export const middleware = async (request: NextRequest) => {
  const cookie: boolean = request.cookies.has("accessToken");

  console.log(`--mid working`);
};
