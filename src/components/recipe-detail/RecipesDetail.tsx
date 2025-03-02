import React from "react";
import { IRecipe } from "@/models/IRecipe";
import Link from "next/link";
import RecipeTags from "@/components/recipe-detail/RecipeTags";
import { getSingleAuthorizingResource } from "@/server-actions/getSingleAuthorizingResource";
import { IUser } from "@/models/IUser";

const RecipesDetail = async ({ recipe }: { recipe: IRecipe }) => {
  const user: IUser = await getSingleAuthorizingResource(
    recipe.userId.toString(),
    "users",
  );

  return (
    <div className="flex justify-center p-6">
      <div className="grid grid-cols-[1fr_2fr] gap-4 border border-gray-400">
        <figure>
          <img src={recipe.image} alt="Album" />
        </figure>

        <div className="p-3 second-cell">
          <h2 className="text-3xl font-bold mb-5">{recipe.name}</h2>
          <div className="flex gap-4">
            <p className="text-xl">
              <strong>Difficulty:</strong> {recipe.difficulty}
            </p>
            <p className="text-xl">
              <strong>Cuisine:</strong> {recipe.cuisine}
            </p>
          </div>
          <div className="flex gap-4">
            <RecipeTags array={recipe.ingredients} />
            <RecipeTags array={recipe.instructions} />
          </div>

          <Link href={`/users/${recipe.userId}`}>
            <h2 className="text-2xl font-semibold text-orange-600">
              {user.firstName} {user.lastName}
            </h2>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RecipesDetail;
