import React from "react";
import { getSingleAuthorizingResource } from "@/server-actions/getSingleAuthorizingResource";
import { IUser } from "@/models/IUser";
import UserDetail from "@/components/user-detail/UserDetail";

type Params = Promise<{ id: string }>;

const UserPage = async ({ params }: { params: Params }) => {
  const { id } = await params;
  const user: IUser = await getSingleAuthorizingResource(id, "users");

  return <UserDetail user={user} />;
};

export default UserPage;
