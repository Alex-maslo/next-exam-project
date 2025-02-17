import { cookies } from "next/headers";

export const getDataAuthUser = async () => {
  const res = await fetch("https://dummyjson.com/auth/me", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${(await cookies()).get("accessToken")?.value}`, // Pass JWT via Authorization header
    },
    credentials: "include", // Include cookies (e.g., accessToken) in the request
  });

  return await res.json();
};
