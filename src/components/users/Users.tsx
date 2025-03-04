import React from "react";
import { getAuthorizingResources } from "@/server-actions/getAuthorizingResources";
import { IUser } from "@/models/IUser";
import User from "@/components/user/User";
import Link from "next/link";
import { IData } from "@/models/IData";
import Pagination from "@/components/pagination/Pagination";

const Users = async ({ page }: { page: number }) => {
  const data: IData = await getAuthorizingResources("users", page, 12);
  const users: IUser[] | undefined = data.users;

  if (!users) {
    return <div>No users found</div>;
  }

  return (
    <>
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {users.map((user) => (
            <Link key={user.id} href={`/users/${user.id}`}>
              <User user={user} />
            </Link>
          ))}
        </div>
      </div>

      <Pagination page={page} />
    </>
  );
};

export default Users;
