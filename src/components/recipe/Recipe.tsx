import React from "react";
import { IRecipe } from "@/models/IRecipe";

const Recipe = ({ recipe }: { recipe: IRecipe }) => {
  return (
    <div className=" flex flex-col justify-between h-[24vh] border border-gray-300 rounded-lg p-6 shadow-md ">
      <h2 className="text-xl font-semibold text-red-500">{recipe.name}</h2>
      <div>
        <ul className="flex flex-wrap gap-2">
          {recipe.tags.map((tag, index) => (
            <li className="text-blue-600 font-semibold" key={index}>
              {tag}{" "}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Recipe;
