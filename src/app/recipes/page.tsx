import React from "react";
import Recipes from "@/components/recipes/Recipes";

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

const RecipesPage = async ({
  searchParams,
}: {
  searchParams: SearchParams;
}) => {
  const params = await searchParams;
  const page = Number(params.page) || 1;

  return (
    <>
      <Recipes page={page} />;
    </>
  );
};

export default RecipesPage;
