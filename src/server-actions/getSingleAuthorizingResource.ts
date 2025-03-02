import { baseURL } from "@/server-actions/getAuthorizingResources";
import { getUserFromCookie } from "@/server-actions/getUserFromCookie";
import { IUserWithTokens } from "@/models/IUserWithTokens";

export const getSingleAuthorizingResource = async <T>(
  id: string,
  resource: string,
): Promise<T> => {
  const user: IUserWithTokens = await getUserFromCookie();

  const res = await fetch(`${baseURL}${resource}/${id}`, {
    method: "GET" /* or POST/PUT/PATCH/DELETE */,
    headers: {
      Authorization: `Bearer ${user.accessToken}`,
      "Content-Type": "application/json",
    },
  });

  return await res.json();
};
