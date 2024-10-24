"use client";

import { useState } from "react";
import { useAppSelector } from "@/redux/hook";
import { TUser } from "@/redux/types";
import { useGetRecipesQuery, useUpdateRecipeMutation, useDeleteRecipeMutation } from "@/redux/slices/recipeSlice";
import { Recipe } from "@/redux/types";
import Image from "next/image";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { GiShadowFollower } from "react-icons/gi";
import { RiUserFollowLine } from "react-icons/ri";
import UpdateRecipeModal from "@/components/dashboardComponents/UpdateRecipeModal";
import DeleteRecipeModal from "@/components/dashboardComponents/DeleteRecipeModal";


const MyRecipes: React.FC = () => {
  const user = useAppSelector(
    (state) => state.user?.currentUser?.user
  ) as TUser;

  const { data: recipes = [] } = useGetRecipesQuery();
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);
  const [isUpdateModalOpen, setUpdateModalOpen] = useState(false);
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);

  const userRecipes = recipes.filter((recipe: Recipe) => recipe?.createdBy === user?._id);
  const router = useRouter();

  const handleRecipeClick = (recipeId: string) => {
    router.push(`/recipes/${recipeId}`);
  };

  const handleUpdateClick = (recipe: Recipe) => {
    setSelectedRecipe(recipe);
    setUpdateModalOpen(true);
  };

  const handleDeleteClick = (recipe: Recipe) => {
    setSelectedRecipe(recipe);
    setDeleteModalOpen(true);
  };

  return (
    <div className="min-h-screen text-white flex flex-col-reverse lg:flex-row gap-8 rounded-2xl">
      {/* Recipes Section */}
      <div className="w-full p-5 rounded-2xl">
        <h1 className="text-3xl font-black mb-6 text-center">
          <span className="text-cyan-400">My</span> Recipes
        </h1>
        <hr className="hr-animation my-5" />
        {userRecipes.length === 0 ? (
          <div className="text-center text-red-400 text-sm">No recipes added yet.</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {userRecipes.map((recipe: Recipe) => (
              <div
                key={recipe._id}
                className="p-4 rounded-2xl shadow-md bg-gray-800 cursor-pointer hover:shadow-lg transition duration-300"
              >
                <Image
                  src={recipe.image}
                  alt={recipe.title}
                  width={500}
                  height={300}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                  onClick={() => handleRecipeClick(recipe._id)}
                />
                <h2 className="text-xl font-extrabold text-cyan-500 mb-2">
                  {recipe.title}
                </h2>
                <p>{recipe.description}</p>
                <p className="text-sm text-gray-600">Cooking Time: {recipe.cookingTime} mins</p>
                <p className="text-sm text-gray-600">Upvotes: {recipe.upvotes}</p>
                <div className="flex justify-center gap-5 items-center mt-4 bg-slate-950 p-3 rounded-2xl">
                  <button
                    onClick={() => handleUpdateClick(recipe)}
                    className="text-lime-400 hover:text-lime-500 text-lg"
                  >
                    <FaEdit />
                  </button>
                  <button
                    onClick={() => handleDeleteClick(recipe)}
                    className="text-red-400 hover:text-red-500 text-base"
                  >
                    <FaTrashAlt />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Update Modal */}
      {isUpdateModalOpen && selectedRecipe && (
        <UpdateRecipeModal
          recipe={selectedRecipe}
          onClose={() => setUpdateModalOpen(false)}
        />
      )}

      {/* Delete Modal */}
      {isDeleteModalOpen && selectedRecipe && (
        <DeleteRecipeModal
          recipe={selectedRecipe}
          onClose={() => setDeleteModalOpen(false)}
        />
      )}
    </div>
  );
};

export default MyRecipes;
