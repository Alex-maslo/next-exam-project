import { IUserWithTokens } from "@/models/IUserWithTokens";
import { getUserFromCookie } from "@/server-actions/getUserFromCookie";
import { baseURL } from "@/server-actions/getAuthorizingResources";

export const getRecipesByTag = async (tag: string, resources: string) => {
  const user: IUserWithTokens = await getUserFromCookie();

  const res = await fetch(`${baseURL}${resources}/tag/${tag}`, {
    method: "GET" /* or POST/PUT/PATCH/DELETE */,
    headers: {
      Authorization: `Bearer ${user.accessToken}`,
      "Content-Type": "application/json",
    },
  });

  return res.json();
};
