import React from "react";
import { getAuthorizingUsers } from "@/server-actions/getAuthorizingUsers";
import { IUser } from "@/models/IUser";
import User from "@/components/User";

const Users = async () => {
  const users: IUser[] = await getAuthorizingUsers();

  return (
    <div className="grid sm:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {users.map((user) => (
        <User key={user.id} user={user} />
      ))}
    </div>
  );
};

export default Users;
