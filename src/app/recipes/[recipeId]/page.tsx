"use client";
import React, { useState, useEffect } from "react";
import { useParams, Navigate } from "react-router-dom";
import {
  useGetRecipeByIdQuery,
  useUpdateRecipeMutation,
} from "@/redux/slices/recipeSlice";
import { useAppSelector } from "@/redux/hook";
import { Comment, Recipe } from "@/redux/types";

const RecipeDetailsPage = () => {
  const { recipeId } = useParams<{ recipeId: string | undefined }>();
  const {
    data: recipe,
    isLoading,
    isError,
  } = useGetRecipeByIdQuery(recipeId || ""); // Pass a default value if recipeId is undefined
  const [updateRecipe] = useUpdateRecipeMutation();
  const user = useAppSelector((state) => state.auth?.currentUser);
  const [comment, setComment] = useState<string>("");

  // Initialize comments state based on recipe comments if available
  const [comments, setComments] = useState<Comment[]>(() => {
    return (
      recipe?.comments.map((comment) => ({
        userId: comment.userId || "unknown_user",
        username: comment.username || "Anonymous",
        content: comment.content || "",
        date: comment.date || new Date().toLocaleString(),
      })) || []
    );
  });

  useEffect(() => {
    // Update comments when recipe changes
    if (recipe) {
      setComments(
        recipe.comments.map((comment) => ({
          userId: comment?.userId || "unknown_user",
          username: comment?.username || "Anonymous",
          content: comment?.content || "",
          date: comment?.date || new Date().toLocaleString(),
        }))
      );
    }
  }, [recipe]);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading recipe.</div>;
  if (!recipeId) return <Navigate to="/404" />; // Redirect if recipeId is undefined

  const handleCommentSubmit = async () => {
    if (!recipe?._id) {
      console.error("Recipe ID is not available.");
      return;
    }

    const newComment: Comment = {
      userId: user?._id || "unknown_user",
      username: user?.name || "Anonymous",
      content: comment,
      date: new Date().toLocaleString(),
    };

    const updatedRecipe: Partial<Recipe> = {
      comments: [...(recipe?.comments || []), newComment],
    };

    await updateRecipe({ id: recipeId, recipe: updatedRecipe });

    // Update the local comments state
    setComments((prevComments) => [...prevComments, newComment]);
    setComment("");
  };

  return (
    <div className="recipe-details">
      <h1 className="text-2xl font-bold">{recipe?.title}</h1>
      <p>{recipe?.description}</p>
      {/* Display the recipe details here */}

      <h2 className="text-xl font-semibold">Comments</h2>
      {comments.map((comment) => (
        <div key={comment.userId} className="comment">
          <p className="font-bold">{comment.username}</p>
          <p>{comment.content}</p>
          <p className="text-gray-500">{comment.date}</p>
        </div>
      ))}

      <div className="comment-form">
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Add a comment..."
          className="border p-2"
        />
        <button
          onClick={handleCommentSubmit}
          className="bg-blue-500 text-white p-2 mt-2"
        >
          Submit Comment
        </button>
      </div>
    </div>
  );
};

export default RecipeDetailsPage;
// const RecipeDetailsPage = () => {};
// export default RecipeDetailsPage;
