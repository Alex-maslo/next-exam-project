import { cookies } from "next/headers";

export const hasCookies = async () => {
  const cookieStore = await cookies();
  return cookieStore.has("accessToken");
};
