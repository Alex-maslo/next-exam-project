import React from "react";
import { IRecipe } from "@/models/IRecipe";

const Recipe = ({ recipe }: { recipe: IRecipe }) => {
  return (
    <div className="h-full">
      <div className="flex justify-between border border-gray-200 p-2">
        <div className="flex min-w-0 gap-x-4">
          <div className="min-w-0 flex-auto">
            <p className="text-xl/8 font-semibold text-gray-900">
              {recipe.name}
            </p>
            <ul className="list-disc p-6">
              {recipe.tags.map((tag, index) => (
                <li key={index}>{tag}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recipe;
