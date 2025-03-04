import React from "react";
import Link from "next/link";
import { exitUser } from "@/server-actions/exitUser";
import { isAuthenticated } from "@/server-actions/isAuthenticated";
import { getUserFromCookie } from "@/server-actions/getUserFromCookie";
import { IUserWithTokens } from "@/models/IUserWithTokens";
import Image from "next/image";

const Navbar = async () => {
  const isAuth: boolean = await isAuthenticated();
  const user: IUserWithTokens = await getUserFromCookie();

  return (
    <div className="navbar bg-neutral text-neutral-content flex flex-col sm:flex-row  justify-around">
      {isAuth ? (
        <>
          <div className="form-control">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered w-22 text-neutral "
            />
          </div>
          <Link href={"/recipes"} className="btn btn-ghost text-xl">
            Recipes
          </Link>

          <Link href={"/users"} className="btn btn-ghost text-xl">
            Users
          </Link>

          <div className="avatar relative h-10 w-10">
            <Image src={user.image} alt="User Logo" fill={true} />
          </div>
          <div className="text-xl font-semibold">
            <h2>
              {user.firstName} {user.lastName}
            </h2>
          </div>

          <button onClick={exitUser} className="btn btn-primary text-xl">
            Exit
          </button>
        </>
      ) : (
        <>
          <Link href={"/auth"} className="btn btn-ghost text-xl">
            Login
          </Link>
        </>
      )}
    </div>
  );
};

export default Navbar;
