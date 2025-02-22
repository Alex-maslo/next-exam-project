import React from "react";
import { getAuthSingleUser } from "@/server-actions/getAuthSingleUser";
import { IUser } from "@/models/IUser";
import UserDetails from "@/components/UserDetails";

type Params = Promise<{ id: string }>;

const UserPage = async ({ params }: { params: Params }) => {
  const { id } = await params;
  const user: IUser = await getAuthSingleUser(id);

  return <UserDetails user={user} />;
};

export default UserPage;
