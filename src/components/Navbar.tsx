import React from "react";
import Link from "next/link";
import { isAuthenticated } from "@/server-actions/isAuthenticated";
import { exitUser } from "@/server-actions/exitUser";
import { cookies } from "next/headers";
import { IUserWithTokens } from "@/models/IUserWithTokens";

const Navbar = async () => {
  const accessToken = await isAuthenticated();

  let user: IUserWithTokens = {
    id: 0,
    username: "",
    email: "",
    firstName: "",
    lastName: "",
    gender: "",
    image: "",
    accessToken: "",
    refreshToken: "",
  };

  if (accessToken) {
    const userData = (await cookies())?.get("userData")?.value;
    user = userData ? JSON.parse(userData) : {};
  }

  return (
    <div className="navbar bg-neutral text-neutral-content flex flex-col sm:flex-row  justify-around">
      {accessToken ? (
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

          <div className="avatar h-10">
            <img className="object-contain" src={user.image} alt="User Logo" />
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
