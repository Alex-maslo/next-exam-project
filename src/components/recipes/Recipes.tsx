import React from "react";
import { getAuthorizingResources } from "@/server-actions/getAuthorizingResources";
import Recipe from "@/components/recipe/Recipe";
import { IData } from "@/models/IData";
import { IRecipe } from "@/models/IRecipe";
import Pagination from "@/components/pagination/Pagination";

const Recipes = async ({ page }: { page: number }) => {
  const data: IData = await getAuthorizingResources("recipes", page, 12);
  const recipes: IRecipe[] | undefined = data.recipes;

  if (!recipes) return <div>No recipes found</div>;

  return (
    <>
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {recipes.map((recipe) => (
            <Recipe key={recipe.id} recipe={recipe} />
          ))}
        </div>
      </div>
      <Pagination page={page} />
    </>
  );
};

export default Recipes;
