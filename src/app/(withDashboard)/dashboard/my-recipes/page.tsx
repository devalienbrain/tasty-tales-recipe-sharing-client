// "use client";

// import { useState } from "react";
// import { useAppSelector } from "@/redux/hook";
// import { TUser } from "@/redux/types";
// import { useGetRecipesQuery } from "@/redux/slices/recipeSlice";
// import { Recipe } from "@/redux/types";
// import Image from "next/image";
// import { FaEdit, FaTrashAlt } from "react-icons/fa";
// import { useRouter } from "next/navigation";
// import RecipeCard from "@/components/shared/RecipeCard"; // Importing RecipeCard
// import UpdateRecipeModal from "@/components/dashboardComponents/UpdateRecipeModal";
// import DeleteRecipeModal from "@/components/dashboardComponents/DeleteRecipeModal";

// const MyRecipes: React.FC = () => {
//   const user = useAppSelector(
//     (state) => state.user?.currentUser?.user
//   ) as TUser;

//   const { data: recipes = [] } = useGetRecipesQuery();
//   const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);
//   const [isUpdateModalOpen, setUpdateModalOpen] = useState(false);
//   const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);

//   const userRecipes = recipes.filter(
//     (recipe: Recipe) => recipe?.createdBy === user?._id
//   );
//   const router = useRouter();

//   const handleRecipeClick = (recipeId: string) => {
//     router.push(`/recipes/${recipeId}`);
//   };

//   const handleUpdateClick = (recipe: Recipe) => {
//     setSelectedRecipe(recipe);
//     setUpdateModalOpen(true);
//   };

//   const handleDeleteClick = (recipe: Recipe) => {
//     setSelectedRecipe(recipe);
//     setDeleteModalOpen(true);
//   };

//   return (
//     <div className="min-h-screen text-white flex flex-col-reverse lg:flex-row gap-8 rounded-2xl">
//       {/* Recipes Section */}
//       <div className="w-full p-5 rounded-2xl">
//         <h1 className="text-3xl font-black mb-6 text-center">
//           <span className="text-cyan-400">My</span> Recipes
//         </h1>
//         <hr className="hr-animation my-5" />
//         {userRecipes.length === 0 ? (
//           <div className="text-center text-red-400 text-sm">
//             No recipes added yet.
//           </div>
//         ) : (
//           <>
//             <p className="text-center mb-4">
//               Total Recipes: {userRecipes.length}
//             </p>
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//               {userRecipes.map((recipe: Recipe, index: number) => (
//                 <div key={recipe._id} className="relative">
//                   <RecipeCard
//                     recipe={recipe}
//                     onClick={() => handleRecipeClick(recipe._id)}
//                   />
//                   <div className="absolute bottom-2 right-2 flex gap-3">
//                     <button
//                       onClick={() => handleUpdateClick(recipe)}
//                       className="text-lime-400 hover:text-lime-500 text-lg"
//                     >
//                       <FaEdit />
//                     </button>
//                     <button
//                       onClick={() => handleDeleteClick(recipe)}
//                       className="text-red-400 hover:text-red-500 text-base"
//                     >
//                       <FaTrashAlt />
//                     </button>
//                   </div>
//                   <p className="absolute top-2 left-2 bg-black/75 font-bold rounded-full px-2 shadow">
//                     {index + 1}
//                   </p>
//                 </div>
//               ))}
//             </div>
//           </>
//         )}
//       </div>

//       {/* Update Modal */}
//       {isUpdateModalOpen && selectedRecipe && (
//         <UpdateRecipeModal
//           recipe={selectedRecipe}
//           onClose={() => setUpdateModalOpen(false)}
//         />
//       )}

//       {/* Delete Modal */}
//       {isDeleteModalOpen && selectedRecipe && (
//         <DeleteRecipeModal
//           recipe={selectedRecipe}
//           onClose={() => setDeleteModalOpen(false)}
//         />
//       )}
//     </div>
//   );
// };

// export default MyRecipes;

"use client";

import { useState } from "react";
import { useAppSelector } from "@/redux/hook";
import { TUser } from "@/redux/types";
import {
  useGetRecipesQuery,
  useUpdateRecipeMutation,
  useDeleteRecipeMutation,
} from "@/redux/slices/recipeSlice";
import { Recipe } from "@/redux/types";
import { useRouter } from "next/navigation";
import RecipeCard from "@/components/shared/RecipeCard";
import UpdateRecipeModal from "@/components/dashboardComponents/UpdateRecipeModal";
import DeleteRecipeModal from "@/components/dashboardComponents/DeleteRecipeModal";
import { FaEdit, FaTrashAlt } from "react-icons/fa";

const MyRecipes: React.FC = () => {
  const user = useAppSelector(
    (state) => state.user?.currentUser?.user
  ) as TUser;
  const { data: recipes = [] } = useGetRecipesQuery();
  const [updateRecipe] = useUpdateRecipeMutation();
  const [deleteRecipe] = useDeleteRecipeMutation();

  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);
  const [isUpdateModalOpen, setUpdateModalOpen] = useState(false);
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);

  const userRecipes = recipes.filter(
    (recipe: Recipe) => recipe?.createdBy === user?._id && !recipe.isDeleted
  );
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

  const confirmSoftDelete = async () => {
    if (selectedRecipe) {
      await updateRecipe({
        ...selectedRecipe,
        isDeleted: true,
      });
      setDeleteModalOpen(false);
      setSelectedRecipe(null);
    }
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
          <div className="text-center text-red-400 text-sm">
            No recipes added yet.
          </div>
        ) : (
          <>
            <p className="text-center mb-4">
              Total Recipes: {userRecipes.length}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {userRecipes.map((recipe: Recipe, index: number) => (
                <div key={recipe._id} className="relative">
                  <RecipeCard
                    recipe={recipe}
                    onClick={() => handleRecipeClick(recipe._id)}
                  />
                  <div className="absolute bottom-2 right-2 flex gap-3">
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
                  <p className="absolute top-2 left-2 bg-black/75 font-bold rounded-full px-2 shadow">
                    {index + 1}
                  </p>
                </div>
              ))}
            </div>
          </>
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
          onConfirm={confirmSoftDelete}
        />
      )}
    </div>
  );
};

export default MyRecipes;
