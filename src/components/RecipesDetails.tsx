import React from "react";
import { IRecipe } from "@/models/IRecipe";

const RecipesDetails = ({ recipe }: { recipe: IRecipe }) => {
  return (
    <div className="flex justify-center p-6">
      <div className="card w-[300px] lg:card-side bg-base-100 lg:w-2/4 shadow-xl">
        <figure>
          <img src={recipe.image} alt="Album" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{recipe.name}</h2>
          <p>{recipe.difficulty}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Listen</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipesDetails;
