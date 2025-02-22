import React from "react";
import { IRecipe } from "@/models/IRecipe";
import { getSingleAuthorizingResource } from "@/server-actions/getSingleAuthorizingResource";
import RecipesDetails from "@/components/RecipesDetails";

type Params = Promise<{ id: string }>;

const RecipePage = async ({ params }: { params: Params }) => {
  const { id } = await params;
  const recipe: IRecipe = await getSingleAuthorizingResource(id, "recipes");
  return <RecipesDetails recipe={recipe} />;
};

export default RecipePage;
