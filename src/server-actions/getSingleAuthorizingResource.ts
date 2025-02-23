import { cookies } from "next/headers";
import { baseURL } from "@/server-actions/getAuthorizingResources";

export const getSingleAuthorizingResource = async <T>(
  id: string,
  resource: string,
): Promise<T> => {
  const accessToken = (await cookies()).get("accessToken")?.value;

  const res = await fetch(`${baseURL}${resource}/${id}`, {
    method: "GET" /* or POST/PUT/PATCH/DELETE */,
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
  });

  return await res.json();
};
