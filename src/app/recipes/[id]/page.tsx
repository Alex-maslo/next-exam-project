import React from "react";
import { IRecipe } from "@/models/IRecipe";
import { getSingleAuthorizingResource } from "@/server-actions/getSingleAuthorizingResource";
import RecipesDetail from "@/components/recipe-detail/RecipesDetail";

type Params = Promise<{ id: string }>;

const RecipePage = async ({ params }: { params: Params }) => {
  const { id } = await params;
  const recipe: IRecipe = (await getSingleAuthorizingResource(
    id,
    "recipes",
  )) as IRecipe;
  return <RecipesDetail recipe={recipe} />;
};

export default RecipePage;
