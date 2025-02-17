import React from "react";
import Link from "next/link";

const MenuNoAuthUser = () => {
  return (
    <div>
      <div className="navbar flex justify-around bg-neutral text-neutral-content">
        <Link href={"/"} className="btn btn-ghost text-xl">
          Дім
        </Link>
        <Link href={"/auth"} className="btn btn-ghost text-xl">
          Аутентифікація
        </Link>
      </div>
    </div>
  );
};

export default MenuNoAuthUser;
