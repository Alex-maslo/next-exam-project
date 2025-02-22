import { cookies } from "next/headers";
import { IUser } from "@/models/IUser";

export const getAuthorizingUsers = async (): Promise<IUser[]> => {
  const accessToken = (await cookies()).get("accessToken")?.value;

  const res = await fetch("https://dummyjson.com/auth/users?limit=0", {
    method: "GET" /* or POST/PUT/PATCH/DELETE */,
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
  });
  const { users } = await res.json();
  return users;
};
