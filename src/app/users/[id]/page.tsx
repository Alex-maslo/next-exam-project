import React, { FC } from "react";

type UserProps = {
  params: string;
};

const UserPage: FC<UserProps> = async ({ params }: UserProps) => {
  // const { id } = await params;
  console.log(params);

  return <div>ss</div>;
};

export default UserPage;
