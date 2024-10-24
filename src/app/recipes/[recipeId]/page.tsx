"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useAppSelector } from "@/redux/hook";
import {
  useGetRecipeByIdQuery,
  useUpdateRecipeMutation,
} from "@/redux/slices/recipeSlice";
import { FaStar } from "react-icons/fa";
import { BiUpvote, BiDownvote } from "react-icons/bi";
import { AiOutlineComment } from "react-icons/ai";

const RecipeDetailsPage = ({ params }: { params: { recipeId: string } }) => {
  const { recipeId } = params;
  const { data: recipe, isLoading, isError } = useGetRecipeByIdQuery(recipeId);
  const [updateRecipe] = useUpdateRecipeMutation();

  const user = useAppSelector((state) => state.user?.currentUser?.user);
  const [rating, setRating] = useState<number | null>(null);
  const [comment, setComment] = useState<string>("");
  const [comments, setComments] = useState(recipe?.comments || []);

  const handleRating = async (newRating: number) => {
    setRating(newRating);
    const updatedRecipe = {
      ...recipe,
      ratings: [...recipe.ratings, { userId: user?._id, rating: newRating }],
    };
    await updateRecipe(updatedRecipe);
  };

  const handleUpvote = async () => {
    const updatedRecipe = { ...recipe, upvotes: recipe.upvotes + 1 };
    await updateRecipe(updatedRecipe);
  };

  const handleDownvote = async () => {
    const updatedRecipe = { ...recipe, downvotes: recipe.downvotes + 1 };
    await updateRecipe(updatedRecipe);
  };

  const handleCommentSubmit = async () => {
    const newComment = {
      userId: user?._id,
      username: user?.name,
      content: comment,
      date: new Date().toLocaleString(),
    };
    const updatedRecipe = {
      ...recipe,
      comments: [...recipe.comments, newComment],
    };
    await updateRecipe(updatedRecipe);
    setComments([...comments, newComment]);
    setComment("");
  };

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

      {/* Rating Section */}
      <div className="mb-4">
        <h2 className="text-2xl font-semibold text-cyan-500">
          Rate this recipe
        </h2>
        <div className="flex space-x-2">
          {[1, 2, 3, 4, 5].map((star) => (
            <FaStar
              key={star}
              size={24}
              className={`cursor-pointer ${
                rating >= star ? "text-yellow-400" : "text-gray-400"
              }`}
              onClick={() => handleRating(star)}
            />
          ))}
        </div>
        <p className="text-sm text-gray-500">
          Average Rating: {recipe.averageRating || "N/A"}
        </p>
      </div>

      {/* Ingredients */}
      <h2 className="text-2xl font-semibold text-cyan-500 mb-2">Ingredients</h2>
      <ul className="list-disc pl-5 mb-4">
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index} className="text-gray-600">
            {ingredient}
          </li>
        ))}
      </ul>

      {/* Instructions */}
      <h2 className="text-2xl font-semibold text-cyan-500 mb-2">
        Instructions
      </h2>
      <p className="text-gray-600 mb-4">{recipe.instructions}</p>

      {/* Upvote/Downvote System */}
      <div className="flex justify-between items-center mt-4">
        <div>
          <span className="text-lime-400">
            Upvotes: <span className="font-bold">{recipe.upvotes}</span>
          </span>
          <span className="text-red-500 ml-4">
            Downvotes: <span className="font-bold">{recipe.downvotes}</span>
          </span>
        </div>
        <div className="flex space-x-2">
          <button
            onClick={handleUpvote}
            className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-400 transition duration-200 flex items-center"
          >
            <BiUpvote size={20} /> Upvote
          </button>
          <button
            onClick={handleDownvote}
            className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-400 transition duration-200 flex items-center"
          >
            <BiDownvote size={20} /> Downvote
          </button>
        </div>
      </div>

      {/* Comment Section */}
      <div className="mt-8">
        <h2 className="text-2xl font-semibold text-cyan-500 mb-2">Comments</h2>
        <div className="mb-4">
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg"
            placeholder="Add a comment"
          />
          <button
            onClick={handleCommentSubmit}
            className="mt-2 px-4 py-2 bg-cyan-500 text-white rounded-lg hover:bg-cyan-400 transition duration-200"
          >
            Submit
          </button>
        </div>
        <div className="space-y-4">
          {comments.map((c, index) => (
            <div key={index} className="bg-gray-100 p-4 rounded-lg shadow">
              <p className="text-gray-800">
                {c.username} ({c.date}):
              </p>
              <p className="text-gray-600">{c.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecipeDetailsPage;
