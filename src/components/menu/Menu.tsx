import React from "react";
import { cookies } from "next/headers";
import MenuAuthUser from "@/components/menu/MenuAuthUser";
import MenuNoAuthUser from "@/components/menu/MenuNoAuthUser";

const Menu = async () => {
  const cookieStore = await cookies();
  const accessToken = cookieStore.get("accessToken");

  return <>{accessToken ? <MenuAuthUser /> : <MenuNoAuthUser />}</>;
};

export default Menu;
