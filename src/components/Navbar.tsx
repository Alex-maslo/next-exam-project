import React from "react";
import Link from "next/link";
import { hasCookies } from "@/server-actions/hasCookies";
import { cookies } from "next/headers";
import { deleteAllCookies } from "@/server-actions/getAccessToken";

const Navbar = async () => {
  const accessToken = await hasCookies();

  let userLogo = "";

  if (accessToken) {
    const cookieStore = (await cookies()).get("userData")?.value as string;
    userLogo = JSON.parse(cookieStore).image;
  }

  return (
    <div className="navbar bg-neutral text-neutral-content flex flex-col sm:flex-row  justify-around">
      {accessToken ? (
        <>
          <div className="w-10 rounded-full">
            <img alt="user photo" src={userLogo} />
          </div>

          <div className="form-control">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered w-22 text-neutral "
            />
          </div>

          <Link href={"/users"} className="btn btn-ghost text-xl">
            Users
          </Link>

          <Link href={"/products"} className="btn btn-ghost text-xl">
            Products
          </Link>

          <Link href={"/recipes"} className="btn btn-ghost text-xl">
            Recipes
          </Link>

          <button
            onClick={deleteAllCookies}
            className="btn btn-primary text-xl"
          >
            Exit
          </button>
        </>
      ) : (
        <>
          <Link href={"/auth"} className="btn btn-ghost text-xl">
            Authorization
          </Link>
        </>
      )}
    </div>
  );
};

export default Navbar;
