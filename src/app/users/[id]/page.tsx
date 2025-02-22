import React from "react";
import { getSingleAuthorizingResource } from "@/server-actions/getSingleAuthorizingResource";
import { IUser } from "@/models/IUser";
import UserDetails from "@/components/UserDetails";

type Params = Promise<{ id: string }>;

const UserPage = async ({ params }: { params: Params }) => {
  const { id } = await params;
  const user: IUser = await getSingleAuthorizingResource(id, "users");

  return <UserDetails user={user} />;
};

export default UserPage;
