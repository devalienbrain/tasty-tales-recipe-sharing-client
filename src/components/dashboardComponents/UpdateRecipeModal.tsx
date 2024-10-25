import { useState } from "react";
import { Recipe } from "@/redux/types";
import { useUpdateRecipeMutation } from "@/redux/slices/recipeSlice";

interface UpdateRecipeModalProps {
  recipe: Recipe;
  onClose: () => void;
}

const UpdateRecipeModal: React.FC<UpdateRecipeModalProps> = ({
  recipe,
  onClose,
}) => {
  const [updateRecipe] = useUpdateRecipeMutation();
  const [formData, setFormData] = useState({
    title: recipe.title,
    description: recipe.description,
    cookingTime: recipe.cookingTime,
    image: recipe.image,
    instructions: recipe.instructions,
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleUpdate = async () => {
    try {
      // Update the recipe using the mutation
      await updateRecipe({ id: recipe._id, updatedRecipe: formData }).unwrap();
      onClose(); // Close modal after successful update
    } catch (error) {
      console.error("Failed to update recipe: ", error);
      alert("Failed to update recipe. Please try again.");
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white text-red-500 font-bold rounded-2xl p-8 w-full max-w-md">
        <h2 className="text-2xl font-black text-cyan-500 mb-4">
          Update Recipe
        </h2>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleInputChange}
          className="w-full p-2 mb-4 border border-gray-300 rounded-lg"
          placeholder="Title"
        />
        <label htmlFor="image">Image</label>
        <input
          type="text"
          name="image"
          value={formData.image}
          onChange={handleInputChange}
          className="w-full p-2 mb-4 border border-gray-300 rounded-lg"
          placeholder="Image URL"
        />
        <label htmlFor="description">Description</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleInputChange}
          className="w-full p-2 mb-4 border border-gray-300 rounded-lg"
          placeholder="Description"
        />
        <label htmlFor="instructions">Instructions</label>
        <textarea
          name="instructions"
          value={formData.instructions}
          onChange={handleInputChange}
          className="w-full p-2 mb-4 border border-gray-300 rounded-lg"
          placeholder="Instructions"
        />
        <label htmlFor="cookingTime">Cooking Time (minutes)</label>
        <input
          type="number"
          name="cookingTime"
          value={formData.cookingTime}
          onChange={handleInputChange}
          className="w-full p-2 mb-4 border border-gray-300 rounded-lg"
          placeholder="Cooking Time (minutes)"
        />
        <button
          onClick={handleUpdate}
          className="w-full bg-lime-500 text-white py-2 rounded-2xl hover:bg-lime-600 transition duration-300"
        >
          Update
        </button>
        <button
          onClick={onClose}
          className="w-full mt-2 bg-gray-300 text-black py-2 rounded-2xl hover:bg-gray-400 transition duration-300"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default UpdateRecipeModal;
