"use client";

import React, { useState } from "react";
import { useAppSelector } from "@/redux/hook";
import { useCreateRecipeMutation } from "@/redux/slices/recipeSlice";
import { useRouter } from "next/navigation";
import { FaPlus, FaMinus } from "react-icons/fa";

const AddRecipe: React.FC = () => {
  const currentUser = useAppSelector((state) => state.user?.currentUser?.user);
  const [createRecipe] = useCreateRecipeMutation();
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState(""); // Added description state
  const [instructions, setInstructions] = useState(""); // Added instructions state
  const [cookingTime, setCookingTime] = useState("");
  const [image, setImageUrl] = useState("");
  const [ingredients, setIngredients] = useState([{ name: "", quantity: "" }]);
  const [error, setError] = useState<string>("");

  const handleAddIngredient = () => {
    setIngredients([...ingredients, { name: "", quantity: "" }]);
  };

  const handleRemoveIngredient = (index: number) => {
    const newIngredients = ingredients.filter((_, i) => i !== index);
    setIngredients(newIngredients);
  };

  const handleIngredientChange = (
    index: number,
    field: string,
    value: string
  ) => {
    const newIngredients = [...ingredients];
    newIngredients[index][field] = value;
    setIngredients(newIngredients);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !title ||
      !description || // Check description
      !instructions || // Check instructions
      !cookingTime ||
      !image ||
      ingredients.some((ing) => !ing.name.trim() || !ing.quantity.trim())
    ) {
      setError("Please fill in all fields.");
      return;
    }

    const recipeData = {
      title,
      description, // Include description in the data sent to backend
      instructions, // Include instructions in the data sent to backend
      cookingTime: parseInt(cookingTime), // Convert cookingTime to number
      image,
      createdBy: currentUser?._id, // Use userId instead of user
      ingredients: ingredients.map((ing) => ing.name), // Only send names of ingredients
    };

    try {
      await createRecipe(recipeData).unwrap();
      router.push("/recipes");
    } catch (error) {
      console.error("Failed to create the recipe:", error);
      setError("Failed to create the recipe.");
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-black text-center mb-6">
        <span className="text-cyan-400">Add</span> Recipe
      </h1>
      <hr className="hr-animation" />
      {error && <p className="text-red-500 text-center">{error}</p>}
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="title" className="block font-semibold">
            Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="input input-bordered w-full"
            required
          />
        </div>
        <div>
          <label htmlFor="description" className="block font-semibold">
            Description
          </label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="textarea textarea-bordered w-full"
            required
          />
        </div>
        <div>
          <label htmlFor="instructions" className="block font-semibold">
            Instructions
          </label>
          <textarea
            id="instructions"
            value={instructions}
            onChange={(e) => setInstructions(e.target.value)}
            className="textarea textarea-bordered w-full"
            required
          />
        </div>
        <div>
          <label htmlFor="cookingTime" className="block font-semibold">
            Cooking Time (in minutes)
          </label>
          <input
            type="number"
            id="cookingTime"
            value={cookingTime}
            onChange={(e) => setCookingTime(e.target.value)}
            className="input input-bordered w-full"
            required
          />
        </div>
        <div>
          <label htmlFor="imageUrl" className="block font-semibold">
            Image URL
          </label>
          <input
            type="text"
            id="imageUrl"
            value={image}
            onChange={(e) => setImageUrl(e.target.value)}
            className="input input-bordered w-full"
            required
          />
        </div>
        <div>
          <label className="block font-semibold">Ingredients</label>
          {ingredients.map((ingredient, index) => (
            <div key={index} className="flex space-x-4 mb-2 items-center">
              <input
                type="text"
                placeholder="Ingredient Name"
                value={ingredient.name}
                onChange={(e) =>
                  handleIngredientChange(index, "name", e.target.value)
                }
                className="input input-bordered w-full"
                required
              />
              <input
                type="text"
                placeholder="Quantity"
                value={ingredient.quantity}
                onChange={(e) =>
                  handleIngredientChange(index, "quantity", e.target.value)
                }
                className="input input-bordered w-full"
                required
              />
              <button
                type="button"
                onClick={handleAddIngredient}
                className="btn btn-outline text-center"
              >
                <FaPlus />
              </button>
              <button
                type="button"
                onClick={() => handleRemoveIngredient(index)}
                className="btn btn-outline text-center text-red-500"
                disabled={index === 0}
              >
                <FaMinus />
              </button>
            </div>
          ))}
        </div>
        <button
          type="submit"
          className="btn bg-cyan-600 hover:bg-cyan-500 mt-4 w-full"
        >
          Add Recipe
        </button>
      </form>
    </div>
  );
};

export default AddRecipe;
