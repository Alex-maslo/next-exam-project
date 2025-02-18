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

  const userData = await res.json();

  const cookieStore = await cookies();
  cookieStore.set("accessToken", userData.accessToken);
  cookieStore.set("refreshToken", userData.refreshToken);
  cookieStore.set("userData", JSON.stringify(userData));
  redirect("/");
};

export const deleteAllCookies = async () => {
  const cookieStore = await cookies();

  cookieStore.delete("accessToken");
  cookieStore.delete("refreshToken");
  cookieStore.delete("userData");
  redirect("/");
};

export const getCurrentAuthUser = async () => {
  const cookieStore = await cookies();
  const value = cookieStore.get("accessToken")?.value;

  /* providing accessToken in bearer */
  const res = await fetch("https://dummyjson.com/auth/me", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${value}`, // Pass JWT via Authorization header
    },
    credentials: "include", // Include cookies (e.g., accessToken) in the request
  });
  const userData = await res.json();
};
