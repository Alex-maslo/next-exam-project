"use server";

import { redirect } from "next/navigation";

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
  // console.log(res.headers);
  // console.log(data);

  if (!res.ok) {
    redirect("/error");
  }

  redirect(`/users/${data.id}`);
};
