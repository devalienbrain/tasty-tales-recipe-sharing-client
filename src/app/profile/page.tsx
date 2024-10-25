// "use client";

// import { useAppSelector } from "@/redux/hook";
// import { TUser } from "@/redux/types";
// import { useGetRecipesQuery } from "@/redux/slices/recipeSlice";
// import React from "react";
// import { useRouter } from "next/navigation";
// import { GiShadowFollower } from "react-icons/gi";
// import { RiUserFollowLine } from "react-icons/ri";
// import RecipeCard from "@/components/shared/RecipeCard";
// import Image from "next/image"; // Ensure correct import

// const Profile: React.FC = () => {
//   const user = useAppSelector(
//     (state) => state.user?.currentUser?.user
//   ) as TUser;

//   const { data: recipes = [] } = useGetRecipesQuery();
//   const userRecipes = recipes.filter(
//     (recipe) => recipe.createdBy === user?._id
//   );

//   const router = useRouter();

//   const handleRecipeClick = (recipeId: string) => {
//     router.push(`/recipes/${recipeId}`);
//   };

//   return (
//     <div className="min-h-screen bg-slate-950 text-white flex flex-col-reverse lg:flex-row gap-8 rounded-2xl">
//       {/* Recipes Section */}
//       <div className="w-full lg:w-4/5 p-5 rounded-2xl">
//         <h1 className="text-3xl font-black mb-6 text-center">
//           <span className="text-cyan-400">My</span> Recipes
//         </h1>
//         <hr className="hr-animation my-5" />
//         {userRecipes.length === 0 ? (
//           <div className="text-center text-red-400 text-sm">
//             No recipes added yet.
//           </div>
//         ) : (
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//             {userRecipes.map((recipe) => (
//               <RecipeCard
//                 key={recipe._id}
//                 recipe={recipe}
//                 onClick={handleRecipeClick}
//               />
//             ))}
//           </div>
//         )}
//       </div>
//       {/* Profile Section */}
//       <div className="w-full lg:w-1/5 flex flex-col items-center lg:items-start bg-slate-900 lg:sticky top-0 lg:pt-5 pl-3 rounded-2xl">
//         <h1 className="font-black text-2xl">
//           My <span className="text-cyan-400">Profiles</span>
//         </h1>
//         <hr className="my-5" />
//         {/* Profile Picture */}
//         {user?.photoUrl ? (
//           <Image
//             src={user.photoUrl}
//             alt={user.name}
//             width={128}
//             height={128}
//             className="rounded-full mb-4 border-4 border-blue-500 object-cover"
//           />
//         ) : (
//           <div className="w-32 h-32 rounded-full border-4 border-blue-500 flex items-center justify-center text-gray-400 mb-4">
//             No Image
//           </div>
//         )}

//         {/* User Info */}
//         <h1 className="text-3xl font-extrabold text-center lg:text-left mb-2">
//           {user?.name}
//         </h1>
//         <p className="text-lg mb-2 font-bold text-blue-400">{user?.role}</p>
//         <p className="text-sm text-gray-300 mb-4">{user?.email}</p>

//         {/* Followers/Following */}
//         <div className="flex flex-col gap-2 mb-4">
//           <div className="flex items-center gap-2">
//             <GiShadowFollower className="text-cyan-400" />
//             <span className="font-bold text-red-600">7</span> followers
//           </div>
//           <div className="flex items-center gap-2">
//             <RiUserFollowLine className="text-cyan-400" />
//             <span className="font-bold text-red-600">11</span> following
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Profile;

"use client";

import { useAppSelector } from "@/redux/hook";
import { TUser } from "@/redux/types";
import { useGetRecipesQuery } from "@/redux/slices/recipeSlice";
import React from "react";
import { useRouter } from "next/navigation";
import { GiShadowFollower } from "react-icons/gi";
import { RiUserFollowLine } from "react-icons/ri";
import RecipeCard from "@/components/shared/RecipeCard";
import Image from "next/image";

const Profile: React.FC = () => {
  const user = useAppSelector(
    (state) => state.user?.currentUser?.user
  ) as TUser;

  const { data: recipes = [] } = useGetRecipesQuery();
  const userRecipes = recipes.filter(
    (recipe) => recipe.createdBy === user?._id
  );

  const router = useRouter();

  const handleRecipeClick = (recipeId: string) => {
    router.push(`/recipes/${recipeId}`);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white flex flex-col lg:flex-row gap-10 p-5 rounded-2xl shadow-lg">
      {/* Recipes Section */}
      <div className="w-full lg:w-4/5 p-4 rounded-2xl shadow-md">
        <h1 className="text-4xl font-extrabold text-center text-cyan-400 mb-6">
          My Recipes
        </h1>
        <hr className="hr-animation" />
        {userRecipes.length === 0 ? (
          <div className="text-center text-red-500 font-semibold text-lg">
            No recipes added yet.
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {userRecipes.map((recipe) => (
              <RecipeCard
                key={recipe._id}
                recipe={recipe}
                onClick={handleRecipeClick}
              />
            ))}
          </div>
        )}
      </div>

      {/* Profile Section */}
      <div className="w-full lg:w-1/5 p-4 bg-slate-900 rounded-2xl shadow-lg flex flex-col items-center lg:items-start lg:sticky top-0">
        <h1 className="text-2xl font-black text-center lg:text-left mb-5 text-cyan-400">
          My Profile
        </h1>

        {/* Profile Picture */}
        {user?.photoUrl ? (
          <Image
            src={user.photoUrl}
            alt={user.name}
            width={128}
            height={128}
            className="rounded-full mb-4 border-4 border-cyan-400 shadow-md object-cover"
          />
        ) : (
          <div className="w-32 h-32 rounded-full border-4 border-cyan-400 flex items-center justify-center text-gray-400 mb-4">
            No Image
          </div>
        )}

        {/* User Info */}
        <h1 className="text-2xl font-extrabold text-center lg:text-left mb-2 text-gray-200">
          {user?.name}
        </h1>
        <p className="text-lg font-semibold text-blue-400 mb-1">{user?.role}</p>
        <p className="text-sm text-gray-400 mb-4">{user?.email}</p>

        {/* Followers/Following */}
        <div className="flex flex-col items-center lg:items-start gap-3">
          <div className="flex items-center gap-2 text-lg text-gray-300">
            <GiShadowFollower className="text-cyan-400" />
            <span className="font-bold text-pink-500">7</span> followers
          </div>
          <div className="flex items-center gap-2 text-lg text-gray-300">
            <RiUserFollowLine className="text-cyan-400" />
            <span className="font-bold text-pink-500">11</span> following
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
