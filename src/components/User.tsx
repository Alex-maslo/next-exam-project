import React from "react";
import { IUser } from "@/models/IUser";
import Link from "next/link";

const User = ({ user }: { user: IUser }) => {
  return (
    <>
      <Link href={"/users/id"}>
        <div className="flex justify-between border border-gray-200 p-2">
          <div className="flex min-w-0 gap-x-4">
            <img
              alt={user.firstName}
              src={user.image}
              className="size-14 flex-none rounded-full bg-gray-50"
            />
            <div className="min-w-0 flex-auto">
              <p className="text-xl/8 font-semibold text-gray-900">
                {user.firstName} {user.lastName}
              </p>
              <p className="mt-1 truncate text-base text-gray-500">
                {user.email}
              </p>{" "}
              <p className="mt-1 truncate text-base text-gray-500">
                {user.phone}
              </p>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default User;
