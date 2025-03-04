import React from "react";
import { IUser } from "@/models/IUser";
import { IData } from "@/models/IData";
import { getAuthorizingResources } from "@/server-actions/getAuthorizingResources";
import { IRecipe } from "@/models/IRecipe";
import Recipe from "@/components/recipe/Recipe";
import Link from "next/link";
import Image from "next/image";

const UserDetail = async ({ user }: { user: IUser }) => {
  const data: IData = await getAuthorizingResources("recipes");

  const recipes: IRecipe[] | undefined = data.recipes?.filter(
    (recipe) => recipe.userId === user.id,
  );

  return (
    <>
      <div className="grid grid-rows-2 justify-items-center gap-3 p-6">
        <div className="relative sm:flex  w-full max-w-[48rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
          <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
            <Image
              src={user.image}
              alt={user.firstName}
              className=" w-full object-cover"
              fill={true}
            />
          </div>
          <div className="p-6">
            <h6 className="mb-4 text-2xl font-semibold text-pink-500">
              {user.firstName} {user.lastName}
            </h6>

            <div className="flex flex-col gap-2">
              <p className="text-base font-normal text-gray-700 ">
                <strong>Age:</strong> {user.age}
              </p>
              <p className="text-base font-normal text-gray-700 ">
                <strong>Gender:</strong> {user.gender}
              </p>
              <p className="text-base font-normal text-gray-700 ">
                <strong>Birth Date:</strong> {user.birthDate}
              </p>
              <p className="text-base font-normal text-gray-700 ">
                <strong>Blood Group:</strong> {user.bloodGroup}
              </p>
              <p className="text-base font-normal text-gray-700 ">
                <strong>Phone:</strong> {user.phone}
              </p>
              <p className="text-base font-normal text-gray-700 ">
                <strong>Email:</strong> {user.email}
              </p>
              <p className="text-base font-normal text-gray-700 ">
                <strong>Height:</strong> {user.height} cm
              </p>
              <p className="text-base font-normal text-gray-700 ">
                <strong>Weight:</strong> {user.weight} kg
              </p>
            </div>
          </div>
        </div>

        <div className="relative w-full max-w-[48rem] ">
          {recipes?.length !== 0 && recipes !== undefined ? (
            recipes.map((recipe) => (
              <Link key={recipe.id} href={`/recipes/${recipe.id}`}>
                <Recipe recipe={recipe} />
              </Link>
            ))
          ) : (
            <>
              <div>
                <div className="alert alert-error text-center">
                  <h2>No recipes found</h2>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default UserDetail;
