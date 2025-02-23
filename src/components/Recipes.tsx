import React from "react";
import { getAuthorizingResources } from "@/server-actions/getAuthorizingResources";
import Link from "next/link";
import Recipe from "@/components/Recipe";
import { IData } from "@/models/IData";
import { IRecipe } from "@/models/IRecipe";

const Recipes = async () => {
  const data: IData = await getAuthorizingResources("recipes");
  const recipes: IRecipe[] | undefined = data.recipes;

  if (!recipes) {
    return <div>No recipes found</div>;
  }

  return (
    <div className="grid sm:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {recipes.map((recipe) => (
        <Link key={recipe.id} href={`/recipes/${recipe.id}`}>
          <Recipe recipe={recipe} />
        </Link>
      ))}
    </div>
  );
};

export default Recipes;
