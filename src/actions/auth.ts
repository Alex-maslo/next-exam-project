"use server";

import { redirect } from "next/navigation";
import { cookies } from "next/headers";

export const signup = async (formData: FormData) => {
  const userData = {
    username: formData.get("username"),
    password: formData.get("password"),
  };

  const res = await fetch("https://dummyjson.com/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username: userData.username,
      password: userData.password,
      expiresInMins: 30, // optional, defaults to 60
    }),
    credentials: "include", // Include cookies (e.g., accessToken) in the request
  });

  const data = await res.json();

  if (!res.ok) {
    redirect("/error");
  }
  const cookiesStore = await cookies();
  cookiesStore.set("accessToken", data.accessToken);
  cookiesStore.set("refreshToken", data.refreshToken);

  redirect(`/users/${data.id}`);
};

export const exitAuthUser = async () => {
  (await cookies()).delete("accessToken");
  redirect("/auth");
};
