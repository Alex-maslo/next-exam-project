"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const loginUserAndGetTokens = async (formData: FormData) => {
  const res = await fetch("https://dummyjson.com/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username: formData.get("username"),
      password: formData.get("password"),
      expiresInMins: 30, // optional, defaults to 60
    }),
    credentials: "include", // Include cookies (e.g., accessToken) in the request
  });

  if (!res.ok) {
    redirect("/auth-error");
  }

  const userData = await res.json();
  const cookieStore = await cookies();
  cookieStore.set("accessToken", userData.accessToken);
  cookieStore.set("refreshToken", userData.refreshToken);
  cookieStore.set("userData", JSON.stringify(userData));
  redirect("/");
};
