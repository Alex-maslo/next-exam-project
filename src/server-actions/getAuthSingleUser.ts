import { cookies } from "next/headers";
import { IUser } from "@/models/IUser";

export const getAuthSingleUser = async (id: string): Promise<IUser> => {
  const accessToken = (await cookies()).get("accessToken")?.value;

  const res = await fetch(`https://dummyjson.com/auth/users/${id}`, {
    method: "GET" /* or POST/PUT/PATCH/DELETE */,
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
  });

  return await res.json();
};
