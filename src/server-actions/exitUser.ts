"use server";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const exitUser = async () => {
  const cookieStore = await cookies();

  cookieStore.delete("user");
  redirect("/");
};
