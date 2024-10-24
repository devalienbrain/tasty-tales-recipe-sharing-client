import Image from "next/image";
import { Recipe } from "@/redux/types";

interface RecipeCardProps {
  recipe: Recipe;
  onClick: (id: string) => void;
}

const RecipeCard: React.FC<RecipeCardProps> = ({ recipe, onClick }) => {
  return (
    <div
      className="p-4 rounded-2xl shadow-md bg-black/10 cursor-pointer"
      onClick={() => onClick(recipe._id)} // Pass the click handler as prop
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
  );
};

export default RecipeCard;

