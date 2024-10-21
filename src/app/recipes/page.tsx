"use client";
import { useGetRecipesQuery } from "@/redux/slices/recipeSlice";
import { Recipe } from "@/redux/types";
import { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const RecipeList = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [filteredRecipes, setFilteredRecipes] = useState<Recipe[]>([]);
  const { data: recipes = [], isLoading, isError } = useGetRecipesQuery();
  const [page, setPage] = useState<number>(1);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const router = useRouter(); // Initialize useRouter

  useEffect(() => {
    // Filter recipes based on search term
    if (searchTerm) {
      setFilteredRecipes(
        recipes.filter((recipe) =>
          recipe.title.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    } else {
      setFilteredRecipes(recipes);
    }
  }, [searchTerm, recipes]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const loadMoreRecipes = () => {
    // Infinite scroll logic to load more recipes (pagination simulation)
    if (page * 5 >= recipes.length) {
      setHasMore(false);
    } else {
      setPage((prev) => prev + 1);
    }
  };

  useEffect(() => {
    if (recipes.length > 0) {
      loadMoreRecipes();
    }
  }, [page, recipes]);

  const handleRecipeClick = (recipeId: string) => {
    console.log({ recipeId });
    router.push(`/recipes/${recipeId}`); // Navigate to the recipe details page
  };

  if (isLoading)
    return <div className="text-cyan-400 text-center">Loading recipes...</div>;
  if (isError)
    return (
      <div className="text-red-500 font font-semibold text-center">
        Error loading recipes!
      </div>
    );

  return (
    <div>
      <h1 className="text-5xl font-black text-center mb-6">
        <span className="text-cyan-400">Recipes</span> Feed
      </h1>
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
        {filteredRecipes.slice(0, page * 5).map((recipe) => (
          <div
            key={recipe._id}
            className="p-4 rounded-2xl shadow-md bg-black/10 cursor-pointer" // Add cursor pointer
            onClick={() => handleRecipeClick(recipe._id)} // Add click handler
          >
            <Image
              src={recipe.image}
              alt={recipe.title}
              width={500}
              height={300}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h2 className="text-xl font-extrabold text-cyan-500 mb-2">
              {recipe.title}
            </h2>
            <p>{recipe.description}</p>
            <p className="text-sm text-gray-600">
              Cooking Time: {recipe.cookingTime} mins
            </p>
            <p className="text-sm text-gray-600">Upvotes: {recipe.upvotes}</p>
            <p className="text-xs text-gray-700">Id: {recipe._id}</p>
          </div>
        ))}
      </div>

      {/* Infinite Scroll */}
      {hasMore && (
        <div className="mt-6 text-center">
          <button
            onClick={loadMoreRecipes}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg"
          >
            Load More
          </button>
        </div>
      )}

      {!hasMore && (
        <p className="text-center text-red-500 mt-6">
          No more recipes to load.
        </p>
      )}
    </div>
  );
};

export default RecipeList;
