import React from "react";
import Users from "@/components/users/Users";

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

const UsersPage = async ({ searchParams }: { searchParams: SearchParams }) => {
  const params = await searchParams;
  const page = Number(params.page) || 1;

  return (
    <>
      <Users page={page} />
    </>
  );
};

export default UsersPage;
