import React from "react";
import { getAuthorizingResources } from "@/server-actions/getAuthorizingResources";
import { IUser } from "@/models/IUser";
import User from "@/components/User";
import Link from "next/link";
import { IData } from "@/models/IData";

const Users = async () => {
  const data: IData = await getAuthorizingResources("users");
  const users: IUser[] | undefined = data.users;

  if (!users) {
    return <div>No users found</div>;
  }

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
