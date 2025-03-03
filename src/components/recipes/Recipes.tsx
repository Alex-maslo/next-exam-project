import React from "react";
import { getAuthorizingResources } from "@/server-actions/getAuthorizingResources";
import Link from "next/link";
import Recipe from "@/components/recipe/Recipe";
import { IData } from "@/models/IData";
import { IRecipe } from "@/models/IRecipe";
import Pagination from "@/components/pagination/Pagination";
import Test from "@/components/recipe/Test";

const Recipes = async ({ page }: { page: number }) => {
  const data: IData = await getAuthorizingResources("recipes", page, 12);
  const recipes: IRecipe[] | undefined = data.recipes;

  if (!recipes) {
    return <div>No recipes found</div>;
  }

  return (
    <>
      <div className="grid grid-cols-4  gap-2 p-2">
        {recipes.map((recipe) => (
          <Link key={recipe.id} href={`/recipes/${recipe.id}`}>
            <Recipe recipe={recipe} />
          </Link>
        ))}
      </div>
      <Pagination page={page} />
    </>
  );
};

export default Recipes;
