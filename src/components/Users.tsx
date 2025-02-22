import React from "react";
import { getAuthorizingUsers } from "@/server-actions/getAuthorizingUsers";
import { IUser } from "@/models/IUser";
import User from "@/components/User";
import Link from "next/link";

const Users = async () => {
  const users: IUser[] = await getAuthorizingUsers();

  return (
    <div className="grid sm:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {users.map((user) => (
        <Link key={user.id} href={`/users/${user.id}`}>
          <User user={user} />
        </Link>
      ))}
    </div>
  );
};

export default Users;
