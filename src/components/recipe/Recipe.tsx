import React from "react";
import { IRecipe } from "@/models/IRecipe";
import Link from "next/link";

const Recipe = ({ recipe }: { recipe: IRecipe }) => {
  return (
    <div className="bg-white shadow-md rounded-lg border border-gray-200 flex flex-col h-52 gap-3">
      <Link
        className="flex flex-col h-full w-full"
        href={`/recipes/${recipe.id}`}
      >
        <div className="flex-grow bg-blue-600 text-white flex items-center justify-center rounded-t-lg">
          <h3 className="text-xl font-semibold m-4 text-center">
            {recipe.name}
          </h3>
        </div>
      </Link>

      <div className="flex flex-wrap gap-2 p-4">
        {recipe.tags.map((tag, index) => (
          <Link key={index} href={`/recipes/tag/${tag}`}>
            <span className="bg-blue-100 text-blue-600 text-sm font-medium px-2 py-1 rounded-full">
              {tag}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Recipe;
