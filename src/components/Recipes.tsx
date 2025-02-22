import React from "react";
import { getAuthorizingResources } from "@/server-actions/getAuthorizingResources";
import Link from "next/link";
import { IRecipe } from "@/models/IRecipe";
import Recipe from "@/components/Recipe";

const Recipes = async () => {
  const data = await getAuthorizingResources("recipes");
  const recipes: IRecipe[] = data.recipes;
  recipes.sort((a, b) => a.userId - b.userId);

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
