import { cookies } from "next/headers";

export const UserAccessToken = async () => {
  const cookiesStore = await cookies();
  return cookiesStore.has("accessToken");
};
