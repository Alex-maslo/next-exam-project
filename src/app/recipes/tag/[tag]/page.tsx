import React from "react";
import { getRecipesByTag } from "@/server-actions/getRecipesByTag";
import { IData } from "@/models/IData";
import { IRecipe } from "@/models/IRecipe";
import Recipe from "@/components/recipe/Recipe";

type Params = Promise<{ tag: string }>;

const Page = async (props: { params: Params }) => {
  const { tag } = await props.params;
  const data: IData = await getRecipesByTag(tag, "recipes");
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
    </>
  );
};

export default Page;
