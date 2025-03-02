"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { IUserWithTokens } from "@/models/IUserWithTokens";

export const loginUserAndGetTokens = async (formData: FormData) => {
  const res = await fetch("https://dummyjson.com/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username: formData.get("username"),
      password: formData.get("password"),
      // expiresInMins: 60, // optional, defaults to 60
    }),
    credentials: "include", // Include cookies (e.g., accessToken) in the request
  });

  if (!res.ok) {
    redirect("/auth-error");
  }

  const user: IUserWithTokens = await res.json();

  const cookieStore = await cookies();
  cookieStore.set("user", JSON.stringify(user));

  redirect("/");
};
