import React from "react";
import { getDataAuthUser } from "@/api-service/dataAuthUser";
import Link from "next/link";
import { exitAuthUser } from "@/actions/auth";

const MenuAuthUser = async () => {
  const user = await getDataAuthUser();
  return (
    <div>
      <div className="navbar flex justify-around bg-neutral text-neutral-content">
        <Link href={"/"} className="btn btn-ghost text-xl">
          Користувачі
        </Link>
        <Link href={"/"} className="btn btn-ghost text-xl">
          Рецепти
        </Link>

        <button onClick={exitAuthUser} className="btn btn-primary">
          Exit
        </button>
      </div>
    </div>
  );
};

export default MenuAuthUser;
