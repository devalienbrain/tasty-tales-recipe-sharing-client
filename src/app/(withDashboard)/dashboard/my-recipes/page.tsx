"use client";

import { useAppSelector } from "@/redux/hook";
import { TUser } from "@/redux/types";
import { useGetRecipesQuery } from "@/redux/slices/recipeSlice";
import { Recipe } from "@/redux/types";
import Image from "next/image";
import { FaEdit } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { GiShadowFollower } from "react-icons/gi";
import { RiUserFollowLine } from "react-icons/ri";

const Profile: React.FC = () => {
  const user = useAppSelector(
    (state) => state.user?.currentUser?.user
  ) as TUser;

  const { data: recipes = [] } = useGetRecipesQuery();
  const userRecipes = recipes.filter((recipe: Recipe) => recipe?.createdBy === user?._id);

  const router = useRouter();

  const handleRecipeClick = (recipeId: string) => {
    router.push(`/recipes/${recipeId}`);
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
                onClick={() => handleRecipeClick(recipe._id)}
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
                <p className="text-sm text-gray-600">Cooking Time: {recipe.cookingTime} mins</p>
                <p className="text-sm text-gray-600">Upvotes: {recipe.upvotes}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
