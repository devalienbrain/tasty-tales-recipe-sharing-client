// "use client";
// import {
//   useGetRecipesQuery,
//   useUpdateRecipeMutation,
// } from "@/redux/slices/recipeSlice"; // Import the mutation for updating recipes
// import { Recipe } from "@/redux/types";
// import { useState, useEffect } from "react";
// import { useRouter } from "next/navigation";
// import RecipeCard from "@/components/shared/RecipeCard";

// const AllRecipes = () => {
//   const [searchTerm, setSearchTerm] = useState<string>("");
//   const { data: recipes = [], isLoading, isError } = useGetRecipesQuery();
//   const [updateRecipe] = useUpdateRecipeMutation(); // Hook for updating recipes
//   const router = useRouter(); // Initialize useRouter

//   useEffect(() => {
//     // Filter recipes based on search term
//   }, [searchTerm, recipes]);

//   const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setSearchTerm(e.target.value);
//   };

//   const handleRecipeClick = (recipeId: string) => {
//     router.push(`/recipes/${recipeId}`); // Navigate to the recipe details page
//   };

//   const togglePublishStatus = async (recipe: Recipe) => {
//     // Toggle the publish status of a recipe
//     const updatedRecipe = { ...recipe, isPublished: !recipe.isPublished }; // Assuming recipe has an isPublished field
//     try {
//       await updateRecipe(updatedRecipe).unwrap(); // Call the update recipe mutation
//     } catch (error) {
//       console.error("Failed to update recipe: ", error);
//     }
//   };

//   if (isLoading)
//     return <div className="text-cyan-400 text-center">Loading recipes...</div>;
//   if (isError)
//     return (
//       <div className="text-red-500 font font-semibold text-center">
//         Error loading recipes!
//       </div>
//     );

//   return (
//     <div>
//       <h1 className="text-5xl font-black text-center mb-6">
//         <span className="text-cyan-400">Recipes</span> Management
//       </h1>
//       <p className="text-center mb-4">Total Recipes: {recipes.length}</p>
//       {/* Search Bar */}
//       <div className="mb-4">
//         <input
//           type="text"
//           value={searchTerm}
//           onChange={handleSearchChange}
//           placeholder="Search for recipes..."
//           className="py-3 px-5 rounded-2xl shadow-md w-full"
//         />
//       </div>

//       {/* Recipe List */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//         {recipes
//           .filter((recipe) =>
//             recipe.title.toLowerCase().includes(searchTerm.toLowerCase())
//           )
//           .map((recipe, index) => (
//             <div key={recipe._id} className="relative">
//               <RecipeCard
//                 recipe={recipe}
//                 onClick={handleRecipeClick} // Pass the click handler to RecipeCard
//               />
//               <div className="absolute bottom-2 right-2">
//                 <button
//                   onClick={() => togglePublishStatus(recipe)}
//                   className={`px-3 py-1 rounded-lg transition-all duration-300 ${
//                     recipe.isPublished ? "bg-red-500" : "bg-green-500"
//                   } text-white`}
//                 >
//                   {recipe.isPublished ? "Unpublish" : "Publish"}
//                 </button>
//               </div>
//               <p className="absolute top-2 left-2 bg-white rounded-full px-2 shadow">
//                 {index + 1}
//               </p>{" "}
//               {/* Serial number for the recipe card */}
//             </div>
//           ))}
//       </div>
//     </div>
//   );
// };

// export default AllRecipes;

"use client";
import {
  useGetRecipesQuery,
  useUpdateRecipeMutation,
} from "@/redux/slices/recipeSlice"; // Import the query and mutation hooks
import { Recipe } from "@/redux/types"; // Import your Recipe type
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import RecipeCard from "@/components/shared/RecipeCard"; // Import the RecipeCard component

const AllRecipes = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const { data: recipes = [], isLoading, isError } = useGetRecipesQuery();
  const [updateRecipe] = useUpdateRecipeMutation(); // Hook for updating recipes
  const router = useRouter(); // Initialize useRouter

  useEffect(() => {
    // This is where you could add any side effects based on searchTerm or recipes if needed
  }, [searchTerm, recipes]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value); // Update search term based on user input
  };

  const handleRecipeClick = (recipeId: string) => {
    router.push(`/recipes/${recipeId}`); // Navigate to the recipe details page
  };

  const togglePublishStatus = async (recipe: Recipe) => {
    // Toggle the publish status of a recipe
    const updatedRecipe = { ...recipe, isPublished: !recipe.isPublished }; // Assuming recipe has an isPublished field
    try {
      await updateRecipe(updatedRecipe).unwrap(); // Call the update recipe mutation
    } catch (error) {
      console.error("Failed to update recipe: ", error);
    }
  };

  if (isLoading)
    return <div className="text-cyan-400 text-center">Loading recipes...</div>;
  if (isError)
    return (
      <div className="text-red-500 font-semibold text-center">
        Error loading recipes!
      </div>
    );

  return (
    <div>
      <h1 className="text-5xl font-black text-center mb-6">
        <span className="text-cyan-400">Recipes</span> Management
      </h1>
      <p className="text-center mb-4">Total Recipes: {recipes.length}</p>

      {/* Search Bar */}
      <div className="mb-4">
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="Search for recipes..."
          className="py-3 px-5 rounded-2xl shadow-md w-full"
        />
      </div>

      {/* Recipe List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {recipes
          .filter((recipe) =>
            recipe.title.toLowerCase().includes(searchTerm.toLowerCase())
          )
          .map((recipe, index) => (
            <div key={recipe._id} className="relative">
              <RecipeCard
                recipe={recipe}
                onClick={handleRecipeClick} // Pass the click handler to RecipeCard
              />
              <div className="absolute bottom-2 right-2">
                <button
                  onClick={() => togglePublishStatus(recipe)}
                  className={`px-3 py-1 rounded-lg transition-all duration-300 ${
                    recipe.isPublished ? "bg-red-500" : "bg-green-500"
                  } text-white`}
                >
                  {recipe.isPublished ? "Unpublish" : "Publish"}
                </button>
              </div>
              <p className="absolute top-2 left-2 bg-black/75 font-bold rounded-full px-2 shadow">
                {index + 1}
              </p>{" "}
              {/* Serial number for the recipe card */}
            </div>
          ))}
      </div>
    </div>
  );
};

export default AllRecipes;
