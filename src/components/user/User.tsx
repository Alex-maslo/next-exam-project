import React from "react";
import { IUser } from "@/models/IUser";
import Image from "next/image";

const User = ({ user }: { user: IUser }) => {
  return (
    <>
      <div className="flex justify-between border border-gray-200 p-2">
        <div className="flex min-w-0 gap-x-4">
          <div className="relative w-1/4">
            <Image
              className="object-contain"
              alt={user.firstName}
              src={user.image}
              fill={true}
            />
          </div>
          <div className="min-w-0 flex-auto">
            <p className="text-xl/8 font-semibold text-gray-900">
              {user.id} - {user.firstName} {user.lastName}
            </p>
            <p className="mt-1 truncate w-64 text-base text-gray-500">
              {user.email}
            </p>
            <p className="mt-1  text-base text-gray-500">{user.phone}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default User;
