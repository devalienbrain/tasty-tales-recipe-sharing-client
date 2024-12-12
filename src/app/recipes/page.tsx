"use client";
import { useGetRecipesQuery } from "@/redux/slices/recipeSlice";
import RecipeCard from "@/components/shared/RecipeCard";
import { useRouter } from "next/navigation";

const RecipeList = () => {
  const { data: recipes, isLoading, isError } = useGetRecipesQuery();
  const router = useRouter(); // Initialize router for navigation

  const handleRecipeClick = (recipeId: string) => {
    console.log(recipeId);
    router.push(`/recipes/${recipeId}`); // Navigate to the recipe details page
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
        <span className="text-cyan-400">Recipes</span> Feed
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {recipes?.map((recipe) => (
          <RecipeCard
            key={recipe._id}
            recipe={recipe}
            onClick={handleRecipeClick} // Pass the click handler
          />
        ))}
      </div>
    </div>
  );
};

export default RecipeList;
