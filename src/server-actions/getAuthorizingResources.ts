import { IData } from "@/models/IData";
import { IUserWithTokens } from "@/models/IUserWithTokens";
import { getUserFromCookie } from "@/server-actions/getUserFromCookie";

export const baseURL = `https://dummyjson.com/auth/`;

export const getAuthorizingResources = async (
  resources: string,
  page: number = 1,
  limit: number = 0,
): Promise<IData> => {
  const user: IUserWithTokens = await getUserFromCookie();

  const res = await fetch(
    `${baseURL}${resources}?limit=${limit}&skip=${(page - 1) * limit}`,
    {
      method: "GET" /* or POST/PUT/PATCH/DELETE */,
      headers: {
        Authorization: `Bearer ${user.accessToken}`,
        "Content-Type": "application/json",
      },
    },
  );

  return await res.json();
};
