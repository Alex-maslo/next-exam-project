import React from "react";
import Link from "next/link";

const Menu = () => {
  return (
    <div className="navbar flex justify-around bg-neutral text-neutral-content">
      <Link href={"/auth"} className="btn btn-ghost text-xl">
        auth
      </Link>
    </div>
  );
};

export default Menu;
