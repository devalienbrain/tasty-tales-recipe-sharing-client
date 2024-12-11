// import Image from "next/image";
// import { Recipe } from "@/redux/types";

// interface RecipeCardProps {
//   recipe: Recipe;
//   onClick: (id: string) => void;
// }

// const RecipeCard: React.FC<RecipeCardProps> = ({ recipe, onClick }) => {
//   return (
//     <div
//       className="p-4 rounded-2xl shadow-md bg-black/10 cursor-pointer transition transform hover:scale-105 hover:bg-black/20"
//       onClick={() => onClick(recipe._id)}
//     >
//       <Image
//         src={recipe.image}
//         alt={recipe.title}
//         width={500}
//         height={300}
//         className="w-full h-48 object-cover rounded-lg mb-4"
//       />
//       <h2 className="text-xl font-extrabold text-cyan-500 mb-2 truncate">
//         {recipe.title}
//       </h2>
//       <p className="mb-2 text-gray-800 line-clamp-2">{recipe.description}</p>
//       <div className="flex justify-between text-sm text-gray-600 mt-2">
//         <p>Cooking Time: {recipe.cookingTime} mins</p>
//         <p>Upvotes: {recipe.upvotes}</p>
//       </div>
//       <p className="text-xs text-gray-500 mt-1">ID: {recipe._id}</p>
//     </div>
//   );
// };

// export default RecipeCard;


import Image from "next/image";
import { Recipe } from "@/redux/types";

interface RecipeCardProps {
  recipe: Recipe;
  onClick: (id: string) => void;
}

const RecipeCard: React.FC<RecipeCardProps> = ({ recipe, onClick }) => {
  return (
    <div
      className="p-4 rounded-2xl shadow-md bg-black/10 cursor-pointer transition transform hover:scale-105 hover:bg-black/20"
      onClick={() => onClick(recipe._id)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && onClick(recipe._id)}
    >
      <Image
        src={recipe.image || "/placeholder-image.jpg"}
        alt={recipe.title || "Recipe Image"}
        width={500}
        height={300}
        className="w-full h-48 object-cover rounded-lg mb-4"
      />
      <h2 className="text-xl font-extrabold text-cyan-500 mb-2 truncate">
        {recipe.title || "Untitled Recipe"}
      </h2>
      <p className="mb-2 text-gray-800 line-clamp-2">
        {recipe.description || "No description available."}
      </p>
      <div className="flex justify-between text-sm text-gray-600 mt-2">
        <p>Cooking Time: {recipe.cookingTime || "N/A"} mins</p>
        <p>Upvotes: {recipe.upvotes || 0}</p>
      </div>
      <p className="text-xs text-gray-500 mt-1">ID: {recipe._id}</p>
    </div>
  );
};

export default RecipeCard;
