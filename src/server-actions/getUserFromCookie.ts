import { cookies } from "next/headers";

export const getUserFromCookie = async () => {
  const cookieStore = await cookies();
  if (!cookieStore.has("user")) return null;

  const value = cookieStore.get("user")?.value || "";

  return JSON.parse(value);
};
