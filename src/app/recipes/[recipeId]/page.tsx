"use client";

import React, { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa";
import Image from "next/image"; // Import the next/image component
import {
  useGetRecipeByIdQuery,
  useUpdateRecipeMutation,
} from "@/redux/slices/recipeSlice";
import { useAppSelector } from "@/redux/hook";
import { Comment } from "@/redux/types";

const RecipeDetailsPage = () => {
  const { recipeId } = useParams<{ recipeId: string }>();
  const router = useRouter();

  const { data: recipe, isLoading, isError } = useGetRecipeByIdQuery(recipeId); // Always call this hook
  const [updateRecipe] = useUpdateRecipeMutation();
  const user = useAppSelector((state) => state.auth?.currentUser);
  const [comment, setComment] = useState<string>("");
  const [comments, setComments] = useState<Comment[]>([]);

  useEffect(() => {
    if (recipe) {
      // Convert string[] to Comment[] if necessary
      setComments(
        (recipe.comments || []).map((content) => ({
          userId: "unknown_user", // You can assign a default userId or fetch it
          username: "Anonymous", // Similarly, assign a default username or fetch it
          content,
          date: new Date().toISOString(),
        }))
      );
    }
  }, [recipe]);

  // Return early while loading or if there's an error
  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading recipe.</div>;

  const handleCommentSubmit = async () => {
    if (!recipe?._id) return;

    const newComment: Comment = {
      userId: user?._id || "unknown_user",
      username: user?.name || "Anonymous",
      content: comment,
      date: new Date().toISOString(),
    };

    const updatedRecipe = {
      ...recipe,
      comments: [...comments, newComment],
    };

    // Correct the object structure to match the mutation's expected format
    await updateRecipe({ id: recipeId, updatedRecipe: updatedRecipe });

    // Update local state for comments after submitting
    setComments((prevComments) => [...prevComments, newComment]);
    setComment("");
  };

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      {/* Back Arrow and Navigation */}
      <div
        className="flex items-center space-x-2 cursor-pointer"
        onClick={() => router.push("/recipes")}
      >
        <FaArrowLeft className="text-cyan-700 text-xl" />
        <p className="text-cyan-700 font-semibold">Back to Recipes</p>
      </div>

      {/* Recipe Title and Image */}
      <div className="text-center mt-4">
        <h1 className="text-4xl font-extrabold text-cyan-700">
          {recipe?.title}
        </h1>
        <div className="relative w-full h-80">
          <Image
            src={recipe?.image || "https://via.placeholder.com/400"}
            alt={recipe?.title || "Recipe Image"}
            layout="fill" // The image will fill the parent div's space
            objectFit="cover" // Maintain aspect ratio and cover the space
            className="rounded-lg shadow-lg"
          />
        </div>
        <p className="mt-4 text-lg text-gray-600">{recipe?.description}</p>
      </div>

      {/* Ingredients Section */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-800">Ingredients</h2>
        <ul className="list-disc list-inside mt-2">
          {recipe?.ingredients.map((ingredient, index) => (
            <li key={index} className="text-gray-700">
              {ingredient}
            </li>
          ))}
        </ul>
      </div>

      {/* Instructions Section */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-800">Instructions</h2>
        <p className="text-gray-700 mt-2">{recipe?.instructions}</p>
      </div>

      {/* Comments Section */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-800">Comments</h2>
        {comments.length > 0 ? (
          <div className="space-y-4 mt-4">
            {comments.map((c, index) => (
              <div key={index} className="p-4 border rounded-lg shadow-sm">
                <p className="font-bold text-gray-800">{c.username}</p>
                <p className="text-gray-600">{c.content}</p>
                <p className="text-gray-400 text-sm">
                  {new Date(c.date).toLocaleString()}
                </p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-600 mt-4">Be the first to comment!</p>
        )}
      </div>

      {/* Comment Form */}
      <div className="mt-6">
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Add a comment..."
          className="w-full p-4 border rounded-lg shadow-sm resize-none"
          rows={4}
        />
        <button
          onClick={handleCommentSubmit}
          className="mt-4 bg-blue-500 text-white p-3 w-full rounded-lg shadow-md hover:bg-blue-600"
        >
          Submit Comment
        </button>
      </div>
    </div>
  );
};

export default RecipeDetailsPage;
