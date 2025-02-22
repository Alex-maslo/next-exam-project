import { cookies } from "next/headers";

export const baseURL = `https://dummyjson.com/auth/`;

export const getAuthorizingResources = async (
  resources: string,
): Promise<any> => {
  const accessToken = (await cookies()).get("accessToken")?.value;

  const res = await fetch(`${baseURL}${resources}?limit=0`, {
    method: "GET" /* or POST/PUT/PATCH/DELETE */,
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
  });

  return await res.json();
};
