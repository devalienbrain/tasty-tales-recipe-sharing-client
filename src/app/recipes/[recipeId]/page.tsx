"use client";
import React from "react";
import Image from "next/image";
import { useGetRecipeByIdQuery } from "@/redux/slices/recipeSlice";

const RecipeDetailsPage = ({ params }: { params: { recipeId: string } }) => {
  const { recipeId } = params;
  console.log({ recipeId });
  const { data: recipe, isLoading, isError } = useGetRecipeByIdQuery(recipeId);

  if (isLoading)
    return (
      <div className="text-cyan-400 text-center">Loading recipe details...</div>
    );
  if (isError || !recipe)
    return (
      <div className="text-red-500 font-semibold text-center">
        Error loading recipe details!
      </div>
    );

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-extrabold text-center text-cyan-500 mb-4">
        {recipe.title}
      </h1>
      <hr className="hr-animation my-5" />
      <div className="relative w-full h-64 mb-4">
        <Image
          src={recipe.image}
          alt={recipe.title}
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>
      <p className="text-lg text-gray-700 mb-4">{recipe.description}</p>
      <h2 className="text-2xl font-semibold text-cyan-500 mb-2">Ingredients</h2>
      <ul className="list-disc pl-5 mb-4">
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index} className="text-gray-600">
            {ingredient}
          </li>
        ))}
      </ul>
      <h2 className="text-2xl font-semibold text-cyan-500 mb-2">
        Instructions
      </h2>
      <p className="text-gray-600 mb-4">{recipe.instructions}</p>
      <p className="text-gray-600 mb-2">
        Cooking Time: {recipe.cookingTime} minutes
      </p>
      <div className="flex justify-between items-center mt-4">
        <div>
          <span className="text-lime-400">
            Upvotes: <span className="font-bold">{recipe.upvotes}</span>
          </span>
          <span className="text-red-500 ml-4">
            Downvotes: <span className="font-bold">{recipe.downvotes}</span>
          </span>
        </div>
        <button className="px-4 py-2 bg-cyan-500 text-white rounded-lg hover:bg-cyan-400 transition duration-200">
          Upvote
        </button>
      </div>
    </div>
  );
};

export default RecipeDetailsPage;
