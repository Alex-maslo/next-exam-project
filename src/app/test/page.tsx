import React from "react";
import { getAuthorizingResources } from "@/server-actions/getAuthorizingResources";
import { IData } from "@/models/IData";

const TestPage = async () => {
  const data: IData = await getAuthorizingResources("recipes");
  console.log(data.recipes);

  return <div>TestPage</div>;
};

export default TestPage;
