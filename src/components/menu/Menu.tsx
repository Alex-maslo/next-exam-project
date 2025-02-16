import React from "react";
import Link from "next/link";

const Menu = () => {
  return (
    <div className="navbar flex justify-around bg-neutral text-neutral-content">
      <Link href={"/"} className="btn btn-ghost text-xl">
        Дім
      </Link>
      <Link href={"/auth"} className="btn btn-ghost text-xl">
        Аутентифікація
      </Link>
    </div>
  );
};

export default Menu;
